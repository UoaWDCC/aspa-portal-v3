import { Flex, Image, Text, rgba, Button } from '@mantine/core';
import { Event } from './EventCardMain';

export function EventCardSecondary({ event1, event2 }: { event1: Event, event2: Event}) {
    // Temp colors, waiting for universal color
    // Need website font as well
    const bg_color = rgba('#717882', 1);
    const font_color = rgba('#FFFFFF', 1);

    return (
        <Flex 
            direction="row" 
            align="center" 
            justify="flex-start"
            gap="md"
            bg={bg_color}
        >
            <Image
                src={event1.imageUrl}
                w="15%"
                alt={event1.name}
            />
            <Image
                src={event2.imageUrl}
                w="15%"
                alt={event2.name}
            />

            <Flex direction="column" m="md" justify="space-around" gap="md" style={{ flex: 1 }}>
                {/* Title of event */}
                <Text size="xl" tt="uppercase" mt="md" mb="md" c={font_color} w="100%">
                    {event1.name}
                </Text>

                {/* Event date, price and location */}
                <Flex direction="row" justify="space-between" align="center" gap="auto" mt="sm" mb="sm" c={font_color}>
                    <Text size="md">{event1.date}</Text>
                    <Text>${event1.price}</Text>
                    <Text>{event1.location}</Text>
                </Flex>

                {/* Event description */}
                <Text size="md" mt="xs" c={font_color}>{event1.description}</Text>

                <Flex direction="column" justify="flex-end" align="flex-end" p="md">
                    <Button variant="outline" radius="xl" color='white' size="compact-xl">
                        Sign Up Now
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}