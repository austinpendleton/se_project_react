import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

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
import RegisterModal from "./RegisterModal";
import ProtectedRoute from "./ProtectedRoute";
import EditProfileModal from "./EditProfileModal";
import LoginModal from "./LoginModal";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { checkToken, signIn, updateCurrentUser } from "../utils/auth";
import { addLike, removeLike, signUp } from "../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [temp, setTemp] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleUpdateModal = () => {
    setActiveModal("update");
  };

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

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddItem = ({ name, imageURL, weatherType }) => {
    const token = localStorage.getItem("jwt");
    api
      .addItems({ name, imageURL, weather: weatherType }, token)
      .then((res) => {
        setClothingItems([res.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteItem = (item) => {
    console.log(item);
    const token = localStorage.getItem("jwt");
    api

      .deleteItems(item._id, token)
      .then(() => {
        const filteredCards = clothingItems.filter(
          (card) => card._id !== item._id
        );
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

  const getClothingItems = () => {
    api
      .getItemList()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateUser = ({ name, avatar, token }) => {
    updateCurrentUser({ name, avatar, token })
      .then(({ data }) => {
        setCurrentUser(data.user);
        handleCloseModal();
      })
      .catch((error) => console.log(error));
  };

  const handleRegister = ({ email, password, name, avatar }) => {
    setIsLoading(true);

    api
      .signUp({ email, password, name, avatar })
      .then((res) => {
        setCurrentUser(res.data);
        handleSignIn({ email, password });
        handleCloseModal();
        setIsLoggedIn(true);
      })

      .catch(console.error);
  };

  // const handleSignUp = ({ name, avatar, email, password }) => {
  //   signUp({ name, avatar, email, password })
  //     .then((res) => {
  //       handleCloseModal();
  //     })
  //     .catch((data) => {
  //       console.log(data);
  //     });
  // };
  const handleSignIn = ({ email, password }) => {
    signIn({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        handleToken(data.token);
      })
      .catch((error) => console.log(error));
  };
  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setClothingItems([]);
  };
  const handleToken = useCallback((token) => {
    return checkToken(token)
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res.data);
        getClothingItems();
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      handleToken(token).finally(() => setIsLoading(false));
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  }, [setCurrentUser, setIsLoggedIn, handleToken]);

  const handleLikeClick = (item, isLiked) => {
    if (!isLiked) {
      api
        .addLike({ _id: item, user: currentUser }, token)
        .then((updatedCard) => {
          const cardData = updatedCard.data;

          setClothingItems((prevItems) =>
            prevItems.map((x) => (x._id === item ? cardData : x))
          );
        })
        .catch(console.error);
    } else {
      api
        .removeLike({ _id: item, user: currentUser }, token)
        .then((updatedCard) => {
          const cardData = updatedCard.data;

          setClothingItems((prevItems) =>
            prevItems.map((x) => (x._id === item ? cardData : x))
          );
        })
        .catch(console.error);
    }
  };

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div>
            <Header
              onCreateModal={handleCreateModal}
              onRegisterModal={handleRegisterModal}
              onLoginModal={handleLoginModal}
              isLoggedIn={isLoggedIn}
            />
            <Switch>
              <Route exact path="/">
                <Main
                  weatherTemp={temp}
                  onSelectCard={handleSelectedCard}
                  clothingItems={clothingItems}
                  onCardLike={handleLikeClick}
                />
              </Route>

              <ProtectedRoute
                path="/profile"
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
              >
                <Profile
                  cards={clothingItems}
                  onSelectCard={handleSelectedCard}
                  onCreateModal={handleCreateModal}
                  isOpen={handleUpdateModal}
                  logOut={handleSignOut}
                  onCardLike={handleLikeClick}
                />
                {activeModal === "update" && (
                  <EditProfileModal
                    onClose={handleCloseModal}
                    editUser={handleUpdateUser}
                    isOpen={handleUpdateModal}
                  ></EditProfileModal>
                )}
              </ProtectedRoute>
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
            {activeModal === "register" && (
              <RegisterModal
                isOpen={handleRegisterModal}
                handleRegister={handleRegister}
                openLoginModal={handleLoginModal}
                onClose={handleCloseModal}
              />
            )}
            {activeModal === "login" && (
              <LoginModal
                isOpen={handleLoginModal}
                signIn={handleSignIn}
                onClose={handleCloseModal}
                openRegisterModal={handleRegisterModal}
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
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
