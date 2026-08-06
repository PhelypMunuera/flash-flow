import { dialogHandler } from "../Dialog/handle";
import quest from "../../assets/quest.svg";
import folder from "../../assets/folder.svg";
import textAnswer from "../../assets/textAnswer.svg";
import { Textarea } from "../Textarea";
import { InputSelect } from "../InputSelect";

import style from "./style.module.css";
import { useForm, FormProvider } from "react-hook-form";

import { useFlashcards } from "../../hooks/useFlashcards";
import { v1 as uuid } from "uuid";
import type { CategoryType } from "../../types/flashcard";


type FlashcardFormData = {
  category: CategoryType;
  quest: string;
  answer: string;
}

export function DialogCreate() {

  const { addFlashcard } = useFlashcards();

  const methods = useForm<FlashcardFormData>({
    defaultValues: {
      category: "",
      quest: "",
      answer: "",
    },
  });
    

   function addNewFlashcard(data: FlashcardFormData) {

    addFlashcard( { 
      id: uuid(),
      category: data.category,
      question: data.quest,
      answer: data.answer
    })
    
    dialogHandler.close()
  }

  return (
    <div className={style.container}>
      <FormProvider {...methods}>
      <form className={style.containerModal} onSubmit={methods.handleSubmit(addNewFlashcard)}>
        <div>
          <h1>Criar Flashcard</h1>
          <span>Organize seu conhecimento com precisão e clareza.</span>
        </div>
        <InputSelect img={folder} purposeOfInput={"CATEGORIA"} name={"category"} />
        <Textarea
          img={quest}
          purposeOfInput={"PERGUNTA"} placeholder={"Ex: O que é uma Closure no JavaScript?"} name={"quest"}
        />
        <Textarea
          img={textAnswer}
          purposeOfInput={"RESPOSTA"} placeholder={ "Ex: Uma closure é a combinação de uma função com o ambiente léxico..."} name={"answer"}
        />
        <div className={style.containerButton}>
          <button type="button" onClick={() => {dialogHandler.close();}}>
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


