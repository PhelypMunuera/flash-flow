import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { FlashcardType } from "../types/flashcard";
import { cards } from "../components/CardsSection/mock";

type createContextType = {
  cardsBank: FlashcardType[];
  setCardsBank: Dispatch<SetStateAction<FlashcardType[]>>;
};

const CardsBankContext = createContext<createContextType | null>(null);

type CardsBanckProps = {
  children: ReactNode;
};

function CardsBanckProvider({ children }: CardsBanckProps) {
  const [cardsBank, setCardsBank] = useState(cards);

  return (
    <CardsBankContext.Provider value={{ cardsBank, setCardsBank }}>
      {children}
    </CardsBankContext.Provider>
  );
}

export { CardsBankContext, CardsBanckProvider };
