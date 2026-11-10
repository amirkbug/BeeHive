import { Outlet } from "react-router-dom";
import Header from "./organs/Header";
import SideBar from "./organs/SideBar";

function AppLayout() {
  return (
    <main
      className="
        flex flex-row
        items-start justify-end
        w-dvw h-dvh
        px-10 py-4
      "
    >
      <SideBar />

      <section
        className="
          flex flex-col flex-1
          items-end justify-between
          h-full
          min-w-0
        "
      >
        <div
          className="
            w-full
            pl-4
          "
        >
          <Header />
        </div>
        <Outlet />
      </section>
    </main>
  );
}

export default AppLayout;
