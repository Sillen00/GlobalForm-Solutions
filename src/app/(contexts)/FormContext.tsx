"use client"
import { createContext, useContext, useState } from "react"

interface FormData {
  id: string
  userId: string
  createBy: string
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
  createBy: "Simon",
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
}

// This is the context that will be used to pass the form data and the setFormData
// function to the components that needs it
const FormContext = createContext<FormContextValue>(null as never)

// This is a custom hook to get access to the form data and the setFormData function
export const useForm = () => useContext(FormContext)

// This is the provider that will wrap the components that needs access to the form data
export default function FormProvider({ children }: ProviderProps) {
  const [formData, setFormData] = useState<FormData[]>([defaultFormData])

  //   useEffect(() => {
  //     setFormData(data)
  //   }, [])

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  )
}
