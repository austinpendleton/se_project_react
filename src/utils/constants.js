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

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

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
