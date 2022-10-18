const REGEX = {
  email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,

};

// 이메일 & 비밀번호 조건 검사
export function isValidAuthForm(formData) {
  const { email, password } = formData;

  if (!REGEX.email.test(email)) {
    return false;
  }

  if (password.length < 8) {
    return false;
  }

  return true;
}

// 이메일 조건: @포함
// 비밀번호 조건: 8자 이상
// 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요