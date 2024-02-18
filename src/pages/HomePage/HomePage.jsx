import { Outlet, NavLink } from "react-router-dom";
import {
  PageContainer,
  NavContainer,
  LinkContainer,
  NavLinkStyled,
  ImageStyled,
  TitleStyled,
} from "./HomePage.styled";

import imgMagicBall from "../../images/imgMagicBall.svg";
import imgBall from "../../images/imgBall.svg";
import imgQuote from "../../images/imgQuote.svg";
import imgTicTacToe from "../../images/imgTicTacToe.svg";

const HomePage = () => {
  return (
    <PageContainer>
      <NavContainer>
        <NavLinkStyled to="/" end>
          <TitleStyled>Головна</TitleStyled>
        </NavLinkStyled>

        <NavLinkStyled to="/ball">
          <img width="200px" src={imgMagicBall} alt="" />
          <TitleStyled>Магічна куля</TitleStyled>
        </NavLinkStyled>

        <NavLinkStyled to="/quotes">
          <img width="200px" src={imgQuote} alt="" />
          <TitleStyled>Мотивація</TitleStyled>
        </NavLinkStyled>

        <NavLinkStyled to="/tic-tac-toe">
          <img width="200px" src={imgTicTacToe} alt="" />
          <TitleStyled>Гра</TitleStyled>
        </NavLinkStyled>
      </NavContainer>

      <Outlet />
    </PageContainer>
  );
};

export default HomePage;
