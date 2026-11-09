import { useState } from "react";

export function useGetElementPosition() {
  const [position, setPosition] = useState(null);

  function getPosition(element) {
    if (!element) {
      return null;
    }

    const rect = element.getBoundingClientRect();

    setPosition({
      top: Math.ceil(rect.bottom),
      left: Math.ceil(rect.left),
      width: Math.ceil(rect.width),
      height: Math.ceil(rect.height),
    });
  }

  return [position, getPosition];
}
