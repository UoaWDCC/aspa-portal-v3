import styles from '../index.module.css';

export default function Feedback() {
    
    return (
        <div className="bg-slate-100 rounded-xl">
        <form>
        <h1 className={styles.formtitle}> Please Enter Your Details </h1>
          <p> Note: </p>
          <li> Members receive a 10% discount at Orange Club for their own session </li>
          <li> We host Casual Nights at Orange Pool Club (9 City Road) every Tuesday/Thursday 6:30pm - 8pm. Cost: $6 per session. </li>
          <div className={styles.content}>
          </div>
          <div className={styles.button}>
            <button> SAVE </button>
          </div>

    </form>
    </div>
    );
}
