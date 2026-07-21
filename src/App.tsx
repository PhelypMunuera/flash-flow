import "./global.css";
import { Header } from "./components/Header";
import { FilterSection } from "./components/FilterSection";
import { CardsGrid } from "./components/CardsGrid";
function App() {
  return (
    <>
      <Header />
      <main>
        <FilterSection />
        <CardsGrid />
      </main>
    </>
  );
}

export default App;
