import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import Profile from "./Profile";
import DeleteConfirmModal from "./DeleteConfirmModal";
import AddItemModal from "./AddItemModal";
import CurrentTemperatureUnitContext, {
  currentTemperatureUnitContext,
} from "../contexts/CurrentTemperatureUnitContext";
import { getWeatherForecast, parseWeatherData } from "../utils/weatherApi";
import * as api from "../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleOpenConfirmModal = () => {
    setActiveModal("delete");
  };

  const handleCloseConfirmModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const closeAllModals = () => {
    setActiveModal("");
  };
  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  // useEffect(() => {
  //   if (location.latitude && location.longitude) {
  //     getWeatherForecast(location, apiKey)
  //       .then((data) => {
  //         // const temperature = parseWeatherData(data);
  //         setTemp(parseWeatherData(data));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }, []);
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
  const handleAddItem = ({ name, link, weatherType }) => {
    api
      .addItems({ name, link, weather: weatherType })
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteItem = (id) => {
    api.deleteItems(id).then(() => {
      const filteredCards = clothingItems.filter((card) => card._id !== id);
      setClothingItems(filteredCards);
      handleCloseModal();
      handleCloseConfirmModal();
    });
  };

  // useEffect(() => {
  //   api
  //     .getItemList()
  //     .then((items) => {
  //       setClothingItems(items);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <BrowserRouter>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div>
          <Header onCreateModal={handleCreateModal} />
          <Switch>
            <Route
              exact="true"
              path="/"
              element={
                <Main
                  weatherTemp={temp}
                  onSelectCard={handleSelectedCard}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  items={clothingItems}
                  onSelectCard={handleSelectedCard}
                  onCreateModal={handleCreateModal}
                />
              }
            />
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              onClose={handleCloseModal}
              onCreateModal={handleCreateModal}
              onAddItem={handleAddItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleOpenConfirmModal}
              handleOpenConfirmModal={handleOpenConfirmModal}
            />
          )}
          {activeModal === "delete" && (
            <DeleteConfirmModal
              handleDeleteItem={() => handleDeleteItem(selectedCard._id)}
              handleCloseConfirmModal={handleCloseConfirmModal}
              selectedCard={selectedCard}
            />
          )}
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </BrowserRouter>
  );
}

export default App;
