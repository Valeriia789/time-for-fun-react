import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100px;
  height: 100px;

  margin: 2px;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  background-color: rgb(200, 200, 60);
  color: rgb(0, 0, 0); 

  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgb(225, 225, 45);
    transform: translateY(-4px);
  }
`;
