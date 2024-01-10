"use client"
import { useState } from "react"
import { FaPlus } from "react-icons/fa6"
import FormPreview from "~/app/_components/FormPreview"
import SideMenuFormBlocks from "~/app/_components/SideMenuFormBlocks"
import SideMenuNewFormBlocks from "~/app/_components/SideMenuNewFormBlocks"
import "./page.scss"

function CreateFormPage() {
  const [isSideMenuNewBlocksOpen, setIsSideMenuNewBlocksOpen] = useState(false)

  const toggleFormMenu = () => {
    setIsSideMenuNewBlocksOpen(prevState => !prevState)
  }

  return (
    <div className='create-form-wrapper'>
      <div className='side-menu-wrapper'>
        <div onClick={() => toggleFormMenu()} className='side-menu-header'>
          {isSideMenuNewBlocksOpen ? (
            <h3>Add new block</h3>
          ) : (
            <h3>Create Form</h3>
          )}

          <FaPlus className={isSideMenuNewBlocksOpen ? "plusAnimation" : ""} />
        </div>

        {!isSideMenuNewBlocksOpen && <SideMenuFormBlocks />}

        {isSideMenuNewBlocksOpen && <SideMenuNewFormBlocks />}

        {!isSideMenuNewBlocksOpen && (
          <button className='previewBtn'>Preview Form</button>
        )}
      </div>

      <FormPreview />
    </div>
  )
}

export default CreateFormPage
