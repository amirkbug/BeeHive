import Charts from "../molecules/Charts";
import SearchIcon from "../molecules/SearchIcon";

const chartTypes = ["bar", "line", "pie", "donut", "scatter"];
const tokens = ["sm", "md", "lg"];
const types = ["primary", "secondary"];

function Header() {
  return (
    <header
      className="
        min-h-screen
        p-8
        text-secondary-500
        bg-primary-100
      "
    >
      <h1
        className="
          mb-2
          text-2xl font-semibold
        "
      >
        Chart Playground
      </h1>

      <p
        className="
          mb-8
          text-sm
        "
      >
        Testing all chart types, sizes, and themes.
      </p>
      <SearchIcon type="primary" />
      <SearchIcon type="secondary" />
    </header>
  );
}

export default Header;
