import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;
`;

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding: 6px 24px;

  border: 2px solid rgba(30, 50, 30, 0.85);
  border-radius: 6px;
  background-color: rgba(25, 50, 25, 0.75);

  box-shadow: 0px 6px 12px rgba(110, 175, 95, 0.5);
  text-decoration: none;

  &:focus,
  &:hover {
    box-shadow: 0px 6px 24px rgb(185, 175, 30);
  }
`;

export const ImageStyled = styled.img``;

export const TitleStyled = styled.h2`
  justify-self: self-end;
  align-self: self-end;

  font-size: 24px;
  font-weight: 600;

  text-shadow: 1px 1px 2px rgba(30, 95, 31, 0.854),
    0 0 1em rgba(30, 95, 31, 0.854), 0 0 0.2em rgba(30, 95, 31, 0.854);
  color: rgb(215, 220, 195);
`;
