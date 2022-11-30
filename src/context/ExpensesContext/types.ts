export interface IExpense {
  name: string;
  price: number;
  id: string;
}
export interface IExpenseContext {
  expenses: IExpense[];
  setNewExpense: (expense: IExpense) => void;
  deleteExpense: (id: string) => void;
}
