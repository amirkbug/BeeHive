import Button from "../../../ui/molecules/Button";
import IconDoutone from "../../../ui/atoms/IconDoutone";

import {
  CheckReadIcon,
  CloseCircleIcon,
} from "@solar-icons/react/line-duotone";

const baseClasses = {
  section: `
  flex flex-row justify-start
  w-full
  gap-2
  `,
};

function KpiFormButtons({ selectedTypeInverse, reset }) {
  function handleResetForm() {
    reset();
  }
  return (
    <section className={baseClasses.section}>
      <Button type={selectedTypeInverse} htmlType="submit">
        Save Changes
        <IconDoutone
          type={selectedTypeInverse}
          size={18}
          Icon={CheckReadIcon}
        />
      </Button>

      <Button
        onClick={handleResetForm}
        type={selectedTypeInverse}
        htmlType="button"
      >
        Cancel
        <IconDoutone
          type={selectedTypeInverse}
          size={18}
          Icon={CloseCircleIcon}
        />
      </Button>
    </section>
  );
}

export default KpiFormButtons;
