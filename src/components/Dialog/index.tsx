import { Dialog as UIDialog } from "@base-ui/react";
import { type ReactElement } from "react";
import { dialogHandler } from "./handle";
import style from "./style.module.css";
import { DialogCreate } from "../DialogCreate";
import { DialogDelete } from "../DialogDelete";
import { DialogEdit } from "../DialogEdit";

type TriggerProps = {
  children?: ReactElement;
  payload: string;
};

type DialogContentProps = {
  id: string;
};

type Flashcard = {
  id: string;
  question: string;
  answer: string;
};

export function DialogTrigger({ children, payload }: TriggerProps) {
  return (
    <UIDialog.Trigger
      payload={{ id: payload }}
      handle={dialogHandler}
      render={children}
    />
  );
}

export function Dialog() {
  function DialogContent({ id }: DialogContentProps) {
    const flashcards = JSON.parse(localStorage.getItem("@flashcards") ?? "[]");

    const flashcardReturn = flashcards.find(
      (flashcard: Flashcard) => flashcard.id === id,
    );

    return (
      <div>
        {id === "addCard" ? (<DialogCreate />) 
        : flashcardReturn ? (<DialogDelete flashcardID={id} />)
        : (<DialogEdit flashcardID={id} />) }
      </div>
    );
  }
  return (
    <UIDialog.Root handle={dialogHandler}>
      {({ payload }) => (
        <UIDialog.Portal>
          <UIDialog.Backdrop className={style.backdrop}>
            <UIDialog.Popup>
              {payload && <DialogContent id={payload.id} />}
            </UIDialog.Popup>
          </UIDialog.Backdrop>
        </UIDialog.Portal>
      )}
    </UIDialog.Root>
  );
}
