import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.leftcontainer}>
          <h1 className={styles.h1}>About Us</h1>
          <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className={styles.rightcontainer}>
          <div>
            <Link href='/contact'><h1 className={styles.h1}>Talk To Us</h1></Link>
            <Link href='/events'><h1 className={styles.h1}>Events</h1></Link>
          </div>
          <div className={styles.socialmedia}>
            <Image src='/discord.svg' width={60} height={60} alt="discord logo"/>
            <Image src='/discord.svg' width={60} height={60} alt="discord logo"/>
            <Image src='/discord.svg' width={60} height={60} alt="discord logo"/>
            <Image src='/discord.svg' width={60} height={60} alt="discord logo"/>
          </div>
        </div>
    </footer>
  );
}
