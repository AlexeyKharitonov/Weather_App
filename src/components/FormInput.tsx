import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Typography } from "antd";
import { MdLocationPin } from "react-icons/md";
import { useWeather } from "../hooks/useWeather";
import { weatherFormRules } from "../constants";
import Button from "./Button";
import WeatherCard from "./WeatherCard";
import { TFormData } from "../types";
import { Spiner } from "./Spiner";

const formStyle: React.CSSProperties = {
  maxWidth: 600,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  color: "#ea64d9",
  textDecoration: "underline",
  marginBottom: "20px",
};

const inputStyle: React.CSSProperties = {
  marginBottom: "10px",
  width: "500px",
  height: "40px",
};

const FormInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<TFormData>({
    mode: "onChange",
  });

  const cityContent = watch("city");

  const {
    mutate: fetchWeather,
    data: weather,
    error,
    isLoading,
  } = useWeather();

  const onSubmit: SubmitHandler<TFormData> = (data) => {
    if (data.city) {
      fetchWeather(data.city);
    }
    reset();
  };

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue("city", value);
  };

  if (isLoading) return <Spiner />;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <Typography.Title
          level={1}
          className="custom-typography"
          style={titleStyle}
        >
          Введите город 🌤️
        </Typography.Title>
        <MdLocationPin
          size={50}
          color="#FAAE5B"
          style={{ marginBottom: "45px" }}
        />
        <Input
          {...register("city", weatherFormRules)}
          onChange={handleChange}
          value={cityContent || ""}
          placeholder="Начните вводить город ..."
          style={inputStyle}
        />
        <Button type="submit">Получить погоду</Button>
        {errors.city && errors.city.type === "required" && (
          <span className="error-style">{errors.city.message}</span>
        )}
        {errors.city && errors.city.type === "minLength" && (
          <span className="error-style">{errors.city.message}</span>
        )}
        {errors.city && errors.city.type === "maxLength" && (
          <span className="error-style">{errors.city.message}</span>
        )}
      </form>
      {weather && (
        <WeatherCard
          city={weather.name}
          humidity={weather.main.humidity}
          temperature={weather.main.temp}
        />
      )}
      {error && <p>Error: {error.message}</p>}
    </>
  );
};

export default FormInput;
