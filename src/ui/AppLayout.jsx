import { Outlet } from "react-router-dom";
import Header from "./organs/Header";
import SideBar from "./organs/SideBar";

function AppLayout() {
  return (
    <main className="flex h-dvh flex-row items-start justify-start gap-4 px-10 py-4">
      <SideBar />
      <section className="flex flex-col gap-2 pb-4">
        <Header />
        <Outlet />
      </section>
    </main>
  );
}

export default AppLayout;
