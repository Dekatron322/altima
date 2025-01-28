import React from "react"

interface AccordionProps {
  title: string
  content: string | JSX.Element
  isOpen: boolean
  onToggle: () => void
}

const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#FFFFFF1A]">
      <button className="w-full p-4 text-left text-[#FFFFFF] focus:outline-none" onClick={onToggle}>
        <div className="flex items-center justify-between">
          <span className="max-sm:text-sm">{title}</span>
          <span>{isOpen ? <img src="/Minus.png" /> : <img src="/Plus.png" />}</span>
        </div>
      </button>
      {isOpen && (
        <div className="bg-[#282828] py-2 text-[#FFFFFF99]">
          <div className="p-4 max-sm:text-xs">{content}</div>
        </div>
      )}
    </div>
  )
}

export default Accordion
