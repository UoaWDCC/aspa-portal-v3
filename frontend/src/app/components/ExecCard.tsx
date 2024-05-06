import styles from "./ExecCard.module.css";

interface Exec {
  imgUrl: string;
  name: string;
  title: string;
  description: string;
}

export default function ExecCard({ exec }: { exec: Exec }) {
  return (
    <div className={styles.card}>
      <img src={exec.imgUrl} alt={exec.name} />
      <h1>{exec.name} - {exec.title}</h1>
      <p>{exec.description}</p>
    </div>
  );
}