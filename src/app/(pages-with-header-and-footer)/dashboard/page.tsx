"use client"

import { SignedIn } from "@clerk/nextjs"
import Link from "next/link"
import { FaPlus } from "react-icons/fa6"
import { api } from "~/trpc/react"
import FormCard from "../../_components/DashboardFormCard"
import "./page.scss"

function DashboardPage() {
  const { data: forms, isLoading } = api.user.getForms.useQuery(undefined)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!forms) {
    return <p>Could not get forms from database.</p>
  }

  return (
    <SignedIn>
      <title>Dashboard - GlobalForm Solutions</title>
      <div className='dashboard-wrapper'>
        <h2>Dashboard</h2>
        <div className='form-card-container'>
          {/* Create new form card: Lägg till så att det blir en SLUG länk. ge formuläret ett unikt id. */}
          <Link href={"/create-form"}>
            <div className='create-new-card'>
              <FaPlus />
            </div>
          </Link>
          {forms
            ? forms.map(form => (
                <Link href={`/form-details/${form.id}`} key={form.id}>
                  <FormCard
                    key={form.id}
                    date={form.startDate}
                    time={form.startTime}
                    title={form.title}
                    place={form.location}
                  />
                </Link>
              ))
            : "No forms created yet!"}
        </div>
      </div>
    </SignedIn>
  )
}

export default DashboardPage
