import Header from "../../components/Header/Header";
import AdocaoForm from "../../components/AdocaoForm/AdocaoForm";
import { useParams } from "react-router-dom";
// import adocaoList from "./adocao.json";
// import Imagem from "../../components/Imagem/Imagem";

function EditarAdocao() {
  let params = useParams();

  return (
    <div>
      <Header navigate={false} navigateText="EDITAR ADOÇÃO" />
      <AdocaoForm id={Number(params.id)} />
    </div>
  );
}

export default EditarAdocao;
