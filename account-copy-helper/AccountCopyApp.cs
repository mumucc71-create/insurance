using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using System.Windows.Forms;

internal sealed class AccountRecord
{
    public string Id = Guid.NewGuid().ToString("N");
    public string SiteName = string.Empty;
    public string LoginUrl = string.Empty;
    public string Username = string.Empty;
    public string Password = string.Empty;
    public string BirthDate = string.Empty;

    public override string ToString()
    {
        return string.IsNullOrWhiteSpace(SiteName) ? "이름 없는 사이트" : SiteName;
    }
}

internal static class LocalAuth
{
    private static readonly string AuthDirectory = Path.Combine(
        Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
        "InsuranceAccountManager");
    private static readonly string AuthPath = Path.Combine(AuthDirectory, "auth.dat");
    private const int Iterations = 120000;

    public static bool HasAccount
    {
        get { return File.Exists(AuthPath); }
    }

    public static void Register(string userId, string password)
    {
        Directory.CreateDirectory(AuthDirectory);
        byte[] salt = new byte[32];
        using (var random = RandomNumberGenerator.Create()) random.GetBytes(salt);
        byte[] hash = Derive(password, salt);
        byte[] plain;

        using (var stream = new MemoryStream())
        using (var writer = new BinaryWriter(stream, Encoding.UTF8))
        {
            writer.Write(1);
            writer.Write(userId);
            writer.Write(salt.Length);
            writer.Write(salt);
            writer.Write(hash.Length);
            writer.Write(hash);
            writer.Flush();
            plain = stream.ToArray();
        }

        try
        {
            byte[] encrypted = ProtectedData.Protect(plain, null, DataProtectionScope.CurrentUser);
            File.WriteAllBytes(AuthPath, encrypted);
            Array.Clear(encrypted, 0, encrypted.Length);
        }
        finally
        {
            Array.Clear(plain, 0, plain.Length);
            Array.Clear(hash, 0, hash.Length);
            Array.Clear(salt, 0, salt.Length);
        }
    }

    public static bool Verify(string userId, string password)
    {
        if (!File.Exists(AuthPath)) return false;
        byte[] encrypted = File.ReadAllBytes(AuthPath);
        byte[] plain = ProtectedData.Unprotect(encrypted, null, DataProtectionScope.CurrentUser);
        try
        {
            using (var stream = new MemoryStream(plain))
            using (var reader = new BinaryReader(stream, Encoding.UTF8))
            {
                if (reader.ReadInt32() != 1) return false;
                string savedUserId = reader.ReadString();
                int saltLength = reader.ReadInt32();
                if (saltLength != 32) return false;
                byte[] salt = reader.ReadBytes(saltLength);
                int hashLength = reader.ReadInt32();
                if (hashLength < 20 || hashLength > 64) return false;
                byte[] savedHash = reader.ReadBytes(hashLength);
                byte[] candidate = Derive(password, salt);
                bool matches = string.Equals(savedUserId, userId, StringComparison.Ordinal) && ConstantTimeEquals(savedHash, candidate);
                Array.Clear(salt, 0, salt.Length);
                Array.Clear(savedHash, 0, savedHash.Length);
                Array.Clear(candidate, 0, candidate.Length);
                return matches;
            }
        }
        catch
        {
            return false;
        }
        finally
        {
            Array.Clear(plain, 0, plain.Length);
            Array.Clear(encrypted, 0, encrypted.Length);
        }
    }

    private static byte[] Derive(string password, byte[] salt)
    {
        using (var derive = new Rfc2898DeriveBytes(password, salt, Iterations))
            return derive.GetBytes(32);
    }

    private static bool ConstantTimeEquals(byte[] left, byte[] right)
    {
        int difference = left.Length ^ right.Length;
        int length = Math.Min(left.Length, right.Length);
        for (int i = 0; i < length; i++) difference |= left[i] ^ right[i];
        return difference == 0;
    }
}

internal sealed class LoginForm : Form
{
    private readonly TextBox userIdBox = new TextBox();
    private readonly TextBox passwordBox = new TextBox();
    private readonly TextBox confirmBox = new TextBox();
    private readonly Label statusLabel = new Label();
    private readonly bool signupMode;

