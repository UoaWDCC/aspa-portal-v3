import styles from "./Button.module.css";
import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from "@mantine/core";

type ButtonColor = "grey" | "orange" | "blue";

interface ButtonProps extends MantineButtonProps {
  color?: ButtonColor;
  outlined?: boolean;
  children: React.ReactNode;
}

export function Button({
  color = "grey",
  outlined = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const colorClass = styles[color];
  const outlineClass = outlined ? styles.outlined : "";
  return (
    <MantineButton
      type="button"
      className={`${styles.button} ${colorClass} ${outlineClass} ${className}`}
      {...props}
    >
      {children}
    </MantineButton>
  );
}
