// import {  } from "";

export const ActionIcon = ({ action, ...props }) => {
  const actionIcons = {
    rock: 'rock1',
    paper: 'paper2',
    scissors: 'scissors3',
  };

  const Icon = actionIcons[action];

  return <Icon {...props}/>;
};
