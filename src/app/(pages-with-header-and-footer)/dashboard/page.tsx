"use client"
import { SignedIn } from "@clerk/nextjs"
import Link from "next/link"
import { FaPlus } from "react-icons/fa6"
import { v4 as uuidv4 } from "uuid"
import FormCard from "../../_components/FormCard"
import "./page.scss"
import { useEffect, useState } from "react"

function DashboardPage() {
  const [uniqueId, setUniqueId] = useState<string | null>(null)

  useEffect(() => {
    setUniqueId(uuidv4())
    console.log("useEffekt för unikt id.", uniqueId)
  }, [])

  const addFormDataToContextState = () => {
    console.log("SSSSSSSSSSSSS")

    console.log(uniqueId)
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
