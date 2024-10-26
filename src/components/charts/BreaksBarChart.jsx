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
import colors from "../../config/colors";

const data = [
  { year: "2017", breaksPercentage: 90 },
  { year: "2018", breaksPercentage: 40 },
  { year: "2019", breaksPercentage: 82 },
  { year: "2020", breaksPercentage: 62 },
  { year: "2021", breaksPercentage: 70 },
  { year: "2022", breaksPercentage: 85 },
  { year: "2023", breaksPercentage: 50 },
];

export default class BreaksBarChart extends PureComponent {
  getBarColor = (breaksPercentage) => {
    if (breaksPercentage < 45) return colors.negative; // Low breaks
    if (breaksPercentage < 63) return colors.neutral; // Moderate breaks
    return colors.positive; // High breaks
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
              label={{
                value: "Percentage %",
                angle: -90,
                position: "insideLeft",
              }}
              domain={[0, 100]} // Setting the Y-axis from 0% to 100%
            />
            <Tooltip />
            <Bar dataKey="breaksPercentage">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={this.getBarColor(entry.breaksPercentage)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    );
  }
}
