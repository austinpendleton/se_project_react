import "../blocks/AddItemModal.css";
import { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";

function AddItemModal({ onClose, isOpen, onAddItem }) {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [weatherType, setWeatherType] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem({ name, imageURL, weatherType });
  }

  // function handleLink(evt) {
  //   setLink(evt.target.value);
  // }

  // function handleWeatherType(evt) {
  //   setWeatherType(evt.target.value);
  // }

  useEffect(() => {
    if (isOpen) {
      setName("");
      setWeatherType("");
      setImageURL("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm title="New Garmet" onSubmit={handleSubmit} onClick={onClose}>
      <div className="modal__labels">
        <label className="modal__label">
          Name
          <input
            className="modal__input"
            type="text"
            placeholder="Name"
            name="name"
            minLength="1"
            maxLength="300"
            value={name}
            onChange={(evt) => {
              setName(evt.target.value);
            }}
          />
        </label>
        <label className="modal__label">
          Image
          <input
            className="modal__input"
            type="url"
            placeholder="Image URL"
            name="name"
            minLength="1"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </label>
      </div>
      <p className="modal__paragraph">Select the weather type:</p>
      <div className="modal__radios">
        <div className="modal__radio">
          <input
            className="modal__radio-input"
            type="radio"
            id="hot"
            value="hot"
            onChange={(e) => setWeatherType(e.target.value)}
          />
          <label>Hot</label>
        </div>
        <div className="modal__radio">
          <input
            className="modal__radio-input"
            type="radio"
            id="warm"
            value="warm"
            onChange={(e) => setWeatherType(e.target.value)}
          />
          <label>Warm</label>
        </div>
        <div className="modal__radio">
          <input
            className="modal__radio-input"
            type="radio"
            id="cold"
            value="cold"
            onChange={(e) => setWeatherType(e.target.value)}
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
}
export default AddItemModal;
