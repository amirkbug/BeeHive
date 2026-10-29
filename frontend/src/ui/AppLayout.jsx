import { Outlet } from "react-router-dom";
import Header from "./organs/Header";
import SideBar from "./organs/SideBar";

function AppLayout() {
  return (
    <main
      className="
        flex flex-row
        items-start justify-start
        w-dvw h-dvh
        gap-4
        px-10 py-4
      "
    >
      <SideBar />

      <section
        className="
          flex flex-col flex-1
          gap-2
          pb-4
        "
      >
        <Header />

        <Outlet />
      </section>
    </main>
  );
}

export default AppLayout;
