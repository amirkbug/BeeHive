import ToggleButton from "../../../ui/molecules/ToggleButton";

import { NavLink } from "react-router-dom";

const baseClasses = {
  section: `
    flex flex-row
    gap-2
    `,

  button: `
    size-7!
    rounded-full!
  `,

  navLink: `
   group
  `,
};

function Pagination() {
  return (
    <section className={baseClasses.section}>
      {[1, 2, 3].map((id) => (
        <NavLink
          key={id}
          to={`/app/settings/kpi-management/${id}`}
          className={baseClasses.navLink}
        >
          <ToggleButton className={baseClasses.button}>{id}</ToggleButton>
        </NavLink>
      ))}
    </section>
  );
}

export default Pagination;
