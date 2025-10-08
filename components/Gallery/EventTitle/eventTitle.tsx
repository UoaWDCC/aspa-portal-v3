import { Group, Stack, Text, Title } from "@mantine/core";
import styles from "./eventTitle.module.css";

type Photo = {
  id: number;
  src: string;
  alt: string;
};

type Event = {
  title: string;
  year: number;
  month: string;
  day: string;
  location: string;
  photos: Photo[];
};

export interface EventTitleProps {
  titleText: string;
  year: string;
  month: string;
  day: string;
  location: string;
  padding?: string;
  titleTextSize?: string;
  titleTextFont?: string;
  titleTextColor?: string;
  titlePadding?: string;
  eventDetailsGap?: string;
  eventDetailsPadding?: string;
  eventDetailsColor?: string;
}

const EventTitle = ({
  titleText,
  year,
  month,
  day,
  location,
  padding = "150px 0",
  titleTextSize = "48.8px",
  titleTextFont = '"Nova Square", sans-serif',
  titleTextColor = "#717882",
  eventDetailsGap = "20px 50px",
  eventDetailsPadding = "0 30px",
  eventDetailsColor = "#EBEBEB",
}: EventTitleProps) => {
  const titleTextStyles: React.CSSProperties = {
    fontSize: titleTextSize,
    fontFamily: titleTextFont,
    color: titleTextColor,
  };

  const eventDetailsStyles: React.CSSProperties = {
    gap: eventDetailsGap,
    padding: eventDetailsPadding,
    color: eventDetailsColor,
  };
  return (
    <Stack style={{ padding }} className={styles.eventTitle}>
      <Title style={{ ...titleTextStyles, textTransform: "uppercase" }}>
        {titleText}
      </Title>
      <Group style={eventDetailsStyles} className={styles.eventDetailsRow}>
        <Text>{year}</Text>
        <Text>
          {month} {day}
        </Text>
        <Text>{location}</Text>
      </Group>
    </Stack>
  );
};

export default EventTitle;
