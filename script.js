const form = document.querySelector("#requestForm");
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

  insuranceCompany: document.querySelector("#insuranceCompany"),
  insuranceProduct: document.querySelector("#insuranceProduct"),
  contractPremium: document.querySelector("#contractPremium"),
  contractDate: document.querySelector("#contractDate"),
  contractStatus: document.querySelector("#contractStatus"),
  contractMemo: document.querySelector("#contractMemo"),

  medDisease: document.querySelector("#medDisease"),
  medName: document.querySelector("#medName"),
  medPeriod: document.querySelector("#medPeriod"),
};

let noticeIdCounter = 0;
let fiveYearIdCounter = 0;
let tenYearIdCounter = 0;
const customerStorageKey = "insuranceDisclosureCustomers";
const autoSaveDraftKey = "insuranceDisclosureAutoSaveDraft";
let autoSaveTimer = null;

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

function getStoredCustomers() {
  try {
    return JSON.parse(localStorage.getItem(customerStorageKey)) ?? [];
  } catch {
    return [];
  }
}

function setStoredCustomers(customers) {
  localStorage.setItem(customerStorageKey, JSON.stringify(customers));
}

function showManagerStatus(message) {
  managerStatus.textContent = message;
  window.setTimeout(() => {
    managerStatus.textContent = "";
  }, 2000);
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

  card.querySelectorAll('[data-notice-field="recovery"]').forEach((radio) => {
    radio.name = `recovery-${noticeId}`;
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
  card.querySelector('[data-notice-field="visitDays"]').value = prefill.visitDays ?? "";
  card.querySelector('[data-notice-field="bodyPart"]').value = prefill.bodyPart ?? "";
  card.querySelector('[data-notice-field="visits"]').value = prefill.visits ?? 1;
  card.querySelector('[data-notice-field="memo"]').value = prefill.memo ?? "";

  if (prefill.careType) {
    const careType = card.querySelector(`[data-notice-field="careType"][value="${prefill.careType}"]`);
    if (careType) careType.checked = true;
  }

  if (prefill.recovery) {
    const recovery = card.querySelector(`[data-notice-field="recovery"][value="${prefill.recovery}"]`);
    if (recovery) recovery.checked = true;
  }

  if (prefill.recurrence) {
    const recurrence = card.querySelector(`[data-notice-field="recurrence"][value="${prefill.recurrence}"]`);
    if (recurrence) recurrence.checked = true;
  }

  if (prefill.treatments?.length) {
    prefill.treatments.forEach((treatment) => {
      const checkbox = card.querySelector(`[data-treatment][value="${treatment}"]`);
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
    recurrence: selectedValue(card, '[data-notice-field="recurrence"]'),
    careType: selectedValue(card, '[data-notice-field="careType"]'),
    visits: card.querySelector('[data-notice-field="visits"]').value.trim() || "1",
    treatments,
    recovery: selectedValue(card, '[data-notice-field="recovery"]'),
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
  if (prefill.recurrence) {
    const recurrence = card.querySelector(`[data-five-field="recurrence"][value="${prefill.recurrence}"]`);
    if (recurrence) recurrence.checked = true;
  }

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
  if (prefill.recurrence) {
    const recurrence = card.querySelector(`[data-ten-field="recurrence"][value="${prefill.recurrence}"]`);
    if (recurrence) recurrence.checked = true;
  }

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
    recurrence: selectedValue(card, '[data-five-field="recurrence"]'),
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
    recurrence: selectedValue(card, '[data-ten-field="recurrence"]'),
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

function refreshComparisonNumbers() {
  [...comparisonList.querySelectorAll(".comparison-row")].forEach((row, index) => {
    row.querySelector('input[name="finalChoice"]').value = String(index);
  });
}

function addComparisonRow(prefill = {}) {
  const row = document.createElement("div");
  row.className = "comparison-row";
  row.innerHTML = `
    <label><span>최종</span><input type="radio" name="finalChoice" /></label>
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
    selected: selectedValue(document, 'input[name="finalChoice"]') === String(index),
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
  return {
    version: 1,
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
      insuranceCompany: getFieldValue("insuranceCompany"),
      insuranceProduct: getFieldValue("insuranceProduct"),
      contractPremium: getFieldValue("contractPremium"),
      contractDate: getFieldValue("contractDate"),
      contractStatus: fields.contractStatus?.value ?? "",
      contractMemo: fields.contractMemo?.value ?? "",
      medDisease: getFieldValue("medDisease"),
      medName: getFieldValue("medName"),
      medPeriod: getFieldValue("medPeriod"),
    },
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
    if (notice.date) lines.push(`* ${notice.date}`);
    if (notice.firstVisitDate) lines.push(`* 최초 내원일: ${notice.firstVisitDate}`);
    if (notice.lastVisitDate) lines.push(`* 최종 내원일: ${notice.lastVisitDate}`);
    if (notice.visitDays) lines.push(`* 병원 간 일수: ${notice.visitDays}일`);
    if (notice.bodyPart) lines.push(`* 치료부위: ${notice.bodyPart}`);
    if (notice.recurrence) lines.push(`* 초진/재발: ${notice.recurrence}`);
    lines.push(`* ${notice.careType} ${notice.visits}회`);
    if (notice.treatments.length) lines.push(`* ${notice.treatments.join(" / ")}`);
    if (notice.memo) lines.push(`* ${notice.memo}`);
    lines.push(`* ${notice.recovery}`);
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
    if (item.recurrence) lines.push(`* 초진/재발: ${item.recurrence}`);
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
    if (item.recurrence) lines.push(`* 초진/재발: ${item.recurrence}`);
    if (item.detail) lines.push(`* ${item.detail}`);
    if (item.state) lines.push(`* 현재상태: ${item.state}`);
  });

  return lines;
}

function buildMedicationLine() {
  const medication = collectMedication();

  if (medication.status !== "yes") {
    return "약물 복용 없음";
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

  return diseases.length ? `중대질환 확인: ${diseases.join(", ")}` : "중대질환 해당 없음";
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
  const contractRows = [
    ["보험사", getFieldValue("insuranceCompany")],
    ["보험상품", getFieldValue("insuranceProduct")],
    ["보험료", getFieldValue("contractPremium")],
    ["계약일", getFieldValue("contractDate")],
    ["계약상태", fields.contractStatus?.value ?? ""],
    ["계약 메모", fields.contractMemo?.value?.trim() ?? ""],
  ].filter(([, value]) => value);

  if (!contractRows.length) {
    return [];
  }

  return contractRows.map(([label, value]) => `${label}: ${value}`);
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

  const selected = rows.find((row) => row.selected);
  if (selected) {
    const finalText = [selected.company, selected.product, selected.price].filter(Boolean).join(" / ");
    lines.push(`최종 결정: ${finalText || "선택 상품 정보 확인 필요"}`);
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

  lines.push("4. 고지", "", buildMajorDiseaseLine(), buildMedicationLine(), "", ...buildNoticeLines(collectNotices()), "", ...buildFiveYearLines(), "", ...buildTenYearLines());

  return lines.join("\n");
}

function validateForm() {
  const warnings = [];
  const notices = collectNotices();

  if (!fields.customerName.value.trim()) warnings.push("고객명을 입력해주세요.");

  notices.forEach((notice, index) => {
    if (!notice.disease) warnings.push(`${index + 1}번 고지사항의 병명을 입력해주세요.`);
    if (!notice.date) warnings.push(`${index + 1}번 고지사항의 진료일을 선택해주세요.`);
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
  const company = customer.state?.fields?.insuranceCompany;
  const product = customer.state?.fields?.insuranceProduct;
  const finalChoice = customer.state?.comparison?.find((row) => row.selected);
  const finalSummary = finalChoice
    ? [finalChoice.company, finalChoice.product, finalChoice.price].filter(Boolean).join(" ")
    : "";
  const savedDate = customer.updatedAt ? new Date(customer.updatedAt).toLocaleString("ko-KR") : "";
  return [name, residentNumber, finalSummary || company, finalSummary ? "" : product, savedDate].filter(Boolean).join(" / ");
}

function normalizeSearchText(value) {
  return String(value ?? "").replace(/\s+/g, "").toLowerCase();
}

function buildCustomerSearchText(customer) {
  const state = customer.state ?? {};
  const customerFields = state.fields ?? {};
  const finalChoice = state.comparison?.find((row) => row.selected) ?? {};
  const comparisonMemos = (state.comparison ?? []).map((row) => row.memo);
  const designDirection = state.designDirection ?? {};

  return normalizeSearchText([
    customerFields.customerName,
    customerFields.residentNumber,
    customerFields.birthDate,
    customerFields.gender,
    customerFields.job,
    customerFields.phoneCarrier,
    customerFields.address,
    customerFields.email,
    finalChoice.company,
    finalChoice.product,
    finalChoice.price,
    finalChoice.memo,
    customerFields.insuranceCompany,
    customerFields.insuranceProduct,
    customerFields.contractPremium,
    customerFields.contractStatus,
    customerFields.contractMemo,
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
  return normalizeSearchText(customerSearchInput?.value || getFieldValue("customerName"));
}

function getFilteredCustomers() {
  const keyword = getCustomerSearchKeyword();
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
    autoSaveDraftKey,
    JSON.stringify({
      selectedId: savedCustomerSelect.value,
      updatedAt: new Date().toISOString(),
      state,
    }),
  );
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
    const draft = JSON.parse(localStorage.getItem(autoSaveDraftKey));

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
    const keyword = getCustomerSearchKeyword();
    const customers = getFilteredCustomers();
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
  localStorage.removeItem(autoSaveDraftKey);
  renderSavedCustomerList();
  showManagerStatus("저장 정보가 삭제되었습니다.");
}

function startNewCustomer() {
  const emptyState = {
    fields: {},
    designDirection: {},
    majorDisease: {},
    medicationStatus: "none",
    notices: [{}],
    fiveYearStatus: "none",
    fiveYearNotices: [],
    tenYearStatus: "none",
    tenYearNotices: [],
    comparison: [],
  };

  applyCustomerState(emptyState);
  savedCustomerSelect.value = "";
  customerSearchInput.value = "";
  localStorage.removeItem(autoSaveDraftKey);
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
    ["보험사", getFieldValue("insuranceCompany")],
    ["보험상품", getFieldValue("insuranceProduct")],
    ["보험료", getFieldValue("contractPremium")],
    ["계약일", getFieldValue("contractDate")],
    ["계약상태", fields.contractStatus?.value ?? ""],
    ["계약 메모", fields.contractMemo?.value ?? ""],
    ["추가 요청사항", splitLines(fields.requestItems.value).join(", ")],
    ["설계 방향", buildDesignDirectionLines().join("\n")],
    ["중대질환", buildMajorDiseaseLine()],
    ["약 복용", buildMedicationLine()],
  ];

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
        notice.visitDays && `병원 간 일수: ${notice.visitDays}일`,
        notice.bodyPart && `치료부위: ${notice.bodyPart}`,
        notice.recurrence && `초진/재발: ${notice.recurrence}`,
        `${notice.careType} ${notice.visits}회`,
        notice.treatments.join(" / "),
        notice.recovery,
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
          item.recurrence && `초진/재발: ${item.recurrence}`,
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
          item.recurrence && `초진/재발: ${item.recurrence}`,
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
form.addEventListener("input", () => {
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

renderSavedCustomerList();
const didRestoreAutoSave = restoreAutoSavedDraft();

if (!didRestoreAutoSave) {
  addNotice({
    disease: "",
    date: "",
    careType: "통원",
    visits: "",
    treatments: ["약처방"],
    recovery: "완치",
  });
}

excelButton.addEventListener("click", exportExcel);

renderSavedCustomerList(savedCustomerSelect.value);
renderOutput();
