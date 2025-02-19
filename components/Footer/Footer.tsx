"use client"
import React, { useState } from "react"

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleButtons = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Footer */}
      <div className="paddings flex w-full flex-col items-center justify-center bg-[#080808] max-sm:text-[10px]">
        <p className=" text-center uppercase text-[#ffffffcc] max-sm:text-sm">2025 Altima, Inc. All rights reserved.</p>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center space-y-3 max-sm:right-4">
        {isOpen && (
          <>
            <div className="group relative">
              <a
                href="/comparison"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF3B30] text-white shadow-lg hover:bg-[#388E3C]"
                title="Link 1"
              >
                <img src="/pajamas_comparison.png" width={26} height={26} alt="" />
              </a>
              <span className="absolute right-full top-1/2 mr-2 hidden w-max -translate-y-1/2 rounded bg-[#FF3B30] px-2 py-1 text-xs uppercase text-white shadow-lg group-hover:block">
                Feature Comparison
              </span>
            </div>

            <div className="group relative">
              <a
                href="/warranty-policy"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF3B30] uppercase text-white shadow-lg hover:bg-[#1976D2]"
                title="Link 2"
              >
                <img src="/warranty.png" width={26} height={26} alt="" />
              </a>
              <span className="absolute right-full top-1/2 mr-2 hidden w-max -translate-y-1/2 rounded bg-[#FF3B30] px-2 py-1 text-xs uppercase text-white shadow-lg group-hover:block">
                Warranty policy
              </span>
            </div>

            <div className="group relative">
              <a
                href="/shipping-policy"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF3B30] text-white shadow-lg hover:bg-[#FFA000]"
                title="Link 3"
              >
                <img src="/la_shipping-fast.png" width={26} height={26} alt="" />
              </a>
              <span className="absolute right-full top-1/2 mr-2 hidden w-max -translate-y-1/2 rounded bg-[#FF3B30] px-2 py-1 text-xs uppercase text-white shadow-lg group-hover:block">
                Shipping Policy
              </span>
            </div>

            <div className="group relative">
              <a
                href="/installation-policy"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF3B30] text-white shadow-lg hover:bg-[#C2185B]"
                title="Link 4"
              >
                <img src="/mdi_spanner-outline.png" width={26} height={26} alt="" />
              </a>
              <span className="absolute right-full top-1/2 mr-2 hidden w-max -translate-y-1/2 rounded bg-[#FF3B30] px-2 py-1 text-xs uppercase text-white shadow-lg group-hover:block">
                Installation Policy
              </span>
            </div>
          </>
        )}

        {/* Main FAB */}
        <button
          className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-2xl ${
            isOpen ? "bg-[#151515]" : "bg-[#FF3B30]"
          }`}
          onClick={toggleButtons}
        >
          {isOpen ? (
            <img src="/mdi_cancel-bold.png" width={26} height={26} alt="" />
          ) : (
            <img src="/Files.png" width={26} height={26} alt="" />
          )}
        </button>
      </div>
    </>
  )
}

export default Footer
