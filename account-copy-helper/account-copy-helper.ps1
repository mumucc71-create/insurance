Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

[System.Windows.Forms.Application]::EnableVisualStyles()

$configPath = Join-Path $PSScriptRoot "account.enc.json"

function Read-ProtectedValue([string]$cipherText) {
    $secure = ConvertTo-SecureString $cipherText
    $pointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
    try {
        return [Runtime.InteropServices.Marshal]::PtrToStringBSTR($pointer)
    }
    finally {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($pointer)
    }
}

if (-not (Test-Path -LiteralPath $configPath)) {
    [System.Windows.Forms.MessageBox]::Show(
        "암호화된 설정 파일을 찾지 못했습니다.",
        "계정 복사 도구",
        [System.Windows.Forms.MessageBoxButtons]::OK,
        [System.Windows.Forms.MessageBoxIcon]::Error
    ) | Out-Null
    exit 1
}

try {
    $protected = Get-Content -LiteralPath $configPath -Raw | ConvertFrom-Json
    $account = [ordered]@{
        "사이트" = (Read-ProtectedValue $protected.site)
        "아이디" = (Read-ProtectedValue $protected.username)
        "비밀번호" = (Read-ProtectedValue $protected.password)
    }
}
catch {
    [System.Windows.Forms.MessageBox]::Show(
        "저장된 정보를 열 수 없습니다. 이 파일을 만든 Windows 계정에서 실행해 주세요.",
        "계정 복사 도구",
        [System.Windows.Forms.MessageBoxButtons]::OK,
        [System.Windows.Forms.MessageBoxIcon]::Error
    ) | Out-Null
    exit 1
}

$form = New-Object System.Windows.Forms.Form
$form.Text = "보험 사이트 계정 복사"
$form.StartPosition = "CenterScreen"
$form.ClientSize = New-Object System.Drawing.Size(460, 290)
$form.MinimumSize = New-Object System.Drawing.Size(476, 329)
$form.BackColor = [System.Drawing.Color]::FromArgb(245, 247, 250)
$form.Font = New-Object System.Drawing.Font("Malgun Gothic", 10)
$form.TopMost = $true

$title = New-Object System.Windows.Forms.Label
$title.Text = "보험 사이트 계정 정보"
$title.Location = New-Object System.Drawing.Point(24, 20)
$title.AutoSize = $true
$title.Font = New-Object System.Drawing.Font("Malgun Gothic", 16, [System.Drawing.FontStyle]::Bold)
$title.ForeColor = [System.Drawing.Color]::FromArgb(30, 41, 59)
$form.Controls.Add($title)

$description = New-Object System.Windows.Forms.Label
$description.Text = "필요한 항목의 복사 버튼을 누르세요. 비밀번호는 화면에 표시되지 않습니다."
$description.Location = New-Object System.Drawing.Point(26, 57)
$description.Size = New-Object System.Drawing.Size(410, 24)
$description.ForeColor = [System.Drawing.Color]::FromArgb(71, 85, 105)
$form.Controls.Add($description)

$status = New-Object System.Windows.Forms.Label
$status.Text = ""
$status.Location = New-Object System.Drawing.Point(26, 248)
$status.Size = New-Object System.Drawing.Size(410, 24)
$status.ForeColor = [System.Drawing.Color]::FromArgb(22, 101, 52)
$form.Controls.Add($status)

$clearTimer = New-Object System.Windows.Forms.Timer
$clearTimer.Interval = 20000
$clearTimer.Add_Tick({
    $clearTimer.Stop()
    try { [System.Windows.Forms.Clipboard]::Clear() } catch {}
    $status.Text = "보안을 위해 클립보드를 비웠습니다."
})

$y = 94
foreach ($entry in $account.GetEnumerator()) {
    $label = New-Object System.Windows.Forms.Label
    $label.Text = $entry.Key
    $label.Location = New-Object System.Drawing.Point(28, ($y + 10))
    $label.Size = New-Object System.Drawing.Size(72, 30)
    $label.ForeColor = [System.Drawing.Color]::FromArgb(51, 65, 85)
    $form.Controls.Add($label)

    $valueBox = New-Object System.Windows.Forms.TextBox
    $valueBox.Location = New-Object System.Drawing.Point(105, $y)
    $valueBox.Size = New-Object System.Drawing.Size(220, 32)
    $valueBox.ReadOnly = $true
    $valueBox.BackColor = [System.Drawing.Color]::White
    $valueBox.Text = if ($entry.Key -eq "비밀번호") { "************" } else { $entry.Value }
    $form.Controls.Add($valueBox)

    $button = New-Object System.Windows.Forms.Button
    $button.Text = "복사"
    $button.Location = New-Object System.Drawing.Point(340, ($y - 1))
    $button.Size = New-Object System.Drawing.Size(88, 34)
    $button.BackColor = [System.Drawing.Color]::FromArgb(37, 99, 235)
    $button.ForeColor = [System.Drawing.Color]::White
    $button.FlatStyle = [System.Windows.Forms.FlatStyle]::Flat
    $button.FlatAppearance.BorderSize = 0
    $button.Tag = [PSCustomObject]@{ Label = $entry.Key; Value = $entry.Value }
    $button.Add_Click({
        $data = $this.Tag
        [System.Windows.Forms.Clipboard]::SetText($data.Value)
        $status.Text = "$($data.Label)을(를) 복사했습니다. 20초 뒤 자동 삭제됩니다."
        $clearTimer.Stop()
        $clearTimer.Start()
    })
    $form.Controls.Add($button)

    $y += 48
}

$form.Add_FormClosed({
    $clearTimer.Stop()
    try { [System.Windows.Forms.Clipboard]::Clear() } catch {}
    foreach ($key in @($account.Keys)) { $account[$key] = $null }
})

[void]$form.ShowDialog()
