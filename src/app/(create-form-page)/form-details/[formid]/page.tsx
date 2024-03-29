"use client"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { FaCalendar, FaClock, FaLink, FaLocationDot } from "react-icons/fa6"
import DeleteModal from "~/app/_components/form-details-components/DeleteModal"
import IndividualResponses from "~/app/_components/form-details-components/IndividualResponses"
import QuestionResponses from "~/app/_components/form-details-components/QuestionResponses"
import SummaryResponses from "~/app/_components/form-details-components/SummaryResponses"
import FormDetailsSkeletonPage from "~/app/_components/loading-skeleton-components/FormDetailsSkeletonPage"
import { api } from "~/trpc/react"
import styles from "./page.module.scss"

function FormDetailPage() {
  const params = useParams<{ formid: string }>()
  const [activeResponsePreview, setActiveResponsePreview] = useState("summary")
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const router = useRouter()
  const { mutate } = api.form.deleteForm.useMutation()

  const { data: formData, isLoading } = api.form.getFormById.useQuery(
    params.formid
  )

  if (isLoading) {
    return <FormDetailsSkeletonPage />
  }

  if (!formData) {
    return <p>Form not found</p>
  }

  if (formData) {
    document.title = `Form Details: ${formData.title} - GlobalForm Solutions`
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://global-form-solutions.vercel.app/form-view/${params.formid}`
      )
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error)
    }
  }

  const deleteForm = () => {
    setShowDeleteModal(true)
  }

  const confirmDeleteForm = () => {
    if (formData) {
      router.push("/form-details/deletion-success")
      mutate(formData.id)
      setShowDeleteModal(false)
    }
  }

  const cancelDeleteForm = () => {
    setShowDeleteModal(false)
  }

  return (
    <div className='body-padding'>
      <div className={styles.form__details__wrapper}>
        <div className={styles.form__info__container}>
          <div className={styles.form__info__details}>
            <h2>{formData?.title}</h2>

            <div className={styles.form__info}>
              <FaCalendar aria-label='Calendar icon' />
              <p>
                {formData.startDate ? formData.startDate : "Unknown"}
                {formData.endDate ? ` - ${formData.endDate}` : ""}
              </p>
            </div>
            <div className={styles.form__info}>
              <FaClock aria-label='Clock icon' />
              <p>
                {formData.startTime ? formData.startTime : "Unknown"}
                {formData.endTime ? ` - ${formData.endTime}` : ""}
              </p>
            </div>
            <div className={styles.form__info}>
              <FaLocationDot aria-label='Location icon' />
              <p>{formData.location ? formData.location : "Unknown"}</p>
            </div>
            <div className={styles.form__info}>
              <FaLink aria-label='Link icon' />
              <Link
                className={styles.link_to_form}
                href={`/form-view/${params.formid}`}
              >
                <p>Link to form</p>
              </Link>
            </div>
          </div>
          <div className={styles.link__buttons}>
            <button className={styles.copy__button} onClick={copyToClipboard}>
              Copy link
            </button>
            <button className={styles.delete__button} onClick={deleteForm}>
              Delete form
            </button>

            {/* Delete confirmation modal */}
            {showDeleteModal && (
              <DeleteModal
                confirmDeleteForm={confirmDeleteForm}
                cancelDeleteForm={cancelDeleteForm}
              />
            )}
          </div>
        </div>

        <h3 className={styles.subheader}>Responses</h3>
        <div className={styles.responses_active_form_div}>
          <p>Total Responses: {formData?.responses.length} </p>

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
            <li
              onClick={() => setActiveResponsePreview("summary")}
              className={
                activeResponsePreview === "summary" ? styles.active : ""
              }
            >
              Summary
            </li>
            <li
              onClick={() => setActiveResponsePreview("question")}
              className={
                activeResponsePreview === "question" ? styles.active : ""
              }
            >
              Questions
            </li>
            <li
              onClick={() => setActiveResponsePreview("individual")}
              className={
                activeResponsePreview === "individual" ? styles.active : ""
              }
            >
              Individual
            </li>
          </ul>
        </nav>

        <div className={styles.form_responses_container}>
          {activeResponsePreview === "summary" && formData && (
            <SummaryResponses formDataResponses={formData.responses} />
          )}
          {activeResponsePreview === "question" && (
            <QuestionResponses formDataResponses={formData.responses} />
          )}
          {activeResponsePreview === "individual" && (
            <IndividualResponses formDataResponses={formData.responses} />
          )}
        </div>
      </div>
    </div>
  )
}

export default FormDetailPage