    public LoginForm()
    {
        signupMode = !LocalAuth.HasAccount;
        Text = signupMode ? "사이트 계정 관리 - 회원가입" : "사이트 계정 관리 - 로그인";
        StartPosition = FormStartPosition.CenterScreen;
        ClientSize = new Size(430, signupMode ? 390 : 335);
        FormBorderStyle = FormBorderStyle.FixedSingle;
        MaximizeBox = false;
        BackColor = Color.FromArgb(245, 247, 250);
        Font = new Font("Malgun Gothic", 10F);

        Controls.Add(new Label
        {
            Text = signupMode ? "처음 사용자 회원가입" : "사이트 계정 관리 로그인",
            Location = new Point(34, 28),
            AutoSize = true,
            Font = new Font("Malgun Gothic", 18F, FontStyle.Bold),
            ForeColor = Color.FromArgb(30, 41, 59)
        });
        Controls.Add(new Label
        {
            Text = signupMode
                ? "앱을 잠글 아이디와 마스터 비밀번호를 만들어 주세요."
                : "가입한 아이디와 마스터 비밀번호를 입력하세요.",
            Location = new Point(36, 72),
            Size = new Size(360, 45),
            ForeColor = Color.FromArgb(71, 85, 105)
        });

        AddField("아이디", userIdBox, 126);
        AddField("마스터 비밀번호", passwordBox, 184);
        passwordBox.UseSystemPasswordChar = true;

        int buttonY;
        if (signupMode)
        {
            AddField("비밀번호 확인", confirmBox, 242);
            confirmBox.UseSystemPasswordChar = true;
            buttonY = 300;
        }
        else
        {
            confirmBox.Visible = false;
            buttonY = 242;
        }

        var actionButton = new Button
        {
            Text = signupMode ? "회원가입하고 시작" : "로그인",
            Location = new Point(145, buttonY),
            Size = new Size(250, 42),
            FlatStyle = FlatStyle.Flat,
            BackColor = Color.FromArgb(37, 99, 235),
            ForeColor = Color.White,
            Cursor = Cursors.Hand
        };
        actionButton.FlatAppearance.BorderSize = 0;
        actionButton.Click += Submit;
        Controls.Add(actionButton);

        statusLabel.Location = new Point(38, buttonY + 51);
        statusLabel.Size = new Size(355, 28);
        statusLabel.ForeColor = Color.FromArgb(185, 28, 28);
        Controls.Add(statusLabel);

        AcceptButton = actionButton;
    }

    private void AddField(string label, TextBox box, int y)
    {
        Controls.Add(new Label
        {
            Text = label,
            Location = new Point(36, y + 7),
            Size = new Size(105, 27),
            ForeColor = Color.FromArgb(51, 65, 85)
        });
        box.Location = new Point(145, y);
        box.Size = new Size(250, 31);
        Controls.Add(box);
    }

    private void Submit(object sender, EventArgs e)
    {
        string userId = userIdBox.Text.Trim();
        string password = passwordBox.Text;
        if (userId.Length < 3)
        {
            statusLabel.Text = "아이디를 3자 이상 입력해 주세요.";
            userIdBox.Focus();
            return;
        }
        if (password.Length < 8)
        {
            statusLabel.Text = "마스터 비밀번호를 8자 이상 입력해 주세요.";
            passwordBox.Focus();
            return;
        }

        if (signupMode)
        {
            if (password != confirmBox.Text)
            {
                statusLabel.Text = "비밀번호 확인이 일치하지 않습니다.";
                confirmBox.Focus();
                return;
            }
            try
            {
                LocalAuth.Register(userId, password);
                DialogResult = DialogResult.OK;
                Close();
            }
            catch
            {
                statusLabel.Text = "회원가입 정보를 저장하지 못했습니다.";
            }
            return;
        }

        try
        {
            if (LocalAuth.Verify(userId, password))
            {
                DialogResult = DialogResult.OK;
                Close();
            }
            else
            {
                statusLabel.Text = "아이디 또는 비밀번호가 올바르지 않습니다.";
                passwordBox.Clear();
                passwordBox.Focus();
            }
        }
        catch
        {
            statusLabel.Text = "로그인 정보를 확인할 수 없습니다.";
        }
    }
}

