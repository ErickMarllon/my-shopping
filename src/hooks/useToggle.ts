import { useState } from "react";

function useToggle(initialState: boolean = false) {
  const [state, setState] = useState(initialState);

  function toggle() {
    setState(!state);
  }

  return [state, toggle] as const;
}

export { useToggle };
