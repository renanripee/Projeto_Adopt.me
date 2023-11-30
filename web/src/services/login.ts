import axios from "axios";

export async function login(data: any) {
  console.log(data);
  const response = await axios.post("http://localhost:8080/login", data);
  return response;
}
