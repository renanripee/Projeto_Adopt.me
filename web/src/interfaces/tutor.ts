export interface ITutor {
  id: number;
  cpf: string;
  nome: string;
  telefone: string;
  cep: string;
  rua: string;
  bairro: string;
  numero: string;
}

export interface ITutorForm {
  id: number;
  cpf: string;
  nome: string;
  telefone: string;
  endereco: {
    cep: string;
    rua: string;
    bairro: string;
    numero: string;
  };
}
