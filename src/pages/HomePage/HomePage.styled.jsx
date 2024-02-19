import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
  background-color: rgba(84, 120, 80, 0.584);
`;

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 12px;

  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding: 6px 24px;

  border: 2px solid rgba(30, 95, 31, 0.854);
  background-color: rgba(35, 54, 33, 0.584);

  text-decoration: none;
`;

export const ImageStyled = styled.img``;

export const TitleStyled = styled.h2`
  justify-self: self-end;
  align-self: self-end;

  font-size: 32px;
  font-weight: 600;

  text-shadow: 1px 1px 2px rgba(30, 95, 31, 0.854),
    0 0 1em rgba(30, 95, 31, 0.854), 0 0 0.2em rgba(30, 95, 31, 0.854);
  color: rgb(215, 220, 195);
`;
