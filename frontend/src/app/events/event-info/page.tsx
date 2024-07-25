import EventInfo from '@/ui/events/EventInfo';
import UpcomingEvents from '@/ui/events/UpcomingEvents';

export default function EventDetails() {
    return (
      <div>
         <section id="Event-Details">
        <EventInfo/>
        </section>
        <section id="UpcomingEvents">
        <UpcomingEvents/>
        </section>
      </div>
    );
  }