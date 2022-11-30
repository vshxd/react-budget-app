import { ExpenseItem } from "..";
import { IExpense } from "../../context";
import { StyledExpensesList, StyledMonkey } from "./styles";

interface IProps {
  expenseList: IExpense[];
}

export const ExpensesList = ({ expenseList }: IProps) => {
  if (!expenseList.length) {
    return <StyledMonkey>Oooops 🙈</StyledMonkey>;
  }
  return (
    <StyledExpensesList>
      {expenseList.map(({ name, price, id }) => (
        <ExpenseItem key={id} name={name} price={price} id={id} />
      ))}
    </StyledExpensesList>
  );
};
