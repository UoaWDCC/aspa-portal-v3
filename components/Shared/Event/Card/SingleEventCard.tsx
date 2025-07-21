"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Event } from "./EventCard"; // assuming the type is reused here
import styles from "./SingleEventCard.module.css";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <div className={styles.cardFlex}>
        {/* Image Section */}
        <div className={styles.imageWrapper}>
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={400}
            height={300}
            className={styles.eventImage}
          />
        </div>

        {/* Info Section */}
        <div className={styles.infoSection}>
          <h2 className={styles.eventTitle}>{event.name}</h2>
          <p>Date & Time: {event.dateTime}</p>
          <p>Entry Price: {event.price}</p>
          <p>Location: {event.location}</p>

          <button
            type="button"
            className={styles.signUpButton}
            onClick={() => router.push("/signup")}
          >
            SIGN UP
          </button>
        </div>
      </div>

      {/* Footer Description */}
      <p className={styles.footerText}>
        Here you can register to become a member of the club, log in to your
        account, and sign up for club events. Check out the list of current
        events to see what we’ve planned for the future, or have a look at our
        past events to see what we’re all about and some of the highlights of
        past years.
      </p>
    </div>
  );
}
