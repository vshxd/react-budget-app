import { createContext, useContext, useState } from "react";
import { Currency } from "../../config";
import { IChildrenContext } from "../../types/types";
import { ICurrencyContext, ICurrencyOption } from "./types";

const options: ICurrencyOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.BYN, label: "BYN" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];
export const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);
export const useCurrencyContext = () => useContext(CurrencyContext);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(() => ({
    currentCurrency: options[0],
    currencies: options,
    setCurrency: (option) => {
      setCurrencyContext((ctx) => ({
        ...ctx,
        currentCurrency: option,
      }));
    },
  }));
  return currencyContext;
};

export const CurrencyContextProvider = ({ children }: IChildrenContext) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
