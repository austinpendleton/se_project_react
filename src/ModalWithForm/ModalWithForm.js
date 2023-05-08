import "./ModalWithForm.css";

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
        <button type="button" onClick={onClose} />
        <h3>{title}</h3>
        <form>{children}</form>
        <button type="submit">{buttonText}</button>
      </div>
    </div>
  );
};

export default ModalWithForm;
