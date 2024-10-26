import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import DiagramsGrid from "./components/ChartGrid";
import SelectDepartment from "./components/SelectDepartment";

const Overview = () => {
  return (
    <Flex
      top={0}
      left={0}
      position="fixed"
      direction="column"
      gap={5}
      w="1280px"
      mt={20}
      ml={64}
      h="90%"
      mb={8}
      overflowY="auto"
    >
      <Text fontWeight="bold" fontSize="3xl" my={5}>
        Hi Justina
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <SelectDepartment />
        <Button
          variant="solid"
          color="white"
          bg="green.300"
          mr={8}
          rightIcon={<DownloadIcon />}
        >
          Export
        </Button>
      </Flex>
      <DiagramsGrid />
    </Flex>
  );
};

export default Overview;
