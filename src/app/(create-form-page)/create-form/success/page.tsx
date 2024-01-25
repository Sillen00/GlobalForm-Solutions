import Link from "next/link"
import styles from "./page.module.scss"

function CreateFormSuccess() {
  return (
    <>
      <title>You successfully created a form! - GlobalForm Solutions</title>
      <div className={styles.container}>
        <h2 className={styles.title}>Form successfully created!</h2>
        <p>
          Go back to your
          <Link className={styles.link} href={"/dashboard"}>
            dashboard
          </Link>
          to view your forms.
        </p>
      </div>
    </>
  )
}

export default CreateFormSuccess
