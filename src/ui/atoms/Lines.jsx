const orientationStyles = {
  vertical: `h-px w-full`,
  horizontal: `h-full w-px`,
};
function Lines({ orientation = "vertical", color = "bg-primary-300" }) {
  return (
    <hr className={`border-0 ${color} ${orientationStyles[orientation]}`} />
  );
}

export default Lines;
