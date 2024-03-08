// useAxios.js
import { useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";

const useAxios = (baseUrl) => {
  const [cards, setCards] = useState([]);

  const addCard = async (endPoint = '') => {
    try {
      const url = baseUrl + endPoint;
      console.log("Request URL:", url);
      const response = await axios.get(url);
      setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  return { addCard, cards };
}

export default useAxios;
