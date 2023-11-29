import { FC, MouseEvent } from "react";
import "../ModalTable/ModalTable.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalTable: FC<ModalProps> = ({ isOpen, onClose }) => {
  const handleConfirmAction = () => {
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
            <p className="modal-text">
              Ops! O tutor não está cadastrado no banco de dados.
            </p>

            <div className="adocao-modal-buttons">
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
