import { requestLogin } from "./authApi";

export default async function loginAction(formData) {
  try {
    const { data } = await requestLogin(formData);
    return data.access_token
  } catch (err) {
    if (err.response.status === 401) {
      alert("아이디, 비밀번호를 확인 해 주세요.")
    }
    if (err.response.status === 404) {
      alert(err.response.data);
    }
  }
}
