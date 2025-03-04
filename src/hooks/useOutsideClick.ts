import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement | null>(
  callback: (event: MouseEvent | TouchEvent) => void,
  eventType: "mousedown" | "mouseup" | "touchstart" = "mousedown"
) {
  const outsideRef = useRef<T | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        outsideRef.current &&
        !outsideRef.current.contains(event.target as Node)
      ) {
        callback(event);
      }
    }

    document.addEventListener(eventType, handleClickOutside);
    return () => {
      document.removeEventListener(eventType, handleClickOutside);
    };
  }, [outsideRef, eventType, callback]);

  return [outsideRef];
}
