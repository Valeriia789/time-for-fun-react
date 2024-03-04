import { useState } from "react";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
// import { Player } from "./Player/Player";
// import { ActionButton } from "./ActionButton/ActionButton";

import { MainContainer, GameContainer } from "./RockPaperScissors.styled";
// import iconRock from "./iconRock.svg";
// import iconPaper from "./iconPaper.svg";
// import iconScissors from "./iconScissors.svg";

const actions = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

function randomAction() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  console.log(keys[index]);
  return keys[index];
}

function calculateWinner(action1, action2) {
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
}

function ActionIcon({ action, ...props }) {
  const icons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
  };

  const Icon = icons[action];
  // console.log({...props});
  return <Icon {...props} />;
}

function Player({ name = "Player", score = 0, action = "rock" }) {
  return (
    <div>
      <div>{`${name}: ${score}`}</div>
      <div>{action && <ActionIcon action={action} size={80}/>}</div>
    </div>
  );
}

function ActionButton({ action = "rock", onActionSelected }) {
  let icon;
  try {
    switch (action) {
      case "rock":
        icon = FaHandRock;
        break;
      case "paper":
        icon = FaHandPaper;
        break;
      case "scissors":
        icon = FaHandScissors;
        break;
      default:
        throw new Error("Invalid action");
    }
  } catch (error) {
    console.error("Error rendering ActionButton:", error);
    return <div>Error: {error.message}</div>; // Fallback UI for error
  }

  return (
    <button onClick={() => onActionSelected(action)}>
      <ActionIcon action={action} size={40}/>
    </button>
  );
}

// function ActionButton({ action = "rock", onActionSelected }) {
//   return (
//     <button onClick={() => onActionSelected(action)}>
//       <ActionIcon action={action} size={20} />
//     </button>
//   );
// }

function ShowWinner({ winner = 0 }) {
  const text = {
    "-1": "You win :)",
    0: "It's a Tie :|",
    1: "You Lose :(",
  };

  return <h2>{text[winner]}</h2>;
}

export const RockPaperScissors = () => {
  const [playerAction, setPlayerAction] = useState("");
  const [computerAction, setComputerAction] = useState("");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const [winner, setWinner] = useState(0);

  const onActionSelected = (selectedAction) => {
    const newComputerAction = randomAction();

    setPlayerAction(selectedAction);
    setComputerAction(newComputerAction);

    const newWinner = calculateWinner(selectedAction, newComputerAction);
    setWinner(newWinner);

    if (newWinner === -1) {
      setPlayerScore(playerScore + 1);
    } else if (newWinner === 1) {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <MainContainer>
      <h2>Rock Paper Scissors</h2>
      <GameContainer>
        <div>
          <Player name="Player" score={playerScore} action={playerAction} />
          <Player
            name="Computer"
            score={computerScore}
            action={computerAction}
          />
        </div>
        <div>
          <ActionButton action="rock" onActionSelected={onActionSelected}>
          {/* <img width="50px" src={iconRock} alt="" /> */}
          </ActionButton>
          <ActionButton  action="paper" onActionSelected={onActionSelected}>
          {/* <img width="50px" src={iconPaper} alt="" /> */}
          </ActionButton>
          <ActionButton action="scissors" onActionSelected={onActionSelected}>
          {/* <img width="50px" src={iconScissors} alt="" /> */}
          </ActionButton>
        </div>
        <ShowWinner winner={winner} />
      </GameContainer>
    </MainContainer>
  );
};

// rock icon
// <a href="https://www.freepik.com/free-vector/moai-easter-island-isolated-vector-cartoon-stone-sculpture_20366605.htm#fromView=search&page=1&position=2&uuid=c571e29d-3db9-40e3-a28d-b0f6c10f0190">Image by valadzionak_volha</a> on Freepik
// paper icon
// <a href="https://www.freepik.com/free-vector/blank-vintage-scroll-paper_21306053.htm#fromView=search&page=4&position=22&uuid=1c0fe69e-0326-4237-aec9-9e971d870408">Image by brgfx</a> on Freepik
// scissors icon
// <a href="https://www.freepik.com/free-vector/medical-scissors-tool-equipment-icon_70015447.htm#fromView=search&page=1&position=9&uuid=26fd0aa4-986a-4b24-80a8-55ecca79912c">Image by jemastock</a> on Freepik
