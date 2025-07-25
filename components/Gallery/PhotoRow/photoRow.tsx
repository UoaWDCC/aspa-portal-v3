import styles from "./photoRow.module.css"
import { Image } from "@mantine/core"

type Photo = {
  id: number,
  src: string,
  alt: string,
};

const PhotoRow = ({ photoListChunk, style, onImageClick }: { photoListChunk: Photo[], style: boolean , onImageClick: (key: number) => void }) => {
  if (style) {
    return (
      <div className={styles.photoGrid} style={{ backgroundColor: "#717882" }}>
        {photoListChunk.map((photo) => (
          <Image key={photo.id} className={styles.photoCard} onClick={() => onImageClick(photo.id - 1)} src={photo.src} alt={photo.alt} />
        ))}
      </div>
  )
  }
  return (
    <div className={styles.photoGrid}>
      {photoListChunk.map((photo) => (
        <Image key={photo.id} className={styles.photoCard} onClick={() => onImageClick(photo.id - 1)} src={photo.src} alt={photo.alt} />
      ))}
  </div>
  )
}

export default PhotoRow;