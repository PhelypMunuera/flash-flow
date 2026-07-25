import style from "./style.module.css";
import plus from "../../assets/plus.svg";

export function AddNewFlashcard() {
  return (
    <button className={style.container}>
      <div className={style.plus}>
        <img src={plus} alt="Adicionar" />
      </div>
      <div>
        <span>Criar novo card</span>
        <p>Adicione um novo desafio à sua biblioteca e mantenha o ritmo.</p>
      </div>
    </button>
  );
}
