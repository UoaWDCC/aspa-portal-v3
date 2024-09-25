"use client";
import { Text, Button, Grid, Container } from "@mantine/core";
import { Event } from "@/components/Shared/Event/Card/EventCard";
import { EventCarousel } from "@/components/Shared/Event/Carousel/EventCarousel";
import Link from 'next/link';
import styles from './PastEvent.module.css';
import AspaButton from "@/components/Shared/Event/ASPAButton/AspaButton";


export interface PastEvent {
    events: Event[];
    paddingTop?: string;
    paddingBottom?: string;
    paddingleft?: string;
    paddingRight?: string;
}

export function PastEvent(
    { events }: PastEvent,
    paddingTop = "",
    paddingBottom = "",
    paddingleft = "",
    paddingRight = ""
) {
    return (
        <Container fluid pt={paddingTop} pb={paddingBottom} pl={paddingleft} pr={paddingRight}>
            <Grid gutter="xl">
                <Grid.Col span={12}>
                    <div className={styles.centeredText}>
                        <Text className={styles.shadowTitle}>Past Events</Text>
                        <Text className={styles.title}>Past Events</Text>
                    </div>
                </Grid.Col>
                <Grid.Col span={12}>
                    <EventCarousel events={events} />
                </Grid.Col>
                <Grid.Col span={12}>
                    <div className={styles.centeredButton}>
                        <Link href="/events" passHref>
                            <Button variant="filled" className={styles.button}>View All Events</Button>
                        </Link>
                    </div>
                </Grid.Col>
            </Grid>
        </Container>
    );
}