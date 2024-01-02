"use client"
import { useState } from "react"
import { FaPlus } from "react-icons/fa6"
import FormPreview from "~/app/_components/FormPreview"
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

        {!isSideMenuNewObjectsOpen && (
          <div className='side-menu-objects'>
            <h2>CreateFormPage</h2>
            <p>Här ska man se nuvarande valda object / inputs.</p>
          </div>
        )}
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
