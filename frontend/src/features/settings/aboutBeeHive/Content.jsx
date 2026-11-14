import Paragraphs from "./Paragraphs";

const contentArray = [
  {
    title: "🐝 About BeeHive",
    content:
      "BeeHive is a modern analytics platform designed to help businesses collect, organize, and visualize data through interactive dashboards, customizable KPI cards, and insightful reports. Our goal is to make data easier to understand and more useful for informed decision-making.",
    tagName: "header",
    center: true,
  },
  {
    title: "🚀 Our Mission",
    content:
      "We believe that every business should have access to clear, reliable, and meaningful insights. BeeHive transforms complex datasets into simple visual experiences, helping teams focus on growth instead of spreadsheets.",
    tagName: "article",
    center: false,
  },
  {
    title: "📊 What You Can Do",
    content:
      "With BeeHive, you can connect your data sources, build custom KPI cards, explore interactive charts, monitor performance over time, and personalize your dashboard to match your workflow.",
    tagName: "article",
    center: false,
  },
  {
    title: "🔒 Privacy & Security",
    content:
      "With BeeHive, you can connect your data sources, build custom KPI cards, explore interactive charts, monitor performance over time, and personalize your dashboard to match your workflow.",
    tagName: "article",
    center: false,
  },
  {
    title: "© Copyright",
    content:
      "BeeHive, its interface, visual design, branding, and all related assets are protected by copyright laws. Unauthorized copying, reproduction, distribution, or commercial use of any part of the application is strictly prohibited without prior written permission.",
    tagName: "article",
    center: false,
  },
  {
    title: "",
    content: "NONETOAST made this banger 🍞",
    tagName: "footer",
    center: true,
  },
];

const baseClasses = {
  commonClasses: `
    flex flex-col
    transition-all duration-500 ease-in-out
    gap-7
    `,
  div: `
    overflow-hidden
    justify-between
    w-full h-full
    `,
};

function Content({ showContent }) {
  return (
    <div
      className={`
        ${baseClasses.commonClasses}
        ${baseClasses.div}
        ${showContent ? "h-0 opacity-100" : "h-full opacity-0"}
      `}
    >
      {contentArray.map((content) => (
        <Paragraphs
          key={content.title}
          title={content.title}
          tagName={content.tagName}
          content={content.content}
          center={content.center}
        />
      ))}
    </div>
  );
}

export default Content;
