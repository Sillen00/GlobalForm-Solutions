// "use client"
import { useRouter } from "next/navigation"
import { FaGripLines, FaTrashCan } from "react-icons/fa6"
import { LuFormInput } from "react-icons/lu"
import { TbLetterT } from "react-icons/tb"
import { api } from "~/trpc/react"
import { defaultFormData, useForm } from "../../../contexts/FormContext"
import Button, { IconType } from "../Button"
import styles from "./SideMenuFormBlocks.module.scss"

function SideMenuFormBlocks() {
  const { formData, setFormData, removeFormBlock } = useForm()
  const router = useRouter()
  const todaysDate = new Date().toISOString().slice(0, 10)

  const handleRemoveFormBlock = (index: number) => {
    removeFormBlock(index)
  }

  const moveBlock = () => {
    // Function to move the form block in the form
    console.log("moveBlock")
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const requiredFields: Array<keyof typeof formData> = [
    "title",
    "startDate",
    "startTime",
    "description",
  ]
  const isFormValid = requiredFields.every(field => formData[field])

  const { mutate } = api.form.createForm.useMutation()

  const generateForm = () => {
    if (isFormValid) {
      // If all required fields are filled, proceed to form generation
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
      mutate(formData as any)
      router.push("/create-form/success")
      setFormData(defaultFormData)
    } else {
      // If any required field is not filled, show an alert or handle it as needed
      alert("Please fill in all required fields before generating the form.")
    }
  }

  return (
    <div className={styles.sideMenuFormBlock}>
      {/* Required blocks */}
      <h2 className={styles.sideMenuHeading}>
        Required blocks
        <hr className={styles.sideMenuDivider}></hr>
      </h2>
      <div className={styles.requiredFormBlocks}>
        <label id='form-title'>
          Form Title <span>*</span>
        </label>
        <input
          required
          id='form-title'
          placeholder='Write your form title here'
          name='title'
          type='text'
          value={formData.title}
          onChange={handleInputChange}
        />
        <label id='form-date'>
          Form Date <span>*</span>
        </label>
        <input
          required
          id='form-date'
          placeholder="Write your form's start date here"
          name='startDate'
          type='date'
          min={todaysDate}
          max='2099-12-31'
          value={formData.startDate}
          onChange={handleInputChange}
        />
        <label id='form-time'>
          Form Time <span>*</span>
        </label>
        <input
          required
          id='form-time'
          placeholder="Write your form's start time here"
          name='startTime'
          type='time'
          value={formData.startTime}
          onChange={handleInputChange}
        />
        <label id='form-location'>Form Location</label>
        <input
          required
          id='form-location'
          placeholder="Write your form's location here"
          name='location'
          type='text'
          value={formData.location}
          onChange={handleInputChange}
        />
        <label id='form-description'>
          Form Description <span>*</span>
        </label>
        <textarea
          required
          id='form-description'
          placeholder="Write your form's description here"
          name='description'
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>

      {/* Added blocks */}
      <h2 className={styles.sideMenuHeading}>
        Added blocks <hr className={styles.sideMenuDivider}></hr>
      </h2>
      {formData.formBlocks.map((formBlock, index) => {
        switch (formBlock.type as "text" | "textInput") {
          case "text":
            return (
              <div className={styles.formBlock} key={index}>
                <TbLetterT className={styles.typeIcon} />
                <FaTrashCan
                  color='red'
                  className={styles.trashIcon}
                  onClick={() => handleRemoveFormBlock(index)}
                />
                <div className={styles.formTextBlock}>
                  <p className={styles.formBlockTitle}>
                    {formBlock.title ? formBlock.title : "Untitled block"}
                  </p>
                  <p>{formBlock.content}</p>
                </div>
                <FaGripLines className={styles.gripIcon} onClick={moveBlock} />
              </div>
            )
          case "textInput":
            return (
              <div className={styles.formBlock} key={index}>
                <LuFormInput className={styles.typeIcon} />
                <FaTrashCan
                  color='red'
                  className={styles.trashIcon}
                  onClick={() => handleRemoveFormBlock(index)}
                />
                <div className={styles.formTextBlock}>
                  <p className={styles.formBlockTitle}>
                    {formBlock.title ? formBlock.title : "Untitled block"}
                  </p>
                </div>
                <FaGripLines className={styles.gripIcon} onClick={moveBlock} />
              </div>
            )
          default:
            return (
              <p>Error: block has unknown type and could not be rendered</p>
            )
        }
      })}

      {formData.formBlocks.length > 0 && (
        <div className={styles.iconContainer}>
          <Button icon={IconType.Save} onClick={generateForm}>
            Generate Form
          </Button>
        </div>
      )}
    </div>
  )
}

export default SideMenuFormBlocks
