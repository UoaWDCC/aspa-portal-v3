import styles from "../ui/Footer.module.css";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.horicontainer}>
        <div className={styles.vertcontainer}>
          <h1 className={styles.h1}>About Us</h1>
          <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className={styles.vertcontainer}>
          <div className={styles.othercontainer}>
            <h2 className={styles.link}>
              Talk To Us
            </h2>
            <h2 className={styles.link}>
              Events
            </h2>
          </div>
          <div className={styles.socialmedia}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png"
              className={styles.image}
              alt="discord icon"
            />
            <img
              src="https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png"
              className={styles.image}
              alt="linkedin icon"
            />
            <img
              src="https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png"
              className={styles.image}
              alt="instagram icon"
            />
            <img
              src="https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png"
              className={styles.image}
              alt="facebook icon"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
