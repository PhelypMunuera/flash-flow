import { useFormContext } from "react-hook-form";
import style from "./style.module.css";

type InputProps = {
  purposeOfInput: string;
  name: "category";
  img: string;
};

type FlashcardFormData = {
  category: string;
};

export function InputSelect({ purposeOfInput, name, img }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FlashcardFormData>();

  const error = errors[name];

  return (
    <label htmlFor={name} className={style.formContainer}>
      <span>{purposeOfInput}</span>
      <div>
        <img src={img} alt="" />
        <select
          id={name}
          className={error ? style.error : undefined}
          {...register(name, { required: "Esse campo é obrigatório" })}
        >
          <option value="" disabled>
            Selecione a categoria do card
          </option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="Tailwind CSS">Tailwind CSS</option>
          <option value="Node.js">Node.js</option>
        </select>
      </div>
      {error && <span className={style.errorMessage}>{error.message}</span>}
    </label>
  );
}
