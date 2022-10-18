import React from "react";
import useFormData from "../../hooks/useFormData";
import { isValidAuthForm } from "../../utils/validateFormData";
import Button from "../Button/Button";
import css from "./AuthForm.module.css";

export default function AuthForm({ title, onSubmit }) {
  const [formData, onChange] = useFormData({
    email: "",
    password: "",
  });
  // 조건에 따라 버튼 비활성화
  const isValidForm = isValidAuthForm(formData);

  return (
    <div>
      <h1>{title} 페이지</h1>
      <form onSubmit={(e) => onSubmit(e, formData)} className={css.AuthForm}>
        <div>
          <label htmlFor="emailForm">이메일</label>
          <br />
          <input
            id="emailForm"
            name="email"
            value={formData.email}
            onChange={onChange}
            type="email"
          />
        </div>

        <div>
          <label htmlFor="passwordForm">비밀번호</label>
          <br />
          <input
            id="passwordForm"
            name="password"
            value={formData.password}
            type="password"
            onChange={onChange}
          />
        </div>
        {/* 조건에 따라 버튼 비활성화 */}
        <Button type="submit" disabled={!isValidForm}>
          {title}
        </Button>
      </form>
    </div>
  );
}
