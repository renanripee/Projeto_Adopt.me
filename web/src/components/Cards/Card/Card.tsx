import { useEffect, useState } from "react";
import "./Card.css";
import animall from "../../../assets/killua.jpg";

type CardProps = {
  animal: any;
  hover: string;
};

function Card(props: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
        <img
          src={`http://localhost:8080/imagens/${props.animal.foto}`}
          alt="imagem"
        />
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
  );
}

export default Card;
