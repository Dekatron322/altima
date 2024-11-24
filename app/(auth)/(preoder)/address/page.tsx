"use client"
import { Metadata } from "next"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import { HiChevronDown } from "react-icons/hi2"

export default function Web() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate elements once
    })
  }, [])

  const [isDefaultShipping, setIsDefaultShipping] = useState(true)
  const [isDefaultBilling, setIsDefaultBilling] = useState(true)

  const toggleShipping = () => setIsDefaultShipping(!isDefaultShipping)
  const toggleBilling = () => setIsDefaultBilling(!isDefaultBilling)

  const [isDefaultShippingTwo, setIsDefaultShippingTwo] = useState(true)
  const [isDefaultBillingTwo, setIsDefaultBillingTwo] = useState(true)

  const toggleShippingTwo = () => setIsDefaultShippingTwo(!isDefaultShippingTwo)
  const toggleBillingTwo = () => setIsDefaultBillingTwo(!isDefaultBillingTwo)

  const [quantity, setQuantity] = useState(1000)

  // Handlers for increment and decrement
  const handleIncrement = () => setQuantity(quantity + 1)
  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1) // Prevent negative quantity
  }

  const unitPrice = 500050 // price per unit
  const total = quantity * unitPrice
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)

  const opeDeletenModal = () => setIsDeleteModalOpen(true)
  const closeDeleteModal = () => setIsDeleteModalOpen(false)

  const opeCancelModal = () => setIsCancelModalOpen(true)
  const closeCancelModal = () => setIsCancelModalOpen(false)

  return (
    <section className="bg-black">
      <Navbar />

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 max-sm:py-20 lg:h-screen lg:py-32">
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
              <p onClick={opeDeletenModal} className="block px-4 py-2 hover:bg-[#FFFFFF1A]">
                Log out
              </p>
            </div>
          )}
        </div>
        <div className="flex w-full  flex-col  md:px-10">
          <div className="flex max-md:hidden">
            <a
              href="/profile"
              className="mt-[0.5px] flex h-auto items-center gap-2 border-r border-black bg-[#FFFFFF0D]  px-4 "
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
              className="mt-[0.5px] flex h-auto items-center gap-2 border-r border-black bg-[#FFFFFF1A]  px-4 "
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
              className="mt-[0.5px] flex h-auto items-center gap-2 border-r border-black bg-[#FFFFFF0D]  px-4 "
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
          <div className="flex w-full flex-col items-center  justify-center  bg-[#151515] pt-3 max-sm:rounded-lg max-sm:p-2  md:p-10">
            <motion.a
              href="/address/add-address"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="font-regular my-3  gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF80] px-4 py-2 text-xs uppercase text-[#FFFFFF] max-sm:py-2 "
            >
              Add New Address
            </motion.a>

            <div className="flex h-full  w-full   rounded-lg bg-[#FFFFFF1A]   max-sm:grid max-sm:gap-5  md:gap-10">
              <div className="flex w-full flex-col">
                <ul className=" list-inside p-5">
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    <span className="text-[#FFFFFF80]">Name:</span> Sherif Adamu
                  </li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    <span className="text-[#FFFFFF80]">Email:</span> Shereefadamu001@gmail.com
                  </li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    <span className="text-[#FFFFFF80]">Address:</span> No5 ajika street, Sabo road, Unguwan Rimi,
                    Kaduna, Nigeria
                  </li>
                </ul>
                <div className="flex flex-col gap-2 px-5 pb-3">
                  <div className="flex items-center gap-2" onClick={toggleShipping}>
                    <motion.img
                      src={isDefaultShipping ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF99] max-sm:text-xs">Set as default Shipping Address</p>
                  </div>
                  <div className="flex items-center gap-2" onClick={toggleBilling}>
                    <motion.img
                      src={isDefaultBilling ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF99] max-sm:text-xs">Set as default Billing Address</p>
                  </div>
                </div>

                <div className="flex border-b border-[#FFFFFF1A]"></div>
                <div className="flex flex-col gap-2 px-5 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-[#FFFFFF80]">Edit</p>
                      <motion.img
                        src="/PencilSimple.png"
                        width={18}
                        height={18}
                        alt=""
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeIn" }}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-[#FFFFFF80]">Delete</p>
                      <motion.img
                        src="/TrashNew.png"
                        width={18}
                        height={18}
                        alt=""
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeIn" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex h-full w-full rounded-lg  bg-[#FFFFFF1A]   max-sm:grid max-sm:gap-5  md:gap-10">
              <div className="flex w-full flex-col">
                <ul className=" list-inside p-5">
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    <span className="text-[#FFFFFF80]">Name:</span> Sherif Adamu
                  </li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    <span className="text-[#FFFFFF80]">Email:</span> Shereefadamu001@gmail.com
                  </li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    <span className="text-[#FFFFFF80]">Address:</span> No5 ajika street, Sabo road, Unguwan Rimi,
                    Kaduna, Nigeria
                  </li>
                </ul>
                <div className="flex flex-col gap-2 px-5 pb-3">
                  <div className="flex items-center gap-2" onClick={toggleShippingTwo}>
                    <motion.img
                      src={isDefaultShippingTwo ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF99] max-sm:text-xs">Set as default Shipping Address</p>
                  </div>
                  <div className="flex items-center gap-2" onClick={toggleBillingTwo}>
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
                </div>

                <div className="flex w-full border-b border-[#FFFFFF1A]"></div>
                <div className="flex flex-col gap-2 px-5 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-[#FFFFFF80]">Edit</p>
                      <motion.img
                        src="/PencilSimple.png"
                        width={18}
                        height={18}
                        alt=""
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeIn" }}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-[#FFFFFF80]">Delete</p>
                      <motion.img
                        src="/TrashNew.png"
                        width={18}
                        height={18}
                        alt=""
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeIn" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />

      <Footer />
    </section>
  )
}
