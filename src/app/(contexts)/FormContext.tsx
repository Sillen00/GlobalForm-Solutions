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
  title: "New form",
  startDate: "This is where the startdate is",
  endDate: "",
  startTime: "",
  endTime: "",
  location: "",
  description: "This is a description field",
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
  // addForm: (newForm: FormData) => void
  addFormBlock: (newFormBlock: FormBlock) => void
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

  return (
    <FormContext.Provider value={{ formData, setFormData, addFormBlock }}>
      {children}
    </FormContext.Provider>
  )
}
