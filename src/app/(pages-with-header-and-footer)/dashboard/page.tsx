"use client"

import { SignedIn, useUser } from "@clerk/nextjs"
import Link from "next/link"
import { FaPlus } from "react-icons/fa6"
import { api } from "~/trpc/react"
import FormCard from "../../_components/FormCard"
import "./page.scss"

function DashboardPage() {
  const { user } = useUser()
  const { data, error, isLoading } = api.form.getUserForms.useQuery(
    user?.id ?? ""
  )
  const forms = data?.forms ?? []

  return (
    <SignedIn>
      <div className='dashboard-wrapper'>
        <h2>Dashboard</h2>
        <div className='form-card-container'>
          {/* Create new form card: */}
          <Link href='/create-form'>
            <div className='create-new-card'>
              <FaPlus />
            </div>
          </Link>
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
