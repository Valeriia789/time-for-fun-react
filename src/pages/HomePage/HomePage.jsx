import { Outlet, NavLink } from "react-router-dom";
import {
  PageContainer,
  NavContainer,
  LinkContainer,
  NavLinkStyled,
  ImageStyled,
  TitleStyled,
} from "./HomePage.styled";

import imgHome from '../../images/imgHome.svg'
import imgMagicBall from '../../images/imgMagicBall.svg'
import imgQuoteAuthor from '../../images/imgQuoteAuthor.svg'
import imgTicTacToe from "../../images/imgTicTacToe.svg";

const HomePage = () => {
  return (
    <PageContainer>
      <NavContainer>
        <NavLinkStyled to="/" end>
        <img width="200px" src={imgHome} alt="" />
          <TitleStyled>Головна</TitleStyled>
        </NavLinkStyled>

        <NavLinkStyled to="/ball">
          <img width="200px" src={imgMagicBall} alt="" />
          <TitleStyled>Магічна куля</TitleStyled>
        </NavLinkStyled>

        <NavLinkStyled to="/quotes">
          <img width="200px" src={imgQuoteAuthor} alt="" />
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
