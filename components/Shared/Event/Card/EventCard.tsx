'use client';
import Image from 'next/image';
import { Card, Text, Title } from '@mantine/core';
import styles from './EventCard.module.css';

import { Event } from '@/models/Event';

interface EventCardProps {
  event: Event;
  cardShadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  cardRadius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  cardWithBorder?: boolean;
  cardPadding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  cardMaxWidth?: string;
  cardTitleOrder?: 1 | 2 | 3 | 4 | 5 | 6;
  cardTitleMargin?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  cardDescriptionSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function EventCard({
  event,
  cardShadow = 'sm',
  cardRadius = 'xl',
  cardWithBorder = true,
  cardPadding = 'lg',
  cardMaxWidth = '100%',
  cardTitleOrder = 2,
  cardTitleMargin = 'md',
  cardDescriptionSize = 'md',
}: EventCardProps) {
  return (
    <Card
      shadow={cardShadow}
      padding={cardPadding}
      radius={cardRadius}
      withBorder={cardWithBorder}
      style={{ maxWidth: cardMaxWidth, height: '90%' }}
      className={styles.card}
    >
      <Card.Section>
        <Image src={event.imageUrl} alt={event.name} width={400} height={200} />
      </Card.Section>
      <Title order={cardTitleOrder} mt={cardTitleMargin} mb={cardTitleMargin}>
        {event.name}
      </Title>
      <Text size={cardDescriptionSize}>{event.description}</Text>
    </Card>
  );
}