import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

export const ActionIcon = ({ action, size }) => {
  const actionIcons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
  };

  const Icon = actionIcons[action] || FaHandRock; // Default to rock if action is invalid
  return <Icon size={size} />;
};
