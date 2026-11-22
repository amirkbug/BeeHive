import {
  Saturation,
  Hue,
  Alpha,
  rgbaStringToHsva,
  hsvaToRgbaString,
} from "@uiw/react-color";

const baseClasses = {
  article: `
    absolute
    top-full left-0
    z-50
    mt-8
    rounded-xl
    p-3
    shadow-lg
    transition-all
  `,

  mainAndSecondSectionlex: `
    flex
    gap-3
  `,

  section: `
    shrink-0
    w-fit
  `,

  saturation: `
    h-full!
  `,
};

function ColorPicker({ type, onColorChange, selectedColor, className = "" }) {
  const hsva = rgbaStringToHsva(selectedColor);
  function handleColorChange(newHsva) {
    const nextColor = {
      ...hsva,
      ...newHsva,
    };

    onColorChange(hsvaToRgbaString(nextColor));
  }

  return (
    <article
      className={`
        ${baseClasses.article}
        ${type === "primary" ? "bg-secondary-500" : "bg-primary-100"}
        ${className}
      `}
    >
      <main className={baseClasses.mainAndSecondSectionlex}>
        <section className={baseClasses.section}>
          <Saturation
            className={baseClasses.saturation}
            hsva={hsva}
            onChange={handleColorChange}
          />
        </section>

        <section className={baseClasses.mainAndSecondSectionlex}>
          <Hue
            hue={hsva.h}
            direction="vertical"
            width={14}
            height={100}
            onChange={(newHue) => handleColorChange({ h: newHue.h })}
          />

          <Alpha
            hsva={hsva}
            direction="vertical"
            width={14}
            height={100}
            onChange={handleColorChange}
          />
        </section>
      </main>
    </article>
  );
}

export default ColorPicker;
