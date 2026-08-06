import logoImg from "../../assets/logoImg.svg";
import { Button } from "../Button";
import { DialogTrigger } from "../Dialog";
import style from "./style.module.css";



export function Header() {
  return (
    <header className={style.container}>
      <div className={style.logo}>
        <img src={logoImg} alt="my Logo" />
        <span>Flash Flow</span>
      </div>
      <DialogTrigger payload={'addCard'}>
        <Button>Novo Flashcard</Button>
      </DialogTrigger>
    </header>
  );
}
