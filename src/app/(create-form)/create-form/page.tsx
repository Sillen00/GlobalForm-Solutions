"use client"
import { useState } from "react"
import { FaPlus } from "react-icons/fa6"
import FormPreview from "~/app/_components/FormPreview"
import SideMenuFormObjects from "~/app/_components/SideMenuFormObjects"
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
          <h3>Create Form</h3>
          <p>
            <FaPlus />
          </p>
        </div>

        {!isSideMenuNewObjectsOpen && <SideMenuFormObjects />}

        {isSideMenuNewObjectsOpen && (
          <div className='side-menu-new-objects'>
            <h2>CreateFormPage add objects</h2>
            <p>Här ska man kunna lägga till nya objekt / inputs.</p>
          </div>
        )}
      </div>

      <FormPreview />
    </div>
  )
}

export default CreateFormPage
