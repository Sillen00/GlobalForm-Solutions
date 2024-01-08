import styles from "./SideMenuNewFormObjects.module.scss"

function SideMenuNewFormObjects() {
  return (
    <div className={styles.sideMenuNewObjects}>
      <p>Här ska man kunna lägga till nya objekt / inputs.</p>

      <label id="object-title">Object title (required)</label>
      <input id="object-title" type="text" name="object-title" required />

      <p>Object types:</p>

      <div>
        <p>icon</p>
        <p>Text object</p>
      </div>
    </div>
  )
}

export default SideMenuNewFormObjects
