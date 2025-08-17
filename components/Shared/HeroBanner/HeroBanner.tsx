import styles from "./HeroBanner.module.css";
import { Image, Box } from "@mantine/core";
import { HeaderTitle, AnimatedTitleProps } from "../HeaderTitle/HeaderTitle";

export interface HeroBannerProps {
  headerTitleProps: AnimatedTitleProps;
  backgroundUrl: string;
  backgroundType?: "image" | "video";
  mediaClassName?: string;
  // Mantine sizing props
  w?: string | number;
  h?: string | number;
  maw?: string | number; // max-width
  mah?: string | number; // max-height
  miw?: string | number; // min-width
  mih?: string | number; // min-height
}

export function HeroBanner({
  headerTitleProps,
  backgroundUrl,
  backgroundType = "image",
  mediaClassName,
  w = "100%",
  h = "34vw",
  maw,
  mah,
  miw,
  mih,
}: HeroBannerProps) {
  return (
    <Box
      className={styles.heroBannerContainer}
      w={w}
      h={h}
      maw={maw}
      mah={mah}
      miw={miw}
      mih={mih}
    >
      <div className={styles.centeredTitle}>
        <HeaderTitle {...headerTitleProps} />
      </div>
      {backgroundType === "video" ? (
        <video
          className={`${styles.backgroundMedia} ${mediaClassName || ""}`}
          src={backgroundUrl}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <Image
          src={backgroundUrl}
          alt={`${headerTitleProps.text} background`}
          className={`${styles.backgroundMedia} ${mediaClassName || ""}`}
          w="100%"
          h="100%"
        />
      )}
    </Box>
  );
}