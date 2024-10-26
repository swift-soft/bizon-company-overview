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
  { month: "January", heartRate: 58 },
  { month: "February", heartRate: 102 },
  { month: "March", heartRate: 72 },
  { month: "April", heartRate: 85 },
  { month: "May", heartRate: 110 },
  { month: "June", heartRate: 76 },
  { month: "July", heartRate: 95 },
  { month: "August", heartRate: 64 },
  { month: "September", heartRate: 88 },
  { month: "October", heartRate: 115 },
  { month: "November", heartRate: 76 },
  { month: "December", heartRate: 65 },
];

export default class HeartRateBarChart extends PureComponent {
  getBarColor = (heartRate) => {
    if (heartRate > 99 || heartRate < 61) return "#ff8e7f";
    if (heartRate > 94 || heartRate < 66) return "#f5ff63";
    return "#8cff5e";
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
            <YAxis />
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
