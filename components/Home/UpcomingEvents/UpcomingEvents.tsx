"use client";
import { Title, Text, Grid, Container, Stack, Group, Image} from "@mantine/core";
import { Button } from "@/components/Shared/Button/Button";
import { Event } from "@/components/Shared/Event/Card/EventCard";
import Link from "next/link";
import styles from "./UpcomingEvents.module.css";

export interface UpcomingEventProps {
  events: Event[];
  paddingTop?: string;
  paddingBottom?: string;
  paddingleft?: string;
  paddingRight?: string;
}

export function UpcomingEvent({
  events,
  paddingTop = "",
  paddingBottom = "",
  paddingleft = "",
  paddingRight = "",
}: UpcomingEventProps) {
  const [mainEvent, ...otherEvents] = events;
  return (
    <Container
      fluid
      pt={paddingTop}
      pb={paddingBottom}
      pl={paddingleft}
      pr={paddingRight}
    >
      <Grid gutter="xl">
        <Grid.Col span={12}>
          <div className={styles.centeredText}>
            <Title className={styles.title}>UPCOMING EVENTS</Title>
          </div>
        </Grid.Col>

        {/* To be worked on */}
        <Grid.Col span={12}>
          <Stack h="100%">
            {/* Main Event */}
            <Group gap="0px">
              <Image
                src={mainEvent.imageUrl}
                alt="Main Event"
                width={0}
                height={0}
                className={styles.mainEventImage}
              />
              <Stack className={styles.mainEvent} align="flex-start">
                <Title className={styles.mainEventTitle}>{mainEvent.name}</Title>
                <Group w="100%" className={styles.mainEventDetails} gap="xs" justify="space-between">
                  <Text className={styles.mainEventDate}>{mainEvent.time}</Text>
                  <Text className={styles.mainEventPrice}>{mainEvent.price}</Text>
                  <Text className={styles.mainEventLocation}>{mainEvent.location}</Text>
                </Group>
                <Text w="100%" className={styles.mainEventDescription}>{mainEvent.description}</Text>
                <Button outlined variant="h4" className={`${styles.signUpButton}`}>sign up now!</Button>
              </Stack>
            </Group>
            {/* Other Events */}
            <Grid className={styles.otherEvents}>
              <Grid.Col span={2}>
                <Image
                  src={otherEvents[0]?.imageUrl || ""}
                  alt="Other Event 1"
                  width={0}
                  height={0}
                  className={styles.otherEventImage}
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <Image
                  src={otherEvents[1]?.imageUrl || ""}
                  alt="Other Event 2"
                  width={0}
                  height={0}
                  className={styles.otherEventImage}
                />
              </Grid.Col>
              <Grid.Col span={8}>
                <Stack h="100%" justify="space-between">
                    <Title className={styles.otherEventTitle}>{otherEvents[0].name}</Title>
                    <Group justify="space-between">
                      <Text className={styles.otherEventDate}>{otherEvents[0].time}</Text>
                      <Text className={styles.otherEventPrice}>{otherEvents[0].price}</Text>
                      <Text className={styles.otherEventLocation}>{otherEvents[0].location}</Text>
                    </Group>
                    <Button outlined variant="h4" className={`${styles.signUpButton}`}>sign up now!</Button>
                    <Title className={styles.otherEventTitle}>{otherEvents[1].name}</Title>
                    <Group justify="space-between">
                      <Text className={styles.otherEventDate}>{otherEvents[1].time}</Text>
                      <Text className={styles.otherEventPrice}>{otherEvents[1].price}</Text>
                      <Text className={styles.otherEventLocation}>{otherEvents[1].location}</Text>
                    </Group>
                    <Button outlined variant="h4" className={`${styles.signUpButton}`}>sign up now!</Button>
                </Stack>
              </Grid.Col>
            </Grid>
          </Stack>
        </Grid.Col>

        <Grid.Col span={12}>
          <div className={styles.centeredButton}>
            <Link href="/events" passHref>
              <Button variant="h4">
                View more Events
              </Button>
            </Link>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
