import { Header } from "./components/Header";
import { FilterSection } from "./components/FilterSection";
import { CardsSection } from "./components/CardsSection";
import { FilterProvaider } from "./contexts/filter-context";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <FilterProvaider>
          <FilterSection />
          <CardsSection />
        </FilterProvaider>
      </main>
    </>
  );
}

export default App;
