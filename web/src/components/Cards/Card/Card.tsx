import { useState } from "react";
import "./Card.css";
import IAnimal from "../../../interfaces/animal";

type CardProps = {
  animal: IAnimal;
  hover: string;
  onClick: (id: number) => void;
};

function Card(props: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  function getImage() {
    return props.animal.imagem;
  }

  return (
    <div onClick={() => props.onClick(props.animal.id)}>
      <div
        className="card-layout"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          {isHovered ? (
            <img className="hover-card-image" src={props.hover} alt="hover" />
          ) : null}
        </div>
        <div className="card-image">
          <img src={getImage()} alt="imagem" />
        </div>
        <div className="card-discription">
          {!isHovered ? (
            <div className="card-discription-background"></div>
          ) : null}
          <div className="card-text">
            {!isHovered ? (
              <div>
                <p className="card-animal-name">{props.animal.nome}</p>
                <p className="card-animal-type">{props.animal.tipo}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
