"use client"
import { useState } from "react"
import { FaPlus } from "react-icons/fa6"
import FormPreview from "~/app/_components/form/FormPreview"
import SideMenuAddFormBlocks from "~/app/_components/form/SideMenuAddFormBlocks"
import SideMenuFormBlocks from "~/app/_components/form/SideMenuFormBlocks"
import "./page.scss"

function CreateFormPage() {
  const [isSideMenuAddBlocksOpen, setIsSideMenuAddBlocksOpen] = useState(false)
  const [isPreviewActive, setIsPreviewActive] = useState(false)

  const toggleSideMenuContent = () => {
    setIsSideMenuAddBlocksOpen(prevState => !prevState)
  }

  const togglePreview = () => {
    setIsPreviewActive(prevState => !prevState)
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
            {isSideMenuAddBlocksOpen ? (
              <h3>Add new block</h3>
            ) : (
              <h3>Create Form</h3>
            )}

            <FaPlus
              aria-label='Add icon'
              className={isSideMenuAddBlocksOpen ? "plusAnimation" : ""}
            />
          </div>

          {!isSideMenuAddBlocksOpen && <SideMenuFormBlocks />}

          {isSideMenuAddBlocksOpen && (
            <SideMenuAddFormBlocks
              toggleSideMenuContent={toggleSideMenuContent}
            />
          )}

          {/* SIDE MENU TOGGLE PREVIEW BUTTON (ONLY MOBILE) */}
          {!isSideMenuAddBlocksOpen && (
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
          {!isSideMenuAddBlocksOpen && (
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
