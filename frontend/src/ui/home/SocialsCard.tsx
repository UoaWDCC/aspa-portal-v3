import styles from "./SocialsCard.module.css";

interface Social {
  exec: string;
  execTestimonial: string;
  execTitle: string;
}

export default function SocialsCard({ social }: { social: Social }) {
  return (
    <div className={styles.cardbg}>
      <div className={styles.description}>
        <div>
          <p>{social.execTestimonial}</p>
        </div>
        <div>
          <h1>{social.exec}</h1>
          <h2>{social.execTitle}</h2>
        </div>
      </div>
    </div>
  );
}