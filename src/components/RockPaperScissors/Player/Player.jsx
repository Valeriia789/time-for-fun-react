import { ActionIcon } from "../ActionIcon/ActionIcon";

import { PlayerContainer, StyledScore, StyledAction } from "./Player.styled";

export const Player = ({ name = 'Player', score = 0, action='rock' }) => {
  return (
    <PlayerContainer>
      <StyledScore>{`${name}: ${score}`}</StyledScore>
      <StyledAction>
        {action && <ActionIcon action={action}/>}
      </StyledAction>
    </PlayerContainer>
  );
};
