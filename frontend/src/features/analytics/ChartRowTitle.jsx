import IconDoutone from "../../ui/atoms/IconDoutone";
import Button from "../../ui/molecules/Button";

const baseClasses = {
  secondDiv: `
    w-full
    pl-4
    pr-10
    `,

  button: `
    justify-start
    w-full
    `,
};

function ChartRowTitle({ selectedTypeInverse, Icon, time }) {
  return (
    <div className={baseClasses.secondDiv}>
      <Button
        className={baseClasses.button}
        token="sm"
        type={selectedTypeInverse}
        disabled
      >
        <IconDoutone type={selectedTypeInverse} size={16} Icon={Icon} /> {time}
      </Button>
    </div>
  );
}

export default ChartRowTitle;
