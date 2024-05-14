import styles from "./Form.module.css"

export default function Form() {
    return (
        <>
            <div className={styles.container}>

                <form>

                    <h1 className={styles.formtitle}> Please Enter Your Details </h1>
                    <p className={styles.formattext}> Note: </p>
                    <li className={styles.formattext}> Members receive a 10% discount at Orange Club for their own session </li>
                    <li className={styles.formattext}> We host Casual Nights at Orange Pool Club (9 City Road) every Tuesday/Thursday 6:30pm - 8pm. Cost: $6 per session. </li>

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

                        <div className={styles.input2}>
                            <label> Skill Level: </label>
                            <label>
                                <input type="radio" name="skill" value="beginner" />
                                Beginner
                                <span className={styles.description}> Never Played or have only played a few times</span>
                            </label>
                        </div>

                        <div className={styles.input2}>
                            <label>
                                <input type="radio" name="skill" value="beginner" />
                                Intermediate
                                <span className={styles.description}> Plays occasionaly, more of a social player.</span>
                            </label>
                        </div>

                        <div className={styles.input2}>
                            <label>
                                <input type="radio" name="skill" value="beginner" />
                                Advanced
                                <span className={styles.description}> Frequent player, most likely have competed in tournaments</span>
                            </label>
                        </div>


                    </div>




                    <div className={styles.button}>
                        <button> SAVE </button>
                    </div>

                </form>

            </div>
        </>
    )
}