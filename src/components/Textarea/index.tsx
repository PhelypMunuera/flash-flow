import { useFormContext } from "react-hook-form";
import style from "./style.module.css";

type InputProps = {
  purposeOfInput: string;
  placeholder?: string;
  name: "quest" | "answer";
  img: string;
  defaultValue?: string;
};

type FlashcardFormData = {
  quest: string;
  answer: string;
};

export function Textarea({
  purposeOfInput,
  placeholder,
  name,
  img,
  defaultValue,
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FlashcardFormData>();

  const error = errors[name];

  return (
    <label className={style.formContainer}>
      <span>{purposeOfInput}</span>
      <div className={error ? style.error : undefined}>
        <img src={img} alt="" />
        <textarea
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register(name, { required: "Esse campo é obrigatório" })}
        />
      </div>
      {error && <span className={style.errorMessage}>{error.message}</span>}
    </label>
  );
}
