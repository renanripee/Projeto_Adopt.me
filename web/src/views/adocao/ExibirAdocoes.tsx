import Table from "../../components/table/Table";
import Header from "../../components/header/Header";
import adocaoList from "./adocao.json";

const columnMapping = {
  id: "CÓDIGO",
  "tutor.nome": "TUTOR",
  "animal.nome": "PET",
  data: "DATA DE ADOÇÃO",
};

function ExibirAdocoes() {
  return (
    <div>
      <div className="header-component">
        <Header navigate={true} adocoes={true} />
      </div>
      <div className="tutor-content">
        <Table
          columnMapping={columnMapping}
          data={adocaoList}
          adocao={true}
          tutor={false}
        />
      </div>
    </div>
  );
}

export default ExibirAdocoes;
