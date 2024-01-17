import { FaGripLines, FaTrashCan } from "react-icons/fa6"

import { useState } from "react"
import { useForm } from "../../../contexts/FormContext"
import Button, { IconType } from "../Button"
import styles from "./SideMenuFormBlocks.module.scss"

function SideMenuFormBlocks() {
  const [title, setTitle] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [startTime, setStartTime] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  const {
    formData,
    removeFormBlock,
    updateFormTitle,
    updateFormStartTime,
    updateFormDate,
    updateFormLocation,
    updateFormDescription,
  } = useForm()

  const handleRemoveFormBlock = (index: number) => {
    removeFormBlock(index)
  }

  const moveBlock = () => {
    // Function to move the form block in the form
    console.log("moveBlock")
  }
  // Sets the title of the form block
  const handleFormTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
    updateFormTitle(event.target.value)
  }
  // Sets the date of the form block
  const handleFormDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
    updateFormDate(event.target.value)
  }
  // Sets the time of the form block
  const handleFormTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(event.target.value)
    updateFormStartTime(event.target.value)
  }
  // Sets the location of the form block
  const handleFormLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
    updateFormLocation(event.target.value)
  }
  // Sets the description of the form block
  const handleFormDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value)
    updateFormDescription(event.target.value)
  }

  return (
    <div className={styles.sideMenuFormBlock}>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-title'>Form Title *</label>
        <input
          required
          id='form-title'
          type='text'
          onChange={handleFormTitle}
          value={title}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-location'>Form Date *</label>
        <input
          required
          id='form-date'
          type='text'
          onChange={handleFormDate}
          value={date}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-location'>Form Time *</label>
        <input
          required
          id='form-time'
          type='text'
          onChange={handleFormTime}
          value={startTime}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-date'>Form Location *</label>
        <input
          required
          id='form-date'
          type='text'
          value={location}
          onChange={handleFormLocation}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-description'>Form Description *</label>
        <input
          required
          id='form-description'
          type='text'
          onChange={handleFormDescription}
          value={description}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <br />
      <br />

      {formData.formBlocks.map((formBlock, index) => {
        return (
          <div className={styles.formBlock} key={index}>
            <FaTrashCan onClick={() => handleRemoveFormBlock(index)} />
            <p>
              {formBlock.type} - {formBlock.title}
            </p>
            <FaGripLines onClick={moveBlock} />
          </div>
        )
      })}

      {formData.formBlocks.length > 0 && (
        <div className={styles.iconContainer}>
          <Button icon={IconType.Save}>Generate Form</Button>
        </div>
      )}
    </div>
  )
}

export default SideMenuFormBlocks
