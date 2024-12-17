import styles from "./style.module.scss";
import {useState} from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.counter}>
      0
    </div>
  )
}