import { Event, EventCardMain } from "../EventCard/EventCardMain";
import { EventCardSecondary } from "../EventCard/EventCardSecondary";
import { Stack, Text, Button, rgba } from "@mantine/core";
import { useRouter } from "next/navigation";
import { EventCardTertiary } from "../EventCard/EventCardTertiary";

export interface EventDisplayProps {
  events: Event[];
  title: string;
  buttonText: string;
  bg_color: string;
  font_color: string;
  main_max_h: number;
  second_max_h: number;
  main_min_h: number;
  second_min_h: number;
  displayTypes: displayType[];
}

export enum displayType {
  Main,
  Secondary,
  Tertiary,
}

export function EventDisplay({
  events,
  title,
  buttonText = "View More Events",
  bg_color = rgba("#717882", 1),
  font_color = rgba("#FFFFFF", 1),
  main_max_h,
  main_min_h,
  second_max_h,
  second_min_h,
  displayTypes,
}: EventDisplayProps) {
  const router = useRouter();

  const handleViewMore = () => {
    router.push("/events");
  };

  if (displayTypes.length < 1) {
    return;
  }

  let eventIdx = 0;

  return (
    <Stack align="center" gap="lg">
      <Text size="8vh" fw="bold" mb="md">
        {title}
      </Text>

      {displayTypes.map((type: displayType) => {
        switch (type) {
          case displayType.Main:
            const mainEvent = events[eventIdx];
            eventIdx += 1;
            return (
              <EventCardMain
                event={mainEvent}
                bg_color={bg_color}
                font_color={font_color}
                max_height={main_max_h}
                min_height={main_min_h}
              />
            );

          case displayType.Secondary:
            const secondaryEvents = [events[eventIdx], events[eventIdx + 1]];
            eventIdx += 2;
            return (
              <EventCardSecondary
                events={secondaryEvents}
                bg_color={bg_color}
                font_color={font_color}
                max_height={second_max_h}
                min_height={second_min_h}
              />
            );

          case displayType.Tertiary:
            const tertiaryEvents = [events[eventIdx], events[eventIdx + 1]];
            eventIdx += 2;
            return (
              <EventCardTertiary
                events={tertiaryEvents}
                bg_color={bg_color}
                font_color={font_color}
                max_height={second_max_h}
                min_height={second_min_h}
              />
            );

          default:
            return null;
        }
      })}

      <Button
        variant="filled"
        size="md"
        bg={bg_color}
        w="30vw"
        radius="xl"
        onClick={handleViewMore}
      >
        {buttonText}
      </Button>
    </Stack>
  );
}
