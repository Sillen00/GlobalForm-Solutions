import { SignedIn, UserButton } from "@clerk/nextjs"

function DashboardPage() {
  return (
    <SignedIn>
      <div>
        <h1>Dashboard</h1>
        <UserButton />
      </div>
    </SignedIn>
  )
}

export default DashboardPage
