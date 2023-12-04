import { api } from "./Api";

export async function postAdocao(data: any, token: string | null) {
  const response = await api(token).post("/adocoes", data);
  return response;
}

export async function putAdocao(data: any, token: string | null) {
  const response = await api(token).put("/adocoes", data);
  return response;
}

export async function getAdocao(token: string | null) {
  const response = await api(token).get("/adocoes");
  return response;
}

export async function getAdocaoById(token: string | null, id: number) {
  const response = await api(token).get(`/adocoes/${id}`);
  return response;
}

export async function deleteAdocao(token: string | null, id: number) {
  const response = await api(token).delete(`/adocoes/${id}`);
  return response;
}
