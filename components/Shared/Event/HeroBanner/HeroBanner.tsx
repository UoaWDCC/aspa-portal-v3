import styles from "./HeroBanner.module.css";
import { Title, Image } from "@mantine/core";


export interface HeroBannerProps {
  title: string;
  backgroundUrl: string;
  backgroundType?: "image" | "video";
  animated?: boolean;
}

export function HeroBanner({ 
  title, 
  backgroundUrl, 
  backgroundType = "image", 
  animated = false
}: HeroBannerProps) {
  const isAnimated = animated ? styles.animated : "";

  return (
    <div className={styles.heroBannerContainer}>
      {backgroundType === "video" ? (
        <video
          className={styles.backgroundMedia}
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
          className={styles.backgroundMedia}
          height={0}
          width={0}
        />
      )}
      <Title className={styles.centeredTitle}>
        <span className={`${styles.shadowText} ${isAnimated}`}>{title}</span>
        <span className={`${styles.mainText} ${isAnimated}`}>{title}</span>
      </Title>
    </div>
  );
}