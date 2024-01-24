"use client"
import { SignedIn } from "@clerk/nextjs"
import Link from "next/link"
import { FaPlus } from "react-icons/fa6"
import DashboardFormCardSkeleton from "~/app/_components/loading-skeleton-components/DashboardFormCardSkeleton"
import { api } from "~/trpc/react"
import FormCard from "../../_components/DashboardFormCard"
import "./page.scss"

const DashboardFormCardFeed = () => {
  const {
    data: forms,
    isLoading,
    isError,
  } = api.user.getForms.useQuery(undefined)
  if (isLoading) {
    return (
      <>
        <DashboardFormCardSkeleton />
        <DashboardFormCardSkeleton />
      </>
    )
  }
  if (!forms) {
    return <p>Could not get forms from database.</p>
  }

  return (
    <>
      {isLoading && isError ? (
        // Display loading message
        <p>Fetching forms...</p>
      ) : forms && forms.length > 0 ? (
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
        <p>No forms created yet!</p>
      )}

      {isError && <p>Something went wrong!</p>}
    </>
  )
}

function DashboardPage() {
  return (
    <SignedIn>
      <title>Dashboard - GlobalForm Solutions</title>
      <div className='dashboard-wrapper'>
        <h2>Dashboard</h2>
        {/* Create new form card: Lägg till så att det blir en SLUG länk. ge formuläret ett unikt id. */}
        <div className='form-card-container'>
          {/* Create new form card */}
          <Link href={"/create-form"}>
            <div className='create-new-card'>
              <FaPlus aria-label='Add icon' />
            </div>
          </Link>
          <DashboardFormCardFeed />
        </div>
      </div>
    </SignedIn>
  )
}

export default DashboardPage
