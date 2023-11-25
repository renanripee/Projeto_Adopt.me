import Header from "../../components/Header/Header";
import CardList from "../../components/Cards/CardList/CardListAdocao";
import Image from "../../assets/killua.jpg";
import Hover from "../../assets/hover.png";
import "./Home.css";

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
        <Header navigate={true} home={true} />
      </div>
      <div className="home-content">
        <div className="title-home-page">
          <h1>ANIMAIS DISPONÍVEIS PARA ADOÇÃO</h1>
        </div>
        <CardList animals={animals} hover={Hover} />
      </div>
    </div>
  );
}
export default Home;
