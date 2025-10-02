"use client";
import { Container, Title, Text, Stack, Box } from "@mantine/core";
import Image from "next/image";
import { motion } from "motion/react";
import styles from "./Banner.module.css";

export interface BannerProps {
  title: string;
  subtitle: string;
  description: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingleft?: string;
  paddingRight?: string;
  imageHeight?: string;
}

export function InfiniteScrollASPA() {
  const text = "ASPA ASPA ASPA ASPA ASPA ASPA ASPA ASPA ASPA ASPA";

  return (
    <div className={styles.scrollerWrapper}>
      <motion.div
        className={styles.scroller}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        <Title className={styles.movingAspa}>{text}</Title>
        <Title className={styles.movingAspa} style={{ marginLeft: "-5%" }}>
          {text}
        </Title>
      </motion.div>
    </div>
  );
}

export function Banner({
  title,
  subtitle,
  description,
  paddingTop = "",
  paddingBottom = "",
  paddingleft = "",
  paddingRight = "",
  imageHeight = "25vw",
}: BannerProps) {
  return (
    <Container
      fluid
      pt={paddingTop}
      pb={paddingBottom}
      pl={paddingleft}
      pr={paddingRight}
    >
      <Stack align="center" gap="sm" justify="center">
        <Box className={styles.imageContainer} style={{ height: imageHeight }}>
          <Image
            alt="ASPA_2025_Logo_Transparent"
            src="/ASPA_2025_Logo_Transparent.svg"
            width={500}
            height={500}
            className={styles.image}
          />
        </Box>
        <Title className={styles.title}>{title}</Title>
        <InfiniteScrollASPA />
        <Text className={styles.subtitle}>{subtitle}</Text>
        <Text className={styles.text}>{description}</Text>
      </Stack>
    </Container>
  );
}
