import { Box, Flex, Text } from "@chakra-ui/react";
import Select from "./components/SelectDepartment";
import DiagramsGrid from "./components/ChartGrid";

const Overview = () => {
  return (
    <Flex
      top={0}
      left={0}
      position="fixed"
      direction="column"
      gap={5}
      w="1280px"
      mt={24}
      ml={64}
      h="85%"
      overflowY="auto"
    >
      <Text fontWeight="bold" fontSize="3xl" mb={5}>
        Hi Justina
      </Text>
      <Select />
      <DiagramsGrid />
    </Flex>
  );
};

export default Overview;
