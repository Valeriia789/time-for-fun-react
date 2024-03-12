import { useState } from "react";

import { Player } from "./Player/Player";
import { ActionButton } from "./ActionButton/ActionButton";

import {
  MainContainer,
  StyledTitle,
  StyledDescription,
  ResultContainer,
  TextStyled,
  GameContainer,
} from "./RockPaperScissors.styled";

export const RockPaperScissors = () => {
  const [gameState, setGameState] = useState({
    playerAction: "",
    computerAction: "",
    playerScore: 0,
    computerScore: 0,
    winner: 0,
  });

  const { playerScore, playerAction, computerScore, computerAction, winner } =
    gameState;

  const actions = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors",
  };

  const resultText = {
    "-1": "Цього разу перемога за вами",
    0: "Я не програв - ви не виграли",
    1: "Повстання машин скоро :D",
  };

  const winnerText = resultText[winner] || "Unknown Winner";

  const randomAction = () => {
    const keys = Object.keys(actions);
    const index = Math.floor(Math.random() * keys.length);
    return keys[index];
  };

  const calculateWinner = (action1, action2) => {
    if (action1 === action2) {
      return 0; // Tie
    } else if (
      (action1 === "rock" && action2 === "scissors") ||
      (action1 === "paper" && action2 === "rock") ||
      (action1 === "scissors" && action2 === "paper")
    ) {
      return -1; // Player wins
    } else {
      return 1; // Computer wins
    }
  };

  const onActionSelected = (selectedAction) => {
    const newComputerAction = randomAction();

    setGameState((prevState) => {
      const newWinner = calculateWinner(selectedAction, newComputerAction);

      let { playerScore, computerScore } = prevState;
      if (newWinner === -1) {
        playerScore += 1;
      } else if (newWinner === 1) {
        computerScore += 1;
      }
      return {
        ...prevState,
        playerAction: selectedAction,
        computerAction: newComputerAction,
        winner: newWinner,
        playerScore,
        computerScore,
      };
    });
  };

  return (
    <MainContainer>
      <StyledTitle>Камінь, ножиці, папір</StyledTitle>
      <StyledDescription>
        *У цій грі вашим суперником буде комп'ютер.
      </StyledDescription>
      <StyledDescription>Пам'ятайте, що ножиці ріжуть папір, камінь сильніший за ножиці, а папір може накрити камінь.</StyledDescription>
      <GameContainer>
        <div>
          <TextStyled>Ваш хід: </TextStyled>
          <ActionButton action="rock" onActionSelected={onActionSelected} />
          <ActionButton action="paper" onActionSelected={onActionSelected} />
          <ActionButton action="scissors" onActionSelected={onActionSelected} />
        </div>
        <ResultContainer>
          <Player name="Гравець" score={playerScore} action={playerAction} />
          <Player
            name="Комп'ютер"
            score={computerScore}
            action={computerAction}
          />
        </ResultContainer>
        <TextStyled>{winnerText}</TextStyled>
      </GameContainer>
    </MainContainer>
  );
};
