"use client";
import { Grid, Container, Paper, Title } from "@mantine/core";
import { ExecutiveCard, Executive } from "../Card/ExecutiveCardDisplay";
import styles from "./ExecutiveCollection.module.css";

export interface ExecutiveCollection {
  executives: Executive[];
  badgeColor?: string;
  gutter?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  shadow?: "xs" | "sm" | "md" | "lg" | "xl";
  withBorder?: boolean;
  outerPaddingTop?: string;
  outerPaddingBottom?: string;
  outerPaddingLeft?: string;
  outerPaddingRight?: string;
  innerPaddingTop?: string;
  innerPaddingBottom?: string;
  innerPaddingLeft?: string;
  innerPaddingRight?: string;
}

export function ExecutiveCollection({
  executives,
  badgeColor = "#d78840",
  gutter = "lg",
  radius = "xl",
  shadow = "sm",
  withBorder = true,
  outerPaddingTop = "",
  outerPaddingBottom = "",
  outerPaddingLeft = "",
  outerPaddingRight = "",
  innerPaddingTop = "",
  innerPaddingBottom = "",
  innerPaddingLeft = "",
  innerPaddingRight = "",
}: ExecutiveCollection) {
  return (
    <Container
      pt={outerPaddingTop}
      pb={outerPaddingBottom}
      pl={outerPaddingLeft}
      pr={outerPaddingRight}
    >
      <Paper
        shadow={shadow}
        radius={radius}
        withBorder={withBorder}
        className={styles.collection}
      >
        <Container
          pt={innerPaddingTop}
          pb={innerPaddingBottom}
          pl={innerPaddingLeft}
          pr={innerPaddingRight}
        >
          <Title className={styles.title} pt="1vw" pb="2vw">
            Meet The Team
          </Title>
          <Grid grow gutter={gutter}>
            {executives.map((executive, index) => (
              <Grid.Col span={{ base: 12, sm: 4 }}>
                <ExecutiveCard
                  executive={executive}
                  badgeColor={badgeColor}
                  key={index}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
