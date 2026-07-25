import { useContext } from "react";
import { CardsBankContext } from '../contexts/cards-bank-context'


export function useCardsBank(){
    const context = useContext(CardsBankContext)
    if (!context) throw new Error('context null');
    
    return context
}