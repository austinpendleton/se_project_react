import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import "../blocks/ToggleSwitch.css";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const isChecked = currentTemperatureUnit === "C";

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitchChange}
        checked={isChecked}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-C ${
          currentTemperatureUnit === "C" ? "switch__active" : ""
        }`}
      >
        C
      </p>
      <p
        className={`switch__temp-F ${
          currentTemperatureUnit === "F" ? "switch__active" : ""
        }`}
      >
        F
      </p>
    </label>
  );
};

export default ToggleSwitch;
