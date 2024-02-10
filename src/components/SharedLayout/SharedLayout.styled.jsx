import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  align-items: baseline;

  padding: 24px;
  /* border: 6px solid transparent; */

  background: rgb(28, 31, 62);
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

  border: 1px solid transparent;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
  color: rgb(249, 249, 249);

  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 0.5) 0%,
    rgba(30, 78, 128, 0.5) 97%
  );
`;
