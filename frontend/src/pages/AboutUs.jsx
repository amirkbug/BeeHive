import AboutUsBlock from "../features/aboutUs/AboutUsBlock";

import { useThemeContext } from "../contexts/ThemeContext";

const baseClasses = {
  div: `
  w-full h-full
  pt-5
  pb-3.25 pl-4
  `,

  main: `
  overflow-y-auto
  flex flex-col
  items-center justify-center
  w-full h-full
  gap-10
  px-5 py-8
  rounded-lg
  `,
};

function AboutUs() {
  const { type } = useThemeContext();
  return (
    <div className={baseClasses.div}>
      <main
        className={`
          ${baseClasses.main}
          ${type === "secondary" ? "bg-secondary-500" : "bg-primary-100"}
        `}
      >
        <AboutUsBlock type={type} picType="logo" title="About BeeHive 🐝">
          <strong>Analytics Made Simple</strong>
          <br />
          BeeHive transforms complex business data into clear, actionable
          insights through a clean and intuitive interface that&apos;s easy for
          everyone to use.
          <br />
          <br />
          <strong>Modern by Design</strong>
          <br />
          Built with React, Django, and a scalable API architecture, BeeHive
          delivers fast performance, reliable security, and room to grow with
          your business.
          <br />
          <br />
          <strong>Crafted with Care</strong>
          <br />
          Designed entirely in Figma, every screen follows a custom design
          system with refined typography, smooth animations, and carefully
          crafted interactions.
          <br />
          <br />
          <strong>Why BeeHive?</strong>
          <br />
          BeeHive combines powerful analytics with creativity and simplicity,
          making professional data analysis accessible without sacrificing
          performance or user experience.
        </AboutUsBlock>
        <AboutUsBlock
          type={type}
          picType="pic"
          title="About NONETOAST Studio 🍞"
        >
          <strong>Creativity Without Limits</strong>
          <br />
          NONETOAST Studio is a creative digital studio focused on building
          unique websites, applications, games, animations, and visual
          identities that stand out through originality and thoughtful design.
          <br />
          <br />
          <strong>Technology Meets Art</strong>
          <br />
          We combine modern technologies with creativity to develop digital
          products that are beautiful, functional, and built with attention to
          every detail.
          <br />
          <br />
          <strong>Built to Be Different</strong>
          <br />
          Every project is designed with its own identity. We believe
          originality, innovation, and quality are what turn great ideas into
          memorable digital experiences.
          <br />
          <br />
          <strong>Our Vision</strong>
          <br />
          Our mission is to create distinctive digital products that inspire,
          engage, and leave a lasting impression through creativity and modern
          technology.
        </AboutUsBlock>
      </main>
    </div>
  );
}

export default AboutUs;
