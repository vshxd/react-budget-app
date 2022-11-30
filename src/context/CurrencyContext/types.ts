import { Currency } from "../../config";

export interface ICurrencyContext {
  currentCurrency: ICurrencyOption;
  currencies: ICurrencyOption[];
  setCurrency: (option: ICurrencyOption) => void;
}
export interface ICurrencyOption {
  value: Currency;
  label: keyof typeof Currency;
}
