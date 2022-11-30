import { ReactNode } from "react";

export interface IFormData {
  name: string;
  price: number;
}

export interface IChildrenContext {
  children: ReactNode;
}
