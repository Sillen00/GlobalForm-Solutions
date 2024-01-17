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

export interface FormBlock {
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
  title: "New form with a long for a very cool event",
  startDate: new Date().toISOString().slice(0, 10),
  startTime: "13:30",
  location: "Dårhuset",
  description:
    "Join us for an unforgettable event filled with exciting activities and opportunities to connect! This event promises a diverse lineup of engaging experiences suitable for all ages and interests. From interactive workshops and inspiring keynote speeches to entertaining performances and networking sessions, there's something for everyone. Whether you're looking to learn new skills, meet like-minded individuals, or simply enjoy a day of fun and discovery, our event is the perfect destination. Mark your calendars and stay tuned for more details. We look forward to welcoming you and creating memorable moments together",
  formBlocks: [],
  responses: [],
}

export interface ProviderProps {
  children: React.ReactNode
}

interface FormContextValue {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  addFormBlock: (newFormBlock: FormBlock) => void
  removeFormBlock: (index: number) => void
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

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        addFormBlock,
        removeFormBlock,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
