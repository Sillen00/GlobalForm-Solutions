"use client"
import { useParams } from "next/navigation"

function FormDetalPage() {
  const params = useParams<{ formid: string }>()

  return (
    <div>
      <h1>FormDetalPage</h1>
      <h2>form id: {params.formid}</h2>
    </div>
  )
}

export default FormDetalPage
