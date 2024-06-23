import Image from "next/image";
import styles from '../ui/home.module.css'
import NavLinks from "./NavLinks";

export default function Home() {
  return (
    <div className={styles.shape}>
      Hi
    <Image src='/next.svg' alt="bruh"               
    className="dark:invert"
              width={10}
              height={0}
              priority/>
    <NavLinks/>
    </div>
  );
}
