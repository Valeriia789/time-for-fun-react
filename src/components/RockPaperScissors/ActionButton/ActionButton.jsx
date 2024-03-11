import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

import { StyledButton } from "./ActionButton.styled";

export const ActionButton = ({ action = "rock", onActionSelected, iconSize = 40 }) => {
  const actionIcons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
  };

  const handleClick = () => {
    onActionSelected(action);
  };

  const Icon = actionIcons[action] || FaHandRock; // Default to rock if action is invalid

  return (
    <StyledButton onClick={handleClick}>
    <Icon size={iconSize} />
    </StyledButton>
  );
};
