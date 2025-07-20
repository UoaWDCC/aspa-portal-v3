"use client";
import {
  Container,
  Grid,
  Title,
  Text,
  Button,
  Group,
  Stack,
} from "@mantine/core";
import Image from "next/image";
import styles from "./Banner.module.css";

export interface BannerProps {
  title: string;
  description: string;
  secondaryDescription?: string;
  groupText: string;
  titleImageSrc: string;
  titleImageAlt: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingleft?: string;
  paddingRight?: string;
}

export function Banner({
  title,
  description,
  secondaryDescription = "",
  titleImageSrc,
  titleImageAlt,
  paddingTop = "",
  paddingBottom = "",
  paddingleft = "",
  paddingRight = "",
}: BannerProps) {
  return (
    <Container
      fluid
      pt={paddingTop}
      pb={paddingBottom}
      pl={paddingleft}
      pr={paddingRight}
    >
      <Grid gutter="6vw">
        <Grid.Col span={{ base: 12, md: 5.5}}>
          <Stack h="100%" justify="space-between" className={styles.IntroductionStyles}>
            <Title className={styles.title}>{title}</Title>
            <Text className={`${styles.text} ${styles.show}`} >{description}</Text>
            <Text className={`${styles.text} ${styles.show}`}><b>{secondaryDescription}</b></Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6.5}}>
          <Stack h="100%" align="center" gap="xl" justify="space-between">
            <Image
              src={titleImageSrc}
              alt={titleImageAlt}
              width={0}
              height={0}
              className={`${styles.image}`}
            />
            <Group w="100%" justify="space-between" className={styles.buttonGroup}>
              <Button className={styles.button}>LOGIN</Button>
              <Button className={styles.button}>REGISTER</Button>
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col className={`${styles.IntroductionStyles} ${styles.hidden}`}>
          <Text className={styles.text}>{description}</Text>
          <Text className={styles.text}><b>{secondaryDescription}</b></Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
