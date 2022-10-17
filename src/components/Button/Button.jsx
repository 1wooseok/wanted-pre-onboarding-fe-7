import React from "react";
import css from "./Button.module.css";

export default function Button({ children, onClick, size, disabled }) {
  return (
    <button
      onClick={onClick}
      className={size ? `${css[size]} ${css.Button}` : css.Button}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
