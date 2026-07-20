import "./global.css";
import { Header } from "./components/Header";
import { FilterSection } from "./components/FilterSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <FilterSection />
      </main>
    </>
  );
}

export default App;
