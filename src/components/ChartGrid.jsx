import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const ChartGrid = () => {
  return (
    <Flex direction="column" gap={4} mt={3}>
      <Flex gap={1}>
        <Box h="300px" w="600px" bg="gray.300" rounded="xl"></Box>
      </Flex>
      <Flex gap={1}>
        <Box h="300px" w="600px" bg="gray.300" rounded="xl"></Box>
        <Box h="300px" w="600px" bg="gray.300" rounded="xl"></Box>
      </Flex>
      <Flex gap={1}>
        <Box h="300px" w="600px" bg="gray.300" rounded="xl"></Box>
        <Box h="300px" w="600px" bg="gray.300" rounded="xl"></Box>
      </Flex>
    </Flex>
  );
};

export default ChartGrid;
