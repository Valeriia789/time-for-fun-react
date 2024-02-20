import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  padding: 18px 12px;

  background-color: rgba(20, 30, 20, 0.95);

  @media screen and (min-width: 576px) {
    padding: 24px 24px;
  }

  @media screen and (min-width: 992px) {
    /* padding: 36px 24px; */
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: end;
`;

export const StyledNavLink = styled(NavLink)`
  border-bottom: 6px solid rgb(254, 183, 18);
  border-radius: 6px;

  display: flex;
  justify-content: end;
  align-items: end;

  /* background-color: rgba(116, 112, 68, 0.5); */

  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: rgb(254, 183, 18);

  &:focus,
  &:hover {
    box-shadow: 0px 6px 24px rgb(254, 183, 18, 0.75);
  }

  @media screen and (min-width: 576px) {
    font-size: 24px;
  }
`;

export const StyledText = styled.p`
  padding: 6px;
`;
