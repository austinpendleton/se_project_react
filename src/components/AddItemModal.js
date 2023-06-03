import "../blocks/AddItemModal.css";
import { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";

function AddItemModal({ onClose, isOpen, onAddItem }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [weatherType, setWeatherType] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem({ name, link, weatherType });
  }

  function handleLink(evt) {
    setLink(evt.target.value);
  }

  function handleWeatherType(evt) {
    setWeatherType(evt.target.value);
  }

  useEffect(() => {
    if (isOpen) {
      setName("");
      setWeatherType("");
      setLink("");
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
            value={link}
            onChange={handleLink}
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
            onChange={handleWeatherType}
          />
          <label>Hot</label>
        </div>
        <div className="modal__radio">
          <input
            className="modal__radio-input"
            type="radio"
            id="warm"
            value="warm"
            onChange={handleWeatherType}
          />
          <label>Warm</label>
        </div>
        <div className="modal__radio">
          <input
            className="modal__radio-input"
            type="radio"
            id="cold"
            value="cold"
            onChange={handleWeatherType}
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
}
export default AddItemModal;
