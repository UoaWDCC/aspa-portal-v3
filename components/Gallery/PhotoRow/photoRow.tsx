import styles from './photoRow.module.css';
import { Image, SimpleGrid } from '@mantine/core';
import React, { useState } from 'react';

type Photo = {
  id: number;
  src: string;
  alt: string;
};

export interface PhotoRowProps {
  photoListChunk: Photo[];
  onImageClick: (key: number) => void;
  backgroundColor?: string;
  rowTopMargin?: string;
  rowPadding?: string;
}

const PhotoRow = ({
  photoListChunk,
  onImageClick,
  backgroundColor = '#1A1A1A',
  rowTopMargin = '1.7vw',
  rowPadding = '40px 5vw',
}: PhotoRowProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => setHoveredId(id);
  const handleMouseLeave = () => setHoveredId(null);

  const PhotoRowStyles: React.CSSProperties = {
    marginTop: rowTopMargin,
    backgroundColor: backgroundColor,
    padding: rowPadding,
  };

  return (
    <SimpleGrid
      data-testid="photoGrid"
      spacing="xs"
      className={styles.photoGrid}
      style={PhotoRowStyles}
    >
      {photoListChunk.map((photo) => {
        const isAdjacent =
          hoveredId !== null && (photo.id === hoveredId - 1 || photo.id === hoveredId + 1);
        const isHovered = hoveredId === photo.id;
        const leftSide = hoveredId !== null && photo.id < hoveredId;
        const rightSide = hoveredId !== null && photo.id > hoveredId;

        let classNames = [styles.photoCard];
        if (isHovered) {
          classNames.push(styles.photoCardHovered);
        } else if (isAdjacent) {
          classNames.push(styles.photoCardAdjacent);
        }
        if (leftSide) {
          classNames.push(styles.leftPhotos);
        } else if (rightSide) {
          classNames.push(styles.rightPhotos);
        }
        const className = classNames.join(' ');

        return (
          <Image
            key={photo.id}
            className={className}
            onClick={() => onImageClick(photo.id - 1)}
            onMouseEnter={() => handleMouseEnter(photo.id)}
            onMouseLeave={handleMouseLeave}
            src={photo.src}
            alt={photo.alt}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default PhotoRow;
