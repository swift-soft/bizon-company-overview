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
  { hour: "0", steps: 50 }, // Steps taken at midnight
  { hour: "2", steps: 10 },
  { hour: "4", steps: 40 },
  { hour: "6", steps: 100 },
  { hour: "8", steps: 90 },
  { hour: "10", steps: 70 },
  { hour: "12", steps: 150 },
  { hour: "14", steps: 300 },
  { hour: "16", steps: 400 },
  { hour: "18", steps: 500 },
  { hour: "20", steps: 400 },
  { hour: "22", steps: 300 },
];

export default class HourlyStepsBarChart extends PureComponent {
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
            <XAxis dataKey="hour" />
            <YAxis
              label={{ value: "Steps", angle: -90, position: "insideLeft" }}
              domain={[0, 600]} // Adjust Y-axis range based on activity data
            />
            <Tooltip />
            <Bar dataKey="steps">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#8884d8" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    );
  }
}
