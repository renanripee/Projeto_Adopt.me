import Header from "../../components/header/Header";
import CardList from "../../components/cards/cardList/CardListAnimal";
import "../home/Home.css";
import Hover from "../../assets/hover-lapis.png";
import { Link } from "react-router-dom";
import animals from "./animais.json";

function Home() {
  return (
    <div>
      <div className="header-component">
        <Header navigate={true} animais={true} />
      </div>
      <div className="home-content">
        <CardList animals={animals} hover={Hover} />
      </div>
      <Link to="/novo-animal">
        <button className="button-cadastrar-animal">ADICIONAR</button>
      </Link>
    </div>
  );
}

export default Home;
