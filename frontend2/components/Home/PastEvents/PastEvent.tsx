import { Text, Button, SimpleGrid } from "@mantine/core";
import { Event } from "@/components/Shared/Event/Card/EventCard";
import { EventCarousel } from "@/components/Shared/Event/Carousel/EventCarousel";
import Link from 'next/link';
import styles from './PastEvent.module.css';

interface PastEvent {
    events: Event[];
}

export function PastEvent({ events }: PastEvent) {
    return (
        <SimpleGrid cols={1} verticalSpacing="xl">
            <div className={styles.centeredText}>
                <Text className={styles.shadowTitle}>Past Events</Text>
                <Text className={styles.title}>Past Events</Text>
            </div>
            <EventCarousel events={events} />
            <div className={styles.centeredButton}>
                <Link href="/events" passHref>
                    <Button variant="filled" className={styles.button}>View All Events</Button>
                </Link>
            </div>
        </SimpleGrid>
    );
}