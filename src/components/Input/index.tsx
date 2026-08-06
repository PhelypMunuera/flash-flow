
import { useFormContext } from "react-hook-form";
import style from "./style.module.css";

type InputProps = {
  purposeOfInput: string;
  placeholder: string;
  name: keyof FlashcardFormData;
  img: string;
}

type FlashcardFormData = {
  type: string;
};

export function Input({purposeOfInput, placeholder, name, img}: InputProps) {

  const { register } = useFormContext<FlashcardFormData>()
 
  return(
    <label className={style.formContainer}>
      <span>{purposeOfInput}</span>
      <div>
        <img src={img} alt="" />
        <input placeholder={placeholder} {...register(`${name}`)} />
      </div>
    </label>
)}
