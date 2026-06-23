const form = document.querySelector("#requestForm");
const authScreen = document.querySelector("#authScreen");
const authForm = document.querySelector("#authForm");
const authName = document.querySelector("#authName");
const authPhone = document.querySelector("#authPhone");
const signupButton = document.querySelector("#signupButton");
const authStatus = document.querySelector("#authStatus");
const appRoot = document.querySelector("#appRoot");
const logoutButton = document.querySelector("#logoutButton");
const pageTitle = document.querySelector("#page-title");
const previewTitle = document.querySelector("#preview-title");
const openContractManagementButton = document.querySelector("#openContractManagementButton");
const copyCustomerManagementButton = document.querySelector("#copyCustomerManagementButton");
const printCustomerManagementButton = document.querySelector("#printCustomerManagementButton");
const backToMainButton = document.querySelector("#backToMainButton");
const output = document.querySelector("#output");
const copyButton = document.querySelector("#copyButton");
const kakaoCopyButton = document.querySelector("#kakaoCopyButton");
const insurerCopyButton = document.querySelector("#insurerCopyButton");
const pdfButton = document.querySelector("#pdfButton");
const excelButton = document.querySelector("#excelButton");
const copyStatus = document.querySelector("#copyStatus");
const warningList = document.querySelector("#warningList");
const savedCustomerSelect = document.querySelector("#savedCustomerSelect");
const customerSearchInput = document.querySelector("#customerSearchInput");
const customerSearchResults = document.querySelector("#customerSearchResults");
const saveCustomerButton = document.querySelector("#saveCustomerButton");
const loadCustomerButton = document.querySelector("#loadCustomerButton");
const newCustomerButton = document.querySelector("#newCustomerButton");
const deleteCustomerButton = document.querySelector("#deleteCustomerButton");
const managerStatus = document.querySelector("#managerStatus");
const contractList = document.querySelector("#contractList");
const contractTemplate = document.querySelector("#contractTemplate");
const addContractButton = document.querySelector("#addContractButton");
const comparisonList = document.querySelector("#comparisonList");
const addComparisonButton = document.querySelector("#addComparisonButton");
const noticeList = document.querySelector("#noticeList");
const noticeTemplate = document.querySelector("#noticeTemplate");
const addNoticeButton = document.querySelector("#addNoticeButton");
const fiveYearDetails = document.querySelector("#fiveYearDetails");
const fiveYearList = document.querySelector("#fiveYearList");
const fiveYearTemplate = document.querySelector("#fiveYearTemplate");
const addFiveYearButton = document.querySelector("#addFiveYearButton");
const tenYearDetails = document.querySelector("#tenYearDetails");
const tenYearList = document.querySelector("#tenYearList");
const tenYearTemplate = document.querySelector("#tenYearTemplate");
const addTenYearButton = document.querySelector("#addTenYearButton");
const majorOtherToggle = document.querySelector("#majorOtherToggle");
const majorOther = document.querySelector("#majorOther");
const medicationDetails = document.querySelector("#medicationDetails");
const coverageOtherToggle = document.querySelector("#coverageOtherToggle");
const coverageOther = document.querySelector("#coverageOther");
const premiumCustom = document.querySelector("#premiumCustom");
const purposeOtherToggle = document.querySelector("#purposeOtherToggle");
const purposeOther = document.querySelector("#purposeOther");

const fields = {
  designNumber: document.querySelector("#designNumber"),
  customerName: document.querySelector("#customerName"),
  gender: document.querySelector("#gender"),
  residentNumber: document.querySelector("#residentNumber"),
  job: document.querySelector("#job"),
  phoneCarrier: document.querySelector("#phoneCarrier"),
  address: document.querySelector("#address"),
  email: document.querySelector("#email"),

  insuredName: document.querySelector("#insuredName"),
  contractorName: document.querySelector("#contractorName"),
  legalGuardian: document.querySelector("#legalGuardian"),
  beneficiary: document.querySelector("#beneficiary"),
  relationship: document.querySelector("#relationship"),

  planType: document.querySelector("#planType"),

  requestItems: document.querySelector("#requestItems"),

  medDisease: document.querySelector("#medDisease"),
  medName: document.querySelector("#medName"),
  medPeriod: document.querySelector("#medPeriod"),
};

let noticeIdCounter = 0;
let fiveYearIdCounter = 0;
let tenYearIdCounter = 0;
let contractIdCounter = 0;
const customerStorageKey = "insuranceDisclosureCustomers";
const autoSaveDraftKey = "insuranceDisclosureAutoSaveDraft";
const localAccountStorageKey = "insuranceDisclosureLocalAccounts";
let autoSaveTimer = null;
let cloudSyncTimer = null;
let supabaseClient = null;
let currentSession = null;
let isHydratingCloud = false;
let localMode = false;
let activeUserId = "";

function getCheckedValues(selector) {
  return [...document.querySelectorAll(selector)]
    .filter((item) => item.checked)
    .map((item) => item.value);
}

function getFieldValue(key) {
  return fields[key]?.value?.trim() ?? "";
}

function setFieldValue(key, value) {
  if (fields[key]) {
    fields[key].value = value ?? "";
  }
}

function normalizeRecurrence(value) {
  if (value === "1년 이내 재발") return "재발";
  if (value === "확인필요") return "지속치료";
  return value || "초진";
}

function normalizeNoticeStatus(recurrence, recovery) {
  if (recovery && recovery !== "완치") return recovery;
  return normalizeRecurrence(recurrence || recovery);
}

function clearFields() {
  Object.values(fields).forEach((field) => {
    if (field) {
      field.value = "";
    }
  });
}

function setRadioValue(name, value) {
  document.querySelectorAll(`input[name="${name}"]`).forEach((radio) => {
    radio.checked = radio.value === value;
  });
}

function setCheckedValues(name, values = []) {
  document.querySelectorAll(`input[name="${name}"]`).forEach((checkbox) => {
    checkbox.checked = values.includes(checkbox.value);
  });
}

function getScopedStorageKey(baseKey) {
  const userId = currentSession?.user?.id;
  return userId ? `${baseKey}:${userId}` : baseKey;
}

function getStoredCustomers() {
  try {
    return JSON.parse(localStorage.getItem(getScopedStorageKey(customerStorageKey))) ?? [];
  } catch {
    return [];
  }
}

function setStoredCustomers(customers) {
  localStorage.setItem(getScopedStorageKey(customerStorageKey), JSON.stringify(customers));
  scheduleCloudSync();
}

function showManagerStatus(message) {
  managerStatus.textContent = message;
  window.setTimeout(() => {
    managerStatus.textContent = "";
  }, 2000);
}

function isSupabaseConfigured() {
  const config = window.INSURANCE_APP_CONFIG ?? {};
  return Boolean(config.supabaseUrl && config.supabaseAnonKey && window.supabase?.createClient);
}

function normalizeAuthPhone(value) {
  return String(value ?? "").replace(/\D/g, "");
}

function normalizeAuthName(value) {
  return String(value ?? "").replace(/\s+/g, "").toLowerCase();
}

function getPhoneAuthEmail() {
  const phone = normalizeAuthPhone(authPhone.value);
  return phone.length >= 10 ? `${phone}@phone.insure.local` : "";
}

function getPhoneAuthPassword() {
  return `Insure-${normalizeAuthPhone(authPhone.value)}-${encodeURIComponent(normalizeAuthName(authName.value))}`;
}

function readJsonStorage(key, fallback = null) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function migrateLegacyDataToCurrentAccount() {
  const customerKey = getScopedStorageKey(customerStorageKey);
  const draftKey = getScopedStorageKey(autoSaveDraftKey);
  const existingCustomers = readJsonStorage(customerKey, []);
  const legacyCustomers = readJsonStorage(customerStorageKey, []);

  if (!existingCustomers.length && legacyCustomers.length) {
    localStorage.setItem(customerKey, JSON.stringify(legacyCustomers));
  }

  if (!localStorage.getItem(draftKey) && localStorage.getItem(autoSaveDraftKey)) {
    localStorage.setItem(draftKey, localStorage.getItem(autoSaveDraftKey));
  }
}

function openLocalAccount(account) {
  localMode = true;
  currentSession = { user: { id: account.id, name: account.name, phone: account.phone } };
  activeUserId = account.id;
  migrateLegacyDataToCurrentAccount();
  showCustomerApp();
  restoreUiFromCurrentStorage();
}

async function loginLocalAccount() {
  const phone = normalizeAuthPhone(authPhone.value);
  const name = normalizeAuthName(authName.value);
  const accounts = readJsonStorage(localAccountStorageKey, []);
  const account = accounts.find((item) => item.phone === phone && normalizeAuthName(item.name) === name);

  if (!account) {
    authStatus.textContent = "등록된 이름과 연락처를 찾지 못했습니다. 처음이면 회원가입을 눌러주세요.";
    return;
  }

  openLocalAccount(account);
  showManagerStatus(`${account.name}님 고객 목록을 불러왔습니다.`);
}

