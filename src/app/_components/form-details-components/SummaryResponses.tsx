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

  const response1 = fakeResponses[0]

  return (
    <div className={styles.form_responses_summary}>
      <div>
        <>
          {(() => {
            // Your .map() function logic goes here
            const answers = response1?.answers

            if (answers && answers.length > 0) {
              return answers.map((answer, answerIndex) => (
                <div key={answerIndex}>
                  <strong>
                    {Object.entries(answer).map(([key, value]) => (
                      <div key={key}>{key}</div>
                    ))}
                  </strong>
                </div>
              ))
            }

            // You can return null or any other component if there are no answers
            return null
          })()}
        </>
        {fakeResponses.map((response, responseIndex) => (
          <div key={responseIndex}>
            {response.answers.map((answer, answerIndex) => (
              <div key={answerIndex}>
                <strong>
                  {Object.entries(answer).map(([key, value]) => (
                    <div key={key}>{value}</div>
                  ))}
                </strong>
              </div>
            ))}
          </div>
        ))}
      </div>

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
