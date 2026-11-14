import ColorInput from "../../../ui/organs/ColorInput";

const baseClasses = {
  div: `
    flex flex-row
    items-start justify-start
    w-full
    gap-4
    `,
};

const tempContents = [
  {
    title: "Success",
    subTitle: "Color for success.",
    token: "lg",
    color: "#55C271",
  },
  {
    title: "Warning",
    subTitle: "C,olor for warnings.",
    token: "lg",
    color: "#7D5E0F",
  },
  {
    title: "Destructure",
    subTitle: "Color for errors.",
    token: "lg",
    color: "#E75F5F",
  },
];

function KpiColorInputs({ contents = tempContents }) {
  return (
    <div className={baseClasses.div}>
      {contents.map((content) => (
        <ColorInput
          key={content.title}
          title={content.title}
          subTitle={content.subTitle}
          token={content.token}
          color={content.color}
          inputPlaceholderText={content.color}
        />
      ))}
    </div>
  );
}

export default KpiColorInputs;
