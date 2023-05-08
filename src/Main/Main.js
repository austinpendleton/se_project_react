import { defaultClothingItems } from "../util/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherTemp }) {
  return (
    <main className="main">
      <WeatherCard day={false} type="snow" weatherTemp={weatherTemp} />

      <section className="card_section" id="card-section">
        <div>Today is {weatherTemp} / You may want to wear:</div>
        <div className="card_items">
          {defaultClothingItems.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
