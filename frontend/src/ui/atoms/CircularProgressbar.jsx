import {
  CircularProgressbar as CircularProgress,
  buildStyles,
} from "react-circular-progressbar";

//Objects for diffrent variations
const tokens = {
  sm: {
    progressBarSize: { width: 32, height: 32 },
    strokeWidth: 7,
    textSize: "20px",
  },
  md: {
    progressBarSize: { width: 40, height: 40 },
    strokeWidth: 8,
    textSize: "22px",
  },
  lg: {
    progressBarSize: { width: 56, height: 56 },
    strokeWidth: 9,
    textSize: "22px",
  },
};

const types = {
  warning: {
    textColor: "var(--color-warning-500)",
    pathColor: "var(--color-warning-400)",
    trailColor: "var(--color-warning-200)",
  },
  destructive: {
    textColor: "var(--color-destructive-500)",
    pathColor: "var(--color-destructive-400)",
    trailColor: "var(--color-destructive-200)",
  },
  success: {
    textColor: "var(--color-success-500)",
    pathColor: "var(--color-success-400)",
    trailColor: "var(--color-success-200)",
  },
};

function CircularProgressbar({ token = "lg", type = "warning", value = 20.5 }) {
  //Error boundry
  const selectedType = types[type] ?? types.warning;
  const selectedToken = tokens[token] ?? tokens.lg;

  //Component itself
  return (
    <div style={selectedToken.progressBarSize}>
      <CircularProgress
        value={value}
        text={`${value}%`}
        strokeWidth={selectedToken.strokeWidth}
        styles={buildStyles({
          textColor: selectedType.textColor,
          pathColor: selectedType.pathColor,
          trailColor: selectedType.trailColor,
          textSize: selectedToken.textSize,
          fontFamily: "Outfit, sans-serif",
          strokeLinecap: "round",
          pathTransitionDuration: 0.6,
        })}
      />
    </div>
  );
}

export default CircularProgressbar;
