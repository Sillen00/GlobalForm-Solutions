"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
import { api } from "~/trpc/react"
import styles from "./page.module.scss"

function FormDetalPage() {
  const params = useParams<{ formid: string }>()

  const { data: formData } = api.form.getPublicFormById.useQuery(params.formid)

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
        <p>Total Responces: </p> {/*{responceData.answers}*/}
        <div className={styles.active_form_switch}>switch</div>
      </div>

      <nav className={styles.responses_menu}>
        <ul>
          <li>Summary</li>
          <li>Question</li>
          <li>Individual Responses</li>
        </ul>
      </nav>

      <div className={styles.form_responses_container}>
        <div className={styles.form_responses_summary}>
          <h3>Frågan: (tex: Vilken är din favorit färg?)</h3>
          <p>7 Svar (visa antalet svar.)</p>
          <ul>
            <li>röd (svar 1)</li>
            <li>grön (svar 2)</li>
            <li>orange (svar 3)</li>
            <li>röd (svar 4)</li>
          </ul>
        </div>
        <div className={styles.form_responses_question}></div>
        <div className={styles.form_responses_individial_responses}></div>
      </div>
    </div>
  )
}

export default FormDetalPage
