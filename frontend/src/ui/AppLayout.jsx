import { Outlet } from "react-router-dom";
import Header from "./organs/Header";
import SideBar from "./organs/SideBar";

//Base classes
const baseClasses = {
  main: `
  flex flex-row
  items-start justify-end
  w-dvw h-dvh
  px-10 py-4
  `,

  section: `
  flex flex-col flex-1
  items-end justify-between
  h-full
  min-w-0
  `,

  div: `
  w-full 
  pl-4
  `,
};

function AppLayout() {
  return (
    <main className={baseClasses.main}>
      <SideBar />
      <section className={baseClasses.section}>
        <div className={baseClasses.div}>
          <Header />
        </div>
        <Outlet />
      </section>
    </main>
  );
}

export default AppLayout;
