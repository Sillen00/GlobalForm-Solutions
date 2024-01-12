"use client"

import { SignedIn, useUser } from "@clerk/nextjs"
import Link from "next/link"
import { FaPlus } from "react-icons/fa6"
import { api } from "~/trpc/react"
import FormCard from "../../_components/FormCard"
import "./page.scss"

function DashboardPage() {
  const { user } = useUser()
  let forms

  if (!user) {
    return null
  } else {
    const { data, error, isLoading } = api.user.getForms.useQuery(user.id)
    forms = data?.forms ?? []
  }

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
          {/* {forms.map((form) => (
            <FormCard
              key={form.id}
              date={form.startDate}
              time={form.startTime}
              title={form.title}
              place={form.location}
            />
          ))} */}
        </div>
      </div>
    </SignedIn>
  )
}

export default DashboardPage
