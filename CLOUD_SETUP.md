# 로그인 및 클라우드 저장 설정

이 프로그램은 Supabase 이메일 로그인과 사용자별 클라우드 저장을 지원합니다.

## 1. Supabase 프로젝트 만들기

1. Supabase에서 새 프로젝트를 만듭니다.
2. 프로젝트의 SQL Editor에서 `supabase-schema.sql` 파일 내용을 실행합니다.
3. Authentication의 이메일 로그인이 활성화되어 있는지 확인합니다.

## 2. 연결값 입력하기

Supabase 프로젝트 설정의 API 화면에서 다음 두 값을 확인합니다.

- Project URL
- anon 또는 publishable key

`supabase-config.js`에 입력합니다.

```js
window.INSURANCE_APP_CONFIG = {
  supabaseUrl: "https://프로젝트주소.supabase.co",
  supabaseAnonKey: "공개용-anon-또는-publishable-key",
};
```

`service_role` 키는 관리자용 비밀 키이므로 이 파일에 절대 넣지 마세요.

## 3. 사용하기

1. `index.html`을 엽니다.
2. 이메일과 6자 이상의 비밀번호를 입력하고 회원가입합니다.
3. 이메일 확인 설정이 켜져 있다면 확인 메일을 승인한 뒤 로그인합니다.
4. 기존 브라우저에 저장된 고객정보는 해당 계정의 첫 로그인 때 클라우드로 이전됩니다.

로그인 후 고객정보와 작성 중인 내용은 로컬 캐시와 클라우드에 함께 자동 저장됩니다. 다른 컴퓨터에서도 같은 계정으로 로그인하면 저장된 고객정보를 불러옵니다.

## 운영 권장사항

실제 고객의 민감정보를 다룰 때는 `file://`로만 열기보다 HTTPS 웹 호스팅에 배포해 사용하세요. Supabase의 Row Level Security 정책은 `supabase-schema.sql`에 포함되어 있어 로그인한 사용자는 자신의 데이터만 읽고 수정할 수 있습니다.
