import { Header } from "./components/Header";
import { FilterSection } from "./components/FilterSection";
import { CardsSection } from "./components/CardsSection";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <FilterSection />
        <CardsSection />
      </main>
    </>
  );
}

export default App;
