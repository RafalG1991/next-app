'use client';
import styles from "./style.module.scss";
import {useState} from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prev => prev+1);
  }

  return (
    <div className={styles.counter}>
      {counter}
      <button onClick={increment}>+1</button>
    </div>
  )
}