import Image from "next/image";
import styles from '../../ui/home.module.css'

export default function Home() {
  return (
    <div className={styles.shape}>
      bye
    <Image src='/next.svg' alt="bruh"               
    className="dark:invert"
              width={10}
              height={0}
              priority/>
    </div>
  );
}
