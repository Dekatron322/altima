"use client"
import { Metadata } from "next"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

import Image from "next/image"
import Link from "next/link"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import AuthProviders from "components/ProvidersComponents/AuthProviders"
import Accordion from "components/Accordion/Accordion"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { HiChevronDown } from "react-icons/hi2"
import { LiaTimesSolid } from "react-icons/lia"
import MainFooter from "components/Footer/MainFooter"

export default function Web() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate elements once
    })
  }, [])

  const [quantity, setQuantity] = useState(1000)

  // Handlers for increment and decrement
  const handleIncrement = () => setQuantity(quantity + 1)
  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1) // Prevent negative quantity
  }

  const unitPrice = 500050 // price per unit
  const total = quantity * unitPrice

  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const opeDeletenModal = () => setIsDeleteModalOpen(true)
  const closeDeleteModal = () => setIsDeleteModalOpen(false)

  return (
    <section className="bg-black">
      <Navbar />

      <section className="paddings w-full gap-5  bg-[#080808] max-sm:px-3 max-sm:py-10 md:flex lg:h-auto lg:py-32">
        <div className="relative mb-5 max-sm:block md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex w-[160px] items-center justify-between whitespace-nowrap border border-[#FFFFFF0D] p-2 text-sm text-[#FFFFFF80]"
          >
            Orders
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
          <a href="/profile" className=" grid h-auto w-[180px]  bg-[#FFFFFF0D] ">
            <p className="whitespace-nowrap p-2 text-white">My Account</p>
          </a>
          <a href="/my-account/order" className="mt-[0.5px] grid h-auto  bg-[#FFFFFF1A] ">
            <p className="whitespace-nowrap p-2 text-white">Orders</p>
          </a>
          <a href="/my-account/installment" className="mt-[0.5px] grid h-auto  bg-[#FFFFFF0D] ">
            <p className="whitespace-nowrap p-2 text-white">Installments</p>
          </a>
          <div onClick={opeDeletenModal} className="mt-[0.5px] grid h-auto cursor-pointer  bg-[#FFFFFF0D] ">
            <p className="whitespace-nowrap p-2 text-white">Log out</p>
          </div>
        </div>
        <div className=" w-full  items-center justify-between ">
          <div className="flex w-full flex-col  justify-center rounded-3xl bg-[#151515] max-sm:rounded-lg max-sm:p-2  md:px-10 md:py-5">
            <div className="mb-3 flex w-full">
              <motion.img
                src="/ArrowUp.png"
                width={32}
                height={16}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="cursor-pointer"
                onClick={handleGoBack}
              />
              <p className="w-full text-center text-xl text-[#FFFFFF]">Altima Core Model</p>
            </div>

            <div className="flex h-full  rounded-lg  bg-[#FFFFFF1A]  p-5 max-sm:grid max-sm:gap-5  md:gap-10">
              <div className="">
                <ul className=" list-inside ">
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">ORDER ID: 234567890</li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Order Processed: Feb 24 2024, 09:10am
                  </li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Order Completed: Feb 24 2024, 09:10am
                  </li>
                </ul>
              </div>
            </div>

            <p className="my-4 text-[#FFFFFF99]">Order Process</p>

            <div className="mb-5 flex  h-full  rounded-lg  bg-[#FFFFFF1A] p-3 max-sm:grid max-sm:gap-5 md:gap-10">
              <div className="  w-full    ">
                <div className="flex flex-col items-center justify-center">
                  <Image src="/process.png" width={1070} height={60} alt="" className=" max-sm:hidden" />
                  <Image src="/proSmall.png" width={314} height={60} alt="" className="sm:hidden" />
                </div>
              </div>
            </div>

            <p className="my-4 text-[#FFFFFF99] max-sm:hidden">Product Details</p>

            <div className="flex h-full  items-center rounded-lg bg-[#FFFFFF1A]  p-5 max-sm:hidden  max-sm:gap-5 md:gap-10">
              <motion.img
                src="/smallImage.png"
                width={106}
                height={106}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />

              <div className="w-full">
                <div className="mb-3 flex w-full items-center justify-between gap-4">
                  <p className="text-[#FFFFFF99]">Altima Core</p>
                </div>
                <div className="mb-3 flex w-full items-center justify-between gap-4">
                  <p className="text-[#FFFFFF99]">Colour: Black</p>
                  <p className="text-[#FFFFFF99]">Sub Total: $20,000</p>
                </div>
                <div className="flex w-full items-center justify-between gap-4">
                  <p className="text-[#FFFFFF99]">$0.76 X1000</p>
                  <p className="text-[#FFFFFF99]">Total $10,0000</p>
                </div>
              </div>
            </div>

            <p className="my-4 text-[#FFFFFF99]">Product Details</p>

            <div className="flex h-full  rounded-lg  bg-[#FFFFFF1A]  p-5 max-sm:grid max-sm:gap-5  md:gap-10">
              <div className="">
                <p className="pb-4 text-white">Altima Core</p>
                <ul className=" list-inside ">
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Altima Core Specifications</li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Colour : Grey Colour</li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Address : Sherif Adamu , Shereefadamu001@gmail.com, View Address
                  </li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Status : In Progress</li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Quantity : 10,000</li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Payment: Complete</li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Order Status : In Progress</li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Date : 26 Aug, 2024 09:40am</li>
                </ul>
                <p className="font-regular flex  items-center  py-4 text-2xl text-[#FFFFFF]  max-sm:text-lg lg:text-2xl">
                  <span className="text-sm">Total: </span> ₹{total.toLocaleString()}
                </p>
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
