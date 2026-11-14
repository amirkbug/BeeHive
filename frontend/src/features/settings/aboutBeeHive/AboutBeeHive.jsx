import Content from "./Content";
import BeeHiveLogoButton from "./BeeHiveLogoButton";

import { useState } from "react";

const baseClasses = {
  commonClasses: `
    flex flex-col
    transition-all duration-500 ease-in-out
    gap-7
    `,
  section: `
    items-center justify-center
    w-full
    text-14px
    `,
};

function AboutUs() {
  const [showContent, setShowContent] = useState(false);

  function handleOpen() {
    setShowContent((prev) => !prev);
  }

  return (
    <section
      className={`
        ${baseClasses.commonClasses}
        ${baseClasses.section}
        ${showContent ? "h-full" : "h-0"}
      `}
    >
      <BeeHiveLogoButton onOpen={handleOpen} />
      <Content showContent={showContent} />
    </section>
  );
}

export default AboutUs;
