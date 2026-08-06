import emptyImg from "../../assets/empty.svg";
import { Flashcard } from "../Flashcard";
import { Button } from "../Button";

import style from "./style.module.css";
import { useFilter } from "../../hooks/useFilter";
import { AddNewFlashcard } from "../AddNewFlashcard";
import { useFlashcards } from "../../hooks/useFlashcards";

import { DialogTrigger } from "../Dialog";

export function CardsSection() {
  const { activeFilter } = useFilter();
  const { flashcards} = useFlashcards();

  const hasSomeCard = Boolean(flashcards.length);

  const filteredCads =
    activeFilter === "Tudo"
      ? flashcards
      : flashcards.filter((card) => card.category === activeFilter);

 

  return hasSomeCard ? (
    <section className={style.containerCardsGrid}>
      {filteredCads.map((card) => (
        <Flashcard key={card.id} card={card} />
      ))}
      <AddNewFlashcard />

    </section>
  ) : (
    <div className={style.containerEmptyCardGrid}>
      <img src={emptyImg} alt="Vazio" />
      <p>Você ainda não possui flashcards. Que tal criar um para começar?</p>
      <DialogTrigger payload={'addCard'}>
        <Button>Novo flashcard </Button>
      </DialogTrigger>
    </div>
  );
}


