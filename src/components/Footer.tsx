import { Layout } from "antd";

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  height: 60,
  color: "#F3F6F7",
  backgroundColor: "#0E0F0F",
  fontSize: "13px",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Layout.Footer style={footerStyle}>
      {currentYear} Все права защищены. Информация на сайте не является
      публичной офертой согласно Ст. 437 ГК РФ
    </Layout.Footer>
  );
};

export default Footer;