async function signupLocalAccount() {
  const phone = normalizeAuthPhone(authPhone.value);
  const name = authName.value.trim();
  if (!name || phone.length < 10) {
    authStatus.textContent = "이름과 연락처를 정확히 입력해주세요.";
    return;
  }

  const accounts = readJsonStorage(localAccountStorageKey, []);
  if (accounts.some((item) => item.phone === phone)) {
    authStatus.textContent = "이미 가입된 연락처입니다. 로그인해주세요.";
    return;
  }

  const account = {
    id: `local-${phone}`,
    name,
    phone,
    createdAt: new Date().toISOString(),
  };
  accounts.push(account);
  localStorage.setItem(localAccountStorageKey, JSON.stringify(accounts));
  openLocalAccount(account);
  showManagerStatus(`${name}님 회원가입이 완료되었습니다. 고객 목록을 불러왔습니다.`);
}

function showAuthScreen(message = "") {
  authScreen.hidden = false;
  appRoot.classList.add("is-auth-hidden");
  authStatus.textContent = message;
}

function showCustomerApp() {
  authScreen.hidden = true;
  appRoot.classList.remove("is-auth-hidden");
}

async function pushCloudSnapshot() {
  if (!supabaseClient || !currentSession || isHydratingCloud || localMode) return;

  const draft = readJsonStorage(getScopedStorageKey(autoSaveDraftKey));
  const { error } = await supabaseClient
    .from("insurance_app_data")
    .upsert(
      {
        user_id: currentSession.user.id,
        customers: getStoredCustomers(),
        draft,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" },
    );

  if (error) {
    showManagerStatus(`클라우드 저장 실패: ${error.message}`);
  } else {
    showManagerStatus("클라우드 자동 저장됨");
  }
}

function scheduleCloudSync() {
  if (!supabaseClient || !currentSession || isHydratingCloud || localMode) return;
  window.clearTimeout(cloudSyncTimer);
  cloudSyncTimer = window.setTimeout(pushCloudSnapshot, 1000);
}

function restoreUiFromCurrentStorage() {
  customerSearchInput.value = "";
  renderSavedCustomerList();
  const restored = restoreAutoSavedDraft();

  if (!restored) {
    applyCustomerState(getEmptyCustomerState());
  }

  renderSavedCustomerList(savedCustomerSelect.value);
  renderOutput();
}

async function hydrateFromCloud() {
  if (!supabaseClient || !currentSession) return;
  isHydratingCloud = true;

  const userId = currentSession.user.id;
  const { data, error } = await supabaseClient
    .from("insurance_app_data")
    .select("customers, draft")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    isHydratingCloud = false;
    showManagerStatus(`클라우드 불러오기 실패: ${error.message}`);
    restoreUiFromCurrentStorage();
    return;
  }

  const customerKey = getScopedStorageKey(customerStorageKey);
  const draftKey = getScopedStorageKey(autoSaveDraftKey);

  if (data) {
    localStorage.setItem(customerKey, JSON.stringify(data.customers ?? []));
    if (data.draft) {
      localStorage.setItem(draftKey, JSON.stringify(data.draft));
    } else {
      localStorage.removeItem(draftKey);
    }
  } else {
    const scopedCustomers = readJsonStorage(customerKey, []);
    const legacyCustomers = readJsonStorage(customerStorageKey, []);
    const scopedDraft = readJsonStorage(draftKey);
    const legacyDraft = readJsonStorage(autoSaveDraftKey);
    localStorage.setItem(customerKey, JSON.stringify(scopedCustomers.length ? scopedCustomers : legacyCustomers));
    const migrationDraft = scopedDraft ?? legacyDraft;
    if (migrationDraft) localStorage.setItem(draftKey, JSON.stringify(migrationDraft));
  }

  isHydratingCloud = false;
  restoreUiFromCurrentStorage();
  if (!data) await pushCloudSnapshot();
}

async function handleAuthSession(session) {
  currentSession = session;

  if (!session) {
    activeUserId = "";
    showAuthScreen("이름과 내 연락처로 로그인해주세요.");
    return;
  }

  showCustomerApp();
  if (activeUserId === session.user.id) return;
  activeUserId = session.user.id;
  await hydrateFromCloud();
}

async function initializeAuthentication() {
  if (!isSupabaseConfigured()) {
    localMode = true;
    showAuthScreen("처음이면 이름과 연락처를 입력한 뒤 회원가입을 눌러주세요.");
    return;
  }

  const config = window.INSURANCE_APP_CONFIG;
  supabaseClient = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    window.setTimeout(() => handleAuthSession(session), 0);
  });
  const { data, error } = await supabaseClient.auth.getSession();
  if (error) {
    showAuthScreen(`로그인 확인 실패: ${error.message}`);
    return;
  }
  await handleAuthSession(data.session);
}

async function loginWithEmail(event) {
  event.preventDefault();
  if (!supabaseClient) {
    await loginLocalAccount();
    return;
  }

  const email = getPhoneAuthEmail();
  const name = authName.value.trim();
  if (!email || !name) {
    authStatus.textContent = "이름과 연락처를 정확히 입력해주세요.";
    return;
  }

  authStatus.textContent = "고객정보를 불러오는 중...";
  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password: getPhoneAuthPassword(),
  });
  authStatus.textContent = error ? "이름 또는 연락처를 확인해주세요." : "고객정보를 불러왔습니다.";
}

async function signupWithEmail() {
  if (!supabaseClient) {
    await signupLocalAccount();
    return;
  }

  const phone = normalizeAuthPhone(authPhone.value);
  const name = authName.value.trim();
  const email = getPhoneAuthEmail();
  if (!email || !name) {
    authStatus.textContent = "이름과 연락처를 정확히 입력해주세요.";
    return;
  }

  authStatus.textContent = "회원가입 중...";
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password: getPhoneAuthPassword(),
    options: {
      data: { name, phone },
    },
  });

  if (error) {
    authStatus.textContent = `회원가입 실패: ${error.message}`;
  } else if (!data.session) {
    authStatus.textContent = "가입 확인 설정 때문에 로그인이 보류되었습니다. 관리자에게 문의해주세요.";
  } else {
    authStatus.textContent = "회원가입과 로그인이 완료되었습니다.";
  }
}

async function logoutCustomerApp() {
  window.clearTimeout(autoSaveTimer);
  runAutoSave();

  if (localMode || !supabaseClient) {
    localMode = false;
    currentSession = null;
    activeUserId = "";
    showAuthScreen("로컬 사용을 종료했습니다.");
    return;
  }

  await pushCloudSnapshot();
  const { error } = await supabaseClient.auth.signOut();
  if (error) showManagerStatus(`로그아웃 실패: ${error.message}`);
}

