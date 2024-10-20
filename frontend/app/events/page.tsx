'use client';
import React from 'react';
import { getEvents } from '@/data/service/events';

export default function EventsPage () {

    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        getEvents().then((data) => {
            setEvents(data);
            console.log(data);
        });
    }, []);

    return (
        <h1>Events Page</h1>
    )
}