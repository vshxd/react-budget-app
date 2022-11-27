import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px;
  width: 500px;
  @media (max-width: 390px) {
    width: 300px;
  }
`;
