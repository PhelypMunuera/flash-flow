import { useContext } from "react";
import { FlashcardsContext } from '../contexts/flashcards-contexts'


export function useFlashcards(){
    const context = useContext(FlashcardsContext)
    if (!context) throw new Error('context null');
    
    return context
}