// import { type Response } from "@prisma/client"
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
  console.log("formDataResponses", formDataResponses)

  const fakeResponses = [
    {
      id: "string",
      formId: "string",
      answers: {
        Question1: "Answerfromfirst user1",
        Question2: "Answerfromfirst user2",
        Question3: "Answerfromfirst user3",
      },
      createdAt: "Date",
      updatedAt: "Date",
    },
    {
      id: "string",
      formId: "string",
      answers: {
        Question1: "AnswerfromSECOND user1",
        Question2: "AnswerfromSECOND user2",
        Question3: "AnswerfromSECOND user3",
      },
      createdAt: "Date",
      updatedAt: "Date",
    },
  ]

  const organizedResponses = fakeResponses.reduce(
    (acc: Record<string, string[]>, response) => {
      Object.entries(response.answers).forEach(([question, answer]) => {
        if (!acc[question]) {
          acc[question] = []
        }
        acc[question]?.push(answer.toString())
      })
      return acc
    },
    {}
  )

  return (
    <div className={styles.form_responses_summary}>
      {Object.entries(organizedResponses).map(([question, answers]) => (
        <div key={question}>
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

// {(() => {
//   const firstQuestionAndAnswersArray = formDataResponses[0]?.answers

//   if (
//     firstQuestionAndAnswersArray &&
//     firstQuestionAndAnswersArray.length > 0
//   ) {
//     return firstQuestionAndAnswersArray.map(
//       (answerObj, answerObjIndex) => (
//         <strong key={answerObjIndex}>
//           {Object.entries(answerObj).map(([question, value], questionIndex) => (
//             <>
//               <h3 key={questionIndex}>{question}</h3>

//               {formDataResponses?.map((responseObj, responseIndex) => (
//                 <div key={responseIndex}>
//                   {responseObj.answers.map((answer, answerIndex) => (
//                     <ul key={answerIndex}>
//                       {/* Map out the answers only if the key/question is corelated to the answers. */}
//                       {Object.entries(answer).map(
//                         ([questionCheck, answer], answersIndex) =>
//                           question === questionCheck ? (
//                             <li key={answersIndex}>{answer}</li>
//                           ) : null
//                       )}
//                     </ul>
//                   ))}
//                 </div>
//               ))}
//             </>
//           ))}
//         </strong>
//       )
//     )
//   }

//   // You can return null or any other component if there are no answers
//   return null
// })()}
