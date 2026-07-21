import emptyImg from "../../assets/empty.svg";
import { Button } from "../Button";
import style from './style.module.css'

export function CardsGrid() {
  return (
    <div className={style.containerCardGrid}>
      <img src={emptyImg} alt='Vazio'/>
      <p>
        Você ainda não possui flashcards. Que tal criar um para começar?
      </p>
      <Button>Novo flashcard</Button>
    </div>
  );
}
