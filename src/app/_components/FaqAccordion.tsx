"use client"
import styles from "./FaqAccordion.module.scss"
import { useState } from "react"

interface FaqAccordionProps {
  title: string
  children: React.ReactNode
}

const FaqAccordion = ({ title, children }: FaqAccordionProps) => {
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

export default FaqAccordion
