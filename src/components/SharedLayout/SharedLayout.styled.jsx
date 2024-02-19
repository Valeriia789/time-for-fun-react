import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: end;

  padding: 24px;
  /* border: 6px solid transparent; */

  background: rgb(50, 50, 50);
`;

export const NavMenu = styled.nav`
`;

export const StyledNavLink = styled(NavLink)`
  display: grid;
  place-content: center;

  padding: 12px 6px;

  border: 1px solid rgba(30, 95, 31, 0.854);
  border-radius: 6px;
  
  background-color: rgba(35, 54, 33, 0.616);

  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: rgb(215, 220, 195);
`;
