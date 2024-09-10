"use client";
import { Container, Grid, Title, Text, Button, Group } from '@mantine/core';
import Image from "next/image";
import styles from './Banner.module.css';

export interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
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
    buttonText,
    groupText,
    titleImageSrc,
    titleImageAlt,
    paddingTop = "",
    paddingBottom = "",
    paddingleft = "",
    paddingRight = ""
}: BannerProps) {

  return (
    <Container fluid pt={paddingTop} pb={paddingBottom} pl={paddingleft} pr={paddingRight}>
      <Grid gutter="xl">
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Title className={styles.title}>
          {title}
        </Title>
        <Text className={styles.text}>
          {description}
        </Text>
        <Group align="center">
          <Button className={styles.button}>
            {buttonText}
          </Button>
          <Text className={styles.group}>
            {groupText}
          </Text> 
        </Group>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6 }} className={styles.imageContainer}>
        <Image 
          src={titleImageSrc} 
          alt={titleImageAlt} 
          width={0} 
          height={0} 
          className={`${styles.image} ${styles.hoverUpDown}`}
        />
      </Grid.Col>
    </Grid>
  </Container>
  );
}