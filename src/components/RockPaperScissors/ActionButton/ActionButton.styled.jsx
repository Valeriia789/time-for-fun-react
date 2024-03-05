import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100px;
  height: 100px;

  margin: 2px;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  background-color: rgb(225, 220, 144);
  color: rgb(73, 128, 110);

  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgb(255, 252, 100);

    transform: translateY(-4px);
  }
`;
