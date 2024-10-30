"use client"
import { Metadata } from "next"
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

  const [isDefaultShipping, setIsDefaultShipping] = useState(true)
  const [isDefaultBilling, setIsDefaultBilling] = useState(true)

  const toggleShipping = () => setIsDefaultShipping(!isDefaultShipping)
  const toggleBilling = () => setIsDefaultBilling(!isDefaultBilling)

  const [isDefaultShippingTwo, setIsDefaultShippingTwo] = useState(true)
  const [isDefaultBillingTwo, setIsDefaultBillingTwo] = useState(true)

  const toggleShippingTwo = () => setIsDefaultShippingTwo(!isDefaultShippingTwo)
  const toggleBillingTwo = () => setIsDefaultBillingTwo(!isDefaultBillingTwo)

  return (
    <section className="bg-black">
      <Navbar />

      <section
        id="other-products"
        className="paddings  w-full bg-[#080808] max-sm:px-3 max-sm:py-20 lg:h-screen lg:py-32"
      >
        <div className="flex  w-full  items-center justify-between md:px-10">
          <div className="flex w-full flex-col  items-center justify-center rounded-3xl bg-[#151515] max-sm:rounded-lg max-sm:p-2  md:p-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="font-regular mb-3  gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF80] px-4 py-2 text-xs uppercase text-[#FFFFFF] max-sm:py-2 "
            >
              Add New Address
            </motion.button>

            <div className="flex h-full  rounded-lg  bg-[#FFFFFF1A]   max-sm:grid max-sm:gap-5  md:gap-10">
              <div className="">
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

            <div className="mt-3 flex h-full rounded-lg  bg-[#FFFFFF1A]   max-sm:grid max-sm:gap-5  md:gap-10">
              <div className="">
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
