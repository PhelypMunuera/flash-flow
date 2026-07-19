import style from './style.module.css'

type ButtonProps = {
  text: string;
};

export function Button({ text }: ButtonProps) {
  return <button className={style.container}>{text}</button>;
}
