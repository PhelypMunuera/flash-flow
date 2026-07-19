import logoImg from '../../assets/logoImg.svg'
import { Button } from '../Button'
import style from './style.module.css'
export function Header(){
    return(
    <header className={style.container}>
       <div className={style.logo}>
       <img src={logoImg} alt="my Logo" />
       <span>Flash Flow</span>
       </div>
        <Button text='Novo Flashcard '/>
    </header>
    )
}