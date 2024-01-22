"use client"
import { useState } from "react"
import { FaCalendar, FaClock, FaLocationDot } from "react-icons/fa6"
import { api } from "~/trpc/react"
import type { FormBlock, FormData } from "../../../contexts/FormContext"
import styles from "./FormView.module.scss"
import FormTextInput from "./form-view-blocks/FormTextInput"

function FormView({ formData }: { formData: FormData }) {
  const [inputValues, setInputValues] = useState({})
  const submitResponse = api.form.addResponse.useMutation()

  function renderFormBlock(formBlock: FormBlock) {
    switch (formBlock.type as "text" | "textInput") {
      case "text":
        return <p>{formBlock.content}</p>
      case "textInput":
        return (
          <FormTextInput
            title={formBlock.title!}
            onChange={handleInputChange}
          />
        )
      default:
        return <p>Could not render form block!</p>
    }
  }

  const handleInputChange = (title: string, value: string) => {
    setInputValues(prevValues => ({ ...prevValues, [title]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    submitResponse.mutate({
      formId: formData.id!,
      answers: inputValues,
    })
    console.log("Form data: ", inputValues)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form__container}>
      <div className={styles.form__content}>
        {formData ? (
          <>
            <div className={styles.form__header}>
              <h1 className={styles.form__title}>
                {formData.title ? (
                  formData.title
                ) : (
                  <span style={{ color: "#999999" }}>New form</span>
                )}
              </h1>
              <div className={styles.form__info}>
                <FaCalendar />
                <p>
                  {formData.startDate ? formData.startDate : "Unknown"}
                  {formData.endDate ? ` – ${formData.endDate}` : ""}
                </p>
              </div>
              <div className={styles.form__info}>
                <FaClock />
                <p>
                  {formData.startTime ? formData.startTime : "Unknown"}
                  {formData.endTime ? ` – ${formData.endTime}` : ""}
                </p>
              </div>
              <div className={styles.form__info}>
                <FaLocationDot />
                <p>{formData.location ? formData.location : "Unknown"}</p>
              </div>
            </div>
            <div className={styles.form__block__container}>
              <h2 className={styles.form__block__title}>Description</h2>
              <p>
                {formData.description
                  ? formData.description
                  : "No description of the event has been given."}
              </p>
            </div>
            {formData.formBlocks.map((formBlock, index) => {
              return (
                <div key={index} className={styles.form__block__container}>
                  <h2 className={styles.form__block__title}>
                    {formBlock.title}
                  </h2>
                  {renderFormBlock(formBlock)}
                </div>
              )
            })}
            <button className={styles.form__submit__button} type='submit'>
              Submit
            </button>
          </>
        ) : (
          <h1>Could not load form!</h1>
        )}
      </div>
    </form>
  )
}

export default FormView
