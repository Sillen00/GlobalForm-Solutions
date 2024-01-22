"use client"
import { FaCalendar, FaClock, FaLocationDot } from "react-icons/fa6"
import type { FormBlock, FormData } from "../../../contexts/FormContext"
import styles from "./FormPreview.module.scss"
import FormTextInput from "./form-view-blocks/FormTextInput"

function FormView({ formData }: { formData: FormData }) {
  console.log("formData: ", formData)
  function renderFormBlock(formBlock: FormBlock) {
    switch (formBlock.type as "text" | "textInput") {
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
              <h1 className={styles.preview__title}>
                {formData.title ? (
                  formData.title
                ) : (
                  <span style={{ color: "#999999" }}>New form</span>
                )}
              </h1>
              <div className={styles.preview__info}>
                <FaCalendar />
                <p>
                  {formData.startDate ? formData.startDate : "Unknown"}
                  {formData.endDate ? ` – ${formData.endDate}` : ""}
                </p>
              </div>
              <div className={styles.preview__info}>
                <FaClock />
                <p>
                  {formData.startTime ? formData.startTime : "Unknown"}
                  {formData.endTime ? ` – ${formData.endTime}` : ""}
                </p>
              </div>
              <div className={styles.preview__info}>
                <FaLocationDot />
                <p>{formData.location ? formData.location : "Unknown"}</p>
              </div>
            </div>
            <div className={styles.preview__block__container}>
              <h2 className={styles.preview__block__title}>Description</h2>
              <p>
                {formData.description
                  ? formData.description
                  : "No description of the event has been given."}
              </p>
            </div>
            {formData.formBlocks.map((formBlock, index) => {
              return (
                <div key={index} className={styles.preview__block__container}>
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

export default FormView
