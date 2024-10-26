import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import ChartContainer from "./ChartContainer";
import HeartRateBarChart from "./charts/HeartRateBarChart";
import StepsBarChart from "./charts/StepsBarChart";
import SleepBarChart from "./charts/SleepBarChart";
import SportTimeBarChart from "./charts/SportTimeBarChart";

const ChartGrid = () => {
  return (
    <Flex direction="column" gap={10} mt={3}>
      <Flex gap={5}>
        <ChartContainer title="Heart Rate" ChartComponent={HeartRateBarChart} />
        <ChartContainer
          title="Average Steps"
          ChartComponent={StepsBarChart}
          time="Daily"
        />
      </Flex>
      <Flex gap={5}>
        <ChartContainer
          title="Average Sleep Time"
          ChartComponent={SleepBarChart}
          time="Yearly"
        />
        <ChartContainer title="Mood" ChartComponent={HeartRateBarChart} />
      </Flex>
      <Flex gap={5}>
        <ChartContainer
          title="Sport activity"
          ChartComponent={SportTimeBarChart}
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
