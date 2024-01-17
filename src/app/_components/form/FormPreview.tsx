"use client"
import { FaCalendar, FaClock, FaLocationDot } from "react-icons/fa6"
import { useForm, type FormBlock } from "../../../contexts/FormContext"
import styles from "./FormPreview.module.scss"
import FormTextInput from "./form-blocks/FormTextInput"

function FormPreview() {
  const { formData } = useForm()

  function renderFormBlock(formBlock: FormBlock) {
    switch (formBlock.type) {
      case "text":
        return <p>{formBlock.content}</p>
      case "textInput":
        return <FormTextInput />
      default:
        return <p>Could not render form block!</p>
    }
  }

  return (
    <div className={styles.preview__container}>
      <div className={styles.preview__content}>
        {formData ? (
          <>
            <div className={styles.preview__header}>
              <h1 className={styles.preview__title}>{formData.title}</h1>
              <div className={styles.preview__info}>
                <FaCalendar />
                <p>
                  {formData.startDate}
                  {formData.endDate ? ` – ${formData.endDate}` : ""}
                </p>
              </div>
              <div className={styles.preview__info}>
                <FaClock />
                <p>
                  {formData.startTime}
                  {formData.endTime ? ` – ${formData.endTime}` : ""}
                </p>
              </div>
              <div className={styles.preview__info}>
                <FaLocationDot />
                <p>{formData.location}</p>
              </div>
            </div>
            <div className={styles.preview__block__container}>
              <h2 className={styles.preview__block__title}>Description</h2>
              <p>{formData.description}</p>
            </div>
            {formData.formBlocks.map(formBlock => {
              return (
                <div
                  key={formBlock.order}
                  className={styles.preview__block__container}
                >
                  <h2 className={styles.preview__block__title}>
                    {formBlock.title}
                  </h2>
                  {renderFormBlock(formBlock)}
                </div>
              )
            })}
          </>
        ) : (
          <h1>Could not load form preview!</h1>
        )}
      </div>
    </div>
  )
}

export default FormPreview
