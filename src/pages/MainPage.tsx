import { Layout } from "antd";
import FormInput from "../components/FormInput";

const contentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "start",
  paddingTop: "100px",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  minHeight: "calc(100vh - 140px)",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#70737A",
};

const MainPage = () => {
  return (
    <Layout.Content style={contentStyle}>
      <FormInput />
    </Layout.Content>
  );
};

export default MainPage;
