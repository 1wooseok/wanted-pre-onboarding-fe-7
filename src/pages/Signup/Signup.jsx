import { useState } from "react";
import useFormData from "../../hooks/useFormData";
import signupAction from "../../actions/signupAction";
import { isValidLoginForm } from "../../utils/validateFormData";
import { useNavigate } from "react-router-dom";
import { useLoginAction } from "../../context/LoginContext";
import AuthForm from "../../components/Form/AuthForm";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useLoginAction();
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
    const token = await signupAction(formData);
    if (token) {
      login(token);
      navigate("/todo", { replace: true });
    }
  };

  return (
    <AuthForm
      title="회원가입 페이지"
      onSubmit={onSubmit}
      // onInput={onInput}
      // formData={formData}
      // disabled={disabled}
    />
  );
}
