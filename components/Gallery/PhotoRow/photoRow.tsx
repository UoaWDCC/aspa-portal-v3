import styles from "./photoRow.module.css"
import { Image, SimpleGrid } from "@mantine/core"
import React, { useState } from 'react';

type Photo = {
  id: number,
  src: string,
  alt: string,
};

const PhotoRow = ({ photoListChunk, style, onImageClick }: { photoListChunk: Photo[], style: boolean , onImageClick: (key: number) => void }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => setHoveredId(id);
  const handleMouseLeave = () => setHoveredId(null);

  const backgroundColor = style ? "#717882" : "transparent";
  return (
    <SimpleGrid data-testid="photoGrid" spacing="xs" className={styles.photoGrid} style={{ backgroundColor }}>
      {photoListChunk.map((photo) => {
        const isAdjacent = hoveredId !== null && (photo.id === hoveredId - 1 || photo.id === hoveredId + 1);
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
            onClick={() => onImageClick(photo.id-1)}
            onMouseEnter={() => handleMouseEnter(photo.id)}
            onMouseLeave={handleMouseLeave}
            src={photo.src} 
            alt={photo.alt} 
          />
        );
      })}
    </SimpleGrid>
  )
}

export default PhotoRow;