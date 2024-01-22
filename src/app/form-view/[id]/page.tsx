"use client"
import { useParams } from "next/navigation"
import FormView from "~/app/_components/form/FormView"
import { api } from "~/trpc/react"
import styles from "../../_components/form/FormView.module.scss"

export default function page() {
  const params = useParams<{ id: string }>()
  const { data } = api.form.getPublicFormById.useQuery(params.id)

  if (!data) {
    return (
      <div className={styles.form__container}>
        <div className={styles.form__content}>
          <h1 className={styles.form__error}>The form could not be found!</h1>
          <br />
          Check the URL and try again.
        </div>
      </div>
    )
  }

  return <div>{data && <FormView formData={data} />}</div>
}
