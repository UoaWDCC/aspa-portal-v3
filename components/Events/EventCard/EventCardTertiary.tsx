import { Flex, Image, Text, rgba, Button, Group, Stack } from "@mantine/core";
import { Event } from "@/payload-types";
import Link from "next/link";

export interface EventCardTertiaryProps {
  events: Event[];
  bg_color?: string;
  font_color?: string;
  max_height?: number;
  min_height?: number;
  text_gap?: string;
  text_width?: string;
  title_fs?: string;
  info_fs?: string;
  title_fw?: string;
  info_fw?: string;
}

export function EventCardTertiary({
  events,
  bg_color = rgba("#717882", 1),
  font_color = rgba("#FFFFFF", 1),
  max_height = 250,
  min_height = 200,
  text_gap = "md",
  text_width = "25vw",
  title_fs = "2vh",
  info_fs = "2vh",
  title_fw = "bold",
  info_fw = "normal",
}: EventCardTertiaryProps) {
  // Temp colors, waiting for universal color
  // Need website font as well
  const event1 = events[0];
  const event2 = events[1];

  if (!event1 || !event2) {
    return null;
  }

  return (
    <Flex
      direction="row"
      align="center"
      justify="space-around"
      gap={text_gap}
      w="100%"
      flex={1}
      style={{ minHeight: min_height, maxHeight: max_height }}
    >
      <Link
        href={`/events/${event1.name}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Group>
          {" "}
          {/* Event 1 */}
          <Image
            src={event1.imageUrl}
            fit="fill"
            mah={max_height}
            w="auto"
            alt={event1.name}
          />
          <Stack miw={text_width}>
            {/* Title of event */}
            <Text
              fz={title_fs}
              tt="uppercase"
              c={font_color}
              w="100%"
              fw={title_fw}
            >
              {event1.name}
            </Text>

            {/* Event date, price and location */}
            <Text fz={info_fs} fw={info_fw}>
              {event1.dateTime}
            </Text>
            <Text fz={info_fs} fw={info_fw}>
              {event1.price === "0"
                ? "Free"
                : event1.price
                ? `$${event1.price}`
                : "Free"}
            </Text>
            <Text fz={info_fs} fw={info_fw}>
              {event1.location}
            </Text>
            {/* Button to be replaced with John's button component */}
            <Flex direction="column" justify="flex-end" align="flex-end">
              <Button
                variant="filled"
                radius="xl"
                color={bg_color}
                size="compact-md"
                fw="normal"
                w="15vw"
              >
                "Sign Up"
              </Button>
            </Flex>
          </Stack>
        </Group>
      </Link>

      <Link
        href={`/events/${event2.name}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Group>
          <Image
            src={event2.imageUrl}
            fit="fill"
            mah={max_height}
            w="auto"
            alt={event2.name}
          />
          <Stack miw={text_width}>
            {" "}
            {/* Event 2 */}
            {/* Title of event */}
            <Text
              fz={title_fs}
              tt="uppercase"
              c={font_color}
              w="100%"
              fw={title_fw}
            >
              {event2.name}
            </Text>
            {/* Event date, price and location */}
            <Text fz={info_fs} fw={info_fw}>
              {event2.dateTime}
            </Text>
            <Text fz={info_fs} fw={info_fw}>
              {event2.price === "0"
                ? "Free"
                : event2.price
                ? `$${event2.price}`
                : "Free"}
            </Text>
            <Text fz={info_fs} fw={info_fw}>
              {event2.location}
            </Text>
            {/* Button to be replaced with John's button component */}
            <Flex direction="column" justify="flex-end" align="flex-end">
              <Button
                variant="filled"
                radius="xl"
                color={bg_color}
                size="compact-md"
                fw="normal"
                w="15vw"
              >
                "Sign Up"
              </Button>
            </Flex>
          </Stack>
        </Group>
      </Link>
    </Flex>
  );
}
