"use client"
import Footer from "components/Footer/Footer"
import "aos/dist/aos.css"

import Navbar from "components/Navbar/Navbar"
import { SetStateAction, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { HiChevronDown } from "react-icons/hi2"
import { LiaTimesSolid } from "react-icons/lia"
import MainFooter from "components/Footer/MainFooter"

export default function Web() {
  const [activeTab, setActiveTab] = useState("info")
  const [isDefaultShipping, setIsDefaultShipping] = useState(true)
  const [isDefaultBilling, setIsDefaultBilling] = useState(true)

  const toggleShipping = () => setIsDefaultShipping(!isDefaultShipping)
  const toggleBilling = () => setIsDefaultBilling(!isDefaultBilling)

  const [isDefaultShippingTwo, setIsDefaultShippingTwo] = useState(true)
  const [isDefaultBillingTwo, setIsDefaultBillingTwo] = useState(true)

  const toggleShippingTwo = () => setIsDefaultShippingTwo(!isDefaultShippingTwo)
  const toggleBillingTwo = () => setIsDefaultBillingTwo(!isDefaultBillingTwo)

  const toggleTab = (tab: SetStateAction<string>) => setActiveTab(tab)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const opeDeletenModal = () => setIsDeleteModalOpen(true)
  const closeDeleteModal = () => setIsDeleteModalOpen(false)

  return (
    <section className="bg-black">
      <Navbar />
      <section className="paddings w-full gap-5 bg-[#080808] max-sm:px-3 max-sm:py-10 md:flex lg:min-h-screen lg:py-32">
        <div className="relative mb-5 max-sm:block md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex w-[160px] items-center justify-between whitespace-nowrap border border-[#FFFFFF0D] p-2 text-sm text-[#FFFFFF80]"
          >
            Address
            <HiChevronDown className="ml-2 h-5 w-5 text-white" />
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-[160px] rounded-lg bg-[#262626] text-sm text-[#FFFFFF80]">
              <a href="/profile" className="block px-4 py-2   hover:bg-[#FFFFFF1A]">
                My Account
              </a>
              <a href="/my-account/order" className="block bg-[#FFFFFF1A] px-4 py-2 hover:bg-[#FFFFFF1A]">
                Orders
              </a>
              <a href="/address" className="block px-4 py-2 hover:bg-[#FFFFFF1A]">
                Address
              </a>
              <p onClick={opeDeletenModal} className="block cursor-pointer px-4 py-2 hover:bg-[#FFFFFF1A]">
                Log out
              </p>
            </div>
          )}
        </div>

        <div className="flex w-full  flex-col  md:px-10">
          <div className="flex max-md:hidden">
            <a
              href="/profile"
              className="mt-[0.5px] flex h-auto cursor-pointer items-center gap-2 border-r border-black bg-[#FFFFFF1A]  px-4 "
            >
              <motion.img
                src="/GearSix.png"
                width={20}
                height={20}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
              <p className="whitespace-nowrap p-2 text-white">My Account</p>
            </a>
            <a
              href="/my-account/order"
              className="mt-[0.5px] flex h-auto items-center gap-2 border-r border-black bg-[#FFFFFF0D]  px-4 "
            >
              <motion.img
                src="/ListDashes.png"
                width={20}
                height={20}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
              <p className="whitespace-nowrap p-2 text-white">Orders</p>
            </a>
            <a
              href="/address"
              className="mt-[0.5px] flex h-auto cursor-pointer items-center gap-2 border-r border-black bg-[#FFFFFF0D]  px-4 "
            >
              <motion.img
                src="/GearSix.png"
                width={20}
                height={20}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
              <p className="whitespace-nowrap p-2 text-white">My Address</p>
            </a>
            <div
              onClick={opeDeletenModal}
              className="mt-[0.5px] flex h-auto cursor-pointer items-center gap-2 border-r border-black bg-[#FFFFFF0D]  px-4 "
            >
              <motion.img
                src="/SignOut.png"
                width={20}
                height={20}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
              <p className="whitespace-nowrap p-2 text-white">Log out</p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center  bg-[#151515] max-sm:rounded-lg max-sm:p-2 md:p-10">
            <p className="mb-10 text-center text-xl text-[#FFFFFF]">My Account</p>

            <div className="flex h-full w-full flex-col rounded-lg">
              <div className="grid w-full grid-cols-2 justify-between max-md:grid-cols-1 md:gap-5">
                <div className="search-bg h-[54.37px] w-full rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3 py-4">
                  <input
                    type="text"
                    placeholder="First Name (Required)"
                    className="w-full bg-transparent text-base text-white outline-none"
                  />
                </div>
                <div className="search-bg h-[54.37px] w-full rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3 py-4">
                  <input
                    type="text"
                    placeholder="Last Name (Required)"
                    className="w-full bg-transparent text-base text-white outline-none"
                  />
                </div>
              </div>
              <div className="search-bg mt-2 h-[54.37px] w-full rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3 py-4">
                <input
                  type="text"
                  placeholder="Email Address (Required)"
                  className="w-full bg-transparent text-base text-white outline-none"
                />
              </div>
              <div className="search-bg mt-2 h-[54.37px] w-full rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3 py-4">
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full bg-transparent text-base text-white outline-none"
                />
              </div>

              <div className="mt-8 flex w-full items-center justify-center">
                <motion.a
                  href="/summary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF80] px-20 py-2 text-xs uppercase text-[#FFFFFF] max-sm:py-2"
                >
                  Save
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000] bg-opacity-95">
          <div className="w-full max-w-sm rounded-lg bg-[#151515] p-4 text-white">
            <div className="mb-4 flex w-full items-center">
              <h2 className=" w-full text-center text-[#FFFFFF99]">Log Out</h2>
              <LiaTimesSolid onClick={closeDeleteModal} className="cursor-pointer" />
            </div>
            <p className="w-full text-center text-2xl text-white">Are you sure you want to log out?</p>
            <div className="mt-4 flex gap-2">
              <button className="w-full  rounded-lg border border-[#FFFFFF99] bg-[#FF3B3B] px-4 py-2 text-[#000000]  hover:bg-[#FF3B3B]">
                Yes, Log Out
              </button>
              <button
                onClick={closeDeleteModal}
                className="w-full rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-2 text-[#ffffff]  hover:bg-[#FF3B3B]"
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </section>
  )
}
