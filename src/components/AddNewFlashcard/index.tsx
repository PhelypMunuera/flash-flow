import style from "./style.module.css";
import plus from "../../assets/plus.svg";
import { useFlashcards } from "../../hooks/useFlashcards";
import type { FlashcardType } from "../../types/flashcard";
import { v1 as uuid } from "uuid";

export function AddNewFlashcard() {
  const { addFlashcard } = useFlashcards();

  const newFlashcard: FlashcardType = 
    {
      id: uuid(),
      category: "JavaScript",
      question: "O que é Js?",
      answer:
        "Virtual DOM é uma representação em memória do DOM real. Ele permite que bibliotecas como o React comparem mudanças de forma eficiente e atualizem apenas os elementos necessários na interface, melhorando a performance.",
    };

  return (
    <button onClick={() => addFlashcard(newFlashcard)} className={style.container}>
      <div className={style.plus}>
        <img src={plus} alt="Adicionar" />
      </div>
      <div>
        <span>Criar novo card</span>
        <p>Adicione um novo desafio à sua biblioteca e mantenha o ritmo.</p>
      </div>
    </button>
  );
}
