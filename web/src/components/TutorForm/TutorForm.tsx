import "./TutorForm.css";
import "../Login/LoginButton/LoginButton.css";
import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import listaTutores from "../Table/itens.json";
import { ITutor } from "../../interfaces/tutor";

type TutorFormProps = {
  id?: number;
};

const camposObrigatorios: Array<keyof ITutor> = [
  "nome",
  "cpf",
  "telefone",
  "cep",
  "rua",
  "bairro",
  "numero",
];

function TutorForm(props: TutorFormProps) {
  const [tutor, setTutor] = useState<ITutor>({
    id: 0,
    cpf: "",
    nome: "",
    telefone: "",
    cep: "",
    rua: "",
    bairro: "",
    numero: "",
  });

  type TutorErrors = {
    [campo: string]: string | undefined;
  };

  const [errorMessages, setErrorMessages] = useState<TutorErrors>({});

  useEffect(() => {
    //get tutor by id
    const itemEncontrado = listaTutores.find((item) => item.id === props.id);
    if (itemEncontrado) {
      setTutor(itemEncontrado);
    }
  }, [props.id]);

  function handleSubmit() {
    const newErrors: TutorErrors = {};

    camposObrigatorios.forEach((campo) => {
      if (tutor[campo] === "") {
        newErrors[campo] = `* Campo obrigatório.`;
      }
    });

    if (tutor.cpf.replace(/\D/g, "").length !== 11) {
      newErrors.cpf = "* CPF deve conter 11 dígitos.";
    }

    if (tutor.telefone.replace(/\D/g, "").length !== 11) {
      newErrors.telefone = "* Telefone deve conter 11 dígitos.";
    }

    if (tutor.cep.replace(/\D/g, "").length !== 8) {
      newErrors.cep = "* CEP deve conter 8 dígitos.";
    }

    if (Object.values(newErrors).every((value) => value === undefined)) {
      let tutorPostData: any;
      let tutorPutData: ITutor;
      tutor.telefone = formatPhone(tutor.telefone);
      if (!props.id) {
        tutorPostData = {
          nome: tutor.nome,
          cpf: tutor.cpf,
          telefone: tutor.telefone,
          cep: tutor.cep,
          rua: tutor.rua,
          bairro: tutor.bairro,
          numero: tutor.numero,
        };
        console.log("Enviando dados:", tutorPostData);
        //requisicao com tutorPostData
        // window.open("/tutores", "_self");
      } else {
        tutorPutData = {
          id: tutor.id,
          nome: tutor.nome,
          cpf: tutor.cpf,
          telefone: tutor.telefone,
          cep: tutor.cep,
          rua: tutor.rua,
          bairro: tutor.bairro,
          numero: tutor.numero,
        };
        console.log("Enviando dados:", tutorPutData);
        //requsicao com tutor
        // window.open("/tutores", "_self");
      }
    } else {
      setErrorMessages(newErrors);
    }
  }

  function formatCPF(value: string) {
    const cleanedValue = value.replace(/\D/g, "");
    const formattedValue = cleanedValue.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      "$1.$2.$3-$4"
    );

    return formattedValue;
  }

  const formatPhone = (value: string) => {
    const cleanedValue = value.replace(/\D/g, "");

    const formattedValue = cleanedValue.replace(
      /^(\d{2})(\d{5})(\d{4})$/,
      "($1)$2-$3"
    );

    return formattedValue;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTutor((prevTutor) => ({
      ...prevTutor,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="tutor-form-content">
        <div>
          <div className="tutor-form-input-area">
            <div className="input-area-tutor-form nome-tutor-form">
              <label>Nome</label>
              <input
                type="text"
                className={`input-tutor-form ${
                  errorMessages.nome ? "error" : ""
                }`}
                value={tutor.nome}
                onChange={handleInputChange}
                name="nome"
              />
              {errorMessages.nome && (
                <div className="error-container">
                  <p className="error-message">{errorMessages.nome}</p>
                </div>
              )}
            </div>
            <div className="tutor-form-input-column">
              <div className="input-area-tutor-form cpf-tutor-form">
                <label>CPF</label>
                <input
                  type="text"
                  className={`input-tutor-form ${
                    errorMessages.cpf ? "error" : ""
                  }`}
                  value={formatCPF(tutor.cpf)}
                  onChange={handleInputChange}
                  name="cpf"
                  minLength={14}
                  maxLength={14}
                />
                {errorMessages.cpf && (
                  <p className="error-message">{errorMessages.cpf}</p>
                )}
              </div>
              <div className="input-area-tutor-form telefone-tutor-form">
                <label>Telefone</label>
                <input
                  type="text"
                  className={`input-tutor-form ${
                    errorMessages.telefone ? "error" : ""
                  }`}
                  value={formatPhone(tutor.telefone)}
                  onChange={handleInputChange}
                  name="telefone"
                  minLength={14}
                  maxLength={14}
                />
                {errorMessages.telefone && (
                  <p className="error-message">{errorMessages.telefone}</p>
                )}
              </div>
            </div>
          </div>
          <div className="tutor-form-input-area">
            <div className="tutor-form-adress">ENDEREÇO</div>
            <div className="tutor-form-input-column">
              <div className="input-area-tutor-form cep-tutor-form ">
                <label>CEP</label>
                <input
                  type="text"
                  className={`input-tutor-form ${
                    errorMessages.cep ? "error" : ""
                  }`}
                  value={tutor.cep}
                  onChange={handleInputChange}
                  name="cep"
                  minLength={8}
                  maxLength={8}
                />
                {errorMessages.cep && (
                  <p className="error-message">{errorMessages.cep}</p>
                )}
              </div>
              <div className="input-area-tutor-form rua-tutor-form">
                <label>Rua</label>
                <input
                  type="text"
                  className={`input-tutor-form ${
                    errorMessages.rua ? "error" : ""
                  }`}
                  value={tutor.rua}
                  onChange={handleInputChange}
                  name="rua"
                />
                {errorMessages.rua && (
                  <p className="error-message">{errorMessages.rua}</p>
                )}
              </div>
            </div>
            <div className="tutor-form-input-column">
              <div className="input-area-tutor-form bairro-tutor-form">
                <label>Bairro</label>
                <input
                  type="text"
                  className={`input-tutor-form ${
                    errorMessages.bairro ? "error" : ""
                  }`}
                  value={tutor.bairro}
                  onChange={handleInputChange}
                  name="bairro"
                />
                {errorMessages.bairro && (
                  <p className="error-message">{errorMessages.bairro}</p>
                )}
              </div>
              <div className="input-area-tutor-form numero-tutor-form">
                <label>Número</label>
                <input
                  type="text"
                  className={`input-tutor-form  ${
                    errorMessages.numero ? "error" : ""
                  }`}
                  value={tutor.numero}
                  onChange={handleInputChange}
                  name="numero"
                />
                {errorMessages.numero && <p className="error-message">*</p>}
              </div>
            </div>
          </div>

          <div className="tutor-form-buttons">
            <Link to="/tutores" style={{ textDecoration: "none" }}>
              <p className="tutor-form-cancel-button">CANCELAR</p>
            </Link>

            {props.id ? (
              <button
                type="button"
                className="login-button"
                onClick={() => handleSubmit()}
              >
                ATUALIZAR
              </button>
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
      </form>
    </div>
  );
}

export default TutorForm;
