"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
import LoadingSpinner from "~/app/_components/LoadingSpinner"
import FormViewContent from "~/app/_components/form/FormViewContent"
import { api } from "~/trpc/react"
import styles from "../../_components/form/FormViewContent.module.scss"

function FormView() {
  const params = useParams<{ id: string }>()
  const { data, isLoading } = api.form.getPublicFormById.useQuery(params.id)

  if (isLoading) {
    return (
      <div className={styles.form__container}>
        <div className={styles.form__content}>
          <div className={styles.loading__spinner__div}>
            <LoadingSpinner size={100} />
          </div>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className={styles.form__container}>
        <div className={styles.form__content}>
          <h1 className={styles.form__error}>The form could not be found!</h1>
          <br />
          Check the URL and try again.
          <br />
          <br />
          <br />
          <div className={styles.form__success__gfs}>
            Powered by
            <Link className={styles.form__success__link} href={"/"}>
              <span>GlobalForm Solutions</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return <div>{data && <FormViewContent formData={data} />}</div>
}

export default FormView
