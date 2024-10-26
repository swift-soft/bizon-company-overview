import { Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import SelectTime from "./SelectTime";

const ChartContainer = ({ title, ChartComponent }) => {
  return (
    <Stack gap={3}>
      <Flex gap={4} alignItems="center">
        <Heading fontSize="xl">{title}</Heading>
        <SelectTime />
      </Flex>
      <ChartComponent />
    </Stack>
  );
};

export default ChartContainer;
