import React, { FC, MouseEvent } from "react";
import "./ModalTable.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  id: number;
}

const ModalTable: FC<ModalProps> = ({ isOpen, onClose, onConfirm, id }) => {
  const handleCancel = () => {
    onClose();
  };

  const handleConfirmAction = () => {
    onConfirm();
    onClose();
    console.log(id);
    //metodo delete;
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
