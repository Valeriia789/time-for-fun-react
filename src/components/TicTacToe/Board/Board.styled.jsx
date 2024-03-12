import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const SquareBtn = styled.button`
  float: left;

  width: 100px;
  height: 100px;

  margin-top: -1px;
  margin-left: -1px;
  padding: 0;

  border: 2px solid rgb(170, 200, 85);

  background-color: ${(p) => p.theme.colors.bgcPrimary};

  /* background-color: transparent; */

  text-align: center;
  font-size: 40px;
  cursor: pointer;

  color: rgb(200, 200, 60);
`;
