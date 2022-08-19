import { Radar } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import {
    Cell,
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { AppContext } from "../../context/Context";

let data = [
    { name: 'Defining', value: 5 },
    { name: 'Planning', value: 3 },
    { name: 'Designing', value: 8 },
    { name: 'Building', value: 4 },
    { name: 'Deployment', value: 9 },
    { name: 'Testing', value: 14 },
  ];
  
  const COLORS = ['#5ABDC7', '#395CB4', '#291DA1', '#601DA1', '#931DA1', '#A11D7C'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

const Featured = () => {
  const { projList } = useContext(AppContext)

  useEffect(() => {
    let planning = 0 
    let defining = 0
    let designing = 0
    let building = 0
    let deployment = 0
    let testing = 0
    projList.forEach(proj => {
      if (proj.stage === 'Planning') {
        planning += 1
      } else if (proj.stage === 'Defining') {
        defining += 1
      } else if (proj.stage === 'Designing') {
        designing += 1
      } else if (proj.stage === 'Building') {
        building += 1
      } else if (proj.stage === 'Deployment') {
        deployment += 1
      } else if (proj.stage === 'Testing') {
        testing += 1
      }
    })
    data = [
      { name: 'Defining', value: defining },
      { name: 'Planning', value: planning },
      { name: 'Designing', value: designing },
      { name: 'Building', value: building },
      { name: 'Deployment', value: deployment },
      { name: 'Testing', value: testing },
    ];
  }, [projList])

  return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
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
          <Legend layout="horizontal"  iconType="circle"  />
        </PieChart>
      </ResponsiveContainer>
  );
};

export default Featured;
