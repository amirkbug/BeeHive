import { PieChart, Pie, Tooltip } from "recharts";

//Dumb data
const data = [
  { duration: "Expenses", value: 12, symbol: "$" },
  { duration: "Bank", value: 31, symbol: "$" },
  { duration: "Sunlight", value: 20, symbol: "pm" },
  { duration: "Social Media", value: 20 },
  { duration: "Referral", value: 10, symbol: "$" },
  { duration: "Email", value: 20 },
];

//Objects for diffrent variations
const types = {
  warning: "var(--color-warning-400)",
  destructive: "var(--color-destructive-400)",
  success: "var(--color-success-400)",
};

const tokens = {
  sm: {
    size: { width: "100%", height: 32 },
    innerRadius: 4,
    tooltip: {
      padding: "3px 5px",
      fontSize: "8px",
    },
  },
  md: {
    size: { width: "100%", height: 40 },
    innerRadius: 6,
    tooltip: {
      padding: "5px 8px",
      fontSize: "10px",
    },
  },
  lg: {
    size: { width: "100%", height: 56 },
    innerRadius: 10,
    tooltip: {
      padding: "8px 12px",
      fontSize: "12px",
    },
  },
};

function MiniChart({ token = "md", type = "warning" }) {
  //Error boundry
  const selectedToken = tokens[token] ?? tokens.md;
  const chartColor = types[type] ?? types.warning;

  //Component itself
  return (
    <PieChart responsive style={selectedToken.size}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="duration"
        fill={chartColor}
        stroke="var(--color-primary-100)"
        innerRadius={selectedToken.innerRadius}
      />

      <Tooltip
        formatter={(value, name, item) => [
          `${value}${item.payload.symbol ?? ""}`,
          name,
        ]}
        contentStyle={{
          fontFamily: "Outfit, sans-serif",
          backgroundColor: "var(--color-primary-100)",
          border: `1px solid ${chartColor}`,
          borderRadius: "5px",
          padding: selectedToken.tooltip.padding,
          boxShadow: "var(--shadow-200-BoxShadowM)",
        }}
        itemStyle={{
          color: "var(--color-secondary-500)",
          fontSize: selectedToken.tooltip.fontSize,
          fontWeight: 500,
          padding: 0,
        }}
        labelStyle={{
          fontFamily: "Outfit, sans-serif",
          fontSize: selectedToken.tooltip.fontSize,
        }}
        cursor={false}
        allowEscapeViewBox={{ x: false, y: true }}
      />
    </PieChart>
  );
}

export default MiniChart;
