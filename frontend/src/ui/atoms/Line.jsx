const orientationStyles = {
  vertical: `h-px w-full`,
  horizontal: `h-full w-px`,
};
function Line({
  orientation = "vertical",
  color = "bg-primary-300",
  className = "",
}) {
  return (
    <hr
      className={`
        border-0
        ${color}
        ${orientationStyles[orientation]}
        ${className}
      `}
    />
  );
}

export default Line;
