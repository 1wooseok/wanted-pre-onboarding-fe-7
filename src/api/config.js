import axios from 'axios';
import { LocalStorage } from '../utils/localStorage';

const baseURL = process.env.REACT_APP_API_ENDPOINT;

const axiosInstance = () => {
  const instance = axios.create({
    baseURL
  });
  return instance;
}

const authInstance = () => {
  const access_token = LocalStorage.get("access_token");
  const instance = axios.create({
    baseURL,
    headers: {
      Authorization: "Bearer " + access_token
    }
  });
  return instance;
}

export const Client = axiosInstance();
export const AuthClient = authInstance;