import { useCallback } from "react";

function useEnterKey(callback: () => void) {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        callback();
      }
    },
    [callback]
  );

  return { handleKeyDown };
}

export { useEnterKey };
