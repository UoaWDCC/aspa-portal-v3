import React, { useEffect, useRef } from "react";
import styles from "./lightbox.module.css";
import { Stack, Group, Button, CloseButton} from "@mantine/core";

type Photo = {
  id: number;
  src: string;
  alt: string;
};

interface Props {
  open: boolean;
  photoList: Photo[];
  photoIndex: number;
  close: () => void;
  onPrev: (e: React.MouseEvent) => void;
  onNext: (e: React.MouseEvent) => void;
}

const Lightbox: React.FC<Props> = ({
  open,
  photoList,
  photoIndex,
  close,
  onPrev,
  onNext,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && overlayRef.current) {
      overlayRef.current.focus();
    }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      close();
    }
  };

  if (!open || !photoList[photoIndex]) return null;
  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={close}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Stack className={styles.content} onClick={(e) => e.stopPropagation()}>
        <img
          src={photoList[photoIndex].src}
          alt={photoList[photoIndex].alt}
          className={styles.image}
        />
        <CloseButton size="xl" onClick={close} className={styles.closeBtn} />
        <Group className={styles.buttonGroup}>
          <Button variant="subtle" color="#fff" size="xl" radius="md" onClick={onPrev} className={styles.navBtn}>{'<'}</Button>
          <Button variant="subtle" color="#fff" size="xl" radius="md" onClick={onNext} className={styles.navBtn}>{'>'}</Button>
        </Group>
      </Stack>
    </div>
  );
};
export default Lightbox;