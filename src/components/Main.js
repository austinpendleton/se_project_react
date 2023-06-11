import "../blocks/Main.css";

import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import React, { useContext } from "react";
import { temperature } from "../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const getWeatherType = () => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  };
  const weatherType = getWeatherType();
  const currentTemp = temperature(weatherTemp);
  const currentTempString = currentTemp[currentTemperatureUnit];

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="storm" weatherTemp={weatherTemp} />

      <section className="card__section" id="card-section">
        <div>Today is {currentTempString} / You may want to wear:</div>
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard
              item={item}
              onSelectCard={onSelectCard}
              key={item?._id || item?.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
