import type { Response } from "@prisma/client"
import { useState } from "react"
import styles from "./QuestionResponses.module.scss"

function QuestionResponses({
  formDataResponses,
}: {
  formDataResponses?: Response[]
}) {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)

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

  const questionOptions = Object.keys(organizedResponses)

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuestion(e.target.value)
  }

  return (
    <div className={styles.question_responses}>
      <label htmlFor='questionSelect'>Select a Question:</label>
      <select
        id='questionSelect'
        value={selectedQuestion ?? ""}
        onChange={handleSelectChange}
      >
        <option value='' disabled>
          Select a Question
        </option>
        {questionOptions.map(question => (
          <option key={question} value={question}>
            {question}
          </option>
        ))}
      </select>

      {selectedQuestion && (
        <div>
          <h3>{selectedQuestion}</h3>
          {organizedResponses[selectedQuestion]?.map((answer, index) => (
            <p key={index}>{answer}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default QuestionResponses
