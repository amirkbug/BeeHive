import { useThemeContext } from "../../../contexts/ThemeContext";
import Line from "../../../ui/atoms/Line";

//Base classes
const baseClasses = {
  tag: `
    flex flex-col
    gap-2
    `,
};

//Component itself
function Paragraphs({
  tagName = "article",
  title = "🐝 About BeeHive",
  content = "BeeHive is a modern analytics platform designed to help businesses collect, organize, and visualize data through interactive dashboards, customizable KPI cards, and insightful reports. Our goal is to make data easier to understand and more useful for informed decision-making.",
  center = false,
}) {
  const { type } = useThemeContext();
  const Tag = tagName;

  const position = center
    ? "items-center justify-center text-center"
    : "items-start justify-start text-justify";

  return (
    <Tag
      className={`
        ${baseClasses.tag}
        ${position}
        ${type === "secondary" ? "text-primary-100" : "text-secondary-500"}
      `}
    >
      <h3>{title}</h3>
      <Line
        color={type === "secondary" ? "bg-primary-300" : "bg-secondary-300"}
      />
      <p>{content}</p>
    </Tag>
  );
}

export default Paragraphs;
