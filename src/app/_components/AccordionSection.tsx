"use client";
import { useState } from "react";
import "./AccordionSection.scss";

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Add this line
}

const AccordionSection = ({ title, children, className }: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-section ${isOpen ? "active" : ""} ${className}`}>
      <h2 onClick={toggleAccordion}>{title}</h2>
      <div className='content'>{children}</div>
    </div>
  );
};

export default AccordionSection;