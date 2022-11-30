import { createContext } from "react";
import { IProps } from "./types";

export const AppContext = createContext<null>(null);
export const AppContextProvider = (props: IProps) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};
