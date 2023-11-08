import { useState } from "react";
import "./Card.css";
import Image from "../../../assets/killua.jpg";
import Hover from "../../../assets/hover.png";

type CardProps = {
  animal: {
    name: string;
    type: string;
  };
};

function Card(props: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className="card-layout"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          {isHovered ? (
            <img className="hover-card-image" src={Hover} alt="hover" />
          ) : null}
        </div>
        <div className="card-image">
          <img src={Image} alt="imagem" />
        </div>
        <div className="card-discription">
          {!isHovered ? (
            <div className="card-discription-background"></div>
          ) : null}
          <div className="card-text">
            {!isHovered ? (
              <div>
                <p className="card-animal-name">{props.animal.name}</p>
                <p className="card-animal-type">{props.animal.type}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
