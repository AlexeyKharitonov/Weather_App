import { Layout } from "antd";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./Routes";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const layoutStyle = {
    overflow: "hidden",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Layout style={layoutStyle}>
        <Header />
        <AppRoutes />
        <Footer />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
