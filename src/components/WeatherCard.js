import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = weatherOption.url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp}°F</div>

      <img src={imageSrcUrl} className="weather_image" />
    </section>
  );
};

export default WeatherCard;
