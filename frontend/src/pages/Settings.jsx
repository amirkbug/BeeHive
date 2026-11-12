import { Outlet } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext";
import NavigationButtons from "../features/settings/NavigationButtons";

const baseClasses = {
  div: `
  w-full h-full
  py-3
  pl-4
  `,

  section: `
  w-full h-full
  px-6 py-5
  rounded-lg
  `,

  main: `
  flex flex-row
  items-center justify-start
  w-full h-full
  gap-4
  p-2.5
  `,
};

function Settings() {
  const { type } = useThemeContext();

  return (
    <div className={baseClasses.div}>
      <section
        className={`
          ${type === "primary" ? "bg-primary-100" : "bg-secondary-500"}
          ${baseClasses.section}
        `}
      >
        <main className={baseClasses.main}>
          <NavigationButtons />
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default Settings;
