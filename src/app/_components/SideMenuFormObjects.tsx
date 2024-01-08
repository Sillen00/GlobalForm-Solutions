import { FaGripLines, FaTrashCan } from "react-icons/fa6"

import styles from "./SideMenuFormObjects.module.scss"

function SideMenuFormObjects() {
  return (
    <div className={styles.sideMenuFormObjects}>
      <div className={styles.formObject}>
        <FaTrashCan />
        <label id='form-title'>Form Title</label>
        <input id='form-title' type='text' />
        <FaGripLines />
      </div>
    </div>
  )
}

export default SideMenuFormObjects
