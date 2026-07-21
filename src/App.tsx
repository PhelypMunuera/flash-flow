import "./global.css";
import { Header } from "./components/Header";
import { FilterSection } from "./components/FilterSection";
import { CardsSection } from "./components/CardsSection";
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
