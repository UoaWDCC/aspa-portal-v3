import { Group, Stack, Text, Title } from "@mantine/core";
import styles from "./eventTitle.module.css";

type Photo = {
  id: number,
  src: string,
  alt: string,
}

type Event = {
  title: string,
  year: number,
  month: string,
  day: string,
  location: string,
  photos: Photo[]
}

const EventTitle = ({ event }: { event: Event }) => {
  return (
    <Stack className={styles.eventTitle}>
      <Title className={styles.titleText}>{event.title}</Title>
      <Group className={styles.eventDetailsRow}>
        <Text>{event.year}</Text>
        <Text>{event.month} {event.day}</Text>
        <Text>{event.location}</Text>
      </Group>
    </Stack>
  );
};

export default EventTitle;
