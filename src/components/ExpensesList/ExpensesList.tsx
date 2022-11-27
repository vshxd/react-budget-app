import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context";
import { ExpensesListItem } from "../";
import { StyledExpensesList } from "./styles";

export const ExpensesList = () => {
  const { expenses, searchValue } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  useEffect(() => {
    setFilteredExpenses(expenses.filter((exp) => exp.name.toLowerCase().includes(searchValue)));
  }, [searchValue, expenses]);
  return (
    <StyledExpensesList>
      {filteredExpenses.map(({ name, price, id }) => (
        <ExpensesListItem key={id} name={name} price={price} id={id} />
      ))}
    </StyledExpensesList>
  );
};
