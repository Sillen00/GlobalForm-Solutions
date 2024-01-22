"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
import IndividualResponses from "~/app/_components/form-details-components/IndividualResponses"
import QuestionResponses from "~/app/_components/form-details-components/QuestionResponses"
import SummaryResponses from "~/app/_components/form-details-components/SummaryResponses"
import { api } from "~/trpc/react"
import styles from "./page.module.scss"

function FormDetalPage() {
  const params = useParams<{ formid: string }>()

  const { data: formData } = api.form.getFormById.useQuery(params.formid)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `http://localhost:3000/form-view/${params.formid}`
      )
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error)
    }
  }

  return (
    <div className={styles.form_details_wrapper}>
      <div className={styles.title_link_div}>
        <h2>{formData?.title}</h2>
        <Link href={`/form-view/${params.formid}`}>Link to form</Link>
        <button onClick={copyToClipboard}>Copy link to clipboard</button>
      </div>

      <h3 className={styles.subheader}>Responses</h3>
      <div className={styles.responses_active_form_div}>
        <p>Total Responces: {formData?.responses.length} </p>

        {/* Switch kod för framtiden... */}
        <div className={styles.active_form_switch}>
          {/* <label className='relative inline-flex items-center me-5 cursor-pointer'>
          <input type='checkbox' value='' className='sr-only peer' />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
          <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Teal
          </span>
        </label> */}
        </div>
      </div>

      <nav className={styles.responses_menu}>
        <ul>
          <li>Summary</li>
          <li>Question</li>
          <li>Individual Responses</li>
        </ul>
      </nav>

      <div className={styles.form_responses_container}>
        <SummaryResponses />
        <QuestionResponses />
        <IndividualResponses />
      </div>
    </div>
  )
}

export default FormDetalPage
