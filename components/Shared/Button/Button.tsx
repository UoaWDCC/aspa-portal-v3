import styles from "./Button.module.css";
import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from "@mantine/core";

type ButtonSize = "h1" | "h2" | "h3" | "h4" | "h5";

interface ButtonProps extends MantineButtonProps {
  outlined?: boolean;
  variant?: ButtonSize;
  children: React.ReactNode;
}

export function Button({
  outlined = false,
  variant = "h4",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const outlineClass = outlined ? styles.outlined : "";
  const sizeClass = styles[variant];
  return (
    <MantineButton
      type="button"
      className={`${styles.button} ${sizeClass} ${outlineClass} ${className}`}
      {...props}
    >
      {children}
    </MantineButton>
  );
}