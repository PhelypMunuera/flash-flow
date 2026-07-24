import { useContext } from "react";
import { FilterContext } from "../contexts/filter-context";

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) throw new Error('context null');

  return context
}
