import KpiFormButtons from "./FormButtons";
import Pagination from "./Pagination";

const baseClasses = {
  footer: `
    flex flex-row
    items-center justify-center
    w-full
    gap-2
    mt-5
  `,
};

function Footer({ reset, selectedTypeInverse }) {
  return (
    <footer className={baseClasses.footer}>
      <KpiFormButtons reset={reset} selectedTypeInverse={selectedTypeInverse} />
      <Pagination />
    </footer>
  );
}

export default Footer;
