const orientationStyles = {
  vertical: `h-px w-full`,
  horizontal: `h-full w-px`,
};

//Base classes
const baseClasses = {
  hr: `border-0`,
};

function Line({
  orientation = "vertical",
  color = "bg-primary-300",
  className = "",
}) {
  return (
    <hr
      className={`
        ${baseClasses.hr}
        ${color}
        ${orientationStyles[orientation]}
        ${className}
      `}
    />
  );
}

export default Line;
