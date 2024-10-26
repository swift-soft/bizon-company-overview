import React from "react";
import { Select } from "@chakra-ui/react";

function SelectTime({ time = "Monthly" }) {
  // Define all time options
  const timeOptions = ["Daily", "Monthly", "Yearly"];

  // Filter out the current time from the options list
  const filteredOptions = timeOptions.filter((option) => option !== time);

  return (
    <Select placeholder={time} size="md" variant="subtle" w="190px">
      {filteredOptions.map((option) => (
        <option key={option.toLowerCase()} value={option.toLowerCase()}>
          {option}
        </option>
      ))}
    </Select>
  );
}

export default SelectTime;
