import styles from "./photoRow.module.css";

type Photo = {
  id: number,
  src: String,
  alt: String,
}

type Details = { 
  year: number
  month: string
  day: number
  location?: string
  description: string
}

type Event = {
  title: string,
  details: Details,
  photos: Photo[]
}
const PhotoRow = ({ event }: { event: Event }) => {
  return (
    <div className={styles.photoGrid}>
    {event.photos.map((photo) => (
        <div key={photo.id} className={styles.photoCard}>
        <img src={photo.src as string} alt={photo.alt as string} />
        </div>
    ))}
    </div>
  )
}
export default PhotoRow