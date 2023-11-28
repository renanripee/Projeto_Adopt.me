import Header from "../../components/header/Header";
import CardList from "../../components/cards/cardList/CardListAdocao";
import animal from "../animal/animais.json";
import Hover from "../../assets/hover.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="header-component">
        <Header navigate={true} home={true} />
      </div>
      <div className="home-content">
        <div className="title-home-page">
          <h1>ANIMAIS DISPONÍVEIS PARA ADOÇÃO</h1>
        </div>
        <CardList animals={animal} hover={Hover} />
      </div>
    </div>
  );
}
export default Home;
