import { ChangeEvent, useState } from "react";
import "./Select.scss";

const options = [
  { label: "сперва новые", value: "new" },
  { label: "сначала дешевые", value: "cheap" },
  { label: "сначала дорогие", value: "exp" },
];

const Select = () => {
  const [selected, setSelected] = useState(options[0].value);
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
    setSelected(e.currentTarget.value);
  };

  return (
    <select className="select" value={selected} onChange={handleSelect}>
      {options.map((el) => (
        <option key={el.value} value={el.value}>
          Порядок: {el.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
