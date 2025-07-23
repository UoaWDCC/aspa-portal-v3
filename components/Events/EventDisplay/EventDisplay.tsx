import { Event, EventCardMain } from "../EventCard/EventCardMain"
import { EventCardSecondary } from "../EventCard/EventCardSecondary"
import { Stack, Text, Button, rgba } from "@mantine/core"
import { useRouter } from "next/navigation"

export interface EventDisplayProps {
    events: Event[],
    title: string,
    buttonText: string,
    bg_color: string, 
    font_color: string,
    main_max_h: number,
    second_max_h: number,
    main_min_h: number,
    second_min_h: number,
}

export function EventDisplay({
    events,
    title,
    buttonText="View More Events",
    bg_color=rgba('#717882', 1), 
    font_color=rgba('#FFFFFF', 1), 
    main_max_h, 
    main_min_h, 
    second_max_h, 
    second_min_h
}: EventDisplayProps) {
    const router = useRouter();

    const handleViewMore = () => {
        router.push("/events");
    };

    return (
        <Stack align="center" gap="lg">
            <Text size="8vh" fw="bold">{title}</Text>
            
            <EventCardMain event={events[0]} bg_color={bg_color} font_color={font_color} max_height={main_max_h} min_height={main_min_h}/>

            <EventCardSecondary events={[events[1], events[2]]} bg_color={bg_color} font_color={font_color} max_height={second_max_h} min_height={second_min_h}/>

            <Button variant="filled" size="md" bg={bg_color} w="30vw" radius="xl" onClick={handleViewMore}>View More Events</Button>
        </Stack>
    )
}