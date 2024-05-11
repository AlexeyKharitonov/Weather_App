import { useMutation } from "react-query";
import axios, { AxiosError } from "axios";
import { API_KEY } from "../constants";

export const useWeather = () => {
  return useMutation(
    (cityName) =>
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        )
        .then((res) => res.data),
    {
      onError: (error: AxiosError) => {
        console.error(
          "Error fetching weather:",
          error.response ? error.response.data : error.message
        );
      },
    }
  );
};
