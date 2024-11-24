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

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)

  const opeDeletenModal = () => setIsDeleteModalOpen(true)

  return (
    <section className="bg-black">
      <Navbar />

      <section
        id="other-products"
        className="paddings  w-full bg-[#080808] max-sm:px-3 max-sm:py-20 lg:h-auto lg:py-32"
      >
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
        <div className="flex  w-full  items-center justify-between ">
          <div className="flex w-full flex-col   justify-center bg-[#151515] max-sm:rounded-lg max-sm:p-2  md:p-10">
            <p className="text-center text-xl text-[#FFFFFF]">Add New Address</p>
            <div className="my-3 border-b border-[#FFFFFF1A]"></div>

            <div className="mt-4 flex h-full w-full  flex-col   rounded-lg xl:px-10 ">
              <div className="flex w-full  flex-col justify-between  md:gap-5">
                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Full Name"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Contact Number"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Email Address"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
              </div>
              <p className="my-5 text-[#FFFFFF99]">
                Billing Address <span className="text-[#FF3B30]">*</span>
              </p>
              <div className="flex w-full  flex-col justify-between  md:gap-5">
                <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Street/Apartment/Office Name"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="City:"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>

                <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="State/Province:"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Postal/ZIP Code:"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Country:"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3 flex w-full items-center gap-2 self-center xl:px-10" onClick={toggleBillingTwo}>
              <motion.img
                src={isDefaultBillingTwo ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                width={18}
                height={18}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
              <p className="text-sm text-[#FFFFFF99] max-sm:text-xs">Billing Address Same as Billing Address</p>
            </div>

            <p className="my-5 text-[#FFFFFF99] xl:px-10">
              Shipping Address <span className="text-[#FF3B30]">*</span>
            </p>
            <div className="flex w-full  flex-col justify-between  md:gap-5 xl:px-10">
              <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                <div className="flex h-[46px] items-center">
                  <input
                    type="text"
                    id="vcn"
                    placeholder="Street/Apartment/Office Name"
                    className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                    style={{ width: "100%", height: "24px" }}
                  />
                </div>
              </div>
              <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                <div className="flex h-[46px] items-center">
                  <input
                    type="text"
                    id="vcn"
                    placeholder="City:"
                    className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                    style={{ width: "100%", height: "24px" }}
                  />
                </div>
              </div>

              <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                <div className="flex h-[46px] items-center">
                  <input
                    type="text"
                    id="vcn"
                    placeholder="State/Province:"
                    className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                    style={{ width: "100%", height: "24px" }}
                  />
                </div>
              </div>
              <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                <div className="flex h-[46px] items-center">
                  <input
                    type="text"
                    id="vcn"
                    placeholder="Postal/ZIP Code:"
                    className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                    style={{ width: "100%", height: "24px" }}
                  />
                </div>
              </div>
              <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                <div className="flex h-[46px] items-center">
                  <input
                    type="text"
                    id="vcn"
                    placeholder="Country:"
                    className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                    style={{ width: "100%", height: "24px" }}
                  />
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
