import { FaGripLines, FaTrashCan } from "react-icons/fa6"

import styles from "./SideMenuFormBlocks.module.scss"

function SideMenuFormBlocks() {
  const removeFormBlock = () => {
    // Function to remove the form block from the form
    console.log("removeFormBlock")
  }

  const moveBlock = () => {
    // Function to move the form block in the form
    // Jag tänkder att vi kan börja med att bara ha funktionaliteten för att flytta ner ett form objekt.
    console.log("moveBlock")
  }

  return (
    <div className={styles.sideMenuFormBlock}>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={removeFormBlock} />
        <label id='form-title'>Form Title</label>
        <input id='form-title' type='text' />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={removeFormBlock} />
        <label id='form-date'>Form Date</label>
        <input id='form-date' type='text' />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={removeFormBlock} />
        <label id='form-description'>Form Description</label>
        <input id='form-description' type='text' />
        <FaGripLines onClick={moveBlock} />
      </div>
    </div>
  )
}

export default SideMenuFormBlocks
