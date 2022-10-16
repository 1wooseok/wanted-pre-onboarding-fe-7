import { useState } from "react";
import useFormData from "../../hooks/useFormData";
import { isValidLoginForm } from "../../utils/validateFormData";
import loginAction from "../../actions/loginAction";
import { useNavigate } from "react-router-dom";
import { useLoginState } from "../../context/LoginContext";
import { useLoginAction } from "../../context/LoginContext";
import { Navigate } from "react-router-dom";
import AuthForm from "../../components/Form/AuthForm";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useLoginAction();
  const loginState = useLoginState();
  // const [disabled, setDisabled] = useState(true);
  // const [formData, onChange] = useFormData({
  //   email: "",
  //   password: "",
  // });

  // const onInput = (e) => {
  //   onChange(e);
  //   if (isValidLoginForm(formData)) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // };

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
      <h1>로그인 페이지</h1>
      <AuthForm
        title="로그인 페이지"
        onSubmit={onSubmit}
        // onInput={onInput}
        // formData={formData}
        // disabled={disabled}
      />
    </>
  );
}
