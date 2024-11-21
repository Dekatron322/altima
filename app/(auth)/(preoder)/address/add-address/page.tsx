"use client"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

import Navbar from "components/Navbar/Navbar"
import { useState } from "react"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"

export default function Web() {
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
        className="paddings  w-full bg-[#080808] max-sm:px-3 max-sm:py-20 lg:h-auto lg:py-32"
      >
        <div className="flex  w-full  items-center justify-between md:px-10">
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
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
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
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
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
                    className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
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
                    className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
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
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
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
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
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
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
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
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
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
                    className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
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
                    className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
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
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
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
                      className="h-[24px] w-full bg-transparent text-base outline-none focus:outline-none"
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

      <MainFooter />

      <Footer />
    </section>
  )
}
