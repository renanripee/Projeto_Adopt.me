import "./Table.css";

type TableProps = {
  firstColumn: string;
  secondColumn: string;
  thirdColumn: string;
  fourthColumn: string;
};

function Table(props: TableProps) {
  const tutores = [
    {
      cpf: "123123123",
      nome: "nome",
      rua: "rua",
      telefone: "telefone",
    },
    {
      cpf: "123123123",
      nome: "nome",
      rua: "rua",
      telefone: "telefone",
    },
    {
      cpf: "123123123",
      nome: "nome",
      rua: "rua",
      telefone: "telefone",
    },
  ];

  return (
    <div>
      <div className="table-content">
        <table>
          <tr>
            <th className="first-th">{props.firstColumn}</th>
            <th>{props.secondColumn}</th>
            <th>{props.thirdColumn}</th>
            <th>{props.fourthColumn}</th>
            <th className="last-th"> Ações</th>
          </tr>

          {tutores.map((tutor, index) => (
            <tr key={index}>
              <td>{tutor.cpf}</td>
              <td>{tutor.nome}</td>
              <td>{tutor.rua}</td>
              <td>{tutor.telefone}</td>
              <td>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Table;
