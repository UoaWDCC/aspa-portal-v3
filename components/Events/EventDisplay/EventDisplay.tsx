import { Event, EventCardMain } from "../EventCard/EventCardMain"
import { EventCardSecondary } from "../EventCard/EventCardSecondary"
import { Card } from "@mantine/core"

export interface EventDisplayProps {
    events: Event[],
    bg_color: string, 
    font_color: string,
    main_max_h: number,
    second_max_h: number,
    main_min_h: number,
    second_min_h: number,

}

export function EventDisplay({
    events, 
    bg_color, 
    font_color, 
    main_max_h, 
    main_min_h, 
    second_max_h, 
    second_min_h
}: EventDisplayProps) {
    return (
        <Card>
            <Card.Section mb="md">
                <EventCardMain event={events[0]} bg_color={bg_color} font_color={font_color} max_height={main_max_h} min_height={main_min_h}/>
            </Card.Section>

            <Card.Section>
                <EventCardSecondary events={[events[1], events[2]]} bg_color={bg_color} font_color={font_color} max_height={second_max_h} min_height={second_min_h}/>
            </Card.Section>
        </Card>
    )
}