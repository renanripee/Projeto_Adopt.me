import Card from "../Card/Card";
import "./CardList.css";
import { IAnimal } from "../../../interfaces/animal";

interface CardListProps {
  animals: IAnimal[];
  hover: string;
}

function CardListAnimal(props: CardListProps) {
  function onClick(id: number) {}

  return (
    <div className="cards-display">
      {props.animals.length === 0 ? (
        <p>Nenhum animal disponível.</p>
      ) : (
        props.animals.map((animal) => (
          <div className="card-item" key={animal.id}>
            <Card
              animal={animal}
              hover={props.hover}
              onClick={() => onClick(animal.id)}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default CardListAnimal;
