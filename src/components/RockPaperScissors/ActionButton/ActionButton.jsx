import { ActionIcon } from "../ActionIcon/ActionIcon";

import { StyledButton } from "./ActionButton.styled";

export const ActionButton = ({ action = "rock", onActionSelected }) => {
  const handleClick = () => {
    onActionSelected(action);
  };

  return (
    <button onClick={handleClick}>
      <ActionIcon action={action} size={40} />
    </button>
  );
};
