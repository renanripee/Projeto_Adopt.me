import axios, { AxiosInstance } from "axios";

export function api(token: string | null): AxiosInstance {
  const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return instance;
}
