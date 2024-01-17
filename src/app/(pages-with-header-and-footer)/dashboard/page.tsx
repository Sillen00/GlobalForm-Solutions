import { SignedIn } from "@clerk/nextjs"
import Link from "next/link"
import { FaPlus } from "react-icons/fa6"
import FormCard from "../../_components/DashboardFormCard"
import "./page.scss"

function DashboardPage() {
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
