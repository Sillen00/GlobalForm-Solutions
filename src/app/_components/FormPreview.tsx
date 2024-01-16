"use client"
import { useForm } from "../(contexts)/FormContext"
import "./FormPreview.scss"

function FormPreview() {
  const { formData } = useForm()

  return (
    <div className='preview-container'>
      <div className='preview-content'>
        {formData ? (
          <>
            <h1>{formData.title}</h1>
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
          </>
        ) : (
          <h1>Could not load form preview!</h1>
        )}
      </div>
    </div>
  )
}

export default FormPreview
