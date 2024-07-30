import styles from "./Description.module.css";
import AspaLogo from "../../../public/ASPA Title.png";
import Image from "next/image";

export default function Description() {
    return (
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <h1 className={styles.title}>Welcome to Auckland Student Pool Association!</h1>
            <p>
              Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
            </p>
            <div className={styles.horizontalAligned}>
              <button className={styles.eventsButton}>Current Events</button>
              <p>dolor sit amet, consectetur,</p>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <Image src={AspaLogo} alt="ASPA Logo"
            style={{
              width: '100%',
              height: 'auto',
              marginBottom: '1rem',
            }}
            />
            <div className={styles.buttonContainer}>
              <button className={styles.regButton}>REGISTER</button>
              <button className={styles.logButton}>LOGIN</button>
            </div>
          </div>
        </div>
      );
}
