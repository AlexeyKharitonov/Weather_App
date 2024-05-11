import { AxiosError } from "axios";
import { Card, Typography } from "antd";

type TErrorCard = {
  message: string;
};

const ErrorCard = (error: AxiosError<any>) => {
  const errorMessage =
    (error.response?.data as TErrorCard)?.message ||
    "Произошла ошибка при запросе данных";

  return (
    <Card
      style={{
        width: 300,
        marginTop: 20,
        borderColor: "red",
        borderWidth: 2,
      }}
    >
      <Typography.Text type="danger">{errorMessage}</Typography.Text>
    </Card>
  );
};

export default ErrorCard;
