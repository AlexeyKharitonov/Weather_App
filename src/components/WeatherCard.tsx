import { Card, Divider } from "antd";
import { getCurrentData } from "../utils/getCurrentDate";

interface IWeatherCardProps {
  city: string;
  temperature: number;
  humidity: number;
}

const cardStyle: React.CSSProperties = {
  width: "300px",
  margin: "20px",
};

const WeatherCard = ({ city, temperature, humidity }: IWeatherCardProps) => {
  const currentData = getCurrentData();

  return (
    <Card title={city} bordered={false} style={cardStyle}>
      <p>Температура: {temperature} °C</p>
      <p>Влажность: {humidity} %</p>
      <Divider />
      <p>Дата: {currentData}</p>
    </Card>
  );
};

export default WeatherCard;
