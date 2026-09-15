(function bootstrapInsuranceAuthKernel() {
  const ACCOUNTS_KEY = "insuranceDisclosureLocalAccounts";
  const LOCAL_SESSION_KEY = "insuranceDisclosureLocalSession";
  const CLOUD_SESSION_KEY = "insuranceDisclosureCloudSession";
  const CLOUD_SESSION_BACKUP_KEY = "insuranceDisclosureCloudSessionBackup";

  let appAuth = null;

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error("[auth-kernel] storage failed", error);
      return false;
    }
  }

  function normalizePhone(value) {
    return String(value ?? "").replace(/\D/g, "");
  }

  function readCloudSession() {
    const localSession = readJson(CLOUD_SESSION_KEY, null);
    if (localSession?.user?.id && localSession.access_token) return localSession;
    try {
      const backup = JSON.parse(sessionStorage.getItem(CLOUD_SESSION_BACKUP_KEY) || "null");
      return backup?.user?.id && backup.access_token ? backup : null;
    } catch {
      return null;
    }
  }

  function isValidPhone(value) {
    const phone = normalizePhone(value);
    return phone.length >= 10 && phone.length <= 12;
  }

  function hasCloudConfig() {
    const config = window.INSURANCE_APP_CONFIG || {};
    return /^https:\/\/.+\.supabase\.co$/i.test(String(config.supabaseUrl || "").trim())
      && String(config.supabaseAnonKey || "").trim().length > 20;
  }

  function normalizeName(value) {
    return String(value ?? "").replace(/\s+/g, "").toLowerCase();
  }

  function getElements() {
    return {
      authScreen: document.getElementById("authScreen"),
      appRoot: document.getElementById("appRoot"),
      authForm: document.getElementById("authForm"),
      authName: document.getElementById("authName"),
      authPhone: document.getElementById("authPhone"),
      authStatus: document.getElementById("authStatus"),
      signupButton: document.getElementById("signupButton"),
    };
  }

  function setStatus(message) {
    const { authStatus } = getElements();
    if (authStatus) authStatus.textContent = message;
  }

  function showLoginScreen(message = "") {
    const { authScreen, appRoot } = getElements();
    if (authScreen) authScreen.hidden = false;
    if (appRoot) appRoot.classList.add("is-auth-hidden");
    if (message) setStatus(message);
  }

  function showMainApp() {
    const { authScreen, appRoot } = getElements();
    if (authScreen) authScreen.hidden = true;
    if (appRoot) appRoot.classList.remove("is-auth-hidden");
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

  function findAccount(accounts, name, phone) {
    return accounts.find((item) => item.phone === phone && normalizeName(item.name) === normalizeName(name))
      || accounts.find((item) => item.phone === phone);
  }

  function restoreFastLocalSession() {
    if (hasCloudConfig()) {
      localStorage.removeItem(LOCAL_SESSION_KEY);
      showLoginScreen(readCloudSession()
        ? "클라우드 로그인 정보를 복원하는 중..."
        : "클라우드 계정으로 로그인해주세요. 이 기기 저장 계정은 자동으로 열지 않습니다.");
      return false;
    }

    const saved = readJson(LOCAL_SESSION_KEY, null);
    if (!saved?.user?.id) {
      showLoginScreen("이름과 연락처로 로그인하거나 회원가입해주세요.");
      return false;
    }

    const accounts = readJson(ACCOUNTS_KEY, []);
    const account = accounts.find((item) => item.id === saved.user.id)
      || accounts.find((item) => item.phone === saved.user.phone);
    if (!account) {
      localStorage.removeItem(LOCAL_SESSION_KEY);
      showLoginScreen("이름과 연락처로 로그인하거나 회원가입해주세요.");
      return false;
    }

    const session = buildLocalSession(account);
    window.__insuranceBootSession = session;
    window.__insuranceBootAccount = account;
    showLoginScreen("로그인 정보를 불러오는 중...");
    return true;
  }

  function emergencyLocalLogin() {
    const { authName, authPhone } = getElements();
    const name = authName?.value.trim() ?? "";
    const phone = normalizePhone(authPhone?.value ?? "");
    if (!name || !isValidPhone(phone)) {
      setStatus("연락처는 보안용 숫자를 포함해 10~12자리로 입력해주세요.");
      return;
    }

    const accounts = readJson(ACCOUNTS_KEY, []);
    const account = findAccount(accounts, name, phone);
    if (!account) {
      setStatus("등록된 정보가 없습니다. 처음 사용자 회원가입을 눌러주세요.");
      return;
    }

    const session = buildLocalSession(account);
    writeJson(LOCAL_SESSION_KEY, session);
    window.__insuranceBootSession = session;
    window.__insuranceBootAccount = account;
    showMainApp();
    setStatus("로그인했습니다.");
    document.dispatchEvent(new CustomEvent("insurance-auth-ready", { detail: { session, account, emergency: true } }));
  }

  function emergencyLocalSignup() {
    const { authName, authPhone } = getElements();
    const name = authName?.value.trim() ?? "";
    const phone = normalizePhone(authPhone?.value ?? "");
    if (!name || !isValidPhone(phone)) {
      setStatus("연락처는 보안용 숫자를 포함해 10~12자리로 입력해주세요.");
      return;
    }

    const accounts = readJson(ACCOUNTS_KEY, []);
    const existing = findAccount(accounts, name, phone) || accounts.find((item) => item.phone === phone);
    if (existing) {
      emergencyLocalLogin();
      setStatus("이미 가입된 연락처입니다. 로그인했습니다.");
      return;
    }

    const account = {
      id: `local-${phone}`,
      name,
      phone,
      createdAt: new Date().toISOString(),
    };
    accounts.push(account);
    if (!writeJson(ACCOUNTS_KEY, accounts)) {
      setStatus("브라우저 저장소를 사용할 수 없습니다. 일반 창에서 다시 시도해주세요.");
      return;
    }

    const session = buildLocalSession(account);
    writeJson(LOCAL_SESSION_KEY, session);
    window.__insuranceBootSession = session;
    window.__insuranceBootAccount = account;
    showMainApp();
    setStatus("회원가입이 완료되었습니다.");
    document.dispatchEvent(new CustomEvent("insurance-auth-ready", { detail: { session, account, emergency: true } }));
  }

  function waitForAppAuth(timeoutMs = 3000) {
    if (appAuth?.login) return Promise.resolve(appAuth);
    return new Promise((resolve, reject) => {
      const deadline = Date.now() + timeoutMs;
      const timer = window.setInterval(() => {
        if (appAuth?.login) {
          window.clearInterval(timer);
          resolve(appAuth);
          return;
        }
        if (Date.now() >= deadline) {
          window.clearInterval(timer);
          reject(new Error("app auth not ready"));
        }
      }, 40);
    });
  }

  function bindAuthForm() {
    const { authForm, signupButton } = getElements();

    authForm?.addEventListener("submit", async (event) => {
      event.preventDefault();
      setStatus("로그인 중...");
      try {
        const handlers = await waitForAppAuth();
        await handlers.login(event);
      } catch (error) {
        console.warn("[auth-kernel] login handler unavailable", error);
        if (hasCloudConfig()) {
          setStatus("클라우드 로그인을 준비하지 못했습니다. 화면을 새로고침한 뒤 다시 시도해주세요.");
        } else {
          emergencyLocalLogin();
        }
      }
    });

    signupButton?.addEventListener("click", async () => {
      setStatus("회원가입 중...");
      try {
        const handlers = await waitForAppAuth();
        await handlers.signup();
      } catch (error) {
        console.warn("[auth-kernel] signup handler unavailable", error);
        if (hasCloudConfig()) {
          setStatus("클라우드 회원가입을 준비하지 못했습니다. 화면을 새로고침한 뒤 다시 시도해주세요.");
        } else {
          emergencyLocalSignup();
        }
      }
    });
  }

  function bindSessionPersistence() {
    window.addEventListener("pagehide", () => {
      try {
        appAuth?.onPageHide?.();
      } catch (error) {
        console.error("[auth-kernel] pagehide persist failed", error);
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState !== "hidden") return;
      try {
        appAuth?.onPageHide?.();
      } catch (error) {
        console.error("[auth-kernel] visibility persist failed", error);
      }
    });
  }

  function registerAppAuth(handlers) {
    appAuth = handlers;
    window.__insuranceAuthReady = true;
    if (typeof handlers.onAppReady === "function") {
      void handlers.onAppReady();
    }
  }

  window.InsuranceAuthKernel = {
    showLoginScreen,
    showMainApp,
    registerAppAuth,
    restoreFastLocalSession,
  };

  bindAuthForm();
  bindSessionPersistence();
  restoreFastLocalSession();
})();
