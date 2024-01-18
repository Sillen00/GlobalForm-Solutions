import { FaGripLines, FaTrashCan } from "react-icons/fa6"

import { useUser } from "@clerk/nextjs"
import { api } from "~/trpc/server"
import { useForm } from "../../../contexts/FormContext"
import Button, { IconType } from "../Button"
import styles from "./SideMenuFormBlocks.module.scss"

function SideMenuFormBlocks() {
  const { formData, setFormData, removeFormBlock } = useForm()

  const user = useUser()

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

  const generateForm = async () => {
    try {
      // Use the trpc method to call the createForm endpoint
      if (!user?.user?.id) throw new Error("User is not logged in")

      const result = await api.form.createForm.mutate({
        input: {
          userId: user?.user?.id, // Make sure formData.userId is correct
          title: formData.title,
          startDate: formData.startDate,
          endDate: formData.endDate,
          startTime: formData.startTime,
          endTime: formData.endTime,
          location: formData.location,
          description: formData.description,
          blocks: formData.formBlocks.map(block => ({
            type: block.type,
            title: block.title ?? "", // Add default value or adjust as needed
            content: block.content ?? "", // Add default value or adjust as needed
            // Include other properties from formBlockSchema as needed
            order: block.order,
            required: block.required ?? false, // Add default value or adjust as needed
            placeholderText: block.placeholderText ?? "", // Add default value or adjust as needed
            options: block.options ?? [], // Add default value or adjust as needed
          })),
        },
      })

      // Handle the result as needed
      console.log("Form created successfully:", result)
    } catch (error) {
      // Handle errors
      console.error("Error:", error)
    }
  }

  return (
    <div className={styles.sideMenuFormBlock}>
      <h2 className={styles.sideMenuHeading}>Required blocks</h2>
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

      <h2 className={styles.sideMenuHeading}>Added blocks</h2>
      {formData.formBlocks.map((formBlock, index) => {
        return (
          <div className={styles.formBlock} key={index}>
            <FaTrashCan onClick={() => handleRemoveFormBlock(index)} />
            <p>
              {formBlock.type} - {`${formBlock.title} ${formBlock.content}`}
            </p>
            <FaGripLines onClick={moveBlock} />
          </div>
        )
      })}

      {formData.formBlocks.length > 0 && (
        <div className={styles.iconContainer}>
          <Button icon={IconType.Save} onClick={() => generateForm()}>
            Generate Form
          </Button>
        </div>
      )}
    </div>
  )
}

export default SideMenuFormBlocks
