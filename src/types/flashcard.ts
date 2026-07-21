export type CategoryType =  'JavaScript' | 'React' | 'Tailwind CSS' | 'Node.js';

export type FlashcardType = {
    category: CategoryType,
    question: string,
    answer: string,

}