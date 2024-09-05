import { Container, Grid, Title, Text, Button, Group } from '@mantine/core';
import Image from "next/image";
import styles from './Banner.module.css';

interface BannerProps {
    title: string;
    description: string;
    buttonText: string;
    groupText: string;
    titleImageSrc: string;
    titleImageAlt: string;
}

export function Banner({
        title,
        description,
        buttonText,
        groupText,
        titleImageSrc,
        titleImageAlt
}: BannerProps) {
  return (
    <Container>
      <Grid gutter="xl">
        <Grid.Col span={6}>
          <Title order={1} className={styles.title}>
            {title}
          </Title>
          <Text>
            {description}
          </Text>
          <Group align="center" className={styles.group}>
            <Button className={styles.button}>
                {buttonText}
            </Button>
            <Text>{groupText}</Text> 
          </Group>
        </Grid.Col>
        <Grid.Col span={6} className={styles.imageContainer}>
          <Image src={titleImageSrc} alt={titleImageAlt} width={0} height={0} className={styles.image} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}