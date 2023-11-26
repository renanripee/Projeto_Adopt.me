import Header from "../../components/Header/Header";
import "./Animais.css";
import AnimalForm from "../../components/AnimalForm/AnimalForm";
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
