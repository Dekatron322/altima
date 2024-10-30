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
        className="paddings  w-full bg-[#080808] max-sm:px-3 max-sm:py-20 lg:h-screen lg:py-32"
      >
        <div className=" w-full  items-center justify-between md:px-10">
          <div className="flex w-full flex-col  justify-center rounded-3xl bg-[#151515] max-sm:rounded-lg max-sm:p-2  md:p-10">
            <p className="text-center text-xl text-[#FFFFFF]">Orders</p>
            <p className="py-5 text-xs text-[#FFFFFF80]">
              ✓Estimated delivery date: 4-5 months after the preorder window closes
            </p>
            <p className="pb-5 text-xs text-[#FFFFFF80]">
              ✓A note: Preorders require a 30% deposit at the time of booking. The remaining balance is due before
              shipment, with a final payment notice sent prior to delivery. Deposits are non-refundable but can be
              adjusted against the final payment.
            </p>
            <div className="flex h-full  rounded-lg  bg-[#FFFFFF1A]  p-5 max-sm:grid max-sm:gap-5  md:gap-10">
              <div>
                <motion.img
                  src="/preorder.png"
                  width={444}
                  height={302}
                  alt=""
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeIn" }}
                />
              </div>
              <div className="">
                <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-sm:text-lg lg:text-2xl">
                  Altima Core
                </p>

                <ul className="mt-6 list-inside ">
                  <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Specifications : Altima Core Specifications</li>
                  <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Colour : Grey Colour</li>
                  <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">
                    Address : Sherif Adamu , Shereefadamu001@gmail.com
                  </li>
                </ul>

                <p className="mt-5 text-[#FFFFFF]">Status : In Progress</p>

                <div className="mt-5 flex max-w-[160px] items-center justify-center gap-2  rounded-md bg-[#FFFFFF99] px-2 py-1">
                  <button onClick={handleIncrement}>
                    <motion.img
                      src="/+.png"
                      width={16}
                      height={48}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                  </button>
                  <p className="rounded-md border px-2 py-1 text-[#FFFFFF]">{quantity}</p>

                  <button onClick={handleDecrement}>
                    <motion.img
                      src="/-.png"
                      width={13}
                      height={48}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                  </button>
                </div>

                <ul className="mt-6 list-inside ">
                  <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Payment: Complete</li>
                  <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Order Status : In Progress</li>
                  <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Date : 26 Aug, 2024 09:40am</li>
                </ul>

                <p className="font-regular flex  items-center  py-4 text-2xl text-[#FFFFFF]  max-sm:text-lg lg:text-2xl">
                  <span className="text-sm">Total: </span> ₹{total.toLocaleString()}
                </p>

                <motion.a
                  href="/address"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular   gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-2 max-sm:text-sm "
                >
                  Procees To Checkout
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
