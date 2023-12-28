import { SignIn } from "@clerk/nextjs"
import React from "react"
import styles from "./page.module.scss"

function LoginPage() {
  return (
    <div className={styles.signInContainer}>
      <SignIn />
    </div>
  )
}

export default LoginPage
