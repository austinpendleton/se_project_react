import { latitude, longitude, APIkey } from "./constants";
import { processServerResponse } from "./api";

export const getWeatherForecast = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);

  return weatherApi;
};

export const parseWeatherData = () => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};

export const temperature = (temp) => ({
  F: `${Math.round(temp)}°F`,
  C: `${Math.round(((temp - 32) * 5) / 9)}°C`,
});
