import React from "react"
import { motion } from "framer-motion"

interface AccordionProps {
  title: string
  content: string | JSX.Element
  isOpen: boolean
  onToggle: () => void
}

const AccordionTwo: React.FC<AccordionProps> = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#FFFFFF1A]">
      <button className="w-full p-4 text-left text-[#FFFFFFcc] focus:outline-none" onClick={onToggle}>
        <div className="flex items-center justify-between">
          <span className="max-xl:text-sm"></span>
          <span className="max-xl:text-sm">{title}</span>
          <span>
            {isOpen ? <img className="h-4 w-4" src="/Minus.png" /> : <img src="/Plus.png" className="h-4 w-4" />}
          </span>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-[#282828] text-[#FFFFFF99]"
      >
        {isOpen && <div className="p-4 max-sm:text-xs ">{content}</div>}
      </motion.div>
    </div>
  )
}

export default AccordionTwo
