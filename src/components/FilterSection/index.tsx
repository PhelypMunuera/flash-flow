import style from "./style.module.css";
import { Filters } from "../Filters";

export function FilterSection() {
  return (
    <section className={style.containerFilterSection}>
      <div>
        <h3>PAINEL DE APRENDIZADO</h3>
        <h1>Domine tecnologia com foco total</h1>
      </div>
      <Filters />
    </section>
  );
}
