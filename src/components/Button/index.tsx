import { type ReactNode, type ButtonHTMLAttributes } from "react";
import style from "./style.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, ...props }: ButtonProps) {
  return <button {...props} className={style.container}>{children}</button>;
}
