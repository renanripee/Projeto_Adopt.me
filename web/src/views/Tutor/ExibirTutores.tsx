import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import "./Tutores.css";
import { getTutor } from "../../services/tutor";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const columnMapping = {
  cpf: "CPF",
  nome: "NOME",
  "endereco.rua": "RUA",
  telefone: "TELEFONE",
};

function Tutores() {
  const [tutor, setTutor] = useState<any>([]);
  const token = useAuth();

  useEffect(() => {
    const fetchTutor = async () => {
      console.log(token.token);
      const tutorData = await getTutor(String(token.token));
      console.log(tutorData);
      console.log(tutorData.data);
      setTutor(tutorData.data);
    };

    fetchTutor();
  }, [token]);

  return (
    <div>
      <div className="header-component">
        <Header navigate={true} tutores={true} />
      </div>
      <div className="tutor-content">
        <Table
          columnMapping={columnMapping}
          data={tutor}
          tutor={true}
          adocao={false}
        />
      </div>
    </div>
  );
}

export default Tutores;
