import Card from "../Card/Card";
import "./CardList.css";
import { IAnimal } from "../../../interfaces/animal";

interface CardListProps {
  animals: IAnimal[];
  hover: string;
}

function CardList(props: CardListProps) {
  function onClick(id: number) {
    console.log(id);
  }

  return (
    <div className="cards-display">
      {props.animals.length === 0 ? (
        <p>Nenhum animal disponível para adoção.</p>
      ) : (
        props.animals.map((animal, index) => (
          <div className="card-item">
            <Card
              key={index}
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

export default CardList;
