import style from "./style.module.css";
import { Filters } from "../Filters"

export function Categories() {
return(
    <section className={style.container}>
       <div>
       <h3>Painel de Aprendizado</h3>
        <h1>Domine tecnologia com foco
        total</h1>
       </div>
        <Filters />
    </section>
)
}