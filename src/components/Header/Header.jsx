import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import imgHome from "../../images/imgHome.svg";

import {
  StyledHeader,
  NavMenu,
  StyledNavLink,
  StyledText,
} from "./Header.styled";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <NavMenu>
          <StyledNavLink to="/" end>
            <img width="100px" src={imgHome} alt="" />
            {/* <StyledText>Головна</StyledText> */}
            {/* <img width="200px" src={House16} alt="" /> */}
          </StyledNavLink>
        </NavMenu>
      </StyledHeader>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};