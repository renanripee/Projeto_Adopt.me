import { ChangeEvent, useEffect, useState } from "react";
import { IAdocao, IAdocaoPost, IAdocaoPut } from "../../interfaces/Adocao";
import "./AdocaoForm.css";
import "../AnimalForm/AnimalForm.css";
import "../TutorForm/TutorForm.css";
import "../Login/LoginButton/LoginButton.css";
import { Link } from "react-router-dom";
import adocaoList from "../../views/adocao/adocao.json";

type AdocaoFormProps = {
  id?: number;
};

function AdocaoForm(props: AdocaoFormProps) {
  type AdocaoErrors = {
    [campo: string]: string;
  };

  const [errorMessages, setErrorMessages] = useState<AdocaoErrors>({});

  const [adocao, setAdocao] = useState<IAdocao>({
    id: 0,
    data: "",
    tutor: {
      id: 0,
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
    const itemEncontrado = adocaoList.find((item) => item.id === props.id);
    if (itemEncontrado) {
      setAdocao(itemEncontrado);
    }
  }, [props.id]);

  function handleSubmit() {
    let newErrors: AdocaoErrors = {};

    if (adocao.data.replace(/\D/g, "").length !== 8) {
      newErrors.data = "* Peencha a data corretamente.";
    }

    if (Object.values(newErrors).every((value) => value === undefined)) {
      let adocaoPostData: IAdocaoPost;
      let adocaoPutData: IAdocaoPut;

      adocao.data = adocao.data + " 00:00";

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
    } else {
      setErrorMessages(newErrors);
    }
  }

  function handleSearch() {}

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAdocao((prevAdocao) => ({
      ...prevAdocao,
      data: name === "data" ? formatData(value) : value,
    }));
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
                  value={adocao.tutor.cpf}
                  name="nome"
                  disabled={props.id !== undefined}
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
              <Link to="/adocoes" style={{ textDecoration: "none" }}>
                <p className="tutor-form-cancel-button">CANCELAR</p>
              </Link>
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
    </form>
  );
}

export default AdocaoForm;