function setContractManagementMode(enabled, updateHash = true) {
  document.body.classList.toggle("contract-management-mode", enabled);
  pageTitle.textContent = enabled ? "계약 및 보험사 비교 관리" : "보험 고객 관리용 입력 시스템";

  if (updateHash) {
    const nextUrl = enabled ? "#contracts" : window.location.pathname + window.location.search;
    window.history.replaceState(null, "", nextUrl);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function selectedValue(container, selector) {
  return container.querySelector(`${selector}:checked`)?.value ?? "";
}

function splitLines(value) {
  return value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function joinRequestItems() {
  return fields.requestItems.value.trim();
}

function toggleElement(element, visible) {
  element.classList.toggle("is-hidden", !visible);
}

function formatDateInputValue(date) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

function shiftedToday({ months = 0, years = 0 } = {}) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  if (months) date.setMonth(date.getMonth() + months);
  if (years) date.setFullYear(date.getFullYear() + years);
  return date;
}

function getDisclosureDateRange(type) {
  if (type === "threeMonth") {
    return {
      min: formatDateInputValue(shiftedToday({ months: -3 })),
      max: formatDateInputValue(shiftedToday()),
    };
  }

  if (type === "fiveYear") {
    return {
      min: formatDateInputValue(shiftedToday({ years: -5 })),
      max: formatDateInputValue(shiftedToday()),
    };
  }

  return {
    min: formatDateInputValue(shiftedToday({ years: -10 })),
    max: formatDateInputValue(shiftedToday({ years: -5 })),
  };
}

function applyDateRange(input, type) {
  const range = getDisclosureDateRange(type);
  input.min = range.min;
  input.max = range.max;
}

function setRangedDateField(card, selector, value, rangeType) {
  const input = card.querySelector(selector);
  input.value = value ?? "";
  applyDateRange(input, rangeType);
}

function addNotice(prefill = {}) {
  const fragment = noticeTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".notice-card");
  const noticeId = ++noticeIdCounter;

  card.querySelectorAll('[data-notice-field="careType"]').forEach((radio) => {
    radio.name = `careType-${noticeId}`;
  });

  card.querySelectorAll('[data-notice-field="recurrence"]').forEach((radio) => {
    radio.name = `recurrence-${noticeId}`;
  });

  card.querySelector('[data-notice-field="disease"]').value = prefill.disease ?? "";
  const dateInput = card.querySelector('[data-notice-field="date"]');
  dateInput.value = prefill.date ?? "";
  applyDateRange(dateInput, "threeMonth");
  setRangedDateField(card, '[data-notice-field="firstVisitDate"]', prefill.firstVisitDate ?? prefill.treatmentPeriod ?? "", "threeMonth");
  setRangedDateField(card, '[data-notice-field="lastVisitDate"]', prefill.lastVisitDate ?? "", "threeMonth");
  card.querySelector('[data-notice-field="visitDays"]').value = prefill.visitDays ?? prefill.visits ?? "";
  card.querySelector('[data-notice-field="bodyPart"]').value = prefill.bodyPart ?? "";
  card.querySelector('[data-notice-field="memo"]').value = prefill.memo ?? "";

  if (prefill.careType) {
    const careType = card.querySelector(`[data-notice-field="careType"][value="${prefill.careType}"]`);
    if (careType) careType.checked = true;
  }

  const recurrenceValue = normalizeNoticeStatus(prefill.recurrence, prefill.recovery);
  const recurrence = card.querySelector(`[data-notice-field="recurrence"][value="${recurrenceValue}"]`);
  if (recurrence) recurrence.checked = true;

  if (prefill.treatments?.length) {
    prefill.treatments.forEach((treatment) => {
      const checkbox = card.querySelector(`[data-treatment][value="${treatment}"]`);
      if (checkbox) checkbox.checked = true;
    });
  }

  if (prefill.categories?.length) {
    prefill.categories.forEach((category) => {
      const checkbox = card.querySelector(`[data-notice-category][value="${category}"]`);
      if (checkbox) checkbox.checked = true;
    });
  }

  if (prefill.otherTreatment) {
    card.querySelector("[data-treatment-other-toggle]").checked = true;
    card.querySelector("[data-treatment-other]").value = prefill.otherTreatment;
    toggleElement(card.querySelector("[data-treatment-other]"), true);
  }

  noticeList.append(card);
  refreshNoticeNumbers();
  renderOutput();
}

function refreshNoticeNumbers() {
  [...noticeList.querySelectorAll(".notice-card")].forEach((card, index) => {
    card.querySelector("[data-notice-number]").textContent = index + 1;
  });
}

function collectNotice(card) {
  const treatments = [...card.querySelectorAll("[data-treatment]:checked")].map((item) => item.value);
  const categories = [...card.querySelectorAll("[data-notice-category]:checked")].map((item) => item.value);
  const otherTreatment = card.querySelector("[data-treatment-other]").value.trim();

  if (otherTreatment) {
    treatments.push(otherTreatment);
  }

  return {
    disease: card.querySelector('[data-notice-field="disease"]').value.trim(),
    date: card.querySelector('[data-notice-field="date"]').value,
    firstVisitDate: card.querySelector('[data-notice-field="firstVisitDate"]').value,
    lastVisitDate: card.querySelector('[data-notice-field="lastVisitDate"]').value,
    visitDays: card.querySelector('[data-notice-field="visitDays"]').value.trim(),
    bodyPart: card.querySelector('[data-notice-field="bodyPart"]').value.trim(),
    recurrence: normalizeRecurrence(selectedValue(card, '[data-notice-field="recurrence"]')),
    careType: selectedValue(card, '[data-notice-field="careType"]'),
    categories,
    treatments,
    memo: card.querySelector('[data-notice-field="memo"]').value.trim(),
  };
}

function collectNotices() {
  return [...noticeList.querySelectorAll(".notice-card")].map(collectNotice);
}

function addFiveYearNotice(prefill = {}) {
  const fragment = fiveYearTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".notice-card");

  card.dataset.fiveYearId = ++fiveYearIdCounter;
  card.querySelectorAll('[data-five-field="recurrence"]').forEach((radio) => {
    radio.name = `fiveRecurrence-${fiveYearIdCounter}`;
  });
  card.querySelector('[data-five-field="type"]').value = prefill.type ?? "입원";
  card.querySelector('[data-five-field="disease"]').value = prefill.disease ?? "";
  const dateInput = card.querySelector('[data-five-field="date"]');
  dateInput.value = prefill.date ?? "";
  applyDateRange(dateInput, "fiveYear");
  card.querySelector('[data-five-field="state"]').value = prefill.state ?? "";
  setRangedDateField(card, '[data-five-field="firstVisitDate"]', prefill.firstVisitDate ?? prefill.treatmentPeriod ?? "", "fiveYear");
  setRangedDateField(card, '[data-five-field="lastVisitDate"]', prefill.lastVisitDate ?? "", "fiveYear");
  card.querySelector('[data-five-field="visitDays"]').value = prefill.visitDays ?? "";
  card.querySelector('[data-five-field="bodyPart"]').value = prefill.bodyPart ?? "";
  card.querySelector('[data-five-field="detail"]').value = prefill.detail ?? "";
  const recurrenceValue = normalizeRecurrence(prefill.recurrence);
  const recurrence = card.querySelector(`[data-five-field="recurrence"][value="${recurrenceValue}"]`);
  if (recurrence) recurrence.checked = true;

  fiveYearList.append(card);
  refreshFiveYearNumbers();
  renderOutput();
}

function addTenYearNotice(prefill = {}) {
  const fragment = tenYearTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".notice-card");

  card.dataset.tenYearId = ++tenYearIdCounter;
  card.querySelectorAll('[data-ten-field="recurrence"]').forEach((radio) => {
    radio.name = `tenRecurrence-${tenYearIdCounter}`;
  });
  card.querySelector('[data-ten-field="type"]').value = prefill.type ?? "입원";
  card.querySelector('[data-ten-field="disease"]').value = prefill.disease ?? "";
  const dateInput = card.querySelector('[data-ten-field="date"]');
  dateInput.value = prefill.date ?? "";
  applyDateRange(dateInput, "tenYear");
  card.querySelector('[data-ten-field="state"]').value = prefill.state ?? "";
  setRangedDateField(card, '[data-ten-field="firstVisitDate"]', prefill.firstVisitDate ?? prefill.treatmentPeriod ?? "", "tenYear");
  setRangedDateField(card, '[data-ten-field="lastVisitDate"]', prefill.lastVisitDate ?? "", "tenYear");
  card.querySelector('[data-ten-field="visitDays"]').value = prefill.visitDays ?? "";
  card.querySelector('[data-ten-field="bodyPart"]').value = prefill.bodyPart ?? "";
  card.querySelector('[data-ten-field="detail"]').value = prefill.detail ?? "";
  const recurrenceValue = normalizeRecurrence(prefill.recurrence);
  const recurrence = card.querySelector(`[data-ten-field="recurrence"][value="${recurrenceValue}"]`);
  if (recurrence) recurrence.checked = true;

  tenYearList.append(card);
  refreshTenYearNumbers();
  renderOutput();
}

function refreshFiveYearNumbers() {
  [...fiveYearList.querySelectorAll(".notice-card")].forEach((card, index) => {
    card.querySelector("[data-five-number]").textContent = index + 1;
  });
}

function refreshTenYearNumbers() {
  [...tenYearList.querySelectorAll(".notice-card")].forEach((card, index) => {
    card.querySelector("[data-ten-number]").textContent = index + 1;
  });
}

function collectFiveYearNotice(card) {
  return {
    type: card.querySelector('[data-five-field="type"]').value,
    disease: card.querySelector('[data-five-field="disease"]').value.trim(),
    date: card.querySelector('[data-five-field="date"]').value,
    state: card.querySelector('[data-five-field="state"]').value.trim(),
    firstVisitDate: card.querySelector('[data-five-field="firstVisitDate"]').value,
    lastVisitDate: card.querySelector('[data-five-field="lastVisitDate"]').value,
    visitDays: card.querySelector('[data-five-field="visitDays"]').value.trim(),
    bodyPart: card.querySelector('[data-five-field="bodyPart"]').value.trim(),
    recurrence: normalizeRecurrence(selectedValue(card, '[data-five-field="recurrence"]')),
    detail: card.querySelector('[data-five-field="detail"]').value.trim(),
  };
}

function collectTenYearNotice(card) {
  return {
    type: card.querySelector('[data-ten-field="type"]').value,
    disease: card.querySelector('[data-ten-field="disease"]').value.trim(),
    date: card.querySelector('[data-ten-field="date"]').value,
    state: card.querySelector('[data-ten-field="state"]').value.trim(),
    firstVisitDate: card.querySelector('[data-ten-field="firstVisitDate"]').value,
    lastVisitDate: card.querySelector('[data-ten-field="lastVisitDate"]').value,
    visitDays: card.querySelector('[data-ten-field="visitDays"]').value.trim(),
    bodyPart: card.querySelector('[data-ten-field="bodyPart"]').value.trim(),
    recurrence: normalizeRecurrence(selectedValue(card, '[data-ten-field="recurrence"]')),
    detail: card.querySelector('[data-ten-field="detail"]').value.trim(),
  };
}

