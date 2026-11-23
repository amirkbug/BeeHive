import IconDoutone from "../../ui/atoms/IconDoutone";
import ToggleButton from "../../ui/molecules/ToggleButton";

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
      <ToggleButton onClick={handleClick}>
        <p>{content.title}</p>
        <IconDoutone Icon={content.Icon} size={16} type={selectedTypeInverse} />
      </ToggleButton>
    </a>
  );
}

export default NavigationButton;
