import Kpis from "../features/dashboard/Kpis";
import NavigationButtons from "../features/dashboard/NavigationButtons";
import ChartsContainer from "../features/dashboard/ChartsContainer";

const baseClasses = {
  div: `
  flex flex-col
  w-full h-full
  `,
};

function Dashboard() {
  return (
    <div className={baseClasses.div}>
      <Kpis />
      <NavigationButtons />
      <ChartsContainer />
    </div>
  );
}

export default Dashboard;
