import { useEffect, useRef } from "react";

// Detect clicks outside a specific element and execute a callback.
export function useOutsideClick(onCloseClick, listenCapturing = true) {
  // Store a reference to the element we want to detect outside clicks for.
  const ref = useRef();

  // Attach an event listener to the document to detect clicks outside the referenced element.
  useEffect(
    function () {
      function handleClick(e) {
        // Execute the callback only if the click happened outside the referenced element.
        if (ref.current && !ref.current.contains(e.target)) {
          onCloseClick();
        }
      }

      // Use capturing phase to detect clicks before they reach their target.
      document.addEventListener("click", handleClick, listenCapturing);

      // Remove the event listener when the component unmounts or dependencies change.
      return () => document.removeEventListener("click", handleClick, true);
    },
    [onCloseClick, listenCapturing],
  );

  return ref;
}
