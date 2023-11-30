import "./TutorForm.css";
import "../Login/LoginForm/LoginForm.css";
import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import listaTutores from "../Table/itens.json";
import { ITutor } from "../../interfaces/tutor";
import { postTutor } from "../../services/tutor";
import { useAuth } from "../../context/AuthContext";
import { getTutorById } from "../../services/tutor";
import { putTutor } from "../../services/tutor";

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
  const [tutor, setTutor] = useState<any>({
    id: 0,
    cpf: "",
    nome: "",
    telefone: "",
    endereco: {
      cep: "",
      rua: "",
      bairro: "",
      numero: "",
    },
  });

  type TutorErrors = {
    [campo: string]: string | undefined;
  };

  const [errorMessages, setErrorMessages] = useState<TutorErrors>({});

  const token = useAuth();

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const tutorData = await getTutorById(token.token, Number(props.id));
        console.log(tutorData.data);
        setTutor(tutorData.data);
      } catch (error) {
        console.error("Erro ao obter dados do tutor:", error);
      }
    };

    fetchTutor();
  }, [props.id, token.token]);
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

    if (tutor.endereco.cep.replace(/\D/g, "").length !== 8) {
      newErrors.cep = "* CEP deve conter 8 dígitos.";
    }

    if (tutor.endereco.cep === "") {
      newErrors.cep = "* CEP deve conter 8 dígitos.";
    }
    if (tutor.endereco.rua === "") {
      newErrors.rua = "*  Campo obrigatório.";
    }
    if (tutor.endereco.bairro === "") {
      newErrors.bairro = "*  Campo obrigatório.";
    }
    if (tutor.endereco.numero === "") {
      newErrors.numero = "* ";
    }

    if (Object.values(newErrors).every((value) => value === undefined)) {
      let tutorPostData: any;
      let tutorPutData: any;
      tutor.telefone = formatPhone(tutor.telefone);
      tutor.cpf = unformatCPF(tutor.cpf);

      if (!props.id) {
        tutorPostData = {
          nome: tutor.nome,
          cpf: tutor.cpf,
          telefone: tutor.telefone,
          endereco: {
            cep: tutor.endereco.cep,
            rua: tutor.endereco.rua,
            bairro: tutor.endereco.bairro,
            numero: tutor.endereco.numero,
          },
        };
        console.log(token.token);
        console.log("Enviando dados:", tutorPostData);
        postTutor(tutorPostData, String(token.token))
          .then((response) => {
            console.log(response);
            window.open("/tutores", "_self");
          })
          .catch((error) => {
            alert(error.response.data);
          });
      } else {
        tutorPutData = {
          id: tutor.id,
          nome: tutor.nome,
          cpf: tutor.cpf,
          telefone: tutor.telefone,
          endereco: {
            cep: tutor.endereco.cep,
            rua: tutor.endereco.rua,
            bairro: tutor.endereco.bairro,
            numero: tutor.endereco.numero,
          },
        };
        console.log(token.token);
        console.log("Enviando dados:", tutorPutData);
        putTutor(tutorPutData, String(token.token))
          .then((response) => {
            console.log(response);
            window.open("/tutores", "_self");
          })
          .catch((error) => {
            console.log(error);
            alert(error.response.data);
          });
      }
    } else {
      setErrorMessages(newErrors);
    }
  }

  function formatCPF(value: string) {
    if (!tutor || !tutor.cpf) {
      return ""; // ou outra lógica apropriada
    }

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

  const formatPhone = (value: string) => {
    if (!tutor || !tutor.cpf) {
      return ""; // ou outra lógica apropriada
    }

    const cleanedValue = value.replace(/\D/g, "");

    const formattedValue = cleanedValue.replace(
      /^(\d{2})(\d{5})(\d{4})$/,
      "($1)$2-$3"
    );

    return formattedValue;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const nameParts = name.split(".");

    setTutor((prevTutor: any) => {
      if (nameParts.length === 1) {
        return {
          ...prevTutor,
          [name]: value,
        };
      } else {
        const [outerKey, innerKey] = nameParts;
        return {
          ...prevTutor,
          [outerKey]: {
            ...prevTutor[outerKey],
            [innerKey]: value,
          },
        };
      }
    });
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
                  value={tutor.endereco.cep}
                  onChange={handleInputChange}
                  name="endereco.cep"
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
                  value={tutor.endereco.rua}
                  onChange={handleInputChange}
                  name="endereco.rua"
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
                  value={tutor.endereco.bairro}
                  onChange={handleInputChange}
                  name="endereco.bairro"
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
                  value={tutor.endereco.numero}
                  onChange={handleInputChange}
                  name="endereco.numero"
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
