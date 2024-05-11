import { Layout, Space, Typography } from "antd";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const headerStyle: React.CSSProperties = {
  display: "flex",
  textAlign: "center",
  color: "#F3F6F7",
  height: 80,
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#222425",
  padding: "0 99px",
  paddingRight: "250px",
};

const headingStyle: React.CSSProperties = {
  color: "#ea64d9",
  marginLeft: "15px",
  marginTop: "0px",
  marginBottom: "0px",
};

const Header = () => {
  return (
    <Layout.Header style={headerStyle}>
      <NavLink to="/">
        <Space>
          <TiWeatherPartlySunny
            size={55}
            color="#FAAE5B"
            style={{ verticalAlign: "middle" }}
          />
          <Typography.Title level={4} style={headingStyle}>
            Приложение погоды
          </Typography.Title>
        </Space>
      </NavLink>
      <ul
        style={{
          display: "flex",
          gap: "14px",
          listStyle: "none",
        }}
      >
        <NavLink to="/" className="navLink">
          <li>Главная</li>
        </NavLink>
        <NavLink to="/history" className="navLink">
          <li>История запросов</li>
        </NavLink>
      </ul>
    </Layout.Header>
  );
};

export default Header;
