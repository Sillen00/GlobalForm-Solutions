"use client"
import { SignedIn, useUser } from "@clerk/nextjs"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa6"
import { v4 as uuidv4 } from "uuid"
import type { FormData } from "../../(contexts)/FormContext"
import { useForm } from "../../(contexts)/FormContext"
import FormCard from "../../_components/FormCard"
import "./page.scss"

function DashboardPage() {
  const [uniqueId, setUniqueId] = useState<string | null>(null)
  const { addForm } = useForm()
  const { user } = useUser()
  const userId = user?.id
  const createdBy = user?.fullName

  useEffect(() => {
    setUniqueId(uuidv4())
  }, [])

  const addFormDataToContextState = () => {
    const newForm: FormData = {
      id: `${uniqueId}`, // Generate a unique ID for the new form
      userId: `${userId}`, // Replace with the actual user ID
      createdBy: `${createdBy}`, // Replace with the actual user name
      title: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      location: "",
      description: "",
      blocks: [],
      responses: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Add the new form to the formData state
    addForm(newForm)
  }

  return (
    <SignedIn>
      <div className='dashboard-wrapper'>
        <h2>Dashboard</h2>
        <div className='form-card-container'>
          {/* Create new form card: Lägg till så att det blir en SLUG länk. ge formuläret ett unikt id. */}
          <div onClick={() => addFormDataToContextState()}>
            {uniqueId && (
              <Link href={`/create-form/${uniqueId}`}>
                <div className='create-new-card'>
                  <FaPlus />
                </div>
              </Link>
            )}
          </div>
          {/* Form cards: */} {/* Example cards....*/}
          <FormCard date='Datum' time='Tid' title='Titel' place='Plats' />
          <FormCard date='Datum' time='Tid' title='Titel' place='Plats' />
          <FormCard date='Datum' time='Tid' title='Titel' place='Plats' />
          <FormCard date='Datum' time='Tid' title='Titel' place='Plats' />
          <FormCard date='Datum' time='Tid' title='Titel' place='Plats' />
          <FormCard date='Datum' time='Tid' title='Titel' place='Plats' />
          <FormCard date='Datum' time='Tid' title='Titel' place='Plats' />
          <FormCard date='Datum' time='Tid' title='Titel' place='Plats' />
        </div>
      </div>
    </SignedIn>
  )
}

export default DashboardPage
