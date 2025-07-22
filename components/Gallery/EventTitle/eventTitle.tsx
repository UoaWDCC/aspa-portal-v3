import { Group, Stack, Text, Title } from "@mantine/core";
import styles from "./eventTitle.module.css";


type Photo = {
  id: number,
  src: String,
  alt: String,
}

type Details = { 
  year: number
  month: string
  day: number
  location?: string
  description: string
}

type Event = {
  title: string,
  details: Details,
  photos: Photo[]
}


const EventTitle = ({ event }: { event: Event }) => {
  return (
    <Stack className={styles.eventTitle}>
      <Title className={styles.titleText}>{event.title}</Title>
      <Group className={styles.eventDetailsRow}>
        <Text>{event.details.year}</Text>
        <Text>{event.details.month} {event.details.day}</Text>
        <Text>{event.details.location}</Text>
      </Group>
    </Stack>
  );
};

export default EventTitle;
