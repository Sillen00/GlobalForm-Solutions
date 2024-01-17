"use client"
import { createContext, useContext, useState } from "react"

export interface FormData {
  id: string
  userId: string
  createdBy: string
  title: string
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  location: string
  description: string
  formBlocks: FormBlock[]
  responses: Response[]
  createdAt: string
  updatedAt: string
}

interface FormBlock {
  id: string
  order: number
  title: string
  description: string
  type: string
  required: boolean
  placeholderText: string
  options: string[]
  formId: string
}

interface Response {
  id: string
  formId: string
  form: string
  answer: string
  createdAt: string
  updatedAt: string
}

const defaultFormData: FormData = {
  id: "",
  userId: "",
  createdBy: "",
  title: "",
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
  location: "",
  description: "",
  formBlocks: [],
  responses: [],
  createdAt: "",
  updatedAt: "",
}

export interface ProviderProps {
  children: React.ReactNode
}

interface FormContextValue {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  addFormBlock: (newFormBlock: FormBlock) => void
  removeFormBlock: (index: number) => void
  updateFormTitle: (value: string) => void
  updateFormDate: (value: string) => void
  updateFormStartTime: (value: string) => void
  updateFormLocation: (value: string) => void
  updateFormDescription: (value: string) => void
}

// This is the context that will be used to pass the form data and the setFormData
// function to the components that needs it
const FormContext = createContext<FormContextValue>(null as never)

// This is a custom hook to get access to the form data and the setFormData function
export const useForm = () => useContext(FormContext)

// This is the provider that will wrap the components that needs access to the form data
export default function FormProvider({ children }: ProviderProps) {
  const [formData, setFormData] = useState<FormData>(defaultFormData)

  const addFormBlock = (newBlock: FormBlock) => {
    setFormData(prevFormData => {
      const newFormBlocks = [...prevFormData.formBlocks, newBlock]
      const updatedFormData = { ...prevFormData, formBlocks: newFormBlocks }
      return updatedFormData
    })

    console.log("updated BLOCK formdata", formData)
  }
  // not removing the block
  const removeFormBlock = (index: number) => {
    setFormData(prevFormData => {
      const newFormBlocks = prevFormData.formBlocks.filter(
        (_, i) => i !== index
      )
      return { ...prevFormData, formBlocks: newFormBlocks }
    })
    console.log("updated BLOCK formdata", formData)
  }
  // This function updates the title of the form block
  const updateFormTitle = (titleValue: string) => {
    setFormData(prevFormData => {
      const updatedTitle = { ...prevFormData, title: titleValue }
      return updatedTitle
    })
    console.log("uppdatera title", titleValue)
  }
  // This function updates the start date of the form block
  const updateFormDate = (startDateValue: string) => {
    setFormData(prevFormData => {
      const updatedDate = { ...prevFormData, startDate: startDateValue }
      return updatedDate
    })
    console.log("uppdatera Date", startDateValue)
  }
  // This function updates the start time of the form block
  const updateFormStartTime = (startTimeValue: string) => {
    setFormData(prevFormData => {
      const updatedStartTime = { ...prevFormData, startTime: startTimeValue }
      return updatedStartTime
    })
    console.log("uppdatera Date", startTimeValue)
  }
  // This function updates the location of the form block
  const updateFormLocation = (locatioValue: string) => {
    setFormData(prevFormData => {
      const updatedLocation = { ...prevFormData, location: locatioValue }
      return updatedLocation
    })
    console.log("uppdatera location", locatioValue)
  }
  // This function updates the description of the form block
  const updateFormDescription = (descValue: string) => {
    setFormData(prevFormData => {
      const updatedDescription = { ...prevFormData, description: descValue }
      return updatedDescription
    })
    console.log("uppdatera descruotuib", descValue)
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        addFormBlock,
        removeFormBlock,
        updateFormTitle,
        updateFormDate,
        updateFormStartTime,
        updateFormLocation,
        updateFormDescription,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
