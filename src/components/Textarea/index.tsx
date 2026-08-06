
import { useFormContext  } from "react-hook-form";
import style from "./style.module.css";

type InputProps = {
  purposeOfInput: string;
  placeholder?: string;
  name: keyof FlashcardFormData
  img: string
  defaultValue?: string
}

type FlashcardFormData = {
  quest: string;
  answer: string;
};


export function Textarea({purposeOfInput, placeholder, name, img, defaultValue}: InputProps) {

  const { register } = useFormContext<FlashcardFormData>()
 
  return(
    <label className={style.formContainer}>
      <span>{purposeOfInput}</span>
      <div>
        <img src={img} alt="" />
        <textarea defaultValue={defaultValue} placeholder={placeholder} {...register(name)} />
      </div>
    </label>
)}
