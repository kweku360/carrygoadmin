import React from "react";
import { Select } from "evergreen-ui";

const SelectBox = ({ register, options, name, ...rest }) => {
  return (
    <Select name={name} innerRef={register} {...rest}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </Select>
  );
};
export default SelectBox;
