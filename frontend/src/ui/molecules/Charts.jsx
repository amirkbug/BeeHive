import ChartTooltip from "../atoms/ChartTooltip";

import {
  Bar,
  BarChart,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
} from "recharts";
import { compactFormatter } from "../../utils/helpers";

// Dumb data
const data = [
  { month: "Jan", revenue: 4200, profit: 1100 },
  { month: "Feb", revenue: 5800, profit: 1500 },
  { month: "Mar", revenue: 7200, profit: 2400 },
  { month: "Apr", revenue: 6100, profit: 1800 },
  { month: "May", revenue: 8900, profit: 3100 },
  { month: "Jun", revenue: 7400, profit: 2600 },
];

const pieData = [
  { month: "Jan", profit: 1100 },
  { month: "Feb", profit: 1500 },
  { month: "Mar", profit: 2400 },
  { month: "Apr", profit: 1800 },
  { month: "May", profit: 3100 },
  { month: "Jun", profit: 2600 },
];

const scatterData = [
  { month: "Jan", x: 1, revenue: 4200, profit: 1100 },
  { month: "Feb", x: 2, revenue: 5800, profit: 1500 },
  { month: "Mar", x: 3, revenue: 7200, profit: 2400 },
  { month: "Apr", x: 4, revenue: 6100, profit: 1800 },
  { month: "May", x: 5, revenue: 8900, profit: 3100 },
  { month: "Jun", x: 6, revenue: 7400, profit: 2600 },
];

// Objects for different variations
const tokens = {
  sm: {
    containerPadding: "p-6",
    barAndLineAndScatterChartSize: { width: 731, height: 206 },
    pieAndDonutChartSize: { width: 196, height: 176 },
    donutChartRadius: 42,
  },
  md: {
    containerPadding: "px-6 py-8",
    barAndLineAndScatterChartSize: { width: 715, height: 256 },
    pieAndDonutChartSize: { width: 285, height: 246.5 },
    donutChartRadius: 59,
  },
  lg: {
    containerPadding: "p-12",
    barAndLineAndScatterChartSize: { width: 683, height: 324 },
    pieAndDonutChartSize: { width: 345, height: 319 },
    donutChartRadius: 78,
  },
};

const types = {
  primary: {
    containerClasses: "text-primary-100-alpha-60 bg-secondary-500",
    tooltip: {
      labelBackground: "var(--color-primary-100)",
      txtColor: "var(--color-secondary-500)",
    },
    txtColor: {
      firstBarAndGrid: "var(--color-primary-100)",
      secondBar: "var(--color-primary-100-alpha-60)",
    },
    chartColors: {
      primaryColor: "var(--color-accent-100)",
      secondaryColor: "var(--color-accent-100-alpha-60)",
    },
  },
  secondary: {
    containerClasses: "text-primary-100-alpha-60 bg-primary-100",
    tooltip: {
      labelBackground: "var(--color-secondary-500)",
      txtColor: "var(--color-primary-100)",
    },
    txtColor: {
      firstBarAndGrid: "var(--color-secondary-500)",
      secondBar: "var(--color-secondary-500-alpha-60)",
    },
    chartColors: {
      primaryColor: "var(--color-accent-100)",
      secondaryColor: "var(--color-accent-100-alpha-60)",
    },
  },
};

const chartTypes = ["bar", "line", "pie", "donut", "scatter"];

const paddingBaseOnChartType = {
  sm: "pr-8 pb-2 pt-6",
  md: "pr-8 pt-8 pb-5",
  lg: "pt-12 pb-8 pr-10",
};

// Base classes
const articleBase = `
  items-center justify-center
  max-w-3xl
  rounded-lg
  w-fit h-fit
  shrink-0
  transition-all
  hover:shadow-400-BoxShadowM
`;

