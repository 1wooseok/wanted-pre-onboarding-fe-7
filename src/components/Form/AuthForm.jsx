import React from "react";
import useFormData from "../../hooks/useFormData";
import { isValidAuthForm } from "../../utils/validateFormData";

export default function AuthForm({ title, onSubmit }) {
  const [formData, onChange] = useFormData({
    email: "",
    password: "",
  });
  const isValidForm = isValidAuthForm(formData);

  return (
    <>
      <h1>{title} 페이지</h1>
      <form onSubmit={(e) => onSubmit(e, formData)}>
        <label htmlFor="emailForm">이메일</label>
        <input
          id="emailForm"
          name="email"
          value={formData.email}
          onChange={onChange}
          type="email"
        />

        <label htmlFor="passwordForm">비밀번호</label>
        <input
          id="passwordForm"
          name="password"
          value={formData.password}
          type="password"
          onChange={onChange}
        />

        <button type="submit" disabled={!isValidForm}>
          {title}
        </button>
      </form>
    </>
  );
}
