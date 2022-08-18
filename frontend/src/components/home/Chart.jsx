import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";

const Chart = ({data}) => {
  return (
    <ResponsiveContainer width="99%" aspect={2 / 1} style={{ padding: "20px" }}>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="critical" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff2800" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ff2800" stopOpacity={0.3} />
          </linearGradient>
          <linearGradient id="major" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffae04" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ffae04" stopOpacity={0.3} />
          </linearGradient>
          <linearGradient id="minor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#d1d800" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#d1d800" stopOpacity={0.3} />
          </linearGradient>
          <linearGradient id="low" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#006a13" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#006a13" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="critical"
          stroke="#ff2800"
          fillOpacity={1}
          fill="url(#critical)"
        />
        <Area
          type="monotone"
          dataKey="major"
          stroke="#ffae04"
          fillOpacity={1}
          fill="url(#major)"
        />
        <Area
          type="monotone"
          dataKey="minor"
          stroke="#d1d800"
          fillOpacity={1}
          fill="url(#minor)"
        />
        <Area
          type="monotone"
          dataKey="low"
          stroke="#006a13"
          fillOpacity={1}
          fill="url(#low)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
