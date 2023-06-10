import "../blocks/ModalWithForm.css";
import closeButton from "../images/close-button.svg";
import ModalWithForm from "./ModalWithForm";

const DeleteConfirmModal = ({
  handleCloseConfirmModal,
  handleDeleteItem,
  selectedCard,
  card,
  onClose,
  onCancel,
}) => {
  const handleCancel = () => {
    console.log(card);
    handleCloseConfirmModal();
  };

  return (
    <ModalWithForm>
      <div className="delete__confirmation">
        <p>Are you sure you want to delete this item?</p>
        <p className="delete__text-confirm">This action is irreversible.</p>
        <button className="delete__confirmation-close" onClick={onClose}>
          <img src={closeButton} alt="close-button" />
        </button>
        <div className="delete__confirmation-buttons">
          <button
            className="delete__button_confirm"
            onClick={() => handleDeleteItem(card._id)}
            aria-label="Confirm"
            type="button"
          >
            Yes, delete item
          </button>
          <button
            className="delete__button_cancel"
            onClick={handleCancel}
            aria-label="Cancel"
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default DeleteConfirmModal;
