import styles from "./PastEvents.module.css";
import EventCard from "./EventCard"

export default function PastEvents() {
  const pastEvents = [
    {eventName: "Event 1", eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://fastly.4sqi.net/img/general/200x200/32264433_4nGcfHNabq9lyah9S3b1PlpX_6p0qENU25inJ93SWZ4.jpg"},
    {eventName: "Event 2", eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Backyardpool.jpg/1200px-Backyardpool.jpg"},
    {eventName: "Event 3", eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", imgUrl: "https://spothopper-static.s3.us-east-1.amazonaws.com/web/daviebilliardclub--com/custom/fb_image.jpg"}
  ]
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Past Events
      </h1>
      <div className={styles.content}>
        {pastEvents.map((event) => (
          <EventCard key={event.eventName} event={event} />     
        ))}
      </div>
      <button className={styles.button}>
        View All Events
      </button>
    </div>

  );
}