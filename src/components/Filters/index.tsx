import { categories } from "../consts";
import style from "./style.module.css";
import { useFilter } from "../../hooks/useFilter";

const filterOptions = ['Tudo', ...categories];

export function Filters() {

const {activeFilter, setActiveFilter} = useFilter()

  return (
    <ul className={style.containerFilters}>
      {filterOptions.map((filterOption) => (
        <li
        className={ activeFilter === filterOption ? style.selected :  ''}
          key={filterOption}
          onClick={() => setActiveFilter(filterOption)}
        >
          {filterOption}
        </li>

      ))}
    </ul>
  );
}
