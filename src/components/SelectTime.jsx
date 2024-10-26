import React from "react";
import { Select } from "@chakra-ui/react";

function SelectTime() {
  return (
    <Select placeholder="Montly" size="md" variant="subtle" w="190px">
      <option label="Daily" value="daily" />
      <option label="Yearly" value="yearly" />
    </Select>
  );
}

export default SelectTime;
