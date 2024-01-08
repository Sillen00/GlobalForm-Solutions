import { FaGripLines, FaTrashCan } from "react-icons/fa6"

import styles from "./SideMenuFormObjects.module.scss"

function SideMenuFormObjects() {
  const removeFormObject = () => {
    // Function to remove the form object from the form
    console.log("removeFormObject")
  }

  const moveObject = () => {
    // Function to move the form object in the form
    // Jag tänkder att vi kan börja med att bara ha funktionaliteten för att flytta ner ett form objekt.
    console.log("moveObject")
  }

  return (
    <div className={styles.sideMenuFormObjects}>
      <div className={styles.formObject}>
        <FaTrashCan onClick={removeFormObject} />
        <label id='form-title'>Form Title</label>
        <input id='form-title' type='text' />
        <FaGripLines onClick={moveObject} />
      </div>
      <div className={styles.formObject}>
        <FaTrashCan onClick={removeFormObject} />
        <label id='form-date'>Form Date</label>
        <input id='form-date' type='text' />
        <FaGripLines onClick={moveObject} />
      </div>
      <div className={styles.formObject}>
        <FaTrashCan onClick={removeFormObject} />
        <label id='form-description'>Form Description</label>
        <input id='form-description' type='text' />
        <FaGripLines onClick={moveObject} />
      </div>
    </div>
  )
}

export default SideMenuFormObjects
