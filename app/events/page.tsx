// app/events/page.tsx
import { getEvents } from "@/lib/cms-api/events";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <ul className="space-y-4">
        {events.map(event => (
          <li key={event.id} className="border p-4 rounded-md">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.date}</p>
            <p>{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}