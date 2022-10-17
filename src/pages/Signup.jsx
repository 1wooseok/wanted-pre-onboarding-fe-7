import { useNavigate } from "react-router-dom";
import AuthForm from "../components/Form/AuthForm";
import onSignUp from "../api/auth/onSignupUp";
import { useLoginAction } from "../context/LoginContext";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useLoginAction();

  const onSubmit = async (e, formData) => {
    e.preventDefault();
    const token = await onSignUp(formData);
    if (token) {
      login(token);
      navigate("/todo", { replace: true });
    }
  };

  return <AuthForm title="회원가입" onSubmit={onSubmit} />;
}
