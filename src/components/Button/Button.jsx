import React from "react";
import css from "./Button.module.css";

export default function Button({ children, onClick, size }) {
  return (
    <button onClick={onClick} className={size ? css[size] : null}>
      {children}
    </button>
  );
}
