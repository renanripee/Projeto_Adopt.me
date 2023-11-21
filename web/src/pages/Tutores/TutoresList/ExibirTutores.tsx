import Header from "../../../components/Header/Header";
import Table from "../../../components/Table/Table";
import "./Tutores.css";
import items from "../../../components/Table/itens.json";

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
        <Table columnMapping={columnMapping} data={items} />
      </div>
    </div>
  );
}

export default Tutores;
