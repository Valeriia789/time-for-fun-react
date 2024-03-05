import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  padding: 12px;

  background-color: rgba(20, 30, 20, 0.95);

  @media screen and (min-width: 576px) {
    padding: 24px;
  }

  @media screen and (min-width: 992px) {
    /* img{
      width: 150px;
    } */
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: end;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: end;
  align-items: end;

  padding: 0 32px;

  border: 2px solid transparent;
  border-radius: 5%;
  outline: none;
  
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    border: 2px solid rgba(115, 165, 11, 0.3);
    box-shadow: 0px 6px 24px rgba(115, 165, 11, 0.85);

    transform: revert;
  }
  
  @media screen and (min-width: 576px) {
    padding: 0 40px;
  }
`;

export const StyledText = styled.p`
  padding: 6px;
`;
