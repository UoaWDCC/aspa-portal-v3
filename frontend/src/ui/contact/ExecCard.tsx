import styles from "./ExecCard.module.css";

// Define Exec type
interface Exec {
  imgUrl: string;
  name: string;
  title: string;
  description: string;
}

export default function ExecCard({ exec }: { exec: Exec }) {
  return (
    <div className={styles.card}>
      <img src={exec.imgUrl} alt={exec.name}/>
      <div className={styles.description}>
        <h1>{exec.name}<br/>{exec.title}</h1>
        <p>{exec.description}</p>
      </div>
    </div>
  );
}