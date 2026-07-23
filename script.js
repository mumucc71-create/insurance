const form = document.querySelector("#requestForm");
const authScreen = document.querySelector("#authScreen");
const authForm = document.querySelector("#authForm");
const authName = document.querySelector("#authName");
const authPhone = document.querySelector("#authPhone");
const signupButton = document.querySelector("#signupButton");
const authStatus = document.querySelector("#authStatus");
const configStatus = document.querySelector("#configStatus");
const appRoot = document.querySelector("#appRoot");
const syncStatus = document.querySelector("#syncStatus");
const accountInfo = document.querySelector("#accountInfo");
const logoutButton = document.querySelector("#logoutButton");
const pageTitle = document.querySelector("#page-title");
const previewTitle = document.querySelector("#preview-title");
const openContractManagementButton = document.querySelector("#openContractManagementButton");
const openDesignManagerButton = document.querySelector("#openDesignManagerButton");
const phoneConsultationButton = document.querySelector("#phoneConsultationButton");
const promotionButton = document.querySelector("#promotionButton");
const syncAllCloudButton = document.querySelector("#syncAllCloudButton");
const phoneConsultationMemoList = document.querySelector("#phoneConsultationMemoList");
const phoneConsultationTitleInput = document.querySelector("#phoneConsultationTitleInput");
const phoneConsultationMemoInput = document.querySelector("#phoneConsultationMemoInput");
const phoneConsultationMemoCanvasWrap = document.querySelector("#phoneConsultationMemoCanvasWrap");
const phoneConsultationHighlightCanvas = document.querySelector("#phoneConsultationHighlightCanvas");
const phoneConsultationHighlightButton = document.querySelector("#phoneConsultationHighlightButton");
const phoneConsultationEraserButton = document.querySelector("#phoneConsultationEraserButton");
const phoneConsultationHighlightSwatches = document.querySelectorAll("#phoneConsultationHighlightTools [data-highlight-color]");
const phoneConsultationStatus = document.querySelector("#phoneConsultationStatus");
const savePhoneConsultationButton = document.querySelector("#savePhoneConsultationButton");
const newPhoneConsultationButton = document.querySelector("#newPhoneConsultationButton");
const deletePhoneConsultationButton = document.querySelector("#deletePhoneConsultationButton");
const phoneConsultationCommonTemplateInput = document.querySelector("#phoneConsultationCommonTemplateInput");
const savePhoneConsultationCommonTemplateButton = document.querySelector("#savePhoneConsultationCommonTemplateButton");
const insertPhoneConsultationCommonTemplateButton = document.querySelector("#insertPhoneConsultationCommonTemplateButton");
const phoneConsultationCommonCanvasWrap = document.querySelector("#phoneConsultationCommonCanvasWrap");
const phoneConsultationCommonHighlightCanvas = document.querySelector("#phoneConsultationCommonHighlightCanvas");
const phoneConsultationCommonHighlightButton = document.querySelector("#phoneConsultationCommonHighlightButton");
const phoneConsultationCommonEraserButton = document.querySelector("#phoneConsultationCommonEraserButton");
const phoneConsultationCommonHighlightSwatches = document.querySelectorAll("#phoneConsultationCommonHighlightTools [data-highlight-color]");
const promotionChannelInput = document.querySelector("#promotionChannelInput");
const promotionToneInput = document.querySelector("#promotionToneInput");
const promotionLengthInput = document.querySelector("#promotionLengthInput");
const promotionTopicInput = document.querySelector("#promotionTopicInput");
const promotionCommentInput = document.querySelector("#promotionCommentInput");
const promotionImageInput = document.querySelector("#promotionImageInput");
const promotionCropAspectInput = document.querySelector("#promotionCropAspectInput");
const promotionImageCommandOutput = document.querySelector("#promotionImageCommandOutput");
const copyPromotionImageCommandButton = document.querySelector("#copyPromotionImageCommandButton");
const promotionSplitSizeInput = document.querySelector("#promotionSplitSizeInput");
const splitPromotionImageButton = document.querySelector("#splitPromotionImageButton");
const resizePromotionImageButton = document.querySelector("#resizePromotionImageButton");
const cropPromotionImageButton = document.querySelector("#cropPromotionImageButton");
const flipPromotionImageButton = document.querySelector("#flipPromotionImageButton");
const undoPromotionImageButton = document.querySelector("#undoPromotionImageButton");
const resetPromotionImageButton = document.querySelector("#resetPromotionImageButton");
const stampPromotionImageButton = document.querySelector("#stampPromotionImageButton");
const removeStampPromotionImageButton = document.querySelector("#removeStampPromotionImageButton");
const saveEditedPromotionImageButton = document.querySelector("#saveEditedPromotionImageButton");
const downloadPromotionImageButton = document.querySelector("#downloadPromotionImageButton");
const promotionImagePreview = document.querySelector("#promotionImagePreview");
const promotionCropCanvas = document.querySelector("#promotionCropCanvas");
const promotionToolColorInput = document.querySelector("#promotionToolColorInput");
const promotionToolOpacityInput = document.querySelector("#promotionToolOpacityInput");
const promotionTextColorInput = document.querySelector("#promotionTextColorInput");
const promotionTextSizeInput = document.querySelector("#promotionTextSizeInput");
const promotionBoxColorInput = document.querySelector("#promotionBoxColorInput");
const promotionShapeColorInput = document.querySelector("#promotionShapeColorInput");
const promotionFrameImageInput = document.querySelector("#promotionFrameImageInput");
const promotionBrushColorInput = document.querySelector("#promotionBrushColorInput");
const promotionBrushSizeInput = document.querySelector("#promotionBrushSizeInput");
const brushPromotionImageButton = document.querySelector("#brushPromotionImageButton");
const promotionBrushSizeControl = document.querySelector("#promotionBrushSizeControl");
const selectPromotionImageButton = document.querySelector("#selectPromotionImageButton");
const deletePromotionObjectButton = document.querySelector("#deletePromotionObjectButton");
const addPromotionToolColorButton = document.querySelector("#addPromotionToolColorButton");
const promotionColorPalette = document.querySelector("#promotionColorPalette");
const promotionStampOpacityInput = document.querySelector("#promotionStampOpacityInput");
const mosaicPromotionImageButton = document.querySelector("#mosaicPromotionImageButton");
const promotionShapeInput = document.querySelector("#promotionShapeInput");
const promotionShapeOpacityInput = document.querySelector("#promotionShapeOpacityInput");
const addShapePromotionImageButton = document.querySelector("#addShapePromotionImageButton");
const drawShapePromotionImageButton = document.querySelector("#drawShapePromotionImageButton");
const promotionColorToleranceInput = document.querySelector("#promotionColorToleranceInput");
const promotionImageMessageInput = document.querySelector("#promotionImageMessageInput");
const promotionToolColorChips = document.querySelectorAll("[data-tool-color-chip]");
const promotionSearchInput = document.querySelector("#promotionSearchInput");
const promotionNaverSearchButton = document.querySelector("#promotionNaverSearchButton");
const promotionPinterestSearchButton = document.querySelector("#promotionPinterestSearchButton");
const promotionGoogleSearchButton = document.querySelector("#promotionGoogleSearchButton");
const promotionScreenshotPasteZone = document.querySelector("#promotionScreenshotPasteZone");
const promotionMemoInput = document.querySelector("#promotionMemoInput");
const promotionSourceTextInput = document.querySelector("#promotionSourceTextInput");
const promotionIdeaTextInput = document.querySelector("#promotionIdeaTextInput");
const promotionIdeaImageInput = document.querySelector("#promotionIdeaImageInput");
const promotionIdeaUrlInput = document.querySelector("#promotionIdeaUrlInput");
const extractPromotionBlogButton = document.querySelector("#extractPromotionBlogButton");
const extractPromotionImageTextButton = document.querySelector("#extractPromotionImageTextButton");
const savePromotionIdeaButton = document.querySelector("#savePromotionIdeaButton");
const promotionEmojiBank = document.querySelector("#promotionEmojiBank");
const promotionSelectedEmojiPreview = document.querySelector("#promotionSelectedEmojiPreview");
const copyPromotionEmojiButton = document.querySelector("#copyPromotionEmojiButton");
const promotionIdeaList = document.querySelector("#promotionIdeaList");
const generatePromotionButton = document.querySelector("#generatePromotionButton");
const copyPromotionButton = document.querySelector("#copyPromotionButton");
const savePromotionButton = document.querySelector("#savePromotionButton");
const promotionOutput = document.querySelector("#promotionOutput");
const promotionSavedList = document.querySelector("#promotionSavedList");
const promotionSavedImageList = document.querySelector("#promotionSavedImageList");
const promotionCaseWhoInput = document.querySelector("#promotionCaseWhoInput");
const promotionCaseWhenInput = document.querySelector("#promotionCaseWhenInput");
const promotionCaseWhereInput = document.querySelector("#promotionCaseWhereInput");
const promotionCaseHowInput = document.querySelector("#promotionCaseHowInput");
const promotionCaseAmountInput = document.querySelector("#promotionCaseAmountInput");
const promotionCaseDetailInput = document.querySelector("#promotionCaseDetailInput");
const generatePromotionCaseButton = document.querySelector("#generatePromotionCaseButton");
const savePromotionCaseButton = document.querySelector("#savePromotionCaseButton");
const copyPromotionCaseButton = document.querySelector("#copyPromotionCaseButton");
const promotionCaseOutput = document.querySelector("#promotionCaseOutput");
const promotionCaseList = document.querySelector("#promotionCaseList");
const promotionStatus = document.querySelector("#promotionStatus");
const backToMainButton = document.querySelector("#backToMainButton");
const output = document.querySelector("#customerCopyText") || document.querySelector("#output");
const universeFileUploadButton = document.querySelector("#universeFileUploadButton");
const universeFileInput = document.querySelector("#universeFileInput");
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
const customerManagerPanel = document.querySelector(".customer-manager");
const toggleCustomerManagerButton = document.querySelector("#toggleCustomerManagerButton");
const saveCustomerButton = document.querySelector("#saveCustomerButton");
const loadCustomerButton = document.querySelector("#loadCustomerButton");
const recoverCustomerButton = document.querySelector("#recoverCustomerButton");
const dedupeCustomerButton = document.querySelector("#dedupeCustomerButton");
const newCustomerButton = document.querySelector("#newCustomerButton");
const deleteCustomerButton = document.querySelector("#deleteCustomerButton");
const managerStatus = document.querySelector("#managerStatus");
const contractList = document.querySelector("#contractList");
const contractTemplate = document.querySelector("#contractTemplate");
const addContractButton = document.querySelector("#addContractButton");
const comparisonList = document.querySelector("#comparisonList");
const addComparisonButton = document.querySelector("#addComparisonButton");
const designManagerList = document.querySelector("#designManagerList");
const addDesignManagerButton = document.querySelector("#addDesignManagerButton");
const selectedInsurerLabel = document.querySelector("#selectedInsurerLabel");
const moveSelectedInsurerTop = document.querySelector("#moveSelectedInsurerTop");
const moveSelectedInsurerUp = document.querySelector("#moveSelectedInsurerUp");
const moveSelectedInsurerDown = document.querySelector("#moveSelectedInsurerDown");
const moveSelectedInsurerBottom = document.querySelector("#moveSelectedInsurerBottom");
const insurerCompanyInput = document.querySelector("#insurerCompanyInput");
const insurerTypeInput = document.querySelector("#insurerTypeInput");
const insurerManagerInput = document.querySelector("#insurerManagerInput");
const insurerManagerPhoneInput = document.querySelector("#insurerManagerPhoneInput");
const insurerAdminInput = document.querySelector("#insurerAdminInput");
const insurerAdminPhoneInput = document.querySelector("#insurerAdminPhoneInput");
const insurerSiteUrlInput = document.querySelector("#insurerSiteUrlInput");
const insurerBrowserInput = document.querySelector("#insurerBrowserInput");
const insurerLoginIdInput = document.querySelector("#insurerLoginIdInput");
const insurerPasswordInput = document.querySelector("#insurerPasswordInput");
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
const medicationList = document.querySelector("#medicationList");
const addMedicationButton = document.querySelector("#addMedicationButton");
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

};

let noticeIdCounter = 0;
let fiveYearIdCounter = 0;
let tenYearIdCounter = 0;
let contractIdCounter = 0;
const customerStorageKey = "insuranceDisclosureCustomers";
const autoSaveDraftKey = "insuranceDisclosureAutoSaveDraft";
const localAccountStorageKey = "insuranceDisclosureLocalAccounts";
const cloudSessionStorageKey = "insuranceDisclosureCloudSession";
const cloudSessionBackupStorageKey = "insuranceDisclosureCloudSessionBackup";
const localSessionStorageKey = "insuranceDisclosureLocalSession";
const designManagerStorageKey = "insuranceDesignManagers";
const phoneConsultationStorageKey = "insurancePhoneConsultationMemos";
const phoneConsultationCommonTemplateStorageKey = "insurancePhoneConsultationCommonTemplate";
const phoneConsultationCommonTemplateUpdatedAtStorageKey = "insurancePhoneConsultationCommonTemplateUpdatedAt";
const phoneConsultationCommonTemplateHighlightStorageKey = "insurancePhoneConsultationCommonTemplateHighlight";
const phoneConsultationCommonTemplateHighlightStrokesStorageKey = "insurancePhoneConsultationCommonTemplateHighlightStrokes";
const phoneConsultationDraftStorageKey = "insurancePhoneConsultationDrafts";
const phoneConsultationOrderStorageKey = "insurancePhoneConsultationOrders";
const promotionPostsStorageKey = "insurancePromotionPosts";
const promotionImageSignatureStorageKey = "insurancePromotionImageSignature";
const promotionSavedImagesStorageKey = "insurancePromotionSavedImages";
const promotionCasesStorageKey = "insurancePromotionCases";
const promotionIdeasStorageKey = "insurancePromotionIdeas";
const promotionSelectedEmojisStorageKey = "insurancePromotionSelectedEmojis";
const promotionColorPaletteStorageKey = "insurancePromotionColorPalette";
const deletedCustomersStorageKey = "insuranceDisclosureDeletedCustomers";
const uiSessionStorageKey = "insuranceDisclosureUiSession";
const customerManagerCollapsedStorageKey = "insuranceCustomerManagerCollapsed";
let activePhoneConsultationId = "";
let activePhoneConsultationCustomerId = "";
let viewedPhoneConsultationMemoId = "";
let draggedPhoneConsultationMemoId = "";
let phoneConsultationMemoDragMoved = false;
let phoneConsultationHighlightMode = false;
let phoneConsultationHighlightDrawing = false;
let phoneConsultationHighlightColor = "#ffe45c";
let phoneConsultationHighlightLastPoint = null;
let phoneConsultationHighlightStartPoint = null;
let phoneConsultationHighlightSnapshot = null;
let phoneConsultationHighlightImage = "";
let phoneConsultationHighlightStrokes = [];
let phoneConsultationHighlightPreviousText = "";
let phoneConsultationHighlightResizeTimer = null;
let phoneConsultationHighlightEraseMode = false;
let phoneConsultationCommonHighlightMode = false;
let phoneConsultationCommonHighlightDrawing = false;
let phoneConsultationCommonHighlightColor = "#ffe45c";
let phoneConsultationCommonHighlightLastPoint = null;
let phoneConsultationCommonHighlightStartPoint = null;
let phoneConsultationCommonHighlightSnapshot = null;
let phoneConsultationCommonHighlightImage = "";
let phoneConsultationCommonHighlightStrokes = [];
let phoneConsultationCommonHighlightPreviousText = "";
let phoneConsultationCommonHighlightResizeTimer = null;
let phoneConsultationCommonHighlightEraseMode = false;
let autoSaveTimer = null;
let cloudSyncTimer = null;
let supabaseClient = null;
let currentSession = null;
let isHydratingCloud = false;
let hasCloudHydrated = false;
let localMode = false;
let activeUserId = "";
let authSettings = null;
let selectedDesignManagerRow = null;
let universeDisclosureText = "";
let medicalAnalysisJson = null;
let promotionImageObjectUrl = "";
let promotionColorPickMode = false;
let promotionPickedColor = null;
let promotionImageEditMode = "";
let promotionDragStart = null;
let promotionImageHistory = [];
let promotionOriginalImageDataUrl = "";
let promotionLiveColorBase = null;
let promotionTextOverlays = [];
let promotionTextBaseDataUrl = "";
let promotionTextBaseCanvas = null;
let promotionDraggingTextIndex = -1;
let promotionTextDragOffset = null;
let promotionSelectedTextIndex = -1;
let promotionResizingTextIndex = -1;
let promotionTextResizeStart = null;
let promotionFrameImage = null;
let promotionGraphicOverlays = [];
let promotionSelectedGraphicIndex = -1;
let promotionDraggingGraphicIndex = -1;
let promotionResizingGraphicIndex = -1;
let promotionGraphicDragOffset = null;
let promotionGraphicResizeStart = null;
let promotionOcrScriptPromise = null;
let promotionImageDbPromise = null;

function safeOn(element, type, handler, options) {
  if (!element) {
    console.warn(`[app] skipped ${type} listener: element missing`);
    return;
  }
  element.addEventListener(type, handler, options);
}

function preserveScrollPosition(callback) {
  const left = window.scrollX;
  const top = window.scrollY;
  const result = callback?.();
  restoreScrollPosition(left, top);
  return result;
}

function restoreScrollPosition(left, top) {
  window.scrollTo(left, top);
  requestAnimationFrame(() => {
    window.scrollTo(left, top);
    requestAnimationFrame(() => window.scrollTo(left, top));
  });
  window.setTimeout(() => window.scrollTo(left, top), 30);
  window.setTimeout(() => window.scrollTo(left, top), 120);
}

function focusWithoutPageJump(element) {
  if (!element) return;
  const left = window.scrollX;
  const top = window.scrollY;
  try {
    element.focus({ preventScroll: true });
  } catch {
    element.focus();
    restoreScrollPosition(left, top);
  }
}

function getSessionAuthName(session = currentSession) {
  const user = session?.user ?? {};
  const metadata = user.user_metadata ?? user.raw_user_meta_data ?? {};
  return String(user.name || metadata.name || "").trim();
}

function getSessionAuthPhone(session = currentSession) {
  const user = session?.user ?? {};
  const metadata = user.user_metadata ?? user.raw_user_meta_data ?? {};
  const emailPhone = String(user.email ?? "").match(/^(\d+)@phone\.insure\.local$/)?.[1] ?? "";
  return normalizeAuthPhone(user.phone || metadata.phone || emailPhone || authPhone.value);
}

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

function normalizeNoticeStatuses(prefill = {}) {
  const values = Array.isArray(prefill.statuses) ? prefill.statuses : [];
  if (!values.length && prefill.recurrences?.length) values.push(...prefill.recurrences);
  if (!values.length && prefill.recurrence) values.push(prefill.recurrence);
  if (prefill.recovery) values.push(prefill.recovery);
  return [...new Set(values.map(normalizeRecurrence).filter(Boolean))];
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

function pickLatestCommonTemplate(left, right) {
  const leftHasTimestamp = Boolean(left?.phoneConsultationCommonTemplateUpdatedAt);
  const rightHasTimestamp = Boolean(right?.phoneConsultationCommonTemplateUpdatedAt);
  const leftTime = new Date(
    left?.phoneConsultationCommonTemplateUpdatedAt
    || (left?.phoneConsultationCommonTemplate ? left?.updatedAt : 0)
    || 0,
  ).getTime();
  const rightTime = new Date(
    right?.phoneConsultationCommonTemplateUpdatedAt
    || (right?.phoneConsultationCommonTemplate ? right?.updatedAt : 0)
    || 0,
  ).getTime();
  const selected = rightTime >= leftTime ? right : left;
  const fallback = selected === right ? left : right;
  const hasExplicitTimestamp = selected === right ? rightHasTimestamp : leftHasTimestamp;
  return {
    content: hasExplicitTimestamp
      ? String(selected?.phoneConsultationCommonTemplate ?? "")
      : String(selected?.phoneConsultationCommonTemplate || fallback?.phoneConsultationCommonTemplate || ""),
    highlight: hasExplicitTimestamp
      ? String(selected?.phoneConsultationCommonHighlight || "")
      : String(selected?.phoneConsultationCommonHighlight || fallback?.phoneConsultationCommonHighlight || ""),
    strokes: hasExplicitTimestamp
      ? (Array.isArray(selected?.phoneConsultationCommonHighlightStrokes)
        ? selected.phoneConsultationCommonHighlightStrokes
        : [])
      : ((Array.isArray(selected?.phoneConsultationCommonHighlightStrokes)
        && selected.phoneConsultationCommonHighlightStrokes.length
        ? selected.phoneConsultationCommonHighlightStrokes
        : fallback?.phoneConsultationCommonHighlightStrokes) || []),
    updatedAt: selected?.phoneConsultationCommonTemplateUpdatedAt
      || fallback?.phoneConsultationCommonTemplateUpdatedAt
      || "",
  };
}

function mergeDraftSnapshots(...drafts) {
  const validDrafts = drafts.filter((draft) => draft && typeof draft === "object");
  if (!validDrafts.length) return null;

  return validDrafts.reduce((merged, draft) => {
    const mergedTime = new Date(merged?.updatedAt || 0).getTime();
    const draftTime = new Date(draft?.updatedAt || 0).getTime();
    const latest = draftTime >= mergedTime ? draft : merged;
    const oldest = draftTime >= mergedTime ? merged : draft;
    const commonTemplate = pickLatestCommonTemplate(oldest, latest);
    return {
      ...(oldest || {}),
      ...(latest || {}),
      state: latest?.state || oldest?.state || null,
      selectedId: latest?.selectedId || oldest?.selectedId || "",
      designManagers: mergeDesignManagers(
        Array.isArray(oldest?.designManagers) ? oldest.designManagers : [],
        Array.isArray(latest?.designManagers) ? latest.designManagers : [],
      ),
      phoneConsultationMemos: mergePhoneConsultationMemos(
        Array.isArray(oldest?.phoneConsultationMemos) ? oldest.phoneConsultationMemos : [],
        Array.isArray(latest?.phoneConsultationMemos) ? latest.phoneConsultationMemos : [],
      ),
      phoneConsultationCommonTemplate: commonTemplate.content,
      phoneConsultationCommonTemplateUpdatedAt: commonTemplate.updatedAt,
      phoneConsultationCommonHighlight: commonTemplate.highlight,
      phoneConsultationCommonHighlightStrokes: commonTemplate.strokes,
      phoneConsultationDrafts: mergePhoneConsultationRecordMap(oldest?.phoneConsultationDrafts, latest?.phoneConsultationDrafts),
      phoneConsultationOrders: mergePhoneConsultationRecordMap(oldest?.phoneConsultationOrders, latest?.phoneConsultationOrders),
      promotionPosts: mergePromotionPosts(
        Array.isArray(oldest?.promotionPosts) ? oldest.promotionPosts : [],
        Array.isArray(latest?.promotionPosts) ? latest.promotionPosts : [],
      ),
      universeDisclosureText: latest?.universeDisclosureText || oldest?.universeDisclosureText || "",
      medicalAnalysisJson: latest?.medicalAnalysisJson ?? oldest?.medicalAnalysisJson ?? null,
      updatedAt: latest?.updatedAt || oldest?.updatedAt || new Date().toISOString(),
    };
  });
}

function isInvalidCloudLoginError(message = "") {
  const text = String(message).toLowerCase();
  return /invalid login credentials|invalid_grant|wrong password|email not confirmed|user not found/.test(text);
}

function shouldFallbackToLocalAuth(errorMessage = "") {
  if (isInvalidCloudLoginError(errorMessage)) return false;
  return /요청 실패|network|failed to fetch|anon key|연결|timeout|401|403|500/.test(String(errorMessage).toLowerCase());
}

async function refreshCloudSession(session) {
  if (!session?.refresh_token) return session;

  const { data, error } = await supabaseJson("/auth/v1/token?grant_type=refresh_token", {
    method: "POST",
    body: { refresh_token: session.refresh_token },
  });

  if (error) return session;

  const refreshed = normalizeSupabaseSession(data);
  if (!refreshed) return session;

  saveCloudSession(refreshed);
  return refreshed;
}

async function ensureActiveCloudSession(session) {
  if (!session?.user?.id) return null;
  if (!session.access_token) return session;

  const probe = await supabaseJson("/rest/v1/insurance_app_data?select=user_id&limit=1", {
    authToken: session.access_token,
  });

  if (!probe.error) {
    saveCloudSession(session);
    return session;
  }

  return refreshCloudSession(session);
}

function buildLocalSession(account) {
  return {
    mode: "local",
    user: {
      id: account.id,
      name: account.name,
      phone: account.phone,
    },
  };
}

function saveLocalSession(session) {
  if (session) {
    localStorage.setItem(localSessionStorageKey, JSON.stringify(session));
  } else {
    localStorage.removeItem(localSessionStorageKey);
  }
}

function readSavedLocalSession() {
  const session = readJsonStorage(localSessionStorageKey);
  return session?.user?.id ? session : null;
}

function fillAuthFieldsFromSession(session) {
  const name = getSessionAuthName(session);
  const phone = getSessionAuthPhone(session);
  if (name) authName.value = name;
  if (phone) authPhone.value = formatPhoneNumber(phone);
}

function isLocalAuthSession(session) {
  return session?.mode === "local" || (!session?.access_token && !!session?.user?.id);
}

function resolveLocalAccountFromSession(session) {
  const accounts = readJsonStorage(localAccountStorageKey, []);
  const phone = getSessionAuthPhone(session);
  const matched = accounts.find((item) => item.id === session.user.id)
    || (phone ? accounts.find((item) => item.phone === phone) : null);

  if (matched) return matched;

  const name = getSessionAuthName(session);
  if (!name || phone.length < 10) return null;

  const recoveredAccount = {
    id: session.user.id || `local-${phone}`,
    name,
    phone,
    createdAt: new Date().toISOString(),
  };
  accounts.push(recoveredAccount);
  localStorage.setItem(localAccountStorageKey, JSON.stringify(accounts));
  return recoveredAccount;
}

async function restoreLocalAuthSession(session) {
  const account = resolveLocalAccountFromSession(session);
  if (!account) return false;

  localMode = true;
  currentSession = buildLocalSession(account);
  activeUserId = account.id;
  hasCloudHydrated = true;
  saveLocalSession(currentSession);
  try {
    migrateLegacyDataToCurrentAccount();
  } catch (error) {
    console.warn("[auth] legacy data migration skipped", error);
  }
  fillAuthFieldsFromSession(currentSession);
  showCustomerApp();
  restoreUiFromCurrentStorage();
  setSyncStatus("이 기기 저장");
  return true;
}

async function restoreCloudAuthSession(savedSession) {
  if (!isSupabaseConfigured()) return false;

  supabaseClient = { mode: "rest" };
  await getSupabaseAuthSettings();

  const session = await ensureActiveCloudSession(savedSession);
  if (!session?.user?.id) {
    saveCloudSession(null);
    return false;
  }

  localMode = false;
  saveLocalSession(null);
  saveCloudSession(session);
  fillAuthFieldsFromSession(session);
  await handleAuthSession(session);
  return true;
}

async function restoreSavedAuthSession() {
  const savedCloudSession = readSavedCloudSession();
  if (savedCloudSession?.user?.id && savedCloudSession.access_token) {
    const restored = await restoreCloudAuthSession(savedCloudSession);
    if (restored) return true;
  }

  if (isSupabaseConfigured()) {
    saveLocalSession(null);
    return false;
  }

  const savedLocalSession = readSavedLocalSession();
  if (savedLocalSession) {
    const restored = await restoreLocalAuthSession(savedLocalSession);
    if (restored) return true;
  }

  return false;
}

function restoreCustomersToUi() {
  const recovery = recoverAllStoredDataToCurrentAccount({ quiet: true });
  const customers = recovery.customers.length ? recovery.customers : getStoredCustomers();
  if (!customers.length) {
    applyCustomerState(getEmptyCustomerState());
    return false;
  }

  const draft = readJsonStorage(getScopedStorageKey(autoSaveDraftKey));
  const selectedId = draft?.selectedId && customers.some((customer) => customer.id === draft.selectedId)
    ? draft.selectedId
    : customers[0].id;
  const selectedCustomer = customers.find((customer) => customer.id === selectedId) || customers[0];

  savedCustomerSelect.value = selectedCustomer.id;
  applyCustomerState(selectedCustomer.state);
  if (recovery.recoveredCustomerCount > 0 || recovery.recoveredMemoCount > 0) {
    showManagerStatus(`이전 저장 고객 ${recovery.recoveredCustomerCount}명, 메모 ${recovery.recoveredMemoCount}건을 복구했습니다.`);
  } else {
    showManagerStatus(`${customers.length}명의 저장 고객을 불러왔습니다.`);
  }
  return true;
}

function recoverStoredCustomersManually() {
  const recovery = recoverAllStoredDataToCurrentAccount();
  renderSavedCustomerList(savedCustomerSelect.value);
  renderDesignManagers();
  renderOutput();

  if (!recovery.customers.length) {
    alert("이 브라우저에서 복구할 저장 고객을 찾지 못했습니다.\n\n1. 처음 저장했던 브라우저인지 확인\n2. 로그인 이름/연락처가 저장 때와 같은지 확인\n3. 상단 저장 방식이 '클라우드 저장'이면 다른 브라우저에서도 같은 정보로 로그인");
    return;
  }

  if (!savedCustomerSelect.value && recovery.customers[0]) {
    savedCustomerSelect.value = recovery.customers[0].id;
    applyCustomerState(recovery.customers[0].state);
  }

  const sourceText = recovery.sources.length ? `\n\n복구 위치:\n- ${recovery.sources.join("\n- ")}` : "";
  alert(
    `저장 고객 ${recovery.customers.length}명, 메모 ${recovery.phoneMemos.length}건을 불러왔습니다.`
    + `${recovery.recoveredCustomerCount || recovery.recoveredMemoCount
      ? `\n이전 데이터에서 고객 ${recovery.recoveredCustomerCount}명, 메모 ${recovery.recoveredMemoCount}건을 새로 합쳤습니다.`
      : ""}${sourceText}`,
  );
}

function persistDraftSnapshot(draft) {
  if (!draft || typeof draft !== "object") return;
  localStorage.setItem(getScopedStorageKey(autoSaveDraftKey), JSON.stringify(draft));
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

function getCurrentViewMode() {
  if (document.body.classList.contains("promotion-mode")) return "promotion";
  if (document.body.classList.contains("phone-consultation-mode")) return "phone";
  if (document.body.classList.contains("design-manager-mode")) return "insurers";
  if (document.body.classList.contains("contract-management-mode")) return "contracts";
  return "main";
}

function rememberUiSession(extra = {}) {
  if (!currentSession?.user?.id) return;
  const previous = readJsonStorage(getScopedStorageKey(uiSessionStorageKey), {});
  const selectedId = savedCustomerSelect?.value || previous.selectedId || "";
  localStorage.setItem(
    getScopedStorageKey(uiSessionStorageKey),
    JSON.stringify({
      ...previous,
      selectedId,
      viewMode: getCurrentViewMode(),
      updatedAt: new Date().toISOString(),
      ...extra,
    }),
  );
}

function getRememberedUiSession() {
  const session = readJsonStorage(getScopedStorageKey(uiSessionStorageKey), {});
  return session && typeof session === "object" ? session : {};
}

function setCustomerManagerCollapsed(collapsed, persist = true) {
  customerManagerPanel?.classList.toggle("is-collapsed", collapsed);
  if (toggleCustomerManagerButton) {
    toggleCustomerManagerButton.textContent = collapsed ? "펼치기" : "접기";
    toggleCustomerManagerButton.setAttribute("aria-expanded", collapsed ? "false" : "true");
  }
  if (persist) {
    localStorage.setItem(customerManagerCollapsedStorageKey, collapsed ? "1" : "0");
  }
}

function restoreCustomerManagerCollapsed() {
  const collapsed = localStorage.getItem(customerManagerCollapsedStorageKey) === "1";
  setCustomerManagerCollapsed(collapsed, false);
}

function getInitialViewMode() {
  if (window.location.hash === "#phone-consultation") return "phone";
  if (window.location.hash === "#promotion") return "promotion";
  if (window.location.hash === "#insurers" || window.location.hash === "#design-manager") return "insurers";
  if (window.location.hash === "#contracts") return "contracts";
  return getRememberedUiSession().viewMode || "main";
}

function restoreRememberedViewMode() {
  const mode = getInitialViewMode();
  if (mode === "phone") {
    setPhoneConsultationMode(true);
  } else if (mode === "promotion") {
    setPromotionMode(true);
  } else if (mode === "insurers") {
    setDesignManagerMode(true);
  } else if (mode === "contracts") {
    setContractManagementMode(true);
  } else {
    setContractManagementMode(false, false);
    setDesignManagerMode(false, false);
    setPhoneConsultationMode(false, false);
    if (pageTitle) pageTitle.textContent = getMainPageTitle();
  }
}

async function flushCloudSyncNow(reason = "수동 저장") {
  window.clearTimeout(cloudSyncTimer);

  if (localMode || isLocalAuthSession(currentSession)) {
    setSyncStatus("이 기기 저장 - 브라우저 간 공유 안 됨", { reason });
    showManagerStatus("현재는 이 기기 저장 모드입니다. 다른 브라우저에서도 보려면 클라우드 로그인/회원가입이 필요합니다.");
    return false;
  }

  if (!supabaseClient || !currentSession?.access_token) {
    setSyncStatus("클라우드 로그인 필요", { reason });
    showManagerStatus("클라우드 로그인 후 저장해야 다른 브라우저에서도 고객정보가 유지됩니다.");
    return false;
  }

  return pushCloudSnapshot();
}

async function syncAllCloudData() {
  if (localMode || isLocalAuthSession(currentSession)) {
    runAutoSave();
    fillAuthFieldsFromSession(currentSession);
    saveLocalSession(null);
    setSyncStatus("클라우드 로그인 필요");
    showAuthScreen("Chrome 동기화를 시작하려면 현재 이름과 보안용 연락처로 클라우드 로그인해주세요. 기존 로컬 자료는 그대로 보존됩니다.");
    return;
  }
  if (!supabaseClient || !currentSession?.access_token) {
    setSyncStatus("클라우드 로그인 필요");
    showManagerStatus("로그아웃 후 이름과 연락처로 클라우드 로그인해주세요.");
    return;
  }

  if (syncAllCloudButton) syncAllCloudButton.disabled = true;
  try {
    runAutoSave();
    window.clearTimeout(cloudSyncTimer);
    setSyncStatus("전체 데이터 다시 불러오는 중");
    await hydrateFromCloud();
    const saved = await pushCloudSnapshot();
    if (!saved) throw new Error("클라우드 저장을 완료하지 못했습니다.");
    renderPhoneConsultationMemoButtons(viewedPhoneConsultationMemoId);
    renderPhoneConsultationCommonTemplate();
    restorePhoneConsultationDraftForCustomer(savedCustomerSelect.value);
    renderDesignManagers();
    renderPromotionSavedList();
    renderSavedCustomerList(savedCustomerSelect.value);
    setSyncStatus("전체 동기화 완료", {
      customers: getStoredCustomers().length,
      memos: getStoredPhoneConsultationMemos().length,
      insurers: getStoredDesignManagers().length,
    });
    showManagerStatus(
      `전체 동기화 완료: 고객 ${getStoredCustomers().length}명, 저장 메모 ${getStoredPhoneConsultationMemos().length}건`,
    );
  } catch (error) {
    setSyncStatus("전체 동기화 실패", { reason: error.message });
    showManagerStatus(`전체 동기화 실패: ${error.message}`);
  } finally {
    if (syncAllCloudButton) syncAllCloudButton.disabled = false;
  }
}

function showManagerStatus(message) {
  managerStatus.textContent = message;
  window.setTimeout(() => {
    managerStatus.textContent = "";
  }, 2000);
}

function setSyncStatus(message, details = {}) {
  const text = `동기화 상태: ${message}`;
  if (syncStatus) syncStatus.textContent = text;
  console.info("[sync]", message, {
    userId: currentSession?.user?.id || "",
    hasCloudHydrated,
    isHydratingCloud,
    ...details,
  });
}

function isSupabaseConfigured() {
  const config = window.INSURANCE_APP_CONFIG ?? {};
  return Boolean(
    isValidSupabaseUrl(config.supabaseUrl) &&
      isValidSupabaseAnonKey(config.supabaseAnonKey),
  );
}

function isLatin1HeaderValue(value) {
  return /^[\u0000-\u00ff]*$/.test(String(value ?? ""));
}

function isValidSupabaseAnonKey(value) {
  const key = String(value ?? "").trim();
  const isJwtAnonKey = key.startsWith("eyJ") && key.split(".").length === 3;
  const isPublishableKey = key.startsWith("sb_publishable_");
  return (isJwtAnonKey || isPublishableKey) && /^[A-Za-z0-9._-]+$/.test(key) && isLatin1HeaderValue(key);
}

function isPlaceholderSupabaseKey(value) {
  const key = String(value ?? "").trim();
  return !key || /여기에|진짜|anon public key|붙여넣기|입력|YOUR_|SUPABASE/i.test(key);
}

function isValidSupabaseUrl(value) {
  try {
    const url = new URL(String(value ?? ""));
    return url.protocol === "https:" && url.hostname.endsWith(".supabase.co");
  } catch {
    return false;
  }
}

function getSupabaseConfigError() {
  const config = window.INSURANCE_APP_CONFIG ?? {};

  if (!isValidSupabaseUrl(config.supabaseUrl)) {
    return "Supabase URL을 확인해주세요.";
  }

  if (isPlaceholderSupabaseKey(config.supabaseAnonKey)) {
    return "Supabase anon key 또는 publishable key를 입력하세요";
  }

  if (!isValidSupabaseAnonKey(config.supabaseAnonKey)) {
    return "Supabase anon key 또는 publishable key를 입력하세요";
  }

  return "";
}

function getSupabaseConfigStatusText() {
  const config = window.INSURANCE_APP_CONFIG ?? {};
  const url = String(config.supabaseUrl ?? "").trim();
  const key = String(config.supabaseAnonKey ?? "").trim();

  if (!url) {
    return "현재 상태: Supabase URL 없음";
  }

  if (isPlaceholderSupabaseKey(key)) {
    return "현재 상태: Supabase anon key 또는 publishable key를 입력하세요";
  }

  if (!isValidSupabaseAnonKey(key)) {
    return "현재 상태: Supabase anon key 또는 publishable key를 입력하세요";
  }

  if (authSettings?.mailer_autoconfirm === false) {
    return "현재 상태: Supabase 이메일 확인이 켜져 있어 회원가입 불가";
  }

  if (authSettings?.external?.email === false) {
    return "현재 상태: Supabase Email 로그인이 꺼져 있어 로그인/회원가입 불가";
  }

  return `현재 상태: Supabase 연결값 로드됨 (${key.slice(0, 8)}...)`;
}

function renderConfigStatus() {
  if (configStatus) {
    configStatus.textContent = getSupabaseConfigStatusText();
  }
  if (signupButton) {
    signupButton.disabled = false;
  }
}

function hasSupabaseConfigValues() {
  const config = window.INSURANCE_APP_CONFIG ?? {};
  return Boolean(config.supabaseUrl || config.supabaseAnonKey);
}

function ensureSupabaseReadyForAuth() {
  const message = getSupabaseConfigError();
  if (!message) return true;
  supabaseClient = null;
  if (authScreen && !authScreen.hidden) {
    if (authStatus) authStatus.textContent = message;
  }
  return false;
}

function buildSupabaseHeaders(preferValue = "", authToken = "") {
  const anonKey = String(window.INSURANCE_APP_CONFIG?.supabaseAnonKey ?? "").trim();
  const headers = {
    apikey: anonKey,
    Authorization: `Bearer ${authToken || anonKey}`,
    "Content-Type": "application/json",
  };

  if (preferValue) {
    headers.Prefer = preferValue;
  }

  return headers;
}

function getSupabaseUrl(path) {
  const baseUrl = String(window.INSURANCE_APP_CONFIG?.supabaseUrl ?? "").trim().replace(/\/$/, "");
  return `${baseUrl}${path}`;
}

async function supabaseJson(path, { method = "GET", body, prefer = "", authToken = "" } = {}) {
  if (!ensureSupabaseReadyForAuth()) {
    return { data: null, error: { message: "Supabase anon key를 입력하세요" } };
  }

  return new Promise((resolve) => {
    const request = new XMLHttpRequest();
    request.open(method, getSupabaseUrl(path), true);

    Object.entries(buildSupabaseHeaders(prefer, authToken)).forEach(([name, value]) => {
      request.setRequestHeader(name, value);
    });

    request.onload = () => {
      let data = null;
      try {
        data = request.responseText ? JSON.parse(request.responseText) : null;
      } catch {
        data = request.responseText;
      }

      if (request.status < 200 || request.status >= 300) {
        resolve({
          data: null,
          error: { message: data?.msg || data?.message || data?.error_description || data?.error || request.statusText },
        });
        return;
      }

      resolve({ data, error: null });
    };

    request.onerror = () => {
      resolve({ data: null, error: { message: "Supabase 요청 실패" } });
    };

    request.send(body === undefined ? null : JSON.stringify(body));
  });
}

async function getSupabaseAuthSettings() {
  const { data, error } = await supabaseJson("/auth/v1/settings");
  authSettings = error ? null : data;
  renderConfigStatus();
  return authSettings;
}

function normalizeSupabaseSession(data) {
  const session = data?.session ?? data;
  const user = data?.user ?? session?.user;
  const accessToken = session?.access_token ?? data?.access_token;

  if (!user || !accessToken) return null;

  return {
    access_token: accessToken,
    refresh_token: session?.refresh_token ?? data?.refresh_token ?? "",
    user,
    mode: "cloud",
  };
}

function saveCloudSession(session) {
  if (session) {
    const serialized = JSON.stringify(session);
    try {
      localStorage.setItem(cloudSessionStorageKey, serialized);
    } catch (error) {
      console.warn("[auth] local cloud session save failed", error);
    }
    try {
      sessionStorage.setItem(cloudSessionBackupStorageKey, serialized);
    } catch (error) {
      console.warn("[auth] session backup save failed", error);
    }
  } else {
    try {
      localStorage.removeItem(cloudSessionStorageKey);
      sessionStorage.removeItem(cloudSessionBackupStorageKey);
    } catch (error) {
      console.warn("[auth] cloud session clear failed", error);
    }
  }
}

function readSavedCloudSession() {
  const localSession = readJsonStorage(cloudSessionStorageKey);
  if (localSession?.user?.id && localSession.access_token) return localSession;
  try {
    const backup = JSON.parse(sessionStorage.getItem(cloudSessionBackupStorageKey) || "null");
    return backup?.user?.id && backup.access_token ? backup : null;
  } catch {
    return null;
  }
}

function normalizeAuthPhone(value) {
  return String(value ?? "").replace(/\D/g, "");
}

function normalizeAuthName(value) {
  return String(value ?? "").replace(/\s+/g, "").toLowerCase();
}

function formatPhoneNumber(value) {
  const digits = normalizeAuthPhone(value);
  if (digits.length === 11) return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  if (digits.length === 10) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  return value || "확인 필요";
}

function getCurrentAccountInfo() {
  const user = currentSession?.user ?? {};
  const metadata = user.user_metadata ?? user.raw_user_meta_data ?? {};
  const emailPhone = String(user.email ?? "").match(/^(\d+)@phone\.insure\.local$/)?.[1] ?? "";
  const name = user.name || metadata.name || authName.value.trim() || "이름 확인 필요";
  const phone = user.phone || metadata.phone || emailPhone || normalizeAuthPhone(authPhone.value);

  return {
    name,
    phone,
    phoneText: formatPhoneNumber(phone),
    userId: user.id || activeUserId || "확인 필요",
    mode: localMode ? "이 기기 저장" : "클라우드 저장",
    createdAt: user.createdAt || metadata.createdAt || user.created_at || "",
  };
}

function getCrossBrowserLoginHelp() {
  return "다른 브라우저에서 안 되면 기존 계정이 '이 기기 저장'이었거나, 아직 클라우드 회원가입이 안 된 상태일 수 있습니다. 원래 브라우저의 내 정보에서 저장 방식이 '클라우드 저장'인지 확인해주세요.";
}

function renderAccountInfo() {
  if (!accountInfo) return;
  if (!currentSession) {
    accountInfo.textContent = "내 정보: 로그인 전";
    return;
  }
  const info = getCurrentAccountInfo();
  accountInfo.textContent = `내 정보: ${info.name} / ${info.phoneText} / ${info.mode}`;
}

function showCurrentAccountInfo() {
  if (!currentSession) {
    alert("로그인 후 내 정보를 확인할 수 있습니다.");
    return;
  }

  const info = getCurrentAccountInfo();
  const createdLine = info.createdAt ? `\n가입/생성일: ${info.createdAt}` : "";
  const localWarning = localMode
    ? "\n\n주의: 이 계정은 이 브라우저에만 저장됩니다. 다른 브라우저에서는 같은 정보로 로그인되지 않습니다."
    : "\n\n이 계정은 클라우드 저장 방식이라 다른 브라우저에서도 같은 이름/연락처로 로그인할 수 있어야 합니다.";
  alert(`내 로그인 정보\n\n이름: ${info.name}\n연락처: ${info.phoneText}\n저장 방식: ${info.mode}\n사용자 ID: ${info.userId}${createdLine}${localWarning}`);
}

function getMainPageTitle() {
  if (document.body.classList.contains("promotion-mode")) return "홍보";
  if (document.body.classList.contains("phone-consultation-mode")) return "전화상담";
  if (document.body.classList.contains("contract-management-mode")) return "계약 및 보험사 비교 관리";
  if (document.body.classList.contains("design-manager-mode")) return "보험사";
  return "보험 고객 관리용 입력 시스템";
}

function showPhoneConsultationStatus(message) {
  if (!phoneConsultationStatus) return;
  phoneConsultationStatus.textContent = message;
  window.setTimeout(() => {
    phoneConsultationStatus.textContent = "";
  }, 2200);
}

function getStoredPhoneConsultationMemos() {
  const memos = readJsonStorage(getScopedStorageKey(phoneConsultationStorageKey), []);
  return Array.isArray(memos) ? memos : [];
}

function recoverPhoneConsultationMemosToCurrentAccount() {
  if (!currentSession?.user?.id) return getStoredPhoneConsultationMemos();

  const scopedKey = getScopedStorageKey(phoneConsultationStorageKey);
  const memoLists = [];
  const addMemos = (key) => {
    const memos = readJsonStorage(key, []);
    if (Array.isArray(memos) && memos.length) memoLists.push(memos);
  };

  addMemos(scopedKey);
  addMemos(phoneConsultationStorageKey);
  listStorageKeysWithPrefix(phoneConsultationStorageKey).forEach((key) => {
    if (key !== scopedKey) addMemos(key);
  });

  const phoneLocalId = getPhoneScopedLocalUserId();
  if (phoneLocalId) addMemos(`${phoneConsultationStorageKey}:${phoneLocalId}`);

  const merged = new Map();
  memoLists.flat().forEach((memo) => {
    if (!memo?.id) return;
    const previous = merged.get(memo.id);
    const memoTime = new Date(memo.updatedAt || memo.createdAt || 0).getTime();
    const previousTime = new Date(previous?.updatedAt || previous?.createdAt || 0).getTime();
    if (!previous || memoTime >= previousTime) merged.set(memo.id, memo);
  });

  const result = sortPhoneConsultationMemos([...merged.values()]);
  if (result.length) {
    localStorage.setItem(scopedKey, JSON.stringify(result));
  }
  return result.length ? result : getStoredPhoneConsultationMemos();
}

function setStoredPhoneConsultationMemos(memos) {
  try {
    localStorage.setItem(getScopedStorageKey(phoneConsultationStorageKey), JSON.stringify(memos));
    return true;
  } catch (error) {
    console.error("[phone-memo] save failed", error);
    return false;
  }
}

function getStoredPhoneConsultationCommonTemplate() {
  return String(readJsonStorage(getScopedStorageKey(phoneConsultationCommonTemplateStorageKey), "") ?? "");
}

function getStoredPhoneConsultationCommonTemplateUpdatedAt() {
  const storedTimestamp = String(
    readJsonStorage(getScopedStorageKey(phoneConsultationCommonTemplateUpdatedAtStorageKey), "") ?? "",
  );
  if (storedTimestamp) return storedTimestamp;
  if (!getStoredPhoneConsultationCommonTemplate().trim()) return "";

  const legacyDraft = readJsonStorage(getScopedStorageKey(autoSaveDraftKey), {});
  return String(legacyDraft?.phoneConsultationCommonTemplateUpdatedAt || legacyDraft?.updatedAt || "");
}

function setStoredPhoneConsultationCommonTemplate(content, { updatedAt = "", touch = true } = {}) {
  localStorage.setItem(getScopedStorageKey(phoneConsultationCommonTemplateStorageKey), JSON.stringify(String(content ?? "")));
  const timestamp = updatedAt || (touch ? new Date().toISOString() : "");
  if (timestamp) {
    localStorage.setItem(
      getScopedStorageKey(phoneConsultationCommonTemplateUpdatedAtStorageKey),
      JSON.stringify(timestamp),
    );
  }
}

function getStoredPhoneConsultationCommonHighlight() {
  return String(readJsonStorage(getScopedStorageKey(phoneConsultationCommonTemplateHighlightStorageKey), "") ?? "");
}

function setStoredPhoneConsultationCommonHighlight(imageDataUrl) {
  localStorage.setItem(
    getScopedStorageKey(phoneConsultationCommonTemplateHighlightStorageKey),
    JSON.stringify(String(imageDataUrl || "")),
  );
}

function getStoredPhoneConsultationCommonHighlightStrokes() {
  const strokes = readJsonStorage(getScopedStorageKey(phoneConsultationCommonTemplateHighlightStrokesStorageKey), []);
  return Array.isArray(strokes) ? strokes : [];
}

function setStoredPhoneConsultationCommonHighlightStrokes(strokes) {
  localStorage.setItem(
    getScopedStorageKey(phoneConsultationCommonTemplateHighlightStrokesStorageKey),
    JSON.stringify(Array.isArray(strokes) ? strokes : []),
  );
}

function recoverPhoneConsultationCommonDataToCurrentAccount() {
  const currentContent = getStoredPhoneConsultationCommonTemplate();
  if (currentContent.trim()) return { content: currentContent, recovered: false };

  const currentKey = getScopedStorageKey(phoneConsultationCommonTemplateStorageKey);
  const candidateKeys = [
    phoneConsultationCommonTemplateStorageKey,
    ...listStorageKeysWithPrefix(phoneConsultationCommonTemplateStorageKey),
  ].filter((key, index, keys) => key !== currentKey && keys.indexOf(key) === index);
  const selected = candidateKeys
    .map((key) => ({ key, content: String(readJsonStorage(key, "") ?? "") }))
    .filter((candidate) => candidate.content.trim())
    .sort((left, right) => right.content.length - left.content.length)[0];
  if (!selected) return { content: "", recovered: false };

  const suffix = selected.key.slice(phoneConsultationCommonTemplateStorageKey.length);
  const highlight = String(readJsonStorage(`${phoneConsultationCommonTemplateHighlightStorageKey}${suffix}`, "") ?? "");
  const strokes = readJsonStorage(`${phoneConsultationCommonTemplateHighlightStrokesStorageKey}${suffix}`, []);
  setStoredPhoneConsultationCommonTemplate(selected.content);
  if (highlight) setStoredPhoneConsultationCommonHighlight(highlight);
  if (Array.isArray(strokes) && strokes.length) setStoredPhoneConsultationCommonHighlightStrokes(strokes);
  return { content: selected.content, recovered: true };
}

function getPhoneConsultationCustomerKey(customerId = activePhoneConsultationCustomerId || savedCustomerSelect?.value || "") {
  return customerId || "__new_customer__";
}

function getStoredPhoneConsultationDrafts() {
  const drafts = readJsonStorage(getScopedStorageKey(phoneConsultationDraftStorageKey), {});
  return drafts && typeof drafts === "object" && !Array.isArray(drafts) ? drafts : {};
}

function setStoredPhoneConsultationDrafts(drafts) {
  localStorage.setItem(getScopedStorageKey(phoneConsultationDraftStorageKey), JSON.stringify(drafts && typeof drafts === "object" ? drafts : {}));
}

function getStoredPhoneConsultationOrders() {
  const orders = readJsonStorage(getScopedStorageKey(phoneConsultationOrderStorageKey), {});
  return orders && typeof orders === "object" && !Array.isArray(orders) ? orders : {};
}

function setStoredPhoneConsultationOrders(orders) {
  localStorage.setItem(getScopedStorageKey(phoneConsultationOrderStorageKey), JSON.stringify(orders && typeof orders === "object" ? orders : {}));
}

const phoneConsultationGlobalLayoutKey = "__global_phone_memo_layout__";

function getPhoneConsultationLayoutScore(record) {
  if (!record || typeof record !== "object") return -1;
  const ids = Array.isArray(record.ids) ? record.ids.length : 0;
  const groups = record.groups && typeof record.groups === "object" && !Array.isArray(record.groups)
    ? Object.keys(record.groups).length
    : 0;
  const titles = record.titles && typeof record.titles === "object" && !Array.isArray(record.titles)
    ? Object.keys(record.titles).length
    : 0;
  return (groups * 100) + (ids * 10) + titles;
}

function getPhoneConsultationLayoutRecord() {
  const orders = getStoredPhoneConsultationOrders();
  const globalRecord = orders[phoneConsultationGlobalLayoutKey];
  if (globalRecord && getPhoneConsultationLayoutScore(globalRecord) > 0) {
    return globalRecord;
  }

  const recoveredRecord = Object.entries(orders)
    .filter(([key, record]) => key !== phoneConsultationGlobalLayoutKey && record && typeof record === "object")
    .sort(([, left], [, right]) => {
      const scoreDifference = getPhoneConsultationLayoutScore(right) - getPhoneConsultationLayoutScore(left);
      if (scoreDifference) return scoreDifference;
      return new Date(right.updatedAt || 0) - new Date(left.updatedAt || 0);
    })[0]?.[1];

  if (!recoveredRecord) return {};

  const migratedRecord = {
    ids: Array.isArray(recoveredRecord.ids) ? [...recoveredRecord.ids] : [],
    groups: recoveredRecord.groups && typeof recoveredRecord.groups === "object" && !Array.isArray(recoveredRecord.groups)
      ? { ...recoveredRecord.groups }
      : {},
    titles: recoveredRecord.titles && typeof recoveredRecord.titles === "object" && !Array.isArray(recoveredRecord.titles)
      ? { ...recoveredRecord.titles }
      : {},
    updatedAt: new Date().toISOString(),
  };
  orders[phoneConsultationGlobalLayoutKey] = migratedRecord;
  setStoredPhoneConsultationOrders(orders);
  scheduleCloudSync();
  return migratedRecord;
}

function getPhoneConsultationHighlightContext() {
  return phoneConsultationHighlightCanvas?.getContext("2d") || null;
}

function capturePhoneConsultationHighlight() {
  if (!phoneConsultationHighlightCanvas || !phoneConsultationHighlightImage) return "";
  try {
    return phoneConsultationHighlightCanvas.toDataURL("image/png");
  } catch {
    return "";
  }
}

function syncPhoneConsultationHighlightScroll() {
  if (!phoneConsultationHighlightCanvas || !phoneConsultationMemoInput) return;
  phoneConsultationHighlightCanvas.style.transform = `translateY(${-phoneConsultationMemoInput.scrollTop}px)`;
}

function sizePhoneConsultationHighlightCanvas(imageDataUrl = phoneConsultationHighlightImage) {
  if (!phoneConsultationHighlightCanvas || !phoneConsultationMemoCanvasWrap) return;
  const rect = phoneConsultationMemoCanvasWrap.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const pixelRatio = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
  const contentHeight = Math.max(rect.height, phoneConsultationMemoInput?.scrollHeight || 0);
  const width = Math.round(rect.width * pixelRatio);
  const height = Math.round(contentHeight * pixelRatio);
  phoneConsultationHighlightCanvas.style.height = `${contentHeight}px`;
  syncPhoneConsultationHighlightScroll();
  if (phoneConsultationHighlightCanvas.width === width && phoneConsultationHighlightCanvas.height === height) return;

  phoneConsultationHighlightCanvas.width = width;
  phoneConsultationHighlightCanvas.height = height;
  const context = getPhoneConsultationHighlightContext();
  if (!context) return;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  if (!imageDataUrl) return;
  const image = new Image();
  image.onload = () => {
    context.save();
    context.globalAlpha = 1;
    context.drawImage(image, 0, 0, rect.width, contentHeight);
    context.restore();
    phoneConsultationHighlightImage = phoneConsultationHighlightCanvas.toDataURL("image/png");
  };
  image.src = imageDataUrl;
}

function restorePhoneConsultationHighlight(imageDataUrl = "", strokes = []) {
  phoneConsultationHighlightImage = String(imageDataUrl || "");
  phoneConsultationHighlightStrokes = Array.isArray(strokes) ? strokes.map((stroke) => ({ ...stroke })) : [];
  phoneConsultationHighlightPreviousText = phoneConsultationMemoInput?.value || "";
  sizePhoneConsultationHighlightCanvas("");
  const context = getPhoneConsultationHighlightContext();
  if (!context || !phoneConsultationHighlightCanvas) return;
  const rect = phoneConsultationMemoCanvasWrap.getBoundingClientRect();
  const contentHeight = Math.max(rect.height, phoneConsultationMemoInput?.scrollHeight || 0);
  context.clearRect(0, 0, rect.width, contentHeight);
  if (phoneConsultationHighlightStrokes.length) {
    phoneConsultationHighlightImage = drawAnchoredHighlightStrokes(
      phoneConsultationHighlightCanvas,
      phoneConsultationMemoInput,
      phoneConsultationHighlightStrokes,
    );
    return;
  }
  if (!phoneConsultationHighlightImage) return;

  const image = new Image();
  image.onload = () => {
    context.drawImage(image, 0, 0, rect.width, contentHeight);
  };
  image.src = phoneConsultationHighlightImage;
}

function setPhoneConsultationHighlightMode(enabled) {
  phoneConsultationHighlightMode = Boolean(enabled);
  phoneConsultationHighlightDrawing = false;
  phoneConsultationHighlightLastPoint = null;
  phoneConsultationHighlightStartPoint = null;
  phoneConsultationHighlightSnapshot = null;
  phoneConsultationHighlightCanvas?.classList.toggle("is-active", phoneConsultationHighlightMode);
  phoneConsultationMemoCanvasWrap?.classList.toggle("is-highlight-mode", phoneConsultationHighlightMode);
  phoneConsultationHighlightButton?.classList.toggle("is-active", phoneConsultationHighlightMode);
  phoneConsultationHighlightButton?.setAttribute("aria-pressed", String(phoneConsultationHighlightMode));
  if (phoneConsultationHighlightButton) {
    phoneConsultationHighlightButton.textContent = phoneConsultationHighlightMode ? "형광펜 끄기" : "형광펜";
  }
  if (!phoneConsultationHighlightMode && phoneConsultationHighlightEraseMode) {
    phoneConsultationHighlightEraseMode = false;
    phoneConsultationEraserButton?.classList.remove("is-active");
    phoneConsultationEraserButton?.setAttribute("aria-pressed", "false");
    phoneConsultationMemoCanvasWrap?.classList.remove("is-eraser-mode");
  }
  if (phoneConsultationHighlightMode) sizePhoneConsultationHighlightCanvas();
}

function getPhoneConsultationHighlightPoint(event) {
  const rect = phoneConsultationHighlightCanvas.getBoundingClientRect();
  return {
    x: Math.max(0, Math.min(rect.width, event.clientX - rect.left)),
    y: Math.max(0, Math.min(rect.height, event.clientY - rect.top)),
  };
}

function getTextareaHighlightMetrics(textarea) {
  const style = window.getComputedStyle(textarea);
  const fontSize = Number.parseFloat(style.fontSize) || 16;
  const parsedLineHeight = Number.parseFloat(style.lineHeight);
  const measureContext = document.createElement("canvas").getContext("2d");
  measureContext.font = style.font || `${fontSize}px sans-serif`;
  return {
    context: measureContext,
    lineHeight: Number.isFinite(parsedLineHeight) ? parsedLineHeight : fontSize * 1.45,
    paddingLeft: Number.parseFloat(style.paddingLeft) || 0,
    paddingTop: Number.parseFloat(style.paddingTop) || 0,
  };
}

function getTextareaLineRecords(textarea) {
  const text = textarea?.value || "";
  const lines = text.split("\n");
  let offset = 0;
  return lines.map((line, index) => {
    const record = { line, index, start: offset, end: offset + line.length };
    offset += line.length + 1;
    return record;
  });
}

function getTextareaOffsetFromPoint(textarea, point) {
  const metrics = getTextareaHighlightMetrics(textarea);
  const lines = getTextareaLineRecords(textarea);
  const lineIndex = Math.max(0, Math.min(
    lines.length - 1,
    Math.floor((point.y - metrics.paddingTop) / metrics.lineHeight),
  ));
  const record = lines[lineIndex] || { line: "", start: 0 };
  const targetX = Math.max(0, point.x - metrics.paddingLeft);
  let measuredWidth = 0;
  let column = 0;
  for (; column < record.line.length; column += 1) {
    const characterWidth = metrics.context.measureText(record.line[column]).width;
    if (targetX < measuredWidth + (characterWidth / 2)) break;
    measuredWidth += characterWidth;
  }
  return record.start + column;
}

function createAnchoredHighlightStroke(textarea, from, to, color) {
  if (!textarea || !from || !to) return null;
  let start = getTextareaOffsetFromPoint(textarea, from);
  let end = getTextareaOffsetFromPoint(textarea, to);
  if (end < start) [start, end] = [end, start];
  if (end === start) end = Math.min((textarea.value || "").length, start + 1);
  if (end <= start) return null;
  return { start, end, color: color || "#ffe45c" };
}

function getTextareaPointFromOffset(textarea, offset) {
  const metrics = getTextareaHighlightMetrics(textarea);
  const lines = getTextareaLineRecords(textarea);
  const normalizedOffset = Math.max(0, Math.min((textarea.value || "").length, Number(offset) || 0));
  const record = lines.find((line) => normalizedOffset <= line.end) || lines[lines.length - 1];
  const column = Math.max(0, Math.min(record.line.length, normalizedOffset - record.start));
  return {
    x: metrics.paddingLeft + metrics.context.measureText(record.line.slice(0, column)).width,
    y: metrics.paddingTop + (record.index * metrics.lineHeight) + (metrics.lineHeight * 0.58),
    lineIndex: record.index,
  };
}

function drawAnchoredHighlightStrokes(canvas, textarea, strokes) {
  if (!canvas || !textarea || !Array.isArray(strokes) || !strokes.length) return "";
  const context = canvas.getContext("2d");
  const wrapper = canvas.parentElement;
  if (!context || !wrapper) return "";
  const rect = wrapper.getBoundingClientRect();
  const contentHeight = Math.max(rect.height, textarea.scrollHeight || 0);
  context.clearRect(0, 0, rect.width, contentHeight);

  strokes.forEach((stroke) => {
    const from = getTextareaPointFromOffset(textarea, stroke.start);
    const to = getTextareaPointFromOffset(textarea, stroke.end);
    context.save();
    context.globalAlpha = 0.38;
    context.strokeStyle = stroke.color || "#ffe45c";
    context.lineWidth = 22;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.stroke();
    context.restore();
  });
  return canvas.toDataURL("image/png");
}

function adjustAnchoredHighlightStrokes(strokes, previousText, nextText) {
  if (!Array.isArray(strokes) || !strokes.length || previousText === nextText) return strokes;
  let prefixLength = 0;
  const sharedLength = Math.min(previousText.length, nextText.length);
  while (prefixLength < sharedLength && previousText[prefixLength] === nextText[prefixLength]) {
    prefixLength += 1;
  }

  let suffixLength = 0;
  while (
    suffixLength < sharedLength - prefixLength
    && previousText[previousText.length - 1 - suffixLength] === nextText[nextText.length - 1 - suffixLength]
  ) {
    suffixLength += 1;
  }

  const oldChangeEnd = previousText.length - suffixLength;
  const newChangeEnd = nextText.length - suffixLength;
  const offsetDelta = newChangeEnd - oldChangeEnd;
  return strokes.map((stroke) => {
    const nextStroke = { ...stroke };
    if (nextStroke.end <= prefixLength) return nextStroke;
    if (nextStroke.start >= oldChangeEnd) {
      nextStroke.start = Math.max(0, nextStroke.start + offsetDelta);
      nextStroke.end = Math.max(nextStroke.start, nextStroke.end + offsetDelta);
      return nextStroke;
    }
    nextStroke.end = Math.max(nextStroke.start, nextStroke.end + offsetDelta);
    return nextStroke;
  }).filter((stroke) => stroke.end > stroke.start);
}

function eraseAnchoredHighlightStrokeAtPoint(canvas, textarea, strokes, event) {
  if (!canvas || !textarea || !Array.isArray(strokes) || !strokes.length) return false;
  const rect = canvas.getBoundingClientRect();
  const point = { x: event.clientX - rect.left, y: event.clientY - rect.top };
  let closestIndex = -1;
  let closestDistance = Number.POSITIVE_INFINITY;
  strokes.forEach((stroke, index) => {
    const from = getTextareaPointFromOffset(textarea, stroke.start);
    const to = getTextareaPointFromOffset(textarea, stroke.end);
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const lengthSquared = (dx * dx) + (dy * dy) || 1;
    const ratio = Math.max(0, Math.min(1, (((point.x - from.x) * dx) + ((point.y - from.y) * dy)) / lengthSquared));
    const nearestX = from.x + (ratio * dx);
    const nearestY = from.y + (ratio * dy);
    const distance = Math.hypot(point.x - nearestX, point.y - nearestY);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });
  if (closestIndex < 0 || closestDistance > 18) return false;
  strokes.splice(closestIndex, 1);
  return true;
}

function eraseConnectedHighlightAtPoint(canvas, event) {
  if (!canvas) return false;
  const context = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  if (!context || !rect.width || !rect.height || !canvas.width || !canvas.height) return false;

  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const targetX = Math.round((event.clientX - rect.left) * scaleX);
  const targetY = Math.round((event.clientY - rect.top) * scaleY);
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const { data, width, height } = imageData;
  const alphaThreshold = 3;
  const isMarked = (x, y) => (
    x >= 0
    && x < width
    && y >= 0
    && y < height
    && data[((y * width) + x) * 4 + 3] > alphaThreshold
  );

  let seedX = -1;
  let seedY = -1;
  let closestDistance = Number.POSITIVE_INFINITY;
  const searchRadius = Math.max(8, Math.round(14 * Math.max(scaleX, scaleY)));
  for (let offsetY = -searchRadius; offsetY <= searchRadius; offsetY += 1) {
    for (let offsetX = -searchRadius; offsetX <= searchRadius; offsetX += 1) {
      const x = targetX + offsetX;
      const y = targetY + offsetY;
      const distance = (offsetX * offsetX) + (offsetY * offsetY);
      if (distance < closestDistance && isMarked(x, y)) {
        seedX = x;
        seedY = y;
        closestDistance = distance;
      }
    }
  }
  if (seedX < 0 || seedY < 0) return false;

  const stack = [[seedX, seedY]];
  while (stack.length) {
    const [startX, y] = stack.pop();
    if (!isMarked(startX, y)) continue;

    let x = startX;
    while (x >= 0 && isMarked(x, y)) x -= 1;
    x += 1;
    let spanAbove = false;
    let spanBelow = false;

    while (x < width && isMarked(x, y)) {
      const index = ((y * width) + x) * 4;
      data[index] = 0;
      data[index + 1] = 0;
      data[index + 2] = 0;
      data[index + 3] = 0;

      if (y > 0) {
        if (isMarked(x, y - 1) && !spanAbove) {
          stack.push([x, y - 1]);
          spanAbove = true;
        } else if (!isMarked(x, y - 1)) {
          spanAbove = false;
        }
      }

      if (y < height - 1) {
        if (isMarked(x, y + 1) && !spanBelow) {
          stack.push([x, y + 1]);
          spanBelow = true;
        } else if (!isMarked(x, y + 1)) {
          spanBelow = false;
        }
      }
      x += 1;
    }
  }

  context.putImageData(imageData, 0, 0);
  return true;
}

function drawPhoneConsultationHighlight(from, to) {
  const context = getPhoneConsultationHighlightContext();
  if (!context || !from || !to) return;
  context.save();
  context.globalCompositeOperation = phoneConsultationHighlightEraseMode ? "destination-out" : "source-over";
  context.globalAlpha = phoneConsultationHighlightEraseMode ? 1 : 0.38;
  context.strokeStyle = phoneConsultationHighlightEraseMode ? "#000000" : phoneConsultationHighlightColor;
  context.lineWidth = phoneConsultationHighlightEraseMode ? 34 : 22;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.beginPath();
  context.moveTo(from.x, from.y);
  context.lineTo(to.x, to.y);
  context.stroke();
  context.restore();
}

function startPhoneConsultationHighlight(event) {
  if (!phoneConsultationHighlightMode) return;
  event.preventDefault();
  sizePhoneConsultationHighlightCanvas();
  if (phoneConsultationHighlightEraseMode) {
    const erasedAnchoredStroke = eraseAnchoredHighlightStrokeAtPoint(
      phoneConsultationHighlightCanvas,
      phoneConsultationMemoInput,
      phoneConsultationHighlightStrokes,
      event,
    );
    if (erasedAnchoredStroke) {
      phoneConsultationHighlightImage = phoneConsultationHighlightStrokes.length
        ? drawAnchoredHighlightStrokes(
          phoneConsultationHighlightCanvas,
          phoneConsultationMemoInput,
          phoneConsultationHighlightStrokes,
        )
        : "";
      if (!phoneConsultationHighlightStrokes.length) {
        const context = getPhoneConsultationHighlightContext();
        const rect = phoneConsultationMemoCanvasWrap.getBoundingClientRect();
        context.clearRect(0, 0, rect.width, Math.max(rect.height, phoneConsultationMemoInput.scrollHeight || 0));
      }
      savePhoneConsultationDraftForCustomer();
      showPhoneConsultationStatus("클릭한 형광펜 선을 지웠습니다.");
    } else if (eraseConnectedHighlightAtPoint(phoneConsultationHighlightCanvas, event)) {
      phoneConsultationHighlightImage = phoneConsultationHighlightCanvas.toDataURL("image/png");
      savePhoneConsultationDraftForCustomer();
      showPhoneConsultationStatus("클릭한 형광펜 선을 지웠습니다.");
    } else {
      showPhoneConsultationStatus("지울 형광펜 선을 정확히 클릭해주세요.");
    }
    return;
  }
  phoneConsultationHighlightDrawing = true;
  phoneConsultationHighlightStartPoint = getPhoneConsultationHighlightPoint(event);
  phoneConsultationHighlightLastPoint = phoneConsultationHighlightStartPoint;
  const context = getPhoneConsultationHighlightContext();
  phoneConsultationHighlightSnapshot = context?.getImageData(
    0,
    0,
    phoneConsultationHighlightCanvas.width,
    phoneConsultationHighlightCanvas.height,
  ) || null;
  phoneConsultationHighlightCanvas.setPointerCapture?.(event.pointerId);
  drawPhoneConsultationHighlight(phoneConsultationHighlightStartPoint, phoneConsultationHighlightLastPoint);
}

function continuePhoneConsultationHighlight(event) {
  if (!phoneConsultationHighlightDrawing) return;
  event.preventDefault();
  const point = getPhoneConsultationHighlightPoint(event);
  const context = getPhoneConsultationHighlightContext();
  if (context && phoneConsultationHighlightSnapshot) {
    context.putImageData(phoneConsultationHighlightSnapshot, 0, 0);
  }
  drawPhoneConsultationHighlight(phoneConsultationHighlightStartPoint, point);
  phoneConsultationHighlightLastPoint = point;
}

function finishPhoneConsultationHighlight(event) {
  if (!phoneConsultationHighlightDrawing) return;
  const anchoredStroke = createAnchoredHighlightStroke(
    phoneConsultationMemoInput,
    phoneConsultationHighlightStartPoint,
    phoneConsultationHighlightLastPoint,
    phoneConsultationHighlightColor,
  );
  if (anchoredStroke) phoneConsultationHighlightStrokes.push(anchoredStroke);
  phoneConsultationHighlightDrawing = false;
  phoneConsultationHighlightLastPoint = null;
  phoneConsultationHighlightStartPoint = null;
  phoneConsultationHighlightSnapshot = null;
  phoneConsultationHighlightCanvas.releasePointerCapture?.(event.pointerId);
  phoneConsultationHighlightImage = phoneConsultationHighlightCanvas.toDataURL("image/png");
  phoneConsultationHighlightPreviousText = phoneConsultationMemoInput?.value || "";
  savePhoneConsultationDraftForCustomer();
  showPhoneConsultationStatus(phoneConsultationHighlightEraseMode
    ? "선택한 형광펜 표시를 지웠습니다."
    : "형광펜 표시를 자동 저장했습니다.");
}

function setPhoneConsultationHighlightEraser(enabled) {
  phoneConsultationHighlightEraseMode = Boolean(enabled);
  phoneConsultationEraserButton?.classList.toggle("is-active", phoneConsultationHighlightEraseMode);
  phoneConsultationEraserButton?.setAttribute("aria-pressed", String(phoneConsultationHighlightEraseMode));
  phoneConsultationMemoCanvasWrap?.classList.toggle("is-eraser-mode", phoneConsultationHighlightEraseMode);
  if (phoneConsultationHighlightEraseMode && !phoneConsultationHighlightMode) {
    setPhoneConsultationHighlightMode(true);
  }
  showPhoneConsultationStatus(phoneConsultationHighlightEraseMode
    ? "지울 형광펜 선을 클릭해주세요."
    : "형광펜 색상을 선택해 직선으로 그어주세요.");
}

function getPhoneConsultationCommonHighlightContext() {
  return phoneConsultationCommonHighlightCanvas?.getContext("2d") || null;
}

function capturePhoneConsultationCommonHighlight() {
  if (!phoneConsultationCommonHighlightCanvas || !phoneConsultationCommonHighlightImage) return "";
  try {
    return phoneConsultationCommonHighlightCanvas.toDataURL("image/png");
  } catch {
    return "";
  }
}

function syncPhoneConsultationCommonHighlightScroll() {
  if (!phoneConsultationCommonHighlightCanvas || !phoneConsultationCommonTemplateInput) return;
  phoneConsultationCommonHighlightCanvas.style.transform = `translateY(${-phoneConsultationCommonTemplateInput.scrollTop}px)`;
}

function sizePhoneConsultationCommonHighlightCanvas(imageDataUrl = phoneConsultationCommonHighlightImage) {
  if (!phoneConsultationCommonHighlightCanvas || !phoneConsultationCommonCanvasWrap) return;
  const rect = phoneConsultationCommonCanvasWrap.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const pixelRatio = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
  const contentHeight = Math.max(rect.height, phoneConsultationCommonTemplateInput?.scrollHeight || 0);
  const width = Math.round(rect.width * pixelRatio);
  const height = Math.round(contentHeight * pixelRatio);
  phoneConsultationCommonHighlightCanvas.style.height = `${contentHeight}px`;
  syncPhoneConsultationCommonHighlightScroll();
  if (phoneConsultationCommonHighlightCanvas.width === width && phoneConsultationCommonHighlightCanvas.height === height) return;

  phoneConsultationCommonHighlightCanvas.width = width;
  phoneConsultationCommonHighlightCanvas.height = height;
  const context = getPhoneConsultationCommonHighlightContext();
  if (!context) return;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  if (!imageDataUrl) return;
  const image = new Image();
  image.onload = () => {
    context.drawImage(image, 0, 0, rect.width, contentHeight);
    phoneConsultationCommonHighlightImage = phoneConsultationCommonHighlightCanvas.toDataURL("image/png");
  };
  image.src = imageDataUrl;
}

function restorePhoneConsultationCommonHighlight(imageDataUrl = "", strokes = []) {
  phoneConsultationCommonHighlightImage = String(imageDataUrl || "");
  phoneConsultationCommonHighlightStrokes = Array.isArray(strokes) ? strokes.map((stroke) => ({ ...stroke })) : [];
  phoneConsultationCommonHighlightPreviousText = phoneConsultationCommonTemplateInput?.value || "";
  sizePhoneConsultationCommonHighlightCanvas("");
  const context = getPhoneConsultationCommonHighlightContext();
  if (!context || !phoneConsultationCommonHighlightCanvas || !phoneConsultationCommonCanvasWrap) return;
  const rect = phoneConsultationCommonCanvasWrap.getBoundingClientRect();
  const contentHeight = Math.max(rect.height, phoneConsultationCommonTemplateInput?.scrollHeight || 0);
  context.clearRect(0, 0, rect.width, contentHeight);
  if (phoneConsultationCommonHighlightStrokes.length) {
    phoneConsultationCommonHighlightImage = drawAnchoredHighlightStrokes(
      phoneConsultationCommonHighlightCanvas,
      phoneConsultationCommonTemplateInput,
      phoneConsultationCommonHighlightStrokes,
    );
    return;
  }
  if (!phoneConsultationCommonHighlightImage) return;

  const image = new Image();
  image.onload = () => {
    context.drawImage(image, 0, 0, rect.width, contentHeight);
  };
  image.src = phoneConsultationCommonHighlightImage;
}

function setPhoneConsultationCommonHighlightMode(enabled) {
  phoneConsultationCommonHighlightMode = Boolean(enabled);
  phoneConsultationCommonHighlightDrawing = false;
  phoneConsultationCommonHighlightLastPoint = null;
  phoneConsultationCommonHighlightStartPoint = null;
  phoneConsultationCommonHighlightSnapshot = null;
  phoneConsultationCommonHighlightCanvas?.classList.toggle("is-active", phoneConsultationCommonHighlightMode);
  phoneConsultationCommonCanvasWrap?.classList.toggle("is-highlight-mode", phoneConsultationCommonHighlightMode);
  phoneConsultationCommonHighlightButton?.classList.toggle("is-active", phoneConsultationCommonHighlightMode);
  phoneConsultationCommonHighlightButton?.setAttribute("aria-pressed", String(phoneConsultationCommonHighlightMode));
  if (phoneConsultationCommonHighlightButton) {
    phoneConsultationCommonHighlightButton.textContent = phoneConsultationCommonHighlightMode ? "형광펜 끄기" : "형광펜";
  }
  if (!phoneConsultationCommonHighlightMode && phoneConsultationCommonHighlightEraseMode) {
    phoneConsultationCommonHighlightEraseMode = false;
    phoneConsultationCommonEraserButton?.classList.remove("is-active");
    phoneConsultationCommonEraserButton?.setAttribute("aria-pressed", "false");
    phoneConsultationCommonCanvasWrap?.classList.remove("is-eraser-mode");
  }
  if (phoneConsultationCommonHighlightMode) sizePhoneConsultationCommonHighlightCanvas();
}

function getPhoneConsultationCommonHighlightPoint(event) {
  const rect = phoneConsultationCommonHighlightCanvas.getBoundingClientRect();
  return {
    x: Math.max(0, Math.min(rect.width, event.clientX - rect.left)),
    y: Math.max(0, Math.min(rect.height, event.clientY - rect.top)),
  };
}

function drawPhoneConsultationCommonHighlight(from, to) {
  const context = getPhoneConsultationCommonHighlightContext();
  if (!context || !from || !to) return;
  context.save();
  context.globalCompositeOperation = phoneConsultationCommonHighlightEraseMode ? "destination-out" : "source-over";
  context.globalAlpha = phoneConsultationCommonHighlightEraseMode ? 1 : 0.38;
  context.strokeStyle = phoneConsultationCommonHighlightEraseMode ? "#000000" : phoneConsultationCommonHighlightColor;
  context.lineWidth = phoneConsultationCommonHighlightEraseMode ? 34 : 22;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.beginPath();
  context.moveTo(from.x, from.y);
  context.lineTo(to.x, to.y);
  context.stroke();
  context.restore();
}

function startPhoneConsultationCommonHighlight(event) {
  if (!phoneConsultationCommonHighlightMode) return;
  event.preventDefault();
  sizePhoneConsultationCommonHighlightCanvas();
  if (phoneConsultationCommonHighlightEraseMode) {
    const erasedAnchoredStroke = eraseAnchoredHighlightStrokeAtPoint(
      phoneConsultationCommonHighlightCanvas,
      phoneConsultationCommonTemplateInput,
      phoneConsultationCommonHighlightStrokes,
      event,
    );
    if (erasedAnchoredStroke) {
      phoneConsultationCommonHighlightImage = phoneConsultationCommonHighlightStrokes.length
        ? drawAnchoredHighlightStrokes(
          phoneConsultationCommonHighlightCanvas,
          phoneConsultationCommonTemplateInput,
          phoneConsultationCommonHighlightStrokes,
        )
        : "";
      if (!phoneConsultationCommonHighlightStrokes.length) {
        const context = getPhoneConsultationCommonHighlightContext();
        const rect = phoneConsultationCommonCanvasWrap.getBoundingClientRect();
        context.clearRect(0, 0, rect.width, Math.max(rect.height, phoneConsultationCommonTemplateInput.scrollHeight || 0));
      }
      savePhoneConsultationDraftForCustomer();
      showPhoneConsultationStatus("위 메모에서 클릭한 형광펜 선을 지웠습니다.");
    } else if (eraseConnectedHighlightAtPoint(phoneConsultationCommonHighlightCanvas, event)) {
      phoneConsultationCommonHighlightImage = phoneConsultationCommonHighlightCanvas.toDataURL("image/png");
      savePhoneConsultationDraftForCustomer();
      showPhoneConsultationStatus("위 메모에서 클릭한 형광펜 선을 지웠습니다.");
    } else {
      showPhoneConsultationStatus("위 메모에서 지울 형광펜 선을 정확히 클릭해주세요.");
    }
    return;
  }
  phoneConsultationCommonHighlightDrawing = true;
  phoneConsultationCommonHighlightStartPoint = getPhoneConsultationCommonHighlightPoint(event);
  phoneConsultationCommonHighlightLastPoint = phoneConsultationCommonHighlightStartPoint;
  const context = getPhoneConsultationCommonHighlightContext();
  phoneConsultationCommonHighlightSnapshot = context?.getImageData(
    0,
    0,
    phoneConsultationCommonHighlightCanvas.width,
    phoneConsultationCommonHighlightCanvas.height,
  ) || null;
  phoneConsultationCommonHighlightCanvas.setPointerCapture?.(event.pointerId);
  drawPhoneConsultationCommonHighlight(phoneConsultationCommonHighlightStartPoint, phoneConsultationCommonHighlightLastPoint);
}

function continuePhoneConsultationCommonHighlight(event) {
  if (!phoneConsultationCommonHighlightDrawing) return;
  event.preventDefault();
  const point = getPhoneConsultationCommonHighlightPoint(event);
  const context = getPhoneConsultationCommonHighlightContext();
  if (context && phoneConsultationCommonHighlightSnapshot) {
    context.putImageData(phoneConsultationCommonHighlightSnapshot, 0, 0);
  }
  drawPhoneConsultationCommonHighlight(phoneConsultationCommonHighlightStartPoint, point);
  phoneConsultationCommonHighlightLastPoint = point;
}

function finishPhoneConsultationCommonHighlight(event) {
  if (!phoneConsultationCommonHighlightDrawing) return;
  const anchoredStroke = createAnchoredHighlightStroke(
    phoneConsultationCommonTemplateInput,
    phoneConsultationCommonHighlightStartPoint,
    phoneConsultationCommonHighlightLastPoint,
    phoneConsultationCommonHighlightColor,
  );
  if (anchoredStroke) phoneConsultationCommonHighlightStrokes.push(anchoredStroke);
  phoneConsultationCommonHighlightDrawing = false;
  phoneConsultationCommonHighlightLastPoint = null;
  phoneConsultationCommonHighlightStartPoint = null;
  phoneConsultationCommonHighlightSnapshot = null;
  phoneConsultationCommonHighlightCanvas.releasePointerCapture?.(event.pointerId);
  phoneConsultationCommonHighlightImage = phoneConsultationCommonHighlightCanvas.toDataURL("image/png");
  phoneConsultationCommonHighlightPreviousText = phoneConsultationCommonTemplateInput?.value || "";
  savePhoneConsultationDraftForCustomer();
  showPhoneConsultationStatus(phoneConsultationCommonHighlightEraseMode
    ? "선택한 형광펜 표시를 지웠습니다."
    : "공통 메모 형광펜 표시를 자동 저장했습니다.");
}

function setPhoneConsultationCommonHighlightEraser(enabled) {
  phoneConsultationCommonHighlightEraseMode = Boolean(enabled);
  phoneConsultationCommonEraserButton?.classList.toggle("is-active", phoneConsultationCommonHighlightEraseMode);
  phoneConsultationCommonEraserButton?.setAttribute("aria-pressed", String(phoneConsultationCommonHighlightEraseMode));
  phoneConsultationCommonCanvasWrap?.classList.toggle("is-eraser-mode", phoneConsultationCommonHighlightEraseMode);
  if (phoneConsultationCommonHighlightEraseMode && !phoneConsultationCommonHighlightMode) {
    setPhoneConsultationCommonHighlightMode(true);
  }
  showPhoneConsultationStatus(phoneConsultationCommonHighlightEraseMode
    ? "위 메모에서 지울 형광펜 선을 클릭해주세요."
    : "위 메모에서 형광펜 색상을 선택해 직선으로 그어주세요.");
}

function mergePhoneConsultationRecordMap(...maps) {
  const merged = {};
  maps.filter((map) => map && typeof map === "object" && !Array.isArray(map)).forEach((map) => {
    Object.entries(map).forEach(([key, value]) => {
      if (!value || typeof value !== "object") return;
      const previousTime = new Date(merged[key]?.updatedAt || 0).getTime();
      const valueTime = new Date(value.updatedAt || 0).getTime();
      if (!merged[key] || valueTime >= previousTime) {
        merged[key] = value;
      }
    });
  });
  return merged;
}

function savePhoneConsultationDraftForCustomer(customerId = activePhoneConsultationCustomerId || savedCustomerSelect?.value || "") {
  const key = getPhoneConsultationCustomerKey(customerId);
  const drafts = getStoredPhoneConsultationDrafts();
  drafts[key] = {
    title: phoneConsultationTitleInput?.value ?? "",
    memo: phoneConsultationMemoInput?.value ?? "",
    highlightImage: phoneConsultationHighlightImage,
    highlightStrokes: phoneConsultationHighlightStrokes,
    commonTemplate: phoneConsultationCommonTemplateInput?.value ?? getStoredPhoneConsultationCommonTemplate(),
    commonHighlightImage: phoneConsultationCommonHighlightImage,
    commonHighlightStrokes: phoneConsultationCommonHighlightStrokes,
    activeMemoId: activePhoneConsultationId,
    viewedMemoId: viewedPhoneConsultationMemoId,
    updatedAt: new Date().toISOString(),
  };
  setStoredPhoneConsultationDrafts(drafts);
}

function restorePhoneConsultationDraftForCustomer(customerId = savedCustomerSelect?.value || "") {
  const key = getPhoneConsultationCustomerKey(customerId);
  const draft = getStoredPhoneConsultationDrafts()[key];
  activePhoneConsultationCustomerId = key;
  if (!draft) {
    activePhoneConsultationId = "";
    viewedPhoneConsultationMemoId = "";
    if (phoneConsultationTitleInput) phoneConsultationTitleInput.value = "";
    if (phoneConsultationMemoInput) phoneConsultationMemoInput.value = "";
    restorePhoneConsultationHighlight("");
    renderPhoneConsultationCommonTemplate();
    renderPhoneConsultationMemoButtons();
    return;
  }

  activePhoneConsultationId = draft.activeMemoId || "";
  viewedPhoneConsultationMemoId = draft.viewedMemoId || "";
  if (phoneConsultationTitleInput) phoneConsultationTitleInput.value = draft.title || "";
  if (phoneConsultationMemoInput) phoneConsultationMemoInput.value = draft.memo || "";
  restorePhoneConsultationHighlight(draft.highlightImage || "", draft.highlightStrokes || []);
  if (phoneConsultationCommonTemplateInput) phoneConsultationCommonTemplateInput.value = draft.commonTemplate || getStoredPhoneConsultationCommonTemplate();
  restorePhoneConsultationCommonHighlight(
    draft.commonHighlightImage || getStoredPhoneConsultationCommonHighlight(),
    draft.commonHighlightStrokes || getStoredPhoneConsultationCommonHighlightStrokes(),
  );
  renderPhoneConsultationMemoButtons(viewedPhoneConsultationMemoId);
}

function getPhoneConsultationOrderForCustomer() {
  const order = getPhoneConsultationLayoutRecord().ids;
  return Array.isArray(order) ? order : [];
}

function getPhoneConsultationGroupOverridesForCustomer() {
  const groups = getPhoneConsultationLayoutRecord().groups;
  return groups && typeof groups === "object" && !Array.isArray(groups) ? groups : {};
}

function getPhoneConsultationGroupTitlesForCustomer() {
  const titles = getPhoneConsultationLayoutRecord().titles;
  return titles && typeof titles === "object" && !Array.isArray(titles) ? titles : {};
}

function savePhoneConsultationOrderForCustomer(ids) {
  const orders = getStoredPhoneConsultationOrders();
  const previous = getPhoneConsultationLayoutRecord();
  orders[phoneConsultationGlobalLayoutKey] = {
    ids: Array.isArray(ids) ? ids : [],
    groups: previous.groups && typeof previous.groups === "object" && !Array.isArray(previous.groups) ? previous.groups : {},
    titles: previous.titles && typeof previous.titles === "object" && !Array.isArray(previous.titles) ? previous.titles : {},
    updatedAt: new Date().toISOString(),
  };
  setStoredPhoneConsultationOrders(orders);
}

function savePhoneConsultationLayoutForCustomer(ids, groups) {
  const orders = getStoredPhoneConsultationOrders();
  const previous = getPhoneConsultationLayoutRecord();
  orders[phoneConsultationGlobalLayoutKey] = {
    ids: Array.isArray(ids) ? ids : [],
    groups: groups && typeof groups === "object" && !Array.isArray(groups) ? groups : {},
    titles: previous.titles && typeof previous.titles === "object" && !Array.isArray(previous.titles) ? previous.titles : {},
    updatedAt: new Date().toISOString(),
  };
  setStoredPhoneConsultationOrders(orders);
}

function savePhoneConsultationGroupTitleForCustomer(groupId, title) {
  if (!["claim", "coverage", "general"].includes(groupId)) return;
  const orders = getStoredPhoneConsultationOrders();
  const previous = getPhoneConsultationLayoutRecord();
  orders[phoneConsultationGlobalLayoutKey] = {
    ids: Array.isArray(previous.ids) ? previous.ids : [],
    groups: previous.groups && typeof previous.groups === "object" && !Array.isArray(previous.groups) ? previous.groups : {},
    titles: {
      ...(previous.titles && typeof previous.titles === "object" && !Array.isArray(previous.titles) ? previous.titles : {}),
      [groupId]: String(title ?? ""),
    },
    updatedAt: new Date().toISOString(),
  };
  setStoredPhoneConsultationOrders(orders);
}

function renderPhoneConsultationCommonTemplate() {
  if (phoneConsultationCommonTemplateInput) {
    phoneConsultationCommonTemplateInput.value = getStoredPhoneConsultationCommonTemplate();
  }
  restorePhoneConsultationCommonHighlight(
    getStoredPhoneConsultationCommonHighlight(),
    getStoredPhoneConsultationCommonHighlightStrokes(),
  );
}

function getPhoneConsultationTemplateButtonTitle(content) {
  return String(content ?? "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find(Boolean) || "";
}

function savePhoneConsultationCommonTemplateAsMemo(content, highlightImage = "", highlightStrokes = []) {
  const title = getPhoneConsultationTemplateButtonTitle(content);
  if (!title) return { saved: false, reason: "empty-title" };

  const memos = recoverPhoneConsultationMemosToCurrentAccount();
  const now = new Date().toISOString();
  let memo = memos.find((item) => item.source === "common-template" && item.title === title);
  if (!memo) {
    memo = memos.find((item) => !item.source && item.title === title && item.content === content);
  }

  if (memo) {
    memo.title = title;
    memo.content = content;
    memo.highlightImage = highlightImage;
    memo.highlightStrokes = highlightStrokes;
    memo.source = "common-template";
    memo.updatedAt = now;
  } else {
    memos.push({
      id: `phone-template-${Date.now()}`,
      title,
      content,
      highlightImage,
      highlightStrokes,
      source: "common-template",
      sortOrder: getNextPhoneConsultationSortOrder(memos),
      createdAt: now,
      updatedAt: now,
    });
  }

  return { saved: setStoredPhoneConsultationMemos(memos), title };
}

function savePhoneConsultationCommonTemplate() {
  const content = phoneConsultationCommonTemplateInput?.value ?? "";
  setStoredPhoneConsultationCommonTemplate(content);
  setStoredPhoneConsultationCommonHighlight(phoneConsultationCommonHighlightImage);
  setStoredPhoneConsultationCommonHighlightStrokes(phoneConsultationCommonHighlightStrokes);
  savePhoneConsultationDraftForCustomer();
  const result = savePhoneConsultationCommonTemplateAsMemo(
    content,
    phoneConsultationCommonHighlightImage,
    phoneConsultationCommonHighlightStrokes,
  );
  renderPhoneConsultationMemoButtons();
  scheduleCloudSync();

  if (result.saved) {
    showPhoneConsultationStatus(`공통 양식을 저장하고 "${result.title}" 버튼을 만들었습니다.`);
    return;
  }

  if (result.reason === "empty-title") {
    showPhoneConsultationStatus("공통 양식을 저장했습니다. 첫 줄을 쓰면 저장된 메모 버튼도 만들어집니다.");
    return;
  }

  showPhoneConsultationStatus("공통 양식은 저장했지만 메모 버튼 저장에 실패했습니다.");
}

function appendPhoneConsultationMemoContent(content, message = "내용을 메모칸 아래에 추가했습니다.", options = {}) {
  const template = String(content ?? "").trim();
  if (!template || !phoneConsultationMemoInput) {
    showPhoneConsultationStatus("추가할 내용이 없습니다.");
    return;
  }
  const current = phoneConsultationMemoInput?.value ?? "";
  phoneConsultationMemoInput.value = current.trim()
    ? `${current.replace(/\s+$/, "")}\n\n${template}`
    : template;
  phoneConsultationHighlightPreviousText = phoneConsultationMemoInput.value;
  if (options.focusMemo) {
    focusWithoutPageJump(phoneConsultationMemoInput);
    phoneConsultationMemoInput.selectionStart = phoneConsultationMemoInput.value.length;
    phoneConsultationMemoInput.selectionEnd = phoneConsultationMemoInput.value.length;
  }
  savePhoneConsultationDraftForCustomer();
  showPhoneConsultationStatus(message);
}

function insertPhoneConsultationCommonTemplate() {
  const template = getStoredPhoneConsultationCommonTemplate().trim();
  if (!template) {
    showPhoneConsultationStatus("먼저 공통 메모 양식을 작성하고 저장해주세요.");
    return;
  }
  appendPhoneConsultationMemoContent(template, "공통 메모 양식을 메모칸 아래에 추가했습니다.");
}

function formatPhoneConsultationSavedAt(value) {
  const date = new Date(value || "");
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function sortPhoneConsultationMemos(memos, orderIds = []) {
  const orderMap = new Map(orderIds.map((id, index) => [id, index]));
  return [...memos].sort((left, right) => {
    const leftSavedOrder = orderMap.has(left.id) ? orderMap.get(left.id) : null;
    const rightSavedOrder = orderMap.has(right.id) ? orderMap.get(right.id) : null;
    if (leftSavedOrder !== null && rightSavedOrder !== null && leftSavedOrder !== rightSavedOrder) {
      return leftSavedOrder - rightSavedOrder;
    }
    if (leftSavedOrder !== null && rightSavedOrder === null) return -1;
    if (leftSavedOrder === null && rightSavedOrder !== null) return 1;

    const leftOrder = Number.isFinite(Number(left.sortOrder)) ? Number(left.sortOrder) : null;
    const rightOrder = Number.isFinite(Number(right.sortOrder)) ? Number(right.sortOrder) : null;
    if (leftOrder !== null && rightOrder !== null && leftOrder !== rightOrder) {
      return leftOrder - rightOrder;
    }
    if (leftOrder !== null && rightOrder === null) return -1;
    if (leftOrder === null && rightOrder !== null) return 1;
    return new Date(right.updatedAt || right.createdAt || 0) - new Date(left.updatedAt || left.createdAt || 0);
  });
}

function getNextPhoneConsultationSortOrder(memos) {
  return memos.reduce((maxOrder, memo, index) => {
    const order = Number.isFinite(Number(memo.sortOrder)) ? Number(memo.sortOrder) : index;
    return Math.max(maxOrder, order);
  }, -1) + 1;
}

function getOrderedPhoneConsultationMemos(customerId = savedCustomerSelect?.value || activePhoneConsultationCustomerId || "") {
  return sortPhoneConsultationMemos(
    recoverPhoneConsultationMemosToCurrentAccount(),
    getPhoneConsultationOrderForCustomer(customerId),
  );
}

function mergePhoneConsultationMemos(...memoLists) {
  const merged = new Map();
  memoLists.flat().filter(Boolean).forEach((memo) => {
    if (!memo?.id) return;
    const previous = merged.get(memo.id);
    const memoTime = new Date(memo.updatedAt || memo.createdAt || 0).getTime();
    const previousTime = new Date(previous?.updatedAt || previous?.createdAt || 0).getTime();
    if (!previous || memoTime >= previousTime) merged.set(memo.id, memo);
  });
  return sortPhoneConsultationMemos([...merged.values()]);
}

function persistPhoneConsultationCloudDataFromDraft(draft) {
  if (!draft || typeof draft !== "object") return false;
  let changed = false;

  if (Array.isArray(draft.phoneConsultationMemos)) {
    const mergedMemos = mergePhoneConsultationMemos(
      getStoredPhoneConsultationMemos(),
      draft.phoneConsultationMemos,
    );
    if (mergedMemos.length) {
      setStoredPhoneConsultationMemos(mergedMemos);
      changed = true;
    }
  }

  if (typeof draft.phoneConsultationCommonTemplate === "string") {
    const incomingTime = new Date(draft.phoneConsultationCommonTemplateUpdatedAt || 0).getTime();
    const currentTime = new Date(getStoredPhoneConsultationCommonTemplateUpdatedAt() || 0).getTime();
    const shouldApply = incomingTime
      ? incomingTime >= currentTime
      : !getStoredPhoneConsultationCommonTemplate().trim() && draft.phoneConsultationCommonTemplate.trim();
    if (shouldApply) {
      setStoredPhoneConsultationCommonTemplate(draft.phoneConsultationCommonTemplate, {
        updatedAt: draft.phoneConsultationCommonTemplateUpdatedAt || "",
        touch: false,
      });
      if (typeof draft.phoneConsultationCommonHighlight === "string") {
        setStoredPhoneConsultationCommonHighlight(draft.phoneConsultationCommonHighlight);
      }
      if (Array.isArray(draft.phoneConsultationCommonHighlightStrokes)) {
        setStoredPhoneConsultationCommonHighlightStrokes(draft.phoneConsultationCommonHighlightStrokes);
      }
      changed = true;
    }
  } else {
    if (typeof draft.phoneConsultationCommonHighlight === "string") {
      setStoredPhoneConsultationCommonHighlight(draft.phoneConsultationCommonHighlight);
      changed = true;
    }
    if (Array.isArray(draft.phoneConsultationCommonHighlightStrokes)) {
      setStoredPhoneConsultationCommonHighlightStrokes(draft.phoneConsultationCommonHighlightStrokes);
      changed = true;
    }
  }

  if (draft.phoneConsultationCommonTemplateUpdatedAt && !getStoredPhoneConsultationCommonTemplateUpdatedAt()) {
    setStoredPhoneConsultationCommonTemplate(getStoredPhoneConsultationCommonTemplate(), {
      updatedAt: draft.phoneConsultationCommonTemplateUpdatedAt,
      touch: false,
    });
    changed = true;
  }

  if (draft.phoneConsultationDrafts && typeof draft.phoneConsultationDrafts === "object") {
    setStoredPhoneConsultationDrafts(mergePhoneConsultationRecordMap(
      getStoredPhoneConsultationDrafts(),
      draft.phoneConsultationDrafts,
    ));
    changed = true;
  }

  if (draft.phoneConsultationOrders && typeof draft.phoneConsultationOrders === "object") {
    setStoredPhoneConsultationOrders(mergePhoneConsultationRecordMap(
      getStoredPhoneConsultationOrders(),
      draft.phoneConsultationOrders,
    ));
    changed = true;
  }

  if (Array.isArray(draft.promotionPosts)) {
    const mergedPosts = mergePromotionPosts(getStoredPromotionPosts(), draft.promotionPosts);
    if (mergedPosts.length) {
      setStoredPromotionPosts(mergedPosts);
      renderPromotionSavedList();
      changed = true;
    }
  }

  return changed;
}

function getPhoneConsultationMemoGroup(memo, groupOverrides = {}) {
  if (memo?.id && ["claim", "coverage", "general"].includes(groupOverrides[memo.id])) {
    return groupOverrides[memo.id];
  }

  const text = `${memo?.title || ""} ${memo?.content || ""}`.toLowerCase();
  if (/숨은|보험금|청구|실손|실비|환급|보상|서류/.test(text)) {
    return "claim";
  }
  if (/진단|수술|입원|암|뇌|심장|질병|상해|후유|간병|보장/.test(text)) {
    return "coverage";
  }
  return "general";
}

function getPhoneConsultationMemoGroups(memos, customerId = savedCustomerSelect?.value || activePhoneConsultationCustomerId || "") {
  const groupOverrides = getPhoneConsultationGroupOverridesForCustomer(customerId);
  return [
    { id: "claim", memos: memos.filter((memo) => getPhoneConsultationMemoGroup(memo, groupOverrides) === "claim") },
    { id: "coverage", memos: memos.filter((memo) => getPhoneConsultationMemoGroup(memo, groupOverrides) === "coverage") },
    { id: "general", memos: memos.filter((memo) => getPhoneConsultationMemoGroup(memo, groupOverrides) === "general") },
  ];
}

function selectPhoneConsultationMemoButton(memoId, { persist = true } = {}) {
  if (!memoId) return;
  viewedPhoneConsultationMemoId = memoId;
  phoneConsultationMemoList?.querySelectorAll("[data-memo-id]").forEach((button) => {
    const selected = button.dataset.memoId === memoId;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  if (persist) {
    savePhoneConsultationDraftForCustomer();
    scheduleCloudSync();
  }
}

function renderPhoneConsultationMemoButtons(selectedId = viewedPhoneConsultationMemoId) {
  if (!phoneConsultationMemoList) return;
  const memos = getOrderedPhoneConsultationMemos();
  phoneConsultationMemoList.innerHTML = "";

  if (!memos.length) {
    const empty = document.createElement("p");
    empty.className = "phone-consultation-memo-empty";
    empty.textContent = "저장된 메모가 없습니다. 제목을 입력하고 저장해주세요.";
    phoneConsultationMemoList.append(empty);
    return;
  }

  const groupTitles = getPhoneConsultationGroupTitlesForCustomer();
  getPhoneConsultationMemoGroups(memos).forEach((group) => {
    const column = document.createElement("div");
    column.className = "phone-consultation-memo-column";
    column.dataset.memoGroup = group.id;

    const titleInput = document.createElement("input");
    titleInput.className = "phone-consultation-memo-column-title";
    titleInput.type = "text";
    titleInput.dataset.memoGroupTitle = group.id;
    titleInput.placeholder = "칸 이름 입력";
    titleInput.value = groupTitles[group.id] || "";
    column.append(titleInput);

    const buttons = document.createElement("div");
    buttons.className = "phone-consultation-memo-column-buttons";
    buttons.dataset.memoDropGroup = group.id;

    if (!group.memos.length) {
      const empty = document.createElement("span");
      empty.className = "phone-consultation-memo-column-empty";
      empty.textContent = "없음";
      buttons.append(empty);
    }

    group.memos.forEach((memo) => {
      const item = document.createElement("span");
      item.className = "phone-consultation-memo-item";

      const button = document.createElement("button");
      button.type = "button";
      button.className = "phone-consultation-memo-button";
      const selected = memo.id === selectedId;
      if (selected) button.classList.add("is-selected");
      button.setAttribute("aria-pressed", String(selected));
      button.dataset.memoId = memo.id;
      button.draggable = true;
      button.title = "마우스로 끌어서 순서를 바꿀 수 있습니다.";
      button.textContent = memo.title || "제목 없음";

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "phone-consultation-memo-delete";
      deleteButton.dataset.memoDeleteId = memo.id;
      deleteButton.title = "저장된 메모 삭제";
      deleteButton.textContent = "\u00d7";

      item.append(button, deleteButton);
      buttons.append(item);
    });

    column.append(buttons);
    phoneConsultationMemoList.append(column);
  });
}

function clearPhoneConsultationForm() {
  activePhoneConsultationId = "";
  viewedPhoneConsultationMemoId = "";
  if (phoneConsultationTitleInput) phoneConsultationTitleInput.value = "";
  if (phoneConsultationMemoInput) phoneConsultationMemoInput.value = "";
  restorePhoneConsultationHighlight("");
  renderPhoneConsultationMemoButtons();
}

function reorderPhoneConsultationMemos(draggedId, targetId = "", targetGroup = "") {
  if (!draggedId) return;

  const memos = getOrderedPhoneConsultationMemos();
  const draggedIndex = memos.findIndex((memo) => memo.id === draggedId);
  if (draggedIndex < 0) return;

  const groupOverrides = { ...getPhoneConsultationGroupOverridesForCustomer() };
  const normalizedTargetGroup = ["claim", "coverage", "general"].includes(targetGroup) ? targetGroup : "";
  if (normalizedTargetGroup) groupOverrides[draggedId] = normalizedTargetGroup;

  const [draggedMemo] = memos.splice(draggedIndex, 1);
  if (targetId && targetId !== draggedId) {
    const targetIndex = memos.findIndex((memo) => memo.id === targetId);
    if (targetIndex >= 0) {
      memos.splice(targetIndex, 0, draggedMemo);
    } else {
      memos.push(draggedMemo);
    }
  } else if (normalizedTargetGroup) {
    const lastIndexInGroup = memos.reduce((lastIndex, memo, index) => (
      getPhoneConsultationMemoGroup(memo, groupOverrides) === normalizedTargetGroup ? index : lastIndex
    ), -1);
    memos.splice(lastIndexInGroup + 1, 0, draggedMemo);
  } else {
    memos.push(draggedMemo);
  }

  savePhoneConsultationLayoutForCustomer(memos.map((memo) => memo.id), groupOverrides);

  renderPhoneConsultationMemoButtons(viewedPhoneConsultationMemoId);
  scheduleCloudSync();
  showPhoneConsultationStatus("저장된 메모 순서를 바꿨습니다.");
}

function loadPhoneConsultationById(id) {
  preserveScrollPosition(() => {
    const memo = recoverPhoneConsultationMemosToCurrentAccount().find((item) => item.id === id);
    if (!memo) {
      showPhoneConsultationStatus("저장된 메모를 찾지 못했습니다.");
      return;
    }
    selectPhoneConsultationMemoButton(memo.id, { persist: false });
    if (phoneConsultationCommonTemplateInput) {
      phoneConsultationCommonTemplateInput.value = memo.content || "";
    }
    restorePhoneConsultationCommonHighlight(memo.highlightImage || "", memo.highlightStrokes || []);
    setStoredPhoneConsultationCommonTemplate(memo.content || "");
    setStoredPhoneConsultationCommonHighlight(memo.highlightImage || "");
    setStoredPhoneConsultationCommonHighlightStrokes(memo.highlightStrokes || []);
    if (memo.source === "common-template") {
      appendPhoneConsultationMemoContent(memo.content, `"${memo.title || "공통 양식"}" 내용을 아래에 추가했습니다.`);
      renderPhoneConsultationMemoButtons(viewedPhoneConsultationMemoId);
      return;
    }
    activePhoneConsultationId = memo.id;
    if (phoneConsultationTitleInput) phoneConsultationTitleInput.value = memo.title || "";
    if (phoneConsultationMemoInput) phoneConsultationMemoInput.value = memo.content || "";
    restorePhoneConsultationHighlight(memo.highlightImage || "", memo.highlightStrokes || []);
    savePhoneConsultationDraftForCustomer();
    renderPhoneConsultationMemoButtons(viewedPhoneConsultationMemoId);
    showPhoneConsultationStatus("메모를 불러왔습니다.");
  });
}

function savePhoneConsultationMemo() {
  if (!currentSession?.user?.id) {
    showPhoneConsultationStatus("로그인 후 저장할 수 있습니다.");
    return;
  }

  const title = phoneConsultationTitleInput?.value.trim() ?? "";
  const content = phoneConsultationMemoInput?.value ?? "";
  if (!title) {
    showPhoneConsultationStatus("제목을 입력해주세요.");
    phoneConsultationTitleInput?.focus();
    return;
  }

  const memos = recoverPhoneConsultationMemosToCurrentAccount();
  const now = new Date().toISOString();
  const existing = memos.find((memo) => memo.id === activePhoneConsultationId);
  if (existing) {
    existing.title = title;
    existing.content = content;
    existing.highlightImage = phoneConsultationHighlightImage;
    existing.highlightStrokes = phoneConsultationHighlightStrokes;
    existing.updatedAt = now;
  } else {
    activePhoneConsultationId = `phone-memo-${Date.now()}`;
    memos.push({
      id: activePhoneConsultationId,
      title,
      content,
      highlightImage: phoneConsultationHighlightImage,
      highlightStrokes: phoneConsultationHighlightStrokes,
      sortOrder: getNextPhoneConsultationSortOrder(memos),
      createdAt: now,
      updatedAt: now,
    });
  }

  if (!setStoredPhoneConsultationMemos(memos)) {
    showPhoneConsultationStatus("메모 저장에 실패했습니다.");
    return;
  }

  renderPhoneConsultationMemoButtons(viewedPhoneConsultationMemoId);
  scheduleCloudSync();
  showPhoneConsultationStatus("전화상담 메모를 저장했습니다.");
}

function deletePhoneConsultationMemoById(memoId) {
  if (!memoId) {
    showPhoneConsultationStatus("삭제할 메모 버튼을 먼저 선택해주세요.");
    return;
  }

  const memo = recoverPhoneConsultationMemosToCurrentAccount().find((item) => item.id === memoId);
  if (memo && !confirm(`"${memo.title || "제목 없음"}" 메모를 삭제할까요?`)) return;

  const memos = getStoredPhoneConsultationMemos().filter((item) => item.id !== memoId);
  if (!setStoredPhoneConsultationMemos(memos)) {
    showPhoneConsultationStatus("메모 삭제에 실패했습니다.");
    return;
  }

  const orders = getStoredPhoneConsultationOrders();
  Object.values(orders).forEach((record) => {
    if (!record || typeof record !== "object") return;
    if (Array.isArray(record.ids)) record.ids = record.ids.filter((id) => id !== memoId);
    if (record.groups && typeof record.groups === "object") delete record.groups[memoId];
  });
  setStoredPhoneConsultationOrders(orders);

  if (viewedPhoneConsultationMemoId === memoId) {
    viewedPhoneConsultationMemoId = "";
  }
  if (activePhoneConsultationId === memoId) {
    clearPhoneConsultationForm();
  } else {
    renderPhoneConsultationMemoButtons(viewedPhoneConsultationMemoId);
  }
  scheduleCloudSync();
  showPhoneConsultationStatus("저장된 메모를 삭제했습니다.");
}

function deletePhoneConsultationMemo() {
  deletePhoneConsultationMemoById(activePhoneConsultationId);
}

function showPromotionStatus(message) {
  if (!promotionStatus) return;
  promotionStatus.textContent = message;
  window.setTimeout(() => {
    promotionStatus.textContent = "";
  }, 2500);
}

function getStoredPromotionPosts() {
  const posts = readJsonStorage(getScopedStorageKey(promotionPostsStorageKey), []);
  return Array.isArray(posts) ? posts : [];
}

function setStoredPromotionPosts(posts) {
  localStorage.setItem(getScopedStorageKey(promotionPostsStorageKey), JSON.stringify(Array.isArray(posts) ? posts : []));
}

function mergePromotionPosts(...postLists) {
  const merged = new Map();
  postLists.flat().filter(Boolean).forEach((post) => {
    if (!post?.id) return;
    const previous = merged.get(post.id);
    const postTime = new Date(post.updatedAt || post.createdAt || 0).getTime();
    const previousTime = new Date(previous?.updatedAt || previous?.createdAt || 0).getTime();
    if (!previous || postTime >= previousTime) merged.set(post.id, post);
  });
  return [...merged.values()].sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));
}

function getPromotionChannelLabel(value) {
  return {
    blog: "네이버블로그",
    instagram: "인스타그램",
    kin: "네이버 지식인",
    carrot: "당근",
    youtube_shorts: "유튜브 쇼츠",
    reels: "릴스",
  }[value] || "홍보";
}

function renderPromotionSavedList() {
  if (!promotionSavedList) return;
  const posts = getStoredPromotionPosts();
  promotionSavedList.innerHTML = "";

  if (!posts.length) {
    const empty = document.createElement("p");
    empty.className = "promotion-saved-empty";
    empty.textContent = "저장된 홍보글이 없습니다.";
    promotionSavedList.append(empty);
    return;
  }

  posts.slice(0, 80).forEach((post) => {
    const row = document.createElement("div");
    row.className = "promotion-saved-row";

    const loadButton = document.createElement("button");
    loadButton.type = "button";
    loadButton.className = "promotion-saved-load";
    loadButton.dataset.promotionLoadId = post.id;
    const savedDate = post.updatedAt ? new Date(post.updatedAt).toLocaleString("ko-KR") : "";
    loadButton.textContent = [post.topic || "제목 없음", getPromotionChannelLabel(post.channel), savedDate].filter(Boolean).join(" / ");

    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "promotion-saved-copy";
    copyButton.dataset.promotionCopyId = post.id;
    copyButton.textContent = "복사";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "promotion-saved-delete";
    deleteButton.dataset.promotionDeleteId = post.id;
    deleteButton.textContent = "×";
    deleteButton.title = "저장된 홍보글 삭제";

    row.append(loadButton, copyButton, deleteButton);
    promotionSavedList.append(row);
  });
}

function savePromotionPost() {
  const content = promotionOutput?.value.trim() || "";
  if (!content) {
    showPromotionStatus("저장할 홍보글이 없습니다.");
    return;
  }

  const now = new Date().toISOString();
  const posts = getStoredPromotionPosts();
  const post = {
    id: `promotion-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    channel: promotionChannelInput?.value || "blog",
    tone: promotionToneInput?.value || "cute",
    length: promotionLengthInput?.value || "1",
    topic: promotionTopicInput?.value.trim() || getPromotionImageHint() || "홍보글",
    comment: promotionCommentInput?.value || "",
    memo: promotionMemoInput?.value || "",
    sourceText: promotionSourceTextInput?.value || "",
    content,
    imageName: promotionImageInput?.files?.[0]?.name || "",
    createdAt: now,
    updatedAt: now,
  };

  setStoredPromotionPosts([post, ...posts]);
  renderPromotionSavedList();
  scheduleCloudSync();
  showPromotionStatus("홍보글을 저장했습니다.");
}

function loadPromotionPost(id) {
  const post = getStoredPromotionPosts().find((item) => item.id === id);
  if (!post) {
    showPromotionStatus("저장된 홍보글을 찾지 못했습니다.");
    return;
  }
  if (promotionChannelInput) promotionChannelInput.value = post.channel || "blog";
  if (promotionToneInput) promotionToneInput.value = post.tone || "cute";
  if (promotionLengthInput) promotionLengthInput.value = post.length || "1";
  if (promotionTopicInput) promotionTopicInput.value = post.topic || "";
  if (promotionCommentInput) promotionCommentInput.value = post.comment || "";
  if (promotionMemoInput) promotionMemoInput.value = post.memo || "";
  if (promotionSourceTextInput) promotionSourceTextInput.value = post.sourceText || "";
  if (promotionOutput) promotionOutput.value = post.content || "";
  updatePromotionImageCommand();
  showPromotionStatus("저장된 홍보글을 불러왔습니다.");
}

function copyPromotionPost(id) {
  const post = getStoredPromotionPosts().find((item) => item.id === id);
  if (!post?.content) {
    showPromotionStatus("복사할 홍보글을 찾지 못했습니다.");
    return;
  }
  copyText(post.content, "저장된 홍보글 복사 완료");
}

function deletePromotionPost(id) {
  const posts = getStoredPromotionPosts();
  const post = posts.find((item) => item.id === id);
  if (!post) return;
  if (!confirm(`"${post.topic || "제목 없음"}" 홍보글을 삭제할까요?`)) return;
  setStoredPromotionPosts(posts.filter((item) => item.id !== id));
  renderPromotionSavedList();
  scheduleCloudSync();
  showPromotionStatus("저장된 홍보글을 삭제했습니다.");
}

function getStoredPromotionImageSignature() {
  const signature = readJsonStorage(promotionImageSignatureStorageKey, {});
  return signature && typeof signature === "object" ? signature : {};
}

function savePromotionImageSignature() {
  localStorage.setItem(promotionImageSignatureStorageKey, JSON.stringify({
    message: promotionImageMessageInput?.value || "",
    textColor: promotionTextColorInput?.value || "#ffd400",
    boxColor: promotionBoxColorInput?.value || "#000000",
    shapeColor: promotionShapeColorInput?.value || "#39a95b",
    toolColor: getPromotionCurrentColor(),
    toolOpacity: Math.round(getPromotionCurrentOpacity() * 100),
  }));
}

function restorePromotionImageSignature() {
  const signature = getStoredPromotionImageSignature();
  if (promotionImageMessageInput) {
    promotionImageMessageInput.value = signature.message || [signature.name, signature.phone].filter(Boolean).join("\n");
  }
  if (promotionTextColorInput && signature.textColor) promotionTextColorInput.value = signature.textColor;
  if (promotionBoxColorInput && signature.boxColor) promotionBoxColorInput.value = signature.boxColor;
  if (promotionShapeColorInput && signature.shapeColor) promotionShapeColorInput.value = signature.shapeColor;
  if (promotionToolColorInput && signature.toolColor) promotionToolColorInput.value = signature.toolColor;
  if (promotionToolOpacityInput && Number.isFinite(Number(signature.toolOpacity))) promotionToolOpacityInput.value = String(signature.toolOpacity);
}

function clearPromotionImageOutput() {
  if (promotionCropCanvas) promotionCropCanvas.hidden = true;
  if (downloadPromotionImageButton) downloadPromotionImageButton.disabled = false;
}

function loadPromotionImageBlob(blob, message = "이미지를 불러왔습니다. 크롭 또는 이름/연락처 넣기를 눌러주세요.") {
  clearPromotionImageOutput();
  if (promotionImageObjectUrl) URL.revokeObjectURL(promotionImageObjectUrl);
  promotionImageObjectUrl = "";

  if (!blob || !promotionImagePreview) {
    if (promotionImagePreview) {
      promotionImagePreview.hidden = true;
      promotionImagePreview.removeAttribute("src");
    }
    return;
  }

  promotionImageObjectUrl = URL.createObjectURL(blob);
  setPromotionOriginalFromBlob(blob);
  promotionImageHistory = [];
  promotionLiveColorBase = null;
  promotionTextOverlays = [];
  promotionTextBaseDataUrl = "";
  promotionTextBaseCanvas = null;
  promotionSelectedTextIndex = -1;
  promotionGraphicOverlays = [];
  promotionSelectedGraphicIndex = -1;
  promotionImagePreview.src = promotionImageObjectUrl;
  promotionImagePreview.hidden = false;
  if (promotionCropCanvas) promotionCropCanvas.hidden = true;
  showPromotionStatus(message);
}

function syncPromotionCanvasToPreview() {
  if (!promotionCropCanvas || !promotionImagePreview) return;
  if (promotionImageObjectUrl) URL.revokeObjectURL(promotionImageObjectUrl);
  promotionImageObjectUrl = promotionCropCanvas.toDataURL("image/png");
  promotionImagePreview.src = promotionImageObjectUrl;
}

function setPromotionOriginalFromBlob(blob) {
  promotionOriginalImageDataUrl = "";
  if (!blob) return;
  const reader = new FileReader();
  reader.onload = () => {
    promotionOriginalImageDataUrl = String(reader.result || "");
  };
  reader.readAsDataURL(blob);
}

function pushPromotionImageHistory() {
  if (!promotionCropCanvas || promotionCropCanvas.hidden || !promotionCropCanvas.width || !promotionCropCanvas.height) return;
  promotionImageHistory.push(promotionCropCanvas.toDataURL("image/png"));
  if (promotionImageHistory.length > 20) promotionImageHistory.shift();
}

function undoPromotionImageEdit() {
  if (!promotionImageHistory.length || !promotionCropCanvas) {
    showPromotionStatus("되돌릴 이미지 편집이 없습니다.");
    return;
  }
  const previous = promotionImageHistory.pop();
  const image = new Image();
  image.onload = () => {
    promotionCropCanvas.width = image.naturalWidth;
    promotionCropCanvas.height = image.naturalHeight;
    const context = promotionCropCanvas.getContext("2d");
    context.clearRect(0, 0, promotionCropCanvas.width, promotionCropCanvas.height);
    context.drawImage(image, 0, 0);
    promotionCropCanvas.hidden = false;
    syncPromotionCanvasToPreview();
    if (promotionImagePreview) promotionImagePreview.hidden = true;
    if (downloadPromotionImageButton) downloadPromotionImageButton.disabled = false;
    showPromotionStatus("이전 이미지 편집으로 되돌렸습니다.");
  };
  image.src = previous;
}

function resetPromotionImageToOriginal() {
  if (!promotionOriginalImageDataUrl || !promotionImagePreview) {
    showPromotionStatus("되돌릴 원본 이미지가 없습니다.");
    return;
  }
  pushPromotionImageHistory();
  promotionImagePreview.src = promotionOriginalImageDataUrl;
  promotionImagePreview.hidden = false;
  if (promotionCropCanvas) promotionCropCanvas.hidden = true;
  if (downloadPromotionImageButton) downloadPromotionImageButton.disabled = false;
  promotionLiveColorBase = null;
  promotionTextOverlays = [];
  promotionGraphicOverlays = [];
  promotionTextBaseCanvas = null;
  promotionTextBaseDataUrl = "";
  promotionSelectedTextIndex = -1;
  promotionSelectedGraphicIndex = -1;
  showPromotionStatus("원본 이미지로 되돌렸습니다.");
}

function removePromotionStamp() {
  if (promotionTextOverlays.length) {
    promotionTextOverlays.pop();
    promotionSelectedTextIndex = promotionTextOverlays.length - 1;
    renderPromotionTextOverlays();
    showPromotionStatus("마지막 메시지 글씨를 뺐습니다.");
    return;
  }
  undoPromotionImageEdit();
}

function getPromotionCanvasPoint(event) {
  const rect = promotionCropCanvas.getBoundingClientRect();
  return {
    x: Math.max(0, Math.min(promotionCropCanvas.width, Math.round((event.clientX - rect.left) * (promotionCropCanvas.width / rect.width)))),
    y: Math.max(0, Math.min(promotionCropCanvas.height, Math.round((event.clientY - rect.top) * (promotionCropCanvas.height / rect.height)))),
  };
}

function capturePromotionTextBase() {
  if (!ensurePromotionCanvasFromVisibleImage()) return false;
  if (!promotionTextBaseCanvas) {
    promotionTextBaseCanvas = document.createElement("canvas");
    promotionTextBaseCanvas.width = promotionCropCanvas.width;
    promotionTextBaseCanvas.height = promotionCropCanvas.height;
    promotionTextBaseCanvas.getContext("2d").drawImage(promotionCropCanvas, 0, 0);
    promotionTextBaseDataUrl = promotionCropCanvas.toDataURL("image/png");
  }
  return true;
}

function getPromotionTextBounds(item, context = promotionCropCanvas?.getContext("2d")) {
  if (!item || !context) return null;
  const fontSize = Math.max(16, Number(item.fontSize || 44));
  context.font = `800 ${fontSize}px sans-serif`;
  const padding = Math.max(6, Math.round(fontSize * 0.24));
  const textWidth = context.measureText(item.text).width;
  return {
    x: item.x - padding,
    y: item.y - fontSize * 0.68,
    width: textWidth + padding * 2,
    height: fontSize * 1.36,
  };
}

function drawPromotionGraphicOverlay(context, item) {
  if (!item || !context) return;
  const { x, y, width, height } = item;
  const color = hexToRgb(item.color || "#39a95b");
  context.save();
  if (item.type === "frame" && item.image?.naturalWidth && item.image?.naturalHeight) {
    context.beginPath();
    if (item.shape === "circle") context.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
    else context.rect(x, y, width, height);
    context.clip();
    drawPromotionImageCover(context, item.image, x, y, width, height);
    context.restore();
    context.save();
  }
  context.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${item.opacity})`;
  context.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${item.opacity})`;
  context.lineWidth = Math.max(4, Math.round(Math.min(promotionCropCanvas.width, promotionCropCanvas.height) * 0.008));
  if (item.shape === "circle") {
    context.beginPath();
    context.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
    if (item.type === "fill") context.fill();
    else context.stroke();
  } else if (item.type === "fill") {
    context.fillRect(x, y, width, height);
  } else {
    context.strokeRect(x, y, width, height);
  }
  context.restore();
}

function findPromotionGraphicAt(point) {
  for (let index = promotionGraphicOverlays.length - 1; index >= 0; index -= 1) {
    const item = promotionGraphicOverlays[index];
    if (point.x >= item.x - 8 && point.x <= item.x + item.width + 8 && point.y >= item.y - 8 && point.y <= item.y + item.height + 8) return index;
  }
  return -1;
}

function renderPromotionTextOverlays({ showSelection = true } = {}) {
  if (!promotionCropCanvas || !promotionTextBaseCanvas) return;
  promotionCropCanvas.width = promotionTextBaseCanvas.width;
  promotionCropCanvas.height = promotionTextBaseCanvas.height;
  const context = promotionCropCanvas.getContext("2d");
  context.clearRect(0, 0, promotionCropCanvas.width, promotionCropCanvas.height);
  context.drawImage(promotionTextBaseCanvas, 0, 0);
  promotionGraphicOverlays.forEach((item) => drawPromotionGraphicOverlay(context, item));
  promotionTextOverlays.forEach((item) => {
    const fontSize = Math.max(16, Number(item.fontSize || 44));
    context.font = `800 ${fontSize}px sans-serif`;
    context.textBaseline = "middle";
    const textWidth = context.measureText(item.text).width;
    const padding = Math.max(6, Math.round(fontSize * 0.24));
    const boxColor = hexToRgb(item.boxColor || "#000000");
    context.fillStyle = `rgba(${boxColor.r}, ${boxColor.g}, ${boxColor.b}, ${Number(item.boxOpacity ?? 0.58)})`;
    context.fillRect(item.x - padding, item.y - fontSize * 0.68, textWidth + padding * 2, fontSize * 1.36);
    context.lineWidth = Math.max(2, Math.round(fontSize * 0.08));
    context.strokeStyle = "rgba(0, 0, 0, 0.45)";
    context.fillStyle = item.color || "#ffd400";
    context.strokeText(item.text, item.x, item.y);
    context.fillText(item.text, item.x, item.y);
  });
  const selectedItem = promotionTextOverlays[promotionSelectedTextIndex];
  if (showSelection && selectedItem) {
    const bounds = getPromotionTextBounds(selectedItem, context);
    const handleSize = Math.max(14, Math.round(Number(selectedItem.fontSize || 44) * 0.32));
    context.save();
    context.strokeStyle = "#168c45";
    context.lineWidth = 3;
    context.setLineDash([8, 6]);
    context.strokeRect(bounds.x - 4, bounds.y - 4, bounds.width + 8, bounds.height + 8);
    context.setLineDash([]);
    context.fillStyle = "#168c45";
    context.fillRect(bounds.x + bounds.width - handleSize / 2, bounds.y + bounds.height - handleSize / 2, handleSize, handleSize);
    context.restore();
  }
  const selectedGraphic = promotionGraphicOverlays[promotionSelectedGraphicIndex];
  if (showSelection && selectedGraphic) {
    const handleSize = 16;
    context.save();
    context.strokeStyle = "#168c45";
    context.lineWidth = 3;
    context.setLineDash([8, 6]);
    context.strokeRect(selectedGraphic.x - 4, selectedGraphic.y - 4, selectedGraphic.width + 8, selectedGraphic.height + 8);
    context.setLineDash([]);
    context.fillStyle = "#168c45";
    context.fillRect(selectedGraphic.x + selectedGraphic.width - handleSize / 2, selectedGraphic.y + selectedGraphic.height - handleSize / 2, handleSize, handleSize);
    context.restore();
  }
  promotionCropCanvas.hidden = false;
  syncPromotionCanvasToPreview();
  if (promotionImagePreview) promotionImagePreview.hidden = true;
  if (downloadPromotionImageButton) downloadPromotionImageButton.disabled = false;
}

function addPromotionMessageText() {
  if (!capturePromotionTextBase()) return;
  const lines = String(promotionImageMessageInput?.value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (!lines.length) {
    showPromotionStatus("사진에 넣을 메시지를 먼저 입력해 주세요.");
    promotionImageMessageInput?.focus();
    return;
  }
  pushPromotionImageHistory();
  savePromotionImageSignature();
  const fontSize = Math.max(16, Number(promotionTextSizeInput?.value || 44));
  const lineHeight = fontSize * 1.55;
  const startX = Math.max(24, Math.round(promotionCropCanvas.width * 0.06));
  const startY = Math.max(fontSize, promotionCropCanvas.height - lineHeight * lines.length - Math.round(promotionCropCanvas.height * 0.05));
  lines.forEach((text, index) => {
    promotionTextOverlays.push({
      text,
      x: startX,
      y: startY + lineHeight * index,
      fontSize,
      color: getPromotionContrastColor(getPromotionCurrentColor()),
      boxColor: getPromotionCurrentColor(),
      boxOpacity: getPromotionCurrentOpacity(),
    });
  });
  promotionSelectedTextIndex = promotionTextOverlays.length - 1;
  renderPromotionTextOverlays();
  showPromotionStatus("글씨를 넣었습니다. 글씨를 클릭해 드래그하면 이동합니다.");
}

function updateSelectedPromotionTextStyle() {
  const item = promotionTextOverlays[promotionSelectedTextIndex];
  if (item) {
    item.fontSize = Math.max(16, Number(promotionTextSizeInput?.value || item.fontSize || 44));
    item.boxColor = getPromotionCurrentColor();
    item.color = getPromotionContrastColor(item.boxColor);
    item.boxOpacity = getPromotionCurrentOpacity();
  }
  const graphic = promotionGraphicOverlays[promotionSelectedGraphicIndex];
  if (graphic) {
    graphic.color = getPromotionCurrentColor();
    graphic.opacity = getPromotionCurrentOpacity();
  }
  if (item || graphic) renderPromotionTextOverlays();
}

function findPromotionTextAt(point) {
  if (!promotionCropCanvas) return -1;
  const context = promotionCropCanvas.getContext("2d");
  for (let index = promotionTextOverlays.length - 1; index >= 0; index -= 1) {
    const item = promotionTextOverlays[index];
    const bounds = getPromotionTextBounds(item, context);
    if (
      point.x >= bounds.x - 8 &&
      point.x <= bounds.x + bounds.width + 8 &&
      point.y >= bounds.y - 8 &&
      point.y <= bounds.y + bounds.height + 8
    ) {
      return index;
    }
  }
  return -1;
}

function handlePromotionImageSelected() {
  const file = promotionImageInput?.files?.[0];
  loadPromotionImageBlob(file);
}

function getPromotionCropRatio() {
  const value = promotionCropAspectInput?.value || "original";
  if (value === "original") return null;
  const [width, height] = value.split(":").map(Number);
  return width && height ? width / height : null;
}

function drawPromotionImageToCanvas({ stamp = false } = {}) {
  if (!promotionImagePreview?.src || !promotionCropCanvas) {
    showPromotionStatus("먼저 이미지를 올려주세요.");
    return false;
  }

  const image = promotionImagePreview;
  let source = image;
  let sourceWidth = image.naturalWidth;
  let sourceHeight = image.naturalHeight;
  const hasVisibleCanvas = !promotionCropCanvas.hidden && promotionCropCanvas.width && promotionCropCanvas.height;
  if (hasVisibleCanvas) {
    const snapshot = document.createElement("canvas");
    snapshot.width = promotionCropCanvas.width;
    snapshot.height = promotionCropCanvas.height;
    snapshot.getContext("2d").drawImage(promotionCropCanvas, 0, 0);
    source = snapshot;
    sourceWidth = snapshot.width;
    sourceHeight = snapshot.height;
    pushPromotionImageHistory();
  }
  if (!sourceWidth || !sourceHeight) {
    showPromotionStatus("이미지를 아직 불러오는 중입니다.");
    return false;
  }

  const ratio = getPromotionCropRatio();
  let sx = 0;
  let sy = 0;
  let sw = sourceWidth;
  let sh = sourceHeight;
  if (ratio) {
    const sourceRatio = sourceWidth / sourceHeight;
    if (sourceRatio > ratio) {
      sw = Math.round(sourceHeight * ratio);
      sx = Math.round((sourceWidth - sw) / 2);
    } else {
      sh = Math.round(sourceWidth / ratio);
      sy = Math.round((sourceHeight - sh) / 2);
    }
  }

  const maxWidth = 1200;
  const scale = Math.min(1, maxWidth / sw);
  const canvasWidth = Math.round(sw * scale);
  const canvasHeight = Math.round(sh * scale);
  promotionCropCanvas.width = canvasWidth;
  promotionCropCanvas.height = canvasHeight;

  const context = promotionCropCanvas.getContext("2d");
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.drawImage(source, sx, sy, sw, sh, 0, 0, canvasWidth, canvasHeight);

  if (stamp) {
    pushPromotionImageHistory();
    savePromotionImageSignature();
    const lines = String(promotionImageMessageInput?.value || "")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
    if (lines.length) {
      const padding = Math.max(18, Math.round(canvasWidth * 0.025));
      const fontSize = Math.max(24, Math.round(canvasWidth * 0.042));
      const lineHeight = Math.round(fontSize * 1.25);
      const boxWidth = Math.min(canvasWidth - padding * 2, Math.round(canvasWidth * 0.62));
      const boxHeight = padding + lines.length * lineHeight;
      const boxX = canvasWidth - boxWidth - padding;
      const boxY = canvasHeight - boxHeight - padding;

      const opacity = Math.max(0, Math.min(1, Number(promotionStampOpacityInput?.value || 58) / 100));
      const boxColor = hexToRgb(promotionBoxColorInput?.value || "#000000");
      context.fillStyle = `rgba(${boxColor.r}, ${boxColor.g}, ${boxColor.b}, ${opacity})`;
      context.fillRect(boxX, boxY, boxWidth, boxHeight);
      context.fillStyle = promotionTextColorInput?.value || "#ffd400";
      context.font = `700 ${fontSize}px sans-serif`;
      context.textBaseline = "middle";
      lines.forEach((line, index) => {
        context.fillText(line, boxX + padding, boxY + padding + lineHeight * index + lineHeight / 2, boxWidth - padding * 2);
      });
    }
  }

  promotionCropCanvas.hidden = false;
  syncPromotionCanvasToPreview();
  if (promotionImagePreview) promotionImagePreview.hidden = true;
  if (downloadPromotionImageButton) downloadPromotionImageButton.disabled = false;
  showPromotionStatus(stamp ? "이름/연락처를 이미지에 넣었습니다." : "이미지를 크롭했습니다.");
  return true;
}

function ensurePromotionCanvasFromVisibleImage() {
  if (!promotionCropCanvas) return false;
  if (!promotionCropCanvas.hidden && promotionCropCanvas.width && promotionCropCanvas.height) return true;
  return drawPromotionImageToCanvas({ stamp: false });
}

function flipPromotionImageHorizontal() {
  if (!ensurePromotionCanvasFromVisibleImage()) return;
  pushPromotionImageHistory();
  const width = promotionCropCanvas.width;
  const height = promotionCropCanvas.height;
  const temp = document.createElement("canvas");
  temp.width = width;
  temp.height = height;
  temp.getContext("2d").drawImage(promotionCropCanvas, 0, 0);

  const context = promotionCropCanvas.getContext("2d");
  context.clearRect(0, 0, width, height);
  context.save();
  context.translate(width, 0);
  context.scale(-1, 1);
  context.drawImage(temp, 0, 0);
  context.restore();
  promotionCropCanvas.hidden = false;
  syncPromotionCanvasToPreview();
  if (promotionImagePreview) promotionImagePreview.hidden = true;
  if (downloadPromotionImageButton) downloadPromotionImageButton.disabled = false;
  showPromotionStatus("사진을 좌우대칭으로 변경했습니다.");
}

function hexToRgb(hex) {
  const normalized = String(hex || "").replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(normalized)) return { r: 255, g: 212, b: 0 };
  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  };
}

function getPromotionCurrentColor() {
  return promotionToolColorInput?.value || "#39a95b";
}

function getPromotionCurrentOpacity() {
  return Math.max(0, Math.min(1, Number(promotionToolOpacityInput?.value || 70) / 100));
}

function getPromotionContrastColor(hex) {
  const color = hexToRgb(hex);
  return (color.r * 299 + color.g * 587 + color.b * 114) / 1000 > 150 ? "#111111" : "#ffffff";
}

function updatePromotionToolColorChips() {
  const color = promotionToolColorInput?.value || "#ffd400";
  promotionToolColorChips.forEach((chip) => {
    chip.style.background = color;
    chip.title = `공통 색상: ${color}`;
  });
}

function normalizeHexColor(color) {
  const value = String(color || "").trim().toLowerCase();
  return /^#[0-9a-f]{6}$/.test(value) ? value : "#ffd400";
}

function getStoredPromotionColorPalette() {
  const palette = readJsonStorage(getScopedStorageKey(promotionColorPaletteStorageKey), []);
  const base = ["#ffd400"];
  const stored = Array.isArray(palette) ? palette : [];
  return [...new Set([...base, ...stored].map(normalizeHexColor))].slice(0, 24);
}

function setStoredPromotionColorPalette(palette) {
  localStorage.setItem(getScopedStorageKey(promotionColorPaletteStorageKey), JSON.stringify(Array.isArray(palette) ? palette : []));
}

function setPromotionToolColor(color, { applyReplacement = true, armPicker = false } = {}) {
  const hex = normalizeHexColor(color);
  if (promotionToolColorInput) promotionToolColorInput.value = hex;
  updatePromotionToolColorChips();
  renderPromotionColorPalette();
  if (applyReplacement) applyPromotionColorReplacementFromBase();
  if (armPicker) armPromotionAutoColorPick();
}

function renderPromotionColorPalette() {
  if (!promotionColorPalette) return;
  const current = normalizeHexColor(promotionToolColorInput?.value || "#ffd400");
  promotionColorPalette.innerHTML = "";
  getStoredPromotionColorPalette().forEach((color) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "promotion-color-palette-chip";
    if (color === current) button.classList.add("selected");
    button.dataset.promotionPaletteColor = color;
    button.style.background = color;
    button.title = `색상 선택 ${color}`;
    button.setAttribute("aria-label", `색상 선택 ${color}`);
    promotionColorPalette.append(button);
  });
}

function addPromotionToolColor() {
  const color = normalizeHexColor(promotionToolColorInput?.value || "#ffd400");
  const palette = getStoredPromotionColorPalette().filter((item) => item !== color);
  setStoredPromotionColorPalette([color, ...palette].slice(0, 24));
  renderPromotionColorPalette();
  showPromotionStatus("색상표에 색상을 추가했습니다.");
}

function armPromotionAutoColorPick() {
  if (!promotionCropCanvas || promotionCropCanvas.hidden) {
    ensurePromotionCanvasFromVisibleImage();
  }
  if (!promotionCropCanvas || promotionCropCanvas.hidden) return;
  promotionColorPickMode = true;
  promotionCropCanvas.classList.add("promotion-eyedropper-mode");
  showPromotionStatus("이미지 위를 클릭하면 그 위치의 색을 추출합니다.");
}

function setPromotionPickedColor(color) {
  promotionPickedColor = color;
}

function replacePromotionColorFromPoint(event) {
  if (!promotionColorPickMode || !promotionCropCanvas || promotionCropCanvas.hidden) return;
  const rect = promotionCropCanvas.getBoundingClientRect();
  const x = Math.floor((event.clientX - rect.left) * (promotionCropCanvas.width / rect.width));
  const y = Math.floor((event.clientY - rect.top) * (promotionCropCanvas.height / rect.height));
  const context = promotionCropCanvas.getContext("2d");
  const pickedData = context.getImageData(x, y, 1, 1).data;
  const target = { r: pickedData[0], g: pickedData[1], b: pickedData[2] };
  setPromotionPickedColor(target);
  pushPromotionImageHistory();
  promotionLiveColorBase = context.getImageData(0, 0, promotionCropCanvas.width, promotionCropCanvas.height);
  applyPromotionColorReplacementFromBase();
  finishPromotionColorPick();
}

function applyPromotionColorReplacementFromBase() {
  if (!promotionLiveColorBase || !promotionPickedColor || !promotionCropCanvas) return;
  const context = promotionCropCanvas.getContext("2d");

  const replacement = hexToRgb(promotionToolColorInput?.value || "#ffd400");
  const tolerance = Number(promotionColorToleranceInput?.value || 55);
  const imageData = new ImageData(
    new Uint8ClampedArray(promotionLiveColorBase.data),
    promotionLiveColorBase.width,
    promotionLiveColorBase.height,
  );
  const data = imageData.data;
  const target = promotionPickedColor;
  for (let index = 0; index < data.length; index += 4) {
    const distance = Math.hypot(data[index] - target.r, data[index + 1] - target.g, data[index + 2] - target.b);
    if (distance <= tolerance) {
      const strength = Math.max(0.2, 1 - distance / Math.max(tolerance, 1));
      data[index] = Math.round(data[index] * (1 - strength) + replacement.r * strength);
      data[index + 1] = Math.round(data[index + 1] * (1 - strength) + replacement.g * strength);
      data[index + 2] = Math.round(data[index + 2] * (1 - strength) + replacement.b * strength);
    }
  }
  context.putImageData(imageData, 0, 0);
  syncPromotionCanvasToPreview();
  if (downloadPromotionImageButton) downloadPromotionImageButton.disabled = false;
  showPromotionStatus("선택한 사진 색상을 지정한 색으로 변경했습니다.");
}

function handlePromotionColorToleranceChange() {
  if (!promotionLiveColorBase || !promotionPickedColor) {
    armPromotionAutoColorPick();
    showPromotionStatus("바꾸고 싶은 사진 속 색상을 클릭하세요.");
    return;
  }
  applyPromotionColorReplacementFromBase();
}

function finishPromotionColorPick() {
  promotionColorPickMode = false;
  promotionCropCanvas?.classList.remove("promotion-eyedropper-mode");
}

function flattenPromotionTextOverlays() {
  if (!promotionTextOverlays.length) return;
  promotionTextOverlays = [];
  promotionTextBaseCanvas = null;
  promotionTextBaseDataUrl = "";
  promotionSelectedTextIndex = -1;
}

function stopPromotionImageEditMode() {
  promotionImageEditMode = "";
  promotionDragStart = null;
  brushPromotionImageButton?.classList.remove("selected");
  promotionCropCanvas?.classList.remove("promotion-brush-mode");
  if (promotionBrushSizeControl) promotionBrushSizeControl.hidden = true;
  showPromotionStatus("글씨·도형·액자를 클릭한 뒤 드래그하면 이동할 수 있습니다.");
}

function deleteSelectedPromotionObject() {
  if (promotionSelectedTextIndex >= 0 && promotionTextOverlays[promotionSelectedTextIndex]) {
    promotionTextOverlays.splice(promotionSelectedTextIndex, 1);
    promotionSelectedTextIndex = -1;
    renderPromotionTextOverlays();
    showPromotionStatus("선택한 글씨를 삭제했습니다.");
    return;
  }
  if (promotionSelectedGraphicIndex >= 0 && promotionGraphicOverlays[promotionSelectedGraphicIndex]) {
    promotionGraphicOverlays.splice(promotionSelectedGraphicIndex, 1);
    promotionSelectedGraphicIndex = -1;
    renderPromotionTextOverlays();
    showPromotionStatus("선택한 도형 또는 액자를 삭제했습니다.");
    return;
  }
  undoPromotionImageEdit();
}

function startPromotionBrushMode() {
  if (!ensurePromotionCanvasFromVisibleImage()) return;
  if (promotionImageEditMode === "brush") {
    stopPromotionImageEditMode();
    return;
  }
  promotionImageEditMode = "brush";
  brushPromotionImageButton?.classList.add("selected");
  promotionCropCanvas.classList.add("promotion-brush-mode");
  if (promotionBrushSizeControl) promotionBrushSizeControl.hidden = false;
  promotionCropCanvas.hidden = false;
  if (promotionImagePreview) promotionImagePreview.hidden = true;
  showPromotionStatus("사진 위를 마우스로 드래그해 붓으로 칠하세요. 붓 버튼을 다시 누르면 종료됩니다.");
}

function handlePromotionFrameImageSelected() {
  const file = promotionFrameImageInput?.files?.[0];
  if (!file) {
    promotionFrameImage = null;
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image();
    image.onload = () => {
      promotionFrameImage = image;
      showPromotionStatus("액자 안에 넣을 이미지를 준비했습니다. 액자 +를 누르고 원하는 크기로 드래그하세요.");
    };
    image.src = String(reader.result || "");
  };
  reader.readAsDataURL(file);
}

function startPromotionMosaicMode() {
  if (!ensurePromotionCanvasFromVisibleImage()) return;
  brushPromotionImageButton?.classList.remove("selected");
  promotionCropCanvas?.classList.remove("promotion-brush-mode");
  if (promotionBrushSizeControl) promotionBrushSizeControl.hidden = true;
  promotionImageEditMode = "mosaic";
  promotionCropCanvas.hidden = false;
  if (promotionImagePreview) promotionImagePreview.hidden = true;
  showPromotionStatus("모자이크할 부분을 사진에서 드래그하세요.");
}

function startPromotionShapeMode(mode = "frame") {
  if (!ensurePromotionCanvasFromVisibleImage()) return;
  brushPromotionImageButton?.classList.remove("selected");
  promotionCropCanvas?.classList.remove("promotion-brush-mode");
  if (promotionBrushSizeControl) promotionBrushSizeControl.hidden = true;
  promotionImageEditMode = mode === "fill" ? "shape-fill" : "shape-frame";
  promotionCropCanvas.hidden = false;
  if (promotionImagePreview) promotionImagePreview.hidden = true;
  showPromotionStatus(mode === "fill" ? "도형을 추가할 영역을 사진에서 드래그하세요." : "액자를 추가할 영역을 사진에서 드래그하세요.");
}

function drawPromotionImageCover(context, image, x, y, width, height) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const sourceWidth = width / scale;
  const sourceHeight = height / scale;
  const sourceX = (image.naturalWidth - sourceWidth) / 2;
  const sourceY = (image.naturalHeight - sourceHeight) / 2;
  context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
}

function applyPromotionMosaicRegion(start, end, editCanvas = promotionCropCanvas) {
  const x = Math.min(start.x, end.x);
  const y = Math.min(start.y, end.y);
  const width = Math.abs(end.x - start.x);
  const height = Math.abs(end.y - start.y);
  if (width < 6 || height < 6) return false;
  const context = editCanvas.getContext("2d");
  const blockSize = Math.max(8, Math.round(Math.min(width, height) / 12));
  for (let blockY = y; blockY < y + height; blockY += blockSize) {
    for (let blockX = x; blockX < x + width; blockX += blockSize) {
      const sampleX = Math.min(blockX + Math.floor(blockSize / 2), editCanvas.width - 1);
      const sampleY = Math.min(blockY + Math.floor(blockSize / 2), editCanvas.height - 1);
      const pixel = context.getImageData(sampleX, sampleY, 1, 1).data;
      context.fillStyle = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
      context.fillRect(blockX, blockY, blockSize, blockSize);
    }
  }
  return true;
}

function applyPromotionShapeRegion(start, end, { filled = false, frameImage = null, editCanvas = promotionCropCanvas } = {}) {
  const x = Math.min(start.x, end.x);
  const y = Math.min(start.y, end.y);
  const width = Math.abs(end.x - start.x);
  const height = Math.abs(end.y - start.y);
  if (width < 8 || height < 8) return false;
  const context = editCanvas.getContext("2d");
  const shape = promotionShapeInput?.value || "rect";
  if (!filled && frameImage?.naturalWidth && frameImage?.naturalHeight) {
    context.save();
    context.beginPath();
    if (shape === "circle") context.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
    else context.rect(x, y, width, height);
    context.clip();
    drawPromotionImageCover(context, frameImage, x, y, width, height);
    context.restore();
  }
  context.save();
  const shapeColor = hexToRgb(getPromotionCurrentColor());
  const shapeOpacity = getPromotionCurrentOpacity();
  context.fillStyle = `rgba(${shapeColor.r}, ${shapeColor.g}, ${shapeColor.b}, ${shapeOpacity})`;
  context.strokeStyle = `rgba(${shapeColor.r}, ${shapeColor.g}, ${shapeColor.b}, ${shapeOpacity})`;
  context.lineWidth = Math.max(4, Math.round(Math.min(editCanvas.width, editCanvas.height) * 0.008));
  context.shadowColor = "rgba(0, 0, 0, 0.18)";
  context.shadowBlur = 3;
  if (shape === "circle") {
    context.beginPath();
    context.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
    if (filled) context.fill();
    else context.stroke();
  } else {
    if (filled) context.fillRect(x, y, width, height);
    else context.strokeRect(x, y, width, height);
  }
  context.restore();
  return true;
}

function handlePromotionCanvasPointerDown(event) {
  if (!promotionCropCanvas || promotionCropCanvas.hidden) return;
  const point = getPromotionCanvasPoint(event);
  if (promotionImageEditMode === "brush") {
    pushPromotionImageHistory();
    promotionDragStart = point;
    event.preventDefault();
    return;
  }
  if (!promotionImageEditMode && !promotionColorPickMode) {
    const textIndex = findPromotionTextAt(point);
    if (textIndex >= 0) {
      pushPromotionImageHistory();
      promotionSelectedTextIndex = textIndex;
      const selectedItem = promotionTextOverlays[textIndex];
      const bounds = getPromotionTextBounds(selectedItem);
      const handleHitSize = Math.max(24, Math.round(Number(selectedItem.fontSize || 44) * 0.55));
      if (
        point.x >= bounds.x + bounds.width - handleHitSize &&
        point.y >= bounds.y + bounds.height - handleHitSize
      ) {
        promotionResizingTextIndex = textIndex;
        promotionTextResizeStart = { x: point.x, y: point.y, fontSize: Number(selectedItem.fontSize || 44) };
        renderPromotionTextOverlays();
        showPromotionStatus("초록색 조절점을 드래그해 글씨 크기를 바꾸세요.");
        event.preventDefault();
        return;
      }
      promotionDraggingTextIndex = textIndex;
      promotionTextDragOffset = {
        x: point.x - promotionTextOverlays[textIndex].x,
        y: point.y - promotionTextOverlays[textIndex].y,
      };
      event.preventDefault();
      return;
    }
    const graphicIndex = findPromotionGraphicAt(point);
    if (graphicIndex >= 0) {
      pushPromotionImageHistory();
      promotionSelectedTextIndex = -1;
      promotionSelectedGraphicIndex = graphicIndex;
      const item = promotionGraphicOverlays[graphicIndex];
      const handleHitSize = 28;
      if (point.x >= item.x + item.width - handleHitSize && point.y >= item.y + item.height - handleHitSize) {
        promotionResizingGraphicIndex = graphicIndex;
        promotionGraphicResizeStart = { x: point.x, y: point.y, width: item.width, height: item.height };
        renderPromotionTextOverlays();
        showPromotionStatus("초록색 조절점을 드래그해 크기를 바꾸세요.");
        event.preventDefault();
        return;
      }
      promotionDraggingGraphicIndex = graphicIndex;
      promotionGraphicDragOffset = { x: point.x - item.x, y: point.y - item.y };
      renderPromotionTextOverlays();
      showPromotionStatus("선택한 도형이나 액자를 드래그해 이동하세요.");
      event.preventDefault();
      return;
    }
    promotionSelectedTextIndex = -1;
    promotionSelectedGraphicIndex = -1;
    if (promotionTextBaseCanvas) renderPromotionTextOverlays();
  }
  if (!promotionImageEditMode || promotionColorPickMode) return;
  promotionDragStart = point;
  event.preventDefault();
}

function handlePromotionCanvasPointerUp(event) {
  if (promotionImageEditMode === "brush" && promotionDragStart) {
    promotionDragStart = null;
    if (promotionTextOverlays.length || promotionGraphicOverlays.length) renderPromotionTextOverlays();
    else syncPromotionCanvasToPreview();
    if (downloadPromotionImageButton) downloadPromotionImageButton.disabled = false;
    showPromotionStatus("붓으로 색을 칠했습니다. 계속 드래그하거나 붓 버튼을 다시 눌러 종료하세요.");
    return;
  }
  if (promotionDraggingTextIndex >= 0) {
    promotionDraggingTextIndex = -1;
    promotionTextDragOffset = null;
    syncPromotionCanvasToPreview();
    showPromotionStatus("글씨 위치를 이동했습니다.");
    return;
  }
  if (promotionResizingTextIndex >= 0) {
    promotionResizingTextIndex = -1;
    promotionTextResizeStart = null;
    syncPromotionCanvasToPreview();
    showPromotionStatus("글씨 크기를 변경했습니다.");
    return;
  }
  if (promotionDraggingGraphicIndex >= 0) {
    promotionDraggingGraphicIndex = -1;
    promotionGraphicDragOffset = null;
    syncPromotionCanvasToPreview();
    showPromotionStatus("도형 또는 액자 위치를 이동했습니다.");
    return;
  }
  if (promotionResizingGraphicIndex >= 0) {
    promotionResizingGraphicIndex = -1;
    promotionGraphicResizeStart = null;
    syncPromotionCanvasToPreview();
    showPromotionStatus("도형 또는 액자 크기를 변경했습니다.");
    return;
  }
  if (!promotionImageEditMode || !promotionDragStart || !promotionCropCanvas || promotionCropCanvas.hidden) return;
  const end = getPromotionCanvasPoint(event);
  if (promotionImageEditMode === "shape-fill" || promotionImageEditMode === "shape-frame") {
    const x = Math.min(promotionDragStart.x, end.x);
    const y = Math.min(promotionDragStart.y, end.y);
    const width = Math.abs(end.x - promotionDragStart.x);
    const height = Math.abs(end.y - promotionDragStart.y);
    if (width < 8 || height < 8) {
      showPromotionStatus("조금 더 크게 드래그해주세요.");
    } else {
      capturePromotionTextBase();
      pushPromotionImageHistory();
      promotionGraphicOverlays.push({
        type: promotionImageEditMode === "shape-fill" ? "fill" : "frame",
        shape: promotionShapeInput?.value || "rect",
        x,
        y,
        width,
        height,
        color: getPromotionCurrentColor(),
        opacity: getPromotionCurrentOpacity(),
        image: promotionImageEditMode === "shape-frame" ? promotionFrameImage : null,
      });
      promotionSelectedGraphicIndex = promotionGraphicOverlays.length - 1;
      promotionSelectedTextIndex = -1;
      renderPromotionTextOverlays();
      showPromotionStatus(promotionImageEditMode === "shape-fill" ? "도형을 추가했습니다. 선택해서 이동하거나 크기를 바꿀 수 있습니다." : "액자를 추가했습니다. 선택해서 이동하거나 크기를 바꿀 수 있습니다.");
    }
    promotionImageEditMode = "";
    promotionDragStart = null;
    return;
  }
  pushPromotionImageHistory();
  const editCanvas = promotionTextBaseCanvas && (promotionTextOverlays.length || promotionGraphicOverlays.length) ? promotionTextBaseCanvas : promotionCropCanvas;
  const applied = promotionImageEditMode === "mosaic"
    ? applyPromotionMosaicRegion(promotionDragStart, end, editCanvas)
    : false;
  if (!applied) {
    promotionImageHistory.pop();
    showPromotionStatus("조금 더 크게 드래그해주세요.");
  } else {
    if (promotionTextOverlays.length || promotionGraphicOverlays.length) renderPromotionTextOverlays();
    else syncPromotionCanvasToPreview();
    if (downloadPromotionImageButton) downloadPromotionImageButton.disabled = false;
    showPromotionStatus(
      promotionImageEditMode === "mosaic"
        ? "선택한 영역에 모자이크를 넣었습니다."
        : promotionImageEditMode === "shape-fill"
          ? "선택한 영역에 도형을 추가했습니다."
          : "선택한 영역에 액자를 추가했습니다.",
    );
  }
  promotionImageEditMode = "";
  promotionDragStart = null;
}

function handlePromotionCanvasPointerMove(event) {
  if (promotionImageEditMode === "brush" && promotionDragStart && promotionCropCanvas && !promotionCropCanvas.hidden) {
    const point = getPromotionCanvasPoint(event);
    const editCanvas = promotionTextBaseCanvas && (promotionTextOverlays.length || promotionGraphicOverlays.length) ? promotionTextBaseCanvas : promotionCropCanvas;
    const context = editCanvas.getContext("2d");
    context.save();
    context.strokeStyle = getPromotionCurrentColor();
    context.globalAlpha = getPromotionCurrentOpacity();
    context.lineWidth = Math.max(2, Number(promotionBrushSizeInput?.value || 16));
    context.lineCap = "round";
    context.lineJoin = "round";
    context.beginPath();
    context.moveTo(promotionDragStart.x, promotionDragStart.y);
    context.lineTo(point.x, point.y);
    context.stroke();
    context.restore();
    promotionDragStart = point;
    if (promotionTextOverlays.length || promotionGraphicOverlays.length) renderPromotionTextOverlays();
    return;
  }
  if (promotionResizingTextIndex >= 0 && promotionTextResizeStart && promotionCropCanvas && !promotionCropCanvas.hidden) {
    const point = getPromotionCanvasPoint(event);
    const delta = ((point.x - promotionTextResizeStart.x) + (point.y - promotionTextResizeStart.y)) / 2;
    promotionTextOverlays[promotionResizingTextIndex].fontSize = Math.max(16, Math.min(180, promotionTextResizeStart.fontSize + delta * 0.6));
    renderPromotionTextOverlays();
    return;
  }
  if (promotionDraggingGraphicIndex >= 0 && promotionGraphicDragOffset && promotionCropCanvas && !promotionCropCanvas.hidden) {
    const point = getPromotionCanvasPoint(event);
    const item = promotionGraphicOverlays[promotionDraggingGraphicIndex];
    item.x = point.x - promotionGraphicDragOffset.x;
    item.y = point.y - promotionGraphicDragOffset.y;
    renderPromotionTextOverlays();
    return;
  }
  if (promotionResizingGraphicIndex >= 0 && promotionGraphicResizeStart && promotionCropCanvas && !promotionCropCanvas.hidden) {
    const point = getPromotionCanvasPoint(event);
    const item = promotionGraphicOverlays[promotionResizingGraphicIndex];
    item.width = Math.max(12, promotionGraphicResizeStart.width + (point.x - promotionGraphicResizeStart.x));
    item.height = Math.max(12, promotionGraphicResizeStart.height + (point.y - promotionGraphicResizeStart.y));
    renderPromotionTextOverlays();
    return;
  }
  if (promotionDraggingTextIndex < 0 || !promotionTextDragOffset || !promotionCropCanvas || promotionCropCanvas.hidden) return;
  const point = getPromotionCanvasPoint(event);
  promotionTextOverlays[promotionDraggingTextIndex].x = point.x - promotionTextDragOffset.x;
  promotionTextOverlays[promotionDraggingTextIndex].y = point.y - promotionTextDragOffset.y;
  renderPromotionTextOverlays();
}

function downloadPromotionImage() {
  if ((!promotionCropCanvas || promotionCropCanvas.hidden) && !ensurePromotionCanvasFromVisibleImage()) {
    showPromotionStatus("먼저 이미지를 크롭하거나 이름/연락처를 넣어주세요.");
    return;
  }
  const link = document.createElement("a");
  link.href = promotionCropCanvas.toDataURL("image/png");
  link.download = `promotion-image-${Date.now()}.png`;
  document.body.append(link);
  link.click();
  link.remove();
}

function getStoredPromotionImages() {
  const images = readJsonStorage(getScopedStorageKey(promotionSavedImagesStorageKey), []);
  return Array.isArray(images) ? images : [];
}

function setStoredPromotionImages(images) {
  localStorage.setItem(getScopedStorageKey(promotionSavedImagesStorageKey), JSON.stringify(Array.isArray(images) ? images : []));
}

function openPromotionImageDatabase() {
  if (promotionImageDbPromise) return promotionImageDbPromise;
  promotionImageDbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open("insurancePromotionImages", 1);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains("images")) database.createObjectStore("images", { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return promotionImageDbPromise;
}

async function putPromotionImageData(image) {
  const database = await openPromotionImageDatabase();
  return new Promise((resolve, reject) => {
    const request = database.transaction("images", "readwrite").objectStore("images").put(image);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}

async function getPromotionImageData(id) {
  try {
    const database = await openPromotionImageDatabase();
    const stored = await new Promise((resolve, reject) => {
      const request = database.transaction("images", "readonly").objectStore("images").get(id);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
    if (stored?.dataUrl) return stored.dataUrl;
  } catch {
    // Older browsers fall back to the legacy localStorage record below.
  }
  return getStoredPromotionImages().find((item) => item.id === id)?.dataUrl || "";
}

async function deletePromotionImageData(id) {
  try {
    const database = await openPromotionImageDatabase();
    await new Promise((resolve, reject) => {
      const request = database.transaction("images", "readwrite").objectStore("images").delete(id);
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  } catch {
    // Metadata deletion still proceeds when IndexedDB is unavailable.
  }
}

function createPromotionThumbnailDataUrl(dataUrl) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const scale = Math.min(1, 150 / Math.max(image.naturalWidth, image.naturalHeight));
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.62));
    };
    image.onerror = () => resolve(dataUrl);
    image.src = dataUrl;
  });
}

async function savePromotionImageDataUrl(dataUrl, title, { render = true } = {}) {
  const now = new Date().toISOString();
  const id = `promotion-image-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const thumbnailDataUrl = await createPromotionThumbnailDataUrl(dataUrl);
  let legacyDataUrl = "";
  try {
    await putPromotionImageData({ id, dataUrl, createdAt: now });
  } catch {
    legacyDataUrl = dataUrl;
  }
  const metadata = { id, title, thumbnailDataUrl, dataUrl: legacyDataUrl, createdAt: now };
  const existing = getStoredPromotionImages().map((item) => ({
    id: item.id,
    title: item.title,
    thumbnailDataUrl: item.thumbnailDataUrl || item.dataUrl || "",
    dataUrl: item.thumbnailDataUrl ? "" : item.dataUrl || "",
    createdAt: item.createdAt,
  }));
  setStoredPromotionImages([metadata, ...existing].slice(0, 300));
  if (render) renderPromotionSavedImageList();
  return metadata;
}

function renderPromotionSavedImageList() {
  if (!promotionSavedImageList) return;
  const images = getStoredPromotionImages();
  promotionSavedImageList.innerHTML = "";
  if (!images.length) {
    const empty = document.createElement("p");
    empty.className = "promotion-saved-empty";
    empty.textContent = "저장된 편집 이미지가 없습니다.";
    promotionSavedImageList.append(empty);
    return;
  }
  images.slice(0, 300).forEach((image) => {
    const row = document.createElement("div");
    row.className = "promotion-saved-image-card";
    const load = document.createElement("button");
    load.type = "button";
    load.className = "promotion-saved-image-thumb";
    load.dataset.promotionImageLoadId = image.id;
    load.title = image.title || "저장된 이미지 불러오기";
    const thumbnail = document.createElement("img");
    thumbnail.src = image.thumbnailDataUrl || image.dataUrl;
    thumbnail.alt = image.title || "저장된 홍보 이미지";
    load.append(thumbnail);
    const download = document.createElement("button");
    download.type = "button";
    download.className = "promotion-saved-image-action";
    download.dataset.promotionImageDownloadId = image.id;
    download.textContent = "↓";
    download.title = "내 컴퓨터에 저장";
    const del = document.createElement("button");
    del.type = "button";
    del.className = "promotion-saved-image-action promotion-saved-delete";
    del.dataset.promotionImageDeleteId = image.id;
    del.textContent = "×";
    row.append(load, download, del);
    promotionSavedImageList.append(row);
  });
}

async function saveEditedPromotionImage() {
  if (!ensurePromotionCanvasFromVisibleImage()) {
    showPromotionStatus("저장할 이미지를 먼저 올려주세요.");
    return;
  }
  if (promotionTextOverlays.length || promotionGraphicOverlays.length) renderPromotionTextOverlays({ showSelection: false });
  const dataUrl = promotionCropCanvas.toDataURL("image/png");
  const title = `${promotionTopicInput?.value.trim() || "이미지"} / ${new Date().toLocaleString("ko-KR")}`;
  await savePromotionImageDataUrl(dataUrl, title);
  if (promotionTextOverlays.length || promotionGraphicOverlays.length) renderPromotionTextOverlays();
  showPromotionStatus("이미지를 저장했습니다. 아래 작은 사진을 눌러 다시 사용할 수 있습니다.");
}

async function loadSavedPromotionImage(id) {
  const image = getStoredPromotionImages().find((item) => item.id === id);
  const dataUrl = await getPromotionImageData(id);
  if (!image || !dataUrl) return;
  const img = new Image();
  img.onload = () => {
    promotionTextOverlays = [];
    promotionTextBaseCanvas = null;
    promotionTextBaseDataUrl = "";
    promotionSelectedTextIndex = -1;
    promotionGraphicOverlays = [];
    promotionSelectedGraphicIndex = -1;
    promotionCropCanvas.width = img.naturalWidth;
    promotionCropCanvas.height = img.naturalHeight;
    promotionCropCanvas.getContext("2d").drawImage(img, 0, 0);
    promotionCropCanvas.hidden = false;
    syncPromotionCanvasToPreview();
    if (promotionImagePreview) promotionImagePreview.hidden = true;
    if (downloadPromotionImageButton) downloadPromotionImageButton.disabled = false;
    promotionOriginalImageDataUrl = dataUrl;
    showPromotionStatus("저장된 편집 이미지를 불러왔습니다.");
  };
  img.src = dataUrl;
}

async function downloadSavedPromotionImage(id) {
  const image = getStoredPromotionImages().find((item) => item.id === id);
  const dataUrl = await getPromotionImageData(id);
  if (!image || !dataUrl) return;
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `${image.title || "promotion-image"}.png`;
  document.body.append(link);
  link.click();
  link.remove();
}

async function deleteSavedPromotionImage(id) {
  await deletePromotionImageData(id);
  setStoredPromotionImages(getStoredPromotionImages().filter((item) => item.id !== id));
  renderPromotionSavedImageList();
  showPromotionStatus("저장된 편집 이미지를 삭제했습니다.");
}

function findPromotionWhiteSeparators(source, sourceWidth, sourceHeight) {
  const scanCanvas = document.createElement("canvas");
  const scale = Math.min(1, 1200 / Math.max(sourceWidth, sourceHeight));
  scanCanvas.width = Math.max(1, Math.round(sourceWidth * scale));
  scanCanvas.height = Math.max(1, Math.round(sourceHeight * scale));
  const context = scanCanvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(source, 0, 0, scanCanvas.width, scanCanvas.height);
  const pixels = context.getImageData(0, 0, scanCanvas.width, scanCanvas.height).data;
  const scanDirection = (direction) => {
    const length = direction === "vertical" ? scanCanvas.width : scanCanvas.height;
    const crossLength = direction === "vertical" ? scanCanvas.height : scanCanvas.width;
    const candidates = [];
    let runStart = -1;
    for (let position = 1; position < length - 1; position += 1) {
      let whiteCount = 0;
      let sampleCount = 0;
      for (let cross = 0; cross < crossLength; cross += 3) {
        const x = direction === "vertical" ? position : cross;
        const y = direction === "vertical" ? cross : position;
        const offset = (y * scanCanvas.width + x) * 4;
        const r = pixels[offset];
        const g = pixels[offset + 1];
        const b = pixels[offset + 2];
        if (r >= 242 && g >= 242 && b >= 242 && Math.max(r, g, b) - Math.min(r, g, b) <= 14) whiteCount += 1;
        sampleCount += 1;
      }
      const isSeparator = sampleCount > 0 && whiteCount / sampleCount >= 0.88;
      if (isSeparator && runStart < 0) runStart = position;
      if ((!isSeparator || position === length - 2) && runStart >= 0) {
        const runEnd = isSeparator ? position + 1 : position;
        if (runEnd - runStart >= 2) candidates.push({ start: runStart, end: runEnd, center: (runStart + runEnd) / 2 });
        runStart = -1;
      }
    }
    const findNear = (target, excluded = null) => candidates
      .filter((candidate) => candidate !== excluded && Math.abs(candidate.center - target) <= length * 0.22)
      .sort((a, b) => Math.abs(a.center - target) - Math.abs(b.center - target))[0] || null;
    const first = findNear(length / 3);
    const second = findNear((length * 2) / 3, first);
    if (!first || !second || first.center >= second.center) return null;
    return {
      direction,
      separators: [first, second],
      fit: (Math.abs(first.center - length / 3) + Math.abs(second.center - length * 2 / 3)) / length,
    };
  };
  const matches = [scanDirection("vertical"), scanDirection("horizontal")].filter(Boolean).sort((a, b) => a.fit - b.fit);
  if (!matches.length) return null;
  const match = matches[0];
  const restoreScale = 1 / scale;
  const sourceLength = match.direction === "vertical" ? sourceWidth : sourceHeight;
  return {
    direction: match.direction,
    separators: match.separators.map((separator) => ({
      start: Math.max(0, Math.round(separator.start * restoreScale)),
      end: Math.min(sourceLength, Math.round(separator.end * restoreScale)),
    })),
  };
}

async function splitPromotionImageIntoThree() {
  let source = null;
  let sourceWidth = 0;
  let sourceHeight = 0;
  if (promotionCropCanvas && !promotionCropCanvas.hidden && promotionCropCanvas.width && promotionCropCanvas.height) {
    source = promotionCropCanvas;
    sourceWidth = promotionCropCanvas.width;
    sourceHeight = promotionCropCanvas.height;
  } else if (promotionImagePreview?.src && promotionImagePreview.naturalWidth && promotionImagePreview.naturalHeight) {
    source = promotionImagePreview;
    sourceWidth = promotionImagePreview.naturalWidth;
    sourceHeight = promotionImagePreview.naturalHeight;
  }
  if (!source || !sourceWidth || !sourceHeight) {
    showPromotionStatus("세 장으로 나눌 이미지를 먼저 업로드해 주세요.");
    return;
  }

  showPromotionStatus("이미지를 3장으로 나누고 크기를 맞추는 중입니다...");
  const separatorMatch = findPromotionWhiteSeparators(source, sourceWidth, sourceHeight);
  const direction = separatorMatch?.direction || (sourceWidth >= sourceHeight ? "vertical" : "horizontal");
  const sourceLength = direction === "vertical" ? sourceWidth : sourceHeight;
  const thirdLength = sourceLength / 3;
  const separators = separatorMatch?.separators;
  const parts = separators
    ? [
        { start: 0, end: separators[0].start },
        { start: separators[0].end, end: separators[1].start },
        { start: separators[1].end, end: sourceLength },
      ]
    : [
        { start: 0, end: thirdLength },
        { start: thirdLength, end: thirdLength * 2 },
        { start: thirdLength * 2, end: sourceLength },
      ];
  const target = promotionSplitSizeInput?.value || "blog";
  const baseTitle = promotionTopicInput?.value.trim() || "분할 이미지";
  for (let part = 0; part < 3; part += 1) {
    const output = document.createElement("canvas");
    let sx = direction === "vertical" ? parts[part].start : 0;
    let sy = direction === "horizontal" ? parts[part].start : 0;
    let sw = direction === "vertical" ? Math.max(1, parts[part].end - parts[part].start) : sourceWidth;
    let sh = direction === "horizontal" ? Math.max(1, parts[part].end - parts[part].start) : sourceHeight;
    if (target !== "blog") {
      output.width = 1080;
      output.height = target === "instagram" ? 1350 : 1920;
      const targetRatio = output.width / output.height;
      const sourceRatio = sw / sh;
      if (sourceRatio > targetRatio) {
        const nextWidth = sh * targetRatio;
        sx += (sw - nextWidth) / 2;
        sw = nextWidth;
      } else {
        const nextHeight = sw / targetRatio;
        sy = (sh - nextHeight) / 2;
        sh = nextHeight;
      }
    } else {
      output.width = 1200;
      output.height = Math.max(1, Math.round(1200 * (sh / sw)));
    }
    output.getContext("2d").drawImage(source, sx, sy, sw, sh, 0, 0, output.width, output.height);
    const dataUrl = output.toDataURL("image/jpeg", 0.9);
    await savePromotionImageDataUrl(dataUrl, `${baseTitle} ${part + 1}`, { render: false });
  }
  renderPromotionSavedImageList();
  const targetLabel = target === "instagram" ? "인스타그램" : target === "shorts" ? "쇼츠" : target === "reels" ? "릴스" : "블로그";
  const directionLabel = direction === "vertical" ? "세로선" : "가로선";
  const fallbackLabel = direction === "vertical" ? "너비" : "높이";
  showPromotionStatus(separators ? `흰색 ${directionLabel}을 찾아 3장으로 쪼개 저장했습니다.` : `${targetLabel} 크기로 3등분해 저장했습니다. 흰 선을 찾지 못해 동일한 ${fallbackLabel}로 나눴습니다.`);
}

function resizePromotionImageForChannel() {
  if (!ensurePromotionCanvasFromVisibleImage()) {
    showPromotionStatus("사이즈를 변경할 이미지를 먼저 선택해 주세요.");
    return;
  }
  if (promotionTextOverlays.length || promotionGraphicOverlays.length) renderPromotionTextOverlays({ showSelection: false });
  pushPromotionImageHistory();
  const source = document.createElement("canvas");
  source.width = promotionCropCanvas.width;
  source.height = promotionCropCanvas.height;
  source.getContext("2d").drawImage(promotionCropCanvas, 0, 0);
  const target = promotionSplitSizeInput?.value || "blog";
  let targetWidth = 1200;
  let targetHeight = Math.max(1, Math.round(1200 * (source.height / source.width)));
  if (target === "instagram") targetHeight = 1350;
  if (target === "shorts" || target === "reels") targetHeight = 1920;
  let sx = 0;
  let sy = 0;
  let sw = source.width;
  let sh = source.height;
  if (target !== "blog") {
    targetWidth = 1080;
    const targetRatio = targetWidth / targetHeight;
    const sourceRatio = sw / sh;
    if (sourceRatio > targetRatio) {
      const nextWidth = sh * targetRatio;
      sx = (sw - nextWidth) / 2;
      sw = nextWidth;
    } else {
      const nextHeight = sw / targetRatio;
      sy = (sh - nextHeight) / 2;
      sh = nextHeight;
    }
  }
  promotionCropCanvas.width = targetWidth;
  promotionCropCanvas.height = targetHeight;
  promotionCropCanvas.getContext("2d").drawImage(source, sx, sy, sw, sh, 0, 0, targetWidth, targetHeight);
  promotionTextOverlays = [];
  promotionGraphicOverlays = [];
  promotionTextBaseCanvas = null;
  promotionTextBaseDataUrl = "";
  promotionSelectedTextIndex = -1;
  promotionSelectedGraphicIndex = -1;
  syncPromotionCanvasToPreview();
  if (promotionImagePreview) promotionImagePreview.hidden = true;
  const targetLabel = target === "instagram" ? "인스타그램" : target === "shorts" ? "쇼츠" : target === "reels" ? "릴스" : "블로그";
  showPromotionStatus(`${targetLabel}용 이미지 크기로 변경했습니다.`);
}

function collectPromotionCase() {
  return {
    who: promotionCaseWhoInput?.value.trim() || "",
    when: promotionCaseWhenInput?.value.trim() || "",
    where: promotionCaseWhereInput?.value.trim() || "",
    how: promotionCaseHowInput?.value.trim() || "",
    amount: promotionCaseAmountInput?.value.trim() || "",
    detail: promotionCaseDetailInput?.value.trim() || "",
  };
}

function buildPromotionCaseText(caseItem = collectPromotionCase()) {
  const topic = promotionTopicInput?.value.trim() || "보험 점검";
  const storyParts = [
    caseItem.when && `${caseItem.when}에`,
    caseItem.who || "한 고객님이",
    caseItem.where && `${caseItem.where}에서`,
    caseItem.how && `${caseItem.how} 방식으로 확인하던 중`,
  ].filter(Boolean).join(" ");
  return [
    `${storyParts || "한 고객님의 사례를 바탕으로"} ${topic} 관련 내용을 다시 살펴보게 되었습니다.`,
    "",
    caseItem.detail || "처음에는 단순한 확인 정도로 생각했지만, 실제로는 가입해둔 담보와 현재 상황을 하나씩 맞춰보는 과정이 필요했습니다.",
    caseItem.amount ? `${caseItem.amount}을 지불했습니다.` : "확인 과정에서 놓치기 쉬운 보장, 청구 가능성, 필요한 서류가 하나씩 정리되었습니다.",
    "",
    "이런 사례에서 중요한 건 ‘보험을 많이 가입했는지’보다 ‘내 상황에 맞게 제대로 작동하는지’를 보는 것입니다.",
    "진단비, 수술비, 입원비, 실손, 후유장해처럼 항목별로 나누어 보면 평소에는 잘 보이지 않던 부분이 드러나는 경우가 많습니다.",
    "",
    "그래서 상담 글에서는 겁을 주기보다, 고객이 자신의 상황을 편하게 떠올릴 수 있도록 차분하게 안내하는 흐름이 좋습니다.",
    "필요한 부분은 확인하고, 부족한 부분은 보완하고, 받을 수 있는 부분은 놓치지 않도록 점검해보자는 메시지로 마무리하면 자연스럽습니다.",
  ].filter(Boolean).join("\n");
}

function generatePromotionCaseText() {
  if (!promotionCaseOutput) return;
  promotionCaseOutput.value = buildPromotionCaseText();
  showPromotionStatus("사례를 글로 풀었습니다.");
}

function getStoredPromotionCases() {
  const cases = readJsonStorage(getScopedStorageKey(promotionCasesStorageKey), []);
  return Array.isArray(cases) ? cases : [];
}

function setStoredPromotionCases(cases) {
  localStorage.setItem(getScopedStorageKey(promotionCasesStorageKey), JSON.stringify(Array.isArray(cases) ? cases : []));
}

function renderPromotionCaseList() {
  if (!promotionCaseList) return;
  const cases = getStoredPromotionCases();
  promotionCaseList.innerHTML = "";
  if (!cases.length) {
    const empty = document.createElement("p");
    empty.className = "promotion-saved-empty";
    empty.textContent = "저장된 사례가 없습니다.";
    promotionCaseList.append(empty);
    return;
  }
  cases.slice(0, 60).forEach((item) => {
    const row = document.createElement("div");
    row.className = "promotion-saved-row";
    const load = document.createElement("button");
    load.type = "button";
    load.className = "promotion-saved-load";
    load.dataset.promotionCaseLoadId = item.id;
    load.textContent = [item.who || "사례", item.amount, item.when].filter(Boolean).join(" / ");
    const copy = document.createElement("button");
    copy.type = "button";
    copy.className = "promotion-saved-copy";
    copy.dataset.promotionCaseCopyId = item.id;
    copy.textContent = "복사";
    const del = document.createElement("button");
    del.type = "button";
    del.className = "promotion-saved-delete";
    del.dataset.promotionCaseDeleteId = item.id;
    del.textContent = "×";
    row.append(load, copy, del);
    promotionCaseList.append(row);
  });
}

function savePromotionCase() {
  const data = collectPromotionCase();
  const text = promotionCaseOutput?.value.trim() || buildPromotionCaseText(data);
  const now = new Date().toISOString();
  const item = { id: `promotion-case-${Date.now()}-${Math.random().toString(16).slice(2)}`, ...data, text, createdAt: now, updatedAt: now };
  setStoredPromotionCases([item, ...getStoredPromotionCases()]);
  renderPromotionCaseList();
  showPromotionStatus("사례를 저장했습니다.");
}

function loadPromotionCase(id) {
  const item = getStoredPromotionCases().find((caseItem) => caseItem.id === id);
  if (!item) return;
  if (promotionCaseWhoInput) promotionCaseWhoInput.value = item.who || "";
  if (promotionCaseWhenInput) promotionCaseWhenInput.value = item.when || "";
  if (promotionCaseWhereInput) promotionCaseWhereInput.value = item.where || "";
  if (promotionCaseHowInput) promotionCaseHowInput.value = item.how || "";
  if (promotionCaseAmountInput) promotionCaseAmountInput.value = item.amount || "";
  if (promotionCaseDetailInput) promotionCaseDetailInput.value = item.detail || "";
  if (promotionCaseOutput) promotionCaseOutput.value = item.text || buildPromotionCaseText(item);
  showPromotionStatus("저장된 사례를 불러왔습니다.");
}

function copyPromotionCase(id = "") {
  const item = id ? getStoredPromotionCases().find((caseItem) => caseItem.id === id) : null;
  const text = item?.text || promotionCaseOutput?.value.trim() || buildPromotionCaseText();
  copyText(text, "사례 글 복사 완료");
}

function deletePromotionCase(id) {
  setStoredPromotionCases(getStoredPromotionCases().filter((item) => item.id !== id));
  renderPromotionCaseList();
  showPromotionStatus("저장된 사례를 삭제했습니다.");
}

function getStoredPromotionIdeas() {
  const ideas = readJsonStorage(getScopedStorageKey(promotionIdeasStorageKey), []);
  return Array.isArray(ideas) ? ideas : [];
}

function setStoredPromotionIdeas(ideas) {
  localStorage.setItem(getScopedStorageKey(promotionIdeasStorageKey), JSON.stringify(Array.isArray(ideas) ? ideas : []));
}

function renderPromotionIdeaList() {
  if (!promotionIdeaList) return;
  const ideas = getStoredPromotionIdeas();
  promotionIdeaList.innerHTML = "";
  if (!ideas.length) {
    const empty = document.createElement("p");
    empty.className = "promotion-saved-empty";
    empty.textContent = "저장된 글감이 없습니다.";
    promotionIdeaList.append(empty);
    return;
  }
  ideas.slice(0, 80).forEach((idea) => {
    const row = document.createElement("div");
    row.className = "promotion-saved-row promotion-idea-row";
    const load = document.createElement("button");
    load.type = "button";
    load.className = "promotion-saved-load";
    load.dataset.promotionIdeaLoadId = idea.id;
    const preview = [idea.text || "", idea.url ? `링크: ${idea.url}` : "", idea.imageName ? `이미지: ${idea.imageName}` : ""].filter(Boolean).join(" / ");
    load.textContent = preview.slice(0, 80) || "글감";
    const del = document.createElement("button");
    del.type = "button";
    del.className = "promotion-saved-delete";
    del.dataset.promotionIdeaDeleteId = idea.id;
    del.textContent = "×";
    row.append(load, del);
    promotionIdeaList.append(row);
  });
}

function cleanPromotionBlogText(rawText) {
  const lines = String(rawText || "").replace(/\r/g, "").split("\n");
  const cleaned = [];
  let skippingContents = false;
  for (const originalLine of lines) {
    let line = originalLine.trim();
    if (!line) {
      if (cleaned.length && cleaned[cleaned.length - 1] !== "") cleaned.push("");
      continue;
    }
    if (/^(Title|URL Source|Published Time|Markdown Content):/i.test(line)) continue;
    if (/^(#{1,6}\s*)?(목차|contents?|table of contents)\s*:?$/i.test(line)) {
      skippingContents = true;
      continue;
    }
    if (skippingContents) {
      if (/^#{1,6}\s+/.test(line) && !/\[[^\]]+\]\([^)]+\)/.test(line)) skippingContents = false;
      else continue;
    }
    if (/^(#{1,6}\s*)?(같이 보면 좋은 글|당신을 위한 추천|추천 글|관련 글|인기 글|최신 글|이 글도 읽어보세요|댓글)\s*$/i.test(line)) break;
    if (/^!\[[^\]]*\]\([^)]+\)$/.test(line)) continue;

    const markdownLinks = line.match(/\[[^\]]+\]\([^)]+\)/g) || [];
    if (markdownLinks.length) {
      const remainder = line
        .replace(/\[[^\]]+\]\([^)]+\)/g, "")
        .replace(/[\s*+\-–—•·\d.():]+/g, "");
      if (!remainder) continue;
      line = line.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
    }

    line = line
      .replace(/<[^>]+>/g, " ")
      .replace(/https?:\/\/\S+/g, "")
      .replace(/^#{1,6}\s+/, "")
      .replace(/\s{2,}/g, " ")
      .trim();
    if (!line || /^(menu|search|로그인|회원가입|카테고리|태그|공유하기)$/i.test(line)) continue;
    if (cleaned[cleaned.length - 1] !== line) cleaned.push(line);
  }
  return cleaned.join("\n").replace(/\n{3,}/g, "\n\n").trim().slice(0, 40000);
}

async function extractPromotionBlogText() {
  const rawUrl = promotionIdeaUrlInput?.value.trim() || "";
  if (!rawUrl) {
    showPromotionStatus("블로그 링크를 먼저 붙여넣어 주세요.");
    promotionIdeaUrlInput?.focus();
    return "";
  }
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    showPromotionStatus("올바른 블로그 링크를 입력해 주세요.");
    return "";
  }
  if (!/^https?:$/.test(url.protocol)) {
    showPromotionStatus("http 또는 https 블로그 링크만 사용할 수 있습니다.");
    return "";
  }
  showPromotionStatus("블로그 글을 가져오는 중입니다...");
  try {
    const response = await fetch(`https://r.jina.ai/${url.href}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const extracted = cleanPromotionBlogText(await response.text());
    if (!extracted) throw new Error("empty");
    if (promotionIdeaTextInput) promotionIdeaTextInput.value = extracted;
    showPromotionStatus("블로그에서 글만 추출했습니다.");
    return extracted;
  } catch {
    showPromotionStatus("블로그 글을 가져오지 못했습니다. 공개된 글인지 링크를 확인해 주세요.");
    return "";
  }
}

function ensurePromotionOcrLibrary() {
  if (window.Tesseract) return Promise.resolve(window.Tesseract);
  if (promotionOcrScriptPromise) return promotionOcrScriptPromise;
  promotionOcrScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    script.onload = () => window.Tesseract ? resolve(window.Tesseract) : reject(new Error("OCR load failed"));
    script.onerror = () => reject(new Error("OCR load failed"));
    document.head.append(script);
  });
  return promotionOcrScriptPromise;
}

async function extractPromotionImageText() {
  const imageFile = promotionIdeaImageInput?.files?.[0] || null;
  if (!imageFile) {
    showPromotionStatus("글씨를 추출할 이미지를 먼저 선택해 주세요.");
    return "";
  }
  showPromotionStatus("이미지 글씨 인식 기능을 준비하는 중입니다...");
  try {
    const tesseract = await ensurePromotionOcrLibrary();
    const result = await tesseract.recognize(imageFile, "kor+eng", {
      logger: (progress) => {
        if (progress.status !== "recognizing text") return;
        const percent = Math.round(Number(progress.progress || 0) * 100);
        showPromotionStatus(`이미지에서 글씨를 읽는 중입니다... ${percent}%`);
      },
    });
    const text = String(result?.data?.text || "").replace(/\n{3,}/g, "\n\n").trim();
    if (!text) throw new Error("empty OCR result");
    if (promotionIdeaTextInput) promotionIdeaTextInput.value = text;
    showPromotionStatus("이미지에서 글만 추출했습니다.");
    return text;
  } catch {
    showPromotionStatus("이미지 글씨를 읽지 못했습니다. 선명한 이미지로 다시 시도해 주세요.");
    return "";
  }
}

async function savePromotionIdea() {
  let text = promotionIdeaTextInput?.value.trim() || "";
  const imageFile = promotionIdeaImageInput?.files?.[0] || null;
  if (!text && imageFile) text = await extractPromotionImageText();
  if (!text) {
    showPromotionStatus("추출하거나 저장할 글을 먼저 넣어주세요.");
    promotionIdeaTextInput?.focus();
    return;
  }
  const now = new Date().toISOString();
  const idea = {
    id: `promotion-idea-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    text,
    url: promotionIdeaUrlInput?.value.trim() || "",
    createdAt: now,
  };
  setStoredPromotionIdeas([idea, ...getStoredPromotionIdeas()].slice(0, 80));
  if (promotionIdeaTextInput) promotionIdeaTextInput.value = "";
  if (promotionIdeaUrlInput) promotionIdeaUrlInput.value = "";
  if (promotionIdeaImageInput) promotionIdeaImageInput.value = "";
  renderPromotionIdeaList();
  showPromotionStatus("추출한 글감을 저장했습니다. 다음 글 작성 때 참고합니다.");
}

function loadPromotionIdea(id) {
  const idea = getStoredPromotionIdeas().find((item) => item.id === id);
  if (!idea) return;
  if (promotionIdeaTextInput) promotionIdeaTextInput.value = idea.text || "";
  if (promotionIdeaUrlInput) promotionIdeaUrlInput.value = idea.url || "";
  showPromotionStatus("저장된 글감을 불러왔습니다.");
}

function deletePromotionIdea(id) {
  setStoredPromotionIdeas(getStoredPromotionIdeas().filter((item) => item.id !== id));
  renderPromotionIdeaList();
  showPromotionStatus("저장된 글감을 삭제했습니다.");
}

function getPromotionIdeaContext() {
  const ideas = getStoredPromotionIdeas();
  return ideas
    .slice(0, 30)
    .map((idea, index) => {
      const parts = [];
      if (idea.text) parts.push(idea.text);
      if (idea.imageName) parts.push(`이미지 참고 ${index + 1}: ${idea.imageName}`);
      return parts.join("\n");
    })
    .filter(Boolean)
    .join("\n\n");
}

function getPromotionCaseContext() {
  const current = collectPromotionCase();
  if (Object.values(current).some(Boolean)) return buildPromotionCaseText(current);
  const latest = getStoredPromotionCases()[0];
  return latest?.text || "";
}

function getPromotionEmojiBank() {
  return Array.from({ length: 98 }, (_, index) => String(index));
}

function getSelectedPromotionEmojis() {
  const selected = readJsonStorage(getScopedStorageKey(promotionSelectedEmojisStorageKey), []);
  const available = new Set(getPromotionEmojiBank());
  return Array.isArray(selected) ? selected.filter((emoji) => available.has(emoji)) : [];
}

function setSelectedPromotionEmojis(emojis) {
  localStorage.setItem(getScopedStorageKey(promotionSelectedEmojisStorageKey), JSON.stringify(Array.isArray(emojis) ? emojis : []));
}

function getPromotionEmojiLine() {
  return "";
}

function setPromotionEmojiSpritePosition(element, emojiIndex) {
  const index = Number(emojiIndex);
  const column = index % 7;
  const row = Math.floor(index / 7);
  element.style.setProperty("--emoji-x", `${(column / 6) * 100}%`);
  element.style.setProperty("--emoji-y", `${(row / 13) * 100}%`);
}

function renderSelectedPromotionEmojiPreview() {
  if (!promotionSelectedEmojiPreview) return;
  promotionSelectedEmojiPreview.innerHTML = "";
  getSelectedPromotionEmojis().forEach((emojiIndex) => {
    const preview = document.createElement("span");
    preview.className = "promotion-emoji-sprite promotion-emoji-preview-item";
    setPromotionEmojiSpritePosition(preview, emojiIndex);
    promotionSelectedEmojiPreview.append(preview);
  });
}

function renderPromotionEmojiBank() {
  if (!promotionEmojiBank) return;
  promotionEmojiBank.innerHTML = "";
  const selected = new Set(getSelectedPromotionEmojis());
  getPromotionEmojiBank().forEach((emoji) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "promotion-emoji-button";
    button.dataset.promotionEmoji = emoji;
    button.classList.add("promotion-emoji-sprite");
    setPromotionEmojiSpritePosition(button, emoji);
    button.classList.toggle("selected", selected.has(emoji));
    button.setAttribute("aria-pressed", selected.has(emoji) ? "true" : "false");
    button.title = selected.has(emoji) ? `이미지 이모티콘 ${Number(emoji) + 1} 선택 해제` : `이미지 이모티콘 ${Number(emoji) + 1} 선택`;
    promotionEmojiBank.append(button);
  });
  renderSelectedPromotionEmojiPreview();
}

function togglePromotionEmoji(emoji) {
  if (!emoji) return;
  const selected = getSelectedPromotionEmojis();
  const next = selected.includes(emoji)
    ? selected.filter((item) => item !== emoji)
    : [...selected, emoji];
  setSelectedPromotionEmojis(next);
  renderPromotionEmojiBank();
  showPromotionStatus(next.includes(emoji) ? "이미지 이모티콘을 선택했습니다." : "이미지 이모티콘 선택을 해제했습니다.");
}

async function copySelectedPromotionEmojiImage() {
  const selected = getSelectedPromotionEmojis();
  if (!selected.length) {
    showPromotionStatus("복사할 이미지 이모티콘을 먼저 선택해 주세요.");
    return;
  }
  const sprite = new Image();
  sprite.onload = async () => {
    const columns = 7;
    const rows = 14;
    const cellWidth = sprite.naturalWidth / columns;
    const cellHeight = sprite.naturalHeight / rows;
    const output = document.createElement("canvas");
    output.width = Math.round(cellWidth * selected.length);
    output.height = Math.round(cellHeight);
    const context = output.getContext("2d");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, output.width, output.height);
    selected.forEach((emojiIndex, index) => {
      const number = Number(emojiIndex);
      const sourceX = (number % columns) * cellWidth;
      const sourceY = Math.floor(number / columns) * cellHeight;
      context.drawImage(sprite, sourceX, sourceY, cellWidth, cellHeight, index * cellWidth, 0, cellWidth, cellHeight);
    });
    output.toBlob(async (blob) => {
      if (!blob) return;
      try {
        if (!navigator.clipboard?.write || typeof ClipboardItem === "undefined") throw new Error("clipboard unavailable");
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        showPromotionStatus("선택한 이미지 이모티콘을 복사했습니다. 블로그에 Ctrl+V로 붙여넣으세요.");
      } catch {
        const link = document.createElement("a");
        link.href = output.toDataURL("image/png");
        link.download = `blog-emoji-${Date.now()}.png`;
        link.click();
        showPromotionStatus("클립보드 복사가 제한되어 이미지 파일로 저장했습니다.");
      }
    }, "image/png");
  };
  sprite.src = "./assets/blog-emoji-sprite.png";
}

function handlePromotionScreenshotPaste(event) {
  const items = [...(event.clipboardData?.items || [])];
  const imageItem = items.find((item) => item.type.startsWith("image/"));
  if (!imageItem) return;
  event.preventDefault();
  const blob = imageItem.getAsFile();
  loadPromotionImageBlob(blob, "스크린샷을 이미지로 불러왔습니다. 바로 크롭할 수 있어요.");
}

function focusPromotionScreenshotPasteZone() {
  promotionScreenshotPasteZone?.focus();
  showPromotionStatus("이제 Ctrl+V로 스크린샷을 붙여넣으세요.");
}

function openPromotionSearch(site) {
  const query = promotionSearchInput?.value.trim() || promotionTopicInput?.value.trim() || "";
  if (!query) {
    showPromotionStatus("검색어를 입력해주세요.");
    promotionSearchInput?.focus();
    return;
  }
  const encoded = encodeURIComponent(query);
  const url = site === "pinterest"
    ? `https://www.pinterest.com/search/pins/?q=${encoded}`
    : site === "google"
      ? `https://www.google.com/search?tbm=isch&q=${encoded}`
      : `https://search.naver.com/search.naver?where=image&sm=tab_jum&query=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
  showPromotionStatus("검색 새창을 열었습니다. 원하는 이미지를 캡쳐한 뒤 Ctrl+V로 붙여넣으세요.");
}

function getPromotionImageHint() {
  const file = promotionImageInput?.files?.[0];
  if (!file) return "";
  return file.name
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .trim();
}

function sanitizePromotionReference(text) {
  return String(text ?? "")
    .replace(/\b01[016789][-\s]?\d{3,4}[-\s]?\d{4}\b/g, "연락처")
    .replace(/\b\d{6}[-\s]?\d{7}\b/g, "생년월일")
    .replace(/\b\d{2,4}[./-]\d{1,2}[./-]\d{1,2}\b/g, "날짜")
    .trim();
}

function getPromotionConsultationReference() {
  const pieces = [];
  const currentMemo = sanitizePromotionReference(phoneConsultationMemoInput?.value);
  if (currentMemo) pieces.push(currentMemo);

  const selectedCustomerKey = getPhoneConsultationCustomerKey(savedCustomerSelect?.value || activePhoneConsultationCustomerId || "");
  const selectedDraft = getStoredPhoneConsultationDrafts()[selectedCustomerKey];
  const selectedDraftMemo = sanitizePromotionReference(selectedDraft?.memo);
  if (selectedDraftMemo) pieces.push(selectedDraftMemo);

  getOrderedPhoneConsultationMemos()
    .slice(0, 6)
    .forEach((memo) => {
      const summary = sanitizePromotionReference([memo.title, memo.content].filter(Boolean).join(" - "));
      if (summary) pieces.push(summary);
    });

  const unique = [...new Set(pieces)]
    .map((item) => item.replace(/\s+/g, " ").slice(0, 120))
    .filter(Boolean)
    .slice(0, 5);

  return unique.length
    ? `\n\n상담 참고 포인트:\n${unique.map((item) => `- ${item}`).join("\n")}`
    : "";
}

function buildPromotionCopyLegacy() {
  const channel = promotionChannelInput?.value || "blog";
  const topic = promotionTopicInput?.value.trim() || getPromotionImageHint() || "보험 점검";
  const memo = promotionMemoInput?.value.trim();
  const imageHint = getPromotionImageHint();
  const memoLine = memo ? `\n\n추가 포인트: ${memo}` : "";
  const imageLine = imageHint ? `\n이미지 참고 키워드: ${imageHint}` : "";
  const consultationLine = getPromotionConsultationReference();

  if (channel === "instagram") {
    return [
      `${topic}, 그냥 지나치고 계신가요?`,
      "",
      `보험은 가입보다 점검이 더 중요할 때가 많습니다. 이미 가입한 보장 안에서도 놓친 청구, 부족한 진단비, 중복된 특약이 생길 수 있어요.`,
      "",
      `오늘은 ${topic}을 기준으로 내 보험이 지금 상황에 맞는지 가볍게 확인해보세요.`,
      "",
      "✔ 가입한 보장이 현재 생활에 맞는지",
      "✔ 청구하지 못한 보험금은 없는지",
      "✔ 보험료 대비 꼭 필요한 보장이 남아있는지",
      "",
      "궁금하신 분은 편하게 문의 주세요. 상황에 맞춰 차분히 확인해드릴게요.",
      consultationLine,
      memoLine,
      imageLine,
      "",
      "#보험점검 #숨은보험금 #보험상담 #진단비 #실손보험 #보험리모델링 #보험청구",
    ].filter(Boolean).join("\n");
  }

  if (channel === "kin") {
    return [
      `질문: ${topic} 관련해서 보험을 어떻게 확인하면 좋을까요?`,
      "",
      "답변:",
      `${topic}은 단순히 가입 여부만 보는 것보다 현재 보장 내용과 실제 청구 가능성을 함께 확인하는 것이 좋습니다.`,
      "",
      "확인 순서는 보통 다음과 같습니다.",
      "1. 현재 가입한 보험의 보장 항목 확인",
      "2. 진단비, 수술비, 입원비, 실손 등 필요한 항목 구분",
      "3. 중복 보장이나 부족한 보장 확인",
      "4. 최근 병력이나 청구 이력에 따른 제한 사항 확인",
      "",
      "특히 보험금 청구는 약관과 진단명, 치료 내용에 따라 달라질 수 있으니 서류를 기준으로 확인하는 것이 안전합니다.",
      "",
      "정확한 판단은 가입증권과 약관, 병원 서류를 함께 보고 확인해보시는 것을 권해드립니다.",
      consultationLine,
      memoLine,
      imageLine,
    ].filter(Boolean).join("\n");
  }

  return [
    `[${topic}] 내 보험, 지금 제대로 준비되어 있을까요?`,
    "",
    `보험은 한 번 가입했다고 끝나는 것이 아니라, 시간이 지나면서 상황에 맞게 점검이 필요합니다. 특히 ${topic}처럼 실제 생활과 연결되는 부분은 놓치기 쉽습니다.`,
    "",
    "많은 분들이 이런 부분에서 헷갈려 하십니다.",
    "",
    "- 내가 받을 수 있는 보험금을 놓치고 있지는 않은지",
    "- 진단비와 수술비가 현재 기준에 부족하지는 않은지",
    "- 보험료는 계속 내고 있는데 필요한 보장은 빠져 있지 않은지",
    "- 예전에 가입한 보험이 지금 상황에도 맞는지",
    "",
    `그래서 ${topic}을 기준으로 현재 가입 내용을 한 번 정리해보는 것이 좋습니다. 가입증권, 최근 병원 이력, 청구 가능 항목을 함께 보면 불필요한 중복은 줄이고 필요한 보장은 더 선명하게 확인할 수 있습니다.`,
    "",
    "보험 점검은 무조건 새로 가입하는 과정이 아닙니다. 이미 가지고 있는 보장을 제대로 이해하고, 필요한 부분만 보완하는 것이 먼저입니다.",
    "",
    "궁금하신 내용이 있다면 현재 가입 내용 기준으로 차분하게 확인해드리겠습니다.",
    consultationLine,
    memoLine,
    imageLine,
  ].filter(Boolean).join("\n");
}

function getPromotionToneConfig() {
  const tone = promotionToneInput?.value || "cute";
  const config = {
    cute: {
      label: "귀엽게",
      intro: "살짝 귀엽고 편하게 알려드릴게요.",
      closing: "궁금하시면 편하게 톡 남겨주세요. 제가 차근차근 같이 봐드릴게요.",
      emoji: "",
    },
    feminine: {
      label: "여성스럽게",
      intro: "부드럽고 차분하게 꼭 필요한 부분만 정리해드릴게요.",
      closing: "필요하신 분은 편하게 문의 주세요. 상황에 맞춰 꼼꼼히 확인해드릴게요.",
      emoji: "",
    },
    expert: {
      label: "전문가스럽게",
      intro: "전문가 관점에서 핵심만 정확히 짚어드리겠습니다.",
      closing: "가입증권과 약관 기준으로 확인해야 정확합니다. 필요한 부분은 상담으로 점검해드리겠습니다.",
      emoji: "",
    },
  }[tone] || {
    label: "귀엽게",
    intro: "살짝 귀엽고 편하게 알려드릴게요.",
    closing: "궁금하시면 편하게 톡 남겨주세요. 제가 차근차근 같이 봐드릴게요.",
    emoji: "",
  };
  return config;
}

function buildPromotionImageCommand() {
  const topic = promotionTopicInput?.value.trim() || "숨은 보험금 찾기";
  const tone = getPromotionToneConfig().label;
  return [
    "네이버 블로그에 넣을 어울리는 이미지 3장을 만들어줘.",
    "각각 따로, 1200×900(4:3), 글자 없이 3단으로 만들어줘.",
    `분위기는 ${tone}, 주제는 \"${topic}\".`,
  ].join("\n");
}

function updatePromotionImageCommand() {
  if (promotionImageCommandOutput) promotionImageCommandOutput.value = buildPromotionImageCommand();
}

function copyPromotionImageCommand() {
  updatePromotionImageCommand();
  const command = promotionImageCommandOutput?.value.trim();
  if (!command) return;
  copyText(command, "이미지 명령어 복사 완료");
  showPromotionStatus("네이버 블로그 이미지 명령어를 복사했습니다.");
}

function getPromotionLengthBlocks(topic, multiplier, toneConfig) {
  const blocks = [
    `${toneConfig.emoji} 보험은 가입해두었다고 끝나는 것이 아니라, 시간이 지나면서 내 상황에 맞게 다시 점검해보는 과정이 필요합니다.`,
    `${toneConfig.emoji} 특히 ${topic}처럼 실제 청구나 보장 확인과 연결되는 내용은 생각보다 놓치기 쉬워요.`,
    `${toneConfig.emoji} 가입증권, 최근 병원 이력, 청구 가능 항목을 같이 보면 받을 수 있는 부분과 부족한 부분이 훨씬 선명하게 보입니다.`,
  ];
  if (multiplier >= 2) {
    blocks.push(`${toneConfig.emoji} 보험료는 매달 나가는데 정작 필요한 보장이 약하거나, 반대로 중복된 특약 때문에 부담만 커진 경우도 많습니다.`);
    blocks.push(`${toneConfig.emoji} 그래서 새로 가입하기 전에 지금 가진 보장이 어떤 역할을 하는지 먼저 확인하는 것이 중요합니다.`);
  }
  if (multiplier >= 3) {
    blocks.push(`${toneConfig.emoji} 진단비, 수술비, 입원비, 실손, 후유장해처럼 항목별로 나눠서 보면 막연했던 보험 내용이 훨씬 쉽게 정리됩니다.`);
    blocks.push(`${toneConfig.emoji} 현재 나이, 병력, 가족력, 보험료 부담까지 함께 보고 균형을 맞추는 것이 좋습니다.`);
    blocks.push(`${toneConfig.emoji} 작은 점검 하나가 나중에 보험금 청구나 치료비 준비에서 큰 차이를 만들 수 있습니다.`);
  }
  return blocks;
}

function buildPromotionVariant({ variant, topic, channel, comment, memoLine, sourceLine, imageLine, consultationLine, toneConfig, multiplier }) {
  const channelGuide = {
    blog: "블로그용",
    instagram: "인스타그램용",
    kin: "지식인 답변용",
    carrot: "당근 게시글용",
    youtube_shorts: "유튜브 쇼츠용",
    reels: "릴스용",
  }[channel] || "홍보용";
  const title = variant === 1
    ? `[1안] ${topic}, 지금 한 번 확인해보세요`
    : `[2안] 혹시 ${topic} 놓치고 계신가요?`;
  const hook = variant === 1
    ? `${toneConfig.intro}\n\n${topic}은 막상 필요할 때 확인하려면 헷갈리는 경우가 많습니다.`
    : `${topic}, 그냥 지나치기엔 아까운 부분이 있을 수 있어요. ${toneConfig.intro}`;
  const body = getPromotionLengthBlocks(topic, multiplier, toneConfig);
  const checklist = [
    "",
    "체크해보면 좋은 부분",
    "- 받을 수 있는데 놓친 보험금은 없는지",
    "- 진단비와 수술비가 현재 기준에 부족하지 않은지",
    "- 보험료 대비 꼭 필요한 보장이 남아있는지",
    "- 예전에 가입한 보험이 지금 상황에도 맞는지",
  ];
  const channelTail = channel === "instagram"
    ? "\n\n#보험점검 #숨은보험금 #보험상담 #진단비 #실손보험 #보험청구"
    : channel === "kin"
      ? "\n\n정확한 판단은 가입증권, 약관, 병원 서류를 함께 보고 확인하는 것이 가장 안전합니다."
      : "";
  const commentLine = comment ? `\n\n댓글 예시: ${comment}` : "";

  return [
    `${title} (${channelGuide} / ${toneConfig.label})`,
    "",
    hook,
    "",
    ...body,
    ...checklist,
    "",
    toneConfig.closing,
    sourceLine,
    consultationLine,
    memoLine,
    imageLine,
    commentLine,
    channelTail,
  ].filter(Boolean).join("\n");
}

function buildPromotionCopy() {
  const channel = promotionChannelInput?.value || "blog";
  const topic = promotionTopicInput?.value.trim() || getPromotionImageHint() || "보험 점검";
  const ideaText = getPromotionIdeaContext();
  const caseText = getPromotionCaseContext();
  const comment = promotionCommentInput?.value.trim();
  const toneConfig = getPromotionToneConfig();
  const multiplier = Math.max(1, Math.min(3, Number(promotionLengthInput?.value || 1)));
  const channelLabel = {
    blog: "네이버 블로그",
    instagram: "인스타그램",
    kin: "네이버 지식인",
    carrot: "당근",
    youtube_shorts: "유튜브 쇼츠",
    reels: "릴스",
  }[channel] || "네이버 블로그";
  const lengthLabel = multiplier === 3 ? "기본 글의 3배 분량" : multiplier === 2 ? "기본 글의 2배 분량" : "읽기 편한 기본 분량";
  const materials = [
    caseText ? `[자료 1 - 사례]\n${caseText}` : "",
    ideaText ? `[자료 2 - 블로그에서 추출한 글감]\n${ideaText}` : "",
  ].filter(Boolean).join("\n\n");
  const materialText = materials || `[자료]\n주제: ${topic}`;
  return [
    `아래 자료를 바탕으로 ${channelLabel}에 게시할 홍보 글을 작성해 주세요.`,
    "",
    "[작성 조건]",
    `- 핵심 주제: ${topic}`,
    `- 문체: ${toneConfig.label}`,
    `- 글 길이: ${lengthLabel}`,
    "- 자료의 문장을 그대로 복사하지 말고 핵심 내용을 자연스럽게 조합해 주세요.",
    "- 보험금 지급을 확정적으로 표현하거나 과장하지 말고, 확인과 상담이 필요하다는 방식으로 작성해 주세요.",
    "- 보험 광고 관련 법규와 심의 기준에 걸리지 않도록 보수적으로 작성하고, 오해를 부르는 표현이나 객관적인 근거가 없는 비교·최상급 표현은 사용하지 마세요.",
    "- ‘무조건’, ‘반드시’, ‘100%’, ‘전액 지급’, ‘누구나 받을 수 있다’처럼 지급이나 보장 결과를 단정하는 문구는 사용하지 마세요.",
    "- 제목과 본문을 포함하고 서로 다른 구성의 글 2안을 제시해 주세요.",
    channel === "carrot" ? "- 당근 동네생활 게시글처럼 친근하고 지역 주민에게 말하듯 작성하며, 광고처럼 과도하게 보이지 않게 해 주세요." : "",
    channel === "youtube_shorts" || channel === "reels" ? "- 짧은 세로 영상에 사용할 수 있도록 첫 문장을 강한 주목 문구로 만들고, 짧은 장면별 자막 구성도 함께 작성해 주세요." : "",
    comment ? `- 독자가 남기도록 유도할 댓글 문구: ${comment}` : "- 독자가 궁금한 점을 댓글이나 상담으로 문의하도록 자연스럽게 안내해 주세요.",
    "",
    materialText,
    "",
    "[최종 목표]",
    "이 글을 읽은 고객이 자신의 보험과 보험금 청구 가능성을 점검해보고 싶다는 생각이 들도록 작성해 주세요. 최종적으로 고객 상담을 위해 연락이 오도록 자연스럽게 유도하는 글을 작성해 주세요.",
    "",
    "설명이나 작성 과정은 빼고, 바로 게시할 수 있는 완성된 글 2안만 출력해 주세요.",
  ].join("\n");
}

function generatePromotionCopy() {
  if (!promotionOutput) return;
  promotionOutput.value = buildPromotionCopy();
  showPromotionStatus("AI에 그대로 복사할 수 있는 명령어를 만들었습니다.");
}

function copyPromotionCopy() {
  const text = promotionOutput?.value.trim();
  if (!text) {
    showPromotionStatus("먼저 글을 작성해주세요.");
    return;
  }
  copyText(text, "홍보 글 복사 완료");
  showPromotionStatus("홍보 글을 복사했습니다.");
}

function openPhoneConsultation() {
  setPhoneConsultationMode(true);
}

function openPromotion() {
  setPromotionMode(true);
}

function setPhoneConsultationMode(enabled, updateHash = true) {
  document.body.classList.toggle("phone-consultation-mode", enabled);
  if (enabled) {
    document.body.classList.remove("contract-management-mode", "design-manager-mode", "promotion-mode");
    renderPhoneConsultationMemoButtons(viewedPhoneConsultationMemoId);
    renderPhoneConsultationCommonTemplate();
    restorePhoneConsultationDraftForCustomer(savedCustomerSelect?.value || "");
  }
  if (pageTitle) pageTitle.textContent = getMainPageTitle();
  if (updateHash) {
    const nextUrl = enabled ? "#phone-consultation" : window.location.pathname + window.location.search;
    window.history.replaceState(null, "", nextUrl);
  }
  rememberUiSession({ viewMode: getCurrentViewMode() });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setPromotionMode(enabled, updateHash = true) {
  document.body.classList.toggle("promotion-mode", enabled);
  if (enabled) {
    document.body.classList.remove("contract-management-mode", "design-manager-mode", "phone-consultation-mode");
    restorePromotionImageSignature();
    updatePromotionToolColorChips();
    renderPromotionColorPalette();
    renderPromotionSavedList();
    renderPromotionSavedImageList();
    renderPromotionCaseList();
    renderPromotionIdeaList();
    renderPromotionEmojiBank();
    updatePromotionImageCommand();
  }
  if (pageTitle) pageTitle.textContent = getMainPageTitle();
  if (updateHash) {
    const nextUrl = enabled ? "#promotion" : window.location.pathname + window.location.search;
    window.history.replaceState(null, "", nextUrl);
  }
  rememberUiSession({ viewMode: getCurrentViewMode() });
  window.scrollTo({ top: 0, behavior: "smooth" });
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

function getCustomerMergeKey(customer, index) {
  const fields = customer?.state?.fields ?? {};
  return customer?.id || [
    fields.customerName,
    fields.residentNumber,
    fields.phoneCarrier,
    customer?.createdAt,
    index,
  ].filter(Boolean).join("|");
}

function getLatestCustomer(first, second) {
  const firstTime = new Date(first?.updatedAt || first?.createdAt || 0).getTime();
  const secondTime = new Date(second?.updatedAt || second?.createdAt || 0).getTime();
  return secondTime > firstTime ? second : first;
}

function mergeCustomers(...customerLists) {
  const merged = new Map();

  customerLists.flat().filter(Boolean).forEach((customer, index) => {
    const key = getCustomerMergeKey(customer, index);
    if (!key) return;
    merged.set(key, merged.has(key) ? getLatestCustomer(merged.get(key), customer) : customer);
  });

  return [...merged.values()].sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));
}

function getDesignManagerMergeKey(manager, index) {
  return [
    manager?.company,
    manager?.name,
    manager?.siteUrl,
    manager?.loginId,
    manager?.password,
    index,
  ].filter(Boolean).join("|");
}

function mergeDesignManagers(...managerLists) {
  const merged = new Map();

  managerLists.flat().filter(Boolean).forEach((manager, index) => {
    const key = getDesignManagerMergeKey(manager, index);
    if (!key) return;
    merged.set(key, manager);
  });

  return [...merged.values()];
}

function getPendingDeletedCustomerIds() {
  return readJsonStorage(getScopedStorageKey(deletedCustomersStorageKey), []);
}

function addPendingDeletedCustomerId(customerId) {
  if (!customerId) return;
  const deletedIds = new Set(getPendingDeletedCustomerIds());
  deletedIds.add(customerId);
  localStorage.setItem(getScopedStorageKey(deletedCustomersStorageKey), JSON.stringify([...deletedIds]));
}

function clearPendingDeletedCustomerIds() {
  localStorage.removeItem(getScopedStorageKey(deletedCustomersStorageKey));
}

function removeDeletedCustomers(customers, deletedIds = getPendingDeletedCustomerIds()) {
  const deletedSet = new Set(deletedIds);
  return customers.filter((customer) => !deletedSet.has(customer.id));
}

async function fetchCloudSnapshot({ retryAfterRefresh = true } = {}) {
  if (!supabaseClient || !currentSession || localMode) return { row: null, error: null };
  const { data, error } = await supabaseJson(
    `/rest/v1/insurance_app_data?select=customers,draft,updated_at&user_id=eq.${encodeURIComponent(currentSession.user.id)}`,
    { authToken: currentSession.access_token },
  );

  if (error && retryAfterRefresh && currentSession.refresh_token) {
    const refreshedSession = await refreshCloudSession(currentSession);
    if (refreshedSession?.access_token) {
      currentSession = refreshedSession;
      activeUserId = refreshedSession.user?.id || activeUserId;
      saveCloudSession(refreshedSession);
      return fetchCloudSnapshot({ retryAfterRefresh: false });
    }
  }

  return { row: Array.isArray(data) ? data[0] : data, error };
}

function listStorageKeysWithPrefix(prefix) {
  const keys = [];
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (key === prefix || key?.startsWith(`${prefix}:`)) {
      keys.push(key);
    }
  }
  return keys;
}

function getSessionPhoneNumber() {
  return getSessionAuthPhone();
}

function getPhoneScopedLocalUserId(phoneValue = "") {
  const phone = normalizeAuthPhone(phoneValue) || getSessionPhoneNumber();
  return phone.length >= 10 ? `local-${phone}` : "";
}

function readCustomersFromStorageKey(key) {
  const customers = readJsonStorage(key, []);
  return Array.isArray(customers) ? customers : [];
}

function recoverAllStoredDataToCurrentAccount({ quiet = false } = {}) {
  if (!currentSession?.user?.id) {
    return {
      customers: [],
      designManagers: [],
      phoneMemos: [],
      commonTemplate: "",
      recoveredCustomerCount: 0,
      recoveredMemoCount: 0,
      recoveredCommonTemplate: false,
      sources: [],
    };
  }

  const customerKey = getScopedStorageKey(customerStorageKey);
  const draftKey = getScopedStorageKey(autoSaveDraftKey);
  const designManagerKey = getScopedStorageKey(designManagerStorageKey);
  const sources = [];
  const customerLists = [];
  const draftLists = [];
  const designManagerLists = [];

  const addCustomers = (key, label) => {
    const customers = readCustomersFromStorageKey(key);
    if (!customers.length) return;
    customerLists.push(customers);
    sources.push(`${label} ${customers.length}명`);
  };

  const addDraft = (key) => {
    const draft = readJsonStorage(key);
    if (draft && typeof draft === "object") draftLists.push(draft);
  };

  const addDesignManagers = (key, label) => {
    const managers = readJsonStorage(key, []);
    if (!Array.isArray(managers) || !managers.length) return;
    designManagerLists.push(managers);
    sources.push(`${label} 보험사 ${managers.length}건`);
  };

  addCustomers(customerKey, "현재 계정");
  addCustomers(customerStorageKey, "이전 공통 저장");
  listStorageKeysWithPrefix(customerStorageKey).forEach((key) => {
    if (key === customerKey) return;
    const suffix = key.split(":").slice(1).join(":") || "기타";
    addCustomers(key, `다른 계정(${suffix})`);
  });

  const phoneLocalId = getPhoneScopedLocalUserId();
  if (phoneLocalId) {
    addCustomers(`${customerStorageKey}:${phoneLocalId}`, "같은 연락처 로컬 계정");
    addDraft(`${autoSaveDraftKey}:${phoneLocalId}`);
    addDesignManagers(`${designManagerStorageKey}:${phoneLocalId}`, "같은 연락처 로컬 계정");
  }

  addDraft(draftKey);
  addDraft(autoSaveDraftKey);
  listStorageKeysWithPrefix(autoSaveDraftKey).forEach((key) => {
    if (key !== draftKey) addDraft(key);
  });

  addDesignManagers(designManagerKey, "현재 계정");
  addDesignManagers(designManagerStorageKey, "이전 공통 저장");
  listStorageKeysWithPrefix(designManagerStorageKey).forEach((key) => {
    if (key === designManagerKey) return;
    const suffix = key.split(":").slice(1).join(":") || "기타";
    addDesignManagers(key, `다른 계정(${suffix})`);
  });

  const existingCustomers = readCustomersFromStorageKey(customerKey);
  const existingPhoneMemoCount = getStoredPhoneConsultationMemos().length;
  const mergedCustomers = mergeCustomers(...customerLists);
  const mergedDesignManagers = mergeDesignManagers(...designManagerLists);
  const mergedDraft = mergeDraftSnapshots(...draftLists);
  const recoveredCustomerCount = Math.max(0, mergedCustomers.length - existingCustomers.length);
  const phoneMemos = recoverPhoneConsultationMemosToCurrentAccount();
  const recoveredMemoCount = Math.max(0, phoneMemos.length - existingPhoneMemoCount);

  if (mergedCustomers.length) {
    localStorage.setItem(customerKey, JSON.stringify(mergedCustomers));
  }
  if (mergedDesignManagers.length) {
    localStorage.setItem(designManagerKey, JSON.stringify(mergedDesignManagers));
  }
  if (mergedDraft) {
    persistDraftSnapshot(mergedDraft);
    persistPhoneConsultationCloudDataFromDraft(mergedDraft);
  }
  const commonTemplateRecovery = recoverPhoneConsultationCommonDataToCurrentAccount();

  if (!quiet && (recoveredCustomerCount > 0 || recoveredMemoCount > 0 || commonTemplateRecovery.recovered)) {
    showManagerStatus(
      `이전 저장 고객 ${recoveredCustomerCount}명, 메모 ${recoveredMemoCount}건`
      + `${commonTemplateRecovery.recovered ? ", 공통 메모" : ""}을 복구했습니다.`,
    );
  } else if (!quiet && mergedCustomers.length) {
    showManagerStatus(`저장 고객 ${mergedCustomers.length}명을 불러왔습니다.`);
  }

  return {
    customers: mergedCustomers,
    designManagers: mergedDesignManagers,
    phoneMemos,
    commonTemplate: commonTemplateRecovery.content,
    recoveredCustomerCount,
    recoveredMemoCount,
    recoveredCommonTemplate: commonTemplateRecovery.recovered,
    sources: [...new Set(sources)],
  };
}

function migrateLegacyDataToCurrentAccount() {
  return recoverAllStoredDataToCurrentAccount({ quiet: true });
}

function openLocalAccount(account) {
  const session = buildLocalSession(account);
  localMode = true;
  currentSession = session;
  activeUserId = account.id;
  hasCloudHydrated = true;
  saveLocalSession(session);
  saveCloudSession(null);
  fillAuthFieldsFromSession(session);
  migrateLegacyDataToCurrentAccount();
  showCustomerApp();
  restoreUiFromCurrentStorage();
  setSyncStatus("이 기기 저장");
}

async function loginLocalAccount() {
  const phone = normalizeAuthPhone(authPhone.value);
  const name = normalizeAuthName(authName.value);
  const accounts = readJsonStorage(localAccountStorageKey, []);
  const account = accounts.find((item) => item.phone === phone && normalizeAuthName(item.name) === name)
    || accounts.find((item) => item.phone === phone);

  if (!account) {
    authStatus.textContent = "등록된 이름과 연락처를 찾지 못했습니다. 처음이면 회원가입을 눌러주세요.";
    return false;
  }

  openLocalAccount(account);
  showManagerStatus(`${account.name}님 고객 목록을 불러왔습니다.`);
  authStatus.textContent = "이 기기 저장 계정으로 로그인했습니다.";
  return true;
}

async function loginOrCreateLocalAccount(reason = "") {
  const loggedIn = await loginLocalAccount();
  if (loggedIn) return true;

  const signedUp = await signupLocalAccount();
  if (signedUp) {
    authStatus.textContent = reason
      ? `${reason} 이 기기 저장 계정을 새로 만들고 로그인했습니다.`
      : "이 기기 저장 계정을 새로 만들고 로그인했습니다.";
    return true;
  }

  return false;
}

async function signupLocalAccount() {
  const phone = normalizeAuthPhone(authPhone.value);
  const name = authName.value.trim();
  if (!name || phone.length < 10) {
    authStatus.textContent = "이름과 연락처를 정확히 입력해주세요.";
    return false;
  }

  const accounts = readJsonStorage(localAccountStorageKey, []);
  if (accounts.some((item) => item.phone === phone)) {
    authStatus.textContent = "이미 가입된 연락처입니다. 로그인해주세요.";
    return false;
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
  authStatus.textContent = "이 기기 저장 계정으로 회원가입했습니다.";
  return true;
}

function findMatchingLocalAccountForAuthInput() {
  const phone = normalizeAuthPhone(authPhone.value);
  const name = normalizeAuthName(authName.value);
  const accounts = readJsonStorage(localAccountStorageKey, []);
  if (!Array.isArray(accounts) || !phone) return null;
  return accounts.find((item) => item.phone === phone && normalizeAuthName(item.name) === name)
    || accounts.find((item) => item.phone === phone)
    || null;
}

async function recoverLocalAccountThroughCloudSignup(localAccount, reason = "") {
  if (!localAccount) return false;
  if (!supabaseClient || !isSupabaseConfigured()) {
    openLocalAccount(localAccount);
    authStatus.textContent = "기존 이 기기 저장 사용자를 불러왔습니다. 서버 연결 후 클라우드 전환이 필요합니다.";
    return true;
  }

  const phone = normalizeAuthPhone(localAccount.phone);
  const name = localAccount.name || authName.value.trim();
  if (!phone || !name) return false;

  authStatus.textContent = "기존 이 기기 저장 사용자를 클라우드로 복구하는 중...";
  try {
    const { data, error } = await supabaseJson("/auth/v1/signup", {
      method: "POST",
      body: {
        email: `${phone}@phone.insure.local`,
        password: `Insure-${phone}-${encodeURIComponent(normalizeAuthName(name))}`,
        data: { name, phone },
      },
    });

    if (error) {
      authStatus.textContent = `기존 이 기기 저장 자료는 보존했습니다. 클라우드 복구는 실패했습니다: ${error.message}`;
      return false;
    }

    const session = normalizeSupabaseSession(data);
    if (!session) {
      authStatus.textContent = "기존 이 기기 저장 자료는 보존했습니다. 클라우드 가입 확인 설정 때문에 서버 전환은 보류되었습니다.";
      return false;
    }

    localMode = false;
    saveCloudSession(session);
    saveLocalSession(null);
    await handleAuthSession(session);
    authStatus.textContent = reason
      ? `${reason} 기존 이 기기 저장 고객정보를 클라우드 사용자로 복구했습니다.`
      : "기존 이 기기 저장 고객정보를 클라우드 사용자로 복구했습니다.";
    return true;
  } catch (error) {
    authStatus.textContent = `기존 이 기기 저장 자료는 보존했습니다. 클라우드 복구 요청은 실패했습니다: ${error.message}`;
    return false;
  }
}

function persistAuthSessionSnapshot() {
  if (!currentSession?.user?.id) return;
  if (localMode || isLocalAuthSession(currentSession)) {
    saveLocalSession(currentSession);
    return;
  }
  saveCloudSession(currentSession);
}

function showAuthScreen(message = "") {
  window.InsuranceAuthKernel?.showLoginScreen?.(message);
  if (authStatus && message) authStatus.textContent = message;
  renderAccountInfo();
  renderConfigStatus();
}

function showCustomerApp() {
  window.InsuranceAuthKernel?.showMainApp?.();
  persistAuthSessionSnapshot();
  renderAccountInfo();
}

async function pushCloudSnapshot() {
  if (!supabaseClient || !currentSession || isHydratingCloud || localMode || !hasCloudHydrated) {
    setSyncStatus(localMode ? "클라우드 로그인 필요" : "저장 준비 중", {
      reason: !supabaseClient
        ? "supabaseClient 없음"
        : !currentSession
          ? "로그인 세션 없음"
          : isHydratingCloud
            ? "서버 불러오는 중"
            : localMode
              ? "로컬 모드"
              : "hasCloudHydrated=false",
    });
    return false;
  }

  setSyncStatus("저장 중");
  savePhoneConsultationDraftForCustomer();
  let { row: latestCloudRow, error: fetchError } = await fetchCloudSnapshot();
  if (fetchError) {
    latestCloudRow = null;
    setSyncStatus("최신 확인 실패, 현재 저장본으로 저장 시도", { reason: fetchError.message });
    showManagerStatus("클라우드 최신 확인은 실패했지만 현재 저장본으로 저장을 계속 시도합니다.");
  }

  const draft = readJsonStorage(getScopedStorageKey(autoSaveDraftKey));
  const deletedIds = getPendingDeletedCustomerIds();
  const latestCloudCustomers = Array.isArray(latestCloudRow?.customers) ? latestCloudRow.customers : [];
  const localCustomers = getStoredCustomers();
  const mergedBeforeDelete = mergeCustomers(latestCloudCustomers, localCustomers);
  const mergedCustomers = removeDeletedCustomers(mergedBeforeDelete, deletedIds);
  const latestDesignManagers = Array.isArray(latestCloudRow?.draft?.designManagers) ? latestCloudRow.draft.designManagers : [];
  const mergedDesignManagers = mergeDesignManagers(latestDesignManagers, getStoredDesignManagers());
  const latestPhoneMemos = Array.isArray(latestCloudRow?.draft?.phoneConsultationMemos) ? latestCloudRow.draft.phoneConsultationMemos : [];
  const mergedPhoneMemos = mergePhoneConsultationMemos(latestPhoneMemos, getStoredPhoneConsultationMemos());
  const selectedCommonTemplate = pickLatestCommonTemplate(
    latestCloudRow?.draft,
    {
      phoneConsultationCommonTemplate: getStoredPhoneConsultationCommonTemplate(),
      phoneConsultationCommonTemplateUpdatedAt: getStoredPhoneConsultationCommonTemplateUpdatedAt(),
      phoneConsultationCommonHighlight: getStoredPhoneConsultationCommonHighlight(),
      phoneConsultationCommonHighlightStrokes: getStoredPhoneConsultationCommonHighlightStrokes(),
    },
  );
  const phoneTemplate = selectedCommonTemplate.content;
  const phoneTemplateUpdatedAt = selectedCommonTemplate.updatedAt;
  const phoneCommonHighlight = selectedCommonTemplate.highlight;
  const phoneCommonHighlightStrokes = selectedCommonTemplate.strokes;
  const phoneDrafts = mergePhoneConsultationRecordMap(
    latestCloudRow?.draft?.phoneConsultationDrafts,
    getStoredPhoneConsultationDrafts(),
  );
  const phoneOrders = mergePhoneConsultationRecordMap(
    latestCloudRow?.draft?.phoneConsultationOrders,
    getStoredPhoneConsultationOrders(),
  );
  const latestPromotionPosts = Array.isArray(latestCloudRow?.draft?.promotionPosts) ? latestCloudRow.draft.promotionPosts : [];
  const promotionPosts = mergePromotionPosts(latestPromotionPosts, getStoredPromotionPosts());

  console.info("[sync] 저장 직전 서버 최신 customers 개수", latestCloudCustomers.length);
  console.info("[sync] 저장 직전 로컬 캐시 customers 개수", localCustomers.length);
  console.info("[sync] 저장 직전 병합 후 customers 개수", mergedBeforeDelete.length);
  console.info("[sync] 삭제 pending id", deletedIds.length ? deletedIds : "없음");
  if (deletedIds.length) {
    console.info("[sync] pending 삭제 적용 후 customers 개수", mergedCustomers.length);
  }

  const cloudDraft = mergeDraftSnapshots(
    latestCloudRow?.draft && typeof latestCloudRow.draft === "object" ? latestCloudRow.draft : null,
    draft,
    {
      selectedId: savedCustomerSelect.value,
      updatedAt: new Date().toISOString(),
      state: draft?.state || collectCustomerState(),
      designManagers: mergedDesignManagers,
      phoneConsultationMemos: mergedPhoneMemos,
      phoneConsultationCommonTemplate: phoneTemplate,
      phoneConsultationCommonTemplateUpdatedAt: phoneTemplateUpdatedAt,
      phoneConsultationCommonHighlight: phoneCommonHighlight,
      phoneConsultationCommonHighlightStrokes: phoneCommonHighlightStrokes,
      phoneConsultationDrafts: phoneDrafts,
      phoneConsultationOrders: phoneOrders,
      promotionPosts,
      universeDisclosureText,
      medicalAnalysisJson,
    },
  ) || {
    selectedId: savedCustomerSelect.value,
    updatedAt: new Date().toISOString(),
    state: draft?.state || collectCustomerState(),
    designManagers: mergedDesignManagers,
    phoneConsultationMemos: mergedPhoneMemos,
    phoneConsultationCommonTemplate: phoneTemplate,
    phoneConsultationCommonTemplateUpdatedAt: phoneTemplateUpdatedAt,
    phoneConsultationCommonHighlight: phoneCommonHighlight,
    phoneConsultationCommonHighlightStrokes: phoneCommonHighlightStrokes,
    phoneConsultationDrafts: phoneDrafts,
    phoneConsultationOrders: phoneOrders,
    promotionPosts,
    universeDisclosureText,
    medicalAnalysisJson,
  };
  const body = {
    user_id: currentSession.user.id,
    customers: mergedCustomers,
    draft: cloudDraft,
    updated_at: new Date().toISOString(),
  };

  let response;
  if (latestCloudRow) {
    response = await supabaseJson(`/rest/v1/insurance_app_data?user_id=eq.${encodeURIComponent(currentSession.user.id)}`, {
      method: "PATCH",
      body,
      prefer: "return=representation",
      authToken: currentSession.access_token,
    });
  } else {
    response = await supabaseJson("/rest/v1/insurance_app_data", {
      method: "POST",
      body,
      prefer: "return=representation",
      authToken: currentSession.access_token,
    });
  }

  let { error } = response;
  if (error?.message?.includes("duplicate") || error?.message?.includes("violates unique")) {
    ({ error } = await supabaseJson(`/rest/v1/insurance_app_data?user_id=eq.${encodeURIComponent(currentSession.user.id)}`, {
      method: "PATCH",
      body,
      prefer: "return=representation",
      authToken: currentSession.access_token,
    }));
  }

  if (error) {
    setSyncStatus("저장 차단됨", { reason: error.message });
    showManagerStatus(`클라우드 저장 실패: ${error.message}`);
    return false;
  } else {
    localStorage.setItem(getScopedStorageKey(customerStorageKey), JSON.stringify(mergedCustomers));
    localStorage.setItem(getScopedStorageKey(designManagerStorageKey), JSON.stringify(mergedDesignManagers));
    setStoredPhoneConsultationMemos(mergedPhoneMemos);
    setStoredPhoneConsultationCommonTemplate(phoneTemplate, {
      updatedAt: phoneTemplateUpdatedAt,
      touch: false,
    });
    setStoredPhoneConsultationCommonHighlight(phoneCommonHighlight);
    setStoredPhoneConsultationCommonHighlightStrokes(phoneCommonHighlightStrokes);
    setStoredPhoneConsultationDrafts(phoneDrafts);
    setStoredPhoneConsultationOrders(phoneOrders);
    setStoredPromotionPosts(promotionPosts);
    clearPendingDeletedCustomerIds();
    console.info("[sync] 저장 후 서버에 저장된 customers 개수", mergedCustomers.length);
    setSyncStatus("저장 완료", {
      savedCustomers: mergedCustomers.length,
      savedMemos: mergedPhoneMemos.length,
      savedInsurers: mergedDesignManagers.length,
    });
    showManagerStatus("클라우드 저장 완료");
    return true;
  }
}

function scheduleCloudSync() {
  if (!supabaseClient || !currentSession || isHydratingCloud || localMode || !hasCloudHydrated) {
    setSyncStatus(localMode ? "클라우드 로그인 필요" : "저장 준비 중", {
      reason: !hasCloudHydrated ? "hasCloudHydrated=false" : "세션/서버 상태 미준비",
    });
    return;
  }
  window.clearTimeout(cloudSyncTimer);
  cloudSyncTimer = window.setTimeout(pushCloudSnapshot, 1000);
}

function restoreUiFromCurrentStorage() {
  const recovery = recoverAllStoredDataToCurrentAccount({ quiet: true });
  customerSearchInput.value = "";
  renderDesignManagers();

  const remembered = getRememberedUiSession();
  const rememberedCustomer = remembered.selectedId
    ? recovery.customers.find((customer) => customer.id === remembered.selectedId)
    : null;

  if (rememberedCustomer) {
    applyCustomerState(rememberedCustomer.state);
    savedCustomerSelect.value = rememberedCustomer.id;
    showManagerStatus("마지막으로 보던 고객 정보를 불러왔습니다.");
  } else {
    const draft = readJsonStorage(getScopedStorageKey(autoSaveDraftKey));
    const draftCustomer = draft?.selectedId
      ? recovery.customers.find((customer) => customer.id === draft.selectedId)
      : null;
    if (draftCustomer) {
      applyCustomerState(draftCustomer.state);
      savedCustomerSelect.value = draftCustomer.id;
    } else {
      restoreCustomersToUi();
    }
  }

  renderSavedCustomerList(savedCustomerSelect.value);
  renderOutput();
  restorePhoneConsultationDraftForCustomer(savedCustomerSelect.value);
  restoreRememberedViewMode();

  if (!localMode && hasCloudHydrated && (recovery.recoveredCustomerCount > 0 || recovery.recoveredMemoCount > 0)) {
    scheduleCloudSync();
  }
}

async function hydrateFromCloud() {
  if (!supabaseClient || !currentSession) return;
  isHydratingCloud = true;
  hasCloudHydrated = false;
  setSyncStatus("서버 불러오는 중");
  let shouldPushAfterHydrate = false;

  const migrationRecovery = migrateLegacyDataToCurrentAccount();
  if (migrationRecovery.recoveredCustomerCount > 0 || migrationRecovery.recoveredMemoCount > 0) {
    shouldPushAfterHydrate = true;
  }

  const customerKey = getScopedStorageKey(customerStorageKey);
  const draftKey = getScopedStorageKey(autoSaveDraftKey);
  const designManagerKey = getScopedStorageKey(designManagerStorageKey);
  const scopedCustomers = readJsonStorage(customerKey, []);
  const legacyCustomers = readJsonStorage(customerStorageKey, []);
  const scopedDraft = readJsonStorage(draftKey);
  const legacyDraft = readJsonStorage(autoSaveDraftKey);
  const scopedDesignManagers = readJsonStorage(designManagerKey, []);
  const legacyDesignManagers = readJsonStorage(designManagerStorageKey, []);

  const { row: cloudRow, error } = await fetchCloudSnapshot();

  if (error) {
    const mergedCustomers = mergeCustomers(scopedCustomers, legacyCustomers);
    localStorage.setItem(customerKey, JSON.stringify(mergedCustomers));
    localStorage.setItem(designManagerKey, JSON.stringify(mergeDesignManagers(scopedDesignManagers, legacyDesignManagers)));
    const fallbackDraft = mergeDraftSnapshots(scopedDraft, legacyDraft);
    if (fallbackDraft) {
      persistDraftSnapshot(fallbackDraft);
      persistPhoneConsultationCloudDataFromDraft(fallbackDraft);
    }

    isHydratingCloud = false;
    hasCloudHydrated = true;
    setSyncStatus("서버 연결 실패, 이 브라우저 저장본 사용", { reason: error.message, customers: mergedCustomers.length });
    showManagerStatus(`클라우드 연결 실패. 이 브라우저에 저장된 고객 ${mergedCustomers.length}명을 불러왔습니다.`);
    recoverAllStoredDataToCurrentAccount({ quiet: true });
    restoreUiFromCurrentStorage();
    if (mergedCustomers.length) scheduleCloudSync();
    return;
  }

  if (cloudRow) {
    const cloudCustomers = Array.isArray(cloudRow.customers) ? cloudRow.customers : [];
    const mergedCustomers = removeDeletedCustomers(mergeCustomers(cloudCustomers, scopedCustomers, legacyCustomers));
    console.info("[sync] 로그인 직후 서버 customers 개수", cloudCustomers.length);
    console.info("[sync] 로그인 직후 로컬 캐시 customers 개수", scopedCustomers.length);
    console.info("[sync] 로그인 직후 legacy local customers 개수", legacyCustomers.length);
    console.info("[sync] 로그인 직후 병합 후 customers 개수", mergedCustomers.length);
    localStorage.setItem(customerKey, JSON.stringify(mergedCustomers));

    if (mergedCustomers.length > cloudCustomers.length) {
      shouldPushAfterHydrate = true;
    }

    const cloudDraft = cloudRow.draft && typeof cloudRow.draft === "object" ? cloudRow.draft : null;
    const mergedDraft = mergeDraftSnapshots(cloudDraft, scopedDraft, legacyDraft);
    if (mergedDraft) {
      persistDraftSnapshot(mergedDraft);
      persistPhoneConsultationCloudDataFromDraft(mergedDraft);
      if (!cloudDraft?.state && (scopedDraft?.state || legacyDraft?.state)) {
        shouldPushAfterHydrate = true;
      }
    }

    if (Array.isArray(cloudRow.draft?.designManagers)) {
      const mergedDesignManagers = mergeDesignManagers(cloudRow.draft.designManagers, scopedDesignManagers, legacyDesignManagers);
      localStorage.setItem(designManagerKey, JSON.stringify(mergedDesignManagers));
      if (mergedDesignManagers.length > cloudRow.draft.designManagers.length) {
        shouldPushAfterHydrate = true;
      }
    } else {
      const preservedDesignManagers = mergeDesignManagers(scopedDesignManagers, legacyDesignManagers);
      if (preservedDesignManagers.length) {
        localStorage.setItem(designManagerKey, JSON.stringify(preservedDesignManagers));
        shouldPushAfterHydrate = true;
      }
    }
  } else {
    const mergedCustomers = mergeCustomers(scopedCustomers, legacyCustomers);
    console.info("[sync] 로그인 직후 서버 customers 개수", 0);
    console.info("[sync] 로그인 직후 로컬 캐시 customers 개수", scopedCustomers.length);
    console.info("[sync] 로그인 직후 legacy local customers 개수", legacyCustomers.length);
    console.info("[sync] 로그인 직후 병합 후 customers 개수", mergedCustomers.length);
    localStorage.setItem(customerKey, JSON.stringify(mergedCustomers));
    localStorage.setItem(designManagerKey, JSON.stringify(mergeDesignManagers(scopedDesignManagers, legacyDesignManagers)));
    const migrationDraft = mergeDraftSnapshots(scopedDraft, legacyDraft);
    if (migrationDraft) {
      persistDraftSnapshot(migrationDraft);
      persistPhoneConsultationCloudDataFromDraft(migrationDraft);
    }
    if (mergedCustomers.length || migrationDraft) shouldPushAfterHydrate = true;
  }

  isHydratingCloud = false;
  hasCloudHydrated = true;
  const recovery = recoverAllStoredDataToCurrentAccount({ quiet: true });
  if (recovery.recoveredCustomerCount > 0 || recovery.recoveredMemoCount > 0) {
    shouldPushAfterHydrate = true;
  }
  setSyncStatus("서버 데이터 불러오기 완료", {
    customers: getStoredCustomers().length,
  });
  restoreUiFromCurrentStorage();
  if (!cloudRow || shouldPushAfterHydrate) await pushCloudSnapshot();
}

async function handleAuthSession(session) {
  if (!session) {
    currentSession = null;
    activeUserId = "";
    hasCloudHydrated = false;
    showAuthScreen("이름과 내 연락처로 로그인해주세요.");
    return;
  }

  if (isLocalAuthSession(session)) {
    await restoreLocalAuthSession(session);
    return;
  }

  const activeSession = await ensureActiveCloudSession(session);
  currentSession = activeSession || session;
  localMode = false;
  hasCloudHydrated = false;
  saveLocalSession(null);
  saveCloudSession(currentSession);
  fillAuthFieldsFromSession(currentSession);
  showCustomerApp();

  if (activeUserId === currentSession.user.id && hasCloudHydrated) {
    restoreUiFromCurrentStorage();
    return;
  }

  activeUserId = currentSession.user.id;
  await hydrateFromCloud();
}

async function initializeAuthentication() {
  renderConfigStatus();

  try {
    if (await restoreSavedAuthSession()) {
      return;
    }
  } catch (error) {
    console.warn("[auth] restore skipped", error);
  }

  showAuthScreen("이름과 연락처로 로그인하거나 회원가입해주세요.");

  if (hasSupabaseConfigValues() && !ensureSupabaseReadyForAuth()) {
    localMode = true;
    return;
  }

  if (!isSupabaseConfigured()) {
    localMode = true;
    setSyncStatus("서버 연결 필요");
    return;
  }

  localMode = false;
  supabaseClient = { mode: "rest" };
  setSyncStatus("클라우드 로그인 대기");
  void getSupabaseAuthSettings();
}

function registerInsuranceAuthKernel() {
  const handlers = {
    login: loginWithEmail,
    signup: signupWithEmail,
    onPageHide: () => {
      if (appRoot?.classList.contains("is-auth-hidden")) return;
      window.clearTimeout(autoSaveTimer);
      runAutoSave();
      persistAuthSessionSnapshot();
      if (!localMode && hasCloudHydrated) {
        void flushCloudSyncNow("화면 종료 전 자동 저장");
      }
    },
    onAppReady: () => {
      void initializeAuthentication();
    },
  };

  if (window.InsuranceAuthKernel?.registerAppAuth) {
    window.InsuranceAuthKernel.registerAppAuth(handlers);
    document.addEventListener("insurance-auth-ready", (event) => {
      const session = event.detail?.session;
      if (!event.detail?.emergency || !session) return;
      void restoreLocalAuthSession(session);
    });
    return;
  }

  console.warn("[auth] kernel missing; using legacy auth bootstrap");
  safeOn(authForm, "submit", loginWithEmail);
  safeOn(signupButton, "click", signupWithEmail);
  void initializeAuthentication();
  safeOn(window, "pagehide", handlers.onPageHide);
}

async function loginWithEmail(event) {
  event.preventDefault();
  if (!isSupabaseConfigured()) {
    await loginOrCreateLocalAccount();
    return;
  }
  if (hasSupabaseConfigValues() && !ensureSupabaseReadyForAuth()) {
    return;
  }
  const settings = await getSupabaseAuthSettings();
  if (settings?.external?.email === false) {
    authStatus.textContent = "로그인 불가: Supabase Authentication > Providers > Email을 켜주세요.";
    return;
  }

  if (!supabaseClient) {
    authStatus.textContent = "서버 DB 연결 후 로그인할 수 있습니다. Supabase 연결값을 확인해주세요.";
    return;
  }
  if (!ensureSupabaseReadyForAuth()) return;

  const email = getPhoneAuthEmail();
  const name = authName.value.trim();
  if (!email || !name) {
    authStatus.textContent = "이름과 연락처를 정확히 입력해주세요.";
    return;
  }

  authStatus.textContent = "고객정보를 불러오는 중...";
  try {
    const { data, error } = await supabaseJson("/auth/v1/token?grant_type=password", {
      method: "POST",
      body: {
        email,
        password: getPhoneAuthPassword(),
      },
    });
    if (error) {
      if (isInvalidCloudLoginError(error.message)) {
        const localAccount = findMatchingLocalAccountForAuthInput();
        if (localAccount) {
          const recovered = await recoverLocalAccountThroughCloudSignup(localAccount, `클라우드 기존 사용자를 찾지 못했습니다: ${error.message}`);
          if (recovered) return;
        }
      }

      if (shouldFallbackToLocalAuth(error.message)) {
        authStatus.textContent = `클라우드 로그인 실패: ${error.message}\n동기화를 위해 이 기기 저장 모드로 전환하지 않았습니다. 잠시 후 다시 시도해주세요.`;
        return;
      }

      authStatus.textContent = `로그인 실패: ${error.message}\n이름과 연락처를 처음 가입할 때와 동일하게 입력했는지 확인해주세요.`;
      return;
    }

    localMode = false;
    const session = normalizeSupabaseSession(data);
    saveCloudSession(session);
    saveLocalSession(null);
    await handleAuthSession(session);
    authStatus.textContent = "고객정보를 불러왔습니다.";
  } catch (error) {
    if (shouldFallbackToLocalAuth(error.message)) {
      authStatus.textContent = error.message.includes("non ISO-8859-1")
        ? "로그인 실패: Supabase 연결값과 브라우저 캐시를 확인해주세요."
        : `클라우드 로그인 실패: ${error.message}\n동기화를 위해 로컬 계정으로 전환하지 않았습니다.`;
      return;
    }

    authStatus.textContent = `로그인 실패: ${error.message}`;
  }
}

async function signupWithEmail() {
  if (!isSupabaseConfigured()) {
    await signupLocalAccount();
    return;
  }
  if (hasSupabaseConfigValues() && !ensureSupabaseReadyForAuth()) {
    return;
  }

  if (!supabaseClient) {
    authStatus.textContent = "서버 DB 연결 후 회원가입할 수 있습니다. Supabase 연결값을 확인해주세요.";
    return;
  }
  if (!ensureSupabaseReadyForAuth()) return;

  const phone = normalizeAuthPhone(authPhone.value);
  const name = authName.value.trim();
  const email = getPhoneAuthEmail();
  if (!email || !name) {
    authStatus.textContent = "이름과 연락처를 정확히 입력해주세요.";
    return;
  }

  const existingLocalAccount = findMatchingLocalAccountForAuthInput();
  authStatus.textContent = "회원가입 중...";
  try {
    const settings = await getSupabaseAuthSettings();
    if (settings?.external?.email === false) {
      authStatus.textContent = "클라우드 회원가입 불가: Supabase Email 로그인을 켜주세요.";
      return;
    }

    if (settings?.mailer_autoconfirm === false) {
      authStatus.textContent = "클라우드 회원가입 확인 설정을 완료해주세요.";
      return;
    }

    const { data, error } = await supabaseJson("/auth/v1/signup", {
      method: "POST",
      body: {
        email,
        password: getPhoneAuthPassword(),
        data: { name, phone },
      },
    });

    if (error) {
      if (existingLocalAccount) {
        const recovered = await recoverLocalAccountThroughCloudSignup(existingLocalAccount, `기존 이 기기 저장 사용자를 찾았습니다.`);
        if (recovered) return;
      }

      if (shouldFallbackToLocalAuth(error.message)) {
        authStatus.textContent = `클라우드 회원가입 실패: ${error.message}\n동기화를 위해 로컬 계정을 만들지 않았습니다.`;
        return;
      }

      authStatus.textContent = `회원가입 실패: ${error.message}`;
      return;
    }

    localMode = false;
    const session = normalizeSupabaseSession(data);

    if (!session) {
      authStatus.textContent = "가입 확인 설정 때문에 로그인이 보류되었습니다. 관리자에게 문의해주세요.";
    } else {
      saveCloudSession(session);
      saveLocalSession(null);
      await handleAuthSession(session);
      authStatus.textContent = "회원가입과 로그인이 완료되었습니다.";
    }
  } catch (error) {
    if (existingLocalAccount) {
      const recovered = await recoverLocalAccountThroughCloudSignup(existingLocalAccount, "기존 이 기기 저장 사용자를 찾았습니다.");
      if (recovered) return;
    }

    authStatus.textContent = error.message.includes("non ISO-8859-1")
      ? "회원가입 실패: Supabase 연결값과 브라우저 캐시를 확인해주세요."
      : `클라우드 회원가입 실패: ${error.message}\n로컬 계정은 생성하지 않았습니다.`;
  }
}

async function logoutCustomerApp() {
  window.clearTimeout(autoSaveTimer);
  rememberUiSession();

  if (!localMode && supabaseClient && currentSession?.access_token) {
    await supabaseJson("/auth/v1/logout", {
      method: "POST",
      authToken: currentSession.access_token,
    });
  }

  saveCloudSession(null);
  saveLocalSession(null);
  localMode = false;
  currentSession = null;
  activeUserId = "";
  hasCloudHydrated = false;
  showAuthScreen("로그아웃되었습니다.");
}

function setContractManagementMode(enabled, updateHash = true) {
  document.body.classList.toggle("contract-management-mode", enabled);
  if (enabled) {
    document.body.classList.remove("design-manager-mode", "phone-consultation-mode", "promotion-mode");
  }
  if (pageTitle) pageTitle.textContent = getMainPageTitle();

  if (updateHash) {
    const nextUrl = enabled ? "#contracts" : window.location.pathname + window.location.search;
    window.history.replaceState(null, "", nextUrl);
  }

  rememberUiSession({ viewMode: getCurrentViewMode() });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setDesignManagerMode(enabled, updateHash = true) {
  document.body.classList.toggle("design-manager-mode", enabled);
  if (enabled) {
    document.body.classList.remove("contract-management-mode", "phone-consultation-mode", "promotion-mode");
    renderDesignManagers();
  }
  if (pageTitle) pageTitle.textContent = getMainPageTitle();

  if (updateHash) {
    const nextUrl = enabled ? "#insurers" : window.location.pathname + window.location.search;
    window.history.replaceState(null, "", nextUrl);
  }

  rememberUiSession({ viewMode: getCurrentViewMode() });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goMainMode() {
  setContractManagementMode(false, false);
  setDesignManagerMode(false, false);
  setPhoneConsultationMode(false, false);
  setPromotionMode(false, false);
  window.history.replaceState(null, "", window.location.pathname + window.location.search);
  rememberUiSession({ viewMode: "main" });
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

  normalizeNoticeStatuses(prefill).forEach((status) => {
    const checkbox = card.querySelector(`[data-notice-status][value="${status}"]`);
    if (checkbox) checkbox.checked = true;
  });

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
  const statuses = [...card.querySelectorAll("[data-notice-status]:checked")].map((item) => normalizeRecurrence(item.value));
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
    statuses,
    recurrence: statuses[0] ?? "",
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

function addMedicationRow(prefill = {}, options = {}) {
  const row = document.createElement("div");
  row.className = "medication-row";
  if (options.primary) {
    row.classList.add("is-primary");
  }
  row.innerHTML = `
    <label><span>질환명</span><input data-medication-field="disease" type="text" autocomplete="off" /></label>
    <label><span>약물명</span><input data-medication-field="name" type="text" autocomplete="off" /></label>
    <label><span>복용기간</span><input data-medication-field="period" type="text" placeholder="예: 2024.01~현재" autocomplete="off" /></label>
    ${options.primary ? '<span class="medication-primary-label">기본</span>' : '<button class="danger-button" type="button" data-remove-medication>삭제</button>'}
  `;
  row.querySelector('[data-medication-field="disease"]').value = prefill.disease ?? "";
  row.querySelector('[data-medication-field="name"]').value = prefill.name ?? "";
  row.querySelector('[data-medication-field="period"]').value = prefill.period ?? "";
  medicationList.append(row);
}

function collectMedicationRows() {
  return [...medicationList.querySelectorAll(".medication-row")]
    .map((row) => ({
      disease: row.querySelector('[data-medication-field="disease"]').value.trim(),
      name: row.querySelector('[data-medication-field="name"]').value.trim(),
      period: row.querySelector('[data-medication-field="period"]').value.trim(),
    }))
    .filter((item) => item.disease || item.name || item.period);
}

function getMedicationRowsFromState(state = {}) {
  if (Array.isArray(state.medications) && state.medications.length) {
    return state.medications;
  }

  const legacy = {
    disease: state.fields?.medDisease ?? "",
    name: state.fields?.medName ?? "",
    period: state.fields?.medPeriod ?? "",
  };

  return legacy.disease || legacy.name || legacy.period ? [legacy] : [{}];
}

function applyMedicationRows(rows = []) {
  medicationList.innerHTML = "";
  (rows.length ? rows : [{}]).forEach((row, index) => addMedicationRow(row, { primary: index === 0 }));
}

function getStoredDesignManagers() {
  const saved = readJsonStorage(getScopedStorageKey(designManagerStorageKey), []);
  return Array.isArray(saved)
    ? saved.filter((item) => item.company || item.name || item.managerPhone || item.admin || item.adminPhone || item.siteUrl || item.loginId || item.password)
    : [];
}

function collectDesignManagers() {
  return [...designManagerList.querySelectorAll(".design-manager-row")].map((row) => ({
    type: row.dataset.type ?? "nonlife",
    company: row.dataset.company ?? "",
    name: row.dataset.name ?? "",
    managerPhone: row.dataset.managerPhone ?? "",
    admin: row.dataset.admin ?? "",
    adminPhone: row.dataset.adminPhone ?? "",
    siteUrl: row.dataset.siteUrl ?? "",
    browser: row.dataset.browser ?? "default",
    loginId: row.dataset.loginId ?? "",
    password: row.dataset.password ?? "",
  }));
}

function saveDesignManagers() {
  localStorage.setItem(getScopedStorageKey(designManagerStorageKey), JSON.stringify(collectDesignManagers()));
  scheduleCloudSync();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildCopyField(label, value, copyType) {
  const displayValue = value || "-";
  return `
    <span class="insurer-table-label">${label}</span>
    <span class="insurer-table-value insurer-copy-field" data-copy-insurer="${copyType}" title="${label} 클릭 복사" role="button" tabindex="0">${escapeHtml(displayValue)}</span>
  `;
}

function buildSiteField(value) {
  return `
    <span class="insurer-table-label">주소</span>
    <span class="insurer-table-value insurer-site-link" data-open-site title="사이트 열기" role="button" tabindex="0">${escapeHtml(value || "사이트 주소 없음")}</span>
  `;
}

function getBrowserLabel(browser) {
  if (browser === "chrome") return "크롬";
  if (browser === "edge") return "엣지";
  return "기본";
}

function renderDesignManagerView(row) {
  const type = row.dataset.type ?? "nonlife";
  const company = row.dataset.company ?? "";
  const name = row.dataset.name ?? "";
  const managerPhone = row.dataset.managerPhone ?? "";
  const admin = row.dataset.admin ?? "";
  const adminPhone = row.dataset.adminPhone ?? "";
  const siteUrl = row.dataset.siteUrl ?? "";
  const browser = row.dataset.browser ?? "default";
  const loginId = row.dataset.loginId ?? "";
  const password = row.dataset.password ?? "";

  row.classList.remove("is-editing");
  row.classList.toggle("is-life", type === "life");
  row.classList.toggle("is-nonlife", type !== "life");
  row.innerHTML = `
    <div class="insurer-card-main">
      <div class="insurer-card-row insurer-card-table two-pair">
        <span class="insurer-table-label">${type === "life" ? "생보" : "손보"}</span>
        <strong>${escapeHtml(company || "보험사 미입력")}</strong>
        <span class="insurer-table-label">브라우저</span>
        <span class="insurer-table-value">${getBrowserLabel(browser)}</span>
      </div>
      <div class="insurer-card-row insurer-card-table two-pair">
        ${buildCopyField("담당자", name, "manager")}
        ${buildCopyField("담당자 연락처", managerPhone, "managerPhone")}
      </div>
      <div class="insurer-card-row insurer-card-table two-pair">
        ${buildCopyField("총무", admin, "admin")}
        ${buildCopyField("총무 연락처", adminPhone, "adminPhone")}
      </div>
      <div class="insurer-card-row insurer-card-table two-pair">
        ${buildCopyField("아이디", loginId, "loginId")}
        ${buildCopyField("비번", password, "password")}
      </div>
      <div class="insurer-card-row insurer-card-table site-actions">
        ${buildSiteField(siteUrl)}
        <button type="button" data-open-site>이동하기</button>
        <button class="secondary-button" type="button" data-edit-design-manager>수정</button>
        <button class="danger-button" type="button" data-remove-design-manager>삭제</button>
      </div>
    </div>
  `;
}

function renderDesignManagerEdit(row) {
  const browser = row.dataset.browser ?? "default";
  const type = row.dataset.type ?? "nonlife";

  row.classList.add("is-editing");
  row.innerHTML = `
    <div class="insurer-card-edit">
      <label>
        <span>구분</span>
        <select data-insurer-edit="type">
          <option value="nonlife"${type !== "life" ? " selected" : ""}>손보</option>
          <option value="life"${type === "life" ? " selected" : ""}>생보</option>
        </select>
      </label>
      <label><span>보험사</span><input data-insurer-edit="company" type="text" value="${escapeHtml(row.dataset.company ?? "")}" /></label>
      <label><span>담당자</span><input data-insurer-edit="name" type="text" value="${escapeHtml(row.dataset.name ?? "")}" /></label>
      <label><span>담당자 연락처</span><input data-insurer-edit="managerPhone" type="text" value="${escapeHtml(row.dataset.managerPhone ?? "")}" /></label>
      <label><span>총무</span><input data-insurer-edit="admin" type="text" value="${escapeHtml(row.dataset.admin ?? "")}" /></label>
      <label><span>총무 연락처</span><input data-insurer-edit="adminPhone" type="text" value="${escapeHtml(row.dataset.adminPhone ?? "")}" /></label>
      <label><span>사이트주소</span><input data-insurer-edit="siteUrl" type="text" value="${escapeHtml(row.dataset.siteUrl ?? "")}" /></label>
      <label>
        <span>브라우저</span>
        <select data-insurer-edit="browser">
          <option value="default"${browser === "default" ? " selected" : ""}>기본</option>
          <option value="chrome"${browser === "chrome" ? " selected" : ""}>크롬</option>
          <option value="edge"${browser === "edge" ? " selected" : ""}>엣지</option>
        </select>
      </label>
      <label><span>아이디</span><input data-insurer-edit="loginId" type="text" value="${escapeHtml(row.dataset.loginId ?? "")}" /></label>
      <label><span>비번</span><input data-insurer-edit="password" type="text" value="${escapeHtml(row.dataset.password ?? "")}" /></label>
    </div>
    <button type="button" data-save-design-manager>저장</button>
    <button class="secondary-button" type="button" data-cancel-design-manager>취소</button>
    <button class="danger-button" type="button" data-remove-design-manager>삭제</button>
  `;

  row.querySelector('[data-insurer-edit="name"]')?.focus();
}

function saveDesignManagerEdit(row) {
  row.dataset.type = row.querySelector('[data-insurer-edit="type"]').value;
  row.dataset.company = row.querySelector('[data-insurer-edit="company"]').value.trim();
  row.dataset.name = row.querySelector('[data-insurer-edit="name"]').value.trim();
  row.dataset.managerPhone = row.querySelector('[data-insurer-edit="managerPhone"]').value.trim();
  row.dataset.admin = row.querySelector('[data-insurer-edit="admin"]').value.trim();
  row.dataset.adminPhone = row.querySelector('[data-insurer-edit="adminPhone"]').value.trim();
  row.dataset.siteUrl = row.querySelector('[data-insurer-edit="siteUrl"]').value.trim();
  row.dataset.browser = row.querySelector('[data-insurer-edit="browser"]').value;
  row.dataset.loginId = row.querySelector('[data-insurer-edit="loginId"]').value.trim();
  row.dataset.password = row.querySelector('[data-insurer-edit="password"]').value.trim();
  renderDesignManagerView(row);
  saveDesignManagers();
  showManagerStatus("보험사 정보를 수정했습니다.");
}

function getDesignManagerLabel(row) {
  return row?.dataset.company || row?.dataset.name || "선택한 보험사";
}

function selectDesignManagerRow(row) {
  if (!row) return;
  selectedDesignManagerRow?.classList.remove("is-selected");
  selectedDesignManagerRow = row;
  selectedDesignManagerRow.classList.add("is-selected");
  selectedInsurerLabel.textContent = `${getDesignManagerLabel(row)} 선택됨`;
}

function clearSelectedDesignManagerRow(row) {
  if (!row || selectedDesignManagerRow !== row) return;
  selectedDesignManagerRow.classList.remove("is-selected");
  selectedDesignManagerRow = null;
  selectedInsurerLabel.textContent = "이동할 카드를 클릭하세요";
}

function getDesignManagerColumnCount() {
  const columns = window.getComputedStyle(designManagerList).gridTemplateColumns;
  const count = columns.split(" ").filter(Boolean).length;
  return Math.max(1, count);
}

function swapDesignManagerRows(firstRow, secondRow) {
  const marker = document.createElement("span");
  designManagerList.insertBefore(marker, firstRow);
  designManagerList.insertBefore(firstRow, secondRow);
  designManagerList.insertBefore(secondRow, marker);
  marker.remove();
}

function moveDesignManagerRow(row, direction) {
  const rows = [...designManagerList.querySelectorAll(".design-manager-row")];
  const currentIndex = rows.indexOf(row);
  const columnCount = getDesignManagerColumnCount();
  const targetIndex = {
    top: 0,
    up: currentIndex - columnCount,
    down: currentIndex + columnCount,
    bottom: rows.length - 1,
  }[direction];
  const targetRow = rows[targetIndex];

  if (!targetRow || targetRow === row) {
    showManagerStatus(direction === "up" || direction === "top" ? "이미 맨 위입니다." : "이미 맨 아래입니다.");
    return;
  }

  if (direction === "top") {
    designManagerList.insertBefore(row, rows[0]);
  } else if (direction === "bottom") {
    designManagerList.append(row);
  } else {
    swapDesignManagerRows(row, targetRow);
  }
  saveDesignManagers();
  showManagerStatus("순서를 변경했습니다.");
  selectDesignManagerRow(row);
  row.scrollIntoView({ behavior: "smooth", block: "center" });
}

function moveSelectedDesignManagerRow(direction) {
  if (!selectedDesignManagerRow || !designManagerList.contains(selectedDesignManagerRow)) {
    showManagerStatus("먼저 이동할 보험사 카드를 클릭해주세요.");
    return;
  }

  moveDesignManagerRow(selectedDesignManagerRow, direction);
}

function addDesignManagerRow(prefill = {}, options = {}) {
  const type = prefill.type ?? prefill.insurerType ?? "nonlife";
  const company = prefill.company ?? "";
  const name = prefill.name ?? prefill.manager ?? prefill.contact ?? prefill.searchTerms ?? "";
  const managerPhone = prefill.managerPhone ?? prefill.managerTel ?? prefill.contactPhone ?? "";
  const admin = prefill.admin ?? "";
  const adminPhone = prefill.adminPhone ?? prefill.adminTel ?? "";
  const siteUrl = prefill.siteUrl ?? "";
  const browser = prefill.browser ?? "default";
  const loginId = prefill.loginId ?? "";
  const password = prefill.password ?? "";
  const row = document.createElement("div");
  row.className = "design-manager-row";
  row.dataset.type = type;
  row.dataset.company = company;
  row.dataset.name = name;
  row.dataset.managerPhone = managerPhone;
  row.dataset.admin = admin;
  row.dataset.adminPhone = adminPhone;
  row.dataset.siteUrl = siteUrl;
  row.dataset.browser = browser;
  row.dataset.loginId = loginId;
  row.dataset.password = password;
  renderDesignManagerView(row);
  if (options.prepend) {
    designManagerList.prepend(row);
  } else {
    designManagerList.append(row);
  }
}

function renderDesignManagers() {
  designManagerList.innerHTML = "";
  selectedDesignManagerRow = null;
  selectedInsurerLabel.textContent = "이동할 카드를 클릭하세요";
  getStoredDesignManagers().forEach((manager) => addDesignManagerRow(manager));
}

function normalizeSiteUrl(value) {
  const url = value.trim();
  if (!url) return "";
  if (/^(https?:\/\/)/i.test(url)) return url;
  return `https://${url}`;
}

function openInsuranceSite(row) {
  const url = normalizeSiteUrl(row.dataset.siteUrl ?? "");

  if (!url) {
    showManagerStatus("사이트 주소를 입력해주세요.");
    return;
  }

  const browser = row.dataset.browser ?? "default";
  const opened = window.open(url, "_blank", "noopener");

  if (!opened) {
    copyText(url, "팝업이 차단되어 사이트 주소를 복사했습니다.");
    return;
  }

  opened.opener = null;

  showManagerStatus(
    browser === "chrome" || browser === "edge"
      ? "보안상 브라우저 강제 선택은 제한될 수 있어 기본 새 탭으로 열었습니다."
      : "사이트를 열었습니다.",
  );
}

function clearInsurerForm() {
  insurerTypeInput.value = "nonlife";
  insurerCompanyInput.value = "";
  insurerManagerInput.value = "";
  insurerManagerPhoneInput.value = "";
  insurerAdminInput.value = "";
  insurerAdminPhoneInput.value = "";
  insurerSiteUrlInput.value = "";
  insurerBrowserInput.value = "default";
  insurerLoginIdInput.value = "";
  insurerPasswordInput.value = "";
}

function createInsurerCardFromForm() {
  const item = {
    type: insurerTypeInput.value,
    company: insurerCompanyInput.value.trim(),
    name: insurerManagerInput.value.trim(),
    managerPhone: insurerManagerPhoneInput.value.trim(),
    admin: insurerAdminInput.value.trim(),
    adminPhone: insurerAdminPhoneInput.value.trim(),
    siteUrl: insurerSiteUrlInput.value.trim(),
    browser: insurerBrowserInput.value,
    loginId: insurerLoginIdInput.value.trim(),
    password: insurerPasswordInput.value.trim(),
  };

  if (!item.company && !item.name && !item.managerPhone && !item.admin && !item.adminPhone && !item.siteUrl && !item.loginId && !item.password) {
    showManagerStatus("보험사 정보를 입력해주세요.");
    return;
  }

  addDesignManagerRow(item, { prepend: true });
  selectDesignManagerRow(designManagerList.querySelector(".design-manager-row"));
  saveDesignManagers();
  clearInsurerForm();
}

function copyInsurerValue(value, message) {
  if (!value) {
    showManagerStatus("복사할 내용이 없습니다. 수정 버튼으로 먼저 입력해주세요.");
    return;
  }

  copyText(value, message);
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
    },
    contracts,
    comparison: collectComparisonRows(),
    medications: collectMedicationRows(),
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
    universeDisclosureText,
    medicalAnalysisJson,
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
  applyMedicationRows(getMedicationRowsFromState(state));

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

  universeDisclosureText = state.universeDisclosureText ?? "";
  medicalAnalysisJson = state.medicalAnalysisJson ?? null;
  renderOutput();
}

function collectMedication() {
  const status = selectedValue(document, 'input[name="medicationStatus"]');
  return {
    status,
    items: collectMedicationRows(),
  };
}

function buildNoticeLines(notices) {
  const validNotices = notices.filter((notice) => (
    notice.disease
    || notice.date
    || notice.firstVisitDate
    || notice.lastVisitDate
    || notice.memo
    || notice.bodyPart
    || (notice.statuses?.length)
    || (notice.treatments?.length)
    || (notice.categories?.length)
  ));

  if (!validNotices.length) {
    return ["[3개월 이내]", "고지사항 없음"];
  }

  const lines = ["[3개월 이내]"];

  validNotices.forEach((notice, index) => {
    lines.push("", `${index + 1}. ${notice.disease || "병명 미입력"}`, "");
    if (notice.date) {
      lines.push(`* ${notice.date}`);
    }
    if (notice.firstVisitDate) lines.push(`* 최초 내원일: ${notice.firstVisitDate}`);
    if (notice.lastVisitDate) lines.push(`* 최종 내원일: ${notice.lastVisitDate}`);
    if (notice.bodyPart) lines.push(`* 치료부위: ${notice.bodyPart}`);
    (notice.statuses?.length ? notice.statuses : notice.recurrence ? [notice.recurrence] : []).forEach((status) => {
      lines.push(`* ${normalizeRecurrence(status)}`);
    });
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

  const details = medication.items
    .map((item) => [item.disease, item.name, item.period].filter(Boolean).join(" / "))
    .filter(Boolean)
    .join("; ");

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

async function handleUniverseFileUpload(file) {
  if (!file) return;

  showManagerStatus("병력 PDF 분석 중...");
  copyStatus.textContent = "병력 PDF 분석 중...";

  try {
    const analysis = await analyzeMedicalHistoryPdf(file);
    medicalAnalysisJson = analysis;
    insertDisclosureToCustomerCopy(analysis.outputText);
    copyStatus.textContent = "병력 PDF 분석 완료";
    showManagerStatus("병력 PDF 분석 완료. 오른쪽 4. 고지 아래 [유니버스 고지사항]을 확인하세요.");
    renderOutput();
  } catch (error) {
    const message = error?.message || "파일 분석에 실패했습니다. 텍스트 PDF 형식을 확인해주세요.";
    universeDisclosureText = `분석 실패: ${message}`;
    copyStatus.textContent = message;
    showManagerStatus(message);
    renderOutput();
  } finally {
    window.setTimeout(() => {
      copyStatus.textContent = "";
    }, 2500);
  }
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = reject;
    reader.readAsText(file, "utf-8");
  });
}

function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

function extractPdfArrayText(decodedPdf) {
  return [...String(decodedPdf ?? "").matchAll(/\[(.*?)\]\s*TJ/g)]
    .map((match) => decodePdfEscapedString(match[1].replace(/\)\s*\(/g, "")))
    .filter(Boolean)
    .join("\n");
}

function salvageMedicalLinesFromBinary(text) {
  const source = String(text ?? "");
  const salvaged = new Set();

  [
    /\b20\d{2}-\d{2}-\d{2}[^\n\r]{0,240}/g,
    /\b20\d{2}\.\d{2}\.\d{2}[^\n\r]{0,240}/g,
    /(?:진료로그|진단로그|투약로그|검사로그)[^\n\r]*/g,
    /\b[A-Z]\d{2,3}(?:\.\d+)?\s*\([^)\n]{0,80}\)[^\n\r]{0,120}/g,
  ].forEach((pattern) => {
    [...source.matchAll(pattern)].forEach((match) => {
      const line = normalizeUniverseText(match[0]);
      if (line.length >= 8) salvaged.add(line);
    });
  });

  return [...salvaged].join("\n");
}

function extractReadableBinaryText(buffer) {
  const bytes = new Uint8Array(buffer);
  let text = "";
  let chunk = "";

  bytes.forEach((byte) => {
    if (byte >= 32 && byte <= 126) {
      chunk += String.fromCharCode(byte);
      return;
    }
    if (chunk.length >= 4) text += `${chunk}\n`;
    chunk = "";
  });

  if (chunk.length >= 4) text += `${chunk}\n`;

  const decoded = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
  const utf16 = new TextDecoder("utf-16le", { fatal: false }).decode(bytes);
  const literalText = extractPdfLiteralText(decoded);
  const hexText = extractPdfHexText(decoded);
  const arrayText = extractPdfArrayText(decoded);
  const salvaged = salvageMedicalLinesFromBinary(`${decoded}\n${utf16}\n${literalText}\n${hexText}`);

  return [decoded, utf16, literalText, hexText, arrayText, salvaged, text].filter(Boolean).join("\n");
}

function countMedicalPdfSignals(text) {
  const normalized = String(text ?? "");
  return {
    koreanCount: (normalized.match(/[가-힣]/g) || []).length,
    dateCount: (normalized.match(/\b(19|20)\d{2}[-./](?:0?[1-9]|1[0-2])[-./](?:0?[1-9]|[12]\d|3[01])\b/g) || []).length,
    codeCount: (normalized.match(/\b[A-Z]\d{2,3}(?:\.\d+)?\b/g) || []).length,
    universeReport: /진료로그|진단로그|투약로그|검사로그|병력분석|분석결과|고지사항/.test(normalized),
    medicalMarkers: /(병원|의원|약국|입원|외래|통원|투약|질병코드|질병명|주상병|약품명)/.test(normalized),
    datedMedicalLineCount: normalized.split(/\n+/).filter((line) => extractDateFromText(line) && (
      /\b[A-Z]\d{2,3}(?:\.\d+)?\b/.test(line) || /(병원|의원|약국|외래|입원)/.test(line)
    )).length,
    recordCount: extractMedicalRecords(normalized).filter((record) => record.date).length,
    medicationLogCount: extractMedicationLogRecords(normalized).length,
  };
}

function hasUsableMedicalPdfText(text) {
  const signals = countMedicalPdfSignals(text);
  if (signals.universeReport && (signals.dateCount >= 2 || signals.recordCount >= 2 || signals.codeCount >= 2)) {
    return true;
  }
  if (signals.recordCount >= 3) return true;
  if (signals.medicationLogCount >= 1 && signals.dateCount >= 2) return true;
  if (signals.koreanCount >= 80 && signals.dateCount >= 5 && signals.medicalMarkers) return true;
  if (signals.koreanCount >= 40 && signals.dateCount >= 3 && signals.codeCount >= 3) return true;
  if (signals.datedMedicalLineCount >= 2) return true;
  return false;
}

function detectPdfKind(extractedText) {
  const text = normalizeUniverseText(extractedText);
  const signals = countMedicalPdfSignals(text);
  const score = Math.min(100, Math.round(
    (signals.koreanCount / 8)
    + (signals.codeCount * 4)
    + (signals.dateCount * 6)
    + (signals.datedMedicalLineCount * 18)
    + (signals.universeReport ? 25 : 0)
    + (signals.recordCount * 5),
  ));

  const isTextPdf = hasUsableMedicalPdfText(text) || (
    score >= 25 && (
      signals.datedMedicalLineCount > 0
      || (signals.dateCount > 0 && signals.koreanCount > 15)
      || (signals.universeReport && signals.dateCount >= 2)
      || signals.recordCount >= 2
    )
  );

  return {
    kind: isTextPdf ? "text_pdf" : "scanned_pdf",
    confidence: score,
    textLength: text.length,
    codeCount: signals.codeCount,
    dateCount: signals.dateCount,
    datedMedicalLineCount: signals.datedMedicalLineCount,
    recordCount: signals.recordCount,
    universeReport: signals.universeReport,
  };
}

function decodePdfEscapedString(value) {
  return String(value ?? "")
    .replace(/\\([nrtbf()\\])/g, (_, char) => {
      const map = { n: "\n", r: "\r", t: "\t", b: "\b", f: "\f", "(": "(", ")": ")", "\\": "\\" };
      return map[char] ?? char;
    })
    .replace(/\\(\d{1,3})/g, (_, octal) => String.fromCharCode(parseInt(octal, 8)));
}

function extractPdfLiteralText(decodedPdf) {
  return [...String(decodedPdf ?? "").matchAll(/\(([^()]{2,})\)\s*Tj|\(([^()]{2,})\)\s*'/g)]
    .map((match) => decodePdfEscapedString(match[1] || match[2] || ""))
    .filter(Boolean)
    .join("\n");
}

function decodePdfHexString(hex) {
  const cleaned = String(hex ?? "").replace(/[^0-9A-F]/gi, "");
  if (cleaned.length < 4) return "";
  const bytes = new Uint8Array(Math.floor(cleaned.length / 2));
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = parseInt(cleaned.slice(index * 2, index * 2 + 2), 16);
  }
  const utf16 = new TextDecoder("utf-16be", { fatal: false }).decode(bytes);
  const utf8 = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
  return /[가-힣]/.test(utf16) ? utf16 : utf8;
}

function extractPdfHexText(decodedPdf) {
  return [...String(decodedPdf ?? "").matchAll(/<([0-9A-Fa-f\s]{4,})>\s*Tj/g)]
    .map((match) => decodePdfHexString(match[1]))
    .filter(Boolean)
    .join("\n");
}

function isPdfFile(file) {
  return file?.type === "application/pdf" || /\.pdf$/i.test(file?.name || "");
}

let pdfJsWorkerConfigured = false;

async function configurePdfJsWorker() {
  if (pdfJsWorkerConfigured) return;
  const pdfjsLib = globalThis.pdfjsLib;
  if (!pdfjsLib?.GlobalWorkerOptions) return;

  const loadWorkerBlobUrl = async () => {
    try {
      const response = await fetch("./pdf.worker.min.js");
      if (response.ok) {
        const workerCode = await response.text();
        if (workerCode) {
          const blob = new Blob([workerCode], { type: "text/javascript" });
          return URL.createObjectURL(blob);
        }
      }
    } catch (error) {
      console.warn("[pdf.js] worker fetch failed:", error);
    }

    try {
      const workerCode = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "./pdf.worker.min.js", true);
        xhr.onload = () => resolve(xhr.responseText || "");
        xhr.onerror = () => reject(new Error("worker xhr failed"));
        xhr.send();
      });
      if (workerCode) {
        const blob = new Blob([workerCode], { type: "text/javascript" });
        return URL.createObjectURL(blob);
      }
    } catch (error) {
      console.warn("[pdf.js] worker xhr failed:", error);
    }

    return "";
  };

  const blobWorkerUrl = await loadWorkerBlobUrl();
  pdfjsLib.GlobalWorkerOptions.workerSrc = blobWorkerUrl || "./pdf.worker.min.js";
  pdfJsWorkerConfigured = true;
}

function extractPageTextFromPdfJsContent(content) {
  if (!content?.items?.length) return "";
  let lastY = null;
  let text = "";

  content.items.forEach((item) => {
    const y = item.transform?.[5];
    if (lastY !== null && y !== undefined && Math.abs(y - lastY) > 4) {
      text += "\n";
    }
    text += item.str;
    if (item.hasEOL) text += "\n";
    if (y !== undefined) lastY = y;
  });

  return text;
}

async function extractTextWithPdfJs(buffer) {
  const pdfjsLib = globalThis.pdfjsLib;
  if (!pdfjsLib?.getDocument) {
    return { text: "", method: "unavailable" };
  }

  await configurePdfJsWorker();

  try {
    const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buffer.slice(0)) }).promise;
    const pageTexts = [];

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      pageTexts.push(extractPageTextFromPdfJsContent(content));
    }

    return {
      text: pageTexts.join("\n\n"),
      method: "pdfjs",
      pageCount: pdf.numPages,
    };
  } catch (error) {
    console.warn("[pdf.js] extraction failed:", error);
    return {
      text: "",
      method: "pdfjs_failed",
      error: error?.message || String(error),
    };
  }
}

function scoreMedicalPdfText(text) {
  const signals = countMedicalPdfSignals(text);
  return (
    signals.koreanCount
    + (signals.dateCount * 10)
    + (signals.codeCount * 8)
    + (signals.recordCount * 20)
    + (signals.medicationLogCount * 15)
    + (signals.datedMedicalLineCount * 12)
    + (signals.universeReport ? 30 : 0)
  );
}

function mergePdfExtractionTexts(...sources) {
  const texts = sources.map((text) => String(text ?? "").trim()).filter(Boolean);
  if (!texts.length) return "";
  if (texts.length === 1) return texts[0];

  const ranked = [...texts].sort((left, right) => scoreMedicalPdfText(right) - scoreMedicalPdfText(left));
  const best = ranked[0];
  if (hasUsableMedicalPdfText(best)) return best;

  const mergedLines = new Set();
  texts.forEach((text) => {
    text.split(/\n+/).map(normalizeUniverseText).filter(Boolean).forEach((line) => mergedLines.add(line));
  });
  return [...mergedLines].join("\n");
}

async function extractTextFromPdf(file) {
  const buffer = await readFileAsArrayBuffer(file);
  const pdfJsResult = await extractTextWithPdfJs(buffer.slice(0));
  const binaryText = extractReadableBinaryText(buffer.slice(0));
  const text = mergePdfExtractionTexts(pdfJsResult.text, binaryText);

  return {
    text,
    pdfKind: detectPdfKind(text),
    extractionMethod: hasUsableMedicalPdfText(pdfJsResult.text) ? "pdfjs" : "binary_fallback",
    pdfJsError: pdfJsResult.error || "",
  };
}

async function runPdfOcr(file, pdfKind) {
  return {
    text: "",
    confidence: 0,
    engine: "not_configured",
    fileName: file?.name || "",
    pdfKind,
  };
}

function assertOcrQuality(ocrResult) {
  if (!ocrResult.text || ocrResult.confidence < 45) {
    throw new Error("판독률이 낮습니다. 더 선명한 파일을 업로드해주세요.");
  }
}

function extractMedicalTables(parsedText) {
  const source = String(parsedText ?? "").replace(/\r/g, "\n");
  const lines = source.split(/\n+/).map(normalizeUniverseText).filter(Boolean);
  const mergedLines = [];

  lines.forEach((line) => {
    if (extractDateFromText(line) || !mergedLines.length) {
      mergedLines.push(line);
      return;
    }

    const previous = mergedLines[mergedLines.length - 1];
    if (extractDateFromText(previous) && (
      /\b[A-Z]\d{2,3}(?:\.\d+)?\b/.test(line)
      || /(병원|의원|약국|입원|외래|통원|처방|투약|진료비|질병|상병)/.test(line)
    )) {
      mergedLines[mergedLines.length - 1] = `${previous} ${line}`;
      return;
    }

    mergedLines.push(line);
  });

  const tableLikeRows = mergedLines.filter((line) => (
    extractDateFromText(line)
    || /(병원|의원|약국|입원|외래|통원|처방|투약|진료비)/.test(line)
  ));

  return {
    rows: tableLikeRows,
    rowCount: tableLikeRows.length,
    columns: ["진료일", "병원명", "약국명", "입원/외래", "질병코드", "질병명", "진료비", "처방 여부"],
  };
}

function extractMedicalRecordsFromTables(tableResult, parsedText) {
  const tableText = tableResult.rows.length ? tableResult.rows.join("\n") : parsedText;
  return extractMedicalRecords(tableText).filter((record) => record.date);
}

function normalizeMedicalJsonRecord(record) {
  return {
    date: record.visitDate || record.date || "",
    hospital: record.hospitalName || record.hospital || "",
    pharmacy: /약국/.test(record.hospitalName || record.hospital || record.raw || "") ? record.hospitalName || record.hospital || "" : "",
    code: record.diseaseCode || "",
    disease: record.rawDiseaseName || record.diseaseName || "",
    visitType: record.careType || "외래",
    medicine: Boolean(record.medication || record.prescriptionDays || /처방|투약|약국|약\s*복용/.test(record.raw || "")),
    hospitalization: record.careType === "입원" || (record.admissionDays || 0) >= 1,
    surgery: Boolean(record.surgeryName),
    surgeryName: record.surgeryName || "",
    admissionDays: record.admissionDays || 0,
    prescriptionDays: record.prescriptionDays || 0,
    rawLine: record.rawLine || record.raw || "",
  };
}

function normalizeMedicalJson(records) {
  return records.map(normalizeMedicalJsonRecord);
}

function validateMedicalRecordConsistency(record) {
  const hasDate = Boolean(record.date);
  const hasCode = Boolean(record.code);
  const hasDisease = Boolean(record.disease);
  const codeList = String(record.code || "").split(",").map((code) => code.trim()).filter(Boolean);
  const dbMatches = codeList.map(findDiseaseByCode).filter(Boolean);
  const hasDbDiseaseMatch = dbMatches.some((entry) => record.disease.includes(entry.officialName) || record.disease.includes(entry.displayName));
  const hasKnownCode = dbMatches.length > 0;

  if (!hasDate || (!hasCode && !hasDisease)) return { valid: false, reason: "날짜/질병정보 부족", status: "AI 확인 필요" };
  if (hasCode && !hasDisease && !hasKnownCode) return { valid: false, reason: "병명 없는 미등록 코드", status: "원문 확인 필요" };
  if (hasCode && hasDisease && hasKnownCode && !hasDbDiseaseMatch) return { valid: false, reason: "질병명/질병코드 불일치 가능", status: "AI 확인 필요" };
  return { valid: true, reason: "", status: "정상" };
}

function validateMedicalJsonRecords(records) {
  return records.map((record) => ({
    ...record,
    validation: validateMedicalRecordConsistency(record),
  }));
}

function buildMedicalHistoryAnalysisJson({ file, pdfKind, text, tableResult, records, normalizedRecords, groupedRecords, disclosureItems, outputText }) {
  return {
    schemaVersion: 1,
    source: {
      fileName: file.name,
      fileType: file.type || "application/pdf",
      analyzedAt: new Date().toISOString(),
      pdfKind,
    },
    extraction: {
      textLength: text.length,
      tableRowCount: tableResult.rowCount,
      columns: tableResult.columns,
    },
    normalizedRecords,
    diseaseGroups: (groupedRecords.groups || []).map((group) => {
      const dates = group.records.map((record) => record.date).filter(Boolean).sort();
      return {
        displayName: group.name,
        category: group.family,
        codes: [...new Set(group.records.flatMap(getPrimaryCodes))],
        firstDiagnosisDate: dates[0] || "",
        lastVisitDate: dates.at(-1) || "",
        totalVisitCount: new Set(dates).size,
        currentTreatment: group.records.some((record) => record.ongoing || record.chronic),
      };
    }),
    disclosure: {
      insurerSubmission: disclosureItems.mainItems || [],
      diseaseSummary: (groupedRecords.groups || []),
      needsReview: normalizedRecords.filter((record) => !record.validation.valid),
      excluded: disclosureItems.reviewItems || [],
    },
    outputText,
  };
}

async function analyzeMedicalHistoryPdf(file) {
  if (!isPdfFile(file)) {
    throw new Error("PDF 파일만 업로드해주세요.");
  }

  const extracted = await extractTextFromPdf(file);
  let parsedText = extracted.text;
  let pdfKind = extracted.pdfKind;
  console.log("[pdf extraction]", {
    method: extracted.extractionMethod,
    pdfJsError: extracted.pdfJsError,
    kind: pdfKind.kind,
    confidence: pdfKind.confidence,
  });
  console.log("[pdf raw text]", parsedText);

  if (hasUsableMedicalPdfText(parsedText)) {
    pdfKind = {
      ...pdfKind,
      kind: "text_pdf",
      extractionMethod: extracted.extractionMethod,
    };
  } else if (pdfKind.kind === "scanned_pdf") {
    const ocrResult = await runPdfOcr(file, pdfKind);
    if (hasUsableMedicalPdfText(ocrResult.text)) {
      parsedText = ocrResult.text;
      pdfKind = { ...pdfKind, kind: "scanned_pdf", ocrConfidence: ocrResult.confidence };
      console.log("[pdf raw text]", parsedText);
    } else {
      throw new Error("병력 PDF에서 텍스트를 읽지 못했습니다. 유니버스 병력분석 PDF인지 확인하거나 다시 다운로드해주세요.");
    }
  }

  const tableResult = extractMedicalTables(parsedText);
  const records = extractMedicalRecordsFromTables(tableResult, parsedText);
  const medicationLogs = extractMedicationLogRecords(parsedText);
  console.log("[extracted records]", records);
  console.log("[medication logs]", medicationLogs);
  if (!records.length && !medicationLogs.length && !hasUsableMedicalPdfText(parsedText)) {
    throw new Error("병력 PDF에서 진료 기록을 찾지 못했습니다. 유니버스 병력분석 PDF인지 확인해주세요.");
  }
  const normalizedJsonRecords = validateMedicalJsonRecords(normalizeMedicalJson(records));
  const normalizedRecords = records.map(normalizeDiseaseGroup);
  console.log("[normalized records]", normalizedRecords);
  const groupedRecords = mergeByDisplayName(normalizedRecords);
  const diseaseGroups = groupedRecords.groups || [];
  console.log("[valid disease groups]", diseaseGroups);
  const excludedCodes = groupedRecords.reviewItems || [];
  console.log("[excluded codes]", excludedCodes);
  const disclosureItems = detectDisclosureItems(groupedRecords, { records: normalizedRecords, medicationLogs });
  const outputText = formatUniverseDisclosureForCustomerCopy(disclosureItems);

  return buildMedicalHistoryAnalysisJson({
    file,
    pdfKind,
    text: parsedText,
    tableResult,
    records,
    normalizedRecords: normalizedJsonRecords,
    groupedRecords,
    disclosureItems,
    outputText,
  });
}

async function parseUniverseFile(file) {
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";

  if (["txt", "csv", "json"].includes(extension)) {
    const text = await readFileAsText(file);
    if (extension === "json") {
      try {
        return JSON.stringify(JSON.parse(text), null, 2);
      } catch {
        return text;
      }
    }
    return text;
  }

  if (["pdf", "xlsx"].includes(extension)) {
    const buffer = await readFileAsArrayBuffer(file);
    return extractReadableBinaryText(buffer);
  }

  throw new Error("unsupported file");
}

function normalizeUniverseText(value) {
  return String(value ?? "")
    .replace(/\r/g, "\n")
    .replace(/[|,;\t]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function extractDateFromText(text) {
  const value = String(text ?? "");
  const separated = value.match(/\b(19\d{2}|20\d{2})[.\-/년\s]+(0?[1-9]|1[0-2])[.\-/월\s]+(0?[1-9]|[12]\d|3[01])\b/);
  if (separated) {
    return `${separated[1]}-${String(separated[2]).padStart(2, "0")}-${String(separated[3]).padStart(2, "0")}`;
  }

  const compact = value.match(/\b(19\d{2}|20\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\b/);
  if (compact) {
    return `${compact[1]}-${compact[2]}-${compact[3]}`;
  }

  const short = value.match(/\b(\d{2})[.\-/](0?[1-9]|1[0-2])[.\-/](0?[1-9]|[12]\d|3[01])\b/);
  if (!short) return "";
  const yy = Number(short[1]);
  const year = yy > 40 ? `19${short[1]}` : `20${short[1]}`;
  return `${year}-${String(short[2]).padStart(2, "0")}-${String(short[3]).padStart(2, "0")}`;
}

function findFirstPattern(text, patterns) {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match?.[1]) return match[1].trim();
  }
  return "";
}

function extractPrescriptionDays(text) {
  const match = text.match(/(\d+)\s*(일분|일치|일\s*투약|days?|day|일)/i);
  return match ? Number(match[1]) : 0;
}

function extractAdmissionDays(text) {
  const beforeMatch = text.match(/(\d+)\s*(일\s*입원|입원\s*일수|병원\s*간\s*일수|입원일|박\s*\d+\s*일|일간\s*입원)/i);
  if (beforeMatch?.[1]) return Number(beforeMatch[1]);
  const afterMatch = text.match(/(입원|입원일수|병원\s*간\s*일수)\s*(\d+)\s*일/i);
  if (afterMatch?.[2]) return Number(afterMatch[2]);
  return /입원|퇴원|입퇴원/.test(text) ? 1 : 0;
}

function extractSurgeryName(text) {
  const line = String(text ?? "");
  const match = line.match(/([가-힣A-Za-z0-9\s]*(?:수술|절제|레이저|시술|봉합|절개|관절경)[가-힣A-Za-z0-9\s]*)/);
  if (match?.[1]) return match[1].trim();
  if (/반달연골|무릎관절|연골수술/.test(line)) return "반달연골(무릎관절) 수술";
  return "";
}

function normalizeDiseaseCode(code) {
  return String(code ?? "").replace(/[^A-Z0-9]/gi, "").toUpperCase();
}

function loadDiseaseCodeDb() {
  return Array.isArray(window.DISEASE_CODE_DB) ? window.DISEASE_CODE_DB : [];
}

function findDiseaseByCode(code) {
  const normalized = normalizeDiseaseCode(code);
  if (!normalized) return null;
  return loadDiseaseCodeDb().find((entry) => normalizeDiseaseCode(entry.code) === normalized) || null;
}

function findDiseaseByOfficialName(name) {
  const normalized = String(name ?? "").trim();
  if (!normalized) return null;
  return loadDiseaseCodeDb().find((entry) => normalized.includes(entry.officialName) || normalized.includes(entry.displayName)) || null;
}

function getDiseaseDbMatches(record) {
  return getDiseaseCodes(record)
    .map(findDiseaseByCode)
    .filter(Boolean);
}

function getPrimaryDiseaseDbMatch(record) {
  const matches = getDiseaseDbMatches(record);
  return matches.find((entry) => !entry.excluded && !entry.reviewOnly) || matches.find((entry) => !entry.excluded) || null;
}

function getCodeDescription(code) {
  const normalized = String(code ?? "").replace(/\./g, "").toUpperCase();
  const dbEntry = findDiseaseByCode(normalized);
  if (dbEntry) return dbEntry.officialName;
  const descriptions = [
    { pattern: /^N401?/, value: "전립선비대증 계열 코드" },
    { pattern: /^E780/, value: "순수 고콜레스테롤혈증" },
    { pattern: /^E785/, value: "고지질혈증" },
    { pattern: /^G470/, value: "불면증" },
    { pattern: /^F510/, value: "비기질성 불면증" },
    { pattern: /^I10/, value: "고혈압" },
    { pattern: /^E11/, value: "2형 당뇨병" },
    { pattern: /^K0531?/, value: "치주염" },
    { pattern: /^J06[09]?/, value: "감기/상기도감염 계열 코드" },
    { pattern: /^A41/, value: "패혈증 계열 코드" },
    { pattern: /^O/, value: "임신/출산 관련 코드" },
    { pattern: /^[VWXY]/, value: "사고 원인/외인 코드" },
    { pattern: /^U/, value: "특수목적 코드" },
    { pattern: /^Z/, value: "건강상태/검진/상담 코드" },
  ];
  return descriptions.find((entry) => entry.pattern.test(normalized))?.value || `${classifyCodeFamily(normalized)} 코드`;
}

function cleanRawDiseaseCandidate(value) {
  return String(value ?? "")
    .replace(/\b[A-Z]\d{2,3}(?:\.\d+)?\b/gi, " ")
    .replace(/(20\d{2}|19\d{2})[.\-/년\s]?(0?[1-9]|1[0-2])[.\-/월\s]?(0?[1-9]|[12]\d|3[01])/g, " ")
    .replace(/\d+\s*(일분|일치|일\s*투약|일\s*입원|일)/g, " ")
    .replace(/(병원|의원|약국|메디컬|클리닉|내과|외과|비뇨의학과|비뇨기과|정신건강의학과|이비인후과|정형외과|피부과|안과)/g, " ")
    .replace(/(검사|처방|투약|입원|퇴원|외래|통원|진료|수납|본인부담|급여|비급여)/g, " ")
    .replace(/[^\w가-힣\s/·-]/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function findKnownDiseaseName(text) {
  return findFirstPattern(text, [/(요로폐색을 동반한 전립선비대증|전립선비대증|전립선염|순수 고콜레스테롤혈증|고콜레스테롤혈증|고지질혈증|고지혈증|불면증|수면장애|후두염|기관염|인두염|감기|상기도감염|당뇨|고혈압|치주염|잇몸질환|반달연골|무릎관절|연골수술|위염|장염|비염|축농증|기관지염|방광염|요로결석|패혈증|상해|염좌|골절|타박상)/]);
}

function isCodeDescriptionLike(value) {
  return /계열\s*코드|관련\s*코드|외인\s*코드|특수목적\s*코드|상담\s*코드|검진\s*코드|대표질환\s*아님/.test(String(value ?? ""));
}

function extractRawDiseaseNameFromContext(line, nearbyLines, diseaseCodes) {
  const sameLineKnownName = findKnownDiseaseName(line);
  if (sameLineKnownName && !isCodeDescriptionLike(line)) return sameLineKnownName;
  const hasPrimaryDiseaseCode = diseaseCodes.some(isPrimaryDiseaseCode);
  if (diseaseCodes.length && !hasPrimaryDiseaseCode) return "";

  const context = [line, ...nearbyLines].filter(Boolean).join(" ");
  const knownName = findKnownDiseaseName(context);
  if (knownName && !isCodeDescriptionLike(context)) return knownName;

  for (const code of diseaseCodes) {
    const escapedCode = code.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const match = context.match(new RegExp(`(.{0,35})\\b${escapedCode}\\b(.{0,45})`, "i"));
    if (!match) continue;
    const after = cleanRawDiseaseCandidate(match[2]);
    const before = cleanRawDiseaseCandidate(match[1]);
    const candidate = [after, before].find((value) => /[가-힣]/.test(value) && value.length >= 2);
    if (candidate && !isCodeDescriptionLike(candidate)) return candidate.slice(0, 60);
  }

  return "";
}

function extractMedicalRecords(parsedText) {
  const source = String(parsedText ?? "").replace(/\r/g, "\n");
  const lines = source.split(/\n+/).map(normalizeUniverseText).filter(Boolean);
  const chunks = lines.length ? lines : normalizeUniverseText(source).split(/(?=20\d{2}[.\-/년])/).map(normalizeUniverseText).filter(Boolean);

  const records = chunks.map((line, index) => {
    const diseaseCodes = [...line.matchAll(/\b[A-Z]\d{2,3}(?:\.\d+)?\b/g)].map((match) => match[0].toUpperCase());
    const diseaseCode = diseaseCodes.join(", ");
    const nearbyLines = chunks.slice(Math.max(0, index - 3), index).concat(chunks.slice(index + 1, index + 4));
    const rawDiseaseName = extractRawDiseaseNameFromContext(line, nearbyLines, diseaseCodes);
    const codeDescription = diseaseCodes.map((code) => `${code}: ${getCodeDescription(code)}`).join(", ");
    const prescriptionDays = extractPrescriptionDays(line);
    const isAdmission = /입원|병동|퇴원/.test(line);
    const isSurgery = /수술|절제|레이저|시술|봉합|절개|관절경|반달연골|무릎관절/.test(line);
    const isTest = /검사|정밀|CT|MRI|초음파|내시경|조직검사|혈액검사|소변검사/i.test(line);
    const visitDate = extractDateFromText(line);
    const hospitalName = findFirstPattern(line, [/([가-힣A-Za-z0-9]+(?:병원|의원|약국|메디컬|클리닉))/]);

    return {
      raw: line,
      rawLine: line,
      nearbyLines,
      date: visitDate,
      visitDate,
      hospital: hospitalName,
      hospitalName,
      department: findFirstPattern(line, [/(내과|외과|비뇨의학과|비뇨기과|정신건강의학과|이비인후과|정형외과|피부과|안과|약국)/]),
      rawDiseaseName,
      diseaseName: rawDiseaseName || (!isCodeDescriptionLike(line) ? findKnownDiseaseName(line) : ""),
      diseaseCode,
      codeDescription,
      medication: findFirstPattern(line, [/(탐스로신|아보다트|리피토|크레스토|졸피뎀|리보트릴|항생제|소염진통제|혈압약|당뇨약|스타틴)/i]),
      prescriptionDays,
      testName: isTest ? findFirstPattern(line, [/(CT|MRI|초음파|내시경|조직검사|혈액검사|소변검사|정밀검사|검사)/i]) || "검사" : "",
      surgeryName: isSurgery ? extractSurgeryName(line) || line : "",
      careType: isAdmission ? "입원" : "외래",
      admissionDays: extractAdmissionDays(line),
      ongoing: /현재|지속|계속|복용중|치료중|추적|경과관찰/.test(line),
    };
  }).filter((record) => record.date || record.diseaseName || record.diseaseCode || record.medication || record.surgeryName || record.testName);

  records.forEach((record) => {
    const hasSameVisitKey = !!record.visitDate && !!record.hospitalName;
    const sibling = records.find((candidate) => (
      hasSameVisitKey
      && candidate !== record
      && candidate.rawDiseaseName
      && !isCodeDescriptionLike(candidate.rawDiseaseName)
      && candidate.visitDate === record.visitDate
      && candidate.hospitalName === record.hospitalName
    ));
    if (!record.rawDiseaseName && sibling) {
      record.rawDiseaseName = sibling.rawDiseaseName;
      record.diseaseName = record.diseaseName || sibling.rawDiseaseName;
    }

    const primarySibling = records.find((candidate) => (
      hasSameVisitKey
      && candidate !== record
      && getPrimaryCodes(candidate).length
      && candidate.visitDate === record.visitDate
      && candidate.hospitalName === record.hospitalName
    ));
    if (primarySibling && getExcludedCodes(record).length) {
      const linkedCode = getPrimaryCodes(primarySibling)[0];
      record.linkedDiseaseCode = linkedCode;
      record.linkedDiseaseName = !isCodeDescriptionLike(primarySibling.rawDiseaseName)
        ? primarySibling.rawDiseaseName
        : !isCodeDescriptionLike(primarySibling.diseaseName)
          ? primarySibling.diseaseName
          : "";
      if (record.linkedDiseaseName) {
        record.rawDiseaseName = record.rawDiseaseName || record.linkedDiseaseName;
      }
    }
  });

  return records;
}

function extractMedicationLogRecords(parsedText) {
  const source = String(parsedText ?? "").replace(/\r/g, "\n");
  const parts = source.split(/투약로그/i);
  if (parts.length < 2) return [];

  const section = parts[1].split(/(?:^|\n)(?:검사로그|진단로그|진료로그|--\s*\d+\s*of)/i)[0];
  const lines = section.split(/\n+/).map(normalizeUniverseText).filter(Boolean);
  const records = [];

  lines.forEach((line) => {
    if (/^약품명|^효능|^\(총\s*\d+일|^[가-힣A-Za-z]+ \(총\s*\d+일/.test(line)) return;

    const match = line.match(/^(.+?)\s+(\d{2,})\s*일\s*$/);
    if (!match) return;

    const days = Number(match[2]);
    if (days < 30) return;

    const body = match[1].trim();
    const drugMatch = body.match(/([가-힣A-Za-z0-9][가-힣A-Za-z0-9._\-]*(?:정|캡슐|시럽|연질캡슐|서방정|연조엑스)[^(]*(?:\([^)]+\))?)/);
    const drugName = drugMatch ? drugMatch[1].trim() : body;
    const efficacy = body.replace(drugName, "").trim();
    const disease = inferDiseaseFromMedicationLog({ efficacy, drugName, raw: body });

    records.push({
      efficacy,
      drugName,
      days,
      disease,
      raw: line,
    });
  });

  return records;
}

function inferDiseaseFromMedicationLog(log) {
  const group = classifyDiseaseGroup({
    rawDiseaseName: log.efficacy,
    diseaseName: log.efficacy,
    medication: log.drugName,
    raw: `${log.efficacy} ${log.drugName}`,
  });
  return hasValidRepresentativeName(group.name) ? group.name : log.efficacy || log.drugName;
}

function medicationLogMatchesGroup(group, log) {
  const groupName = String(group.name ?? "").trim();
  const logDisease = String(log.disease ?? "").trim();
  if (!groupName || !logDisease) return false;
  if (groupName === logDisease) return true;
  if (groupName.includes(logDisease) || logDisease.includes(groupName)) return true;

  const groupText = [groupName, ...(group.records || []).flatMap((record) => [record.rawDiseaseName, record.medication, record.raw])].join(" ");
  const logText = `${log.efficacy} ${log.drugName} ${log.disease}`;
  return classifyDiseaseGroup({ rawDiseaseName: groupText, raw: groupText }).name
    === classifyDiseaseGroup({ rawDiseaseName: logText, raw: logText }).name;
}

function getMedicationDaysForGroup(group, medicationLogs = []) {
  const prescriptionDays = (group.records || []).reduce((sum, record) => sum + (record.prescriptionDays || 0), 0);
  const logDays = (medicationLogs || [])
    .filter((log) => medicationLogMatchesGroup(group, log))
    .reduce((sum, log) => sum + log.days, 0);
  const topLog = (medicationLogs || [])
    .filter((log) => medicationLogMatchesGroup(group, log))
    .sort((left, right) => right.days - left.days)[0];

  return {
    days: Math.max(prescriptionDays, logDays),
    drugName: topLog?.drugName || "",
  };
}

function buildThreeMonthVisitItems(records = []) {
  const groups = new Map();

  records.forEach((record) => {
    if (!record.date || !isWithinMonths(record.date, 3)) return;
    if (shouldExcludeFromDisclosure(record)) return;

    const hospitalName = record.hospital || record.hospitalName || "";
    const isPharmacyOnly = /약국/.test(hospitalName) && !getPrimaryCodes(record).length && !record.rawDiseaseName;
    if (isPharmacyOnly) return;

    const group = classifyDiseaseGroup(record);
    if (!hasValidRepresentativeName(group.name)) return;

    const codes = getPrimaryCodes(record);
    const key = group.name;
    if (!groups.has(key)) {
      groups.set(key, {
        type: "recent_visit",
        bucket: "3개월 이내",
        disease: group.name,
        diseaseCodes: [],
        visits: [],
        hospitals: [],
        isExam: false,
        careType: "통원",
      });
    }

    const item = groups.get(key);
    if (!item.visits.includes(record.date)) item.visits.push(record.date);
    if (hospitalName) item.hospitals.push(hospitalName);
    item.diseaseCodes = [...new Set([...item.diseaseCodes, ...codes])];
    item.isExam = item.isExam || codes.some((code) => code.startsWith("Z")) || /검진|검사/.test(record.rawDiseaseName || record.diseaseName || "");
    item.careType = record.careType === "입원" ? "입원" : item.careType;
    item.firstDate = [...item.visits].sort()[0];
    item.lastDate = [...item.visits].sort().at(-1);
  });

  return [...groups.values()]
    .map((item) => ({
      ...item,
      visits: [...item.visits].sort(),
      confidence: "high",
      reasons: [item.isExam ? "검진/검사" : "병원 통원"],
    }))
    .sort((left, right) => String(left.firstDate).localeCompare(String(right.firstDate)));
}

function dedupeUniverseDisclosureItems(items) {
  const bucketOrder = { "3개월 이내": 0, "5년 이내": 1, "10년 이내": 2 };
  const seen = new Set();

  return items
    .filter((item) => {
      const key = [
        item.bucket,
        item.type,
        item.disease,
        item.surgeryDate || "",
        item.surgeryName || "",
        getDisclosureType(item),
      ].join("|");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((left, right) => {
      const bucketDiff = (bucketOrder[left.bucket] ?? 9) - (bucketOrder[right.bucket] ?? 9);
      if (bucketDiff !== 0) return bucketDiff;
      return String(left.firstDate || left.visitDate || left.surgeryDate || "").localeCompare(String(right.firstDate || right.visitDate || right.surgeryDate || ""));
    });
}

function getDiseaseCodes(record) {
  return String(record.diseaseCode ?? "")
    .split(",")
    .map((code) => code.trim().toUpperCase())
    .filter(Boolean);
}

function getCodeLetter(code) {
  return String(code ?? "").trim().toUpperCase().charAt(0);
}

function classifyCodeFamily(code) {
  const letter = getCodeLetter(code);
  if (["A", "B"].includes(letter)) return "감염성 질환 계열";
  if (["C", "D"].includes(letter)) return "종양/혈액질환 계열";
  if (letter === "E") return "내분비·대사질환 계열";
  if (["F", "G"].includes(letter)) return "정신·신경계 계열";
  if (letter === "I") return "순환기 계열";
  if (letter === "J") return "호흡기 계열";
  if (letter === "K") return "소화기 계열";
  if (letter === "M") return "근골격계 계열";
  if (letter === "N") return "비뇨생식기 계열";
  if (letter === "O") return "임신/출산 계열";
  if (letter === "R") return "증상/검사 이상 계열";
  if (["S", "T"].includes(letter)) return "손상/외상 계열";
  if (letter === "U") return "특수목적 코드";
  if (["V", "W", "X", "Y"].includes(letter)) return "외인 코드";
  if (letter === "Z") return "건강상태/검진/상담 코드";
  return "코드 확인 필요";
}

function isExternalCauseCode(code) {
  return ["V", "W", "X", "Y"].includes(getCodeLetter(code));
}

function isSpecialPurposeCode(code) {
  return getCodeLetter(code) === "U";
}

function isPregnancyRelatedCode(code) {
  return getCodeLetter(code) === "O";
}

function isPrimaryDiseaseCode(code) {
  const letter = getCodeLetter(code);
  return !!letter && !["O", "U", "V", "W", "X", "Y", "Z"].includes(letter);
}

function getPrimaryCodes(record) {
  return getDiseaseCodes(record).filter(isPrimaryDiseaseCode);
}

function getExcludedCodes(record) {
  return getDiseaseCodes(record).filter((code) => !isPrimaryDiseaseCode(code));
}

function hasClearDetailedTest(record) {
  const text = [record.testName, record.raw].join(" ");
  return hasValidTestName(record) && /정밀검사|추가검사|추가 검사|이상소견|이상 소견|재검|추적검사|의뢰|CT|MRI|초음파|내시경|심전도|조직검사|혈액\s*정밀|종양표지자/i.test(text);
}

function hasValidDiseaseName(record) {
  const disease = String(record.rawDiseaseName || record.diseaseName || record.disease || record.name || "").trim();
  if (disease && !/확인\s*필요|코드\s*없음|질병명\s*불명확/.test(disease)) return true;
  if (record.dbDisease && !record.dbDisease.excluded && !record.dbDisease.reviewOnly) return true;
  if (record.records?.some((item) => item.dbDisease && !item.dbDisease.excluded && !item.dbDisease.reviewOnly)) return true;

  const mappedCodePatterns = [
    /^N40[01]?/i,
    /^E78[05]?/i,
    /^G470/i,
    /^F510/i,
    /^I10/i,
    /^E11/i,
    /^K0531?/i,
    /^J06[09]?/i,
  ];
  const codes = record.records
    ? record.records.flatMap(getPrimaryCodes)
    : getPrimaryCodes(record);
  return codes.some((code) => mappedCodePatterns.some((pattern) => pattern.test(code)));
}

function hasValidRepresentativeName(value) {
  const name = String(value ?? "").trim();
  return !!name && !/확인\s*필요|코드\s*없음|질병명\s*불명확/.test(name);
}

function hasValidTestName(record) {
  const testName = String(record.testName || record.testNames?.join(" ") || "").trim();
  return !!testName && !/^검사$|검사\s*여부|확인\s*필요/i.test(testName);
}

function hasValidSurgeryName(record) {
  const surgeryName = String(record.surgeryName || "").trim();
  return !!surgeryName && !/^수술$|수술\s*여부|시술$|확인\s*필요/i.test(surgeryName);
}

function shouldExcludeFromDisclosure(record) {
  const codes = getDiseaseCodes(record);
  const primaryCodes = getPrimaryCodes(record);
  const dbMatches = getDiseaseDbMatches(record);
  if (dbMatches.length && dbMatches.every((entry) => entry.excluded || entry.reviewOnly)) return true;
  if (!codes.length) return false;
  if (codes.some(isPregnancyRelatedCode)) return true;
  if (!primaryCodes.length) return true;
  return false;
}

function getRecordReviewTitle(record, code) {
  if (isExternalCauseCode(code)) return "보조코드 제외";
  if (isSpecialPurposeCode(code)) return "특수코드 제외";
  if (getCodeLetter(code) === "Z") return "검진/상담코드 제외";
  if (isPregnancyRelatedCode(code)) return "임신/출산 코드 확인 필요";
  if (getCodeLetter(code) === "A" || getCodeLetter(code) === "B") return "감염성 코드 확인 필요";
  if (code) return "진단명 부족 항목";
  return "진단명 부족 항목";
}

function getRecordReviewReason(record, code) {
  if (isExternalCauseCode(code)) return "사고 원인/외인 코드로 대표질환 아님";
  if (isSpecialPurposeCode(code)) return "특수목적 코드로 대표질환 아님";
  if (getCodeLetter(code) === "Z") return "검진/상담 코드로 대표질환 아님";
  if (isPregnancyRelatedCode(code)) return "임신/출산 계열 코드로 고객 성별/상황 확인 필요";
  if (getCodeLetter(code) === "A" || getCodeLetter(code) === "B") return "진단명 없이 코드만 있어 본문 제외";
  if (record.testName && !hasValidTestName(record)) return "검사명/진단명 없음";
  return "진단명 또는 대표질환명 부족";
}

function splitUncertainRecordsByCodeFamily(records) {
  return records.flatMap((record) => {
    const codes = getDiseaseCodes(record);
    const targets = codes.length ? codes : [""];
    return targets.map((code) => ({
      title: getRecordReviewTitle(record, code),
      code: code || record.diseaseName || "확인 필요",
      rawDiseaseName: record.rawDiseaseName || "원문 병명 없음",
      diseaseCode: code || "질병코드 없음",
      codeDescription: code ? getCodeDescription(code) : "코드 설명 없음",
      diseaseGroup: isExternalCauseCode(code) || isSpecialPurposeCode(code) || getCodeLetter(code) === "Z"
        ? record.linkedDiseaseName ? `보조코드 - 동반 진단 후보: ${record.linkedDiseaseName}` : "대표질환 아님"
        : isPregnancyRelatedCode(code)
          ? "임신/출산 계열 확인 필요"
          : getCodeLetter(code) === "A" || getCodeLetter(code) === "B"
            ? "감염성 질환 확인 필요"
            : record.diseaseName || "원문 병명 확인 필요",
      date: record.date || "확인 필요",
      reason: getRecordReviewReason(record, code),
      action: isExternalCauseCode(code)
        ? "실제 진단명에 보조메모로만 사용"
        : isSpecialPurposeCode(code) || getCodeLetter(code) === "Z"
          ? "본문 출력 제외"
          : isPregnancyRelatedCode(code)
            ? "고객 성별/상황 및 실제 원문 확인 필요"
            : "실제 진단명, 입원, 투약, 치료일수 확인 필요",
      confirmedInfo: record.testName && !hasValidTestName(record) ? "검사 여부만 있음" : [record.diseaseName, record.testName, record.medication, record.surgeryName].filter(Boolean).join(", ") || "확인 필요",
      checkNeeded: record.testName ? "검사명, 결과, 관련 진단명" : "원문 진단명 필요",
    }));
  });
}

function classifyDiseaseGroup(record) {
  const normalizedRecord = normalizeDiseaseGroup(record);
  if (normalizedRecord.dbDisease && normalizedRecord.diseaseGroup) {
    return {
      name: normalizedRecord.diseaseGroup,
      family: normalizedRecord.dbDisease.category || "질병코드 DB",
      confidence: "high",
      dbDisease: normalizedRecord.dbDisease,
    };
  }

  const primaryCodes = getPrimaryCodes(record);
  const family = primaryCodes[0] ? classifyCodeFamily(primaryCodes[0]) : "코드 없음";
  const text = [record.rawDiseaseName, record.diseaseName, record.codeDescription, primaryCodes.join(" "), record.medication, record.surgeryName, record.testName, record.department, record.hospital, record.raw].join(" ");

  const rules = [
    { name: "전립선비대증/전립선염", family: "비뇨생식기 계열", patterns: [/N40[01]?/i, /전립선비대|전립선염/, /탐스로신|아보다트|홀뮴|전립선.*레이저/] },
    { name: "고지혈증", family: "내분비·대사질환 계열", patterns: [/E78[05]?/i, /고콜레스테롤|고지질|고지혈/, /리피토|크레스토|스타틴/i] },
    { name: "불면증", family: "정신·신경계 계열", patterns: [/G470|F510/i, /불면|수면장애/, /졸피뎀|리보트릴/i] },
    { name: "감기/상기도감염", family: "호흡기 계열", patterns: [/J04[2]?|J06[0]?/i, /후두염|기관염|인두염|감기|상기도/] },
    { name: "고혈압", family: "순환기 계열", patterns: [/I10/i, /고혈압|혈압약/] },
    { name: "당뇨", family: "내분비·대사질환 계열", patterns: [/E1[0-4]/i, /당뇨|당뇨약|메트포르민/] },
    { name: "치주염", family: "소화기 계열", patterns: [/K0531?/i, /치주염|잇몸질환/] },
    { name: "반달연골(무릎관절) 수술", family: "근골격계 계열", patterns: [/반달연골|무릎관절|관절경|연골수술|연골.*수술/] },
  ];

  for (const rule of rules) {
    if (rule.patterns.some((pattern) => pattern.test(text))) {
      return { name: rule.name, family: primaryCodes.length ? family : rule.family, confidence: "high" };
    }
  }

  if (record.rawDiseaseName || record.diseaseName) return { name: record.rawDiseaseName || record.diseaseName, family, confidence: "medium" };
  if (record.medication) return { name: `${record.medication} 처방약 기준 추정`, family: primaryCodes.length ? family : "처방약 기준 추정", confidence: "low" };
  if (primaryCodes.length) return { name: `확인 필요 - ${family}(${primaryCodes.join(", ")})`, family, confidence: "low" };
  return { name: "확인 필요 - 코드 없음", family, confidence: "low" };
}

function validateDisclosureGroup(group) {
  const families = new Set(group.records.flatMap(getPrimaryCodes).map(classifyCodeFamily));
  return families.size <= 1;
}

function normalizeDiseaseGroup(record) {
  const dbMatches = getDiseaseDbMatches(record);
  const primaryDb = getPrimaryDiseaseDbMatch(record);
  const nameDb = primaryDb ? null : findDiseaseByOfficialName(record.rawDiseaseName || record.diseaseName);
  const dbDisease = primaryDb || nameDb;
  const codeDescriptions = getDiseaseCodes(record).map((code) => {
    const dbEntry = findDiseaseByCode(code);
    return dbEntry ? `${code}: ${dbEntry.officialName}` : `${code}: ${getCodeDescription(code)}`;
  });

  return {
    ...record,
    dbMatches,
    dbDisease,
    officialName: dbDisease?.officialName || record.rawDiseaseName || record.diseaseName || "",
    diseaseGroup: dbDisease?.displayName || record.rawDiseaseName || record.diseaseName || "",
    codeDescription: codeDescriptions.join(", ") || record.codeDescription || "",
    defaultVisitType: dbDisease?.defaultVisitType || record.careType || "통원",
    defaultDisclosureGroup: dbDisease?.disclosureGroup || "",
    chronic: !!dbDisease?.chronic,
  };
}

function mergeDiseaseRecords(records) {
  const groups = new Map();
  const reviewItems = [];

  records.forEach((record) => {
    const excludedCodes = getExcludedCodes(record);
    if (excludedCodes.length) {
      reviewItems.push(...splitUncertainRecordsByCodeFamily([{ ...record, diseaseCode: excludedCodes.join(", ") }]));
    }
    if (shouldExcludeFromDisclosure(record)) return;

    const group = classifyDiseaseGroup(record);
    const key = `${group.family}|${group.name}`;
    if (!groups.has(key)) {
      groups.set(key, { name: group.name, family: group.family, confidence: group.confidence, records: [] });
    }
    groups.get(key).records.push(record);
  });

  const validGroups = [];
  groups.forEach((group) => {
    if (validateDisclosureGroup(group)) {
      validGroups.push(group);
      return;
    }
    reviewItems.push(...splitUncertainRecordsByCodeFamily(group.records));
  });

  return { groups: validGroups, reviewItems };
}

function mergeByDisplayName(records) {
  const normalizedRecords = records.map(normalizeDiseaseGroup);
  const groups = new Map();
  const reviewItems = [];

  normalizedRecords.forEach((record) => {
    const excludedCodes = getExcludedCodes(record);
    const allDbReviewOnly = record.dbMatches?.length && record.dbMatches.every((entry) => entry.excluded || entry.reviewOnly);

    if (excludedCodes.length || allDbReviewOnly) {
      reviewItems.push(...splitUncertainRecordsByCodeFamily([{ ...record, diseaseCode: (excludedCodes.length ? excludedCodes : getDiseaseCodes(record)).join(", ") }]));
    }

    if (shouldExcludeFromDisclosure(record)) return;

    const group = classifyDiseaseGroup(record);
    if (!hasValidRepresentativeName(group.name)) {
      reviewItems.push(...splitUncertainRecordsByCodeFamily([record]));
      return;
    }

    const key = record.dbDisease ? `db|${record.dbDisease.displayName}` : `${group.family}|${group.name}`;
    if (!groups.has(key)) {
      groups.set(key, {
        name: record.dbDisease?.displayName || group.name,
        family: record.dbDisease?.category || group.family,
        confidence: record.dbDisease ? "high" : group.confidence,
        dbDisease: record.dbDisease || group.dbDisease || null,
        records: [],
      });
    }
    groups.get(key).records.push(record);
  });

  return { groups: [...groups.values()], reviewItems };
}

function generateDisclosureSummaryByDiseaseDb(groupedRecords) {
  return detectDisclosureItems(groupedRecords);
}

function classifySurgeryType(record) {
  if (!record.surgeryName) return "none";
  if ((record.admissionDays || 0) >= 1) return "inpatient_surgery";
  if (record.careType === "입원" || /입원|퇴원|입퇴원|입원일수|병원\s*간\s*일수/.test(record.raw)) return "inpatient_surgery";
  if (/외래|통원|당일/.test(record.raw) || record.careType === "외래") return "outpatient_surgery";
  return "surgery_unknown";
}

function getBucketByDate(date) {
  const today = new Date();
  const fiveYearsAgo = new Date(today);
  fiveYearsAgo.setFullYear(today.getFullYear() - 5);
  const dateObj = date ? new Date(date) : null;
  return dateObj && dateObj < fiveYearsAgo ? "10년 이내" : "5년 이내";
}

function isWithinMonths(date, months) {
  if (!date) return false;
  const today = new Date();
  const threshold = new Date(today);
  threshold.setMonth(today.getMonth() - months);
  const dateObj = new Date(date);
  return !Number.isNaN(dateObj.getTime()) && dateObj >= threshold && dateObj <= today;
}

function getHistoryBucketByFirstDate(date) {
  const today = new Date();
  const fiveYearsAgo = new Date(today);
  fiveYearsAgo.setFullYear(today.getFullYear() - 5);
  const dateObj = date ? new Date(date) : null;
  return dateObj && dateObj < fiveYearsAgo ? "10년 이내" : "5년 이내";
}

function getPrimaryDisclosureCode(item) {
  if (Array.isArray(item.diseaseCodes) && item.diseaseCodes.length) return item.diseaseCodes[0];
  if (item.diseaseCode && item.diseaseCode !== "질병코드 없음") return item.diseaseCode.split(",")[0].trim();
  return "";
}

function getDisclosureTitleDisease(item) {
  const code = getPrimaryDisclosureCode(item);
  return `${item.disease}${code ? ` (${code})` : ""}`;
}

function getDisclosureType(item) {
  if (item.type === "surgery") return item.surgeryLabel;
  if (item.type === "recent_visit") return item.isExam ? "검진/검사" : "병원 통원";

  const types = [];
  if (item.hasAdmission) types.push("입원");
  if (item.hasSurgery) types.push("수술");
  if (item.hasLongMedication || item.defaultDisclosureGroup === "30일 이상 투약" || (item.medicationDays || 0) >= 30) types.push("30일 이상 투약");
  if (item.hasLongTreatment || (item.visitDays || 0) >= 7) types.push("7일 이상 치료");
  if (types.length) return types.join(" / ");
  if (/지속치료|약 복용/.test(item.status || "")) return "지속치료";
  return item.reasons?.[0] || "고지 확인";
}

function getTreatmentStatus(item) {
  if (/지속치료|약 복용/.test(item.status || "")) return "치료중";
  if (item.type === "surgery") return item.treatmentStatus || "확인 필요";
  return item.status || "확인 필요";
}

function getCareTypeLabel(item) {
  if (item.type === "surgery") return item.surgeryLabel === "통원수술" ? "통원" : "입원";
  return item.hasAdmission ? "입원" : item.defaultVisitType || "통원";
}

function makeRecentDisclosureItem(item) {
  if (item.type !== "medical") return null;
  if (!isWithinMonths(item.lastDate, 3)) return null;
  if (!item.hasLongMedication && !item.hasLongTreatment && !/지속치료|약 복용/.test(item.status || "")) return null;
  return {
    ...item,
    bucket: "3개월 이내",
    recentDate: item.lastDate,
    recentOnly: true,
  };
}

function getMedicationConfirmationDiseases(mainItems) {
  return [...new Set(mainItems
    .filter((item) => item.type === "medical" && (item.hasLongMedication || /약 복용|지속치료/.test(item.status || "")))
    .map((item) => item.disease)
    .filter(hasValidRepresentativeName))];
}

function formatReviewSummary(item) {
  const code = item.diseaseCode && item.diseaseCode !== "질병코드 없음" ? item.diseaseCode : item.code || "코드 없음";
  const rawName = item.rawDiseaseName || "원문 병명 없음";
  const description = item.codeDescription || item.reason || "확인 필요";
  if (/보조코드|외인/.test(item.title || "")) return `* ${code}: 외인코드 / 대표질환 아님`;
  if (/특수/.test(item.title || "")) return `* ${code}: 특수목적 코드 / 본문 제외`;
  if (/임신|출산/.test(item.title || "")) return `* ${code}: ${rawName} / 임신·출산 계열 코드`;
  if (/감염성/.test(item.title || "") || /^[AB]/.test(code)) return `* ${code}: ${rawName} / 감염성 질환 확인 필요`;
  return `* ${code}: ${rawName} / ${description}`;
}

function shouldOutputToDisclosureMain(group) {
  if (group.confidence === "low") return false;
  if (!hasValidRepresentativeName(group.name) || !hasValidDiseaseName(group)) return false;

  const dates = group.records.map((record) => record.date).filter(Boolean);
  const visitCount = new Set(dates).size;
  const prescriptionDays = group.records.reduce((sum, record) => sum + (record.prescriptionDays || 0), 0);
  const hasAdmission = group.records.some((record) => record.careType === "입원" || (record.admissionDays || 0) >= 1);
  const hasSurgery = group.records.some(hasValidSurgeryName);
  const hasDbSurgery = /수술/.test(group.dbDisease?.disclosureGroup || "");
  const hasDetailedTest = group.records.some(hasClearDetailedTest);
  const ongoing = group.records.some((record) => record.ongoing);
  const majorDisease = /암|종양|뇌|심장|당뇨|고혈압|고지혈|전립선비대|불면|정신|신경|순환기/.test(group.name);

  return prescriptionDays >= 30 || visitCount >= 7 || hasAdmission || hasSurgery || hasDbSurgery || hasDetailedTest || ongoing || majorDisease;
}

function buildReviewFromGroup(group) {
  const dates = group.records.map((record) => record.date).filter(Boolean).sort();
  const primaryCodes = [...new Set(group.records.flatMap(getPrimaryCodes))];
  const rawDiseaseNames = [...new Set(group.records.map((record) => record.rawDiseaseName).filter(Boolean))];
  const codeDescriptions = [...new Set(primaryCodes.map(getCodeDescription))];
  const firstCode = primaryCodes[0] || "";
  const isInfectiousCodeOnly = ["A", "B"].includes(getCodeLetter(firstCode)) && !rawDiseaseNames.length;
  return {
    title: isInfectiousCodeOnly ? "감염성 질환 확인 필요" : "단기진료 확인 필요",
    code: [group.name, primaryCodes.join(", ")].filter(Boolean).join(" / ") || "확인 필요",
    rawDiseaseName: rawDiseaseNames.join(", ") || "원문 병명 없음",
    diseaseCode: primaryCodes.join(", ") || "질병코드 없음",
    codeDescription: codeDescriptions.join(", ") || "코드 설명 없음",
    diseaseGroup: isInfectiousCodeOnly ? "감염성 질환 확인 필요" : hasValidRepresentativeName(group.name) ? group.name : "원문 병명 확인 필요",
    date: dates[0] || "확인 필요",
    reason: isInfectiousCodeOnly ? "진단명 없이 코드만 있어 본문 제외" : hasValidRepresentativeName(group.name) ? "고지 조건 부족" : "검사명/진단명 없음",
    action: isInfectiousCodeOnly ? "실제 진단명, 입원, 투약, 치료일수 확인 필요" : hasValidRepresentativeName(group.name) ? "입원, 7일 이상 치료, 30일 이상 투약 여부 확인" : "검사명, 결과, 관련 진단명",
    confirmedInfo: group.records.some((record) => record.testName) ? "검사 여부만 있음" : rawDiseaseNames.join(", ") || primaryCodes.join(", ") || "확인 필요",
  };
}

function buildInvalidDisclosureReview(item) {
  const isTestOnly = item.hasTest || item.reasons?.some((reason) => /검사/.test(reason));
  return {
    title: isTestOnly ? "진단명 부족 항목" : "분류 확인 필요",
    code: item.diseaseNames?.join(", ") || item.diseaseCode || item.disease || "확인 필요",
    rawDiseaseName: item.rawDiseaseNames?.join(", ") || item.rawDiseaseName || "원문 병명 없음",
    diseaseCode: item.diseaseCodes?.join(", ") || item.diseaseCode || "질병코드 없음",
    codeDescription: item.codeDescriptions?.join(", ") || item.codeDescription || "코드 설명 없음",
    diseaseGroup: hasValidRepresentativeName(item.disease) ? item.disease : "원문 병명 확인 필요",
    date: item.firstDate || item.surgeryDate || "확인 필요",
    reason: isTestOnly ? "검사명/진단명 없음" : "진단명 또는 고지 조건 부족",
    action: isTestOnly ? "검사명, 결과, 관련 진단명" : "원문 진단명 필요",
    confirmedInfo: isTestOnly ? "검사 여부만 있음" : item.reasons?.join(", ") || "확인 필요",
  };
}

function canOutputAsDisclosureMain(item) {
  if (!hasValidRepresentativeName(item.disease)) return false;
  if (item.confidence === "low") return false;
  if (!item.reasons?.length) return false;

  if (item.type === "surgery") {
    return hasValidSurgeryName(item) && !!item.surgeryDate && item.surgeryDate !== "확인 필요";
  }

  if (item.hasTest || item.reasons.some((reason) => /검사/.test(reason))) {
    return hasValidTestName(item) && !!item.firstDate && item.firstDate !== "확인 필요" && hasValidRepresentativeName(item.disease);
  }

  if (item.hasAdmission && !item.admissionDays) return false;
  if (item.hasLongMedication) return (item.prescriptionDays || 0) >= 30 || (item.medicationDays || 0) >= 30 || item.diseaseNames?.length;
  if (item.hasLongTreatment) return !!item.firstDate && !!item.lastDate && item.firstDate !== "확인 필요" && item.lastDate !== "확인 필요";
  if (item.type === "recent_visit") return !!item.visits?.length;
  return item.reasons.some((reason) => /입원|수술|30일|7일|검진|검사|병원/.test(reason)) && hasValidRepresentativeName(item.disease);
}

function moveInvalidItemsToReview(items) {
  const mainItems = [];
  const reviewItems = [];

  items.forEach((item) => {
    if (canOutputAsDisclosureMain(item)) {
      mainItems.push(item);
      return;
    }
    reviewItems.push(buildInvalidDisclosureReview(item));
  });

  return { mainItems, reviewItems };
}

function removeEmptyOrUnknownDisclosureItems(items) {
  return items.filter((item) => {
    if (!item) return false;
    if (!hasValidRepresentativeName(item.disease)) return false;
    if (item.diseaseNames?.length && item.diseaseNames.every((name) => /확인\s*필요/.test(name))) return false;
    return true;
  });
}

function detectDisclosureItems(groupedRecords, options = {}) {
  const { records = [], medicationLogs = [] } = options;
  const mainItems = [];
  const reviewItems = [...(groupedRecords.reviewItems || [])];

  (groupedRecords.groups || []).forEach((group) => {
    const dates = group.records.map((record) => record.date).filter(Boolean).sort();
    const hospitalVisitDates = new Set(dates);
    const hasAdmission = group.records.some((record) => record.careType === "입원" || (record.admissionDays || 0) >= 1);
    const hasSurgery = group.records.some(hasValidSurgeryName);
    const dbSurgeryGroup = /수술/.test(group.dbDisease?.disclosureGroup || "");
    const medicationInfo = getMedicationDaysForGroup(group, medicationLogs);
    const dbLongMedication = group.dbDisease?.disclosureGroup === "30일 이상 투약" && group.dbDisease?.chronic;
    const reasons = [];

    if (medicationInfo.days >= 30 || dbLongMedication) reasons.push("30일 이상 투약");
    if (hospitalVisitDates.size >= 7) reasons.push("7일 이상 치료");
    if (hasAdmission) reasons.push("입원");
    if (hasSurgery || dbSurgeryGroup) reasons.push("수술");

    if (!reasons.length) {
      reviewItems.push(buildReviewFromGroup(group));
      return;
    }

    const lastDate = dates.at(-1) || "";
    const period = dates.length >= 2 ? `${dates[0]} ~ ${lastDate}` : (dates[0] || "확인 필요");
    const ongoing = group.records.some((record) => record.ongoing) || group.dbDisease?.chronic;

    if (!dbSurgeryGroup || reasons.some((reason) => reason !== "수술")) {
      mainItems.push({
        type: "medical",
        bucket: getHistoryBucketByFirstDate(dates[0]),
        disease: group.name,
        confidence: group.confidence,
        rawDiseaseNames: [...new Set(group.records.map((record) => record.rawDiseaseName).filter(Boolean))],
        diseaseCodes: [...new Set(group.records.flatMap(getPrimaryCodes))],
        codeDescriptions: [...new Set(group.records.flatMap(getPrimaryCodes).map(getCodeDescription))],
        diseaseNames: [...new Set(group.records.flatMap((record) => [record.rawDiseaseName, record.diseaseName, ...getPrimaryCodes(record)].filter(Boolean)))],
        firstDate: dates[0] || "확인 필요",
        lastDate: lastDate || "확인 필요",
        period,
        prescriptionDays: group.records.reduce((sum, record) => sum + (record.prescriptionDays || 0), 0),
        medicationDays: medicationInfo.days,
        medicationName: medicationInfo.drugName,
        hasLongMedication: medicationInfo.days >= 30 || dbLongMedication,
        hasLongTreatment: hospitalVisitDates.size >= 7,
        hasAdmission,
        hasSurgery,
        hasTest: group.records.some(hasClearDetailedTest),
        testName: [...new Set(group.records.map((record) => record.testName).filter(hasValidRepresentativeName))].join(", "),
        testNames: [...new Set(group.records.map((record) => record.testName).filter(hasValidRepresentativeName))],
        admissionDays: group.records.reduce((sum, record) => sum + (record.admissionDays || 0), 0),
        visitDays: hospitalVisitDates.size,
        defaultDisclosureGroup: group.dbDisease?.disclosureGroup || "",
        defaultVisitType: group.dbDisease?.defaultVisitType || "",
        status: ongoing || medicationInfo.days >= 30 ? "지속치료 / 약 복용 중" : "확인 필요",
        reasons,
      });
    }

    const surgeryRecords = group.records.filter(hasValidSurgeryName);
    if (!surgeryRecords.length && dbSurgeryGroup && group.records.length) {
      surgeryRecords.push({
        ...group.records[0],
        surgeryName: group.records[0].surgeryName || group.records[0].rawDiseaseName || group.dbDisease?.displayName || group.name,
        admissionDays: group.records[0].admissionDays || (group.dbDisease?.defaultVisitType === "입원" ? 1 : 0),
        careType: group.records[0].careType || group.dbDisease?.defaultVisitType || "확인 필요",
      });
    }

    surgeryRecords.forEach((record) => {
      const surgeryType = classifySurgeryType(record);
      const surgeryLabel = surgeryType === "inpatient_surgery"
        ? "입원수술"
        : surgeryType === "outpatient_surgery"
          ? "통원수술"
          : "수술유형 확인 필요";
      mainItems.push({
        type: "surgery",
        bucket: isWithinMonths(record.date || dates[0], 3) ? "3개월 이내" : getHistoryBucketByFirstDate(record.date || dates[0]),
        disease: group.name,
        surgeryLabel,
        surgeryDate: record.date || "확인 필요",
        firstDate: dates[0] || record.date || "확인 필요",
        surgeryName: record.surgeryName,
        rawDiseaseName: record.rawDiseaseName || "원문 병명 없음",
        diseaseCode: getPrimaryCodes(record).join(", ") || "질병코드 없음",
        codeDescription: getPrimaryCodes(record).map(getCodeDescription).join(", ") || "코드 설명 없음",
        admissionDays: (record.admissionDays || 0) >= 1 ? `${record.admissionDays}일` : surgeryType === "outpatient_surgery" ? "없음" : "확인 필요",
        hospitalDays: (record.admissionDays || 0) >= 1 ? `${record.admissionDays}일` : surgeryType === "outpatient_surgery" ? "없음" : "확인 필요",
        treatmentStatus: record.ongoing ? "지속치료" : surgeryType === "outpatient_surgery" ? "통원치료" : "확인 필요",
        status: record.ongoing ? "수술 후 지속치료 / 약 복용 중" : "완치 또는 지속치료 확인 필요",
        reasons: [surgeryLabel],
      });
    });
  });

  const moved = moveInvalidItemsToReview(mainItems);
  const threeMonthItems = buildThreeMonthVisitItems(records);
  return {
    mainItems: dedupeUniverseDisclosureItems(removeEmptyOrUnknownDisclosureItems([...threeMonthItems, ...moved.mainItems])),
    reviewItems: [...reviewItems, ...moved.reviewItems],
  };
}

function formatUniverseDisclosureForCustomerCopy(disclosureItems) {
  const mainItems = disclosureItems.mainItems || [];
  const buckets = ["3개월 이내", "5년 이내", "10년 이내"];
  const lines = [];

  buckets.forEach((bucket) => {
    const items = mainItems.filter((item) => item.bucket === bucket);
    lines.push(`[${bucket}]`);

    if (!items.length) {
      lines.push("고지사항 없음");
      lines.push("");
      return;
    }

    items.forEach((item, index) => {
      if (item.type === "recent_visit") {
        lines.push("", `${index + 1}. ${getDisclosureTitleDisease(item)}`, "");
        item.visits.forEach((visitDate) => lines.push(`* ${visitDate}`));
        if (item.isExam) lines.push("* 검진/검사");
        lines.push(`* ${item.careType || "통원"}`);
        if (item.hospitals?.length) {
          lines.push(`* ${[...new Set(item.hospitals)].join(" / ")}`);
        }
        return;
      }

      if (item.type === "surgery") {
        lines.push("", `${index + 1}. ${item.surgeryLabel} - ${item.disease}`, "");
        lines.push(`* ${item.surgeryDate}`);
        if (item.firstDate) lines.push(`* 최초 내원일: ${item.firstDate}`);
        if (item.surgeryName) lines.push(`* 수술명: ${item.surgeryName}`);
        if (item.admissionDays) lines.push(`* 입원일수: ${item.admissionDays}`);
        lines.push(`* 고지 구분: ${item.surgeryLabel}`);
        return;
      }

      const disclosureType = getDisclosureType(item);
      lines.push("", `${index + 1}. ${disclosureType} - ${item.disease}`, "");
      if (item.firstDate) lines.push(`* ${item.firstDate}`);
      if (item.firstDate) lines.push(`* 최초 내원일: ${item.firstDate}`);
      if (item.lastDate && item.lastDate !== item.firstDate) lines.push(`* 최종 내원일: ${item.lastDate}`);
      if (item.visitDays >= 7) lines.push(`* 병원 간 일수: ${item.visitDays}일`);
      if (item.medicationDays >= 30) {
        const medicationDetail = [item.medicationName, `${item.medicationDays}일 투약`].filter(Boolean).join(" / ");
        lines.push(`* 약물복용: ${medicationDetail}`);
      }
      lines.push(`* ${/지속치료|약 복용/.test(item.status || "") ? "지속치료" : getTreatmentStatus(item)}`);
      lines.push(`* 고지 구분: ${disclosureType}`);
    });

    lines.push("");
  });

  return lines.join("\n").trim();
}

function formatDisclosureSummary(disclosureItems) {
  const mainItems = disclosureItems.mainItems || [];
  const reviewItems = disclosureItems.reviewItems || [];
  const medicationDiseases = getMedicationConfirmationDiseases(mainItems);
  const lines = [`약물복용 확인: ${medicationDiseases.length ? medicationDiseases.join(", ") : "해당 없음"}`, ""];
  const buckets = ["3개월 이내", "5년 이내", "10년 이내"];

  if (!mainItems.length) {
    lines.push("고지대상 본문 자동 추출 없음", "");
  }

  buckets.forEach((bucket) => {
    const items = mainItems.filter((item) => item.bucket === bucket);
    if (!items.length) return;
    lines.push(`[${bucket}]`, "");

    items.forEach((item, index) => {
      if (item.type === "surgery") {
        lines.push(`${index + 1}. ${item.surgeryLabel} - ${item.disease}`);
        lines.push(`- 수술일: ${item.surgeryDate}`);
        lines.push(`- 최초 내원일: ${item.firstDate || "확인 필요"}`);
        lines.push(`- 수술명: ${item.surgeryName}`);
        lines.push(`- 입원일수: ${item.admissionDays}`);
        lines.push(`- 치료상태: ${item.treatmentStatus}`);
        lines.push(`- 현재상태: ${item.status}`);
        lines.push(`- 고지 구분: ${item.surgeryLabel}`);
        lines.push("");
        return;
      }

      const disclosureType = getDisclosureType(item);
      if (bucket === "3개월 이내") {
        lines.push(`${index + 1}. ${getDisclosureTitleDisease(item)}`);
        lines.push(`- 최근 진료일: ${item.recentDate || item.lastDate || item.firstDate}`);
        lines.push(`- 치료상태: ${getTreatmentStatus(item)}`);
        lines.push(`- 고지 구분: ${disclosureType}`);
        lines.push(`- 진료형태: ${getCareTypeLabel(item)}`);
        lines.push("");
        return;
      }

      lines.push(`${index + 1}. ${disclosureType} - ${item.disease}`);
      lines.push(`- 최초 내원일: ${item.firstDate}`);
      if (bucket === "5년 이내") lines.push(`- 마지막 내원일: ${item.lastDate}`);
      lines.push(`- 치료상태: ${/지속치료|약 복용/.test(item.status || "") ? "지속치료" : getTreatmentStatus(item)}`);
      if (item.hasLongMedication) {
        lines.push(`- 상세: 최초 내원일 이후 반복 처방 또는 30일 이상 약 처방 기록`);
      }
      lines.push(`- 현재상태: ${getTreatmentStatus(item)}`);
      lines.push(`- 고지 구분: ${disclosureType}`);
      lines.push("");
    });
  });

  if (reviewItems.length) {
    lines.push("[자동 제외 또는 검토 필요]", "");
    const shortReviewLines = [...new Set(reviewItems.map(formatReviewSummary))];
    lines.push(...shortReviewLines, "");
  }

  return lines.join("\n").trim();
}

function formatDiseaseSummary(groupedRecords) {
  const groups = groupedRecords.groups || [];
  if (!groups.length) return ["질병 요약 자동 추출 없음"];

  return groups.map((group, index) => {
    const dates = group.records.map((record) => record.date).filter(Boolean).sort();
    const codes = [...new Set(group.records.flatMap(getPrimaryCodes))].join(", ") || "코드 없음";
    const currentTreatment = group.records.some((record) => record.ongoing || record.chronic);
    return [
      `${index + 1}. ${group.name} (${codes})`,
      `* 최초진단: ${dates[0] || "확인 필요"}`,
      `* 최근진료: ${dates.at(-1) || "확인 필요"}`,
      `* 총진료횟수: ${new Set(dates).size || "확인 필요"}`,
      `* 현재치료여부: ${currentTreatment ? "치료중" : "확인 필요"}`,
    ].join("\n");
  });
}

function formatNeedsReviewItems(normalizedRecords) {
  const reviewRecords = normalizedRecords.filter((record) => !record.validation?.valid);
  if (!reviewRecords.length) return ["확인 필요한 항목 없음"];

  return reviewRecords.slice(0, 30).map((record) => (
    `* ${record.date || "날짜 확인 필요"} / ${record.code || "코드 없음"} / ${record.disease || "병명 없음"} - ${record.validation?.status || "AI 확인 필요"} (${record.validation?.reason || "원문 확인 필요"})`
  ));
}

function formatExcludedItems(reviewItems) {
  if (!reviewItems.length) return ["제외 항목 없음"];
  return [...new Set(reviewItems.map(formatReviewSummary))];
}

function formatMedicalHistoryReport(disclosureItems, groupedRecords, normalizedRecords) {
  const lines = [
    "[보험사 제출용 고지서]",
    "",
    "아래 병력은 보험가입 심사를 위한 고지사항입니다.",
    "고지사항이 설계 및 심사에 정확히 반영되었는지 확인 부탁드립니다.",
    "",
    formatDisclosureSummary(disclosureItems),
    "",
    "[질병 요약]",
    "",
  ];

  lines.push(...formatDiseaseSummary(groupedRecords), "", "[확인 필요한 항목]", "");
  lines.push(...formatNeedsReviewItems(normalizedRecords), "", "[제외 항목]", "");
  lines.push(...formatExcludedItems(disclosureItems.reviewItems || []));
  lines.push("", "위 자동분류 결과 중 확인 필요한 항목은 원문 병력자료와 대조 후 최종 고지 여부를 확인해주세요.");

  return lines.join("\n").trim();
}

function buildUniverseDisclosureLines() {
  const lines = ["[유니버스 고지사항]"];

  if (!universeDisclosureText?.trim()) {
    lines.push("병력 PDF 첨부 후 자동 작성됩니다.");
    return lines;
  }

  lines.push("", universeDisclosureText.trim());
  return lines;
}

function insertDisclosureToCustomerCopy(text) {
  universeDisclosureText = text;
  renderOutput();
  rememberUiSession();
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

  lines.push(...buildNoticeLines(collectNotices()), "", ...buildFiveYearLines(), "", ...buildTenYearLines(), "", ...buildUniverseDisclosureLines());

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
    if (!medication.items.length) {
      warnings.push("약 복용 정보를 1개 이상 입력해주세요.");
    }

    medication.items.forEach((item, index) => {
      if (!item.disease || !item.name || !item.period) {
        warnings.push(`약 복용 정보 ${index + 1}번의 질환명, 약물명, 복용기간을 모두 입력해주세요.`);
      }
    });
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
  const savedDate = customer.updatedAt ? new Date(customer.updatedAt).toLocaleString("ko-KR") : "";
  return [name, residentNumber, savedDate].filter(Boolean).join(" / ");
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

function getCustomerDedupeKey(customer) {
  const fields = customer?.state?.fields ?? {};
  const name = normalizeSearchText(fields.customerName);
  if (!name) return customer?.id || "";
  const resident = String(fields.residentNumber ?? "").replace(/\D/g, "");
  const birthDate = String(fields.birthDate ?? "").replace(/\D/g, "");
  const phone = String(fields.phoneCarrier ?? "").replace(/\D/g, "");
  return [name, resident || birthDate, phone].filter(Boolean).join("|") || name;
}

function getLatestCustomersForSelect(customers) {
  const grouped = new Map();
  customers.forEach((customer) => {
    const key = getCustomerDedupeKey(customer);
    const previous = grouped.get(key);
    const customerTime = new Date(customer.updatedAt || customer.createdAt || 0).getTime();
    const previousTime = new Date(previous?.updatedAt || previous?.createdAt || 0).getTime();
    if (!previous || customerTime >= previousTime) grouped.set(key, customer);
  });
  return [...grouped.values()].sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));
}

function getLatestCustomerIdForSamePerson(customerId, customers) {
  const selectedCustomer = customers.find((customer) => customer.id === customerId);
  if (!selectedCustomer) return customerId;
  const selectedKey = getCustomerDedupeKey(selectedCustomer);
  return getLatestCustomersForSelect(customers).find((customer) => getCustomerDedupeKey(customer) === selectedKey)?.id || customerId;
}

function dedupeStoredCustomers() {
  const customers = getStoredCustomers();
  if (customers.length < 2) {
    showManagerStatus("정리할 중복 고객이 없습니다.");
    return;
  }

  const grouped = new Map();
  customers.forEach((customer) => {
    const key = getCustomerDedupeKey(customer);
    if (!key) return;
    const list = grouped.get(key) || [];
    list.push(customer);
    grouped.set(key, list);
  });

  const duplicateGroups = [...grouped.values()].filter((list) => list.length > 1);
  if (!duplicateGroups.length) {
    showManagerStatus("같은 이름/정보의 중복 고객을 찾지 못했습니다.");
    return;
  }

  const duplicateCount = duplicateGroups.reduce((sum, list) => sum + list.length - 1, 0);
  if (!confirm(`중복 고객 ${duplicateCount}건을 정리할까요?\n\n같은 이름/생년월일/연락처로 보이는 고객은 가장 최근 저장본만 남깁니다.`)) {
    return;
  }

  const kept = [];
  grouped.forEach((list) => {
    const sorted = [...list].sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));
    kept.push(sorted[0]);
  });

  setStoredCustomers(kept);
  const selectedStillExists = kept.some((customer) => customer.id === savedCustomerSelect.value);
  const selectedId = selectedStillExists ? savedCustomerSelect.value : kept[0]?.id || "";
  if (selectedId) {
    const selected = kept.find((customer) => customer.id === selectedId);
    if (selected) applyCustomerState(selected.state);
  }
  renderSavedCustomerList(selectedId);
  rememberUiSession({ selectedId });
  showManagerStatus(`중복 고객 ${duplicateCount}건을 정리했습니다. 현재 고객 저장을 눌러 클라우드에 반영해주세요.`);
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

  if (!customers.length) {
    const empty = document.createElement("p");
    empty.className = "customer-search-empty";
    empty.textContent = keyword ? "검색 결과가 없습니다." : "저장된 고객이 없습니다.";
    customerSearchResults.append(empty);
    return;
  }

  customers.slice(0, 50).forEach((customer) => {
    const row = document.createElement("div");
    row.className = "customer-result-row";

    const button = document.createElement("button");
    button.className = "customer-result-button";
    button.type = "button";
    button.dataset.customerId = customer.id;
    button.textContent = buildCustomerLabel(customer);

    const deleteButton = document.createElement("button");
    deleteButton.className = "customer-result-delete";
    deleteButton.type = "button";
    deleteButton.dataset.customerDeleteId = customer.id;
    deleteButton.title = "이 고객 삭제";
    deleteButton.textContent = "×";

    row.append(button, deleteButton);
    customerSearchResults.append(row);
  });
}

function renderSavedCustomerList(selectedId = "") {
  const customers = getFilteredCustomers();
  const selectCustomers = getLatestCustomersForSelect(customers);
  const selectSelectedId = getLatestCustomerIdForSamePerson(selectedId, customers);
  savedCustomerSelect.innerHTML = '<option value="">저장된 고객 선택</option>';

  selectCustomers.forEach((customer) => {
    const option = document.createElement("option");
    option.value = customer.id;
    option.textContent = buildCustomerLabel(customer);
    savedCustomerSelect.append(option);
  });

  if ([...savedCustomerSelect.options].some((option) => option.value === selectSelectedId)) {
    savedCustomerSelect.value = selectSelectedId;
  } else if (selectCustomers.length === 1) {
    savedCustomerSelect.value = selectCustomers[0].id;
  }

  renderCustomerSearchResults(customers);
}

function saveAutoDraft(state = collectCustomerState()) {
  const existingDraft = readJsonStorage(getScopedStorageKey(autoSaveDraftKey), {});
  localStorage.setItem(
    getScopedStorageKey(autoSaveDraftKey),
    JSON.stringify({
      ...existingDraft,
      selectedId: savedCustomerSelect.value,
      updatedAt: new Date().toISOString(),
      state,
      designManagers: getStoredDesignManagers(),
      phoneConsultationMemos: getStoredPhoneConsultationMemos(),
      phoneConsultationCommonTemplate: getStoredPhoneConsultationCommonTemplate(),
      phoneConsultationCommonTemplateUpdatedAt: getStoredPhoneConsultationCommonTemplateUpdatedAt(),
      phoneConsultationCommonHighlight: getStoredPhoneConsultationCommonHighlight(),
      phoneConsultationCommonHighlightStrokes: getStoredPhoneConsultationCommonHighlightStrokes(),
      phoneConsultationDrafts: getStoredPhoneConsultationDrafts(),
      phoneConsultationOrders: getStoredPhoneConsultationOrders(),
      promotionPosts: getStoredPromotionPosts(),
      universeDisclosureText,
      medicalAnalysisJson,
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
  const savedId = upsertAutoSavedCustomer(state);
  saveAutoDraft(state);
  rememberUiSession(savedId ? { selectedId: savedId } : {});
  if (savedId) {
    renderSavedCustomerList(savedId);
  }
  scheduleCloudSync();
}

async function saveCurrentCustomerAndSync() {
  saveCurrentCustomer();
  await flushCloudSyncNow("현재 고객 저장");
}

function scheduleAutoSave() {
  window.clearTimeout(autoSaveTimer);
  autoSaveTimer = window.setTimeout(runAutoSave, 700);
}

function restoreAutoSavedDraft() {
  try {
    const draft = readJsonStorage(getScopedStorageKey(autoSaveDraftKey));

    if (!draft?.state) {
      return false;
    }

    applyCustomerState(draft.state);
    if (draft.selectedId) {
      savedCustomerSelect.value = draft.selectedId;
    }
    if (draft.universeDisclosureText) {
      universeDisclosureText = draft.universeDisclosureText;
    }
    if (draft.medicalAnalysisJson) {
      medicalAnalysisJson = draft.medicalAnalysisJson;
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
  rememberUiSession({ selectedId: id });
  showManagerStatus("고객 정보가 저장되었습니다.");
}

function loadCustomerById(selectedId) {
  savePhoneConsultationDraftForCustomer();
  const customer = getStoredCustomers().find((item) => item.id === selectedId);

  if (!customer) {
    alert("저장된 고객을 찾을 수 없습니다.");
    renderSavedCustomerList();
    return;
  }

  applyCustomerState(customer.state);
  savedCustomerSelect.value = selectedId;
  rememberUiSession({ selectedId });
  restorePhoneConsultationDraftForCustomer(selectedId);
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
  deleteCustomerById(savedCustomerSelect.value);
}

function deleteCustomerById(selectedId) {
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

  addPendingDeletedCustomerId(selectedId);
  setStoredCustomers(customers.filter((item) => item.id !== selectedId));
  localStorage.removeItem(getScopedStorageKey(autoSaveDraftKey));
  rememberUiSession({ selectedId: "" });
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
    universeDisclosureText: "",
    medicalAnalysisJson: null,
  };
}

function startNewCustomer() {
  savePhoneConsultationDraftForCustomer();
  const emptyState = getEmptyCustomerState();

  applyCustomerState(emptyState);
  medicalAnalysisJson = null;
  savedCustomerSelect.value = "";
  customerSearchInput.value = "";
  localStorage.removeItem(getScopedStorageKey(autoSaveDraftKey));
  rememberUiSession({ selectedId: "" });
  restorePhoneConsultationDraftForCustomer("");
  renderSavedCustomerList();
  showManagerStatus("새 고객 입력 화면입니다. 기존 서버 데이터는 유지됩니다.");
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
        notice.statuses?.length ? notice.statuses.map(normalizeRecurrence).join(" / ") : notice.recurrence && normalizeRecurrence(notice.recurrence),
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
    if (event.target.value === "yes" && !medicationList.querySelector(".medication-row")) {
      addMedicationRow({}, { primary: true });
    }
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

function bindApplicationUiEvents() {
  safeOn(noticeList, "click", (event) => {
    if (!event.target.matches("[data-remove-notice]")) return;
    event.target.closest(".notice-card").remove();
    refreshNoticeNumbers();
    renderOutput();
    scheduleAutoSave();
  });

  safeOn(contractList, "click", (event) => {
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

  safeOn(medicationList, "click", (event) => {
    if (!event.target.matches("[data-remove-medication]")) return;
    event.target.closest(".medication-row").remove();
    if (!medicationList.querySelector(".medication-row")) {
      addMedicationRow({}, { primary: true });
    }
    renderOutput();
    scheduleAutoSave();
  });

  safeOn(fiveYearList, "click", (event) => {
    if (!event.target.matches("[data-remove-five-year]")) return;
    event.target.closest(".notice-card").remove();
    refreshFiveYearNumbers();
    renderOutput();
    scheduleAutoSave();
  });

  safeOn(tenYearList, "click", (event) => {
    if (!event.target.matches("[data-remove-ten-year]")) return;
    event.target.closest(".notice-card").remove();
    refreshTenYearNumbers();
    renderOutput();
    scheduleAutoSave();
  });

  safeOn(designManagerList, "click", (event) => {
    const row = event.target.closest(".design-manager-row");
    if (!row) return;

    selectDesignManagerRow(row);

    const copyButton = event.target.closest("[data-copy-insurer]");
    if (copyButton) {
      const copyType = copyButton.dataset.copyInsurer;
      const copyMap = {
        manager: { value: row.dataset.name ?? "", message: "담당자 복사 완료" },
        managerPhone: { value: row.dataset.managerPhone ?? "", message: "담당자 연락처 복사 완료" },
        admin: { value: row.dataset.admin ?? "", message: "총무 복사 완료" },
        adminPhone: { value: row.dataset.adminPhone ?? "", message: "총무 연락처 복사 완료" },
        loginId: { value: row.dataset.loginId ?? "", message: "아이디 복사 완료" },
        password: { value: row.dataset.password ?? "", message: "비번 복사 완료" },
      };
      const copyItem = copyMap[copyType];
      if (copyItem) copyInsurerValue(copyItem.value, copyItem.message);
      return;
    }

    if (event.target.matches("[data-open-site]")) {
      openInsuranceSite(row);
      return;
    }

    if (event.target.matches("[data-edit-design-manager]")) {
      renderDesignManagerEdit(row);
      return;
    }

    if (event.target.matches("[data-save-design-manager]")) {
      saveDesignManagerEdit(row);
      return;
    }

    if (event.target.matches("[data-cancel-design-manager]")) {
      renderDesignManagerView(row);
      return;
    }

    if (event.target.matches("[data-remove-design-manager]")) {
      clearSelectedDesignManagerRow(row);
      row.remove();
      saveDesignManagers();
    }
  });

  safeOn(designManagerList, "keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const copyField = event.target.closest("[data-copy-insurer]");
    const openSiteField = event.target.closest("[data-open-site]");
    if (!copyField && !openSiteField) return;
    (copyField || openSiteField).click();
    event.preventDefault();
  });

  safeOn(addNoticeButton, "click", () => {
    addNotice();
    scheduleAutoSave();
  });
  safeOn(openContractManagementButton, "click", () => setContractManagementMode(true));
  safeOn(openDesignManagerButton, "click", () => setDesignManagerMode(true));
  safeOn(moveSelectedInsurerTop, "click", () => moveSelectedDesignManagerRow("top"));
  safeOn(moveSelectedInsurerUp, "click", () => moveSelectedDesignManagerRow("up"));
  safeOn(moveSelectedInsurerDown, "click", () => moveSelectedDesignManagerRow("down"));
  safeOn(moveSelectedInsurerBottom, "click", () => moveSelectedDesignManagerRow("bottom"));
  safeOn(universeFileUploadButton, "click", () => universeFileInput.click());
  safeOn(universeFileInput, "change", (event) => {
    const file = event.target.files?.[0];
    handleUniverseFileUpload(file);
    event.target.value = "";
  });
  safeOn(backToMainButton, "click", goMainMode);
  safeOn(addContractButton, "click", () => {
    addContract();
    scheduleAutoSave();
  });
  safeOn(addComparisonButton, "click", () => {
    addComparisonRow();
    scheduleAutoSave();
  });
  safeOn(addMedicationButton, "click", () => {
    addMedicationRow();
    scheduleAutoSave();
  });
  safeOn(addDesignManagerButton, "click", () => {
    createInsurerCardFromForm();
  });
  safeOn(addFiveYearButton, "click", () => {
    addFiveYearNotice();
    scheduleAutoSave();
  });
  safeOn(addTenYearButton, "click", () => {
    addTenYearNotice();
    scheduleAutoSave();
  });
  safeOn(phoneConsultationButton, "click", openPhoneConsultation);
  safeOn(promotionButton, "click", openPromotion);
  safeOn(savePhoneConsultationButton, "click", savePhoneConsultationMemo);
  safeOn(phoneConsultationMemoList, "pointerdown", (event) => {
    if (event.target.closest("[data-memo-delete-id], [data-memo-group-title]")) return;
    const button = event.target.closest("[data-memo-id]");
    if (!button) return;
    selectPhoneConsultationMemoButton(button.dataset.memoId);
  });
  safeOn(phoneConsultationMemoList, "click", (event) => {
    const deleteButton = event.target.closest("[data-memo-delete-id]");
    if (deleteButton) {
      event.preventDefault();
      event.stopPropagation();
      deletePhoneConsultationMemoById(deleteButton.dataset.memoDeleteId);
      return;
    }

    if (phoneConsultationMemoDragMoved) {
      phoneConsultationMemoDragMoved = false;
      return;
    }
    if (event.target.closest("[data-memo-group-title]")) return;
    const button = event.target.closest("[data-memo-id]");
    if (!button) return;
    event.preventDefault();
    loadPhoneConsultationById(button.dataset.memoId);
  });
  safeOn(phoneConsultationMemoList, "input", (event) => {
    const titleInput = event.target.closest("[data-memo-group-title]");
    if (!titleInput) return;
    savePhoneConsultationGroupTitleForCustomer(titleInput.dataset.memoGroupTitle, titleInput.value);
    scheduleCloudSync();
  });
  safeOn(phoneConsultationMemoList, "dragstart", (event) => {
    const button = event.target.closest("[data-memo-id]");
    if (!button) return;
    draggedPhoneConsultationMemoId = button.dataset.memoId;
    phoneConsultationMemoDragMoved = true;
    button.classList.add("is-dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", draggedPhoneConsultationMemoId);
  });
  safeOn(phoneConsultationMemoList, "dragover", (event) => {
    const button = event.target.closest("[data-memo-id]");
    const dropZone = event.target.closest("[data-memo-drop-group], [data-memo-group]");
    if (!dropZone || !draggedPhoneConsultationMemoId || button?.dataset.memoId === draggedPhoneConsultationMemoId) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    (button || dropZone).classList.add("is-drop-target");
  });
  safeOn(phoneConsultationMemoList, "dragleave", (event) => {
    const button = event.target.closest("[data-memo-id]");
    button?.classList.remove("is-drop-target");
    const dropZone = event.target.closest("[data-memo-drop-group], [data-memo-group]");
    dropZone?.classList.remove("is-drop-target");
  });
  safeOn(phoneConsultationMemoList, "drop", (event) => {
    const button = event.target.closest("[data-memo-id]");
    const dropZone = event.target.closest("[data-memo-drop-group], [data-memo-group]");
    if (!dropZone) return;
    event.preventDefault();
    phoneConsultationMemoList.querySelectorAll(".is-drop-target").forEach((target) => {
      target.classList.remove("is-drop-target");
    });
    const draggedId = event.dataTransfer.getData("text/plain") || draggedPhoneConsultationMemoId;
    const targetGroup = dropZone.dataset.memoDropGroup || dropZone.dataset.memoGroup || "";
    reorderPhoneConsultationMemos(draggedId, button?.dataset.memoId || "", targetGroup);
  });
  safeOn(phoneConsultationMemoList, "dragend", () => {
    phoneConsultationMemoList.querySelectorAll(".is-dragging, .is-drop-target").forEach((button) => {
      button.classList.remove("is-dragging", "is-drop-target");
    });
    draggedPhoneConsultationMemoId = "";
    window.setTimeout(() => {
      phoneConsultationMemoDragMoved = false;
    }, 50);
  });
  safeOn(newPhoneConsultationButton, "click", () => {
    preserveScrollPosition(() => {
      clearPhoneConsultationForm();
      showPhoneConsultationStatus("새 메모를 작성할 수 있습니다.");
      focusWithoutPageJump(phoneConsultationTitleInput);
    });
  });
  safeOn(deletePhoneConsultationButton, "click", deletePhoneConsultationMemo);
  safeOn(savePhoneConsultationCommonTemplateButton, "click", savePhoneConsultationCommonTemplate);
  safeOn(insertPhoneConsultationCommonTemplateButton, "click", insertPhoneConsultationCommonTemplate);
  safeOn(phoneConsultationHighlightButton, "click", () => {
    setPhoneConsultationHighlightMode(!phoneConsultationHighlightMode);
    showPhoneConsultationStatus(phoneConsultationHighlightMode
      ? "메모의 시작점부터 끝점까지 직선으로 그어주세요."
      : "형광펜을 껐습니다.");
  });
  phoneConsultationHighlightSwatches.forEach((swatch) => {
    safeOn(swatch, "click", () => {
      phoneConsultationHighlightColor = swatch.dataset.highlightColor || "#ffe45c";
      phoneConsultationHighlightSwatches.forEach((item) => item.classList.toggle("is-selected", item === swatch));
      setPhoneConsultationHighlightEraser(false);
      if (!phoneConsultationHighlightMode) setPhoneConsultationHighlightMode(true);
    });
  });
  safeOn(phoneConsultationEraserButton, "click", () => {
    setPhoneConsultationHighlightEraser(!phoneConsultationHighlightEraseMode);
  });
  safeOn(phoneConsultationHighlightCanvas, "pointerdown", startPhoneConsultationHighlight);
  safeOn(phoneConsultationHighlightCanvas, "pointermove", continuePhoneConsultationHighlight);
  safeOn(phoneConsultationHighlightCanvas, "pointerup", finishPhoneConsultationHighlight);
  safeOn(phoneConsultationHighlightCanvas, "pointercancel", finishPhoneConsultationHighlight);
  safeOn(phoneConsultationHighlightCanvas, "wheel", (event) => {
    if (!phoneConsultationMemoInput) return;
    phoneConsultationMemoInput.scrollTop += event.deltaY;
    syncPhoneConsultationHighlightScroll();
    event.preventDefault();
  });
  safeOn(window, "resize", () => {
    window.clearTimeout(phoneConsultationHighlightResizeTimer);
    phoneConsultationHighlightResizeTimer = window.setTimeout(() => {
      const currentImage = capturePhoneConsultationHighlight() || phoneConsultationHighlightImage;
      sizePhoneConsultationHighlightCanvas(currentImage);
    }, 120);
  });
  if (window.ResizeObserver && phoneConsultationMemoCanvasWrap) {
    const highlightResizeObserver = new ResizeObserver(() => {
      window.clearTimeout(phoneConsultationHighlightResizeTimer);
      phoneConsultationHighlightResizeTimer = window.setTimeout(() => {
        const currentImage = capturePhoneConsultationHighlight() || phoneConsultationHighlightImage;
        sizePhoneConsultationHighlightCanvas(currentImage);
      }, 80);
    });
    highlightResizeObserver.observe(phoneConsultationMemoCanvasWrap);
  }
  safeOn(phoneConsultationCommonHighlightButton, "click", () => {
    setPhoneConsultationCommonHighlightMode(!phoneConsultationCommonHighlightMode);
    showPhoneConsultationStatus(phoneConsultationCommonHighlightMode
      ? "위 메모의 시작점부터 끝점까지 직선으로 그어주세요."
      : "위 메모 형광펜을 껐습니다.");
  });
  phoneConsultationCommonHighlightSwatches.forEach((swatch) => {
    safeOn(swatch, "click", () => {
      phoneConsultationCommonHighlightColor = swatch.dataset.highlightColor || "#ffe45c";
      phoneConsultationCommonHighlightSwatches.forEach((item) => item.classList.toggle("is-selected", item === swatch));
      setPhoneConsultationCommonHighlightEraser(false);
      if (!phoneConsultationCommonHighlightMode) setPhoneConsultationCommonHighlightMode(true);
    });
  });
  safeOn(phoneConsultationCommonEraserButton, "click", () => {
    setPhoneConsultationCommonHighlightEraser(!phoneConsultationCommonHighlightEraseMode);
  });
  safeOn(phoneConsultationCommonHighlightCanvas, "pointerdown", startPhoneConsultationCommonHighlight);
  safeOn(phoneConsultationCommonHighlightCanvas, "pointermove", continuePhoneConsultationCommonHighlight);
  safeOn(phoneConsultationCommonHighlightCanvas, "pointerup", finishPhoneConsultationCommonHighlight);
  safeOn(phoneConsultationCommonHighlightCanvas, "pointercancel", finishPhoneConsultationCommonHighlight);
  safeOn(phoneConsultationCommonHighlightCanvas, "wheel", (event) => {
    if (!phoneConsultationCommonTemplateInput) return;
    phoneConsultationCommonTemplateInput.scrollTop += event.deltaY;
    syncPhoneConsultationCommonHighlightScroll();
    event.preventDefault();
  });
  if (window.ResizeObserver && phoneConsultationCommonCanvasWrap) {
    const commonHighlightResizeObserver = new ResizeObserver(() => {
      window.clearTimeout(phoneConsultationCommonHighlightResizeTimer);
      phoneConsultationCommonHighlightResizeTimer = window.setTimeout(() => {
        const currentImage = capturePhoneConsultationCommonHighlight() || phoneConsultationCommonHighlightImage;
        sizePhoneConsultationCommonHighlightCanvas(currentImage);
      }, 80);
    });
    commonHighlightResizeObserver.observe(phoneConsultationCommonCanvasWrap);
  }
  safeOn(phoneConsultationTitleInput, "input", () => {
    savePhoneConsultationDraftForCustomer();
    scheduleCloudSync();
  });
  safeOn(phoneConsultationMemoInput, "scroll", syncPhoneConsultationHighlightScroll);
  safeOn(phoneConsultationMemoInput, "input", () => {
    const nextText = phoneConsultationMemoInput.value || "";
    phoneConsultationHighlightStrokes = adjustAnchoredHighlightStrokes(
      phoneConsultationHighlightStrokes,
      phoneConsultationHighlightPreviousText,
      nextText,
    );
    phoneConsultationHighlightPreviousText = nextText;
    if (phoneConsultationHighlightStrokes.length) {
      sizePhoneConsultationHighlightCanvas("");
      phoneConsultationHighlightImage = drawAnchoredHighlightStrokes(
        phoneConsultationHighlightCanvas,
        phoneConsultationMemoInput,
        phoneConsultationHighlightStrokes,
      );
    } else {
      const currentImage = capturePhoneConsultationHighlight() || phoneConsultationHighlightImage;
      sizePhoneConsultationHighlightCanvas(currentImage);
    }
    savePhoneConsultationDraftForCustomer();
    scheduleCloudSync();
  });
  safeOn(phoneConsultationCommonTemplateInput, "scroll", syncPhoneConsultationCommonHighlightScroll);
  safeOn(phoneConsultationCommonTemplateInput, "input", () => {
    const nextText = phoneConsultationCommonTemplateInput.value || "";
    phoneConsultationCommonHighlightStrokes = adjustAnchoredHighlightStrokes(
      phoneConsultationCommonHighlightStrokes,
      phoneConsultationCommonHighlightPreviousText,
      nextText,
    );
    phoneConsultationCommonHighlightPreviousText = nextText;
    if (phoneConsultationCommonHighlightStrokes.length) {
      sizePhoneConsultationCommonHighlightCanvas("");
      phoneConsultationCommonHighlightImage = drawAnchoredHighlightStrokes(
        phoneConsultationCommonHighlightCanvas,
        phoneConsultationCommonTemplateInput,
        phoneConsultationCommonHighlightStrokes,
      );
    } else {
      const currentImage = capturePhoneConsultationCommonHighlight() || phoneConsultationCommonHighlightImage;
      sizePhoneConsultationCommonHighlightCanvas(currentImage);
    }
    savePhoneConsultationDraftForCustomer();
    scheduleCloudSync();
  });
  safeOn(generatePromotionButton, "click", generatePromotionCopy);
  safeOn(copyPromotionButton, "click", copyPromotionCopy);
  safeOn(savePromotionButton, "click", savePromotionPost);
  safeOn(copyPromotionImageCommandButton, "click", copyPromotionImageCommand);
  safeOn(promotionTopicInput, "input", updatePromotionImageCommand);
  safeOn(promotionToneInput, "change", updatePromotionImageCommand);
  safeOn(promotionImageInput, "change", handlePromotionImageSelected);
  safeOn(splitPromotionImageButton, "click", splitPromotionImageIntoThree);
  safeOn(resizePromotionImageButton, "click", resizePromotionImageForChannel);
  safeOn(cropPromotionImageButton, "click", () => drawPromotionImageToCanvas({ stamp: false }));
  safeOn(flipPromotionImageButton, "click", flipPromotionImageHorizontal);
  safeOn(undoPromotionImageButton, "click", undoPromotionImageEdit);
  safeOn(resetPromotionImageButton, "click", resetPromotionImageToOriginal);
  safeOn(stampPromotionImageButton, "click", addPromotionMessageText);
  safeOn(removeStampPromotionImageButton, "click", removePromotionStamp);
  safeOn(saveEditedPromotionImageButton, "click", saveEditedPromotionImage);
  safeOn(downloadPromotionImageButton, "click", downloadPromotionImage);
  safeOn(mosaicPromotionImageButton, "click", startPromotionMosaicMode);
  safeOn(addShapePromotionImageButton, "click", () => startPromotionShapeMode("fill"));
  safeOn(drawShapePromotionImageButton, "click", () => startPromotionShapeMode("frame"));
  safeOn(brushPromotionImageButton, "click", startPromotionBrushMode);
  safeOn(selectPromotionImageButton, "click", stopPromotionImageEditMode);
  safeOn(deletePromotionObjectButton, "click", deleteSelectedPromotionObject);
  safeOn(promotionFrameImageInput, "change", handlePromotionFrameImageSelected);
  safeOn(promotionCropCanvas, "mousedown", handlePromotionCanvasPointerDown);
  safeOn(promotionCropCanvas, "mousemove", handlePromotionCanvasPointerMove);
  safeOn(promotionCropCanvas, "mouseup", handlePromotionCanvasPointerUp);
  safeOn(promotionCropCanvas, "mouseleave", handlePromotionCanvasPointerUp);
  safeOn(promotionToolColorInput, "input", () => {
    finishPromotionColorPick();
    updateSelectedPromotionTextStyle();
  });
  safeOn(promotionToolOpacityInput, "input", updateSelectedPromotionTextStyle);
  safeOn(promotionImageMessageInput, "input", savePromotionImageSignature);
  safeOn(promotionTextColorInput, "input", () => {
    savePromotionImageSignature();
    updateSelectedPromotionTextStyle();
  });
  safeOn(promotionTextSizeInput, "input", updateSelectedPromotionTextStyle);
  safeOn(promotionBoxColorInput, "input", () => {
    savePromotionImageSignature();
    updateSelectedPromotionTextStyle();
  });
  safeOn(promotionStampOpacityInput, "input", updateSelectedPromotionTextStyle);
  safeOn(promotionShapeColorInput, "input", savePromotionImageSignature);
  safeOn(generatePromotionCaseButton, "click", generatePromotionCaseText);
  safeOn(savePromotionCaseButton, "click", savePromotionCase);
  safeOn(copyPromotionCaseButton, "click", () => copyPromotionCase());
  safeOn(savePromotionIdeaButton, "click", savePromotionIdea);
  safeOn(extractPromotionBlogButton, "click", extractPromotionBlogText);
  safeOn(extractPromotionImageTextButton, "click", extractPromotionImageText);
  safeOn(promotionIdeaImageInput, "change", extractPromotionImageText);
  safeOn(promotionEmojiBank, "click", (event) => {
    const button = event.target.closest("[data-promotion-emoji]");
    if (button) togglePromotionEmoji(button.dataset.promotionEmoji);
  });
  safeOn(copyPromotionEmojiButton, "click", copySelectedPromotionEmojiImage);
  safeOn(promotionIdeaList, "click", (event) => {
    const load = event.target.closest("[data-promotion-idea-load-id]");
    const del = event.target.closest("[data-promotion-idea-delete-id]");
    if (load) loadPromotionIdea(load.dataset.promotionIdeaLoadId);
    if (del) deletePromotionIdea(del.dataset.promotionIdeaDeleteId);
  });
  safeOn(promotionSavedImageList, "click", (event) => {
    const load = event.target.closest("[data-promotion-image-load-id]");
    const download = event.target.closest("[data-promotion-image-download-id]");
    const del = event.target.closest("[data-promotion-image-delete-id]");
    if (load) loadSavedPromotionImage(load.dataset.promotionImageLoadId);
    if (download) downloadSavedPromotionImage(download.dataset.promotionImageDownloadId);
    if (del) deleteSavedPromotionImage(del.dataset.promotionImageDeleteId);
  });
  safeOn(promotionCaseList, "click", (event) => {
    const load = event.target.closest("[data-promotion-case-load-id]");
    const copy = event.target.closest("[data-promotion-case-copy-id]");
    const del = event.target.closest("[data-promotion-case-delete-id]");
    if (load) loadPromotionCase(load.dataset.promotionCaseLoadId);
    if (copy) copyPromotionCase(copy.dataset.promotionCaseCopyId);
    if (del) deletePromotionCase(del.dataset.promotionCaseDeleteId);
  });
  safeOn(promotionNaverSearchButton, "click", () => openPromotionSearch("naver"));
  safeOn(promotionPinterestSearchButton, "click", () => openPromotionSearch("pinterest"));
  safeOn(promotionGoogleSearchButton, "click", () => openPromotionSearch("google"));
  safeOn(promotionScreenshotPasteZone, "paste", handlePromotionScreenshotPaste);
  safeOn(document, "paste", (event) => {
    if (!document.body.classList.contains("promotion-mode")) return;
    handlePromotionScreenshotPaste(event);
  });
  safeOn(promotionSavedList, "click", (event) => {
    const deleteButton = event.target.closest("[data-promotion-delete-id]");
    if (deleteButton) {
      deletePromotionPost(deleteButton.dataset.promotionDeleteId);
      return;
    }
    const copyButton = event.target.closest("[data-promotion-copy-id]");
    if (copyButton) {
      copyPromotionPost(copyButton.dataset.promotionCopyId);
      return;
    }
    const loadButton = event.target.closest("[data-promotion-load-id]");
    if (loadButton) {
      loadPromotionPost(loadButton.dataset.promotionLoadId);
    }
  });
  safeOn(logoutButton, "click", logoutCustomerApp);
  safeOn(window, "online", scheduleCloudSync);
  safeOn(saveCustomerButton, "click", () => {
    void saveCurrentCustomerAndSync();
  });
  safeOn(syncAllCloudButton, "click", () => {
    void syncAllCloudData();
  });
  safeOn(loadCustomerButton, "click", loadSelectedCustomer);
  safeOn(recoverCustomerButton, "click", recoverStoredCustomersManually);
  safeOn(dedupeCustomerButton, "click", dedupeStoredCustomers);
  safeOn(newCustomerButton, "click", startNewCustomer);
  safeOn(deleteCustomerButton, "click", deleteSelectedCustomer);
  safeOn(toggleCustomerManagerButton, "click", () => {
    setCustomerManagerCollapsed(!customerManagerPanel?.classList.contains("is-collapsed"));
  });
  safeOn(customerSearchInput, "input", () => renderSavedCustomerList(savedCustomerSelect.value));
  safeOn(customerSearchResults, "click", (event) => {
    const deleteButton = event.target.closest("[data-customer-delete-id]");
    if (deleteButton) {
      deleteCustomerById(deleteButton.dataset.customerDeleteId);
      return;
    }

    const button = event.target.closest("[data-customer-id]");
    if (!button) return;
    savedCustomerSelect.value = button.dataset.customerId;
    loadCustomerById(button.dataset.customerId);
  });
  safeOn(savedCustomerSelect, "change", () => {
    if (savedCustomerSelect.value) {
      loadSelectedCustomer();
    }
  });
  safeOn(form, "input", (event) => {
    if (event.target.matches("[data-contract-field]")) {
      refreshContractNumbers();
    }
    renderOutput();
    scheduleAutoSave();
  });
  safeOn(form, "change", (event) => {
    handleFormChange(event);
    scheduleAutoSave();
  });
  safeOn(copyButton, "click", () => {
    if (!ensureValid()) return;
    copyText(buildOutput(), "복사 완료");
  });
  safeOn(kakaoCopyButton, "click", () => {
    if (!ensureValid()) return;
    copyText(buildOutput().replace(/\n{3,}/g, "\n\n"), "카카오톡용 복사 완료");
  });
  safeOn(insurerCopyButton, "click", () => {
    if (!ensureValid()) return;
    copyText(buildOutput({ insurerMode: true }), "보험사 제출용 복사 완료");
  });
  safeOn(pdfButton, "click", () => {
    if (!ensureValid()) return;
    window.print();
  });
  safeOn(excelButton, "click", exportExcel);
  restoreCustomerManagerCollapsed();
  setContractManagementMode(window.location.hash === "#contracts", false);
  setDesignManagerMode(window.location.hash === "#insurers" || window.location.hash === "#design-manager", false);
  setPhoneConsultationMode(window.location.hash === "#phone-consultation", false);
  setPromotionMode(window.location.hash === "#promotion", false);
}

try {
  registerInsuranceAuthKernel();
} catch (error) {
  console.error("[auth] kernel registration failed", error);
  registerInsuranceAuthKernel();
}

try {
  bindApplicationUiEvents();
  window.__insuranceAppUiReady = true;
} catch (error) {
  console.error("[app] UI initialization failed; login/session restore still works.", error);
}
