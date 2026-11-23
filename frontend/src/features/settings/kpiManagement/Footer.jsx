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

function Footer() {
  return (
    <footer className={baseClasses.footer}>
      <Pagination />
    </footer>
  );
}

export default Footer;
