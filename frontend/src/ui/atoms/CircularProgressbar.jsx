import useCustomColor from "../../hooks/useCustomColor";

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

function CircularProgressbar({ token = "lg", type = "warning", value = 20.5 }) {
  //Error boundry
  const selectedToken = tokens[token] ?? tokens.lg;
  const { primaryCustomColor, secondaryCustomColor } = useCustomColor(type);

  //Component itself
  return (
    <div style={selectedToken.progressBarSize}>
      <CircularProgress
        value={value}
        text={`${value}%`}
        strokeWidth={selectedToken.strokeWidth}
        styles={buildStyles({
          textColor: primaryCustomColor,
          pathColor: primaryCustomColor,
          trailColor: secondaryCustomColor,
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
