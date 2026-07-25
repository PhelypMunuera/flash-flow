import trashIcon from "../../assets/trashIcon.svg";

import style from "./style.module.css";
export function ModalDelete() {
  return (
    <div className={style.container}>
      <section className={style.containerModal}>
        <div className={style.containerIcon}>
          <img src={trashIcon} alt="Lixeira" />
        </div>
        <div className={style.containerText}>
          <span>Tem certeza que deseja excluir este card?</span>
          <p>
            Esta ação não pode ser desfeita e o card será removido
            permanentemente da sua biblioteca.
          </p>
        </div>
        <div className={style.containerButton}>
          <button>Cancelar</button>
          <button>Excluir</button>
        </div>
      </section>
    </div>
  );
}
