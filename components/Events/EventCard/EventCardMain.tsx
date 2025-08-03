import { Flex, Image, Text, rgba, Button } from "@mantine/core";
import Link from "next/link";

export interface Event {
  id: string;
  name: string;
  date: string;
  price: number;
  location: string;
  description: string;
  imageUrl: string;
  buttonText: string; // Text to show in event card button
}

export interface EventCardMainProps {
    event: Event
    bg_color?: string,
    font_color?: string,
    max_height?: number,
    min_height?: number,
    title_fs?: string,
    info_fs?: string,
    desc_fs?: string,
    text_margins?: string
    title_fw?: string,
    info_fw?: string,
    desc_fw?: string,
}

export function EventCardMain({ 
    event, 
    bg_color = rgba('#717882', 1), 
    font_color = rgba('#FFFFFF', 1), 
    max_height = 350, 
    min_height = 250,
    title_fs = "5vh",
    info_fs = "3vh",
    desc_fs = "2.5vh",
    text_margins = "sm",
    title_fw = "bolder",
    info_fw = "normal",
    desc_fw = "normal",
}: EventCardMainProps) {
    return (
        <Link 
            href={`/events/${event.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
        >
            <Flex 
                direction="row"
                align="center"
                justify="flex-start"
                bg={bg_color}
                style={{ position: 'relative', minHeight: min_height, maxHeight: max_height }}
            >
                <Image
                    src={event.imageUrl}
                    fit="fill"
                    mah={max_height}
                    w="auto"
                    alt={event.name}
                />

                <Flex direction="column" m="md" justify="space-around" gap={text_margins} mah={max_height} style={{ flex: 1 }}>
                    {/* Title of event */}
                    <Text fz={title_fs} tt="uppercase" mt={text_margins} mb={text_margins} c={font_color} fw={title_fw}>
                        {event.name}
                    </Text>

                    {/* Event date, price and location */}
                    <Flex direction="row" justify="space-between" align="center" gap="auto" mt={text_margins} mb={text_margins} c={font_color}>
                        <Text fz={info_fs} fw={info_fw}>{event.date}</Text>
                        <Text fz={info_fs} fw={info_fw}>${event.price}</Text>
                        <Text fz={info_fs} fw={info_fw}>{event.location}</Text>
                    </Flex>

                    {/* Event description */}
                    <Text size={desc_fs} mt={text_margins} c={font_color} lineClamp={4} fw={desc_fw}>{event.description}</Text>

                    {/* Button to be replaced with John's button component */}
                    <Flex direction="column" justify="flex-end" align="flex-end" p={text_margins}>
                        <Button variant="outline" radius="xl" color={font_color} size="compact-xl" bg={bg_color}>
                            {event.buttonText}
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    );
}
