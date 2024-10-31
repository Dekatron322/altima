"use client"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiChevronDown } from "react-icons/hi2"
import { LiaTimesSolid } from "react-icons/lia"

export default function Web() {
  const [isDefaultShipping, setIsDefaultShipping] = useState(true)
  const [isDefaultBilling, setIsDefaultBilling] = useState(true)

  const toggleShipping = () => setIsDefaultShipping(!isDefaultShipping)
  const toggleBilling = () => setIsDefaultBilling(!isDefaultBilling)

  const [isDefaultShippingTwo, setIsDefaultShippingTwo] = useState(true)
  const [isDefaultBillingTwo, setIsDefaultBillingTwo] = useState(true)

  const toggleShippingTwo = () => setIsDefaultShippingTwo(!isDefaultShippingTwo)
  const toggleBillingTwo = () => setIsDefaultBillingTwo(!isDefaultBillingTwo)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const opeDeletenModal = () => setIsDeleteModalOpen(true)
  const closeDeleteModal = () => setIsDeleteModalOpen(false)

  return (
    <section className="bg-black">
      <Navbar />

      <section className="paddings w-full gap-5 bg-[#080808] max-sm:px-3 max-sm:py-10 md:flex lg:h-auto lg:py-32">
        <div className="relative mb-5 max-sm:block md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex w-[160px] items-center justify-between whitespace-nowrap border border-[#FFFFFF0D] p-2 text-sm text-[#FFFFFF80]"
          >
            My Account
            <HiChevronDown className="ml-2 h-5 w-5 text-white" />
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-[160px] rounded-lg bg-[#262626] bg-[#FFFFFF1A] text-sm text-[#FFFFFF80]">
              <a href="/profile" className="block bg-[#FFFFFF1A] px-4 py-2  hover:bg-[#FFFFFF1A]">
                My Account
              </a>
              <a href="/my-account/order" className="block  px-4 py-2 hover:bg-[#FFFFFF1A]">
                Orders
              </a>
              <a href="/my-account/installment" className="block px-4 py-2 hover:bg-[#FFFFFF1A]">
                Installments
              </a>
              <p onClick={opeDeletenModal} className="block px-4 py-2 hover:bg-[#FFFFFF1A]">
                Log out
              </p>
            </div>
          )}
        </div>
        <div className="max-md:hidden">
          <a href="" className=" grid h-auto w-[180px]  bg-[#FFFFFF1A] ">
            <p className="whitespace-nowrap p-2 text-white">My Account</p>
          </a>
          <a href="/my-account/order" className="mt-[0.5px] grid h-auto  bg-[#FFFFFF0D] ">
            <p className="whitespace-nowrap p-2 text-white">Orders</p>
          </a>
          <a href="/my-account/installment" className="mt-[0.5px] grid h-auto  bg-[#FFFFFF0D] ">
            <p className="whitespace-nowrap p-2 text-white">Installments</p>
          </a>
          <div onClick={opeDeletenModal} className="mt-[0.5px] grid h-auto cursor-pointer bg-[#FFFFFF0D] ">
            <p className="whitespace-nowrap p-2 text-white">Log out</p>
          </div>
        </div>
        <div className="flex  w-full  items-center justify-between ">
          <div className="flex w-full flex-col   justify-center rounded-3xl bg-[#151515] max-sm:rounded-lg max-sm:p-2  md:p-10">
            <p className="text-center text-xl text-[#FFFFFF]">Add New Address</p>
            <p className="my-5 text-[#FFFFFF99]">Shipping Address</p>

            <div className="flex h-full w-full flex-col  rounded-lg    ">
              <div className="grid w-full grid-cols-2 justify-between max-md:grid-cols-1 md:gap-5">
                <div className="search-bg  h-[54.37px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 py-4 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="First Name (Required)"
                      className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="search-bg mb-2 h-[54.37px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 py-4 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Last Name (Required)"
                      className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="search-bg mb-2 h-[54.37px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 py-4 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                <div className="flex">
                  <input
                    type="text"
                    id="vcn"
                    placeholder="Email Address (Required)"
                    className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                    style={{ width: "100%", height: "24px" }}
                  />
                </div>
              </div>
              <div className="search-bg mb-2 h-[54.37px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 py-4 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                <div className="flex">
                  <input
                    type="text"
                    id="vcn"
                    placeholder="Street Address"
                    className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                    style={{ width: "100%", height: "24px" }}
                  />
                </div>
              </div>
              <div className="grid w-full grid-cols-2 justify-between max-md:grid-cols-1 md:gap-5">
                <div className="search-bg mb-2 h-[54.37px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 py-4 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Zip Postal Code"
                      className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="search-bg mb-2 h-[54.37px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 py-4 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="phone (Required)"
                      className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3 flex w-full items-center justify-center gap-2 self-center" onClick={toggleBillingTwo}>
              <motion.img
                src={isDefaultBillingTwo ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                width={18}
                height={18}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
              <p className="text-sm text-[#FFFFFF99] max-sm:text-xs">Set as default Billing Address</p>
            </div>

            <p className="my-5 text-[#FFFFFF99]">Billing Address</p>

            <div className="flex h-full w-full flex-col  rounded-lg    ">
              <div className="grid w-full grid-cols-2 justify-between max-md:grid-cols-1 md:gap-5">
                <div className="search-bg mb-2 h-[54.37px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 py-4 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="First Name (Required)"
                      className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="search-bg mb-2 h-[54.37px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 py-4 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Last Name (Required)"
                      className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="search-bg mb-2 h-[54.37px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 py-4 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                <div className="flex">
                  <input
                    type="text"
                    id="vcn"
                    placeholder="Email Address (Required)"
                    className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                    style={{ width: "100%", height: "24px" }}
                  />
                </div>
              </div>
              <div className="search-bg mb-2 h-[54.37px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 py-4 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                <div className="flex">
                  <input
                    type="text"
                    id="vcn"
                    placeholder="Street Address"
                    className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                    style={{ width: "100%", height: "24px" }}
                  />
                </div>
              </div>
              <div className="grid w-full grid-cols-2 justify-between max-md:grid-cols-1 md:gap-5">
                <div className="search-bg mb-2 h-[54.37px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 py-4 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Zip Postal Code"
                      className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="search-bg mb-2 h-[54.37px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 py-4 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="phone (Required)"
                      className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col  items-center justify-center rounded-3xl bg-[#151515] max-sm:rounded-lg max-sm:p-2  md:pt-10">
              <motion.a
                href="/summary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="font-regular mb-3  gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF80] px-20 py-2 text-xs uppercase text-[#FFFFFF] max-sm:py-2 "
              >
                Save
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full">
          <div className="flex flex-col  items-center justify-center">
            <ul className="flex">
              <li className="text-center text-white max-sm:text-[8px]">
                Privacy Policy , Terms of Pre-order , Refund Policy , Press Kit
              </li>
            </ul>
          </div>
        </div>
      </section>

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
