import KpiIcon from "../atoms/KpiIcon";
import CircularProgressbar from "../atoms/CircularProgressbar";

import { Chart2Icon, ChartSquare2Icon } from "@solar-icons/react/line-duotone";

//Object for diffrent variations
const types = {
  primary: "text-primary-100 bg-secondary-500",
  secondary: "text-secondary-500 bg-primary-100",
};

const tokens = {
  sm: {
    containerClasses: "px-4 py-3 gap-2",
    txtClasses: {
      number: "text-24px",
      title: "text-14px",
      subtxt: "text-[10px]",
    },
    iconSize: 16,
  },
  md: {
    containerClasses: "p-4 gap-2",
    txtClasses: {
      number: "text-32px",
      title: "text-16px",
      subtxt: "text-12px",
    },
    iconSize: 20,
  },
  lg: {
    containerClasses: "px-4 py-6.5",
    txtClasses: {
      number: "text-40px",
      title: "text-20px",
      subtxt: "text-14px",
    },
    iconSize: 24,
  },
};

//Base classes
const articleBase = `
    flex flex-col
    items-start justify-between
    rounded-lg 
    min-w-82
    transition-shadow
    hover:shadow-400-BoxShadowM
`;

function Kpi({
  type = "secondary",
  kpiType = "warning",
  token = "md",
  title = "Title",
  number = "+923772",
  subtxt = "Subtext",
  SubTxtIcon = ChartSquare2Icon,
  KpiIconName = Chart2Icon,
  chartValue = 20,
}) {
  //Error boundry
  const selectedType = types[type] ?? types.primary;
  const selectedToken = tokens[token] ?? tokens.sm;

  //Component itself
  return (
    <article
      className={`
        ${articleBase}
        ${selectedToken.containerClasses}
        ${selectedType}
      `}
    >
      <KpiIcon type={kpiType} token={token} Icon={KpiIconName} />
      <h2
        className={`
          font-semibold
          ${selectedToken.txtClasses.title}
        `}
      >
        {title}
      </h2>
      <div
        className={`
          flex flex-row
          items-center justify-between
          w-full
          font-bold
          ${selectedToken.txtClasses.number}
        `}
      >
        <h1>{number}</h1>
        <CircularProgressbar value={chartValue} token={token} type={kpiType} />
      </div>
      <p
        className={`
          font-medium
          ${selectedToken.txtClasses.subtxt}
        `}
      >
        {subtxt}
      </p>
      {SubTxtIcon && <SubTxtIcon size={selectedToken.iconSize} />}
    </article>
  );
}

export default Kpi;
