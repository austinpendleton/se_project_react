import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import Profile from "./Profile";
import DeleteConfirmModal from "./DeleteConfirmModal";
import AddItemModal from "./AddItemModal";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { getWeatherForecast, parseWeatherData } from "../utils/weatherApi";
import * as api from "../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleOpenConfirmModal = () => {
    setDeleteModal("delete");
  };

  const handleCloseConfirmModal = () => {
    setDeleteModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    getWeatherForecast()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        api
          .getItemList()
          .then((items) => {
            setClothingItems(items);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleAddItem = ({ name, link, weatherType, id }) => {
    const item = { name, imageUrl: link, weather: weatherType, id };
    api
      .addItems(item)
      .then((res) => {
        setClothingItems([item, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteItem = (id) => {
    console.log(id);
    api
      .deleteItems(id)
      .then(() => {
        const filteredCards = clothingItems.filter((card) => card.id !== id);
        setClothingItems(filteredCards);
        handleCloseModal();
        handleCloseConfirmModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
              />
            </Route>

            <Route path="/profile">
              <Profile
                cards={clothingItems}
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
              />
            </Route>
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
              item={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleOpenConfirmModal}
              handleOpenConfirmModal={handleOpenConfirmModal}
            />
          )}
          {deleteModal && (
            <DeleteConfirmModal
              onDelete={handleDeleteItem}
              handleCloseConfirmModal={handleCloseConfirmModal}
              card={selectedCard}
              onClose={handleCloseModal}
            />
          )}
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </BrowserRouter>
  );
}

export default App;
