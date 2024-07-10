import { signIn } from "../../../authentication/auth";
import '../globals.css';


export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">
        Login
        <img src="/components/google-icon-PNG.png" alt="Google Icon" className="icon" />
      </button>
    </form>
  )
} 
