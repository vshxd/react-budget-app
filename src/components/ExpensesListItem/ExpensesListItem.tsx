import { useBudgetContext, useCurrencyContext, useExpensesContext } from "../../context";
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

export const ExpensesListItem = ({ name, price, id }: IProps) => {
  const { currentCurrency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();
  const { setSpendingMinus, setRemainingPlus } = useBudgetContext();
  const handleDelete = () => {
    deleteExpense(id);
    setSpendingMinus(price);
    setRemainingPlus(price);
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
