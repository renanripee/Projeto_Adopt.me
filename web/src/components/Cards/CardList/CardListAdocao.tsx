import Card from "../Card/Card";
import "./CardList.css";
import { IAnimal } from "../../../interfaces/animal";
import { Link } from "react-router-dom";

interface CardListProps {
  animals: IAnimal[];
  hover: string;
}

function CardListAdocao(props: CardListProps) {
  return (
    <div className="cards-display">
      {props.animals.length === 0 ? (
        <p>Nenhum animal disponível para adoção.</p>
      ) : (
        props.animals.map((animal) => (
          <div className="card-item" key={animal.id}>
            <Link to={`/nova-adocao/${animal.id}`}>
              <Card animal={animal} hover={props.hover} />
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default CardListAdocao;
