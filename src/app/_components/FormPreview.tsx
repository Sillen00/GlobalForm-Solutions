"use client"
import { useForm } from "../(contexts)/FormContext"
// import styles from "./FormPreview.module.scss"

function FormPreview() {
  const { formData } = useForm()

  return (
    <div>
      {formData ? (
        <div>
          <h2>{formData.title}</h2>
          <p>{formData.location}</p>
          <p>{formData.startDate}</p>
          <p>{formData.startTime}</p>
          <p>{formData.description}</p>
          {/* <p>{formData.endDate}</p> */}
          {/* <p>{formData.endTime}</p> */}
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
        </div>
      ) : (
        <div>
          <h1>Form Preview</h1>
        </div>
      )}
    </div>
  )
}

export default FormPreview
