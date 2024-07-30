import styles from './Addeventform.module.css';

export default function AddEventform() {
    
    return (

        <form className={styles.container}>
            <div className={styles.input}> 
              <h1> Event Name: </h1>
              <input type="text" placeholder="" name="name" required />
            </div>

            <div className={styles.content}>
              <div className={styles.input}>
                <label> Event Description: </label>
                <textarea id="eventdesc" name="eventdesc" rows="4" cols="50"></textarea>
                <input type="text" placeholder="" name="name" required />
              </div>

              <div className={styles.input}>
                <label> Event Date and Time: </label>
                <input type="text" placeholder="DD/YY     19:00" name="name" required />
              </div>

              <div className={styles.input}>
                <label> University: </label>
                <input type="text" placeholder="Enter Your Universtity" name="name" required />
              </div>

              <div className={styles.input}>
                <label> Location: </label>
                <input type="text" name="name" required />
              </div>

              <div className={styles.input}>
                <label> Event Price: </label>
                <input type="text" name="name" required />
              </div>

              <div className={styles.input}>
                <label> Add Image(s): </label>
                <input type="file" accept="image/*" multiple name="images" required />
              </div>

              <div className={styles.radioinput}>
                <label> -: </label>
                  <input type="radio" name="skill" value="beginner" />
                  <span>-</span>
              </div>

            </div>
            <div className={styles.button}>
              <button> Preview Event</button>
            </div>
      </form>

    );
}
