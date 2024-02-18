import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PageContainer = styled.div`
  background: rgb(250, 224, 192);
`;

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 12px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding: 6px 24px;

  border: 1px solid transparent;
  background-color: rgba(251, 246, 241, 0.568);

  text-decoration: none;
`;

export const ImageStyled = styled.img``;

export const TitleStyled = styled.h2`
  justify-self: self-end;
  align-self: self-end;

  font-size: 32px;
  font-weight: 600;

  text-shadow: 1px 1px 2px rgb(250, 224, 192), 0 0 1em rgb(250, 224, 192),
    0 0 0.2em rgb(250, 224, 192);
  color: rgb(50, 50, 50);
`;
