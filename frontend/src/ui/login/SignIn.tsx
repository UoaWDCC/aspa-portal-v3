import { signIn } from "../../../authentication/auth";
import styles from './SignIn.module.css';


export default function SignIn() {

  return (
  
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>
          LOGIN
        </h1>
        <button type="submit" className={styles.button}>
          <img src="/google-icon-PNG.png" alt="Google Icon" className={styles.icon} />
          <h1 className={styles.subtitle}>
            Login
          </h1>
        </button>
        <button type="submit" className={styles.registerButton}>
          <h1 className={styles.subtitle}>
            Register
          </h1>
        </button>        
      </div>  
    </form>
  )
}