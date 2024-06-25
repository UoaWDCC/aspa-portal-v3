import styles from "./EventCard.module.css";

// Define Event type
interface Event {
  eventName: string;
  eventDescription: string;
  imgUrl: string;
}

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className={styles.card}>
      <img src={event.imgUrl} alt={event.eventName} />
      <div className={styles.description}>
        <h1>{event.eventName}</h1>
        <p>{event.eventDescription}</p>
      </div>
    </div>
  );
}