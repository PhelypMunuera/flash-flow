import { useState } from "react";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delite.svg";
import reveleIcon from "../../assets/revel.svg";

import style from "./style.module.css";
import type { FlashcardType } from "../../types/flashcard";

import { useCardsBank } from "../../hooks/useCardsBanck";

type FlashcardProps = {
  card: FlashcardType;
};

export function Flashcard({ card }: FlashcardProps) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const { cardsBank, setCardsBank } = useCardsBank();

  const position = cardsBank.findIndex(
    (item) => item.question === card.question,
  );

  function deleteCardToClick() {
    setCardsBank(cardsBank.filter((_cards, index) => index !== position));
  }

  return (
    <article className={style.card}>
      <header className={style.cardHeader}>
        <span>{card.category.toUpperCase()}</span>
        <div className={style.actions}>
          <button>
            <img src={editIcon} alt="Editar" />
          </button>
          <button onClick={() => deleteCardToClick()}>
            <img src={deleteIcon} alt="Deletar" />
          </button>
        </div>
      </header>

      <div className={`${style.cardBody} ${!showAnswer && style.hidden}`}>
        <p>{card.question}</p>
        {showAnswer && <p>{card.answer}</p>}
      </div>
      <footer className={style.cardFooter}>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          <img src={reveleIcon} alt="Revelar Resposta" />
        </button>
      </footer>
    </article>
  );
}
