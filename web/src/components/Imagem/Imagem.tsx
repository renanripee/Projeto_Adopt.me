import React, { ChangeEvent } from "react";
import { useState } from "react";

interface ImagemProps {
  hover: string;
  animalFoto?: string;
  errorMessages?: string;
}

function Imagem({ hover, animalFoto, errorMessages }: ImagemProps) {
  const [selectedImage, setSelectedImage] = useState<string>("");
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
    updateImage(file);
  };

  function getFoto(file: string) {
    //busca no back
    //updateImage(imagemBack);
  }

  function updateImage(file: File | undefined) {
    if (file) {
      setIsImageSelected(true);
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
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
        ) : !selectedImage && animalFoto ? (
          <>
            <>{getFoto(animalFoto)}</>

            <img
              src={selectedImage}
              alt="hover"
              className="animal-form-image"
              style={{ cursor: "pointer" }}
            />
          </>
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
      {errorMessages && (
        <div className="error-container">
          <p className="error-message">{errorMessages}</p>
        </div>
      )}
    </div>
  );
}

export default Imagem;
