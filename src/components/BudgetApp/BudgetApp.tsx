import { BudgetCard } from "../BudgetCard/BudgetCard";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { SpentCard } from "../SpentCard/SpentCard";
import { Title } from "../Title/Title";
import { Header, StyledBudgetApp } from "./styles";

export const BudgetApp = () => {
  return (
    <StyledBudgetApp>
      <Header>
        <Title label="budget app"></Title>
        <CustomSelect />
      </Header>
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </StyledBudgetApp>
  );
};
