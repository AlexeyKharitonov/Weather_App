import WeatherCard from "./WeatherCard";
import { Spiner } from "./Spiner";
import ErrorCard from "./ErrorCard";
import CityInputForm from "./CityInputForm";
import { useCityWeather } from "../hooks/useCityWeather";

const FormInput = () => {
  const {
    onSubmit,
    handleChange,
    isLoading,
    error,
    weather,
    cityContent,
    register,
    handleSubmit,
    errors,
  } = useCityWeather();

  if (isLoading) return <Spiner />;

  return (
    <>
      <CityInputForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        cityContent={cityContent}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {error && <ErrorCard error={error} />}
      {weather && (
        <WeatherCard
          city={weather.name}
          humidity={weather.main.humidity}
          temperature={weather.main.temp}
        />
      )}
    </>
  );
};

export default FormInput;
