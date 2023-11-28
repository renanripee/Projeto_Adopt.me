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
    id: string;
    cpf: string;
    nome: string;
    telefone: string;
    cep: string;
    rua: string;
    bairro: string;
    numero: string;
  };
}
