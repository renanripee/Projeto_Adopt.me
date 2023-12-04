import Table from "../../components/Table/Table";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { getAdocao } from "../../services/adocao";

const columnMapping = {
  id: "CÓDIGO",
  "tutor.nome": "TUTOR",
  "animal.nome": "PET",
  data: "DATA DE ADOÇÃO",
};

function ExibirAdocoes() {
  const [adocao, setAdocao] = useState<any>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchTutor = async () => {
      getAdocao(String(token))
        .then((response) => {
          setAdocao(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(adocao.data);
    };

    fetchTutor();
  }, [token]);

  return (
    <div>
      <div className="header-component">
        <Header navigate={true} adocoes={true} />
      </div>
      <div className="tutor-content">
        <Table
          columnMapping={columnMapping}
          data={adocao}
          adocao={true}
          tutor={false}
        />
      </div>
    </div>
  );
}

export default ExibirAdocoes;
