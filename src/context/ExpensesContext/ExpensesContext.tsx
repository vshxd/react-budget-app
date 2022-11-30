import { createContext, useContext, useState } from "react";
import { IChildrenContext } from "../../types/types";
import { IExpense, IExpenseContext } from "./types";

export const ExpensesContext = createContext<IExpenseContext>({} as IExpenseContext);
export const useExpensesContext = () => useContext(ExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpenseContext>(() => ({
    expenses: [],
    setNewExpense: (expense: IExpense) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses, expense],
      }));
    },
    deleteExpense: (id) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: ctx.expenses.filter((expense) => expense.id !== id),
      }));
    },
  }));
  return expensesContext;
};

export const ExpensesContextProvider = ({ children }: IChildrenContext) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
