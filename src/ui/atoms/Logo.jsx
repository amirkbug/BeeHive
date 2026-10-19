// Import all logo assets as URLs
const logos = import.meta.glob("../../assets/icons/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

// Shared styles
const base =
  "cursor-pointer transition-all object-contain hover:drop-shadow-200-BoxShadowM";

// Logo sizes
const sizes = {
  primary: {
    sm: "w-5.25 h-6",
    md: "w-6 h-7",
    lg: "w-7.5 h-8.75",
    xl: "w-12.25 h-14.25",
    xll: "w-19.25 h-22.5",
  },

  secondary: {
    sm: "w-6.5 h-5.25",
    md: "w-8.5 h-7",
    lg: "w-11 h-9",
    xl: "w-13 h-10",
    xll: "w-19.5 h-16",
  },

  primaryWithoutPolygone: {
    sm: "w-6.5 h-6",
    md: "w-7.5 h-7",
    lg: "w-9.5 h-8.75",
    xl: "w-15.5 h-14.25",
    xll: "w-24.5 h-22.5",
  },
};

// Logo file names
const logoTypes = {
  primary: "primaryLogo",
  secondary: "secondaryLogo",
};

const types = {
  primary: "primaryColor",
  secondary: "secondaryColor",
};

function Logo({ token = "md", type = "primary", logoType = "primary" }) {
  const isWithoutPolygone = logoType === "primaryWithoutPolygone";

  const fileName = isWithoutPolygone
    ? "primaryWithoutLogo-PrimaryColor.png"
    : `${logoTypes[logoType]}-${types[type]}.png`;

  const imgSrc = logos[`../../assets/icons/${fileName}`];
  const size = sizes[logoType][token];

  return <img src={imgSrc} alt="BeeHive logo" className={`${size} ${base}`} />;
}

export default Logo;
