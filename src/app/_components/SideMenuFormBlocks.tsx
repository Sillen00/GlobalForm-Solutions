import { FaGripLines, FaTrashCan } from "react-icons/fa6"

import { useState } from "react"
import { useForm } from "../(contexts)/FormContext"
import Button, { IconType } from "./Button"
import styles from "./SideMenuFormBlocks.module.scss"

function SideMenuFormBlocks() {
  const [title, setTitle] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  const { formData, removeFormBlock, updateFormBlockDescription } = useForm()

  const handleRemoveFormBlock = (index: number) => {
    removeFormBlock(index)
  }

  const moveBlock = () => {
    // Function to move the form block in the form
    console.log("moveBlock")
  }

  const handleFormBlockDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value)
    updateFormBlockDescription(event.target.value)
  }

  return (
    <div className={styles.sideMenuFormBlock}>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-title'>Form Title *</label>
        <input required id='form-title' type='text' />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-location'>Form Location *</label>
        <input required id='form-location' type='text' />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-date'>Form Date *</label>
        <input required id='form-date' type='text' />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-description'>Form Description *</label>
        <input
          required
          id='form-description'
          type='text'
          onChange={handleFormBlockDescription}
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

// function MyComponent() {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <p>{inputValue}</p>
//     </div>
//   );
// }
