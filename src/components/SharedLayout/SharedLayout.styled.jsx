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
  border: 1px solid blueviolet;
  border-radius: 6px;
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

  border: 2px solid blueviolet;
  border-radius: 6px;

  color: #010101;

  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
`;
