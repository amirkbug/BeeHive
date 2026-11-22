import { useThemeContext } from "../../../contexts/ThemeContext";

const baseClasses = {
  header: `
    flex flex-col
    
  `,
  h1: `
    text-20px font-semibold
  `,
};

function Explanations({ title = "Customize Chart Colors", children }) {
  const { type } = useThemeContext();

  return (
    <header
      className={`
        ${baseClasses.header}
        ${type === "primary" ? "text-secondary-500" : "text-primary-100"}
      `}
    >
      <h1 className={baseClasses.h1}>{title}</h1>
      {children}
    </header>
  );
}

export default Explanations;
