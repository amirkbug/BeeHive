const tokens = {
  sm: "",
  md: "",
  lg: "",
};

const types = {
  primary: "",
  secondary: "",
  outline: "",
  ghost: "",
};

function Buttons({ token = "md", type = "primary", children }) {
  return <button>{children}</button>;
}

export default Buttons;
