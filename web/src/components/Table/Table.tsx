import { useState } from "react";
import "./Table.css";
import lapis from "../../assets/lapis.png";
import lixeira from "../../assets/lixeira.png";
import seta from "../../assets/seta-baixo.png";
import ModalTable from "../modals/modalTable/ModalTable";
import { Link } from "react-router-dom";

type TableProps = {
  data: any[];
  columnMapping: { [key: string]: string };
  tutor: boolean;
  adocao: boolean;
};

function Table(props: TableProps) {
  const [index, setIndex] = useState<number>(1);
  const [startIndex, setStartIndex] = useState<number>(0);
  let rowsNumber = 10;
  let pagesNumber = Math.floor(props.data.length / rowsNumber);
  let rowsNumberLastPage =
    rowsNumber - Math.floor(props.data.length % rowsNumber);
  let pagesIndex = [];
  let displayedItems = props.data.slice(startIndex, startIndex + rowsNumber);

  if (rowsNumberLastPage !== 0) pagesNumber++;

  for (let i = 1; i <= pagesNumber; i++) {
    pagesIndex.push(i);
  }

  function updateIndexAndArray(i: number) {
    setIndex(i);
    setStartIndex((i - 1) * rowsNumber);
  }

  function getNestedValue(obj: Record<string, any>, path: string): any {
    const keys = path.split(".");
    return keys.reduce((acc, key) => (acc && acc[key] ? acc[key] : ""), obj);
  }

  function emptyRows() {
    let emptyRows = [];
    for (let i = 0; i < rowsNumberLastPage; i++) {
      emptyRows.push(
        <tr key={i}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }
    return emptyRows;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"tutor" | "adocao" | null>(null);
  const [idDelete, setIdDelete] = useState(-1);

  const openModal = (id: number, isAdocao: boolean) => {
    setModalType(isAdocao ? "adocao" : "tutor");
    setIsModalOpen(true);
    setIdDelete(id);
  };

  const closeModal = () => {
    setModalType(null);
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    console.log("confirm");
  };

  return (
    <div className="table-content">
      <div>
        <table>
          <thead>
            <tr>
              {Object.values(props.columnMapping).map((columnName, index) =>
                index === 0 ? (
                  <th className="first-th" key={index}>
                    {columnName}
                  </th>
                ) : (
                  <th key={index}>{columnName}</th>
                )
              )}
              <th className="last-th">AÇÕES</th>
            </tr>
          </thead>

          <tbody>
            {index === pagesNumber ? (
              <>
                {displayedItems.map((item, index) => (
                  <tr key={index}>
                    {Object.keys(props.columnMapping).map(
                      (key, columnIndex) => (
                        <td key={columnIndex}>
                          {key.includes(".")
                            ? getNestedValue(item, key)
                            : item[key]}
                        </td>
                      )
                    )}
                    <td>
                      <img
                        src={lixeira}
                        alt="lixeira"
                        className="table-icon"
                        onClick={() => openModal(item.id, props.adocao)}
                      ></img>
                      {props.tutor ? (
                        <Link to={`/editar-tutor/${item.id}`}>
                          <img
                            src={lapis}
                            alt="lapis"
                            className="table-icon"
                          ></img>
                        </Link>
                      ) : null}

                      {props.adocao ? (
                        <Link to={`/editar-adocao/${item.id}`}>
                          <img
                            src={lapis}
                            alt="lapis"
                            className="table-icon"
                          ></img>
                        </Link>
                      ) : null}
                    </td>
                  </tr>
                ))}
                {emptyRows().map((row) => row)}
              </>
            ) : (
              <>
                {displayedItems.map((item, index) => (
                  <tr key={index}>
                    {Object.keys(props.columnMapping).map(
                      (key, columnIndex) => (
                        <td key={columnIndex}>
                          {key.includes(".")
                            ? getNestedValue(item, key)
                            : item[key]}
                        </td>
                      )
                    )}
                    <td>
                      <img
                        src={lixeira}
                        alt="lixeira"
                        className="table-icon"
                        onClick={() => openModal(item.id, props.adocao)}
                      ></img>
                      {props.tutor ? (
                        <Link to={`/editar-tutor/${item.id}`}>
                          <img
                            src={lapis}
                            alt="lapis"
                            className="table-icon"
                          ></img>
                        </Link>
                      ) : null}

                      {props.adocao ? (
                        <Link to={`/editar-adocao/${item.id}`}>
                          <img
                            src={lapis}
                            alt="lapis"
                            className="table-icon"
                          ></img>
                        </Link>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="table-footer">
        <div className="table-pages-count">
          <span>Página </span>
          <div className="dropdown">
            <button className="dropbtn">
              {index}{" "}
              <img src={seta} alt="seta" className="table-icon-seta"></img>
            </button>

            <div className="dropdown-content">
              {pagesIndex.map((i) => (
                <button key={i} onClick={() => updateIndexAndArray(i)}>
                  {i}
                </button>
              ))}
            </div>
          </div>
        </div>
        {props.tutor ? (
          <Link to={"/novo-tutor"} className="table-add-link">
            <span className="table-add-button">+ adicionar</span>
          </Link>
        ) : null}
      </div>
      <div>
        {props.adocao ? (
          <ModalTable
            isOpen={isModalOpen}
            onClose={closeModal}
            onConfirm={handleConfirm}
            id={idDelete}
            adocao={true}
          />
        ) : null}
        {props.tutor ? (
          <ModalTable
            isOpen={isModalOpen}
            onClose={closeModal}
            onConfirm={handleConfirm}
            id={idDelete}
            tutor={true}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Table;
