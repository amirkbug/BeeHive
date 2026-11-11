import Logo from "../atoms/Logo";
import SideBarSettingsButton from "../molecules/SideBarSettingsButton";
import SideBarNavigationButtons from "../molecules/SideBarNavigationButtons";

import { Link } from "react-router-dom";

//Base classes
const baseClasses = {
  aside: `
  flex flex-col
  items-center justify-center
  w-fit h-full
  gap-5
  px-2 pt-12
  pb-3
  `,

  div: `
  flex flex-col
  h-full
  gap-5
  group/sidebar
  `,

  firstLink: `
  absolute
  top-5
  `,
};

function SideBar() {
  return (
    <aside className={baseClasses.aside}>
      <Link to="/app/aboutus" className={baseClasses.firstLink}>
        <Logo logoType="primaryWithoutPolygone" token="xll" />
      </Link>
      <div className={baseClasses.div}>
        <SideBarNavigationButtons />
        <SideBarSettingsButton />
      </div>
    </aside>
  );
}

export default SideBar;
