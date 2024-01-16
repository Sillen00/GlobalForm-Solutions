"use client"
import { useForm } from "../(contexts)/FormContext"
// import styles from "./FormPreview.module.scss"

function FormPreview() {
  const { formData } = useForm()

  return (
    <div>
      {formData.map((form, index) => (
        <div key={index}>
          {Object.values(form).map((value, valueIndex) => (
            <div key={valueIndex}>{value}</div>
          ))}
        </div>
      ))}

      {/* blocks.map */}
      <div>
        {/* <h1>blocks.titel</h1> */}
        {/* {blocks.type === text ?? (
          <p>blocks.content</p>

        )} */}
      </div>
    </div>
  )
}

export default FormPreview
