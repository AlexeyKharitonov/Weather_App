import { LoadingOutlined } from "@ant-design/icons";
import { Space, Spin } from "antd";

const AntIconStyle: React.CSSProperties = {
  fontSize: 90,
  color: "#FAAE5B",
};

const spinnerContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "274.85px",
};

const antIcon = <LoadingOutlined style={AntIconStyle} spin />;

export const Spiner = () => {
  return (
    <Space style={spinnerContainerStyle}>
      <Spin indicator={antIcon} />;
    </Space>
  );
};
