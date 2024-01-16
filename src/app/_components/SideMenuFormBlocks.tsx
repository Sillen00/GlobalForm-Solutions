import { FaGripLines, FaTrashCan } from "react-icons/fa6"

import { useState } from "react"
import { useForm } from "../(contexts)/FormContext"
import Button, { IconType } from "./Button"
import styles from "./SideMenuFormBlocks.module.scss"

function SideMenuFormBlocks() {
  const { formData, setFormData } = useForm()

  const removeFormBlock = (index: number) => {
    setFormData(prevFormData => {
      const newFormBlocks = prevFormData.formBlocks.filter(
        (_, i) => i !== index
      )
      return { ...prevFormData, formBlocks: newFormBlocks }
    })
  }

  const moveBlock = () => {
    // Function to move the form block in the form
    console.log("moveBlock")
  }

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newFormBlocks = formData.formBlocks.map((block, i) => {
      if (i === index) {
        return { ...block, description: e.target.value }
      }
      return block
    })
    setFormData({ ...formData, formBlocks: newFormBlocks })
  }

  return (
    <div className={styles.sideMenuFormBlock}>
      {formData.formBlocks.map((formBlock, index) => {
        return (
          <div className={styles.formBlock} key={index}>
            <FaTrashCan onClick={() => removeFormBlock(index)} />
            <label id={`form-title-${index}`}>{formBlock.title}</label>
            <input
              id={`form-description-${index}`}
              type='text'
              value={formBlock.description}
              onChange={e => handleDescriptionChange(e, index)}
            />
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
