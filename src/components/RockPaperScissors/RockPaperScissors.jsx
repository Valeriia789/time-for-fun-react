import { useState } from "react";

import { randomAction, calculateWinner } from "./helpers";
import { Player } from "./Player/Player";
import { ActionButton } from "./ActionButton/ActionButton";
import { ShowWinner } from "./ShowWinner/ShowWinner";

import { MainContainer, GameContainer } from "./RockPaperScissors.styled";

export const RockPaperScissors = () => {
  const [gameState, setGameState] = useState({
    playerAction: "",
    computerAction: "",
    playerScore: 0,
    computerScore: 0,
    winner: 0,
  });

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

  const { playerScore, playerAction, computerScore, computerAction, winner } =
    gameState;

  return (
    <MainContainer>
      <h2>Rock Paper Scissors</h2>
      <GameContainer>
        <div>
          <h3>Choose: </h3>
          <ActionButton action="rock" onActionSelected={onActionSelected}>
            {/* <img width="50px" src={iconRock} alt="" /> */}
          </ActionButton>
          <ActionButton action="paper" onActionSelected={onActionSelected}>
            {/* <img width="50px" src={iconPaper} alt="" /> */}
          </ActionButton>
          <ActionButton action="scissors" onActionSelected={onActionSelected}>
            {/* <img width="50px" src={iconScissors} alt="" /> */}
          </ActionButton>
        </div>
        <div>
          <Player name="Player" score={playerScore} action={playerAction} />
          <Player
            name="Computer"
            score={computerScore}
            action={computerAction}
          />
        </div>
        <ShowWinner winner={winner} />
      </GameContainer>
    </MainContainer>
  );
};

// import iconRock from "./iconRock.svg";
// import iconPaper from "./iconPaper.svg";
// import iconScissors from "./iconScissors.svg";

// rock icon
// <a href="https://www.freepik.com/free-vector/moai-easter-island-isolated-vector-cartoon-stone-sculpture_20366605.htm#fromView=search&page=1&position=2&uuid=c571e29d-3db9-40e3-a28d-b0f6c10f0190">Image by valadzionak_volha</a> on Freepik
// paper icon
// <a href="https://www.freepik.com/free-vector/blank-vintage-scroll-paper_21306053.htm#fromView=search&page=4&position=22&uuid=1c0fe69e-0326-4237-aec9-9e971d870408">Image by brgfx</a> on Freepik
// scissors icon
// <a href="https://www.freepik.com/free-vector/medical-scissors-tool-equipment-icon_70015447.htm#fromView=search&page=1&position=9&uuid=26fd0aa4-986a-4b24-80a8-55ecca79912c">Image by jemastock</a> on Freepik
