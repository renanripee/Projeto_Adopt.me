import { api } from "./Api";

export async function postTutor(data: any, token: string | null) {
  const response = await api(token).post("/tutores ", data);
  return response;
}
export async function putTutor(data: any, token: string | null) {
  const response = await api(token).put("/tutores", data);
  return response;
}

export async function getTutor(token: string | null) {
  const response = await api(token).get("/tutores");
  return response;
}

export async function getTutorById(token: string | null, id: number) {
  const response = await api(token).get(`/tutores/${id}`);
  return response;
}

export async function deleteTutor(token: string | null, id: number) {
  const response = await api(token).delete(`/tutores/${id}`);
  return response;
}

export async function getTutorByCpf(token: string | null, cpf: string) {
  const response = await api(token).get(`/tutores/cpf/${cpf}`);
  return response;
}
