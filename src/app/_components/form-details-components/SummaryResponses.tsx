import type { JsonValue } from "@prisma/client/runtime/library"
import styles from "./SummaryResponses.module.scss"

interface Response {
  id: string
  formId: string
  answers: JsonValue
  createdAt: Date
  updatedAt: Date
}

function SummaryResponses({
  formDataResponses,
}: {
  formDataResponses?: Response[]
}) {
  if (!formDataResponses) {
    return <p>Loading...</p>
  }

  const fakeResponses = [
    {
      id: "string",
      formId: "string",
      answers: [
        {
          Question1: "Answerfromfirst user",
        },
        {
          Question2: "Answerfromfirst user",
        },
        {
          Question3: "Answerfromfirst user",
        },
      ],
      createdAt: "Date",
      updatedAt: "Date",
    },
    {
      id: "string",
      formId: "string",
      answers: [
        {
          Question1: "AnswerfromSECOND user",
        },
        {
          Question2: "AnswerfromSECOND user",
        },
        {
          Question3: "AnswerfromSECOND user",
        },
      ],
      createdAt: "Date",
      updatedAt: "Date",
    },
  ]

  // function RenderJsonObject({ formDataResponses.answer }) {
  //   return (
  //     <div>
  //       {Object.entries(formDataResponses).map(([key, value], index) => (
  //         <div key={index}>
  //           <strong>{key}:</strong> {JSON.stringify(value)}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  console.log("formData", formDataResponses)
  return (
    <div className={styles.form_responses_summary}>
      {fakeResponses.map(response =>
        response.answers.map(answer =>
          Object.entries(answer).map(([key, value], index) => (
            <div key={index}>
              <strong>
                {key}: {value}
              </strong>
            </div>
          ))
        )
      )}

      <h4>FRÅGA</h4>
      <p>4 Svar (visa antalet svar.)</p>
      <ul>
        <li>röd (svar 1)</li>
        <li>grön (svar 2)</li>
        <li>orange (svar 3)</li>
        <li>röd (svar 4)</li>
      </ul>
    </div>
  )
}

export default SummaryResponses
