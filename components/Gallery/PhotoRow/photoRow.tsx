import styles from "./photoRow.module.css"

type Photo = {
  id: number,
  src: string,
  alt: string,
};

const PhotoRow = ({ photoListChunk, style }: { photoListChunk: Photo[], style: boolean }) => {
  if (style) {
    return (
      <div className={styles.photoGrid} style={{ backgroundColor: "#717882" }}>
        {photoListChunk.map((photo) => (
          <div key={photo.id} className={styles.photoCard}>
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  )
  }
  return (
    <div className={styles.photoGrid}>
      {photoListChunk.map((photo) => (
        <div key={photo.id} className={styles.photoCard}>
        <img src={photo.src} alt={photo.alt} />
      </div>
    ))}
  </div>
  )
}

export default PhotoRow;