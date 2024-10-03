'use client';
import { Card, Image, Text, Title, Group, Badge } from '@mantine/core';
import styles from './ExecutiveCard.module.css';

export interface Executive {
    name: string;
    title: string;
    description: string;
}

export interface ExecutiveCard {
    executive: Executive;
    badgeColor?: string;
}

export function ExecutiveCard({ 
    executive, 
    badgeColor="#d78840"
}: ExecutiveCard) {
    return (
        <Card shadow="sm" padding="lg" radius="xl" withBorder={true} style={{ maxWidth: "100%" }} className={styles.card}>
            <Card.Section>
                <Image src="https://media.istockphoto.com/id/96333863/photo/retro-dude.jpg?s=612x612&w=0&k=20&c=L9_H1c8MP41PGEcg36VEakeMoVC8uf1Jq5hs-NErQ0k=" alt={executive.name} />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
                <Title order={2} mt="md" mb="md">
                    {executive.name}
                </Title>
                <Badge size="md" color={badgeColor}>
                    {executive.title}
                </Badge>
            </Group>
            <Text size="md">
                {executive.description}
            </Text>
        </Card>
    );
}