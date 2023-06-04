import { useState, useContext, useEffect } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import "../blocks/ToggleSwitch.css";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTemperatureUnit === "C");
  useEffect(
    () => setIsChecked(currentTemperatureUnit === "C"),
    [currentTemperatureUnit]
  );

  return (
    <div className="switch">
      <input
        className="switch-input"
        type="checkbox"
        name="switch-checkbox"
        value={currentTemperatureUnit}
        onChange={handleToggleSwitchChange}
        checked={isChecked}
      />
      <label className="switch-label">
        <div className="switch__container"></div>
        <span className="switch-button" />
        <span
          className={
            currentTemperatureUnit === "F"
              ? "switch__slider switch__slider-F"
              : "switch__slider switch__slider-C"
          }
        />
        <p
          className={`switch__temp switch__temp-F ${
            currentTemperatureUnit === "F" ? "switch__active" : ""
          }`}
        >
          F
        </p>
        <span
          className={
            currentTemperatureUnit === "C"
              ? "switch__slider switch__slider-F"
              : "switch__slider switch__slider-C"
          }
        />
        <p
          className={`switch__temp switch__temp-C ${
            currentTemperatureUnit === "C" ? "switch__active" : ""
          }`}
        >
          C
        </p>
      </label>
    </div>
  );
};

export default ToggleSwitch;
