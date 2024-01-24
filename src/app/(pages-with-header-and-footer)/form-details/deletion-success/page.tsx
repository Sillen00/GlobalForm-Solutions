import Link from "next/link"
import styles from "./page.module.scss"

export default function page() {
  return (
    <>
      <title>You successfully delete a form! - GlobalForm Solutions</title>
      <div className={styles.container}>
        <h1 className={styles.title}>Form successfully deleted!</h1>
        <p>
          Go back to your{" "}
          <Link className={styles.link} href={"/dashboard"}>
            dashboard
          </Link>{" "}
          to view your forms.
        </p>
      </div>
    </>
  )
}
