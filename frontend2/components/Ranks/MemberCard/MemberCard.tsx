'use client';
import { Card, Text, Title, Group, Badge } from '@mantine/core';
import styles from './MemberCard.module.css';

export interface Member {
    memberRank: number;
    memberName: string;
    memberSoloWins: number;
    memberDuosWins: number;
    memberTotalScore: number;
}

export interface MemberCard {
    member: Member;
    badgeColor?: string;
}

export function MemberCard({ 
    member, 
}: MemberCard) {
    return (
        <Card shadow="sm" padding="lg" radius="xl" withBorder={true} style={{ maxWidth: "100%" }} className={styles.card}>
            <Title order={2} mt="md" mb="md">
                {member.memberRank}.
            </Title>
            <Title order={2} mt="md" mb="md">
                {member.memberName}
            </Title>
            <Group justify="space-between" mt="md" mb="xs" style={{ display: 'flex', flexDirection: 'column' }}>
                <Text size="md">
                    Solo Wins: {member.memberSoloWins}
                </Text>
                <Text size="md">
                    Duos Wins: {member.memberDuosWins}
                </Text>
            </Group>
            <Title order={2} mt="md" mb="md">
                {member.memberTotalScore}
            </Title>
        </Card>
    );
}