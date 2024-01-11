import Button, { IconType } from "../../../_components/Button"
import styles from "./page.module.scss"

function careerPage() {
  return (
    <div className={styles.careerContainer}>
      <h1>CAREER</h1>

      <div className={styles.section}>
        <div>
          <h2>Php developer</h2>
          <span>
            Last day to apply: <i>2023-10-25</i>
          </span>
        </div>
        <span>
          Your main task will be to develop our platform and to make sure that
          our customers have the best experience possible. You will be working
          with a team of developers and designers. We are looking for someone
          who is passionate about programming.
        </span>
        <div className={styles.buttonContainer}>
          <Button icon={IconType.Right}>Apply</Button>
        </div>
      </div>
      <div className={styles.section}>
        <div>
          <h2>UX Designer</h2>
          <span>
            Last day to apply: <i>2023-10-25</i>
          </span>
        </div>
        <span>
          You love to create beautiful and functional designs. You will be
          working with a team of developers and designers. We are looking for
          you who eat, sleep and breathe design. Show us that you are the one!
        </span>
        <div className={styles.buttonContainer}>
          <Button icon={IconType.Right}>Apply</Button>
        </div>
      </div>
      <div className={styles.section}>
        <div>
          <h2>Product owner</h2>
          <span>
            Last day to apply: <i>2023-10-25</i>
          </span>
        </div>
        <span>
          We're working agile with scrum and we're looking for someone who can
          take the role as product owner. Your main task are to make sure that
          the team is working towards the right goal and that the team is
          working as efficient as possible. We are prefiring someone with
          experience from working with agile teams.
        </span>
        <div className={styles.buttonContainer}>
          <Button icon={IconType.Right}>Apply</Button>
        </div>
      </div>
    </div>
  )
}
export default careerPage
