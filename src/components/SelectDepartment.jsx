import React from "react";
import { Select } from "@chakra-ui/react";

function SelectDepartment() {
  return (
    <Select
      placeholder="Select department"
      size="md"
      variant="subtle"
      w="190px"
    >
      <option label="Whole Company" value="all" />
      <option label="Research and Development" value="r&d" />
      <option label="Medical Affairs" value="medical-affairs" />
      <option label="Information Technology" value="it" />
      <option label="Commercial Operations" value="commercial-operations" />
      <option label="Finance and Legal" value="finance-legal" />
    </Select>
  );
}

export default SelectDepartment;
