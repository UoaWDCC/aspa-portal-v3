import styles from "./Description.module.css";

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
            <img src="/ASPA Title.png" alt="Association Image" className={styles.image}/>
            <div className={styles.buttonContainer}>
              <button className={styles.regButton}>REGISTER</button>
              <button className={styles.logButton}>LOGIN</button>
            </div>
          </div>
        </div>
      );
}
