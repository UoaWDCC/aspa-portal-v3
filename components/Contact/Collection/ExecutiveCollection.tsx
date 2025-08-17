"use client";

import { Grid, Container, Paper, Title } from "@mantine/core";
import { ExecutiveCard, Executive } from "../Card/ExecutiveCardDisplay";
import styles from "./ExecutiveCollection.module.css";

export interface ExecutiveCollection {
  executives: Executive[];
  sectionTitle?: string;
  badgeColor?: string;
  gutter?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
  sectionTitle,
  badgeColor = "#d78840",
  gutter = "lg",
  radius = "xl",
  shadow = "sm",
  withBorder = true,
  outerPaddingTop = '',
  outerPaddingBottom = '',
  outerPaddingLeft = '',
  outerPaddingRight = '',
  innerPaddingTop = '',
  innerPaddingBottom = '',
  innerPaddingLeft = '',
  innerPaddingRight = '',
}: ExecutiveCollection) {
  return (
    <Container
      pt={outerPaddingTop}
      pb={outerPaddingBottom}
      pl={outerPaddingLeft}
      pr={outerPaddingRight}
    >
      <Paper shadow={shadow} radius={radius} withBorder={withBorder} className={styles.collection}>
        <Container
          pt={innerPaddingTop}
          pb={innerPaddingBottom}
          pl={innerPaddingLeft}
          pr={innerPaddingRight}
        >
          {sectionTitle && (
            <Title order={2} ta="center" className={styles.sectionTitle}>
              {sectionTitle}
            </Title>
          )}
          <Grid gutter={gutter}>
            {executives.map((executive, index) => (
              <Grid.Col
                key={index}
                span={{ base: 12, sm: 6 }} // 12 = full width, 6 = half width
              >
                <ExecutiveCard executive={executive} badgeColor={badgeColor} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
