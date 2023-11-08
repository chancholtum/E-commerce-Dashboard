import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { mockLineData } from "../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

function LineChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveContainer height={200} width="100%">
      <AreaChart data={mockLineData}>
        <XAxis
          dataKey="label"
          tick={{ fill: colors.primary[200] }}
          tickLine={{ stroke: colors.primary[200] }}
        />
        <YAxis
          unit="$"
          tick={{ fill: colors.primary[200] }}
          tickLine={{ stroke: colors.primary[200] }}
        />
        <CartesianGrid strokeDasharray="4" />
        <Tooltip contentStyle={{ backgroundColor: colors.gray[700] }} />
        <Area
          dataKey="totalSales"
          type="monotone"
          stroke={colors.blueAccent[100]}
          fill={colors.blueAccent[300]}
          strokeWidth={2}
          name="Total sales"
          unit="$"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default LineChart;
