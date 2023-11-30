import { FC, MouseEvent } from "react";
import "./ModalTable.css";
import { deleteTutor } from "../../../services/tutor";
import { useAuth } from "../../../context/AuthContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
  tutor?: boolean;
  adocao?: boolean;
}

const ModalTable: FC<ModalProps> = ({ isOpen, onClose, id, tutor, adocao }) => {
  const token = useAuth();
  const handleCancel = () => {
    onClose();
  };

  const handleConfirmAction = () => {
    if (adocao) {
      //metodo delete
      console.log("adocao" + id);
    }
    if (tutor) {
      deleteTutor(String(token.token), id)
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
    onClose();
  };

  const handleOverlayClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <p className="modal-text">Deseja mesmo excluir este item?</p>
            <div className="modal-buttons">
              <p className="modal-button-cancel" onClick={handleCancel}>
                Cancelar
              </p>
              <p className="modal-button-confirm" onClick={handleConfirmAction}>
                Confirmar
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalTable;
