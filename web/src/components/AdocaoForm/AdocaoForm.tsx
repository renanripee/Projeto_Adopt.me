import { ChangeEvent, useEffect, useState } from "react";
import { IAdocao, IAdocaoPost, IAdocaoPut } from "../../interfaces/Adocao";
import "./AdocaoForm.css";
import "../AnimalForm/AnimalForm.css";
import "../TutorForm/TutorForm.css";
import "../Login/LoginForm/LoginForm.css";
import { Link } from "react-router-dom";
import adocaoList from "../../views/adocao/adocao.json";
import tutorList from "../Table/itens.json";
import ModalAdocao from "../Modals/ModalAdocao/ModalAdocao";
import { getAnimalById } from "../../services/animal";
import { postAdocao, putAdocao, getAdocaoById } from "../../services/adocao";
import { getTutorByCpf } from "../../services/tutor";

type AdocaoFormProps = {
  id?: number;
  id_animal?: number;
};

function AdocaoForm(props: AdocaoFormProps) {
  type AdocaoErrors = {
    [campo: string]: string;
  };

  const token = localStorage.getItem("token");

  const [errorMessages, setErrorMessages] = useState<AdocaoErrors>({});
  const [cpf, setCpf] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [adocao, setAdocao] = useState<IAdocao>({
    id: -1,
    data: "",
    tutor: {
      id: -1,
      nome: "",
      cpf: "",
      telefone: "",
      numero: "",
      rua: "",
      bairro: "",
      cep: "",
    },
    animal: {
      id: 0,
      nome: "",
      idade: null,
      raca: "",
      descricao: "",
      tipo: "",
      foto: "",
      adotado: false,
    },
  });

  useEffect(() => {
    if (props.id_animal) {
      getAnimalById(token, Number(props.id_animal))
        .then((response) => {
          setAdocao({
            ...adocao,
            animal: response.data,
          });
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    //get
    if (props.id) {
      getAdocaoById(token, Number(props.id))
        .then((response) => {
          let aux = response.data.data[2];
          console.log(adocao);
          console.log(response.data.data);

          if (response.data.data[2] < 10) {
            aux = "0" + response.data.data[2];
          }

          let dataFormatada =
            aux + String(response.data.data[1]) + String(response.data.data[0]);
          setAdocao({
            id: response.data.id,
            data: String(dataFormatada),

            tutor: {
              id: response.data.tutor.id,
              nome: response.data.tutor.nome,
              cpf: response.data.tutor.cpf,
              telefone: response.data.tutor.telefone,
              numero: response.data.tutor.numero,
              rua: response.data.tutor.rua,
              bairro: response.data.tutor.bairro,
              cep: response.data.tutor.cep,
            },
            animal: {
              id: response.data.animal.id,
              nome: response.data.animal.nome,
              idade: response.data.animal.idade,
              raca: response.data.animal.raca,
              descricao: response.data.animal.descricao,
              tipo: response.data.animal.tipo,
              foto: response.data.animal.foto,
              adotado: response.data.animal.adotado,
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.id]);

  function handleSubmit() {
    let newErrors: AdocaoErrors = {};

    if (
      typeof adocao.data === "string" &&
      adocao.data.replace(/\D/g, "").length !== 8
    ) {
      newErrors.data = "* Preencha a data corretamente.";
    }

    if (adocao.tutor.id === -1) {
      newErrors.cpf = "* Pesquise um tutor válido.";
    }

    if (Object.values(newErrors).every((value) => value === undefined)) {
      let adocaoPostData: IAdocaoPost;
      let adocaoPutData: IAdocaoPut;

      if (adocao.tutor.id !== -1) {
        adocao.data = formatData(adocao.data);
        if (!props.id) {
          adocaoPostData = {
            data: adocao.data,
            id_animal: adocao.animal.id,
            id_tutor: adocao.tutor.id,
          };
          console.log("Enviando dados:", adocaoPostData);
          postAdocao(adocaoPostData, token)
            .then((response) => {
              console.log(response);
              window.open("/home", "_self");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          adocao.data = formatData(adocao.data);
          adocaoPutData = {
            id: adocao.id,
            data: adocao.data,
            id_animal: adocao.animal.id,
            id_tutor: adocao.tutor.id,
          };
          console.log("Enviando dados:", adocaoPutData);
          putAdocao(adocaoPutData, token)
            .then((response) => {
              console.log(response);
              window.open("/adocoes", "_self");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    } else {
      setErrorMessages(newErrors);
    }
  }

  function handleSearch() {
    getTutorByCpf(token, cpf)
      .then((response) => {
        const itemEncontrado = response.data;
        setAdocao({
          ...adocao,
          tutor: {
            id: itemEncontrado.id,
            nome: itemEncontrado.nome,
            cpf: itemEncontrado.cpf,
            telefone: itemEncontrado.telefone,
            numero: itemEncontrado.numero,
            rua: itemEncontrado.rua,
            bairro: itemEncontrado.bairro,
            cep: itemEncontrado.cep,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        setIsModalOpen(true);
      });
  }
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAdocao((prevAdocao) => ({
      ...prevAdocao,
      data: name === "data" ? formatData(value) : value,
    }));
  };

  function formatCPF(value: string) {
    const cleanedValue = value.replace(/\D/g, "");
    const formattedValue = cleanedValue.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      "$1.$2.$3-$4"
    );

    return formattedValue;
  }
  function unformatCPF(formattedValue: string): string {
    const cleanedValue = formattedValue.replace(/\D/g, "");
    const unformattedValue = cleanedValue.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      "$1$2$3$4"
    );

    return unformattedValue;
  }

  const handleCpfChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCpf(unformatCPF(e.target.value));
  };

  function formatData(valor: string) {
    if (!valor) {
      return ""; // ou outra lógica apropriada
    }
    console.log(valor);
    const valorLimpo = valor.replace(/\D/g, "");
    const dataFormatada = valorLimpo.replace(
      /^(\d{2})(\d{2})(\d{4})$/,
      "$1/$2/$3"
    );

    return dataFormatada;
  }

  return (
    <form className="animal-form">
      <div className="animal-form-content">
        <div className="tutor-form-image-area">
          <img
            src={`http://localhost:8080/imagens/${adocao.animal.foto}`}
            alt="Selecionado"
            className="adocao-form-image"
          />
        </div>

        <div className="tutor-form-input-area">
          <div className="tutor-form-adress">DADOS DO PET</div>
          <div className="tutor-form-input-column">
            <div className="input-area-tutor-form nome">
              <label>Nome</label>
              <input
                className="input-tutor-form"
                type="text"
                value={adocao.animal.nome}
                name="nome"
                disabled={true}
              />
            </div>
            <div className="input-area-tutor-form idade">
              <label>Idade</label>
              <input
                className="input-tutor-form"
                type="text"
                value={
                  adocao.animal.idade !== null
                    ? String(adocao.animal.idade)
                    : ""
                }
                name="idade"
                disabled={true}
              />
            </div>
          </div>
          <div className="tutor-form-input-column">
            <div className="input-area-tutor-form raca">
              <label>Raça</label>
              <input
                className="input-tutor-form"
                type="text"
                value={adocao.animal.raca}
                name="raca"
                disabled={true}
              />
            </div>
            <div className="input-area-tutor-form tipo">
              <label>Tipo</label>
              <input
                className="input-tutor-form"
                type="text"
                value={adocao.animal.tipo}
                name="tipo"
                disabled={true}
              />
            </div>
          </div>
          <div className="tutor-form-input-column">
            <div className="input-area-tutor-form">
              <div className="tutor-form-adress">DADOS DO TUTOR</div>
              <label>CPF</label>
              <div className="adopt-form-search-area">
                <input
                  className="input-tutor-form cpf-adocao"
                  type="text"
                  value={
                    !props.id_animal
                      ? formatCPF(adocao.tutor.cpf)
                      : formatCPF(cpf)
                  }
                  name="nome"
                  disabled={props.id !== undefined}
                  onChange={handleCpfChange}
                  maxLength={14}
                />
                {!props.id ? (
                  <button
                    type="button"
                    className="login-button pesquisar"
                    onClick={() => handleSearch()}
                  >
                    PESQUISAR
                  </button>
                ) : null}
              </div>
              <p className="error-message">{errorMessages.cpf}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="animal-form-content-2">
        <div className="tutor-form-input-area baixo">
          <div className="tutor-form-input-column baixo">
            <div className="input-area-tutor-form nome-tutor-adocao">
              <label>Nome</label>
              <input
                className="input-tutor-form "
                type="text"
                value={adocao.tutor.nome}
                name="nome-tutor"
                disabled={true}
              />
            </div>
            <div className="input-area-tutor-form telefone-tutor-adocao">
              <label>Telefone</label>
              <input
                className="input-tutor-form"
                type="text"
                value={adocao.tutor.telefone}
                name="telefone"
                disabled={true}
              />
            </div>
          </div>
          <div className="adocao-footer">
            <div className="data-de-adocao">
              <div className="adocao-erro-data">
                <div style={{ display: "flex" }}>
                  <p>Data de adoção:</p>
                  <input
                    type="text"
                    className={`input-data-adocao ${
                      errorMessages.data ? "error" : ""
                    }`}
                    onChange={handleInputChange}
                    value={formatData(adocao.data)}
                    minLength={8}
                    maxLength={8}
                  />
                </div>
                <p className="error-message">{errorMessages.data}</p>
              </div>
            </div>
            <div className="adocao-form-buttons">
              {props.id ? (
                <Link to="/adocoes" style={{ textDecoration: "none" }}>
                  <p className="tutor-form-cancel-button">CANCELAR</p>
                </Link>
              ) : (
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <p className="tutor-form-cancel-button">CANCELAR</p>
                </Link>
              )}

              {props.id ? (
                <div className="animal-form-edit-buttons">
                  <button
                    type="button"
                    className="login-button"
                    onClick={() => handleSubmit()}
                  >
                    ATUALIZAR
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="login-button"
                  onClick={() => handleSubmit()}
                >
                  CADASTRAR
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <ModalAdocao isOpen={isModalOpen} onClose={closeModal} />
    </form>
  );
}

export default AdocaoForm;
