import { Header } from "./components/Header";
import { FilterSection } from "./components/FilterSection";
import { CardsSection } from "./components/CardsSection";
import { FilterProvaider } from "./contexts/filter-context";
import { FlashcardsProvider } from "./contexts/flashcards-contexts";

import "./global.css";

function App() {
  return (
    <FlashcardsProvider>
      <Header />
      <main>
        <FilterProvaider>
          <FilterSection />
          <CardsSection />
        </FilterProvaider>
      </main>
    </FlashcardsProvider>
  );
}

export default App;
