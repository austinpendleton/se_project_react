import "../blocks/ModalWithForm.css";
import closeButton from "../images/close-button.svg";
import ModalWithForm from "./ModalWithForm";

const DeleteConfirmModal = ({
  onClick,
  onDelete,
  card,
  onClose,

  handleCloseConfirmModal,
}) => {
  const handleDeleteClick = () => {
    console.log(card);
    const id = card.id;
    console.log(id);
    onDelete(id);
    handleCloseConfirmModal();
  };
  const onCancel = () => {
    handleCloseConfirmModal();
  };

  return (
    <div className={`modal`}>
      <div className="modal__content">
        <div className="delete__confirmation">
          <p>Are you sure you want to delete this item?</p>
          <p className="delete__text-confirm">This action is irreversible.</p>
          <button className="delete__confirmation-close" onClick={onClose}>
            <img src={closeButton} alt="close-button" />
          </button>
          <div className="delete__confirmation-buttons">
            <button
              className="delete__button_confirm"
              onClick={handleDeleteClick}
              aria-label="Confirm"
              type="button"
            >
              Yes, delete item
            </button>
            <button
              className="delete__button_cancel"
              onClick={onCancel}
              aria-label="Cancel"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
