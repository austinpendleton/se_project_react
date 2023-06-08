import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/constants";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import React, { useContext } from "react";
import { temperature } from "../utils/weatherApi";

const WeatherCard = ({ day, type, weatherTemp }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const currentTemp = temperature(weatherTemp);
  const currentTempString = currentTemp[currentTemperatureUnit];

  const imageSrcUrl = weatherOption.url || "";
  return (
    <>
      <section className="weather" id="weather">
        <div>
          <div className="weather__temp">{currentTempString}</div>
          <img src={imageSrcUrl} alt={type} className="weather_image" />
        </div>
      </section>
      <section id="weather__cards"></section>
    </>
  );
};

export default WeatherCard;
