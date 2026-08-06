export type CategoryType =  'JavaScript' | 'React' | 'Tailwind CSS' | 'Node.js' |'' ;

export type FlashcardType = {
    id: string,
    category: CategoryType,
    question: string,
    answer: string,

}