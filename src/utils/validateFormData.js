const REGEX = {
  email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,

};

export function isValidAuthForm(formData) {
  const { email, password } = formData;

  if (!REGEX.email.test(email)) {
    return false;
  }

  if (password.length < 7) {
    return false;
  }

  return true;
}
