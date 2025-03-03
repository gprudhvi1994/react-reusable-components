import React from "react";
import "./Modal.css";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <button className="close-button" onClick={onClose}>
        <IoClose size={30} />
      </button>
      <div className="modal-body">{children}</div>
    </div>
  );
};

export default Modal;
