$port = 8765
$root = $PSScriptRoot
$cacheVersion = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
$url = "http://localhost:$port/index.html?v=$cacheVersion"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Start-Process $url
Write-Host "Serving $root at $url"
Write-Host "Close this window to stop the server."

while ($listener.IsListening) {
  $context = $listener.GetContext()
  $path = $context.Request.Url.LocalPath
  if ($path -eq "/") {
    $path = "/index.html"
  }

  $relative = $path.TrimStart("/").Replace("/", [IO.Path]::DirectorySeparatorChar)
  $file = Join-Path $root $relative

  if (Test-Path -LiteralPath $file -PathType Leaf) {
    $bytes = [IO.File]::ReadAllBytes($file)
    $ext = [IO.Path]::GetExtension($file).ToLowerInvariant()
    $contentType = switch ($ext) {
      ".html" { "text/html; charset=utf-8" }
      ".js" { "text/javascript; charset=utf-8" }
      ".css" { "text/css; charset=utf-8" }
      ".json" { "application/json; charset=utf-8" }
      ".pdf" { "application/pdf" }
      default { "application/octet-stream" }
    }
    $context.Response.ContentType = $contentType
    $context.Response.Headers.Add("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
    $context.Response.Headers.Add("Pragma", "no-cache")
    $context.Response.Headers.Add("Expires", "0")
    $context.Response.ContentLength64 = $bytes.Length
    $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $context.Response.StatusCode = 404
  }

  $context.Response.Close()
}
