import "../blocks/ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garmet",
  title,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal_content">
        <button
          type="button"
          className="modal__button-close"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form>{children}</form>
        <button type="submit" className="modal__button-submit">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
