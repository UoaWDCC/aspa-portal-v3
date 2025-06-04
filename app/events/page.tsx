"use client"; // server side rendering is required to fetch data from CMS. Fetching data from CMS from the client side will throw CORS error.

import { useEffect, useState } from "react";
import { Event } from "@/lib/cms-api/events";

export default function EventsPage() {
	const [loading, setLoading] = useState(true);
	const [events, setEvents] = useState<Event[]>([]);
  // const events:Event[] = await getEvents();

	useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/api/events?limit=5");
      const data = await res.json();
      setEvents(data.docs || []);
			setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
			{loading ? (
				<p className="text-gray-500">Loading events...</p>
			) : (events.length === 0 ? (
				<p className="text-gray-500">No events available right now.</p>
			) : (
				<ul className="space-y-4">
					{events.map(event => (
						<li key={event.id} className="border p-4 rounded-md">
							<h2 className="text-xl font-semibold">{event.title}</h2>
							<p className="text-gray-600">{event.date}</p>
							<p>{event.location}</p>
						</li>
					))}
				</ul>
			))}
    </div>
  );
}