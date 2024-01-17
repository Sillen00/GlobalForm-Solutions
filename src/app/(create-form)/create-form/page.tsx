"use client"
import { useState } from "react"
import { FaPlus } from "react-icons/fa6"
import FormPreview from "~/app/_components/FormPreview"
import SideMenuFormBlocks from "~/app/_components/SideMenuFormBlocks"
import SideMenuNewFormBlocks from "~/app/_components/SideMenuNewFormBlocks"
import "./page.scss"

function CreateFormPage() {
  const [isSideMenuNewBlocksOpen, setIsSideMenuNewBlocksOpen] = useState(false)
  const [isPreviewActive, setIsPreviewActive] = useState(false)

  const toggleSideMenuContent = () => {
    setIsSideMenuNewBlocksOpen(prevState => !prevState)
    console.log("toggleSideMenuContent")
  }

  const togglePreview = () => {
    setIsPreviewActive(prevState => !prevState)
    console.log("togglePreview")
  }

  return (
    <>
      <title>Create Form - GlobalForm Solutions</title>
      <div className='create-form-wrapper'>
        {/* FORM MENU SECTION -------------------------------------------------------------------------------------------*/}
        <div
          className={`side-menu-wrapper ${
            isPreviewActive ? "activePreview" : ""
          }`}
        >
          <div
            onClick={() => toggleSideMenuContent()}
            className='side-menu-header'
          >
            {isSideMenuNewBlocksOpen ? (
              <h3>Add new block</h3>
            ) : (
              <h3>Create Form</h3>
            )}

            <FaPlus
              className={isSideMenuNewBlocksOpen ? "plusAnimation" : ""}
            />
          </div>

          {!isSideMenuNewBlocksOpen && <SideMenuFormBlocks />}

          {isSideMenuNewBlocksOpen && <SideMenuNewFormBlocks />}

          {/* SIDE MENU TOGGLE PREVIEW BUTTON (ONLY MOBILE) */}
          {!isSideMenuNewBlocksOpen && (
            <button
              className={`previewBtn ${isPreviewActive ? "activePreview" : ""}`}
              onClick={() => togglePreview()}
            >
              Preview Form
            </button>
          )}
        </div>

        {/* FORM PREVIEW SECTION ------------------------------------------------------------------------------------*/}
        <section
          className={`form-preview ${isPreviewActive ? "activePreview" : ""}`}
        >
          {/* FORM PREVIEW CONTENT */}
          <FormPreview />

          {/* FORM PREVIEW TOGGLE BUTTON (ONLY MOBILE) */}
          {!isSideMenuNewBlocksOpen && (
            <button
              className={`previewBtn ${isPreviewActive ? "activePreview" : ""}`}
              onClick={() => togglePreview()}
            >
              Create Form
            </button>
          )}
        </section>
      </div>
    </>
  )
}

export default CreateFormPage
