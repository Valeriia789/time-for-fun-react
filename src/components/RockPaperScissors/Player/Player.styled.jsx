import styled from "styled-components";

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 120px;
  height: 120px;

  margin: 10px;

  background-color: rgb(55, 91, 88);
`;

export const StyledScore = styled.div`
  padding: 1px;
  font-size: small;
  font-weight: bold;

  background-color: rgb(73, 128, 110);
`;

export const StyledAction = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  justify-content: center;
  align-items: center;

  color: rgb(225, 220, 144);
`;