import { createContext, useState, type ReactNode } from "react";
import type { FlashcardType } from "../types/flashcard";


type FlashcardsContextType = {
  flashcards: FlashcardType[];
  addFlashcard: (flashcard: FlashcardType) => void;
  updateFlashcard: (flashcard: FlashcardType) => void;
  removeFlashcard: (id: string) => void;
};

const FlashcardsContext = createContext<FlashcardsContextType | null>(null);

type FlashcardsProviderProps = {
  children: ReactNode;
};

function FlashcardsProvider({ children }: FlashcardsProviderProps) {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>(() => {
    const storaged = localStorage.getItem('@flashcards')

    return storaged ? JSON.parse(storaged) : []
  });

  function addFlashcard(flashcard: FlashcardType) {
    setFlashcards([...flashcards, flashcard])

    localStorage.setItem('@flashcards', JSON.stringify([...flashcards, flashcard]))
  }

  function updateFlashcard(updatedFlashcard: FlashcardType) {
    setFlashcards((currentFlashcards) => {
      const updatedFlashcards = currentFlashcards.map((flashcard) =>
        flashcard.id === updatedFlashcard.id
          ? updatedFlashcard
          : flashcard
      );

      localStorage.setItem(
        "@flashcards",
        JSON.stringify(updatedFlashcards)
      );

      return updatedFlashcards;
    });
  }

  function removeFlashcard(id: string) {
    const updatedFlashcards = flashcards.filter(flashcard => flashcard.id != id)
    
    setFlashcards(updatedFlashcards)
    localStorage.setItem('@flashcards', JSON.stringify(updatedFlashcards))
  }

  return (
    <FlashcardsContext.Provider value={{ 
      flashcards,
      addFlashcard,
      updateFlashcard,
      removeFlashcard
    }}>
      {children}
    </FlashcardsContext.Provider>
  );
}

export { FlashcardsContext, FlashcardsProvider };
