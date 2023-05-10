import React, { useEffect, useState } from "react";

import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { getWeatherForecast, parseWeatherData } from "../utils/weatherApi";

function App() {
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
    getWeatherForecast()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New Garmet"
          buttonText="Add Garmet"
          onClose={handleCloseModal}
        >
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
                name="weather-type"
              />
              <label>Hot</label>
            </div>

            <div className="modal__button">
              <input
                className="modal__button-input"
                type="radio"
                id="warm"
                value="warm"
                name="weather-type"
              />
              <label>Warm</label>
            </div>
            <div className="modal__button">
              <input
                className="modal__button-input"
                type="radio"
                id="cold"
                value="cold"
                name="weather-type"
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
