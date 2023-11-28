import Header from "../../components/header/Header";
import "./Animais.css";
import AnimalForm from "../../components/animalForm/AnimalForm";

function CadastrarAnimal() {
  return (
    <div>
      <Header navigate={false} navigateText="CADASTRAR ANIMAL" />
      <AnimalForm />
    </div>
  );
}

export default CadastrarAnimal;
