import trashIcon from "../../assets/trashIcon.svg";
import { useFlashcards } from "../../hooks/useFlashcards";
import { dialogHandler } from '../Dialog/handle'
import style from "./style.module.css";


type DialogDeleteProps = {
  flashcardID?: string;
};


export function DialogDelete({ flashcardID }: DialogDeleteProps) {
  const { removeFlashcard } = useFlashcards();

  function deleteThisFlashcard() {
    if (flashcardID !== undefined) removeFlashcard(flashcardID);
    dialogHandler.close()
  }

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
          <button onClick={() => {dialogHandler.close()}}>Cancelar</button>

          <button onClick={() => {deleteThisFlashcard()}}>
            Excluir
          </button>
        </div>
      </section>
    </div>
  );
}

