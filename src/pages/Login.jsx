import AuthForm from "../components/Form/AuthForm";
import loginAction from "../api/actions/loginAction";
import { Navigate, useNavigate } from "react-router-dom";
import { useLoginState, useLoginAction } from "../context/LoginContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useLoginAction();
  const loginState = useLoginState();

  const onSubmit = async (e, formData) => {
    e.preventDefault();
    const token = await loginAction(formData);
    if (token) {
      login(token);
      navigate("/todo", { replace: true });
    }
  };

  return (
    <>
      {loginState && <Navigate to="/todo" />}
      <AuthForm title="로그인" onSubmit={onSubmit} />
    </>
  );
}
