import useToggle from "./useToggle.js";
import styles from "./Toggle.module.css";
import { useState } from "react";

function Toggle() {
  const [isOn, toggle] = useToggle(false);

  const className = `${styles.toggle} ${isOn ? styles.active : ""}`;
  const circleClassName = `${styles.circle} ${isOn ? styles.active : ""}`;

  return (
    <div className={className} onClick={toggle}>
      <div className={circleClassName}></div>
    </div>
  );
}

export default Toggle;