function Charts({ chartType = "pie", token = "sm", type = "secondary" }) {
  // Error boundary / fallback values
  const selectedType = types[type] ?? types.primary;
  const selectedToken = tokens[token] ?? tokens.md;
  const selectedChartType = chartTypes.includes(chartType) ? chartType : "bar";
  const selectedPaddingBaseOnChartType =
    paddingBaseOnChartType[token] ?? paddingBaseOnChartType.sm;

  //Component itself
  return (
    <article
      className={`
        ${articleBase}
        ${selectedType.containerClasses}
        ${selectedChartType === "pie" || selectedChartType === "donut" ? "" : `${selectedPaddingBaseOnChartType} pl-0`}
        ${selectedToken.containerPadding}
      `}
    >
      {selectedChartType === "scatter" && (
        <ScatterChart
          responsive
          style={{
            width: selectedToken.barAndLineAndScatterChartSize.width,
            height: selectedToken.barAndLineAndScatterChartSize.height,
            maxWidth: "100%",
          }}
        >
          <CartesianGrid
            stroke={selectedType.txtColor.firstBarAndGrid}
            strokeOpacity={0.25}
            strokeDasharray="4 4"
          />

          <XAxis
            type="number"
            dataKey="x"
            domain={[1, 6]}
            ticks={[1, 2, 3, 4, 5, 6]}
            tickFormatter={(value) => scatterData[value - 1]?.month ?? ""}
            tick={{ fill: selectedType.txtColor.secondBar, fontSize: 12 }}
            axisLine={{ stroke: selectedType.txtColor.firstBarAndGrid }}
          />

          <YAxis
            type="number"
            tick={{ fill: selectedType.txtColor.secondBar, fontSize: 12 }}
            axisLine={false}
            tickFormatter={(value) => compactFormatter(value)}
          />

          <ChartTooltip
            labelColor={selectedType.tooltip.txtColor}
            backgroundColor={selectedType.tooltip.labelBackground}
          />

          <Scatter
            name="Revenue"
            data={scatterData}
            dataKey="revenue"
            fill={selectedType.chartColors.primaryColor}
          />

          <Scatter
            name="Profit"
            data={scatterData}
            dataKey="profit"
            fill={selectedType.chartColors.secondaryColor}
          />
        </ScatterChart>
      )}
      {selectedChartType === "line" && (
        <LineChart
          responsive
          data={data}
          style={{
            width: selectedToken.barAndLineAndScatterChartSize.width,
            height: selectedToken.barAndLineAndScatterChartSize.height,
            maxWidth: "100%",
          }}
        >
          <CartesianGrid
            stroke={selectedType.txtColor.firstBarAndGrid}
            strokeOpacity={0.25}
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="month"
            tick={{ fill: selectedType.txtColor.secondBar, fontSize: 12 }}
            axisLine={{ stroke: selectedType.txtColor.firstBarAndGrid }}
          />

          <YAxis
            tick={{ fill: selectedType.txtColor.secondBar, fontSize: 12 }}
            axisLine={false}
            tickFormatter={(value) => compactFormatter(value)}
          />

          <ChartTooltip
            labelColor={selectedType.tooltip.txtColor}
            backgroundColor={selectedType.tooltip.labelBackground}
          />

          <Line
            type="linear"
            dataKey="revenue"
            name="Revenue"
            stroke={selectedType.chartColors.primaryColor}
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />

          <Line
            type="linear"
            dataKey="profit"
            name="Profit"
            stroke={selectedType.chartColors.secondaryColor}
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      )}
      {selectedChartType === "donut" && (
        <PieChart responsive style={selectedToken.pieAndDonutChartSize}>
          <Pie
            activeShape={{
              fill: selectedType.chartColors.secondaryColor,
            }}
            paddingAngle={0.5}
            innerRadius={selectedToken.donutChartRadius}
            data={pieData}
            dataKey="profit"
            nameKey="month"
            fill={selectedType.chartColors.primaryColor}
            stroke={selectedType.txtColor.firstBarAndGrid}
          />

          <ChartTooltip
            labelColor={selectedType.tooltip.txtColor}
            backgroundColor={selectedType.tooltip.labelBackground}
          />
        </PieChart>
      )}
      {selectedChartType === "pie" && (
        <PieChart responsive style={selectedToken.pieAndDonutChartSize}>
          <Pie
            activeShape={{
              fill: selectedType.chartColors.secondaryColor,
            }}
            paddingAngle={0.5}
            cornerRadius={3}
            data={pieData}
            dataKey="profit"
            nameKey="month"
            fill={selectedType.chartColors.primaryColor}
            stroke={selectedType.txtColor.firstBarAndGrid}
          />

          <ChartTooltip
            labelColor={selectedType.tooltip.txtColor}
            backgroundColor={selectedType.tooltip.labelBackground}
          />
        </PieChart>
      )}
      {selectedChartType === "bar" && (
        <BarChart
          style={selectedToken.barAndLineAndScatterChartSize}
          responsive
          data={data}
        >
          <CartesianGrid
            stroke={selectedType.txtColor.firstBarAndGrid}
            strokeOpacity={0.25}
            strokeDasharray="4 4"
          />

          <ChartTooltip
            labelColor={selectedType.tooltip.txtColor}
            backgroundColor={selectedType.tooltip.labelBackground}
          />

          <XAxis
            tick={{
              fill: selectedType.txtColor.secondBar,
              fontSize: 12,
            }}
            dataKey="month"
          />

          <YAxis
            tick={{
              fill: selectedType.txtColor.secondBar,
              fontSize: 12,
            }}
            tickFormatter={(label) => compactFormatter(label)}
            label={{
              position: "insideTopLeft",
              angle: -90,
              dy: 60,
            }}
          />

          <Bar
            radius={[4, 4, 0, 0]}
            fill={selectedType.chartColors.primaryColor}
            dataKey="revenue"
          >
            <LabelList
              fill={selectedType.txtColor.firstBarAndGrid}
              dataKey="revenue"
              position="top"
              formatter={(label) => compactFormatter(Number(label))}
              fontSize={11}
            />
          </Bar>

          <Bar
            radius={[2, 2, 0, 0]}
            fill={selectedType.chartColors.secondaryColor}
            dataKey="profit"
          >
            <LabelList
              dataKey="profit"
              position="top"
              formatter={(label) => compactFormatter(Number(label))}
              fontSize={11}
              fill={selectedType.txtColor.secondBar}
            />
          </Bar>
        </BarChart>
      )}
    </article>
  );
}

export default Charts;
