import { Box, Typography } from "@mui/material";
import {
  AreaChart,
  linearGradient,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
import { data } from "../Data";

const Chart = () => {
  return (
      <ResponsiveContainer
        width="99%"
        aspect={2 / 1}
        style={{ padding: "20px", }}
      >
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="OpenTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="ClosedTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="OpenTotal"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#OpenTotal)"
          />
          <Area
            type="monotone"
            dataKey="ClosedTotal"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#ClosedTotal)"
          />
        </AreaChart>
      </ResponsiveContainer>
  );
};

export default Chart;
