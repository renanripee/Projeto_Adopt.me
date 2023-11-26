import Card from "../Card/Card";
import "./CardList.css";
import { IAnimal } from "../../../interfaces/animal";

interface CardListProps {
  animals: IAnimal[];
  hover: string;
}

function CardListAdocao(props: CardListProps) {
  function onClick(id: number) {
    console.log(id);
  }

  return (
    <div className="cards-display">
      {props.animals.length === 0 ? (
        <p>Nenhum animal disponível para adoção.</p>
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

export default CardListAdocao;
