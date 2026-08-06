
import { useFormContext } from "react-hook-form";
import style from "./style.module.css";
import { useState } from "react";

type InputProps = {
  purposeOfInput: string;
  name: keyof FlashcardFormData
  img: string
}

type FlashcardFormData = {
  category: string;
};

export function InputSelect({purposeOfInput, name, img}: InputProps) {
  const [ valueOption, setValueOption ] = useState('')
  const { register } = useFormContext()
 
  return(
    <label htmlFor={name} className={style.formContainer}>
      <span>{purposeOfInput}</span>
      <div>
        <img src={img} alt="" />
        <select id={name} value={valueOption} {...register(`${name}`, {onChange: (event) => {setValueOption(event.target.value)}})}>
          <option value={''} disabled>Selecione a categoria do card</option>
          <option value={'JavaScript'}>JavaScript</option>
          <option value={'React'}>React</option>
          <option value={'Tailwind CSS'}>Tailwind CSS</option>
          <option value={'Node.js'}>Node.js</option>
        </select>
      </div>
    </label>
)}
