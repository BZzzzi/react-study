import { useState } from "react";

function useToggle(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);
  const toggle = () => setIsOn(!isOn);
  return [isOn, toggle];
}

export default useToggle;
