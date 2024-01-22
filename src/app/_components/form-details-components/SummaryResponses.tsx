import type { JsonValue } from "@prisma/client/runtime/library"
import styles from "./SummaryResponses.module.scss"

interface Response {
  id: string
  formId: string
  answers: JsonValue[] // CHECK WITH MARCUS TOMORROW! HERE IS PROBABLY THE PROBLEM! AND IN DB!
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
  console.log("formDataResponses", formDataResponses)

  // const fakeResponses = [
  //   {
  //     id: "string",
  //     formId: "string",
  //     answers: [
  //       {
  //         Question1: "Answerfromfirst user1",
  //       },
  //       {
  //         Question2: "Answerfromfirst user2",
  //       },
  //       {
  //         Question3: "Answerfromfirst user3",
  //       },
  //     ],
  //     createdAt: "Date",
  //     updatedAt: "Date",
  //   },
  //   {
  //     id: "string",
  //     formId: "string",
  //     answers: [
  //       {
  //         Question1: "AnswerfromSECOND user1",
  //       },
  //       {
  //         Question2: "AnswerfromSECOND user2",
  //       },
  //       {
  //         Question3: "AnswerfromSECOND user3",
  //       },
  //     ],
  //     createdAt: "Date",
  //     updatedAt: "Date",
  //   },
  //   {
  //     id: "string",
  //     formId: "string",
  //     answers: [
  //       {
  //         Question1: "AnswerfromTHIRD user1",
  //       },
  //       {
  //         Question2: "AnswerfromTHIRD user1",
  //       },
  //       {
  //         Question3: "AnswerfromTHIRD user1",
  //       },
  //     ],
  //     createdAt: "Date",
  //     updatedAt: "Date",
  //   },
  // ]

  return (
    <div className={styles.form_responses_summary}>
      {(() => {
        const firstQuestionAndAnswersArray = formDataResponses[0]?.answers

        if (
          firstQuestionAndAnswersArray &&
          firstQuestionAndAnswersArray.length > 0
        ) {
          return firstQuestionAndAnswersArray.map(
            (answerObj, answerObjIndex) => (
              <strong key={answerObjIndex}>
                {Object.entries(answerObj).map(([question], questionIndex) => (
                  <>
                    <h3 key={questionIndex}>{question}</h3>

                    {formDataResponses?.map((responseObj, responseIndex) => (
                      <div key={responseIndex}>
                        {responseObj.answers.map((answer, answerIndex) => (
                          <ul key={answerIndex}>
                            {/* Map out the answers only if the key/question is corelated to the answers. */}
                            {Object.entries(answer).map(
                              ([questionCheck, answer], answersIndex) =>
                                question === questionCheck ? (
                                  <li key={answersIndex}>{answer}</li>
                                ) : null
                            )}
                          </ul>
                        ))}
                      </div>
                    ))}
                  </>
                ))}
              </strong>
            )
          )
        }

        // You can return null or any other component if there are no answers
        return null
      })()}
    </div>
  )
}

export default SummaryResponses
