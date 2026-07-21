export type CategoryType =  'JavaScript' | 'React' | 'Tailwind CSS' | 'Node.js';

export type FlashCardType = {
    category: CategoryType,
    question: string,
    answer: string,

}