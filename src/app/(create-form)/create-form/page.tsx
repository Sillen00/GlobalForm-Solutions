"use client"
import { useState } from "react"
import { FaPlus } from "react-icons/fa6"
import FormPreview from "~/app/_components/FormPreview"
import SideMenuFormObjects from "~/app/_components/SideMenuFormObjects"
import SideMenuNewFormObjects from "~/app/_components/SideMenuNewFormObjects"
import "./page.scss"

function CreateFormPage() {
  const [isSideMenuNewObjectsOpen, setIsSideMenuNewObjectsOpen] =
    useState(false)

  const toggleFormMenu = () => {
    setIsSideMenuNewObjectsOpen(prevState => !prevState)
  }

  return (
    <div className='create-form-wrapper'>
      <div className='side-menu-wrapper'>
        <div onClick={() => toggleFormMenu()} className='side-menu-header'>
          {isSideMenuNewObjectsOpen ? (
            <h3>Add new object</h3>
          ) : (
            <h3>Create Form</h3>
          )}

          <FaPlus className={isSideMenuNewObjectsOpen ? "plusAnimation" : ""} />
        </div>

        {!isSideMenuNewObjectsOpen && <SideMenuFormObjects />}

        {isSideMenuNewObjectsOpen && <SideMenuNewFormObjects />}
      </div>

      <FormPreview />
    </div>
  )
}

export default CreateFormPage
