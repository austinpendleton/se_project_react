import daySunny from "../images/day/day-sunny.svg";
import dayCloudy from "../images/day/day-cloudy.svg";
import dayStorm from "../images/day/day-storm.svg";
import dayRain from "../images/day/day-rain.svg";
import dayFog from "../images/day/day-fog.svg";
import daySnow from "../images/day/day-snow.svg";

import nightCloudy from "../images/night/night-cloudy.svg";
import nightFog from "../images/night/night-fog.svg";
import nightMoon from "../images/night/night-moon.svg";
import nightSnow from "../images/night/night-snow.svg";
import nightStorm from "../images/night/night-storm.svg";
import nightRain from "../images/night/night-rain.svg";

export const weatherOptions = [
  {
    url: daySunny,
    day: true,
    type: "sunny",
  },
  {
    url: dayCloudy,
    day: true,
    type: "cloudy",
  },
  {
    url: dayRain,
    day: true,
    type: "rain",
  },
  {
    url: daySnow,
    day: true,
    type: "snow",
  },
  { url: dayFog, day: true, type: "fog" },
  {
    url: dayStorm,
    day: true,
    type: "storm",
  },

  {
    url: nightMoon,
    day: false,
    type: "moon",
  },
  {
    url: nightCloudy,
    day: false,
    type: "cloudy",
  },
  {
    url: nightRain,
    day: false,
    type: "rain",
  },
  {
    url: nightSnow,
    day: false,
    type: "snow",
  },
  {
    url: nightFog,
    day: false,
    type: "fog",
  },
  {
    url: nightStorm,
    day: false,
    type: "storm",
  },
];

export const latitude = 44.34;
export const longitude = 10.99;
export const APIkey = "ab5c99cceb7c1954d50a05801c5cffb2";
