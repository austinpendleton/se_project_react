import React, { useEffect, useState } from "react";

import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { getWeatherForecast, parseWeatherData } from "../utils/weatherApi";

function App() {
  const weatherTemp = "75F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getWeatherForecast().then((data) => {
      console.log(data);
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  }, []);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garmet" onClose={handleCloseModal}>
          <div className="modal__labels">
            <label className="modal__label">
              Name
              <input
                className="modal__input"
                placeholder="Name"
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
              />
            </label>
            <label className="modal__label">
              Image
              <input
                className="modal__input"
                placeholder="Image URL"
                type="url"
                name="link"
                minLength="1"
                maxLength="30"
              />
            </label>
          </div>
          <p className="modal__text">Select the weather type:</p>
          <div className="modal__buttons">
            <div className="modal__button">
              <input
                className="modal__button-input"
                type="radio"
                id="hot"
                value="hot"
              />
              <label>Hot</label>
            </div>

            <div className="modal__button">
              <input
                className="modal__button-input"
                type="radio"
                id="warm"
                value="warm"
              />
              <label>Warm</label>
            </div>
            <div className="modal__button">
              <input
                className="modal__button-input"
                type="radio"
                id="cold"
                value="cold"
              />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
