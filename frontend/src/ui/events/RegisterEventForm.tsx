import styles from './Registereventform.module.css';

export default function Eventform() {
    
    return (

        <form className={styles.container}>
            <div className={styles.header}> 
              <h1> Register</h1>
              <p> Note: Register an account if you haven't done so and log in before registering for an event to save your details in the future</p>          
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

              <div className={styles.radioinput}>
                <label> Payment Method: </label>
                  <input type="radio" name="skill" value="beginner" />
                  <span>I will be paying cash at the Entry :)</span>
              </div>

            </div>
            <div className={styles.button}>
              <button>REGISTER & PAY</button>
            </div>
      </form>

    );
}
