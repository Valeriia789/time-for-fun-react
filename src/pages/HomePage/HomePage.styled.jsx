import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PageContainer = styled.div`
  
`

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 6px;

`

export const NavLinkStyled = styled(NavLink)`
  display: grid;
  place-content: center;

  padding: 12px 6px;

  border: 1px solid blue;

  font-size: 32px;
  font-weight: 600;
  text-decoration: none;
  text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
  color: rgb(249, 249, 249);

  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(30, 78, 128, 1) 97%
  );
`