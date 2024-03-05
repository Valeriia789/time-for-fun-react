import styled from "styled-components";

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 120px;
  height: 120px;

  margin: 10px;

  background-color: transparent;
`;

export const StyledScore = styled.div`
  font-size: 16px;
  font-weight: 600;

  border-bottom: 4px solid rgb(200, 200, 60);
  border-radius: 40%;
`;

export const StyledAction = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  justify-content: center;
  align-items: center;

  padding: 14px;

  color: rgb(0, 0, 0);
`;