function collectFiveYear() {
  if (selectedValue(document, 'input[name="fiveYearStatus"]') !== "yes") {
    return [];
  }

  return [...fiveYearList.querySelectorAll(".notice-card")].map(collectFiveYearNotice);
}

function collectTenYear() {
  if (selectedValue(document, 'input[name="tenYearStatus"]') !== "yes") {
    return [];
  }

  return [...tenYearList.querySelectorAll(".notice-card")].map(collectTenYearNotice);
}

function collectFiveYearCards() {
  return [...fiveYearList.querySelectorAll(".notice-card")].map(collectFiveYearNotice);
}

function collectTenYearCards() {
  return [...tenYearList.querySelectorAll(".notice-card")].map(collectTenYearNotice);
}

function refreshContractNumbers() {
  [...contractList.querySelectorAll(".contract-card")].forEach((card, index) => {
    card.querySelector("[data-contract-number]").textContent = index + 1;
    const company = card.querySelector('[data-contract-field="company"]').value.trim();
    const product = card.querySelector('[data-contract-field="product"]').value.trim();
    const summary = [company, product].filter(Boolean).join(" / ");
    card.querySelector("[data-contract-summary]").textContent = summary ? `- ${summary}` : "";
  });
}

function setContractCollapsed(card, collapsed) {
  card.classList.toggle("is-collapsed", collapsed);
  card.querySelector("[data-toggle-contract]").textContent = collapsed ? "펼치기" : "접기";
}

function addContract(prefill = {}) {
  const fragment = contractTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".contract-card");
  card.dataset.contractId = ++contractIdCounter;
  card.querySelector('[data-contract-field="company"]').value = prefill.company ?? "";
  card.querySelector('[data-contract-field="product"]').value = prefill.product ?? "";
  card.querySelector('[data-contract-field="premium"]').value = prefill.premium ?? "";
  card.querySelector('[data-contract-field="date"]').value = prefill.date ?? "";
  card.querySelector('[data-contract-field="status"]').value = prefill.status ?? "";
  card.querySelector('[data-contract-field="memo"]').value = prefill.memo ?? "";
  setContractCollapsed(card, Boolean(prefill.collapsed));
  contractList.append(card);
  refreshContractNumbers();
  renderOutput();
}

function collectContract(card) {
  return {
    company: card.querySelector('[data-contract-field="company"]').value.trim(),
    product: card.querySelector('[data-contract-field="product"]').value.trim(),
    premium: card.querySelector('[data-contract-field="premium"]').value.trim(),
    date: card.querySelector('[data-contract-field="date"]').value,
    status: card.querySelector('[data-contract-field="status"]').value,
    memo: card.querySelector('[data-contract-field="memo"]').value.trim(),
    collapsed: card.classList.contains("is-collapsed"),
  };
}

function collectContracts() {
  return [...contractList.querySelectorAll(".contract-card")].map(collectContract);
}

function getContractsFromState(state) {
  if (Array.isArray(state.contracts) && state.contracts.length) {
    return state.contracts;
  }

  const legacy = {
    company: state.fields?.insuranceCompany ?? "",
    product: state.fields?.insuranceProduct ?? "",
    premium: state.fields?.contractPremium ?? "",
    date: state.fields?.contractDate ?? "",
    status: state.fields?.contractStatus ?? "",
    memo: state.fields?.contractMemo ?? "",
  };
  return Object.values(legacy).some(Boolean) ? [legacy] : [{}];
}

function applyContracts(rows = []) {
  contractList.innerHTML = "";
  (rows.length ? rows : [{}]).forEach((row) => addContract(row));
}

function refreshComparisonNumbers() {
  [...comparisonList.querySelectorAll(".comparison-row")].forEach((row, index) => {
    row.querySelector('input[name="finalChoice"]').value = String(index);
  });
}

function addComparisonRow(prefill = {}) {
  const row = document.createElement("div");
  row.className = "comparison-row";
  row.innerHTML = `
    <label><span>최종</span><input type="checkbox" name="finalChoice" /></label>
    <label><span>보험회사</span><input data-compare-field="company" type="text" /></label>
    <label><span>보험상품</span><input data-compare-field="product" type="text" /></label>
    <label><span>가격</span><input data-compare-field="price" type="text" /></label>
    <label><span>메모</span><input data-compare-field="memo" type="text" /></label>
  `;

  row.querySelector('[data-compare-field="company"]').value = prefill.company ?? "";
  row.querySelector('[data-compare-field="product"]').value = prefill.product ?? "";
  row.querySelector('[data-compare-field="price"]').value = prefill.price ?? "";
  row.querySelector('[data-compare-field="memo"]').value = prefill.memo ?? "";
  row.querySelector('input[name="finalChoice"]').checked = Boolean(prefill.selected);
  comparisonList.append(row);
  refreshComparisonNumbers();
  renderOutput();
}

function collectComparisonRows() {
  return [...comparisonList.querySelectorAll(".comparison-row")].map((row, index) => ({
    company: row.querySelector('[data-compare-field="company"]').value.trim(),
    product: row.querySelector('[data-compare-field="product"]').value.trim(),
    price: row.querySelector('[data-compare-field="price"]').value.trim(),
    memo: row.querySelector('[data-compare-field="memo"]').value.trim(),
    selected: row.querySelector('input[name="finalChoice"]').checked,
  }));
}

function getActiveComparisonRows() {
  return collectComparisonRows().filter((row) => row.company || row.product || row.price || row.memo);
}

function applyComparisonRows(rows = []) {
  comparisonList.innerHTML = "";
  const rowCount = Math.max(2, rows.length);

  for (let index = 0; index < rowCount; index += 1) {
    addComparisonRow(rows[index] ?? {});
  }
}

function collectCustomerState() {
  const contracts = collectContracts();
  const firstContract = contracts.find((contract) =>
    contract.company || contract.product || contract.premium || contract.date || contract.status || contract.memo,
  ) ?? contracts[0] ?? {};

  return {
    version: 2,
    savedAt: new Date().toISOString(),
    fields: {
      designNumber: getFieldValue("designNumber"),
      customerName: getFieldValue("customerName"),
      gender: fields.gender?.value ?? "",
      residentNumber: getFieldValue("residentNumber"),
      job: getFieldValue("job"),
      phoneCarrier: getFieldValue("phoneCarrier"),
      address: getFieldValue("address"),
      email: getFieldValue("email"),
      insuredName: getFieldValue("insuredName"),
      contractorName: getFieldValue("contractorName"),
      legalGuardian: getFieldValue("legalGuardian"),
      beneficiary: getFieldValue("beneficiary"),
      relationship: getFieldValue("relationship"),
      planType: fields.planType?.value ?? "",
      requestItems: fields.requestItems?.value ?? "",
      insuranceCompany: firstContract.company ?? "",
      insuranceProduct: firstContract.product ?? "",
      contractPremium: firstContract.premium ?? "",
      contractDate: firstContract.date ?? "",
      contractStatus: firstContract.status ?? "",
      contractMemo: firstContract.memo ?? "",
      medDisease: getFieldValue("medDisease"),
      medName: getFieldValue("medName"),
      medPeriod: getFieldValue("medPeriod"),
    },
    contracts,
    comparison: collectComparisonRows(),
    designDirection: {
      coverageFocus: getCheckedValues('input[name="coverageFocus"]'),
      coverageOtherChecked: coverageOtherToggle.checked,
      coverageOther: coverageOther.value,
      premiumRange: selectedValue(document, 'input[name="premiumRange"]'),
      premiumCustom: premiumCustom.value,
      designPurpose: getCheckedValues('input[name="designPurpose"]'),
      purposeOtherChecked: purposeOtherToggle.checked,
      purposeOther: purposeOther.value,
    },
    majorDisease: {
      values: getCheckedValues('input[name="majorDisease"]'),
      otherChecked: majorOtherToggle.checked,
      other: majorOther.value,
    },
    medicationStatus: selectedValue(document, 'input[name="medicationStatus"]'),
    notices: collectNotices(),
    fiveYearStatus: selectedValue(document, 'input[name="fiveYearStatus"]'),
    fiveYearNotices: collectFiveYearCards(),
    tenYearStatus: selectedValue(document, 'input[name="tenYearStatus"]'),
    tenYearNotices: collectTenYearCards(),
  };
}

