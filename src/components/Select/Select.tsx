import { observer } from "mobx-react-lite";
import type { ChangeEvent } from "react";
import { catalog, SORTING_CRITERIA } from "store/catalog";
import css from "./Select.module.scss";

const options = [
  { label: "сперва новые", value: SORTING_CRITERIA.new },
  { label: "сначала дешевые", value: SORTING_CRITERIA.cheap },
  { label: "сначала дорогие", value: SORTING_CRITERIA.expensive },
  { label: "сначала популярные", value: SORTING_CRITERIA.popular },
];

const Select = () => {
  const { sortBy, sort } = catalog;
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    sort(+e.currentTarget.value);
  };

  return (
    <select className={css.select} value={sortBy} onChange={handleSelect}>
      {options.map((el) => (
        <option key={el.value} value={el.value}>
          Порядок: {el.label}
        </option>
      ))}
    </select>
  );
};

export default observer(Select);
