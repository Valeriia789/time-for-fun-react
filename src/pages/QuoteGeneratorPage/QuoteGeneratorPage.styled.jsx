import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 12px;

  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(30, 78, 128, 0.5) 0%,
    rgba(238, 174, 202, 0.5) 100%
  );
`;