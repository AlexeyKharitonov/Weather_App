import { useRoutes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HistoryPage from "./pages/HistoryPage";

const AppRoutes = () => {
  const Routes = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/history",
      element: <HistoryPage />,
    },
  ]);

  return Routes;
};

export default AppRoutes;
