import styles from "./page.module.scss"

const dashboardMetadata = {
  title: "News - GlobalForm Solutions",
}

function newsPage() {
  return (
    <>
      <title>{dashboardMetadata.title}</title>
      <div className={styles.pressContainer}>
        <h1>News</h1>
        <div className={styles.section}>
          <div>
            <h2>NEW FEATURE</h2>
            <span>
              <i>2023-11-25</i>
            </span>
          </div>
          <span>
            Today we are exited to announce that we have a new feature. You can
            now create your own custom form. You can choose from a wide range of
            templates and customize them to your needs. You can also create your
            own template from scratch. We are looking forward to see what you
            will create.
          </span>
        </div>
        <div className={styles.section}>
          <div>
            <h2>DATA SUMMARY</h2>
            <span>
              <i>2023-07-13</i>
            </span>
          </div>
          <span>
            Now you can see a summary of your data. You can see how many people
            total have answered your form and how many people have answered
            each. This will help you to orginize your data and make it easier to
            understand.
          </span>
        </div>
        <div className={styles.section}>
          <div>
            <h2>DASHBOARD UI UPDATE</h2>
            <span>
              <i>2023-02-01</i>
            </span>
          </div>
          <span>
            The dashboard has had an overhaul in the UI department. We have
            redesigned the dashboard to make it easier to use and more
            intuitive. We hope you like it. Feel free to give us feedback on the
            new design.
          </span>
        </div>
        <div className={styles.section}>
          <div>
            <h2>FORMVIEWER INCREASED READABILITY</h2>
            <span>
              <i>2023-01-29</i>
            </span>
          </div>
          <span>
            After feedback from our users we have decided to increase the
            readability of the formviewer. We have increased the font size and
            changed the font to a more readable font. We hope you like the new
            changes.
          </span>
        </div>
        <div className={styles.section}>
          <div>
            <h2>ACCOUNT CREATION ENABLED</h2>
            <span>
              <i>2023-07-13</i>
            </span>
          </div>
          <span>
            Now you're not requied to have an google account to sign in. You can
            now create an account with your email and password of choice. This
            will make it easier for you to sign in and use our service.
          </span>
        </div>
      </div>
    </>
  )
}

export default newsPage
