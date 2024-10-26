import React from "react";
import { Select } from "@chakra-ui/react";

function SelectDepartment() {
  return (
    <Select placeholder="All departments" size="md" variant="subtle" w="190px">
      <option label="Human Resources" value="r&d" />
      <option label="Medical Affairs" value="medical-affairs" />
      <option label="Information Technology" value="it" />
      <option label="Commercial Operations" value="commercial-operations" />
      <option label="Finance and Legal" value="finance-legal" />
    </Select>
  );
}

export default SelectDepartment;
