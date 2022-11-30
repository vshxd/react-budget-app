import { useEffect, useState } from "react";
import { useBudgetContext, useCurrencyContext } from "../../context";
import { useInput, useToggle } from "../../hooks/";
import { StyledBudget, StyledBtn, StyledInput, StyledText } from "./styles";
import { useDebounce } from "../../hooks/useDebounce";

export const BudgetCard = () => {
  const { setBudget, budget } = useBudgetContext();
  const { currentCurrency } = useCurrencyContext();
  const inputBudget = useInput();
  const [isBudgetActive, toogleBudgetActive] = useToggle();
  const [isDisableSave, setDisableSave] = useState<boolean>(true);
  const handleSave = () => {
    setBudget(+inputBudget.value);
    toogleBudgetActive();
  };
  const handleEdit = () => toogleBudgetActive();
  const debounceBudget = useDebounce(inputBudget.value, 500);
  useEffect(
    () => (debounceBudget && +debounceBudget > 0 ? setDisableSave(false) : setDisableSave(true)),
    [debounceBudget],
  );

  return (
    <StyledBudget>
      {!isBudgetActive ? (
        <>
          <StyledInput {...inputBudget} placeholder="Enter Budget ..." type="number" />
          <StyledBtn onClick={handleSave} disabled={isDisableSave}>
            Save
          </StyledBtn>
        </>
      ) : (
        <>
          <StyledText>
            Budget: {budget} {currentCurrency.value}
          </StyledText>
          <StyledBtn onClick={handleEdit}>Edit</StyledBtn>
        </>
      )}
    </StyledBudget>
  );
};
