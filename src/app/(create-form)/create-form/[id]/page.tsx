"use client"
import { useUser } from "@clerk/nextjs"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa6"
import { useForm } from "~/app/(contexts)/FormContext"
import FormPreview from "~/app/_components/FormPreview"
import SideMenuFormBlocks from "~/app/_components/SideMenuFormBlocks"
import SideMenuNewFormBlocks from "~/app/_components/SideMenuNewFormBlocks"
import "./page.scss"

function CreateFormPage() {
  const [isSideMenuNewBlocksOpen, setIsSideMenuNewBlocksOpen] = useState(false)
  const [isPreviewActive, setIsPreviewActive] = useState(false)
  // const params = useParams<{ id: string }>()
  // const { addForm } = useForm()
  // const { user } = useUser()
  // const userId = user?.id
  // const createdBy = user?.fullName

  // useEffect(() => {
  //   console.log(params.id)

  //   const newForm = {
  //     id: `${params.id}`, // Generate a unique ID for the new form
  //     userId: `${userId}`, // Replace with the actual user ID
  //     createdBy: `${createdBy}`, // Replace with the actual user name
  //     title: "",
  //     startDate: "",
  //     endDate: "",
  //     startTime: "",
  //     endTime: "",
  //     location: "",
  //     description: "",
  //     formBlocks: [],
  //     responses: [],
  //     createdAt: new Date().toISOString(),
  //     updatedAt: new Date().toISOString(),
  //   }

  //   // Add the new form to the formData state
  //   addForm(newForm)
  //   // Run only one time then no more.
  // }, [params.id])

  const toggleSideMenuContent = () => {
    setIsSideMenuNewBlocksOpen(prevState => !prevState)
    console.log("toggleSideMenuContent")
  }

  const togglePreview = () => {
    setIsPreviewActive(prevState => !prevState)
    console.log("togglePreview")
  }

  return (
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

          <FaPlus className={isSideMenuNewBlocksOpen ? "plusAnimation" : ""} />
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
  )
}

export default CreateFormPage
