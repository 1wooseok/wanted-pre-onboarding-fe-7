import React, { useState, useMemo, useContext } from "react";
import { LocalStorage } from "../utils/localStorage";
const LoginContext = React.createContext();
const LoginAction = React.createContext();

export function LoginProvider({ children }) {
  const [loginState, setLoginState] = useState(
    Boolean(LocalStorage.get("access_token"))
  );

  const actions = useMemo(
    () => ({
      login(token) {
        LocalStorage.set("access_token", token);
        setLoginState(true);
      },
      logout() {
        LocalStorage.remove("access_token");
        setLoginState(false);
      },
    }),
    []
  );

  return (
    <LoginAction.Provider value={actions}>
      <LoginContext.Provider value={loginState}>
        {children}
      </LoginContext.Provider>
    </LoginAction.Provider>
  );
}

export function useLoginState() {
  const loginState = useContext(LoginContext);

  if (loginState === undefined) {
    throw new Error("Login state is undefined");
  }

  return loginState;
}

export function useLoginAction() {
  const actions = useContext(LoginAction);

  if (actions === undefined) {
    throw new Error("Login actions is undefined");
  }

  return actions;
}
