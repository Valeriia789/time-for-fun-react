import {
  MainContainer,
  GameContainer,
  PlayerContainer,
  StyledScore,
  StyledAction,
  RoundButton,
} from "./RockPaperScissors.styled";

export const RockPaperScissors = () => {
  return (
    <MainContainer>
      <h2>Rock Paper Scissors</h2>
      <GameContainer>
        <div>
          <PlayerContainer>
            <StyledScore>Player 1: 0</StyledScore>
            <StyledAction>icon</StyledAction>
          </PlayerContainer>
          <PlayerContainer>
            <StyledScore>Player 2: 0</StyledScore>
            <StyledAction>icon</StyledAction>
          </PlayerContainer>
        </div>
        <div>
          <RoundButton>Rock</RoundButton>
          <RoundButton>Paper</RoundButton>
          <RoundButton>Scissors</RoundButton>
        </div>
      </GameContainer>
    </MainContainer>
  );
};
