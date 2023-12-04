export interface IAnimal {
  id: number;
  nome: string;
  idade: number | null;
  tipo: string;
  raca: string;
  descricao: string;
  foto: string | File;
  adotado: boolean;
}

export interface IAnimalPost {
  nome: string;
  idade: number | null;
  tipo: string;
  raca: string;
  descricao: string;
  foto: File | undefined;
  adotado: boolean;
}

export interface IAnimalPut {
  id: number;
  nome: string;
  idade: number | null;
  tipo: string;
  raca: string;
  descricao: string;
  foto: File | undefined;
  adotado: boolean;
}

export interface IAnimalGet {
  id: number;
  nome: string;
  idade: number;
  tipo: string;
  raca: string;
  descricao: string;
  foto: string;
  adotado: boolean;
}
