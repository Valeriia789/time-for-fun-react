import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 12px;

  @media screen and (min-width: 576px) {
    gap: 24px;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding: 6px 12px;

  border: 2px solid transparent;
  border-radius: 6px;
  background-color: rgba(7, 14, 7, 0.75);

  text-decoration: none;

  &:focus,
  &:hover {
    border: 2px solid rgba(115, 165, 11, 0.5);
    box-shadow: 0px 6px 24px rgba(115, 165, 11, 0.85);
  }

  @media screen and (min-width: 576px) {
    padding: 12px 24px;
  }
`;

export const TitleStyled = styled.h2`
  justify-self: self-end;
  align-self: self-end;

  font-size: 18px;
  font-weight: 600;

  text-shadow: 1px 1px 2px rgba(30, 95, 31, 0.854),
    0 0 1em rgba(30, 95, 31, 0.854), 0 0 0.2em rgba(30, 95, 31, 0.854);
  color: rgb(215, 220, 195);

  @media screen and (min-width: 576px) {
    font-size: 24px;
  }
`;
