import { requestSignUp } from "./authApi";

export default async function signupAction(formData) {
  try {
    const { data } = await requestSignUp(formData);
    return data.access_token;
  } catch (err) {
    if (err.response.status === 400) {
      alert(err.response.data.message);
    }
    else if (err.response.status === 401) {
      alert("아이디, 비밀번호를 확인 해 주세요.")
    }
  }
}
