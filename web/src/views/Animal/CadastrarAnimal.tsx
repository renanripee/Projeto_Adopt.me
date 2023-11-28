import Header from "../../components/Header/Header";
import "./Animais.css";
import AnimalForm from "../../components/AnimalForm/AnimalForm";

function CadastrarAnimal() {
  return (
    <div>
      <Header navigate={false} navigateText="CADASTRAR ANIMAL" />
      <AnimalForm />
    </div>
  );
}

export default CadastrarAnimal;
