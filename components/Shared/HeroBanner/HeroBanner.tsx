import styles from "./HeroBanner.module.css";
import { Image, Box } from "@mantine/core";

export interface HeroBannerProps {
  title: string;
  backgroundUrl: string;
  backgroundType?: "image" | "video";
  animated?: boolean;
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
  title,
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
          alt={`${title} background`}
          className={`${styles.backgroundMedia} ${mediaClassName || ""}`}
          w="100%"
          h="100%"
        />
      )}
    </Box>
  );
}
