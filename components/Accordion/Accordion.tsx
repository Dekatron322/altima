import { useEffect, useState } from "react"

interface AccordionProps {
  title: string
  content: string | JSX.Element // Allow content to be a string or JSX
  defaultOpen?: boolean // Optional prop
}

const Accordion: React.FC<AccordionProps> = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(false) // Initialize as closed by default

  useEffect(() => {
    if (defaultOpen) {
      setIsOpen(true) // Set open only on the first render
    }
  }, [defaultOpen])

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="border-b border-[#FFFFFF1A]">
      <button className="w-full p-4 text-left text-[#FFFFFF] focus:outline-none" onClick={toggleAccordion}>
        <div className="flex items-center justify-between">
          <span className="max-sm:text-sm">{title}</span>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
      </button>
      {isOpen && (
        <div className="bg-[#282828] py-2 text-[#FFFFFF99]">
          {/* Render content as JSX to allow formatting */}
          <div className="p-4 max-sm:text-xs">{content}</div>
        </div>
      )}
    </div>
  )
}

export default Accordion
