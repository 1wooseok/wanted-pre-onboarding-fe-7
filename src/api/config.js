import axios from 'axios';

const baseURL = process.env.REACT_APP_API_ENDPOINT;

const axiosInstance = () => {
  const instance = axios.create({
    baseURL
  });
  return instance;
}

export const Client = axiosInstance();