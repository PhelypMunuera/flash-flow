import emptyImg from "../../assets/empty.svg";
import { Button } from "../Button";
import style from "./style.module.css";
import type { FlashCardType } from "../../types/flashCards";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delite.svg";
import reveleIcon from "../../assets/revel.svg";

const cards: FlashCardType[] = [
  {
    category: "JavaScript",
    question: "teste funcionou 1?",
    answer: "sim",
  },
  {
    category: "JavaScript",
    question: "teste funcionou 2?",
    answer: "sim",
  },
  {
    category: "JavaScript",
    question: "teste funcionou 3?",
    answer: "sim",
  },
  {
    category: "JavaScript",
    question: "teste funcionou4 ?",
    answer: "sim",
  },
  {
    category: "JavaScript",
    question: "teste funcionou5 ?",
    answer: "sim",
  },
];

export function CardsGrid() {
  const hasSomeCard = Boolean(cards.length);

  return hasSomeCard ? (
    <div className={style.containerCardsGrid}>
      {cards.map((card) => (
        <article key={card.question} className={style.card}>
          <header className={style.cardHeader}>
            <span>{card.category.toUpperCase()}</span>
            <div className={style.actions}>
              <button><img src={editIcon} alt="Editar" /></button>
              <button><img src={deleteIcon} alt="Deletar" /></button>
            </div>
          </header>

          <div>
            <p>{card.question}</p>
            <p>{card.answer}</p>
          </div>
          <button>
            <img src={reveleIcon} alt="Revelar Resposta" />
          </button>
        </article>
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
