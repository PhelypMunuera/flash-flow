import { useState } from "react";
import { categories } from "../consts";
import style from "./style.module.css";

const filterOptions = ['Tudo', ...categories];

export function Filters() {
  const [selectedFilter, setSelectedFilter] = useState<string>("Tudo");

  return (
    <ul className={style.containerFilters}>
      {filterOptions.map((filterOption) => (
        <li
        className={ selectedFilter === filterOption ? style.selected :  ''}
          key={filterOption}
          onClick={() => setSelectedFilter(filterOption)}
        >
          {filterOption}
        </li>

      ))}
    </ul>
  );
}
