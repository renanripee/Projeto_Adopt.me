import Header from "../../components/header/Header";
import "./Animais.css";
import AnimalForm from "../../components/animalForm/AnimalForm";
import { useParams } from "react-router-dom";

function CadastrarAnimal() {
  let params = useParams();

  return (
    <div>
      <Header navigate={false} navigateText="EDITAR ANIMAL" />
      <AnimalForm id={Number(params.id)} />
    </div>
  );
}

export default CadastrarAnimal;
