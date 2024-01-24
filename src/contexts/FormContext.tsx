"use client"
import { type FormBlockType } from "@prisma/client"
import { createContext, useContext, useState } from "react"

export interface FormData {
  id?: string
  userId?: string
  title: string
  startDate: string
  endDate: string | null
  startTime: string
  endTime: string | null
  location: string
  description: string
  formBlocks: FormBlock[]
  responses?: Response[]
  createdAt?: Date
  updatedAt?: Date
}

export interface FormBlock {
  id?: string
  formId?: string
  order: number
  title?: string | null
  content?: string | null
  type: FormBlockType
  required: boolean
  placeholderText?: string | null
  options?: string[]
  createdAt?: Date
  updatedAt?: Date
}

export interface Response {
  id: string
  formId: string
  answers: Record<string, unknown>
  createdAt: Date
  updatedAt: Date
}

export const defaultFormData: FormData = {
  title: "",
  startDate: new Date().toISOString().slice(0, 10),
  endDate: "",
  startTime: "",
  endTime: "",
  location: "",
  description: "",
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
