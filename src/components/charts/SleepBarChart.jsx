import { Box } from "@chakra-ui/react";
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { year: "2017", sleepHours: 6.5 },
  { year: "2018", sleepHours: 7.2 },
  { year: "2019", sleepHours: 6.8 },
  { year: "2020", sleepHours: 7.0 },
  { year: "2021", sleepHours: 6.0 },
  { year: "2022", sleepHours: 8.1 },
  { year: "2023", sleepHours: 6.4 },
];

export default class SleepTimeBarChart extends PureComponent {
  // Function to determine bar color based on sleep hours
  getBarColor = (sleepHours) => {
    if (sleepHours < 6.1) return "#ff8e7f"; // Light red for insufficient sleep
    if (sleepHours < 6.8) return "#f5ff63"; // Yellow for borderline ranges
    return "#9affa0"; // Green for ideal sleep range (7-8 hours)
  };

  render() {
    return (
      <Box
        h="300px"
        w="600px"
        p={2}
        pt={5}
        bg="whiteAlpha.800"
        rounded="lg"
        boxShadow="md"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis
              label={{ value: "Hours", angle: -90, position: "insideLeft" }}
              domain={[4, 9]} // Adjust Y-axis range based on sleep data
            />
            <Tooltip />
            <Bar dataKey="sleepHours">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={this.getBarColor(entry.sleepHours)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    );
  }
}
