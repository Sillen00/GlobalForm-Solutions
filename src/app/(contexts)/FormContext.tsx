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
  blocks: Block[]
  responses: Response[]
  createdAt: string
  updatedAt: string
}

interface Block {
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
  id: "11",
  userId: "22",
  createdBy: "Simon",
  title: "Title of the formmmm",
  startDate: "1971",
  endDate: "2200",
  startTime: "19:71",
  endTime: "22:00",
  location: "Moskva",
  description: "",
  blocks: [],
  responses: [],
  createdAt: "",
  updatedAt: "",
}

export interface ProviderProps {
  children: React.ReactNode
}

interface FormContextValue {
  formData: FormData[]
  setFormData: React.Dispatch<React.SetStateAction<FormData[]>>
  addForm: (newForm: FormData) => void
}

// This is the context that will be used to pass the form data and the setFormData
// function to the components that needs it
const FormContext = createContext<FormContextValue>(null as never)

// This is a custom hook to get access to the form data and the setFormData function
export const useForm = () => useContext(FormContext)

// This is the provider that will wrap the components that needs access to the form data
export default function FormProvider({ children }: ProviderProps) {
  const [formData, setFormData] = useState<FormData[]>([defaultFormData])

  // Add a new form to the formData state
  const addForm = (newForm: FormData) => {
    setFormData(prevFormData => [...prevFormData, newForm])
  }

  return (
    <FormContext.Provider value={{ formData, setFormData, addForm }}>
      {children}
    </FormContext.Provider>
  )
}
