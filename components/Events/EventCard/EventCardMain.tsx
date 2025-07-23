import { Flex, Image, Text, rgba, Button } from '@mantine/core';

export interface Event {
    id: string;
    name: string;
    date: string; // Added date field
    price: number; // Added price field
    location: string; // Added location field
    description: string;
    imageUrl: string;
    buttonText: string;
}

export interface EventCardMainProps {
    event: Event
    bg_color: string,
    font_color: string,
    max_height: number,
    min_height: number,
}

export function EventCardMain({ event, bg_color=rgba('#717882', 1), font_color=rgba('#FFFFFF', 1), max_height=350, min_height=250}: EventCardMainProps) {
    return (
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

            <Flex direction="column" m="md" justify="space-around" gap="md" mah={max_height} style={{ flex: 1 }}>
                {/* Title of event */}
                <Text size="xl" tt="uppercase" mt="md" mb="md" c={font_color} w="100%" fw="bolder">
                    {event.name}
                </Text>

                {/* Event date, price and location */}
                <Flex direction="row" justify="space-between" align="center" gap="auto" mt="sm" mb="sm" c={font_color} fw="bold">
                    <Text size="md">{event.date}</Text>
                    <Text>${event.price}</Text>
                    <Text>{event.location}</Text>
                </Flex>

                {/* Event description */}
                <Text size="md" mt="xs" c={font_color}>{event.description}</Text>

                <Flex direction="column" justify="flex-end" align="flex-end" p="md">
                    <Button variant="outline" radius="xl" color='white' size="compact-xl" bg={bg_color}>
                        {event.buttonText}
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}