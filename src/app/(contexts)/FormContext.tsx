"use client"
import { createContext, useContext, useState } from "react"

export interface FormData {
  id?: string
  userId?: string
  title: string
  startDate: string
  endDate?: string
  startTime: string
  endTime?: string
  location: string
  description: string
  formBlocks: FormBlock[]
  responses: Response[]
  createdAt?: string
  updatedAt?: string
}

interface FormBlock {
  id?: string
  formId?: string
  order: number
  title?: string
  content?: string
  type: string
  required: boolean
  placeholderText?: string
  options?: string[]
  createdAt?: string
  updatedAt?: string
}

interface Response {
  id: string
  formId: string
  answer: string
  createdAt: string
  updatedAt: string
}

const defaultFormData: FormData = {
  title: "New form",
  startDate: new Date().toISOString().slice(0, 10),
  startTime: "13:30",
  location: "Dårhuset",
  description: "Welcome to the party!",
  formBlocks: [],
  responses: [],
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
