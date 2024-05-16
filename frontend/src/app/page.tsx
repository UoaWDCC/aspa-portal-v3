import styles from "./page.module.css";
import Header from "./components/Header";
import PastEvents from "./components/PastEvents";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.body}>
        <PastEvents />
      </div>
    </main>
  );
}
