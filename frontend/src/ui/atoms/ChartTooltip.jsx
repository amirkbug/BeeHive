import { Tooltip } from "recharts";

function ChartTooltip({ backgroundColor = "#F8F8F4", labelColor = "#231F20" }) {
  return (
    <Tooltip
      contentStyle={{
        backgroundColor: backgroundColor,
        border: "1px solid currentColor",
        borderRadius: "8px",
      }}
      cursor={{
        fill: backgroundColor,
        fillOpacity: 0.15,
      }}
      labelStyle={{
        color: labelColor,
      }}
    />
  );
}

export default ChartTooltip;
