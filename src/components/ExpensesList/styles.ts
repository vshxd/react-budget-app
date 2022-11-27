import styled from "styled-components";

export const StyledExpensesList = styled.ul`
  max-height: 200px;
  overflow-y: auto;
  &::scroll {
    display: none;
  }
`;
