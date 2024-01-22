"use client"
import { useParams } from "next/navigation"
import FormView from "~/app/_components/form/FormView"
import { api } from "~/trpc/react"

export default function page() {
  const params = useParams<{ id: string }>()
  const { data } = api.form.getPublicFormById.useQuery(params.id)

  return <div>{data && <FormView formData={data} />}</div>
}
