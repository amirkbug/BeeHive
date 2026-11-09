import { useEffect, useRef } from "react";

export function useOutsideClick(onCloseClick, listenCapturing = true) {
  const ref = useRef(null);
  const ulRef = useRef(null);

  useEffect(() => {
    ulRef.current = document.querySelectorAll("#dropDown");

    function handleClick(e) {
      const clickedInsideDropdown = Array.from(ulRef.current).some((ul) =>
        ul.contains(e.target),
      );

      if (!ref.current?.contains(e.target) && !clickedInsideDropdown) {
        onCloseClick();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [onCloseClick, listenCapturing]);

  return ref;
}
