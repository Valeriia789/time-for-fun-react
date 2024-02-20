import { Outlet } from "react-router-dom";
import Home from "../../components/Home/Home";

import { PageContainer } from "./HomePage.styled";

const HomePage = () => {
  return (
    <PageContainer>
      <Home />
      <Outlet />
    </PageContainer>
  );
};

export default HomePage;
