import Header from "../../components/Header/Header";
import CardList from "../../components/Cards/CardList/CardListAnimal";
import "../Home/Home.css";
import Hover from "../../assets/hover-lapis.png";
import { Link } from "react-router-dom";
import { getAnimal } from "../../services/animal";
import { IAnimalGet } from "../../interfaces/animal";
import { useEffect } from "react";
import { useState } from "react";
import { AxiosResponse } from "axios";

function Home() {
  let [animals, setAnimals] = useState<IAnimalGet[]>([]);
  let token = localStorage.getItem("token");

  useEffect(() => {
    getAnimal(token)
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
