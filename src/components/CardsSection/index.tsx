import emptyImg from "../../assets/empty.svg";
import { Flashcard } from "../Flashcard";
import { Button } from "../Button";
import { ModalDelete } from "../ModalDelete";

import style from "./style.module.css";
import { useFilter } from "../../hooks/useFilter";
import { AddNewFlashcard } from "../AddNewFlashcard";
import { useCardsBank } from "../../hooks/useCardsBanck";

export function CardsSection() {
  const { activeFilter } = useFilter();
  const { cardsBank } = useCardsBank();


  const hasSomeCard = Boolean(cardsBank.length);

  const filteredCads = activeFilter === "Tudo" ? cardsBank
      : cardsBank.filter((card) => card.category === activeFilter);

  return hasSomeCard ? (
    <section className={style.containerCardsGrid}>
      {filteredCads.map((card) => (
        <Flashcard key={card.question} card={card} />
      ))}
      <AddNewFlashcard />
      <ModalDelete/>
    </section>
  ) : (
    <div className={style.containerEmptyCardGrid}>
      <img src={emptyImg} alt="Vazio" />
      <p>Você ainda não possui flashcards. Que tal criar um para começar?</p>
      <Button>Novo flashcard</Button>
    </div>
  );
}
