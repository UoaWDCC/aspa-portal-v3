import styles from "./Registeraccountform.module.css"

export default function Form() {
    return (
        <form className={styles.container}>
            <div className={styles.header}>
                <h1> Please Enter Your Details</h1>
                <p>Note:</p>
                <li>Members receive a 10% discount at Orange Club for their own session</li>
                <li>We host Casual Nights at Orange Pool Club (9 City Road) every Tuesday/Thursday 6:30pm - 8pm.</li>
                <li>Cost: $6 per session.</li>
            </div>

            <div className={styles.content}>
                <div className={styles.input}>
                    <label> First Name: </label>
                    <input type="text" placeholder="Enter Your First Name" name="name" required />
                </div>
                <div className={styles.input}>
                    <label> Last Name: </label>
                    <input type="text" placeholder="Enter Your Last Name" name="name" required />
                </div>
                <div className={styles.input}>
                    <label> University: </label>
                    <input type="text" placeholder="Enter Your Universtity" name="name" required />
                </div>
                <div className={styles.input}>
                    <label> UPI (If you are in UoA): </label>
                    <input type="text" name="name" required />
                </div>
                <div className={styles.input}>
                    <label> Contact Number </label>
                    <input type="tel" placeholder="Enter your phone number" name="name" required />
                </div>

                <div className={styles.skillsection}>
                    <h2>Skill Level:</h2>
                    <div className={styles.radioinputs}>
                        <div className={styles.radioinput}>
                            <label>
                                <input type="radio" name="skill" value="beginner" />
                                <span className={styles.beginner}> Beginner </span>
                                {/* <span className={styles.description}> Never Played or have only played a few times</span> */}
                            </label>
                        </div>

                        <div className={styles.radioinput}>
                            <label>
                                <input type="radio" name="skill" value="intermediate" />
                                <span className={styles.intermediate}> Intermediate </span>
                                {/* <span className={styles.description}> Plays occasionally, more of a social player.</span> */}
                            </label>
                        </div>

                        <div className={styles.radioinput}>
                            <label>
                                <input type="radio" name="skill" value="advanced" />
                                <span className={styles.advanced}> Advanced </span>
                                {/* <span className={styles.description}> Frequent player, most likely have competed in tournaments</span> */}
                            </label>
                        </div>
                    </div>
                </div>

                <div>
                    <label>
                        <input type="radio" name="confirm" value="confirm" />
                        <span className={styles.tc}>I confirm that by signing up I am registering as a member of ASPA</span>
                        {/* <span className={styles.description}> Frequent player, most likely have competed in tournaments</span> */}
                    </label>
                </div>
            </div>

            <div className={styles.button}>
                <button> SAVE </button>
            </div>
        </form>
    )
}
