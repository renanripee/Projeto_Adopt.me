import { FC, MouseEvent } from "react";
import "./ModalTable.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  id: number;
  tutor?: boolean;
  adocao?: boolean;
}

const ModalTable: FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  id,
  tutor,
  adocao,
}) => {
  const handleCancel = () => {
    onClose();
  };

  const handleConfirmAction = () => {
    onConfirm();
    onClose();
    if (adocao) {
      //metodo delete
      console.log("adocao" + id);
    }
    if (tutor) {
      //metodo delete
      console.log("tutor" + id);
    }
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
