import Header from "../../components/Header/Header";
import CardList from "../../components/Cards/CardList/CardListAnimal";
import "./../Home/Home.css";
import Image from "../../assets/killua.jpg";
import Hover from "../../assets/hover-lapis.png";

function Home() {
  const animals = [
    {
      id: 1,
      nome: "A",
      tipo: "CACHORRO",
      imagem: Image,
    },
    {
      id: 2,
      nome: "B",
      tipo: "GATO",
      imagem: Image,
    },
  ];

  return (
    <div>
      <div className="header-component">
        <Header navigate={true} animais={true} />
      </div>
      <div className="home-content">
        <CardList animals={animals} hover={Hover} />
      </div>
    </div>
  );
}

export default Home;
