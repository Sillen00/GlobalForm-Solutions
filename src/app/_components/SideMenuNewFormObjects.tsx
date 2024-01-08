import styles from "./SideMenuNewFormObjects.module.scss"

function SideMenuNewFormObjects() {
  return (
    <div className={styles.sideMenuNewObjects}>
      <div className={styles.inputBox}>
        <label id='object-title'>Object title (required)</label>
        <input id='object-title' type='text' name='object-title' required />
      </div>

      <div className={styles.blockTypeContainer}>
        <p>Object types:</p>
        <div>
          <p>icon</p>
          <p>Text object</p>
        </div>
      </div>
    </div>
  )
}

export default SideMenuNewFormObjects
