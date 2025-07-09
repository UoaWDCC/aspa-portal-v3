import React from "react";
import styles from "./Button.module.css";

type ButtonVariant = "grey" | "lightgrey" | "darkgrey" | "grey-border" | "lightgrey-border" | "darkgrey-border";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({variant = "grey", children, className = "", ...props}) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};