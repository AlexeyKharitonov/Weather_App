import { Input, Typography } from "antd";
import { MdLocationPin } from "react-icons/md";
import Button from "./Button";
import { weatherFormRules } from "../constants";
import { FieldValues, SubmitHandler, UseFormRegister } from "react-hook-form";

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

interface ICityInputFormProps {
  handleSubmit: (
    handler: SubmitHandler<FieldValues>
  ) => (e?: React.BaseSyntheticEvent<object, any, any>) => Promise<void>;
  onSubmit: SubmitHandler<FieldValues>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<FieldValues>;
  cityContent: string;
  errors: { [key: string]: any };
}

const CityInputForm = ({
  handleSubmit,
  onSubmit,
  handleChange,
  register,
  cityContent,
  errors,
}: ICityInputFormProps) => {
  return (
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
  );
};

export default CityInputForm;
