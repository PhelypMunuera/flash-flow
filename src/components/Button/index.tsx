import { type ReactNode } from "react";
import style from "./style.module.css";

type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return <button className={style.container}>{children}</button>;
}
