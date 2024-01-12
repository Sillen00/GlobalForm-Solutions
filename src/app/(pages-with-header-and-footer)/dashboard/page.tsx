import { SignedIn } from "@clerk/nextjs"
import Link from "next/link"
import { FaPlus } from "react-icons/fa6"
import FormCard from "../../_components/FormCard"
import "./page.scss"
import { v4 as uuidv4 } from "uuid"

function DashboardPage() {
  const uniqueId = uuidv4()

  return (
    <SignedIn>
      <div className='dashboard-wrapper'>
        <h2>Dashboard</h2>
        <div className='form-card-container'>
          {/* Create new form card: Lägg till så att det blir en SLUG länk. ge formuläret ett unikt id. */}
          <Link href={`/create-form/${uniqueId}`}>
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
