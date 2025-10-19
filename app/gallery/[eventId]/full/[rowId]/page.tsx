"use client";

import { useParams, useRouter } from "next/navigation";
import { Box } from "@mantine/core";
import styles from "./FullRowPage.module.css";
import { JSX } from "react";

interface Photo {
  id: number;
  src: string;
  alt: string;
}

import photos from "../../photos.json";

export default function FullRowPage(): JSX.Element {
  const params = useParams() as { eventId: string; rowId: string };
  const { eventId, rowId } = params;
  const router = useRouter();

  const photosPerRow = 7;
  const startIndex = Number(rowId) * photosPerRow;

  const rowPhotos: Photo[] = photos.slice(
    startIndex,
    startIndex + photosPerRow,
  );

  return (
    <Box className={styles.fullRowContainer}>
      <h2 className={styles.fullRowTitle}>
        {`All Photos for Row ${Number(rowId) + 1} of ${eventId}`}
      </h2>

      <div className={styles.photoGrid}>
        {rowPhotos.map((photo) => (
          <img
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            className={styles.photoItem}
          />
        ))}
      </div>

      <div className={styles.backButtonContainer}>
        <button
          type="button"
          className={styles.backButton}
          onClick={(): void => router.back()}
        >
          Back
        </button>
      </div>
    </Box>
  );
}
