import { ActionIcon } from "../ActionIcon/ActionIcon";

import { PlayerContainer, StyledScore, StyledAction } from "./Player.styled";

export const Player = ({ name = "Player", score = 0, action = "rock" }) => {
  return (
    <div>
      <div>{`${name}: ${score}`}</div>
      <div>{action && <ActionIcon action={action} size={80} />}</div>
    </div>
  );
};
