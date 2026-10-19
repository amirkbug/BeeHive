import { DollarIcon } from "@solar-icons/react/linear/dollar";

//Objects for diffrent variations
const tokens = {
  sm: {
    containerToken: "size-6",
    iconToken: "size-4",
  },
  md: {
    containerToken: "size-8",
    iconToken: "size-4.5",
  },
  lg: {
    containerToken: "size-10",
    iconToken: "size-5",
  },
};

const types = {
  success: "bg-success-200 text-success-500",
  destructive: "bg-destructive-200 text-destructive-500",
  warning: "bg-warning-200 text-warning-500",
};

//Base style
const base = "flex items-center justify-center rounded-md";

function KpiIcons({ type = "warning", token = "md", Icon = DollarIcon }) {
  //Error boundry
  const selectedType = types[type] ?? types.destructive;
  const selectedToken = tokens[token] ?? tokens.md;

  //Component itself
  return (
    <span className={`${selectedToken.containerToken} ${selectedType} ${base}`}>
      <Icon className={selectedToken.iconToken} />
    </span>
  );
}

export default KpiIcons;
