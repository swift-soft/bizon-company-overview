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

// Updated data for average time spent on sports activities (in hours) per month
const data = [
  { month: "Jan", sportHours: 1.2 },
  { month: "Feb", sportHours: 2.5 },
  { month: "Mar", sportHours: 0.8 },
  { month: "Apr", sportHours: 2.1 },
  { month: "May", sportHours: 1.6 },
  { month: "Jun", sportHours: 3.0 },
  { month: "Jul", sportHours: 1.3 },
  { month: "Aug", sportHours: 2.7 },
  { month: "Sep", sportHours: 1.9 },
  { month: "Oct", sportHours: 0.7 },
  { month: "Nov", sportHours: 2.3 },
  { month: "Dec", sportHours: 1.5 },
];

export default class SportTimeBarChart extends PureComponent {
  // Function to determine bar color based on sport hours
  getBarColor = (sportHours) => {
    if (sportHours < 1) return "#ff8e7f"; // Light red for very low activity
    if (sportHours < 2) return "#f5ff63"; // Yellow for moderate activity
    return "#8cff5e"; // Green for ideal/healthy activity (2+ hours)
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
              label={{ value: "Hours", angle: -90, position: "insideLeft" }}
              domain={[0, 4]} // Adjust Y-axis range based on activity data
            />
            <Tooltip />
            <Bar dataKey="sportHours">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={this.getBarColor(entry.sportHours)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    );
  }
}
