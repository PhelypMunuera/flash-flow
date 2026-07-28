import emptyImg from "../../assets/empty.svg";
import { Flashcard } from "../Flashcard";
import { Button } from "../Button";
import { ModalDelete } from "../ModalDelete";
import { v1 as uuid } from "uuid";
import style from "./style.module.css";
import { useFilter } from "../../hooks/useFilter";
import { AddNewFlashcard } from "../AddNewFlashcard";
import { useFlashcards } from "../../hooks/useFlashcards";
import type { FlashcardType } from "../../types/flashcard";

export function CardsSection() {
  const { activeFilter } = useFilter();
  const { flashcards, addFlashcard } = useFlashcards();

  const hasSomeCard = Boolean(flashcards.length);

  const filteredCads =
    activeFilter === "Tudo"
      ? flashcards
      : flashcards.filter((card) => card.category === activeFilter);

  const newFlashcard: FlashcardType = {
    id: uuid(),
    category: "JavaScript",
    question: "O que é Js?",
    answer:
      "Virtual DOM é uma representação em memória do DOM real. Ele permite que bibliotecas como o React comparem mudanças de forma eficiente e atualizem apenas os elementos necessários na interface, melhorando a performance.",
  };

  return hasSomeCard ? (
    <section className={style.containerCardsGrid}>
      {filteredCads.map((card) => (
        <Flashcard key={card.id} card={card} />
      ))}
      <AddNewFlashcard />
      <ModalDelete />
    </section>
  ) : (
    <div className={style.containerEmptyCardGrid}>
      <img src={emptyImg} alt="Vazio" />
      <p>Você ainda não possui flashcards. Que tal criar um para começar?</p>
      <Button onClick={() => addFlashcard(newFlashcard)}>Novo flashcard</Button>
    </div>
  );
}
