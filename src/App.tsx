import { BudgetApp, Expenses, Form } from "./components";
import { AppWrapper } from "./styles";

export const App = () => {
  return (
    <AppWrapper>
      <BudgetApp />
      <Expenses />
      <Form />
    </AppWrapper>
  );
};
