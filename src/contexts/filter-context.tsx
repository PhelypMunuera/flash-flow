import { createContext, useState, type ReactNode } from "react";

type createContextType = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

const FilterContext = createContext<createContextType | null>(null);

type FilterProvaiderProps = {
  children: ReactNode;
};

function FilterProvaider({ children }: FilterProvaiderProps) {
  const [activeFilter, setActiveFilter] = useState("Tudo");

  return (
    <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterProvaider };
