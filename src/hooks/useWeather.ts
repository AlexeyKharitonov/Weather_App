import { useQuery } from "react-query";
import axios from "axios";
import { API_KEY } from "../constants";
import { useEffect, useState } from "react";

export const useWeather = (city: string) => {
  const [queryCity, setQueryCity] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (city) {
        setQueryCity(city);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [city]);

  return useQuery(
    ["weather", queryCity],
    () =>
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&units=metric&lang=ru&appid=${API_KEY}`
        )
        .then((res) => res.data)
        .catch((error) => {
          console.error("Ошибка при выполнении запроса к API:", error);
          throw error;
        }),
    {
      enabled: !!queryCity,
    }
  );
};
