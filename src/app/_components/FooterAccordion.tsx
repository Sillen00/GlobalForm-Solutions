"use client"
import { useState } from "react"
import styles from "./FooterAccordion.module.scss"

interface FooterAccordionProps {
  title: string
  children: React.ReactNode
}

const AccordionSection = ({ title, children }: FooterAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    console.log("Accordion is being toggled")
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`${styles.accordionSection} ${isOpen ? styles.active : ""} `}
    >
      <h2 onClick={toggleAccordion}>{title}</h2>
      <div className={`${styles.content}`}>{children}</div>
    </div>
  )
}

export default AccordionSection
