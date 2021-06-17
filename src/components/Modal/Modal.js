import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClose} />;
}

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  const overlayPortal = document.getElementById("overlays");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        overlayPortal
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayPortal
      )}
    </React.Fragment>
  );
}

export default Modal;
