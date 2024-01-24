"use client"

import { SignedIn } from "@clerk/nextjs"
import Link from "next/link"
import { FaPlus } from "react-icons/fa6"
import { api } from "~/trpc/react"
import FormCard from "../../_components/DashboardFormCard"
import "./page.scss"

function DashboardPage() {
  const {
    data: forms,
    isLoading,
    isError,
  } = api.user.getForms.useQuery(undefined)

  return (
    <SignedIn>
      <title>Dashboard - GlobalForm Solutions</title>
      <div className='dashboard-wrapper'>
        <h2>Dashboard</h2>
        <div className='form-card-container'>
          {/* Create new form card */}
          <Link href={"/create-form"}>
            <div className='create-new-card'>
              <FaPlus aria-label='Add icon' />
            </div>
          </Link>

          {isLoading && isError ? (
            // Display loading message
            <p>Fetching forms...</p>
          ) : forms && forms.length > 0 ? (
            // Display forms if available
            forms.map(form => (
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
          ) : (
            // Display message if no forms are available
            <p>No forms created yet!</p>
          )}
          {isError && <p>Something went wrong!</p>}
        </div>
      </div>
    </SignedIn>
  )
}

export default DashboardPage
