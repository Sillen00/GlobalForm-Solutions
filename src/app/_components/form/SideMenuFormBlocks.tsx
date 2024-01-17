import { FaGripLines, FaTrashCan } from "react-icons/fa6"

import { useForm } from "../../../contexts/FormContext"
import Button, { IconType } from "../Button"
import styles from "./SideMenuFormBlocks.module.scss"

function SideMenuFormBlocks() {
  const { formData, setFormData, removeFormBlock } = useForm()

  const handleRemoveFormBlock = (index: number) => {
    removeFormBlock(index)
  }

  const moveBlock = () => {
    // Function to move the form block in the form
    console.log("moveBlock")
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <div className={styles.sideMenuFormBlock}>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-title'>Form Title *</label>
        <input
          required
          id='form-title'
          name='title'
          type='text'
          value={formData.title}
          onChange={handleInputChange}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-location'>Form Date *</label>
        <input
          required
          id='form-date'
          name='startDate'
          type='date'
          value={formData.startDate}
          onChange={handleInputChange}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-location'>Form Time *</label>
        <input
          required
          id='form-time'
          name='startTime'
          type='time'
          step='3600'
          value={formData.startTime}
          onChange={handleInputChange}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-date'>Form Location *</label>
        <input
          required
          id='form-date'
          name='location'
          type='text'
          value={formData.location}
          onChange={handleInputChange}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-description'>Form Description *</label>
        <input
          required
          id='form-description'
          name='description'
          type='text'
          value={formData.description}
          onChange={handleInputChange}
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
