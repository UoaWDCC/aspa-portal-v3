import React from "react";
import styles from "./Button.module.css";

type ButtonColor = "grey" | "orange";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  outlined?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({color = "grey", outlined = false, children, className = "", ...props}) => {
  const colorClass = styles[color];
  const outlineClass = outlined ? styles.outlined : "";
  return (
    <button
      type="button"
      className={`${styles.button} ${colorClass} ${outlineClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};