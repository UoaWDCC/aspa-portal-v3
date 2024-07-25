import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.valueContainer}>
                        <h1>Eleanor Pena</h1>
                        <button className={styles.editButton}></button>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.input}>
                        <label>University:</label>
                        <div className={styles.valueContainer}>
                            <span>University of Auckland</span>
                            <button className={styles.editButton}></button>
                        </div>
                    </div>
                    <div className={styles.input}>
                        <label>UPI:</label>
                        <div className={styles.valueContainer}>
                            <span>ABCD123</span>
                            <button className={styles.editButton}></button>
                        </div>
                    </div>
                    <div className={styles.input}>
                        <label>Contact Number:</label>
                        <div className={styles.valueContainer}>
                            <span>012 345 6789</span>
                            <button className={styles.editButton}></button>
                        </div>
                    </div>
                    <div className={styles.input}>
                        <label>Skill Level:</label>
                        <div className={styles.valueContainer}>
                            <span>Intermediate</span>
                            <button className={styles.editButton}></button>
                        </div>
                    </div>
                </div>
                <button className={styles.logoutButton}>Log Out</button>
            </div>
        </div>
    );
}
