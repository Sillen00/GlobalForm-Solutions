import styles from "./page.module.scss"
import Link from "next/link"

export default function page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Form successfully created!</h1>
      <p>
        Go back to your{" "}
        <Link className={styles.link} href={"/dashboard"}>
          dashboard
        </Link>{" "}
        to view your forms.
      </p>
    </div>
  )
}
