import styles from "./photoRow.module.css"

type Photo = {
  id: number,
  src: string,
  alt: string,
};

const PhotoRow = ({ photoListChunk }: { photoListChunk: Photo[] }) => {

  return (
    <div className={styles.photoGrid}>
      {photoListChunk.map((photo) => (
        <div key={photo.id} className={styles.photoCard}>
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default PhotoRow;