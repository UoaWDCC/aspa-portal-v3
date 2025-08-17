import { EventCardMain, EventCardMainProps } from "../EventCard/EventCardMain";
import {
  EventCardSecondary,
  EventCardSecondaryProps,
} from "../EventCard/EventCardSecondary";
import {
  EventCardTertiary,
  EventCardTertiaryProps,
} from "../EventCard/EventCardTertiary";
import { Stack, Text, Button, rgba } from "@mantine/core";
import { Event } from "@/models/Event";

export type ChildEventDisplayProps =
  | EventCardMainProps
  | EventCardSecondaryProps
  | EventCardTertiaryProps
  | Omit<EventCardMainProps, "event">
  | Omit<EventCardSecondaryProps, "events">
  | Omit<EventCardTertiaryProps, "events">;

export interface ParentEventDisplayProps {
  events: Event[];
  displayTypes: displayType[];
  props: ChildEventDisplayProps[];
  title?: string;
  buttonText?: string;
  bg_color?: string;
  font_color?: string;
  title_fs?: string;
  title_fw?: string;
  gap?: string;
}

export enum displayType {
  Main,
  Secondary,
  Tertiary,
}

export function EventDisplay({
  events,
  displayTypes,
  props,
  title = "Untitled",
  buttonText = "Button Text",
  bg_color = rgba("#717882", 1),
  font_color = rgba("#FFFFFF", 1),
  title_fs = "8vh",
  title_fw = "bold",
  gap = "lg",
}: ParentEventDisplayProps) {
  if (displayTypes.length < 1) {
    return;
  }

  let eventIdx = 0;

  return (
    <Stack align="center" gap={gap}>
      <Text fz={title_fs} fw={title_fw} mb="md" c={font_color}>
        {title}
      </Text>

      {displayTypes.map((type: displayType) => {
        switch (type) {
          case displayType.Main: {
            const mainEvent = events[eventIdx];
            const mainProps = props[eventIdx] as EventCardMainProps;
            eventIdx += 1;
            return <EventCardMain {...mainProps} event={mainEvent} />;
          }

          case displayType.Secondary: {
            const secondaryEvents = [events[eventIdx], events[eventIdx + 1]];
            const secondaryProps = props[eventIdx] as EventCardSecondaryProps;
            eventIdx += 2;
            return (
              <EventCardSecondary
                {...secondaryProps}
                events={secondaryEvents}
              />
            );
          }

          case displayType.Tertiary: {
            const tertiaryEvents = [events[eventIdx], events[eventIdx + 1]];
            const tertiaryProps = props[eventIdx] as EventCardTertiaryProps;
            eventIdx += 2;
            return (
              <EventCardTertiary {...tertiaryProps} events={tertiaryEvents} />
            );
          }

          default:
            return null;
        }
      })}

      {/* Button to be replaced with John's button component */}
      <Button variant="filled" size="md" bg={bg_color} w="30vw" radius="xl">
        {buttonText}
      </Button>
    </Stack>
  );
}
