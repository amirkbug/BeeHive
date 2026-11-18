import Logo from "../atoms/Logo";
import SideBarSettingsButton from "../molecules/SideBarSettingsButton";
import SideBarNavigationButtons from "../molecules/SideBarNavigationButtons";

//Base classes
const baseClasses = {
  aside: `
  flex flex-col
  items-center justify-center
  w-fit h-full
  gap-5
  px-5 pt-12
  pb-3
  `,

  div: `
  flex flex-col
  h-full
  gap-5
  group/sidebar
  `,

  logoDiv: `
  absolute
  top-5
  pointer-events-none
  `,
};

function SideBar() {
  return (
    <aside className={baseClasses.aside}>
      <div className={baseClasses.logoDiv}>
        <Logo logoType="primaryWithoutPolygone" token="xll" />
      </div>
      <div className={baseClasses.div}>
        <SideBarNavigationButtons />
        <SideBarSettingsButton />
      </div>
    </aside>
  );
}

export default SideBar;
