import { Outlet } from "react-router-dom";

// import House13 from "../../images/House13.svg";
import imgHome from "../../images/imgHome.svg";

import { StyledHeader, NavMenu, StyledNavLink, StyledText } from "./Header.styled";

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

      <Outlet />
    </>
  );
};

{
  /* <a href="https://www.freepik.com/free-vector/mushroom-house-with-door-windows-fairytale-home-isolated-white-background-illustration_13031929.htm#fromView=search&term=magic+mushroom&track=ais&regularType=vector&page=1&position=29&uuid=2e059ab7-7fe5-40ee-bf15-c85c7e22385c">Image by macrovector</a> on Freepik */
}
