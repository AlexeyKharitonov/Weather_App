import { SubmitHandler, useForm } from "react-hook-form";
import { TFormData } from "../types";
import { useWeather } from "./useWeather";

export const useCityWeather = () => {
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

  const {
    mutate: fetchWeather,
    data: weather,
    error,
    isLoading,
  } = useWeather();

  const cityContent = watch("city");

  const onSubmit: SubmitHandler<TFormData> = (data: any) => {
    if (data.city) {
      fetchWeather(data.city);
      reset();
    }
  };

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue("city", value);
  };

  return {
    onSubmit,
    handleChange,
    isLoading,
    error,
    weather,
    cityContent,
    register,
    handleSubmit,
    errors,
  };
};
