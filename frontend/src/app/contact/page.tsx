import Image from "next/image";
import styles from '../../ui/home.module.css'

export default function Contact() {
  return (
    <div className={styles.shape}>
      bruh
    <Image src='/next.svg' alt="bruh"               
    className="dark:invert"
              width={10}
              height={0}
              priority/>
    </div>
  );
}
