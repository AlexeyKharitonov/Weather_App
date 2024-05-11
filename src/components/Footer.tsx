import { Layout } from "antd";

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  height: 60,
  color: "#F3F6F7",
  backgroundColor: "#0E0F0F",
};

const Footer = () => {
  return <Layout.Footer style={footerStyle}>Footer</Layout.Footer>;
};

export default Footer;
