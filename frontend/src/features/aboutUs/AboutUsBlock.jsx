import Line from "../../ui/atoms/Line";
import AboutUsPicPart from "./AboutUsPicPart";

const baseClasses = {
  section: `
    flex flex-row
    items-center justify-center
    w-full h-full
    gap-5
    px-3
    `,

  div: `
    flex flex-col flex-2
    items-start justify-center
    gap-1
    `,

  header: `
    w-full
    text-20px font-semibold
    `,

  p: `
    text-14px text-justify
    `,
};

function AboutUsBlock({
  title = "About NONETOAST Studio 🍞",
  children,
  picType = "logo",
  type = "primary",
}) {
  return (
    <section className={baseClasses.section}>
      {picType === "logo" && <AboutUsPicPart type={type} picType="logo" />}
      <div
        className={`
          ${baseClasses.div}
          ${type === "secondary" ? "text-primary-100" : "text-secondary-500"}
        `}
      >
        <header className={baseClasses.header}>
          {title}
          <Line orientation="vertical" />
        </header>

        <p className={baseClasses.p}>{children}</p>
      </div>
      {picType === "pic" && <AboutUsPicPart type={type} picType="pic" />}
    </section>
  );
}

export default AboutUsBlock;
