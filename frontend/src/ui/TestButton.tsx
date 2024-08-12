import { MouseEventHandler } from "react";
import styles from "./TestButton.module.css";

export default function TestButton({ handleClick }: {handleClick: MouseEventHandler<HTMLButtonElement>;}) {
  return (
      <div className={styles.button}>
          <button onClick={handleClick}>Toggle Modal</button>
      </div>
  );
}