"use client"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
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

      <section className="paddings w-full gap-5 bg-[#080808] max-sm:px-3 max-sm:py-10 md:flex lg:h-auto lg:py-32">
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
                Address
              </a>
              <p onClick={opeDeletenModal} className="block px-4 py-2 hover:bg-[#FFFFFF1A]">
                Log out
              </p>
            </div>
          )}
        </div>

        <div className=" w-full  items-center justify-between">
          <div className="flex max-md:hidden">
            <a
              href="/profile"
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
              <p className="whitespace-nowrap p-2 text-white">My Account</p>
            </a>
            <a
              href="/my-account/order"
              className="mt-[0.5px] flex h-auto items-center gap-2 border-r border-black bg-[#FFFFFF1A]  px-4 "
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
              className="mt-[0.5px] flex h-auto items-center gap-2 border-r border-black bg-[#FFFFFF1A]  px-4 "
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
          <div className="flex w-full flex-col  justify-center bg-[#151515] max-sm:rounded-lg max-sm:p-2  md:p-10">
            <p className="text-center text-xl text-[#FFFFFF]">Orders</p>
            <p className="pb-5 text-center text-xs text-[#FFFFFF80]">
              Check your order and verify your shipping for better experience
            </p>
            <div className="mb-5 border-b border-[#FFFFFF1A]"></div>

            <div className="flex h-full flex-col  rounded-lg  bg-[#FFFFFF1A]  p-5">
              <p className="mb-2 text-lg text-white">Date Placed: October 26, 2023 | Smartheaven Order #1234567890</p>
              <div className="flex h-full   max-sm:grid max-sm:gap-5  md:gap-10">
                <div>
                  <motion.img
                    src="/renew.png"
                    width={253}
                    height={209}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                </div>
                <div className="w-full">
                  <div className="mb-5 flex items-center gap-2">
                    <motion.img
                      src="/SpinnerGap.png"
                      width={32}
                      height={32}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className=" text-center text-lg text-[#FFFFFF]">Preparing for Shipping</p>
                    <p className="text-sm text-[#FFFFFF99]">Estimated delivery: Sat, August 26</p>
                  </div>
                  <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-sm:text-lg lg:text-2xl">
                    Altima Core
                  </p>

                  <ul className="mt-22 list-inside ">
                    {/* <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Specifications : Altima Core Specifications
                  </li> */}
                    {/* <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Colour : Grey Colour</li> */}
                    <li className="pb-1 text-sm text-[#FFFFFF99] max-sm:text-xs">
                      Address : Sherif Adamu , Shereefadamu001@gmail.com
                    </li>
                    <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Status: In Progress</li>
                    {/* <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Quantity: 10,000</li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Payment: Complete</li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Order Status : In Progress</li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Date : 26 Aug, 2024 09:40am</li> */}
                  </ul>

                  {/* <p className="font-regular flex  items-center  py-4 text-2xl text-[#FFFFFF]  max-sm:text-lg lg:text-2xl">
                  <span className="text-sm">Total: </span> ₹{total.toLocaleString()}
                </p> */}

                  <div className="flex w-full gap-4">
                    <motion.a
                      href="/my-account/track-order"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.9 }}
                      className="font-regular w-full gap-2   rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-2 text-center text-sm  text-[#FFFFFF] max-sm:py-2 "
                    >
                      Change Address
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.9 }}
                      className="font-regular w-full   gap-2 rounded-lg border border-[#FFFFFF99]  px-4 py-2 text-sm  text-[#FFFFFF] max-sm:py-2 "
                      onClick={opeCancelModal}
                    >
                      Cancel Order
                    </motion.button>
                    <motion.a
                      href="/my-account/track-order"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.9 }}
                      className="font-regular w-full gap-2   rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-2 text-center text-sm  text-[#FFFFFF] max-sm:py-2 "
                    >
                      Track Order
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.9 }}
                      className="font-regular w-full   gap-2 rounded-lg border border-[#FFFFFF99]  px-4 py-2 text-sm  text-[#FFFFFF] max-sm:py-2 "
                      onClick={opeCancelModal}
                    >
                      View Details
                    </motion.button>
                  </div>
                  <div className="my-3 border-b border-[#FFFFFF1A]"></div>
                  <div className="flex items-center gap-3">
                    <p className="text-white">
                      Total Price ( 10,000 Item ) :<span className="font-bold"> ₹2,33,820</span>| Download Receipt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex h-full  flex-col  rounded-lg  bg-[#FFFFFF1A] p-5">
              <p className="mb-2 text-lg text-white">Date Placed: October 26, 2023 | Smartheaven Order #1234567890</p>
              <div className="border-b "></div>
              <div className="flex h-full   pt-4 max-sm:grid  max-sm:gap-5 md:gap-10">
                <div>
                  <motion.img
                    src="/renew.png"
                    width={253}
                    height={209}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                </div>
                <div className="w-full">
                  <div className="mb-5 flex items-center gap-2">
                    <motion.img
                      src="/Prohibit.png"
                      width={32}
                      height={32}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className=" text-center text-lg text-[#FFFFFF]">Cancelled</p>
                  </div>
                  <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-sm:text-lg lg:text-2xl">
                    Altima Core
                  </p>

                  <ul className="mt-22 list-inside ">
                    <li className="pb-1 text-sm text-[#FFFFFF99] max-sm:text-xs">
                      Address : Sherif Adamu , Shereefadamu001@gmail.com
                    </li>
                    <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Status: In Progress</li>
                  </ul>

                  <div className="flex w-full gap-4">
                    <motion.a
                      href="/my-account/track-order"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.9 }}
                      className="font-regular w-full gap-2   rounded-lg border border-[#FFFFFF99]  px-4 py-2 text-center text-sm  text-[#FFFFFF] max-sm:py-2 "
                    >
                      Track Order
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.9 }}
                      className="font-regular w-full   gap-2 rounded-lg border border-[#FFFFFF99]  px-4 py-2 text-sm  text-[#FFFFFF] max-sm:py-2 "
                      onClick={opeCancelModal}
                    >
                      View Details
                    </motion.button>
                  </div>
                  <div className="my-3 border-b border-[#FFFFFF1A]"></div>
                  <div className="flex items-center gap-3">
                    <p className="text-white">
                      Total Price ( 10,000 Item ) :<span className="font-bold"> ₹2,33,820</span>| Download Receipt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex h-full  flex-col  rounded-lg  bg-[#FFFFFF1A] p-5">
              <p className="mb-2 text-lg text-white">Date Placed: October 26, 2023 | Smartheaven Order #1234567890</p>
              <div className="border-b border-[#FFFFFF1A]"></div>
              <div className="flex h-full   pt-4 max-sm:grid  max-sm:gap-5 md:gap-10">
                <div>
                  <motion.img
                    src="/renew.png"
                    width={253}
                    height={209}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                </div>
                <div className="w-full">
                  <div className="mb-5 flex items-center gap-2">
                    <motion.img
                      src="/CheckCircle8.png"
                      width={32}
                      height={32}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className=" text-center text-lg text-[#FFFFFF]">Delivered</p>
                  </div>
                  <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-sm:text-lg lg:text-2xl">
                    Altima Core
                  </p>

                  <ul className="mt-22 list-inside ">
                    <li className="pb-1 text-sm text-[#FFFFFF99] max-sm:text-xs">
                      Address : Sherif Adamu , Shereefadamu001@gmail.com
                    </li>
                    <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Status: In Progress</li>
                  </ul>

                  <div className="flex w-full gap-4">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.9 }}
                      className="font-regular w-full   gap-2 rounded-lg border border-[#FFFFFF99]  px-4 py-2 text-sm  text-[#FFFFFF] max-sm:py-2 "
                      onClick={opeCancelModal}
                    >
                      View Details
                    </motion.button>
                  </div>
                  <div className="my-3 border-b border-[#FFFFFF1A]"></div>
                  <div className="flex items-center gap-3">
                    <p className="text-white">
                      Total Price ( 10,000 Item ) :<span className="font-bold"> ₹2,33,820</span>| Download Receipt
                    </p>
                  </div>
                </div>
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

      {isCancelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000] bg-opacity-95">
          <div className="w-full max-w-sm rounded-lg bg-[#151515] p-4 text-white">
            <div className="mb-4 flex w-full items-center">
              <h2 className=" w-full text-center text-[#FFFFFF99]">Cancel Order</h2>
              <LiaTimesSolid onClick={closeCancelModal} className="cursor-pointer" />
            </div>
            <p className="w-full text-center text-2xl text-white">Are you sure you want to Cancel this order?</p>
            <div className="mt-4 flex gap-2">
              <button className="w-full  rounded-lg border border-[#FFFFFF99] bg-[#FF3B3B] px-4 py-2 text-[#000000]  hover:bg-[#FF3B3B]">
                Yes, Cancel
              </button>
              <button
                onClick={closeCancelModal}
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
