import { React, useContext, useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

const EditProfileModal = ({ onClose, onEditProfile }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onEditProfile({ name, avatar });
  }

  function handleName(evt) {
    setName(evt.target.value);
  }
  function handleAvatar(evt) {
    setAvatar(evt.target.value);
  }

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [currentUser]);

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save Changes"
      name="editProfile"
      onClose={onClose}
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
            defaultValue={currentUser.name}
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
            defaultValue={currentUser.avatar}
            onChange={handleAvatar}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;