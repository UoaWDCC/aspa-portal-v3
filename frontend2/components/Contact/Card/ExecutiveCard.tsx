'use client';
import { Card, Image, Text, Title, Group, Badge } from '@mantine/core';
import styles from './ExecutiveCard.module.css';

export interface Executive {
    executiveName: string;
    executiveTitle: string;
    executiveBlurb: string;
    imgUrl: string;
}

export interface ContactCard {
    executive: Executive;
    badgeColor?: string;
}

export function ExecutiveCard({ executive, badgeColor }: ContactCard) {
    return (
        <Card shadow="sm" padding="lg" radius="xl" withBorder={true} style={{ maxWidth: "100%" }} className={styles.card}>
            <Card.Section>
                <Image src={executive.imgUrl} alt={executive.executiveName} />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
                <Title order={2} mt="md" mb="md">
                    {executive.executiveName}
                </Title>
                <Badge size="md" color={badgeColor}>
                    {executive.executiveTitle}
                </Badge>
            </Group>
            <Text size="md">
                {executive.executiveBlurb}
            </Text>
        </Card>
    );
}