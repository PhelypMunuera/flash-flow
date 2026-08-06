import { Header } from "./components/Header";
import { FilterSection } from "./components/FilterSection";
import { CardsSection } from "./components/CardsSection";
import { FilterProvaider } from "./contexts/filter-context";
import { FlashcardsProvider } from "./contexts/flashcards-contexts";

import "./global.css";
import { Dialog } from "./components/Dialog";


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
      <Dialog/>
    </FlashcardsProvider>
    
  );
}

export default App;
