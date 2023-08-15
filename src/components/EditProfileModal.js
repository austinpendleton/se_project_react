import { React, useContext, useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

const EditProfileModal = ({ onClose, onEditProfile, isOpen }) => {
  const data = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    const token = localStorage.getItem("jwt");
    onEditProfile({ name, avatar, token });
  }

  function handleName(evt) {
    setName(evt.target.value);
  }
  function handleAvatar(evt) {
    setAvatar(evt.target.value);
  }

  useEffect(() => {
    if (isOpen) {
      setName(data.name);
      setAvatar(data.avatar);
    }
  }, [data.name, data.avatar, isOpen]);

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save Changes"
      name="editProfile"
      onClick={onClose}
      onSubmit={handleSubmit}
    >
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
            defaultValue={data?.name}
            onChange={handleName}
          />
        </label>
        <label className="modal__label">
          Avatar
          <input
            className="modal__input"
            type="url"
            placeholder="Image URL"
            name="link"
            minLength="1"
            defaultValue={data?.avatar}
            onChange={handleAvatar}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
