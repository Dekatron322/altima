"use client"
import { Metadata } from "next"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"

import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import Image from "next/image"

export default function Web() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate elements once
    })
  }, [])

  const [quantity, setQuantity] = useState(1000)
  const [isDefaultBillingTwo, setIsDefaultBillingTwo] = useState(true)
  const [isDefaultEmail, setIsDefaultEmail] = useState(true)
  const [isDefaultPhone, setIsDefaultPhone] = useState(true)
  const [isDefaultWhatsapp, setIsDefaultWhatsapp] = useState(true)
  const [isDefaultRadio, setIsDefaultRadio] = useState(true)
  const [selectedRadio, setSelectedRadio] = useState("Altima Core")

  // Define unit prices for each option
  const unitPrices: { [key: string]: number } = {
    "Altima Core": 500050,
    "Altima Elite": 750075,
  }

  const handleIncrement = () => setQuantity(quantity + 1)
  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1) // Prevent negative quantity
  }

  const toggleRadio = (option: string) => {
    setSelectedRadio(option)
  }

  const total = quantity * (unitPrices[selectedRadio] ?? 0)
  const toggleBillingTwo = () => setIsDefaultBillingTwo(!isDefaultBillingTwo)
  const togglePhone = () => setIsDefaultPhone(!isDefaultPhone)
  const toggleEmail = () => setIsDefaultEmail(!isDefaultEmail)
  const toggleWhatsapp = () => setIsDefaultWhatsapp(!isDefaultWhatsapp)

  const unitPrice = unitPrices[selectedRadio] ?? 0

  return (
    <section className="bg-[#151515]">
      <Navbar />

      <section className="paddings  w-full  max-sm:px-3 max-sm:py-10 lg:h-auto lg:py-32">
        <div className=" w-auto  items-center justify-between  md:px-10">
          <div className="ms:p-10 flex w-full flex-col  items-center justify-center  rounded-3xl max-sm:rounded-lg  max-sm:p-2">
            <p className="text-center text-xl text-[#FFFFFF]">Pre-Order form</p>
            <p className="py-5 text-center text-xs text-[#FFFFFF80]">
              ✓Estimated delivery date: 4-5 months after the preorder window closes
            </p>
            <p className="pb-5 text-center text-xs text-[#FFFFFF80] 2xl:w-[580px]">
              ✓A note: Preorders require a 30% deposit at the time of booking. The remaining balance is due before
              shipment, with a final payment notice sent prior to delivery. Deposits are non-refundable but can be
              adjusted against the final payment.
            </p>

            <div className="flex h-full w-full flex-col  rounded-lg border border-[#FFFFFF0D]    max-sm:grid max-sm:gap-5  md:gap-5">
              <div className="grid gap-5 px-5 pt-5">
                <p className="py-2 text-xl font-medium text-white">
                  User Information/Address <span className="text-[#FF3B30]">*</span>
                </p>
                <div className=" flex w-full items-center gap-2 " onClick={toggleEmail}>
                  <motion.img
                    src={isDefaultEmail ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Use new Address</p>
                </div>

                <div className=" flex w-full items-center gap-2 " onClick={togglePhone}>
                  <motion.img
                    src={isDefaultPhone ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Use Default Address</p>
                </div>
              </div>
              <div className="flex w-full border-b border-[#FFFFFF0D]"></div>
              <div className="grid gap-5 px-5 pt-5">
                <p className="py-2 text-xl font-medium text-white">
                  User Information <span className="text-[#FF3B30]">*</span>
                </p>

                <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
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

                <div className=" w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
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

                <p className="py-2 text-lg font-medium text-white">
                  Billing Address<span className="text-[#FF3B30]">*</span>
                </p>
                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
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

                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="City"
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
                      placeholder="State/Province:"
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
                      placeholder="Postal/ZIP Code:"
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
                      placeholder="Country"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className=" flex w-full items-center gap-2 " onClick={toggleBillingTwo}>
                  <motion.img
                    src={isDefaultBillingTwo ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Set as default Billing Address</p>
                </div>

                <p className="py-2 text-lg font-medium text-white">
                  Shipping Address<span className="text-[#FF3B30]">*</span>
                </p>
                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
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
                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="City"
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
                      placeholder="State/Province:"
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
                      placeholder="Postal/ZIP Code:"
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
                      placeholder="Country"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="border border-[#FFFFFF0D]"></div>
              <div className="grid gap-5 px-5">
                <p className="py-2 text-lg font-medium text-white">
                  Preferred Contact Info<span className="text-[#FF3B30]">*</span>
                </p>

                <div className=" flex w-full items-center gap-2 " onClick={toggleEmail}>
                  <motion.img
                    src={isDefaultEmail ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Email</p>
                </div>

                <div className=" flex w-full items-center gap-2 " onClick={togglePhone}>
                  <motion.img
                    src={isDefaultPhone ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Phone</p>
                </div>

                <div className=" flex w-full items-center gap-2 " onClick={toggleWhatsapp}>
                  <motion.img
                    src={isDefaultWhatsapp ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Whatsapp</p>
                </div>
              </div>
              <div className="border border-[#FFFFFF0D]"></div>

              <div className="px-5">
                <p className="pb-5 text-lg font-medium text-white">
                  Product Selection<span className="text-[#FF3B30]">*</span>
                </p>

                {/* Altima Core Radio */}
                <div className="flex w-full items-center gap-2" onClick={() => toggleRadio("Altima Core")}>
                  <motion.img
                    src={selectedRadio === "Altima Core" ? "/fluent_radio-button-24-filled.png" : "/radio.png"}
                    width={18}
                    height={18}
                    alt="Altima Core"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Altima Core</p>
                </div>

                {/* Altima Elite Radio */}
                <div className="my-4 flex w-full items-center gap-2" onClick={() => toggleRadio("Altima Elite")}>
                  <motion.img
                    src={selectedRadio === "Altima Elite" ? "/fluent_radio-button-24-filled.png" : "/radio.png"}
                    width={18}
                    height={18}
                    alt="Altima Elite"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Altima Elite</p>
                </div>

                <p className="mt-6 text-sm text-[#FFFFFF]">Quantity</p>

                <div className="mt-1 flex  items-center gap-3 rounded-md ">
                  <button
                    onClick={handleDecrement}
                    className="flex h-[48px] w-[107px] items-center justify-center rounded-md bg-[#282828] max-sm:w-full"
                  >
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

                  <p className=" flex h-[48px] w-[107px] items-center justify-center rounded-md border bg-[#282828] px-2 py-1 text-[#FFFFFF]">
                    {quantity}
                  </p>

                  <button
                    onClick={handleIncrement}
                    className="flex h-[48px] w-[107px] items-center justify-center rounded-md bg-[#282828] max-sm:w-full"
                  >
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
                </div>

                <p className="font-regular flex  items-center  py-4 text-2xl text-[#FFFFFF]  max-sm:text-lg lg:text-2xl">
                  <span className="text-sm">Total: </span> ₹{total.toLocaleString()}
                </p>
              </div>

              <div className="border border-[#FFFFFF0D]"></div>

              <div className="px-5">
                <p className="pb-5 text-lg font-medium text-white">
                  Door Specifications<span className="text-[#FF3B30]">*</span>
                </p>

                {/* Altima Core Radio */}
                <div className="flex w-full items-center gap-2 pb-5" onClick={() => toggleRadio("Altima Core")}>
                  <motion.img
                    src={selectedRadio === "Altima Core" ? "/fluent_radio-button-24-filled.png" : "/radio.png"}
                    width={18}
                    height={18}
                    alt="Altima Core"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Standard Size</p>
                </div>

                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Default Size"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>

                {/* Altima Elite Radio */}
                <div className="my-4 flex w-full items-center gap-2" onClick={() => toggleRadio("Altima Elite")}>
                  <motion.img
                    src={selectedRadio === "Altima Elite" ? "/fluent_radio-button-24-filled.png" : "/radio.png"}
                    width={18}
                    height={18}
                    alt="Altima Elite"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Input Dimension</p>
                </div>

                <div className="mb-4 grid gap-3 lg:grid-cols-3">
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Width"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>{" "}
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Hight"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>{" "}
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Cm"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                </div>

                <label className="text-sm text-white">Frame Type</label>
                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Wood"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className=" text-sm text-white">Material</label>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Wood"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <label className=" text-sm text-white">Finish</label>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Wood"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <label className=" text-sm text-white">Handle Placement</label>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Left"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#FFFFFF0D]"></div>
              <div className="grid gap-5 px-5">
                <p className="py-2 text-lg font-medium text-white">
                  Additional Security<span className="text-[#FF3B30]">*</span>
                </p>

                <div className=" flex w-full items-center gap-2 " onClick={toggleEmail}>
                  <motion.img
                    src={isDefaultEmail ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Re enforced lock</p>
                </div>

                <div className=" flex w-full items-center gap-2 " onClick={togglePhone}>
                  <motion.img
                    src={isDefaultPhone ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Anti Theft</p>
                </div>

                <div className=" flex w-full items-center gap-2 " onClick={toggleWhatsapp}>
                  <motion.img
                    src={isDefaultWhatsapp ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Alarm</p>
                </div>

                <div className=" flex w-full items-center gap-2 " onClick={toggleWhatsapp}>
                  <motion.img
                    src={isDefaultWhatsapp ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Motion sensor</p>
                </div>
              </div>

              <div className="border border-[#FFFFFF0D]"></div>
              <div className="grid gap-5 px-5">
                <p className="py-2 text-lg font-medium text-white">
                  Smart Hub feature (integrated Devices)<span className="text-[#FF3B30]">*</span>
                </p>

                <div className=" flex w-full items-center gap-2 " onClick={toggleEmail}>
                  <motion.img
                    src={isDefaultEmail ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Video door Bell</p>
                </div>

                <div className=" flex w-full items-center gap-2 " onClick={togglePhone}>
                  <motion.img
                    src={isDefaultPhone ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Intercom System</p>
                </div>

                <div className=" flex w-full items-center gap-2 " onClick={toggleWhatsapp}>
                  <motion.img
                    src={isDefaultWhatsapp ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Camera</p>
                </div>

                <div className=" flex w-full items-center gap-2 " onClick={toggleWhatsapp}>
                  <motion.img
                    src={isDefaultWhatsapp ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Voice assistant integration</p>
                </div>
              </div>
              <div className="border border-[#FFFFFF0D]"></div>
              <div className="p-5">
                <label className=" text-sm text-white">Connectivity</label>
                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Wifi"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="border border-[#FFFFFF0D]"></div>
              <div className="p-5">
                <label className=" text-sm text-white">Power Source</label>
                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Wifi"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="border border-[#FFFFFF0D]"></div>
              <div className="p-5">
                <label className=" text-sm text-white">Type of Installation</label>
                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Wifi"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="border border-[#FFFFFF0D]"></div>
              <div className="p-5">
                <label className=" text-sm text-white">Preferred Installation Date</label>
                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="date"
                      id="vcn"
                      placeholder="Left"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="border border-[#FFFFFF0D]"></div>
              <div className="p-5">
                <label className=" text-sm text-white">Special Installation Instructions</label>
                <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      id="vcn"
                      placeholder="Enter Text"
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="border border-[#FFFFFF0D]"></div>
              <div className="grid gap-5 px-5">
                <p className="py-2 text-lg font-medium text-white">Extended Warranty:</p>

                <div className=" flex w-full items-center gap-2 " onClick={toggleEmail}>
                  <motion.img
                    src={isDefaultEmail ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">
                    Yes, I want extended warranty for an additional fee
                  </p>
                </div>
              </div>
              <div className="border border-[#FFFFFF0D]"></div>
              <div className="grid gap-5 px-5">
                <p className="py-2 text-lg font-medium text-white">Installation Support:</p>

                <div className=" flex w-full items-center gap-2 " onClick={toggleEmail}>
                  <motion.img
                    src={isDefaultEmail ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">I would like on-site support for installation</p>
                </div>
              </div>
              <div className="border border-[#FFFFFF0D]"></div>
              <div className="grid gap-5 px-5">
                <p className="py-2 text-lg font-medium text-white">Payment and Confirmation:</p>

                <div className=" flex w-full items-center gap-2 " onClick={toggleEmail}>
                  <motion.img
                    src={isDefaultEmail ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">
                    Preorder Deposit:* (30% of product price to be collected upfront)
                  </p>
                </div>
              </div>
              <div className="border border-[#FFFFFF0D]"></div>

              <p className="px-5 py-2 text-lg font-medium text-white">Payment Information</p>
              <p className="px-5 text-sm text-white">Total Cost Calculation:</p>

              <table className="table-fixed border-separate border-spacing-0 px-5  text-left text-white max-sm:hidden 2xl:w-full">
                <thead>
                  <tr className="border">
                    <th className="border-b border-l border-t border-[#FFFFFF33] bg-[#282828] px-4 py-4 text-sm font-normal">
                      Base Price per Door:
                    </th>
                    <th className="border-b border-l border-t border-[#FFFFFF33]  bg-[#282828] px-4 py-4 text-sm font-normal">
                      Tax
                    </th>
                    <th className="border-b border-l border-t  border-[#FFFFFF33] bg-[#282828] px-4 py-4 text-sm font-normal">
                      Subtotal
                    </th>
                    <th className="border-b border-l border-t  border-[#FFFFFF33] bg-[#282828]  px-4 py-4 text-sm font-normal">
                      Quantity:
                    </th>
                    <th className="border-b border-l border-r border-t border-[#FFFFFF33]  bg-[#282828] px-4 py-4 text-sm font-normal">
                      Total
                    </th>
                    <th className="border-b border-l border-r border-t border-[#FFFFFF33]  bg-[#282828] px-4 py-4 text-sm font-normal">
                      30% Advance
                    </th>
                  </tr>
                </thead>
                <tbody className="border-b">
                  <tr>
                    <td className="border-b border-l border-[#FFFFFF33]  bg-[#282828] px-4 py-2 text-sm">
                      {unitPrice.toLocaleString()}
                    </td>
                    <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">₹17,820</td>
                    <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">₹1,16,820</td>
                    <td className="border-b border-l border-[#FFFFFF33]  bg-[#282828] px-4 py-2 text-sm">{quantity}</td>
                    <td className="border-b border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                      {total}
                    </td>
                    <td className="border-b border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                      ₹70,146
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <p className="flex w-full justify-end px-5  text-end text-sm text-[#FFFFFF]">
                  (Seventy thousand one <br />
                  hundred and forty six <br /> Rupees Only/-)
                </p>
              </div>
              <div className="border border-[#FFFFFF0D]"></div>
              <div className="flex w-full justify-center max-sm:px-3">
                <button className="font-regular  mb-5 flex w-[60%] items-center justify-center gap-2  rounded-lg border border-[#FF3B30] bg-[#FF3B30] px-4 py-3 uppercase text-[#FFFFFF] max-sm:w-full ">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full     py-10">
          <div className="flex flex-col items-center justify-center">
            <p className=" text-[#FFFFFF99]">Timeline</p>
            <p className="font-regular my-6 flex text-center text-5xl  text-[#FFFFFF]  max-md:text-2xl ">
              Production Timeline
            </p>

            <Image src="/changed.png" width={549} height={64} alt="" className="py-10 md:hidden" />
            <Image src="/timelinee.png" width={1216} height={64} alt="" className="py-10 max-sm:hidden" />
          </div>
        </div>
      </section>

      <MainFooter />

      <Footer />
    </section>
  )
}
