import { Outlet, NavLink} from "react-router-dom";
import {PageContainer, NavContainer, NavLinkStyled} from './HomePage.styled'

const HomePage = () => {
  return (
    <PageContainer>
          <NavContainer>
            <NavLinkStyled to="/" end>
              Головна
            </NavLinkStyled>
            <NavLinkStyled to="/ball">Магічна куля</NavLinkStyled>
            <NavLinkStyled to="/quotes">Мотивація</NavLinkStyled>
            <NavLinkStyled to="/tic-tac-toe">Х-О</NavLinkStyled>
          </NavContainer>

      <Outlet />
    </PageContainer>
  );
};

export default HomePage;

