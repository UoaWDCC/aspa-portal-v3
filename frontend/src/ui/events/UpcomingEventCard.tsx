import React from 'react';
import styles from './UpcomingEventCard.module.css';

interface Event {
    eventName: string;
    imgUrl: string;
  }
  
  export default function UpcomingEventCard({ event }: { event: Event }) {
    return (
      <div className={styles.card}>
        <img src={event.imgUrl} alt={event.eventName} />
        <h1>{event.eventName}</h1>
      </div>
    );
  }