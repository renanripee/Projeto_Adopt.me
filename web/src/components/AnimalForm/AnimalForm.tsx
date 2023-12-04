import "./AnimalForm.css";
import "../TutorForm/TutorForm.css";
import hover from "../../assets/adicionar-imagem.png";
import { Link } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import listaAnimais from "../../views/Animal/animais.json";
import { IAnimal, IAnimalPost } from "../../interfaces/animal";
import {
  postAnimal,
  putAnimal,
  getAnimalById,
  deleteAnimal,
} from "../../services/animal";
import { useAuth } from "../../context/AuthContext";

import React from "react";

type AnimalFormProps = {
  id?: number;
};

const camposObrigatorios: Array<keyof IAnimalPost> = [
  "nome",
  "tipo",
  "raca",
  "descricao",
  "foto",
  "idade",
];

function AnimalForm(props: AnimalFormProps) {
  const [animal, setAnimal] = useState<IAnimal>({
    id: -1,
    nome: "",
    idade: null,
    tipo: "",
    raca: "",
    descricao: "",
    foto: "",
    adotado: false,
  });

  type AnimalErrors = {
    [campo: string]: string | undefined;
  };

  const token = useAuth();

  const [errorMessages, setErrorMessages] = useState<AnimalErrors>({});
  const [filePost, setFilePost] = useState<File>(undefined as any);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);

  const fileInputRef = React.createRef<HTMLInputElement>();

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);

    if (file) {
      setFilePost(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      setIsImageSelected(true);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    getAnimalById(token.token, Number(props.id))
      .then((response) => {
        setAnimal(response.data);
        setIsImageSelected(true);
        console.log(isImageSelected);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.id]);

  function handleDelete(id: number) {
    deleteAnimal(token.token, id)
      .then((response) => {
        console.log(response);
        window.open("/animais", "_self");
      })
      .catch((error) => {
        alert("Não é possível apagar um animal adotado.");
        console.log(error);
      });
  }

  function handleSubmit() {
    let newErrors: AnimalErrors = {};

    camposObrigatorios.forEach((campo) => {
      console.log(isImageSelected);

      if (isImageSelected) {
        newErrors.foto = undefined;
        if (
          campo === "idade" &&
          (animal[campo] === null || animal[campo] === null)
        ) {
          newErrors[campo] = `*`;
        } else if (animal[campo] === "") {
          newErrors[campo] = `* Campo obrigatório.`;
        } else {
          newErrors[campo] = undefined;
        }
      } else {
        if (campo === "foto" && !isImageSelected) {
          newErrors[campo] = `* Campo obrigatório.`;
        } else if (
          campo === "idade" &&
          (animal[campo] === null || animal[campo] === null)
        ) {
          newErrors[campo] = `*`;
        } else if (animal[campo] === "") {
          newErrors[campo] = `* Campo obrigatório.`;
        } else {
          newErrors[campo] = undefined;
        }
      }
    });

    if (Object.values(newErrors).every((value) => value === undefined)) {
      let animalPostData: any;
      let animalPutData: any;

      const formData = new FormData();

      if (props.id) {
        animalPutData = {
          id: Number(animal.id),
          nome: animal.nome,
          idade: Number(animal.idade),
          tipo: animal.tipo,
          raca: animal.raca,
          descricao: animal.descricao,
        };

        putAnimal(animalPutData, token.token)
          .then((response) => {
            console.log(response);
            setTimeout(() => {
              window.open("/animais", "_self");
            }, 500);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        animalPostData = {
          nome: animal.nome,
          idade: Number(animal.idade),
          tipo: animal.tipo,
          raca: animal.raca,
          descricao: animal.descricao,
        };

        const json = JSON.stringify(animalPostData);
        const blob = new Blob([json], {
          type: "application/json",
        });

        formData.append("animal", blob);
        formData.append("imagem", filePost);

        console.log(animalPostData);
        console.log(filePost);
        console.log("Imagem no FormData:", formData.get("imagem"));

        postAnimal(formData, token.token)
          .then((response) => {
            console.log(response);
            setTimeout(() => {
              window.open("/animais", "_self");
            }, 500);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      setErrorMessages(newErrors);
      console.log("Erro no envio:", newErrors);
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "idade" && !Number.isInteger(Number(value))) {
      return;
    }

    setAnimal((prevAnimal) => ({
      ...prevAnimal,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAnimal((prevAnimal) => ({
      ...prevAnimal,
      [name]: value,
    }));
  };

  return (
    <form className="animal-form-content">
      <div className="tutor-form-image-area">
        <label
          htmlFor="fileInput"
          onClick={handleImageClick}
          className="animal-image-container"
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selecionado"
              className="animal-form-image selected"
              style={{ cursor: "pointer" }}
            />
          ) : !selectedImage && animal.foto ? (
            <img
              src={`http://localhost:8080/imagens/${animal.foto}`}
              alt="hover"
              className="animal-form-image"
              style={{ cursor: "pointer" }}
            />
          ) : (
            <img
              src={hover}
              alt="hover"
              className="animal-form-image"
              style={{ cursor: "pointer" }}
            />
          )}
        </label>
        {!props.id ? (
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleImageChange}
          ></input>
        ) : null}
        {errorMessages.foto && (
          <div className="error-container">
            <p className="error-message">{errorMessages.foto}</p>
          </div>
        )}
        {props.id ? (
          <div onClick={() => handleDelete(Number(props.id))}>
            <p className="tutor-form-cancel-button animal-form-excluir">
              EXCLUIR
            </p>
          </div>
        ) : null}
      </div>
      <div className="tutor-form-input-area">
        <div className="tutor-form-input-column">
          <div className="input-area-tutor-form nome">
            <label>Nome</label>
            <input
              className={`input-tutor-form ${
                errorMessages.nome ? "error" : ""
              }`}
              type="text"
              value={animal.nome}
              onChange={handleInputChange}
              name="nome"
            />
            {errorMessages.nome && (
              <div className="error-container">
                <p className="error-message">{errorMessages.nome}</p>
              </div>
            )}
          </div>
          <div className="input-area-tutor-form idade">
            <label>Idade</label>
            <input
              className={`input-tutor-form ${
                errorMessages.idade ? "error" : ""
              }`}
              type="text"
              value={animal.idade !== null ? String(animal.idade) : ""}
              onChange={handleInputChange}
              name="idade"
            />
            {errorMessages.idade && (
              <div className="error-container">
                <p className="error-message">{errorMessages.idade}</p>
              </div>
            )}
          </div>
        </div>
        <div className="tutor-form-input-column">
          <div className="input-area-tutor-form raca">
            <label>Raça</label>
            <input
              className={`input-tutor-form ${
                errorMessages.raca ? "error" : ""
              }`}
              type="text"
              value={animal.raca}
              onChange={handleInputChange}
              name="raca"
            />
            {errorMessages.raca && (
              <div className="error-container">
                <p className="error-message">{errorMessages.raca}</p>
              </div>
            )}
          </div>
          <div className="input-area-tutor-form tipo">
            <label>Tipo</label>
            <input
              className={`input-tutor-form ${
                errorMessages.tipo ? "error" : ""
              }`}
              type="text"
              value={animal.tipo}
              onChange={handleInputChange}
              name="tipo"
            />
            {errorMessages.tipo && (
              <div className="error-container">
                <p className="error-message">{errorMessages.tipo}</p>
              </div>
            )}
          </div>
        </div>
        <div className="input-area-tutor-form descricao">
          <label>Descrição</label>
          <textarea
            className={`input-tutor-form-descricao ${
              errorMessages.descricao ? "error" : ""
            }`}
            value={animal.descricao}
            onChange={handleTextAreaChange}
            name="descricao"
          />
          {errorMessages.descricao && (
            <div className="error-container">
              <p className="error-message">{errorMessages.descricao}</p>
            </div>
          )}
        </div>
        <div className="tutor-form-buttons">
          <Link to="/animais" style={{ textDecoration: "none" }}>
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
    </form>
  );
}

export default AnimalForm;
