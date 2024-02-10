import { Outlet } from "react-router-dom";

import { Header, NavMenu, StyledNavLink } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>

        <Header>
          <div><p>TFF Logo</p></div>
          <NavMenu>
            <StyledNavLink to="/" end>
              Головна
            </StyledNavLink>
            <StyledNavLink to="/ball">Магічна куля</StyledNavLink>
            <StyledNavLink to="/quotes">Мотивація</StyledNavLink>
            <StyledNavLink to="/tic-tac-toe">Х-О</StyledNavLink>
          </NavMenu>
        </Header>

      <Outlet />
    </>
  );
};
