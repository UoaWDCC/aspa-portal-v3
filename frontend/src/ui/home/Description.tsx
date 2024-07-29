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
            <img src="path/to/your/image.jpg" alt="Association Image" className={styles.image}/>
            <div className={styles.buttonContainer}>
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
        </div>
      );
}
