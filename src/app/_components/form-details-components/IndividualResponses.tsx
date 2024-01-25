import type { Response } from "@prisma/client"
import { useState } from "react"
import styles from "./IndividualResponses.module.scss"

function IndividualResponses({
  formDataResponses,
}: {
  formDataResponses?: Response[]
}) {
  const [selectedPersonIndex, setSelectedPersonIndex] = useState(0)

  if (!formDataResponses) {
    return <p>Could not find responses data.</p>
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

  const questions = Object.keys(organizedResponses)

  return (
    <div className={styles.form_responses_individual_responses}>
      <div className={styles.select_responce_nr_div}>
        <label>Select Response: </label>
        <input
          type='number'
          min={0}
          max={formDataResponses.length - 1}
          value={selectedPersonIndex?.toString() ?? 0}
          onChange={e => setSelectedPersonIndex(Number(e.target.value))}
        />
      </div>

      {/* Empty responses message. */}
      {formDataResponses.length === 0 && (
        <p>There are no responses for this form yet.</p>
      )}

      {questions.map((question, index) => (
        <div className={styles.quesion_answer_div} key={index}>
          <h3>{question}</h3>
          <p>{organizedResponses[question]?.[selectedPersonIndex] ?? ""}</p>
        </div>
      ))}
    </div>
  )
}

export default IndividualResponses
