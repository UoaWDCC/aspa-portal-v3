import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PastEvents from "./components/PastEvents";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.inner}>
        <PastEvents />
      </div>
      <Footer />
    </main>
  );
}
