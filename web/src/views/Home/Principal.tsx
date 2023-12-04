import Header from "../../components/Header/Header";
import CardList from "../../components/Cards/CardList/CardListAdocao";
import Hover from "../../assets/hover.png";
import "./Home.css";
import { getAnimalsNotAdopted } from "../../services/animal";
import { IAnimalGet } from "../../interfaces/animal";
import { useEffect } from "react";
import { useState } from "react";
import { AxiosResponse } from "axios";

function Home() {
  let [animals, setAnimals] = useState<IAnimalGet[]>([]);
  let token = localStorage.getItem("token");

  useEffect(() => {
    getAnimalsNotAdopted(token)
      .then((response: AxiosResponse<IAnimalGet[]>) => {
        setAnimals(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);
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
