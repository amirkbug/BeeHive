import verticalLogo from "../../assets/NontoastLogo/verticalLogo.png";
import Logo from "../../ui/atoms/Logo";

const baseClasses = {
  baseDivClasses: `
    flex flex-col flex-1
    items-center justify-center
    h-full max-w-100
    p-2.5
    rounded-lg
    `,

  secondDiv: `
    pt-8 pr-8
    bg-secondary-400
  `,

  img: `
    object-contain object-center
    w-full h-full
  `,
};

function AboutUsPicPart({ picType = "logo", type }) {
  if (picType === "logo") {
    return (
      <div
        className={`
          ${baseClasses.baseDivClasses}
          ${type === "primary" ? "bg-secondary-500" : "bg-primary-100"}
        `}
      >
        <Logo
          type={type === "primary" ? "secondary" : "primary"}
          logoType="primary"
          token="xll"
        />
        <Logo
          type={type === "primary" ? "secondary" : "primary"}
          logoType="secondary"
          token="xll"
        />
      </div>
    );
  }
  return (
    <div
      className={`
        ${baseClasses.baseDivClasses}
        ${baseClasses.secondDiv}
      `}
    >
      <img
        className={baseClasses.img}
        src={verticalLogo}
        alt="NONETOAST Studio logo"
      />
    </div>
  );
}

export default AboutUsPicPart;
