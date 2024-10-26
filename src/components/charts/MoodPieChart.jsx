import { Box } from "@chakra-ui/react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";
import colors from "../../config/colors";

import { useState } from "react";

const data = [
  { name: "Neutral", value: 2942, color: colors.neutral },
  { name: "Positive", value: 5125, color: colors.positive },
  { name: "Negative", value: 1933, color: colors.negative },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
    opacity,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity={opacity}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
        opacity={opacity}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
        opacity={opacity}
      />
      <circle
        cx={ex}
        cy={ey}
        r={2}
        fill={fill}
        stroke="none"
        opacity={opacity}
      />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        opacity={opacity}
      >
        {payload.name}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
        opacity={opacity}
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function MoodPieChart() {
  const [activeIndex, setActiveIndex] = useState(1000);

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
      <Box
        position="absolute"
        top="714px" //732px with fontsize 8xl
        left="301px"
        transform="translate(-50%)"
        fontSize="9xl"
      >
        {activeIndex === 0 ? (
          <img
            src="/icons/neutral.svg"
            alt="Sad Icon"
            width="120"
            height="120"
          />
        ) : activeIndex === 2 ? (
          <img src="/icons/sad.svg" alt="Happy Icon" width="120" height="120" />
        ) : (
          <img
            src="/icons/happy.svg"
            alt="Neutral Icon"
            width="120"
            height="120"
          />
        )}
      </Box>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart
          width={300}
          height={300}
          onMouseLeave={() => {
            setActiveIndex(1000);
          }}
        >
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            inactiveShape={(props) =>
              activeIndex === 1000
                ? renderActiveShape({ ...props, opacity: 1 })
                : renderActiveShape({ ...props, opacity: 0.4 })
            }
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={110}
            paddingAngle={3}
            fill="#8884d8"
            onMouseEnter={(_, index) => setActiveIndex(index)}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                opacity={
                  activeIndex === 1000 || activeIndex === index ? 1 : 0.4
                }
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}
