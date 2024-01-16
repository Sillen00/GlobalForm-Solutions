"use client"
import { useForm } from "../(contexts)/FormContext"
import styles from "./FormPreview.module.scss"

function FormPreview() {
  const { formData } = useForm()

  return (
    <div className={styles.preview__container}>
      <div className={styles.preview__content}>
        {formData ? (
          <>
            <div className={styles.preview__header}>
              <h1 className={styles.preview__title}>{formData.title}</h1>
              <p>
                {formData.startDate} {formData.startTime}
              </p>
              <p>{formData.location}</p>
            </div>
            <h2 className={styles.preview__block__title}>Description</h2>
            <p>{formData.description}</p>
            <p>
              {formData.formBlocks.map(formBlock => {
                return (
                  <div>
                    <p>{formBlock.title}</p>
                    <p>{formBlock.type}</p>
                    {/* <p>{formBlock.description}</p> */}
                    {/* <p>{formBlock.required}</p> */}
                    {/* <p>{formBlock.placeholderText}</p> */}
                    {/* <p>{formBlock.options}</p> */}
                  </div>
                )
              })}
            </p>
          </>
        ) : (
          <h1>Could not load form preview!</h1>
        )}
      </div>
    </div>
  )
}

export default FormPreview
