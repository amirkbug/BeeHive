import { useState } from "react";

export function useGetElementDetails() {
  const [details, setDetails] = useState(null);

  function getDetails(element) {
    if (!element) {
      return null;
    }

    const rect = element.getBoundingClientRect();

    setDetails({
      top: Math.ceil(rect.bottom),
      left: Math.ceil(rect.left),
      width: Math.ceil(rect.width),
      height: Math.ceil(rect.height),
    });
  }

  return [details, getDetails];
}
