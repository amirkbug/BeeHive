import Kpis from "../features/dashboard/Kpis";
import NavigationButtons from "../features/dashboard/NavigationButtons";
import ChartsContainer from "../features/dashboard/ChartsContainer";

function Dashboard() {
  return (
    <>
      <Kpis />
      <NavigationButtons />
      <ChartsContainer />
    </>
  );
}

export default Dashboard;
