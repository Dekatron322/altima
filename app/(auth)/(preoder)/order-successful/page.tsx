"use client"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

  return (
    <section className="bg-black">
      <Navbar />

      <section
        id="other-products"
        className="paddings items-center  justify-center bg-[#080808] max-sm:px-3 max-sm:py-20 lg:h-auto lg:py-32"
      >
        <div className="flex   items-center justify-center md:px-10">
          <div className="flex  flex-col    rounded-3xl bg-[#151515] max-sm:rounded-lg max-sm:p-2  md:p-5">
            <div className="flex items-center gap-2 py-3">
              <motion.img
                src="/CaretUp.png"
                width={16}
                height={16}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
              <p className=" text-start text-sm text-[#FFFFFF80]"> Add New Address</p>
            </div>

            <div className="grid h-full w-full items-center  rounded-lg  bg-[#FFFFFF1A]  p-5 max-sm:grid max-sm:gap-5  md:gap-10">
              <div className="flex w-full items-center justify-center">
                <motion.img
                  src="/CheckCircle.png"
                  width={200}
                  height={200}
                  alt=""
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeIn" }}
                  className="max-sm:hidden"
                />
                <motion.img
                  src="/CheckCircle.png"
                  width={150}
                  height={150}
                  alt=""
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeIn" }}
                  className="md:hidden"
                />
              </div>
              <div className="w-full">
                <p className="font-regular flex  w-full text-center  text-lg  text-[#FFFFFF99]  max-sm:text-lg lg:text-lg">
                  Pre-Order Placed Successfully
                </p>

                <ul className="mt-6 list-inside ">
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Specifications : Altima Core Specifications
                  </li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Colour : Grey Colour</li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Address : Sherif Adamu,</li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Status : In Progress</li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Quantity : 10,000</li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Payment: Complete</li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Order Status : In Progress</li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Date : 26 Aug, 2024 09:40am</li>
                </ul>

                <ul className="mt-6 list-inside "></ul>

                <p className="font-regular flex  items-center  py-4 text-2xl text-[#FFFFFF]  max-sm:text-lg lg:text-2xl">
                  <span className="text-sm">Total: </span> ₹{total.toLocaleString()}
                </p>

                <motion.a
                  href="/my-account/order"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular flex w-full justify-center  gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-2 max-sm:text-sm "
                >
                  Manage Preorder
                </motion.a>
              </div>
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

      <Footer />
    </section>
  )
}