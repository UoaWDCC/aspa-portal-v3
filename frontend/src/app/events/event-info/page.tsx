import EventInfo from '@/ui/events/EventInfo';
import UpcomingEvents from '@/ui/events/UpcomingEvents';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ASPA - Event Info",
  description: "ASPA Events: View All the Event ASPA has to offer",
};

export default function EventDetails() {
  return (
    <div>
      <section id="Event-Details">
        <EventInfo />
      </section>
      <section id="UpcomingEvents">
        <UpcomingEvents />
      </section>
    </div>
  );
}