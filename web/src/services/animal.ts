import { api } from "./Api";

export async function postAnimal(data: any, token: string | null) {
  const response = await api(token).post("/animais", data);
  return response;
}

export async function putAnimal(data: any, token: string | null) {
  const response = await api(token).put("/animais", data);
  return response;
}

export async function getAnimal(token: string | null) {
  const response = await api(token).get("/animais");
  return response;
}

export async function getAnimalById(token: string | null, id: number) {
  const response = await api(token).get(`/animais/${id}`);
  return response;
}

export async function deleteAnimal(token: string | null, id: number) {
  const response = await api(token).delete(`/animais/${id}`);
  return response;
}

export async function getAnimalsNotAdopted(token: string | null) {
  const response = await api(token).get("/animais/disponiveis");
  return response;
}