internal sealed class AccountManagerForm : Form
{
    private readonly List<AccountRecord> accounts = new List<AccountRecord>();
    private readonly ListBox accountList = new ListBox();
    private readonly TextBox siteNameBox = new TextBox();
    private readonly TextBox loginUrlBox = new TextBox();
    private readonly TextBox usernameBox = new TextBox();
    private readonly TextBox passwordBox = new TextBox();
    private readonly TextBox birthDateBox = new TextBox();
    private readonly Label statusLabel = new Label();
    private readonly Timer clipboardTimer = new Timer();
    private string editingId = string.Empty;
    private string lastCopiedValue = string.Empty;

    private static readonly string DataDirectory = Path.Combine(
        Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
        "InsuranceAccountManager");
    private static readonly string DataPath = Path.Combine(DataDirectory, "accounts.dat");

    public AccountManagerForm()
    {
        Text = "사이트 계정 관리";
        StartPosition = FormStartPosition.CenterScreen;
        ClientSize = new Size(820, 565);
        MinimumSize = new Size(836, 604);
        BackColor = Color.FromArgb(245, 247, 250);
        Font = new Font("Malgun Gothic", 10F);

        BuildInterface();
        LoadAccounts();
        RefreshAccountList();
        StartNewAccount();

        clipboardTimer.Interval = 20000;
        clipboardTimer.Tick += delegate { ClearClipboardIfUnchanged(); };
        FormClosed += delegate { ClearClipboardIfUnchanged(); };
    }

    private void BuildInterface()
    {
        Controls.Add(new Label
        {
            Text = "사이트 로그인 정보 관리",
            Location = new Point(24, 18),
            AutoSize = true,
            Font = new Font("Malgun Gothic", 17F, FontStyle.Bold),
            ForeColor = Color.FromArgb(30, 41, 59)
        });

        Controls.Add(new Label
        {
            Text = "어떤 사이트든 로그인 정보를 등록하고 필요한 값을 빠르게 복사하세요.",
            Location = new Point(26, 56),
            Size = new Size(750, 24),
            ForeColor = Color.FromArgb(71, 85, 105)
        });

        var listPanel = new Panel
        {
            Location = new Point(24, 91),
            Size = new Size(245, 420),
            BackColor = Color.White,
            BorderStyle = BorderStyle.FixedSingle
        };
        Controls.Add(listPanel);

        listPanel.Controls.Add(new Label
        {
            Text = "등록된 사이트",
            Location = new Point(15, 14),
            AutoSize = true,
            Font = new Font("Malgun Gothic", 11F, FontStyle.Bold)
        });

        accountList.Location = new Point(14, 49);
        accountList.Size = new Size(215, 310);
        accountList.BorderStyle = BorderStyle.FixedSingle;
        accountList.SelectedIndexChanged += AccountListSelectedIndexChanged;
        listPanel.Controls.Add(accountList);

        var newButton = MakeButton("+ 새 사이트", new Point(14, 372), new Size(215, 34), false);
        newButton.Click += delegate { StartNewAccount(); };
        listPanel.Controls.Add(newButton);

        var editPanel = new Panel
        {
            Location = new Point(285, 91),
            Size = new Size(510, 420),
            BackColor = Color.White,
            BorderStyle = BorderStyle.FixedSingle
        };
        Controls.Add(editPanel);

        editPanel.Controls.Add(new Label
        {
            Text = "사이트 정보",
            Location = new Point(18, 14),
            AutoSize = true,
            Font = new Font("Malgun Gothic", 11F, FontStyle.Bold)
        });

        AddLabeledInput(editPanel, "사이트명", siteNameBox, 52, "예: 현대해상");
        AddLabeledInput(editPanel, "로그인 주소", loginUrlBox, 100, "https://...");
        AddLabeledInputWithCopy(editPanel, "아이디", usernameBox, 148, false);
        AddLabeledInputWithCopy(editPanel, "비밀번호", passwordBox, 196, true);
        AddLabeledInputWithCopy(editPanel, "추가 정보", birthDateBox, 244, false);

        var chromeButton = MakeButton("Chrome 열기", new Point(126, 294), new Size(110, 36), false);
        chromeButton.Click += delegate { OpenLoginPage("Chrome"); };
        editPanel.Controls.Add(chromeButton);

        var edgeButton = MakeButton("Edge 열기", new Point(248, 294), new Size(110, 36), false);
        edgeButton.Click += delegate { OpenLoginPage("Edge"); };
        editPanel.Controls.Add(edgeButton);

        var whaleButton = MakeButton("Whale 열기", new Point(370, 294), new Size(110, 36), false);
        whaleButton.Click += delegate { OpenLoginPage("Whale"); };
        editPanel.Controls.Add(whaleButton);

        var saveButton = MakeButton("저장", new Point(126, 350), new Size(166, 40), true);
        saveButton.Click += delegate { SaveCurrentAccount(); };
        editPanel.Controls.Add(saveButton);

        var deleteButton = MakeButton("삭제", new Point(314, 350), new Size(166, 40), false);
        deleteButton.BackColor = Color.FromArgb(254, 242, 242);
        deleteButton.ForeColor = Color.FromArgb(185, 28, 28);
        deleteButton.Click += delegate { DeleteCurrentAccount(); };
        editPanel.Controls.Add(deleteButton);

        statusLabel.Text = "사이트를 새로 등록하거나 왼쪽 목록에서 선택하세요.";
        statusLabel.Location = new Point(26, 526);
        statusLabel.Size = new Size(760, 25);
        statusLabel.ForeColor = Color.FromArgb(22, 101, 52);
        Controls.Add(statusLabel);
    }

