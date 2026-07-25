import { Header } from "./components/Header";
import { FilterSection } from "./components/FilterSection";
import { CardsSection } from "./components/CardsSection";
import { FilterProvaider } from "./contexts/filter-context";
import { CardsBanckProvider } from "./contexts/cards-bank-context";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <FilterProvaider>
          <FilterSection />
          <CardsBanckProvider>
            <CardsSection />
          </CardsBanckProvider>
        </FilterProvaider>
      </main>
    </>
  );
}

export default App;
