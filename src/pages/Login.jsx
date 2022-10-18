import { useCallback, useEffect } from "react";
import AuthForm from "../components/Form/AuthForm";
import onLogin from "../api/auth/onLogin";
import { useNavigate } from "react-router-dom";
import { useLoginState, useLoginAction } from "../context/LoginContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useLoginAction();
  const loginState = useLoginState();

  // 로그인 했을 경우 '/todo'로 리다이렉트
  useEffect(() => {
    if (loginState) {
      navigate("/todo");
    }
  }, [loginState, navigate]);

  const onSubmit = useCallback(
    async (e, formData) => {
      e.preventDefault();
      const token = await onLogin(formData);
      if (token) {
        login(token);
        navigate("/todo", { replace: true });
      }
    },
    [login, navigate]
  );

  return <AuthForm title="로그인" onSubmit={onSubmit} />;
}
