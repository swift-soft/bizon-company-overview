import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import ChartContainer from "./ChartContainer";
import HeartRateBarChart from "./charts/HeartRateBarChart";

const ChartGrid = () => {
  return (
    <Flex direction="column" gap={10} mt={3}>
      <Flex gap={5}>
        <ChartContainer title="Heart Rate" ChartComponent={HeartRateBarChart} />
        <ChartContainer
          title="Average Steps"
          ChartComponent={HeartRateBarChart}
        />
      </Flex>
      <Flex gap={5}>
        <ChartContainer title="Sleep Time" ChartComponent={HeartRateBarChart} />
        <ChartContainer title="Mood" ChartComponent={HeartRateBarChart} />
      </Flex>
      <Flex gap={5}>
        <ChartContainer
          title="Sport activity"
          ChartComponent={HeartRateBarChart}
        />
        <ChartContainer
          title="Systematic breaks"
          ChartComponent={HeartRateBarChart}
        />
      </Flex>
    </Flex>
  );
};

export default ChartGrid;
