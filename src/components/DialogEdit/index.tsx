import { useEffect, useMemo } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { dialogHandler } from "../Dialog/handle";
import quest from "../../assets/quest.svg";
import folder from "../../assets/folder.svg";
import textAnswer from "../../assets/textAnswer.svg";
import { Textarea } from "../Textarea";
import { InputSelect } from "../InputSelect";
import { useFlashcards } from "../../hooks/useFlashcards";
import type { CategoryType, FlashcardType } from "../../types/flashcard";

import style from "./style.module.css";

type FlashcardFormData = {
  category: CategoryType;
  quest: string;
  answer: string;
};

type DialogEditProps = {
  flashcardID?: string;
};

export function DialogEdit({ flashcardID }: DialogEditProps) {
  const { updateFlashcard } = useFlashcards();

  const currentFlashcard = useMemo(() => {
    const storage = localStorage.getItem("@flashcards");

    if (!storage || !flashcardID) {
      return undefined;
    }

    const stored: FlashcardType[] = JSON.parse(storage);
    const idCard = flashcardID.slice(5);

    return stored.find((flashcard) => flashcard.id === idCard);
  }, [flashcardID]);

  const methods = useForm<FlashcardFormData>({
    defaultValues: {
      category: "" as CategoryType,
      quest: "",
      answer: "",
    },
  });

  useEffect(() => {
    if (!currentFlashcard) {
      return;
    }

    methods.reset({
      category: currentFlashcard.category,
      quest: currentFlashcard.question,
      answer: currentFlashcard.answer,
    });
  }, [currentFlashcard, methods]);

  function editFlashcard(data: FlashcardFormData) {
    if (!currentFlashcard) {
      return;
    }

    updateFlashcard({
      ...currentFlashcard,
      category: data.category,
      question: data.quest,
      answer: data.answer,
    });

    dialogHandler.close();
  }

  return (
    <div className={style.container}>
      <FormProvider {...methods}>
        <form
          className={style.containerModal}
          onSubmit={methods.handleSubmit(editFlashcard)}
        >
          <div>
            <h1>Editar Flashcard</h1>
            <span>Atualize seu conhecimento.</span>
          </div>

          <InputSelect
            img={folder}
            purposeOfInput="CATEGORIA"
            name="category"
          />

          <Textarea
            img={quest}
            purposeOfInput="PERGUNTA"
            name="quest"
          />

          <Textarea
            img={textAnswer}
            purposeOfInput="RESPOSTA"
            name="answer"
          />

          <div className={style.containerButton}>
            <button
              type="button"
              onClick={() => dialogHandler.close()}
            >
              Cancelar
            </button>

            <button type="submit">
              Salvar
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
