import Header from "../../components/header/Header";
import Table from "../../components/table/Table";
import "./Tutores.css";
import items from "../../components/table/itens.json";

const columnMapping = {
  cpf: "CPF",
  nome: "NOME",
  rua: "RUA",
  telefone: "TELEFONE",
};

function Tutores() {
  return (
    <div>
      <div className="header-component">
        <Header navigate={true} tutores={true} />
      </div>
      <div className="tutor-content">
        <Table
          columnMapping={columnMapping}
          data={items}
          tutor={true}
          adocao={false}
        />
      </div>
    </div>
  );
}

export default Tutores;