    private static Button MakeButton(string text, Point location, Size size, bool primary)
    {
        var button = new Button
        {
            Text = text,
            Location = location,
            Size = size,
            FlatStyle = FlatStyle.Flat,
            BackColor = primary ? Color.FromArgb(37, 99, 235) : Color.FromArgb(248, 250, 252),
            ForeColor = primary ? Color.White : Color.FromArgb(30, 64, 175),
            Cursor = Cursors.Hand
        };
        button.FlatAppearance.BorderColor = primary ? Color.FromArgb(37, 99, 235) : Color.FromArgb(203, 213, 225);
        return button;
    }

    private static void AddLabeledInput(Panel panel, string label, TextBox box, int y, string placeholder)
    {
        panel.Controls.Add(new Label
        {
            Text = label,
            Location = new Point(18, y + 7),
            Size = new Size(95, 28),
            ForeColor = Color.FromArgb(51, 65, 85)
        });
        box.Location = new Point(126, y);
        box.Size = new Size(354, 31);
        box.Tag = placeholder;
        panel.Controls.Add(box);
    }

    private void AddLabeledInputWithCopy(Panel panel, string label, TextBox box, int y, bool password)
    {
        panel.Controls.Add(new Label
        {
            Text = label,
            Location = new Point(18, y + 7),
            Size = new Size(95, 28),
            ForeColor = Color.FromArgb(51, 65, 85)
        });

        box.Location = new Point(126, y);
        box.Size = new Size(245, 31);
        box.UseSystemPasswordChar = password;
        panel.Controls.Add(box);

        var copyButton = MakeButton("복사", new Point(386, y - 1), new Size(94, 34), false);
        copyButton.Tag = new CopyTarget(label, box);
        copyButton.Click += CopyField;
        panel.Controls.Add(copyButton);
    }

    private void CopyField(object sender, EventArgs e)
    {
        var target = (CopyTarget)((Button)sender).Tag;
        string value = target.Box.Text.Trim();
        if (value.Length == 0)
        {
            statusLabel.Text = target.Label + " 값이 비어 있습니다.";
            target.Box.Focus();
            return;
        }

        Clipboard.SetText(value);
        lastCopiedValue = value;
        statusLabel.Text = target.Label + "을(를) 복사했습니다. 20초 뒤 자동 삭제됩니다.";
        clipboardTimer.Stop();
        clipboardTimer.Start();
    }

    private void StartNewAccount()
    {
        editingId = string.Empty;
        accountList.ClearSelected();
        siteNameBox.Clear();
        loginUrlBox.Clear();
        usernameBox.Clear();
        passwordBox.Clear();
        birthDateBox.Clear();
        siteNameBox.Focus();
        statusLabel.Text = "새 사이트 정보를 입력한 뒤 저장을 누르세요.";
    }

