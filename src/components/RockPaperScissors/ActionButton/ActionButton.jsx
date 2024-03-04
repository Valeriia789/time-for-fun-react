import { ActionIcon } from "../ActionIcon/ActionIcon";

import { StyledButton } from "./ActionButton.styled";

export const ActionButton = ({action='rock', onActionSelected}) => {
  return <StyledButton onClick={() => onActionSelected(action)}>
    <ActionIcon action={action}/>
  </StyledButton>;
};