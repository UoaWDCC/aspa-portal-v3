"use client";
import { useEffect } from "react";

export default function EventsPage() {
  // const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CMS_URL}/api/events?limit=10`,
      );
      if (!res.ok) {
        console.error("Failed to fetch events");
        return;
      }
      const data = await res.json();

      console.log("Fetched events:", data.docs);

      // setEvents(data.docs);
    }

    fetchEvents();
  }, []);

  return <h1>Events Page</h1>;
}
