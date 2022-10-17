import { Client } from "../config";

export function requestLogin(formData) {
  return Client.post("/auth/signin", formData)
}

export function requestSignUp(formData) {
  return Client.post("/auth/signup", formData);
}