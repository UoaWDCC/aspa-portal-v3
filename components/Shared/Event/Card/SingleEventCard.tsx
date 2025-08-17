"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Event } from '@/models/Event';
import styles from "./SingleEventCard.module.css";

// Default values for the card dimensions and background color
const DEFAULT_WIDTH = "100%";
const DEFAULT_HEIGHT = "auto";
const DEFAULT_BACKGROUND_COLOR = "#1a1a1a";

interface EventCardProps {
  event: Event;
  width?: typeof DEFAULT_WIDTH;
  height?: typeof DEFAULT_HEIGHT;
  backgroundColor?: typeof DEFAULT_BACKGROUND_COLOR;
}

export function EventCard({
  event,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  backgroundColor = DEFAULT_BACKGROUND_COLOR,
}: EventCardProps) {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      style={
        {
          "--card-width": width,
          "--card-height": height,
          "--card-bg": backgroundColor,
        } as React.CSSProperties
      }
    >
      <div className={styles.cardFlex}>
        <div className={styles.imageWrapper}>
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={400}
            height={300}
            className={styles.eventImage}
          />
        </div>

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
