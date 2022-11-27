import { Search, Title, ExpensesList } from "../";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title label="expenses" />
      <Search />
      <ExpensesList />
    </StyledExpenses>
  );
};
