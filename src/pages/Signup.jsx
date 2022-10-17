import { useNavigate } from "react-router-dom";
import AuthForm from "../components/Form/AuthForm";
import signupAction from "../api/actions/signupAction";
import { useLoginAction } from "../context/LoginContext";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useLoginAction();

  const onSubmit = async (e, formData) => {
    e.preventDefault();
    const token = await signupAction(formData);
    if (token) {
      login(token);
      navigate("/todo", { replace: true });
    }
  };

  return <AuthForm title="회원가입" onSubmit={onSubmit} />;
}
