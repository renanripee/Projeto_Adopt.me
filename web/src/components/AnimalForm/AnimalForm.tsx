import "./AnimalForm.css";
import "../TutorForm/TutorForm.css";
import hover from "../../assets/adicionar-imagem.png";
import { Link } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import listaAnimais from "../../views/Animal/animais.json";
import { IAnimal } from "../../interfaces/animal";
import { IAnimalPost } from "../../interfaces/animal";
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

  const [errorMessages, setErrorMessages] = useState<AnimalErrors>({});
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [filePost, setFilePost] = useState<File | undefined>(undefined);
  const [isImageSelected, setIsImageSelected] = useState(false);

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
      setIsImageSelected(true);
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    //get animal
    const itemEncontrado = listaAnimais.find((item) => item.id === props.id);
    if (itemEncontrado) {
      setAnimal(itemEncontrado);
    }
  }, [props.id]);

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
      const animalPostData = {
        nome: animal.nome,
        tipo: animal.tipo,
        raca: animal.raca,
        descricao: animal.descricao,
        foto: filePost,
        idade: animal.idade,
        adotado: false,
      };

      console.log("Enviando dados:", animalPostData);

      if (animalPostData !== undefined) {
        //logica de post/put
        window.open("/animais", "_self");
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
          ) : (
            <img
              src={hover}
              alt="hover"
              className="animal-form-image"
              style={{ cursor: "pointer" }}
            />
          )}
        </label>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleImageChange}
        ></input>
        {errorMessages.foto && (
          <div className="error-container">
            <p className="error-message">{errorMessages.foto}</p>
          </div>
        )}
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
            <div>
              <p className="tutor-form-cancel-button">Excluir</p>
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