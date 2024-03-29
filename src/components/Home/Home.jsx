import { NavContainer, NavLinkStyled, TitleStyled } from "./Home.styled";

// import imgHome from "../../images/imgHome.svg";
import imgMagicBall from "../../images/imgMagicBall.svg";
import imgQuoteAuthor from "../../images/imgQuoteAuthor.svg";
import imgTicTacToe from "../../images/imgTicTacToe.svg";
import imgRockPaperScissors from '../../images/imgRockPaperScissors.svg'

const Home = () => {
  return (
    <NavContainer>
      {/* <NavLinkStyled to="/" end>
        <img width="200px" src={imgHome} alt="" />
        <TitleStyled>Головна</TitleStyled>
      </NavLinkStyled> */}

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
        <TitleStyled>Хрестики - нулики</TitleStyled>
      </NavLinkStyled>

      <NavLinkStyled to="/rock-paper-scissors">
        <img width="200px" src={imgRockPaperScissors} alt="" />
        <TitleStyled>Камінь - ножиці - папір</TitleStyled>
      </NavLinkStyled>

      <NavLinkStyled to="/reverse">
        <img width="200px" src={imgRockPaperScissors} alt="" />
        <TitleStyled>Навпаки</TitleStyled>
      </NavLinkStyled>
    </NavContainer>
  );
};

export default Home;
