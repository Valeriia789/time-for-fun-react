import { Outlet } from "react-router-dom";

import { Header, NavMenu, StyledNavLink } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
        <Header>
          <NavMenu>
            <StyledNavLink to="/" end>
              Головна
              {/* <img width="200px" src={House16} alt="" /> */}
            </StyledNavLink>
          </NavMenu>
        </Header>

      <Outlet />
    </>
  );
};
