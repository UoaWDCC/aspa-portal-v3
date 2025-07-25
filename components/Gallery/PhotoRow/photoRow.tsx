import styles from "./photoRow.module.css"
import { Image, SimpleGrid } from "@mantine/core"

type Photo = {
  id: number,
  src: string,
  alt: string,
};

const PhotoRow = ({ photoListChunk, style, onImageClick }: { photoListChunk: Photo[], style: boolean , onImageClick: (key: number) => void }) => {
  const backgroundColor = style ? "#717882" : "transparent";
  return (
    <SimpleGrid spacing="xs" className={styles.photoGrid} style={{ backgroundColor }}>
      {photoListChunk.map((photo) => (
        <Image key={photo.id} className={styles.photoCard} onClick={() => onImageClick(photo.id - 1)} src={photo.src} alt={photo.alt} />
      ))}
    </SimpleGrid>
  )
}

export default PhotoRow;