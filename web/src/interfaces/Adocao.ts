export interface IAdocao {
  id: number;
  data: string;
  animal: {
    id: number;
    nome: string;
    idade: number | null;
    tipo: string;
    raca: string;
    descricao: string;
    foto: string | File;
    adotado: boolean;
  };
  tutor: {
    id: number;
    cpf: string;
    nome: string;
    telefone: string;
    cep: string;
    rua: string;
    bairro: string;
    numero: string;
  };
}

export interface IAdocaoPost {
  data: string;
  id_animal: number;
  id_tutor: number;
}

export interface IAdocaoPut {
  id: number;
  data: string;
  id_animal: number;
  id_tutor: number;
}
