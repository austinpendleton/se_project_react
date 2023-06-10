function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject("Error${res.status}");
}
const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const BASE_URL =
  "https://my-json-server.typicode.com/austinpendleton/se_project_react";

export const getItemList = () => {
  return fetch(`${BASE_URL}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
};

export const addItems = ({ name, weather, imageUrl }) => {
  return fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(processServerResponse);
};

export const deleteItems = (card) => {
  console.log(card);
  return fetch(`${BASE_URL}/items/${card}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(_checkResponse);
};
