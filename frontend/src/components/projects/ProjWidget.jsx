import { Box, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Low",
    uv: 10,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "Minor",
    uv: 9,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "Major",
    uv: 12,
    pv: 4567,
    fill: "#F6AA00",
  },
  {
    name: "Critical",
    uv: 5,
    pv: 2400,
    fill: "#99180D",
  },
];

const dataBar = [
  {
    name: "Jan",
    open: 5,
    closed: 3,
  },
  {
    name: "Feb",
    open: 2,
    closed: 1,
  },
  {
    name: "March",
    open: 6,
    closed: 9,
  },
  {
    name: "April",
    open: 3,
    closed: 6,
  },
  {
    name: "May",
    open: 2,
    closed: 8,
  },
  {
    name: "June",
    open: 3,
    closed: 8,
  },
  {
    name: "Aug",
    open: 3,
    closed: 8,
  },
];

const ProjWidget = ({ mode, type }) => {
  const [radBar, setRadBar] = useState("");
  const [barchart, setBarChart] = useState("");

  useEffect(() => {
    switch (type) {
      case "radialbar":
        setRadBar("radbar");
        break;
      case "barchart":
        setBarChart("barchart");
        break;
      default:
        break;
    }
  }, []);

  return (
    <>
      <Box
        bgcolor={mode === "dark" ? "background.dark" : "background.default"}
        boxShadow={5}
        p={2}
        borderRadius="5px"
        width="max-content"
        height="max-content"
        display={"flex"}
        justifyContent="space-between"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {radBar === "radbar" && (
          <Box height={200} width={400}>
            <ResponsiveContainer>
              <RadialBarChart
                width={400}
                height={250}
                innerRadius="20%"
                outerRadius="150%"
                data={data}
                startAngle={180}
                endAngle={0}
                barCategoryGap={3}
                cy={"80%"}
              >
                <RadialBar
                  minAngle={15}
                  label={{ fill: "#666", position: "insideStart" }}
                  background
                  clockWise={true}
                  dataKey="uv"
                />
                <Legend
                  iconSize={10}
                  width={120}
                  height={140}
                  layout="vertical"
                  verticalAlign="middle"
                  align="left"
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </Box>
        )}

        {barchart && (
          <Box height={200} width={580}>
            <ResponsiveContainer>
              <BarChart
                width={730}
                height={250}
                data={dataBar}
                margin={{ left: 0 }}
                barCategoryGap={3}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="open" fill="#02a1ae" />
                <Bar dataKey="closed" fill="#0f02ae" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ProjWidget;
