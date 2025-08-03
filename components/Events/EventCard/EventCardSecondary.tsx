import { Flex, Image, Text, rgba, Button, Group, Stack } from "@mantine/core";
import { Event } from "./EventCardMain";
import Link from "next/link";

export interface EventCardSecondaryProps {
    events: Event[]
    bg_color?: string,
    font_color?: string,
    max_height?: number,
    min_height?: number,
    title_fs?: string,
    info_fs?: string,
    text_gap?: string
    title_fw?: string,
    info_fw?: string,
}

export function EventCardSecondary({ 
    events, 
    bg_color=rgba('#717882', 1), 
    font_color=rgba('#FFFFFF', 1), 
    max_height=250, 
    min_height=200,
    title_fs = "3vh",
    info_fs = "2vh",
    text_gap = "lg",
    title_fw = "bold",
    info_fw = "normal",
} : EventCardSecondaryProps) {
    // Temp colors, waiting for universal color
    // Need website font as well
    const event1 = events[0];
    const event2 = events[1];

    return (
        <Flex
            direction="row" 
            align="center" 
            justify="flex-start"
            gap="md"
            w="100%"
            flex={1}
            style={{ minHeight: min_height, maxHeight: max_height}}
        >
            <Link href={`/events/${event1.id}`}>
                <Image
                    src={event1.imageUrl}
                    fit='fill'
                    mah={max_height}
                    w='auto'
                    alt={event1.name}
                />
            </Link>
            
            <Link href={`/events/${event2.id}`}>
                <Image
                    src={event2.imageUrl}
                    fit='fill'
                    mah={max_height}
                    w='auto'
                    alt={event2.name}
                />
            </Link>
            
            
            <Flex direction="column" ml="md" justify="space-between" gap={text_gap} style={{ flex: 1 }}>
                <Link href={`/events/${event1.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <Stack> {/* Event 1 */}
                        {/* Title of event */}
                        <Text fz={title_fs} tt="uppercase" c={font_color} w="100%" fw={title_fw}>
                            {event1.name}
                        </Text>

                        {/* Event date, price and location */}
                        <Group justify="space-between" align="center" c={font_color}>
                            <Text fz={info_fs} fw={info_fw}>{event1.date}</Text>
                            <Text fz={info_fs} fw={info_fw}>${event1.price}</Text>
                            <Text fz={info_fs} fw={info_fw}>{event1.location}</Text>
                        </Group>
                        {/* Button to be replaced with John's button component */}
                        <Flex direction="column" justify="flex-end" align="flex-end">
                            <Button variant="filled" radius="xl" color={bg_color} size="compact-md" fw="normal" w="15vw">
                                {event1.buttonText}
                            </Button>
                        </Flex>
                    </Stack>
                </Link>
                
                <Link href={`/events/${event2.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <Stack> {/* Event 2 */}
                        {/* Title of event */}
                        <Text fz={title_fs} tt="uppercase" c={font_color} w="100%" fw={title_fw}>
                            {event2.name}
                        </Text>

                        {/* Event date, price and location */}
                        <Group justify="space-between" align="center" c={font_color}>
                            <Text fz={info_fs} fw={info_fw}>{event2.date}</Text>
                            <Text fz={info_fs} fw={info_fw}>${event2.price}</Text>
                            <Text fz={info_fs} fw={info_fw}>{event2.location}</Text>
                        </Group>
                        {/* Button to be replaced with John's button component */}
                        <Flex direction="column" justify="flex-end" align="flex-end">
                            <Button variant="filled" radius="xl" color={bg_color} size="compact-md" fw="normal" w="15vw">
                                {event2.buttonText}
                            </Button>
                        </Flex>
                    </Stack>
                </Link>
                
            </Flex>
        </Flex>
    );
}
