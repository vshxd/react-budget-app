import { useBudgetContext, useCurrencyContext } from "../../context";
import { StyledSpentCard } from "./styles";

export const SpentCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { spending } = useBudgetContext();

  return (
    <StyledSpentCard>
      Spent so far: {spending} {currentCurrency.value}
    </StyledSpentCard>
  );
};
