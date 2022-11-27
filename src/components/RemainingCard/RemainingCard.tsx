import { useBudgetContext, useCurrencyContext } from "../../context";
import { StyledRemainingCard } from "./styles";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { remaining } = useBudgetContext();
  if (remaining < 0) {
    return (
      <StyledRemainingCard danger>
        Overspending by {Math.abs(remaining)} {currentCurrency.value}
      </StyledRemainingCard>
    );
  }
  return (
    <StyledRemainingCard>
      Remaining: {remaining} {currentCurrency.value}
    </StyledRemainingCard>
  );
};
