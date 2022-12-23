import React from "react";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.closeModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda cum
        officia corporis deleniti autem quas vel quo molestias? Sapiente iste in
        recusandae dignissimos dolor laudantium voluptates adipisci, velit illo
        quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Assumenda cum officia corporis deleniti autem quas vel quo molestias?
        Sapiente iste in recusandae dignissimos dolor laudantium voluptates
        adipisci, velit illo quam. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Assumenda cum officia corporis deleniti autem quas vel
        quo molestias? Sapiente iste in recusandae dignissimos dolor laudantium
        voluptates adipisci, velit illo quam. d
      </div>
      <div className="btn">
        <button onClick={props.closeModal}>Close</button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <div>
      <Backdrop closeModal={props.closeModal} />
      <ModalOverlay closeModal={props.closeModal} />
    </div>
  );
};

export default Modal;
