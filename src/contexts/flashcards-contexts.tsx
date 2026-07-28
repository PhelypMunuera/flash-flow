import { createContext, useState, type ReactNode } from "react";
import type { FlashcardType } from "../types/flashcard";
import { cards } from "../components/CardsSection/mock";

type FlashcardsContextType = {
  flashcards: FlashcardType[];
  addFlashcard: (flashcard: FlashcardType) => void
  removeFlashcard: (id: string) => void
};

const FlashcardsContext = createContext<FlashcardsContextType | null>(null);

type FlashcardsProviderProps = {
  children: ReactNode;
};

function FlashcardsProvider({ children }: FlashcardsProviderProps) {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>(cards);

  function addFlashcard(flashcard: FlashcardType) {
    setFlashcards([...flashcards, flashcard])
  }

  function removeFlashcard(id: string) {
    const updatedFlashcards = flashcards.filter(flashcard => flashcard.id != id)

    setFlashcards(updatedFlashcards)
  }

  return (
    <FlashcardsContext.Provider value={{ 
      flashcards,
      addFlashcard,
      removeFlashcard
    }}>
      {children}
    </FlashcardsContext.Provider>
  );
}

export { FlashcardsContext, FlashcardsProvider };
