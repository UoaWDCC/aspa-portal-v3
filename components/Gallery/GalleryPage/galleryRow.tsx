"use client";

import React, { JSX, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./galleryRow.module.css";

interface EventData {
  name: string;
  date: string;
  year: string;
  location: string;
  images: string[];
  eventId: string;
}

interface GalleryRowProps {
  event: EventData;
  rowIndex: number;
}

export default function GalleryRow({
  event,
  rowIndex,
}: GalleryRowProps): JSX.Element {
  const { name, date, year, location, images, eventId } = event;
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const scroll = (direction: "left" | "right"): void => {
    const current = carouselRef.current;
    if (!current) {
      return;
    }

    const scrollAmount = current.offsetWidth * 0.8;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleViewAll = (): void => {
    router.push(`/gallery/${eventId}/full/${rowIndex}`);
  };

  return (
    <section className={styles.galleryRow}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h3 className={styles.eventTitle}>{name}</h3>
          <div className={styles.eventMeta}>
            <span>{year}</span>
            <span>{date}</span>
            <span>{location}</span>
          </div>
        </div>
      </header>

      <div className={styles.carouselContainer}>
        <button
          type="button"
          className={`${styles.carouselButton} ${styles.prevButton}`}
          onClick={(): void => scroll("left")}
        >
          ‹
        </button>

        <div className={styles.carousel} ref={carouselRef}>
          {images.map((img, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img
                src={img}
                alt={`${name} ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.carouselButton} ${styles.nextButton}`}
          onClick={(): void => scroll("right")}
        >
          ›
        </button>
      </div>

      <div className={styles.viewAllContainer}>
        <button
          type="button"
          className={styles.viewAllButton}
          onClick={handleViewAll}
        >
          View All Photos
        </button>
      </div>
    </section>
  );
}
