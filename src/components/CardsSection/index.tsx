import emptyImg from "../../assets/empty.svg";
import { Flashcard } from "../Flashcard";
import { Button } from "../Button";
import { cards } from "./mock";

import style from "./style.module.css";
import { useFilter } from "../../hooks/useFilter";

export function CardsSection() {
  const { activeFilter } = useFilter();
  const hasSomeCard = Boolean(cards.length);

  const filteredCads = activeFilter === "Tudo" ? cards
      : cards.filter((card) => card.category === activeFilter);

  return hasSomeCard ? (
    <section className={style.containerCardsGrid}>
      {filteredCads.map((card) => (
        <Flashcard key={card.question} card={card} />
      ))}
    </section>
  ) : (
    <div className={style.containerEmptyCardGrid}>
      <img src={emptyImg} alt="Vazio" />
      <p>Você ainda não possui flashcards. Que tal criar um para começar?</p>
      <Button>Novo flashcard</Button>
    </div>
  );
}
