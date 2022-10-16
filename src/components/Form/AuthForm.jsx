import React, { useState } from "react";
import useFormData from "../../hooks/useFormData";
import { isValidAuthForm } from "../../utils/validateFormData";

export default function AuthForm({
  title,
  onSubmit,
  // formData,
  // onInput,
  // disabled,
}) {
  const [disabled, setDisabled] = useState(true);
  const [formData, onChange] = useFormData({
    email: "",
    password: "",
  });

  const onInput = (e) => {
    onChange(e);
    if (isValidAuthForm(formData)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="emailForm">이메일</label>
        <input
          id="emailForm"
          name="email"
          value={formData.email}
          onChange={onInput}
          type="email"
        />

        <label htmlFor="passwordForm">비밀번호</label>
        <input
          id="passwordForm"
          name="password"
          value={formData.password}
          type="password"
          onChange={onInput}
        />

        <button type="submit" disabled={disabled}>
          회원가입
        </button>
      </form>
    </>
  );
}
