import Button from "../../../ui/molecules/Button";
import { NavLink } from "react-router-dom";

const baseClasses = {
  footer: `
    flex flex-row
    items-center justify-center
    w-full
    gap-2
    mb-2
  `,

  button: `
    size-7!
    rounded-full!
  `,

  navLink: `
   group
  `,
};

function KpiPagination() {
  return (
    <footer className={baseClasses.footer}>
      <NavLink className={baseClasses.navLink}>
        <Button className={baseClasses.button} token="sm" htmlType="button">
          1
        </Button>
      </NavLink>
      <NavLink className={baseClasses.navLink}>
        <Button className={baseClasses.button} token="sm" htmlType="button">
          2
        </Button>
      </NavLink>
      <NavLink className={baseClasses.navLink}>
        <Button className={baseClasses.button} token="sm" htmlType="button">
          3
        </Button>
      </NavLink>
    </footer>
  );
}

export default KpiPagination;