function applyCustomerState(state) {
  clearFields();
  Object.entries(state.fields ?? {}).forEach(([key, value]) => setFieldValue(key, value));
  if (!state.fields?.residentNumber && state.fields?.birthDate) {
    setFieldValue("residentNumber", state.fields.birthDate);
  }
  applyContracts(getContractsFromState(state));
  applyComparisonRows(state.comparison ?? []);

  setCheckedValues("coverageFocus", state.designDirection?.coverageFocus ?? []);
  coverageOtherToggle.checked = Boolean(state.designDirection?.coverageOtherChecked);
  coverageOther.value = state.designDirection?.coverageOther ?? "";
  toggleElement(coverageOther, coverageOtherToggle.checked);

  setRadioValue("premiumRange", state.designDirection?.premiumRange ?? "");
  premiumCustom.value = state.designDirection?.premiumCustom ?? "";
  toggleElement(premiumCustom, state.designDirection?.premiumRange === "custom");

  setCheckedValues("designPurpose", state.designDirection?.designPurpose ?? []);
  purposeOtherToggle.checked = Boolean(state.designDirection?.purposeOtherChecked);
  purposeOther.value = state.designDirection?.purposeOther ?? "";
  toggleElement(purposeOther, purposeOtherToggle.checked);

  setCheckedValues("majorDisease", state.majorDisease?.values ?? []);
  majorOtherToggle.checked = Boolean(state.majorDisease?.otherChecked);
  majorOther.value = state.majorDisease?.other ?? "";
  toggleElement(majorOther, majorOtherToggle.checked);

  setRadioValue("medicationStatus", state.medicationStatus ?? "none");
  toggleElement(medicationDetails, state.medicationStatus === "yes");

  noticeList.innerHTML = "";
  (state.notices?.length ? state.notices : [{}]).forEach((notice) => addNotice(notice));

  setRadioValue("fiveYearStatus", state.fiveYearStatus ?? "none");
  toggleElement(fiveYearDetails, state.fiveYearStatus === "yes");
  fiveYearList.innerHTML = "";
  (state.fiveYearNotices ?? []).forEach((notice) => addFiveYearNotice(notice));

  setRadioValue("tenYearStatus", state.tenYearStatus ?? "none");
  toggleElement(tenYearDetails, state.tenYearStatus === "yes");
  tenYearList.innerHTML = "";
  (state.tenYearNotices ?? []).forEach((notice) => addTenYearNotice(notice));

  renderOutput();
}

function collectMedication() {
  const status = selectedValue(document, 'input[name="medicationStatus"]');
  return {
    status,
    disease: fields.medDisease.value.trim(),
    name: fields.medName.value.trim(),
    period: fields.medPeriod.value.trim(),
  };
}

function buildNoticeLines(notices) {
  if (!notices.length) {
    return ["[3개월 이내]", "고지사항 없음"];
  }

  const lines = ["[3개월 이내]"];

  notices.forEach((notice, index) => {
    lines.push("", `${index + 1}. ${notice.disease || "병명 미입력"}`, "");
    if (notice.date) {
      lines.push(`* ${notice.date}`);
    }
    if (notice.firstVisitDate) lines.push(`* 최초 내원일: ${notice.firstVisitDate}`);
    if (notice.lastVisitDate) lines.push(`* 최종 내원일: ${notice.lastVisitDate}`);
    if (notice.bodyPart) lines.push(`* 치료부위: ${notice.bodyPart}`);
    if (notice.recurrence) lines.push(`* ${normalizeRecurrence(notice.recurrence)}`);
    if (notice.categories?.length) lines.push(`* 고지 구분: ${notice.categories.join(" / ")}`);
    lines.push(`* ${notice.careType}${notice.visitDays ? ` ${notice.visitDays}일` : ""}`);
    if (notice.treatments.length) lines.push(`* ${notice.treatments.join(" / ")}`);
    if (notice.memo) lines.push(`* ${notice.memo}`);
  });

  return lines;
}

function buildFiveYearLines() {
  const lines = ["[5년 이내]"];
  const notices = collectFiveYear();

  if (!notices.length) {
    return [...lines, "고지사항 없음"];
  }

  notices.forEach((item, index) => {
    lines.push("", `${index + 1}. ${item.type} - ${item.disease || "병명 미입력"}`, "");
    if (item.date) lines.push(`* ${item.date}`);
    if (item.firstVisitDate) lines.push(`* 최초 내원일: ${item.firstVisitDate}`);
    if (item.lastVisitDate) lines.push(`* 최종 내원일: ${item.lastVisitDate}`);
    if (item.visitDays) lines.push(`* 병원 간 일수: ${item.visitDays}일`);
    if (item.bodyPart) lines.push(`* 치료부위: ${item.bodyPart}`);
    if (item.recurrence) lines.push(`* ${normalizeRecurrence(item.recurrence)}`);
    if (item.detail) lines.push(`* ${item.detail}`);
    if (item.state) lines.push(`* 현재상태: ${item.state}`);
  });

  return lines;
}

function buildTenYearLines() {
  const lines = ["[10년 이내]"];
  const notices = collectTenYear();

  if (!notices.length) {
    return [...lines, "고지사항 없음"];
  }

  notices.forEach((item, index) => {
    lines.push("", `${index + 1}. ${item.type} - ${item.disease || "진단명 미입력"}`, "");
    if (item.date) lines.push(`* ${item.date}`);
    if (item.firstVisitDate) lines.push(`* 최초 내원일: ${item.firstVisitDate}`);
    if (item.lastVisitDate) lines.push(`* 최종 내원일: ${item.lastVisitDate}`);
    if (item.visitDays) lines.push(`* 병원 간 일수: ${item.visitDays}일`);
    if (item.bodyPart) lines.push(`* 치료부위: ${item.bodyPart}`);
    if (item.recurrence) lines.push(`* ${normalizeRecurrence(item.recurrence)}`);
    if (item.detail) lines.push(`* ${item.detail}`);
    if (item.state) lines.push(`* 현재상태: ${item.state}`);
  });

  return lines;
}

function buildMedicationLine() {
  const medication = collectMedication();

  if (medication.status !== "yes") {
    return "";
  }

  const details = [medication.disease, medication.name, medication.period]
    .filter(Boolean)
    .join(" / ");

  return `약물 복용 있음${details ? `: ${details}` : ": 상세내용 확인 필요"}`;
}

function buildMajorDiseaseLine() {
  const diseases = getCheckedValues('input[name="majorDisease"]');
  const other = majorOther.value.trim();

  if (majorOtherToggle.checked && other) {
    diseases.push(other);
  }

  return diseases.length ? `약물복용 확인: ${diseases.join(", ")}` : "";
}

function buildMajorDiseaseAndMedicationLines() {
  return [buildMajorDiseaseLine(), buildMedicationLine()].filter(Boolean);
}

function collectDesignDirection() {
  const coverages = getCheckedValues('input[name="coverageFocus"]');
  const coverageOtherValue = coverageOther.value.trim();
  const purposes = getCheckedValues('input[name="designPurpose"]');
  const purposeOtherValue = purposeOther.value.trim();
  const premiumValue = selectedValue(document, 'input[name="premiumRange"]');

  if (coverageOtherToggle.checked && coverageOtherValue) {
    coverages.push(coverageOtherValue);
  }

  if (purposeOtherToggle.checked && purposeOtherValue) {
    purposes.push(purposeOtherValue);
  }

  return {
    coverages,
    premium: premiumValue === "custom" ? premiumCustom.value.trim() : premiumValue,
    purposes,
  };
}

function buildDesignDirectionLines() {
  const { coverages, premium, purposes } = collectDesignDirection();

  if (!coverages.length && !premium && !purposes.length) {
    return [];
  }

  const lines = ["[설계 요청사항]", ""];

  if (premium) {
    lines.push(`희망 보험료: ${premium}`, "");
  }

  if (coverages.length) {
    lines.push("아래 보장 위주", "");
    coverages.forEach((coverage) => lines.push(`* ${coverage}`));
    lines.push("");
  }

  if (purposes.length) {
    lines.push(`설계 방향: ${purposes.join(" + ")}`, "");
  }

  

  return lines;
}

function buildContractLines() {
  const contracts = collectContracts().filter((contract) =>
    contract.company || contract.product || contract.premium || contract.date || contract.status || contract.memo,
  );
  const lines = [];

  contracts.forEach((contract, index) => {
    const rows = [
      ["보험사", contract.company],
      ["보험상품", contract.product],
      ["보험료", contract.premium],
      ["계약일", contract.date],
      ["계약상태", contract.status],
      ["계약 메모", contract.memo],
    ].filter(([, value]) => value);

    lines.push(`[계약 ${index + 1}]`, ...rows.map(([label, value]) => `${label}: ${value}`), "");
  });

  return lines;
}

function buildComparisonLines() {
  const rows = getActiveComparisonRows();

  if (!rows.length) {
    return [];
  }

  const lines = ["[보험사 가격 비교]", ""];

  rows.forEach((row, index) => {
    const marker = row.selected ? "최종선택" : `${index + 1}안`;
    const title = [row.company, row.product].filter(Boolean).join(" / ") || "상품명 미입력";
    lines.push(`${marker}. ${title}`);
    if (row.price) lines.push(`* 가격: ${row.price}`);
    if (row.memo) lines.push(`* 메모: ${row.memo}`);
    lines.push("");
  });

  const selectedRows = rows.filter((row) => row.selected);
  if (selectedRows.length) {
    lines.push("최종 결정:");
    selectedRows.forEach((selected, index) => {
      const finalText = [selected.company, selected.product, selected.price].filter(Boolean).join(" / ");
      lines.push(`* ${index + 1}. ${finalText || "선택 상품 정보 확인 필요"}`);
    });
  }

  return lines;
}

