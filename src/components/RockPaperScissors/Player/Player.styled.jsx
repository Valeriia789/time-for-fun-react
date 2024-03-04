import styled from "styled-components";

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 120px;
  height: 120px;

  margin: 10px;

  background-color: grey;
`;

export const StyledScore = styled.div`
  padding: 1px;
  font-size: small;
  font-weight: bold;

  background-color: #1b6528;
`;

export const StyledAction = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  justify-content: center;
  align-items: center;

  color: #ffffff;
`;