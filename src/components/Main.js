import "../blocks/Main.css";
import { defaultClothingItems } from "../utils/constants";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import React, { useMemo } from "react";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });
  console.log(filteredCards);

  return (
    <main className="main">
      <WeatherCard day={true} type="storm" weatherTemp={weatherTemp} />

      <section className="card_section" id="card-section">
        <div>Today is {weatherTemp}°F / You may want to wear:</div>
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard
              item={item}
              onSelectCard={onSelectCard}
              key={item._id}
              id={item.id}
              link={item.link}
              name={item.name}
              weather={item.weather}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
