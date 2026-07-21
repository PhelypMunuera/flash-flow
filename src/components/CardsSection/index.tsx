import { Button } from "../Button";
import { cards } from "./mock";
import { Flashcard } from "../Flashcard";

import emptyImg from "../../assets/empty.svg";

import style from "./style.module.css";

export function CardsSection() {
  const hasSomeCard = Boolean(cards.length);

  return hasSomeCard ? (
    <div className={style.containerCardsGrid}>
      {cards.map((card) => (
        <Flashcard key={card.question} card={card} />
      ))}
    </div>
  ) : (
    <div className={style.containerEmptyCardGrid}>
      <img src={emptyImg} alt="Vazio" />
      <p>Você ainda não possui flashcards. Que tal criar um para começar?</p>
      <Button>Novo flashcard</Button>
    </div>
  );
}
