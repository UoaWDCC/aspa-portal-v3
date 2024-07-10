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
      <div className="{}">
        <button type="submit" className={styles.button}>
          <img src="/google-icon-PNG.png" alt="Google Icon" className={styles.icon} />
          Login
        </button>
      </div>  
    </form>
  )
}
