import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={"https://cdn.vectorstock.com/i/500p/98/35/8-ball-billiards-pool-cue-black-snooker-vector-43849835.jpg"} alt="ASPA Logo" className={styles.logo} />
      {/* this is a comment */}
    </div>
  );
}