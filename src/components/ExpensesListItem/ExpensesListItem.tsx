import { useCurrencyContext, useExpensesContext } from "../../context";
import {
  StyledItemBadge,
  StyledItemDelete,
  StyledItemText,
  StyledExpensesListItem,
} from "./styles";

interface IProps {
  name: string;
  price: number;
  id: string;
}

export const ExpenseItem = ({ name, price, id }: IProps) => {
  const { currentCurrency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();
  const handleDelete = () => {
    deleteExpense(id);
  };
  return (
    <StyledExpensesListItem>
      <StyledItemText>{name}</StyledItemText>
      <StyledItemBadge>
        {price} {currentCurrency.value}
      </StyledItemBadge>
      <StyledItemDelete onClick={handleDelete} />
    </StyledExpensesListItem>
  );
};
