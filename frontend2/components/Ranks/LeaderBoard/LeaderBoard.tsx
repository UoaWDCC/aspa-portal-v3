'use client';
import { Grid, Container, Paper, Title } from '@mantine/core';
import { MemberCard, Member } from '../MemberCard/MemberCard';
import { RankBalls } from '../RankBalls/RankBalls';
import styles from './LeaderBoard.module.css';

export interface LeaderBoard {
    members: Member[];
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

export function LeaderBoard({
    members,
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
    innerPaddingRight = ""
}: LeaderBoard) {
    return (
        <Container className={styles.pageContainer} pt={outerPaddingTop} pb={outerPaddingBottom} pl={outerPaddingLeft} pr={outerPaddingRight}>
            <RankBalls />
            <Paper shadow={shadow} radius={radius} withBorder={withBorder} className={styles.collection}>
                <Container pt={innerPaddingTop} pb={innerPaddingBottom} pl={innerPaddingLeft} pr={innerPaddingRight}>
                    <Title className={styles.title} pt="1vw" pb="2vw">Leader Board</Title>
                    <Grid grow gutter={gutter}>
                        {members.map((member, index) => (
                            <Grid.Col>
                                <MemberCard member={member} badgeColor={badgeColor} key={index} />
                            </Grid.Col>
                        ))}
                    </Grid>
                </Container>
            </Paper>
        </Container>
    );
}