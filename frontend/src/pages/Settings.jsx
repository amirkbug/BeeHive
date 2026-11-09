import { Outlet } from "react-router-dom";

function Settings() {
  return (
    <div
      className="
        w-full h-full
        py-3
        pl-4
      "
    >
      <section
        className="
          w-full h-full
          rounded-lg
          bg-primary-100
        "
      >
        <main
          className="
            flex flex-row
            items-center justify-start
            w-full h-full
            gap-4
            p-2.5
          "
        >
          <nav
            className="
              flex flex-col
              items-center justify-center
              h-full
              gap-8
              px-4
              pb-4
            "
          ></nav>
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default Settings;
