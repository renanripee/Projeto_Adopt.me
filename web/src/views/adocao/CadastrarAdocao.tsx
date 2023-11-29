import Header from "../../components/Header/Header";
import AdocaoForm from "../../components/AdocaoForm/AdocaoForm";
import { useParams } from "react-router-dom";

function CadastrarAdocao() {
  let params = useParams();

  return (
    <div>
      <Header navigate={false} navigateText="CADASTRAR ADOÇÃO" />
      <AdocaoForm id_animal={Number(params.id)} />
    </div>
  );
}

export default CadastrarAdocao;
