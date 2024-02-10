import { Outlet, NavLink } from "react-router-dom";

import { HeaderContainer, Header, NavMenu, StyledNavLink } from "./SharedLayout.styled";

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
          </NavMenu>
        </Header>

      <Outlet />
    </>
  );
};