    private void AccountListSelectedIndexChanged(object sender, EventArgs e)
    {
        var account = accountList.SelectedItem as AccountRecord;
        if (account == null) return;
        editingId = account.Id;
        siteNameBox.Text = account.SiteName;
        loginUrlBox.Text = account.LoginUrl;
        usernameBox.Text = account.Username;
        passwordBox.Text = account.Password;
        birthDateBox.Text = account.BirthDate;
        statusLabel.Text = account.SiteName + " 정보를 불러왔습니다.";
    }

    private void SaveCurrentAccount()
    {
        string siteName = siteNameBox.Text.Trim();
        if (siteName.Length == 0)
        {
            statusLabel.Text = "사이트명을 입력해 주세요.";
            siteNameBox.Focus();
            return;
        }

        AccountRecord account = FindById(editingId);
        if (account == null)
        {
            account = new AccountRecord();
            accounts.Add(account);
            editingId = account.Id;
        }

        account.SiteName = siteName;
        account.LoginUrl = loginUrlBox.Text.Trim();
        account.Username = usernameBox.Text.Trim();
        account.Password = passwordBox.Text;
        account.BirthDate = birthDateBox.Text.Trim();

        SaveAccounts();
        RefreshAccountList(account.Id);
        statusLabel.Text = siteName + " 정보를 암호화하여 저장했습니다.";
    }

    private void DeleteCurrentAccount()
    {
        AccountRecord account = FindById(editingId);
        if (account == null)
        {
            statusLabel.Text = "삭제할 사이트를 왼쪽 목록에서 선택하세요.";
            return;
        }

        if (MessageBox.Show(
            account.SiteName + " 정보를 삭제할까요?",
            "사이트 삭제",
            MessageBoxButtons.YesNo,
            MessageBoxIcon.Question) != DialogResult.Yes) return;

        accounts.Remove(account);
        SaveAccounts();
        RefreshAccountList();
        StartNewAccount();
        statusLabel.Text = "사이트 정보를 삭제했습니다.";
    }

