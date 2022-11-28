import styled from "styled-components";

export const StyledExpensesList = styled.ul`
  max-height: 200px;
  overflow-y: auto;
  &::scroll {
    display: none;
  }
`;

export const StyledMonkey = styled.div`
  padding: 60px 60px;
  margin: 0 auto;
`;
