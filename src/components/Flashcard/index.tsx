import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delite.svg";
import reveleIcon from "../../assets/revel.svg";

import style from "./style.module.css";
import type { FlashcardType } from "../../types/flashcard";

type FlashcardProps = {
  card: FlashcardType;
};

export function Flashcard({ card }: FlashcardProps) {
  return (
    <article key={card.question} className={style.card}>
      <header className={style.cardHeader}>
        <span>{card.category.toUpperCase()}</span>
        <div className={style.actions}>
          <button>
            <img src={editIcon} alt="Editar" />
          </button>
          <button>
            <img src={deleteIcon} alt="Deletar" />
          </button>
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
  );
}
