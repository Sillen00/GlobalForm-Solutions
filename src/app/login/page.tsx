import { SignIn } from "@clerk/nextjs"
import styles from "./page.module.scss"

function LoginPage() {
  return (
    <>
      <title>Login - GlobalForm Solutions</title>
      <div className={styles.signInContainer}>
        <SignIn />
      </div>
    </>
  )
}

export default LoginPage
