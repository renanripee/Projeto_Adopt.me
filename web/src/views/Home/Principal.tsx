import Header from "../../components/Header/Header";
import CardList from "../../components/Cards/CardList/CardList";
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
        <CardList />
      </div>
    </div>
  );
}
export default Home;
