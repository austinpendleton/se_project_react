import "../blocks/ItemModal.css";

const ItemModal = ({ item, onClose, handleOpenConfirmModal }) => {
  return (
    <div className="item__modal">
      <div className="item__modal-content">
        <button
          type="button"
          className="modal__button-close"
          onClick={onClose}
        ></button>
        <img
          src={item?.link || item?.imageUrl || ""}
          className="item__modal-image"
          alt={item?.name}
        />
        <div className="item__modal-description">{item?.name}</div>
        <div className="item__modal-description">
          Weather type: {item?.weather}
        </div>
        <button
          className="modal__button-delete"
          onClick={handleOpenConfirmModal}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};
export default ItemModal;
