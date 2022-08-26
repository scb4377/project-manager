import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Sector } from "recharts";
import { AppContext } from "../../context/Context";

let data = [
  { name: "Defining", value: 5 },
  { name: "Planning", value: 3 },
  { name: "Designing", value: 8 },
  { name: "Building", value: 4 },
  { name: "Deployment", value: 9 },
  { name: "Testing", value: 14 },
];

// const COLORS = [
//   "#88CFFE",
//   "#55BBFE",
//   "#5685fd",
//   "#2461fc",
//   "#a288fe",
//   "#7a55fe",
// ];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 10) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text style={{zIndex: 400}} x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const Featured = () => {
  const { projList } = useContext(AppContext);

  useEffect(() => {
    let planning = 0;
    let defining = 0;
    let designing = 0;
    let building = 0;
    let deployment = 0;
    let testing = 0;
    projList.forEach((proj) => {
      if (proj.stage === "Planning") {
        planning += 1;
      } else if (proj.stage === "Defining") {
        defining += 1;
      } else if (proj.stage === "Designing") {
        designing += 1;
      } else if (proj.stage === "Building") {
        building += 1;
      } else if (proj.stage === "Deployment") {
        deployment += 1;
      } else if (proj.stage === "Testing") {
        testing += 1;
      }
    });
    data = [
      { name: "Defining", value: defining },
      { name: "Planning", value: planning },
      { name: "Designing", value: designing },
      { name: "Building", value: building },
      { name: "Deployment", value: deployment },
      { name: "Testing", value: testing },
    ];
  }, [projList]);

  const state = {
    activeIndex: 0,
  };

  const [pieState, setPieState] = useState(state)

  const onPieEnter = (_, index) => {
    setPieState({
      activeIndex: index,
    });
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width="100%" height="100%">
          <Pie
            activeIndex={pieState.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={60}
            fill="#2D6675"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      {/* <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="horizontal" iconType="circle" />
      </PieChart> */}
    </ResponsiveContainer>
  );
};

export default Featured;
