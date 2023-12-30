"use client"
import { useState } from "react"
import "./AccordionSection.scss"

interface AccordionSectionProps {
  title: string
  children: React.ReactNode
}

const AccordionSection = ({ title, children }: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`accordion-section ${isOpen ? "active" : ""}`}>
      <h2 onClick={toggleAccordion}>{title}</h2>
      <div className='content'>{children}</div>
    </div>
  )
}

export default AccordionSection
