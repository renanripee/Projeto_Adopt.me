import Card from "../Card/Card";
import "./CardList.css";
// fazer o get e mapear os objetos do array recebido

function CardList() {
  const animals = [
    {
      name: "A",
      type: "CACHORRO",
    },
    {
      name: "B",
      type: "GATO",
    },
    {
      name: "C",
      type: "GALINHA",
    },
    {
      name: "D",
      type: "GALINHA",
    },
    {
      name: "E",
      type: "GALINHA",
    },
    {
      name: "F",
      type: "GALINHA",
    },
    {
      name: "F",
      type: "GALINHA",
    },
  ];

  return (
    <div className="cards-display">
      {animals.map((animal, index) => (
        <div className="card-item">
          <Card key={index} animal={animal} />
        </div>
      ))}
    </div>
  );
}

export default CardList;
