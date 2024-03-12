import styled from "styled-components";

export const TicTacToeContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;

  padding: 24px;

  background-color: ${(p) => p.theme.colors.componentBgc};
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;

  color: rgb(170, 200, 85);
`;

export const StyledDescription = styled.p`
  font-size: 16px;
  padding-bottom: 18px;
  color: rgb(200, 200, 60);
`;

export const StyledScore = styled.p`
  font-size: 24px;
  padding: 12px;
  color: rgb(200, 200, 60);
`;

export const StyledButton = styled.button`
  padding: 12px;

  border-radius: 6px;
  border-color: transparent;
  background-color: rgba(7, 14, 7, 0.75);

  font-size: 24px;
  font-weight: 400;
  color: rgb(170, 200, 85);
`;
