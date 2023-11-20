import "./TutorForm.css";
import "../../components/Login/LoginButton/LoginButton.css";
import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import listaTutores from "../Table/itens.json";

type TutorData = {
  id: string;
  cpf: string;
  nome: string;
  telefone: string;
  cep: string;
  rua: string;
  bairro: string;
  numero: string;
};

type TutorFormProps = {
  id?: number;
};

const camposObrigatorios: Array<keyof TutorData> = [
  "nome",
  "cpf",
  "telefone",
  "cep",
  "rua",
  "bairro",
  "numero",
];

function TutorForm(props: TutorFormProps) {
  const [tutor, setTutor] = useState<TutorData>({
    id: "",
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
    //get tutor
    const itemEncontrado = listaTutores.find(
      (item) => item.id === String(props.id)
    );
    if (itemEncontrado) {
      setTutor(itemEncontrado);
    }
  }, []);

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
      console.log("Enviando dados:", tutor);
      tutor.telefone = formatPhone(tutor.telefone);
      // lógica de envio (POST ou PUT) aqui
      window.open("/tutores", "_self");
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
      <form onSubmit={handleSubmit} className="container">
        <div className="tutor-form-content">
          <div className="tutor-form-input-area">
            <div className="input-area-tutor-form">
              <label>Nome</label>
              <input
                type="text"
                className={`input-tutor-form nome ${
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
              <div className="input-area-tutor-form">
                <label>CPF</label>
                <input
                  type="text"
                  className={`input-tutor-form cpf ${
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
              <div className="input-area-tutor-form">
                <label>Telefone</label>
                <input
                  type="text"
                  className={`input-tutor-form telefone ${
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
              <div className="input-area-tutor-form">
                <label>CEP</label>
                <input
                  type="text"
                  className={`input-tutor-form cep ${
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
              <div className="input-area-tutor-form">
                <label>Rua</label>
                <input
                  type="text"
                  className={`input-tutor-form rua ${
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
              <div className="input-area-tutor-form">
                <label>Bairro</label>
                <input
                  type="text"
                  className={`input-tutor-form bairro ${
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
              <div className="input-area-tutor-form">
                <label>Número</label>
                <input
                  type="text"
                  className={`input-tutor-form numero ${
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
