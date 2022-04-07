import React from "react";
import { useProducts } from "../init/useProducts";

type Props = {
  value: boolean;
  handleChange(param: boolean): void;
};

function SelectAvaible({ value, handleChange }: Props) {
  return (
    <>
      <input
        type="checkbox"
        name="quantity_available"
        id="quantity_available-checkbox"
        checked={value}
        onChange={(e) => handleChange(e.target.checked)}
      />
      <label htmlFor="quantity_available-checkbox">Show only avaible</label>
    </>
  );
}

export default SelectAvaible;
