import { type Response } from "@prisma/client"
import styles from "./SummaryResponses.module.scss"

function SummaryResponses({
  formDataResponses,
}: {
  formDataResponses?: Response[]
}) {
  if (!formDataResponses) {
    return <p>Loading...</p>
  }

  const organizedResponses = formDataResponses.reduce(
    (acc: Record<string, string[]>, response) => {
      if (typeof response.answers === "object" && response.answers !== null) {
        Object.entries(response.answers).forEach(([question, answer]) => {
          if (!acc[question]) {
            acc[question] = []
          }
          if (typeof answer === "string") {
            acc[question]?.push(answer)
          }
        })
      }
      return acc
    },
    {}
  )

  return (
    <div className={styles.form_responses_summary}>
      {/* Empty responses message. */}
      {formDataResponses.length === 0 && (
        <p>There are no responses for this form yet.</p>
      )}

      {Object.entries(organizedResponses).map(([question, answers]) => (
        <div className={styles.quesion_answer_div} key={question}>
          <h3>{question}</h3>
          {answers.map((answer, index) => (
            <p key={index}>{answer}</p>
          ))}
        </div>
      ))}
    </div>
  )
}

export default SummaryResponses
