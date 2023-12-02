import Card from "../Card/Card";
import "./CardList.css";
import { Link } from "react-router-dom";

interface CardListProps {
  animals: any[];
  hover: string;
}

function CardListAnimal(props: CardListProps) {
  return (
    <div className="cards-display">
      {props.animals.length === 0 ? (
        <p>Nenhum animal disponível.</p>
      ) : (
        props.animals.map((animal) => (
          <div className="card-item" key={animal.id}>
            <Link to={`/editar-animal/${animal.id}`}>
              <Card animal={animal} hover={props.hover} />
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default CardListAnimal;
