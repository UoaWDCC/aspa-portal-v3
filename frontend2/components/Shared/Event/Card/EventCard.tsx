import { Card, Image, Text, Title } from '@mantine/core';
import styles from './EventCard.module.css';

interface Event {
  eventName: string;
  eventDescription: string;
  imgUrl: string;
}

interface EventCardProps {
  event: Event;
  cardShadow?: "xs" | "sm" | "md" | "lg" | "xl";
  cardRadius?: "xs" | "sm" | "md" | "lg" | "xl";
  cardWithBorder?: boolean;
  cardPadding?: "xs" | "sm" | "md" | "lg" | "xl";
  cardMaxWidth?: string;
  cardTitleOrder?: 1 | 2 | 3 | 4 | 5 | 6;
  cardTitleMargin?: "xs" | "sm" | "md" | "lg" | "xl";
  cardDescriptionSize?: "xs" | "sm" | "md" | "lg" | "xl";
}
  

export function EventCard(
  { event, 
    cardShadow = "sm", 
    cardRadius = "xl", 
    cardWithBorder = true, 
    cardPadding = "lg", 
    cardMaxWidth = "400px", 
    cardTitleOrder = 2, 
    cardTitleMargin = "md", 
    cardDescriptionSize = "md" 
  }: EventCardProps
) {
  return (
    <Card shadow={cardShadow} padding={cardPadding} radius={cardRadius} withBorder={cardWithBorder} style={{ maxWidth: cardMaxWidth }} className={styles.card}>
      <Card.Section>
        <Image src={event.imgUrl} alt={event.eventName} />
      </Card.Section>
      <Title order={cardTitleOrder} mt={cardTitleMargin} mb={cardTitleMargin}>
        {event.eventName}
      </Title>
      <Text size={cardDescriptionSize}>
        {event.eventDescription}
      </Text>
    </Card>
  );
}