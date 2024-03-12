import styled from "styled-components";

export const TicTacToeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 24px;

  text-align: center;
  background-color: ${(p) => p.theme.colors.componentBgc};
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;

  color: rgb(170, 200, 85);
`;

export const StyledDescription = styled.p`
  width: 300px;
  margin-top: 12px;
  font-size: 16px;
  color: rgb(200, 200, 60);
`;

export const SwitcherButton = styled.button`
  margin-top: 12px;
  padding: 12px;

  border-radius: 6px;
  border-color: transparent;

  background-color: rgba(7, 14, 7, 0.75);
  color: rgb(200, 200, 60);

  font-size: 16px;
  font-weight: 600;
`;

export const StyledScore = styled.p`
  margin-top: 12px;
  font-size: 24px;
  color: rgb(200, 200, 60);
`;

export const StyledButton = styled.button`
  margin-top: 12px;
  padding: 12px;

  border-radius: 6px;
  border-color: transparent;
  background-color: rgba(7, 14, 7, 0.75);

  font-size: 24px;
  font-weight: 400;
  color: rgb(170, 200, 85);
`;
