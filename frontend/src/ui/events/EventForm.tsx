import styles from './Eventform.module.css';

export default function Eventform() {
    
    return (
        <div className={styles.container}>
        <form>
        <h1 className={styles.formtitle}> Please Enter Your Details </h1>
          <p> Note: Members receive a 10% discount orange club for their own session. If you register through this page, you’re registering as a guest instead of a member press the Register/Login button at the top right of this page to become a member. </p>          
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
              <label> Payment Method: </label>
              <label>
                <input type="radio" name="skill" value="beginner" />
                I will be paying cash at the Entry :)
                <span className={styles.description}> </span>
              </label>
            </div>
            <div>

            </div> 


          
          </div>
          <div className={styles.button}>
            <button> Register & Pay </button>
          </div>
          

    </form>
    </div>
    );
}
