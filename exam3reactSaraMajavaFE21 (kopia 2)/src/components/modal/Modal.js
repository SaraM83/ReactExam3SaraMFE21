import "./_modal.css";

const Modal = (props) => {
  return (
    <>
      <div>
        <div className="overlay"></div>
        <div className="modal">
          <h1>{props.modalText}</h1>
          <button onClick={props.onClose}> {props.btnText}</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
