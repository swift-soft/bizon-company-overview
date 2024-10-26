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
  { month: "Jan", heartRate: 58 },
  { month: "Feb", heartRate: 102 },
  { month: "Mar", heartRate: 72 },
  { month: "Apr", heartRate: 85 },
  { month: "May", heartRate: 110 },
  { month: "Jun", heartRate: 76 },
  { month: "Jul", heartRate: 95 },
  { month: "Aug", heartRate: 64 },
  { month: "Sep", heartRate: 88 },
  { month: "Oct", heartRate: 115 },
  { month: "Nov", heartRate: 76 },
  { month: "Dec", heartRate: 65 },
];

export default class HeartRateBarChart extends PureComponent {
  getBarColor = (heartRate) => {
    if (heartRate > 99 || heartRate < 61) return colors.negative;
    if (heartRate > 94 || heartRate < 66) return colors.neutral;
    return colors.positive;
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
            <XAxis dataKey="month" />
            <YAxis
              label={{ value: "bpm", angle: -90, position: "insideLeft" }}
              domain={[50, 120]}
            />
            <Tooltip />
            <Bar dataKey="heartRate">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={this.getBarColor(entry.heartRate)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    );
  }
}