function getBirthDateForInsurer() {
  const residentNumber = getFieldValue("residentNumber").replace(/[^0-9]/g, "");

  if (residentNumber.length < 6) {
    return "";
  }

  if (residentNumber.length >= 8 && ["19", "20"].includes(residentNumber.slice(0, 2))) {
    return `${residentNumber.slice(0, 4)}.${residentNumber.slice(4, 6)}.${residentNumber.slice(6, 8)}`;
  }

  const yy = residentNumber.slice(0, 2);
  const mm = residentNumber.slice(2, 4);
  const dd = residentNumber.slice(4, 6);
  const genderCode = residentNumber.slice(6, 7);
  const century = ["3", "4", "7", "8"].includes(genderCode) ? "20" : "19";

  return `${century}${yy}.${mm}.${dd}`;
}

function buildBasicInfoLines({ insurerMode = false } = {}) {
  const basicRows = insurerMode
    ? [
        ["설계번호", fields.designNumber.value.trim()],
        ["고객명", fields.customerName.value.trim()],
        ["성별", fields.gender.value],
        ["생년월일", getBirthDateForInsurer()],
        ["직업", fields.job.value.trim()],
        ["친권자(법정대리인)", fields.legalGuardian?.value.trim() ?? ""],
        ["수익자", fields.beneficiary?.value.trim() ?? ""],
        ["관계", fields.relationship?.value.trim() ?? ""],
      ]
    : [
        ["설계번호", fields.designNumber.value.trim()],
        ["고객명", fields.customerName.value.trim()],
        ["성별", fields.gender.value],
        ["생년월일", getBirthDateForInsurer() || getFieldValue("residentNumber")],
        ["직업", fields.job.value.trim()],
        ["연락처(통신사 포함)", getFieldValue("phoneCarrier")],
        ["주소", getFieldValue("address")],
        ["이메일", getFieldValue("email")],
        ["피보험자", fields.insuredName?.value.trim() ?? ""],
        ["계약자", fields.contractorName?.value.trim() ?? ""],
        ["친권자(법정대리인)", fields.legalGuardian?.value.trim() ?? ""],
        ["수익자", fields.beneficiary?.value.trim() ?? ""],
        ["관계", fields.relationship?.value.trim() ?? ""],
      ];

  return ["1. 기본정보", "", ...basicRows.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`)];
}

function buildOutput({ insurerMode = false } = {}) {
  const lines = [];
  const designDirectionLines = buildDesignDirectionLines();
  const contractLines = buildContractLines();
  const comparisonLines = buildComparisonLines();
  const requestText = joinRequestItems();
  const majorMedicationLines = buildMajorDiseaseAndMedicationLines();

  lines.push(...buildBasicInfoLines({ insurerMode }), "");

  if (!insurerMode && (contractLines.length || comparisonLines.length)) {
    lines.push("2. 계약정보", "");

    if (contractLines.length) {
      lines.push(...contractLines, "");
    }

    if (comparisonLines.length) {
      lines.push(...comparisonLines, "");
    }
  }

  lines.push("3. 설계", "");

  if (requestText) {
    lines.push(requestText, "");
  }

  if (designDirectionLines.length) {
    lines.push(...designDirectionLines, "");
  } else if (!requestText) {
    lines.push("설계 요청사항 없음", "");
  }

  lines.push("4. 고지", "");

  if (majorMedicationLines.length) {
    lines.push(...majorMedicationLines, "");
  }

  lines.push(...buildNoticeLines(collectNotices()), "", ...buildFiveYearLines(), "", ...buildTenYearLines());

  return lines.join("\n");
}

function validateForm() {
  const warnings = [];
  const notices = collectNotices();

  if (!fields.customerName.value.trim()) warnings.push("고객명을 입력해주세요.");

  notices.forEach((notice, index) => {
    if (!notice.disease) warnings.push(`${index + 1}번 고지사항의 병명을 입력해주세요.`);
  });

  if (collectMedication().status === "yes") {
    const medication = collectMedication();
    if (!medication.disease || !medication.name || !medication.period) {
      warnings.push("약 복용 정보의 질환명, 약물명, 복용기간을 모두 입력해주세요.");
    }
  }

  if (selectedValue(document, 'input[name="fiveYearStatus"]') === "yes" && !collectFiveYear().length) {
    warnings.push("5년 이내 고지사항을 추가해주세요.");
  }

  collectFiveYear().forEach((item, index) => {
    if (!item.disease) warnings.push(`5년 이내 ${index + 1}번 고지의 병명을 입력해주세요.`);
  });

  if (selectedValue(document, 'input[name="tenYearStatus"]') === "yes" && !collectTenYear().length) {
    warnings.push("10년 이내 고지사항을 추가해주세요.");
  }

  collectTenYear().forEach((item, index) => {
    if (!item.disease) warnings.push(`10년 이내 ${index + 1}번 고지의 진단명/질환명을 입력해주세요.`);
  });

  return warnings;
}

function showWarnings(warnings) {
  warningList.innerHTML = "";
  warnings.forEach((warning) => {
    const item = document.createElement("p");
    item.textContent = warning;
    warningList.append(item);
  });
}

function ensureValid() {
  const warnings = validateForm();
  showWarnings(warnings);

  if (warnings.length) {
    alert(warnings.join("\n"));
    return false;
  }

  return true;
}

function formatPreviewOutput(text) {
  return text.replace(/\n(?=[1-4]\. (기본정보|계약정보|설계|고지))/g, "\n\n────────────────────\n");
}

function renderOutput() {
  output.textContent = formatPreviewOutput(buildOutput());
  showWarnings(validateForm());
}

function buildCustomerLabel(customer) {
  const name = customer.state?.fields?.customerName || "이름없음";
  const residentNumber = customer.state?.fields?.residentNumber || customer.state?.fields?.birthDate;
  const firstContract = customer.state?.contracts?.find((contract) => contract.company || contract.product) ?? {};
  const company = firstContract.company || customer.state?.fields?.insuranceCompany;
  const product = firstContract.product || customer.state?.fields?.insuranceProduct;
  const finalChoices = customer.state?.comparison?.filter((row) => row.selected) ?? [];
  const firstFinalSummary = finalChoices.length
    ? [finalChoices[0].company, finalChoices[0].product, finalChoices[0].price].filter(Boolean).join(" ")
    : "";
  const finalSummary = finalChoices.length > 1
    ? `${firstFinalSummary || "최종상품"} 외 ${finalChoices.length - 1}건`
    : firstFinalSummary;
  const savedDate = customer.updatedAt ? new Date(customer.updatedAt).toLocaleString("ko-KR") : "";
  return [name, residentNumber, finalSummary || company, finalSummary ? "" : product, savedDate].filter(Boolean).join(" / ");
}

function normalizeSearchText(value) {
  return String(value ?? "").replace(/\s+/g, "").toLowerCase();
}

function buildCustomerSearchText(customer) {
  const state = customer.state ?? {};
  const customerFields = state.fields ?? {};
  const finalChoices = state.comparison?.filter((row) => row.selected) ?? [];
  const finalChoiceValues = finalChoices.flatMap((row) => [row.company, row.product, row.price, row.memo]);
  const comparisonMemos = (state.comparison ?? []).map((row) => row.memo);
  const designDirection = state.designDirection ?? {};
  const contractSearchValues = (state.contracts ?? []).flatMap((contract) => [
    contract.company,
    contract.product,
    contract.premium,
    contract.date,
    contract.status,
    contract.memo,
  ]);

  return normalizeSearchText([
    customerFields.customerName,
    customerFields.residentNumber,
    customerFields.birthDate,
    customerFields.gender,
    customerFields.job,
    customerFields.phoneCarrier,
    customerFields.address,
    customerFields.email,
    ...finalChoiceValues,
    customerFields.insuranceCompany,
    customerFields.insuranceProduct,
    customerFields.contractPremium,
    customerFields.contractStatus,
    customerFields.contractMemo,
    ...contractSearchValues,
    customerFields.planType,
    customerFields.requestItems,
    designDirection.coverageFocus?.join(" "),
    designDirection.coverageOther,
    designDirection.designPurpose?.join(" "),
    designDirection.purposeOther,
    comparisonMemos.join(" "),
  ].filter(Boolean).join(" "));
}

function getCustomerSearchKeyword() {
  return normalizeSearchText(customerSearchInput?.value ?? "");
}

function getLoadCustomerSearchKeyword() {
  return getCustomerSearchKeyword() || normalizeSearchText(getFieldValue("customerName"));
}

function getFilteredCustomers(keyword = getCustomerSearchKeyword()) {
  return getStoredCustomers()
    .filter((customer) => {
      return !keyword || buildCustomerSearchText(customer).includes(keyword);
    })
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}

function renderCustomerSearchResults(customers) {
  const keyword = getCustomerSearchKeyword();
  customerSearchResults.innerHTML = "";

  if (!keyword) {
    return;
  }

  if (!customers.length) {
    const empty = document.createElement("p");
    empty.className = "customer-search-empty";
    empty.textContent = "검색 결과가 없습니다.";
    customerSearchResults.append(empty);
    return;
  }

  customers.slice(0, 20).forEach((customer) => {
    const button = document.createElement("button");
    button.className = "customer-result-button";
    button.type = "button";
    button.dataset.customerId = customer.id;
    button.textContent = buildCustomerLabel(customer);
    customerSearchResults.append(button);
  });
}

function renderSavedCustomerList(selectedId = "") {
  const customers = getFilteredCustomers();
  savedCustomerSelect.innerHTML = '<option value="">저장된 고객 선택</option>';

  customers.forEach((customer) => {
    const option = document.createElement("option");
    option.value = customer.id;
    option.textContent = buildCustomerLabel(customer);
    savedCustomerSelect.append(option);
  });

  if ([...savedCustomerSelect.options].some((option) => option.value === selectedId)) {
    savedCustomerSelect.value = selectedId;
  } else if (customers.length === 1) {
    savedCustomerSelect.value = customers[0].id;
  }

  renderCustomerSearchResults(customers);
}

function saveAutoDraft(state = collectCustomerState()) {
  localStorage.setItem(
    getScopedStorageKey(autoSaveDraftKey),
    JSON.stringify({
      selectedId: savedCustomerSelect.value,
      updatedAt: new Date().toISOString(),
      state,
    }),
  );
  scheduleCloudSync();
}

function upsertAutoSavedCustomer(state) {
  const customerName = state.fields?.customerName?.trim() ?? "";
  const selectedId = savedCustomerSelect.value;

  if (!selectedId && customerName.length < 2) {
    return "";
  }

  const customers = getStoredCustomers();
  const existingIndex = selectedId
    ? customers.findIndex((customer) => customer.id === selectedId)
    : -1;
  const now = new Date().toISOString();
  const id =
    existingIndex >= 0
      ? selectedId
      : `customer-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const record = {
    id,
    createdAt: existingIndex >= 0 ? customers[existingIndex].createdAt : now,
    updatedAt: now,
    state,
  };

  if (existingIndex >= 0) {
    customers[existingIndex] = record;
  } else if (customerName.length >= 2) {
    customers.push(record);
  } else {
    return "";
  }

  setStoredCustomers(customers);
  return id;
}

function runAutoSave() {
  const state = collectCustomerState();
  saveAutoDraft(state);
  const savedId = upsertAutoSavedCustomer(state);

  if (savedId) {
    renderSavedCustomerList(savedId);
  }

  showManagerStatus("자동 저장됨");
}

function scheduleAutoSave() {
  window.clearTimeout(autoSaveTimer);
  autoSaveTimer = window.setTimeout(runAutoSave, 700);
}

function restoreAutoSavedDraft() {
  try {
    const draft = JSON.parse(localStorage.getItem(getScopedStorageKey(autoSaveDraftKey)));

    if (!draft?.state) {
      return false;
    }

    applyCustomerState(draft.state);
    if (draft.selectedId) {
      savedCustomerSelect.value = draft.selectedId;
    }
    showManagerStatus("자동 저장된 입력 내용을 복원했습니다.");
    return true;
  } catch {
    return false;
  }
}

function saveCurrentCustomer() {
  const customerName = getFieldValue("customerName");

  if (!customerName) {
    alert("고객명을 입력한 뒤 저장해주세요.");
    return;
  }

  const customers = getStoredCustomers();
  const selectedId = savedCustomerSelect.value;
  const now = new Date().toISOString();
  const state = collectCustomerState();
  const existingIndex = customers.findIndex((customer) => customer.id === selectedId);
  const id =
    existingIndex >= 0
      ? selectedId
      : `customer-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const record = {
    id,
    createdAt: existingIndex >= 0 ? customers[existingIndex].createdAt : now,
    updatedAt: now,
    state,
  };

  if (existingIndex >= 0) {
    customers[existingIndex] = record;
  } else {
    customers.push(record);
  }

  setStoredCustomers(customers);
  saveAutoDraft(state);
  renderSavedCustomerList(id);
  showManagerStatus("고객 정보가 저장되었습니다.");
}

function loadCustomerById(selectedId) {
  const customer = getStoredCustomers().find((item) => item.id === selectedId);

  if (!customer) {
    alert("저장된 고객을 찾을 수 없습니다.");
    renderSavedCustomerList();
    return;
  }

  applyCustomerState(customer.state);
  savedCustomerSelect.value = selectedId;
  saveAutoDraft(customer.state);
  showManagerStatus("고객 정보를 불러왔습니다.");
}

function loadSelectedCustomer() {
  let selectedId = savedCustomerSelect.value;

  if (!selectedId) {
    const keyword = getLoadCustomerSearchKeyword();
    const customers = getFilteredCustomers(keyword);
    const exactMatch = customers.find(
      (customer) => normalizeSearchText(customer.state?.fields?.customerName) === keyword,
    );
    const customerToLoad = exactMatch || (customers.length === 1 ? customers[0] : null);

    if (!customerToLoad) {
      alert(customers.length > 1 ? "검색 결과가 여러 명입니다. 검색 결과에서 고객을 클릭해주세요." : "검색되는 저장 고객이 없습니다.");
      renderSavedCustomerList();
      return;
    }

    selectedId = customerToLoad.id;
    savedCustomerSelect.value = selectedId;
  }

  loadCustomerById(selectedId);
}

function deleteSelectedCustomer() {
  const selectedId = savedCustomerSelect.value;

  if (!selectedId) {
    alert("삭제할 고객을 선택해주세요.");
    return;
  }

  const customers = getStoredCustomers();
  const customer = customers.find((item) => item.id === selectedId);
  const name = customer?.state?.fields?.customerName ?? "선택한 고객";

  if (!confirm(`${name} 저장 정보를 삭제할까요?`)) {
    return;
  }

  setStoredCustomers(customers.filter((item) => item.id !== selectedId));
  localStorage.removeItem(getScopedStorageKey(autoSaveDraftKey));
  scheduleCloudSync();
  renderSavedCustomerList();
  showManagerStatus("저장 정보가 삭제되었습니다.");
}

function getEmptyCustomerState() {
  return {
    fields: {},
    designDirection: {},
    majorDisease: {},
    medicationStatus: "none",
    notices: [{}],
    fiveYearStatus: "none",
    fiveYearNotices: [],
    tenYearStatus: "none",
    tenYearNotices: [],
    contracts: [{}],
    comparison: [],
  };
}

function startNewCustomer() {
  const emptyState = getEmptyCustomerState();

  applyCustomerState(emptyState);
  savedCustomerSelect.value = "";
  customerSearchInput.value = "";
  localStorage.removeItem(getScopedStorageKey(autoSaveDraftKey));
  scheduleCloudSync();
  renderSavedCustomerList();
  showManagerStatus("새 고객 입력 화면으로 초기화했습니다.");
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  copyStatus.textContent = successMessage;
  window.setTimeout(() => {
    copyStatus.textContent = "";
  }, 1800);
}

function printCustomerRecord() {
  const originalTitle = previewTitle.textContent;
  previewTitle.textContent = "고객관리 정보";
  document.body.classList.add("customer-record-print");
  renderOutput();

  const cleanup = () => {
    document.body.classList.remove("customer-record-print");
    previewTitle.textContent = originalTitle;
  };

  window.addEventListener("afterprint", cleanup, { once: true });
  window.print();
  window.setTimeout(cleanup, 0);
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function exportExcel() {
  if (!ensureValid()) return;

  const rows = [
    ["항목", "내용"],
    ["설계번호", fields.designNumber.value.trim()],
    ["고객명", fields.customerName.value.trim()],
    ["성별", fields.gender.value],
    ["생년월일", getBirthDateForInsurer() || getFieldValue("residentNumber")],
    ["직업", fields.job.value.trim()],
    ["연락처(통신사 포함)", getFieldValue("phoneCarrier")],
    ["주소", getFieldValue("address")],
    ["이메일", getFieldValue("email")],
    ["추가 요청사항", splitLines(fields.requestItems.value).join(", ")],
    ["설계 방향", buildDesignDirectionLines().join("\n")],
  ];

  const majorDiseaseLine = buildMajorDiseaseLine();
  const medicationLine = buildMedicationLine();

  if (majorDiseaseLine) {
    rows.push(["약물복용 확인", majorDiseaseLine]);
  }

  if (medicationLine) {
    rows.push(["약 복용", medicationLine]);
  }

  collectContracts().forEach((contract, index) => {
    const details = [
      contract.company,
      contract.product,
      contract.premium,
      contract.date,
      contract.status,
      contract.memo,
    ].filter(Boolean);
    if (details.length) {
      rows.push([`계약정보 ${index + 1}`, details.join(" / ")]);
    }
  });

  getActiveComparisonRows().forEach((row, index) => {
    rows.push([
      row.selected ? "보험사 비교 최종선택" : `보험사 비교 ${index + 1}`,
      [row.company, row.product, row.price, row.memo].filter(Boolean).join(" / "),
    ]);
  });

  collectNotices().forEach((notice, index) => {
    rows.push([
      `3개월 이내 고지사항 ${index + 1}`,
      [
        notice.disease,
        notice.date,
        notice.firstVisitDate && `최초 내원일: ${notice.firstVisitDate}`,
        notice.lastVisitDate && `최종 내원일: ${notice.lastVisitDate}`,
        notice.bodyPart && `치료부위: ${notice.bodyPart}`,
        notice.recurrence && normalizeRecurrence(notice.recurrence),
        notice.categories?.length && `고지 구분: ${notice.categories.join(" / ")}`,
        `${notice.careType}${notice.visitDays ? ` ${notice.visitDays}일` : ""}`,
        notice.treatments.join(" / "),
        notice.memo,
      ]
        .filter(Boolean)
        .join(" / "),
    ]);
  });

  const fiveYearRows = collectFiveYear();
  if (fiveYearRows.length) {
    fiveYearRows.forEach((item) => {
      rows.push([
        `5년 이내 ${item.type}`,
        [
          item.disease,
          item.date,
          item.firstVisitDate && `최초 내원일: ${item.firstVisitDate}`,
          item.lastVisitDate && `최종 내원일: ${item.lastVisitDate}`,
          item.visitDays && `병원 간 일수: ${item.visitDays}일`,
          item.bodyPart && `치료부위: ${item.bodyPart}`,
          item.recurrence && normalizeRecurrence(item.recurrence),
          item.detail,
          item.state,
        ].filter(Boolean).join(" / "),
      ]);
    });
  } else {
    rows.push(["5년 이내", "고지사항 없음"]);
  }

  const tenYearRows = collectTenYear();
  if (tenYearRows.length) {
    tenYearRows.forEach((item) => {
      rows.push([
        `10년 이내 ${item.type}`,
        [
          item.disease,
          item.date,
          item.firstVisitDate && `최초 내원일: ${item.firstVisitDate}`,
          item.lastVisitDate && `최종 내원일: ${item.lastVisitDate}`,
          item.visitDays && `병원 간 일수: ${item.visitDays}일`,
          item.bodyPart && `치료부위: ${item.bodyPart}`,
          item.recurrence && normalizeRecurrence(item.recurrence),
          item.detail,
          item.state,
        ].filter(Boolean).join(" / "),
      ]);
    });
  } else {
    rows.push(["10년 이내", "고지사항 없음"]);
  }

  const content = "\ufeff" + rows.map((row) => row.map(escapeCell).join("\t")).join("\n");
  downloadFile(`보험설계_고지사항_${fields.designNumber.value.trim() || "export"}.xls`, content, "application/vnd.ms-excel;charset=utf-8");
}

function handleFormChange(event) {
  if (event.target === majorOtherToggle) {
    toggleElement(majorOther, majorOtherToggle.checked);
  }

  if (event.target === coverageOtherToggle) {
    toggleElement(coverageOther, coverageOtherToggle.checked);
  }

  if (event.target === purposeOtherToggle) {
    toggleElement(purposeOther, purposeOtherToggle.checked);
  }

  if (event.target.name === "premiumRange") {
    toggleElement(premiumCustom, event.target.value === "custom");
  }

  if (event.target.name === "medicationStatus") {
    toggleElement(medicationDetails, event.target.value === "yes");
  }

  if (event.target.name === "fiveYearStatus") {
    toggleElement(fiveYearDetails, event.target.value === "yes");

    if (event.target.value === "yes" && !fiveYearList.querySelector(".notice-card")) {
      addFiveYearNotice();
    }
  }

  if (event.target.name === "tenYearStatus") {
    toggleElement(tenYearDetails, event.target.value === "yes");

    if (event.target.value === "yes" && !tenYearList.querySelector(".notice-card")) {
      addTenYearNotice();
    }
  }

  if (event.target.matches("[data-treatment-other-toggle]")) {
    const card = event.target.closest(".notice-card");
    toggleElement(card.querySelector("[data-treatment-other]"), event.target.checked);
  }

  renderOutput();
}

noticeList.addEventListener("click", (event) => {
  if (!event.target.matches("[data-remove-notice]")) return;
  event.target.closest(".notice-card").remove();
  refreshNoticeNumbers();
  renderOutput();
  scheduleAutoSave();
});

contractList.addEventListener("click", (event) => {
  const card = event.target.closest(".contract-card");
  if (!card) return;

  if (event.target.matches("[data-toggle-contract]")) {
    setContractCollapsed(card, !card.classList.contains("is-collapsed"));
    scheduleAutoSave();
    return;
  }

  if (event.target.matches("[data-remove-contract]")) {
    card.remove();
    if (!contractList.querySelector(".contract-card")) {
      addContract();
    }
    refreshContractNumbers();
    renderOutput();
    scheduleAutoSave();
  }
});

fiveYearList.addEventListener("click", (event) => {
  if (!event.target.matches("[data-remove-five-year]")) return;
  event.target.closest(".notice-card").remove();
  refreshFiveYearNumbers();
  renderOutput();
  scheduleAutoSave();
});

tenYearList.addEventListener("click", (event) => {
  if (!event.target.matches("[data-remove-ten-year]")) return;
  event.target.closest(".notice-card").remove();
  refreshTenYearNumbers();
  renderOutput();
  scheduleAutoSave();
});

addNoticeButton.addEventListener("click", () => {
  addNotice();
  scheduleAutoSave();
});
openContractManagementButton.addEventListener("click", () => setContractManagementMode(true));
copyCustomerManagementButton.addEventListener("click", () => {
  copyText(buildOutput(), "고객정보 복사 완료");
});
printCustomerManagementButton.addEventListener("click", printCustomerRecord);
backToMainButton.addEventListener("click", () => setContractManagementMode(false));
addContractButton.addEventListener("click", () => {
  addContract();
  scheduleAutoSave();
});
addComparisonButton.addEventListener("click", () => {
  addComparisonRow();
  scheduleAutoSave();
});
addFiveYearButton.addEventListener("click", () => {
  addFiveYearNotice();
  scheduleAutoSave();
});
addTenYearButton.addEventListener("click", () => {
  addTenYearNotice();
  scheduleAutoSave();
});
authForm.addEventListener("submit", loginWithEmail);
signupButton.addEventListener("click", signupWithEmail);
logoutButton.addEventListener("click", logoutCustomerApp);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden" && !appRoot.classList.contains("is-auth-hidden")) {
    window.clearTimeout(autoSaveTimer);
    runAutoSave();
    pushCloudSnapshot();
  }
});
window.addEventListener("online", scheduleCloudSync);
saveCustomerButton.addEventListener("click", saveCurrentCustomer);
loadCustomerButton.addEventListener("click", loadSelectedCustomer);
newCustomerButton.addEventListener("click", startNewCustomer);
deleteCustomerButton.addEventListener("click", deleteSelectedCustomer);
customerSearchInput.addEventListener("input", () => renderSavedCustomerList(savedCustomerSelect.value));
customerSearchResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-customer-id]");
  if (!button) return;
  savedCustomerSelect.value = button.dataset.customerId;
  loadCustomerById(button.dataset.customerId);
});
savedCustomerSelect.addEventListener("change", () => {
  if (savedCustomerSelect.value) {
    loadSelectedCustomer();
  }
});
form.addEventListener("input", (event) => {
  if (event.target.matches("[data-contract-field]")) {
    refreshContractNumbers();
  }
  renderOutput();
  scheduleAutoSave();
});
form.addEventListener("change", (event) => {
  handleFormChange(event);
  scheduleAutoSave();
});

copyButton.addEventListener("click", () => {
  if (!ensureValid()) return;
  copyText(buildOutput(), "복사 완료");
});

kakaoCopyButton.addEventListener("click", () => {
  if (!ensureValid()) return;
  copyText(buildOutput().replace(/\n{3,}/g, "\n\n"), "카카오톡용 복사 완료");
});

insurerCopyButton.addEventListener("click", () => {
  if (!ensureValid()) return;
  copyText(buildOutput({ insurerMode: true }), "보험사 제출용 복사 완료");
});

pdfButton.addEventListener("click", () => {
  if (!ensureValid()) return;
  window.print();
});

excelButton.addEventListener("click", exportExcel);
setContractManagementMode(window.location.hash === "#contracts", false);
initializeAuthentication();