    private void OpenLoginPage(string browserName)
    {
        string url = loginUrlBox.Text.Trim();
        if (!Uri.IsWellFormedUriString(url, UriKind.Absolute) ||
            !(url.StartsWith("https://", StringComparison.OrdinalIgnoreCase) || url.StartsWith("http://", StringComparison.OrdinalIgnoreCase)))
        {
            statusLabel.Text = "올바른 로그인 주소를 입력해 주세요.";
            loginUrlBox.Focus();
            return;
        }

        string[] browserPaths;
        if (browserName == "Edge")
        {
            browserPaths = new[]
            {
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86), "Microsoft", "Edge", "Application", "msedge.exe"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles), "Microsoft", "Edge", "Application", "msedge.exe"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Microsoft", "Edge", "Application", "msedge.exe")
            };
        }
        else if (browserName == "Whale")
        {
            browserPaths = new[]
            {
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles), "Naver", "Naver Whale", "Application", "whale.exe"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86), "Naver", "Naver Whale", "Application", "whale.exe"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Naver", "Naver Whale", "Application", "whale.exe")
            };
        }
        else
        {
            browserPaths = new[]
            {
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86), "Google", "Chrome", "Application", "chrome.exe"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles), "Google", "Chrome", "Application", "chrome.exe"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Google", "Chrome", "Application", "chrome.exe")
            };
        }

        foreach (string browserPath in browserPaths)
        {
            if (!File.Exists(browserPath)) continue;
            Process.Start(browserPath, url);
            statusLabel.Text = "로그인 페이지를 " + browserName + "로 열었습니다.";
            return;
        }

        MessageBox.Show(browserName + " 브라우저를 찾지 못했습니다.", "실행 실패", MessageBoxButtons.OK, MessageBoxIcon.Warning);
    }

    private AccountRecord FindById(string id)
    {
        if (string.IsNullOrEmpty(id)) return null;
        return accounts.Find(delegate(AccountRecord item) { return item.Id == id; });
    }

    private void RefreshAccountList(string selectId = null)
    {
        accountList.BeginUpdate();
        accountList.Items.Clear();
        accounts.Sort(delegate(AccountRecord a, AccountRecord b)
        {
            return string.Compare(a.SiteName, b.SiteName, StringComparison.CurrentCultureIgnoreCase);
        });
        foreach (AccountRecord account in accounts) accountList.Items.Add(account);
        accountList.EndUpdate();

        if (selectId == null) return;
        for (int i = 0; i < accountList.Items.Count; i++)
        {
            if (((AccountRecord)accountList.Items[i]).Id != selectId) continue;
            accountList.SelectedIndex = i;
            break;
        }
    }

    private void SaveAccounts()
    {
        Directory.CreateDirectory(DataDirectory);
        byte[] plain;
        using (var stream = new MemoryStream())
        using (var writer = new BinaryWriter(stream, Encoding.UTF8))
        {
            writer.Write(1);
            writer.Write(accounts.Count);
            foreach (AccountRecord account in accounts)
            {
                writer.Write(account.Id ?? string.Empty);
                writer.Write(account.SiteName ?? string.Empty);
                writer.Write(account.LoginUrl ?? string.Empty);
                writer.Write(account.Username ?? string.Empty);
                writer.Write(account.Password ?? string.Empty);
                writer.Write(account.BirthDate ?? string.Empty);
            }
            writer.Flush();
            plain = stream.ToArray();
        }

        try
        {
            byte[] encrypted = ProtectedData.Protect(plain, null, DataProtectionScope.CurrentUser);
            string tempPath = DataPath + ".tmp";
            File.WriteAllBytes(tempPath, encrypted);
            if (File.Exists(DataPath)) File.Replace(tempPath, DataPath, null);
            else File.Move(tempPath, DataPath);
            Array.Clear(encrypted, 0, encrypted.Length);
        }
        finally
        {
            Array.Clear(plain, 0, plain.Length);
        }
    }

    private void LoadAccounts()
    {
        if (!File.Exists(DataPath)) return;
        try
        {
            byte[] encrypted = File.ReadAllBytes(DataPath);
            byte[] plain = ProtectedData.Unprotect(encrypted, null, DataProtectionScope.CurrentUser);
            try
            {
                using (var stream = new MemoryStream(plain))
                using (var reader = new BinaryReader(stream, Encoding.UTF8))
                {
                    int version = reader.ReadInt32();
                    int count = reader.ReadInt32();
                    if (version != 1 || count < 0 || count > 1000) throw new InvalidDataException();
                    for (int i = 0; i < count; i++)
                    {
                        accounts.Add(new AccountRecord
                        {
                            Id = reader.ReadString(),
                            SiteName = reader.ReadString(),
                            LoginUrl = reader.ReadString(),
                            Username = reader.ReadString(),
                            Password = reader.ReadString(),
                            BirthDate = reader.ReadString()
                        });
                    }
                }
            }
            finally
            {
                Array.Clear(plain, 0, plain.Length);
                Array.Clear(encrypted, 0, encrypted.Length);
            }
        }
        catch
        {
            MessageBox.Show(
                "저장된 계정 정보를 열 수 없습니다. 현재 Windows 사용자 계정이 맞는지 확인해 주세요.",
                "데이터 열기 실패",
                MessageBoxButtons.OK,
                MessageBoxIcon.Error);
        }
    }

    private void ClearClipboardIfUnchanged()
    {
        clipboardTimer.Stop();
        try
        {
            if (!string.IsNullOrEmpty(lastCopiedValue) && Clipboard.ContainsText() && Clipboard.GetText() == lastCopiedValue)
                Clipboard.Clear();
        }
        catch { }
        lastCopiedValue = string.Empty;
    }

    private sealed class CopyTarget
    {
        public readonly string Label;
        public readonly TextBox Box;
        public CopyTarget(string label, TextBox box) { Label = label; Box = box; }
    }
}

internal static class Program
{
    [STAThread]
    private static void Main()
    {
        Application.EnableVisualStyles();
        Application.SetCompatibleTextRenderingDefault(false);
        using (var login = new LoginForm())
        {
            if (login.ShowDialog() != DialogResult.OK) return;
        }
        Application.Run(new AccountManagerForm());
    }
}
