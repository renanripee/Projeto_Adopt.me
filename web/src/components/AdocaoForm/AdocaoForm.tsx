import { ChangeEvent, useEffect, useState } from "react";
import { IAdocao, IAdocaoPost, IAdocaoPut } from "../../interfaces/Adocao";
import "./AdocaoForm.css";
import "../AnimalForm/AnimalForm.css";
import "../TutorForm/TutorForm.css";
import "../Login/LoginButton/LoginButton.css";
import { Link } from "react-router-dom";
import adocaoList from "../../views/adocao/adocao.json";
import animaisList from "../../views/Animal/animais.json";
import tutorList from "../Table/itens.json";
import ModalAdocao from "../Modals/ModalAdocao/ModalAdocao";

type AdocaoFormProps = {
  id?: number;
  id_animal?: number;
};

function AdocaoForm(props: AdocaoFormProps) {
  type AdocaoErrors = {
    [campo: string]: string;
  };

  const [errorMessages, setErrorMessages] = useState<AdocaoErrors>({});
  const [cpf, setCpf] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [adocao, setAdocao] = useState<IAdocao>({
    id: 0,
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
      const itemEncontrado = animaisList.find(
        (item) => item.id === props.id_animal
      );
      if (itemEncontrado) {
        setAdocao({
          ...adocao,
          animal: itemEncontrado,
        });
        console.log(adocao);
        return;
      }
    }
    if (props.id) {
      const itemEncontrado = adocaoList.find((item) => item.id === props.id);
      if (itemEncontrado) {
        setAdocao(itemEncontrado);
      }
    }
  }, []);

  function handleSubmit() {
    let newErrors: AdocaoErrors = {};

    if (adocao.data.replace(/\D/g, "").length !== 8) {
      newErrors.data = "* Peencha a data corretamente.";
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
          // post
          // window.open("/adocoes", "_self");
        } else {
          adocaoPutData = {
            id: adocao.id,
            data: adocao.data,
            id_animal: adocao.animal.id,
            id_tutor: adocao.tutor.id,
          };
          console.log("Enviando dados:", adocaoPutData);
          // put
          // window.open("/adocoes", "_self");
        }
      }
    } else {
      setErrorMessages(newErrors);
    }
  }

  function handleSearch() {
    //get tutor by cpf (e.target.value)
    //if (tutorEncontrado) {
    //setAdocao({ ...adocao, tutor: tutorEncontrado });
    //} else {
    // open modal
    //}
    console.log(cpf);

    const itemEncontrado = tutorList.find((item) => item.cpf === cpf);
    console.log(itemEncontrado);

    if (itemEncontrado) {
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
    } else {
      setIsModalOpen(true);
    }
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
            src={String(adocao.animal.foto)}
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
