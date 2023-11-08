import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import "./Tutores.css";

function Tutores() {
  return (
    <div>
      <div className="header-component">
        <Header tutores={true} />
      </div>
      <div className="tutor-content">
        <Table
          firstColumn="CPF"
          secondColumn="NOME"
          thirdColumn="RUA"
          fourthColumn="TELEFONE"
        />
      </div>
    </div>
  );
}

export default Tutores;
