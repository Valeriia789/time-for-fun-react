import iconRock from "../images/iconRock.svg";
import iconPaper from "../images/iconPaper.svg";
import iconScissors from "../images/iconScissors.svg";
import iconMushroom from '../images/iconMushroom.svg'

import { PlayerContainer, StyledScore, StyledAction } from "./Player.styled";

export const Player = ({
  name = "Player",
  score = 0,
  action = "rock",
  iconSize = 100,
}) => {
  const actionIcons = {
    rock: iconRock,
    paper: iconPaper,
    scissors: iconScissors,
  };

  const Icon = actionIcons[action] || iconMushroom; // Default to rock if action is invalid

  return (
    <PlayerContainer>
      <StyledScore>
        <p>{name} :</p>
        <p>{score}</p>
      </StyledScore>
      <StyledAction>
        <img width={iconSize} height={iconSize} src={Icon} alt="Action icon" />
      </StyledAction>
    </PlayerContainer>
  );
};

// rock icon
// <a href="https://www.freepik.com/free-vector/moai-easter-island-isolated-vector-cartoon-stone-sculpture_20366605.htm#fromView=search&page=1&position=2&uuid=c571e29d-3db9-40e3-a28d-b0f6c10f0190">Image by valadzionak_volha</a> on Freepik
// paper icon
// <a href="https://www.freepik.com/free-vector/blank-vintage-scroll-paper_21306053.htm#fromView=search&page=4&position=22&uuid=1c0fe69e-0326-4237-aec9-9e971d870408">Image by brgfx</a> on Freepik
// scissors icon
// <a href="https://www.freepik.com/free-vector/medical-scissors-tool-equipment-icon_70015447.htm#fromView=search&page=1&position=9&uuid=26fd0aa4-986a-4b24-80a8-55ecca79912c">Image by jemastock</a> on Freepik

// iconMushroom
// <a href="https://www.freepik.com/free-vector/mushroom-house-with-door-windows-fairytale-home-isolated-white-background-illustration_13031929.htm#fromView=search&term=magic+mushroom&track=ais&regularType=vector&page=1&position=29&uuid=2e059ab7-7fe5-40ee-bf15-c85c7e22385c">Image by macrovector</a> on Freepik
