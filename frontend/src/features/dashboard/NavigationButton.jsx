import Button from "../../ui/molecules/Button";
import IconDoutone from "../../ui/atoms/IconDoutone";

import { useSearchParams } from "react-router-dom";

function NavigationButton({ selectedTypeInverse, content }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const isActive = searchParams.get("period") === content.to;

  function handleClick() {
    setSearchParams({ period: content.to });
  }

  return (
    <a
      className={`
        group
        ${isActive ? "active" : ""}
      `}
    >
      <Button token="sm" type={selectedTypeInverse} onClick={handleClick}>
        {content.title}

        <IconDoutone Icon={content.Icon} size={16} type={selectedTypeInverse} />
      </Button>
    </a>
  );
}

export default NavigationButton;
