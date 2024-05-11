import { Card } from "antd";

interface IWeatherCardProps {
  city: string;
  temperature: number;
}

const WeatherCard = ({ city, temperature }: IWeatherCardProps) => {
  return (
    <Card title={city} bordered={false} style={{ width: 300 }}>
      <p>{temperature} °C</p>
    </Card>
  );
};

export default WeatherCard;
