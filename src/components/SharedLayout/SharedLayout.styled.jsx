import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div``;

export const Header = styled.header`
  max-width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  align-items: baseline;

  padding: 24px;
  /* border: 6px solid transparent; */
  border-radius: 6px;

  background-color: #252827;
`;

export const NavMenu = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
`;

export const StyledNavLink = styled(NavLink)`
  display: grid;
  place-content: center;

  padding: 12px 6px;

  border: 2px solid transparent;
  border-radius: 6px;

  background-color: #F8CF2C;

  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #291211;
`;
