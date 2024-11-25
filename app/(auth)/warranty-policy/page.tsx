"use client"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import Accordion from "components/Accordion/Accordion"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"

export default function Web() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate elements once
    })
  }, [])

  // Tabs state
  const [activeTab, setActiveTab] = useState(0)
  const [selectedRadio, setSelectedRadio] = useState("")
  const [selectedReplacement, setSelectedReplacement] = useState("")
  const [isDefaultEmail, setIsDefaultEmail] = useState(true)
  const [isDefaultPhone, setIsDefaultPhone] = useState(true)
  const [isDefaultWhatsapp, setIsDefaultWhatsapp] = useState(true)
  const [isDefaultOthers, setIsDefaultOthers] = useState(true)

  const togglePhone = () => setIsDefaultPhone(!isDefaultPhone)
  const toggleEmail = () => setIsDefaultEmail(!isDefaultEmail)
  const toggleWhatsapp = () => setIsDefaultWhatsapp(!isDefaultWhatsapp)
  const toggleOthers = () => setIsDefaultOthers(!isDefaultOthers)

  const toggleRadio = (option: string) => {
    setSelectedRadio(option)
  }

  const toggleReplacement = (option: string) => {
    setSelectedReplacement(option)
  }

  // Accordion data for each tab
  const accordionData = [
    [
      {
        title: "1. Warranty Coverage",
        content:
          "Smart Haven Systems Private Limited (&quot;Company&quot;) offers a limited warranty (&quot;Warranty&quot;) for Altima Core and Altima Elite products (&quot;Product&quot;) purchased directly from authorized sellers. This Warranty covers defects in materials and workmanship under normal use. 1.1 Standard Warranty Duration Domestic Purchases: 24 months from the date of delivery. International Purchases: 18 months from the date of delivery. For both domestic and international buyers, the Warranty may be extended through an Extended Warranty Plan purchased separately. 1.2 Extended Warranty Available for up to an additional 36 months. Extended Warranty coverage is subject to terms and conditions outlined in the Extended Warranty Agreement.",
      },
      {
        title: "2. Coverage Details",
        content:
          "To cancel your pre-order, please reach out to our support team at [ *support email* ] or call us at [ *support phone number* ]. Alternatively, you can log in to your account and follow the instructions under the My Orders section to cancel.",
      },
      {
        title: "3. Exclusions from Warranty",
        content:
          "To cancel your pre-order, please reach out to our support team at [ *support email* ] or call us at [ *support phone number* ]. Alternatively, you can log in to your account and follow the instructions under the My Orders section to cancel.",
      },
      {
        title: "4.  Warranty Claim Process",
        content:
          "To cancel your pre-order, please reach out to our support team at [ *support email* ] or call us at [ *support phone number* ]. Alternatively, you can log in to your account and follow the instructions under the My Orders section to cancel.",
      },
      {
        title: "5. Remedies Under Warranty",
        content:
          "To cancel your pre-order, please reach out to our support team at [ *support email* ] or call us at [ *support phone number* ]. Alternatively, you can log in to your account and follow the instructions under the My Orders section to cancel.",
      },
      {
        title: "6. Limitations and Liability",
        content:
          "To cancel your pre-order, please reach out to our support team at [ *support email* ] or call us at [ *support phone number* ]. Alternatively, you can log in to your account and follow the instructions under the My Orders section to cancel.",
      },
      {
        title: "7. Transferability",
        content:
          "To cancel your pre-order, please reach out to our support team at [ *support email* ] or call us at [ *support phone number* ]. Alternatively, you can log in to your account and follow the instructions under the My Orders section to cancel.",
      },
      {
        title: "8. Governing Law and Jurisdiction",
        content:
          "To cancel your pre-order, please reach out to our support team at [ *support email* ] or call us at [ *support phone number* ]. Alternatively, you can log in to your account and follow the instructions under the My Orders section to cancel.",
      },
      {
        title: "9. International Buyers",
        content:
          "To cancel your pre-order, please reach out to our support team at [ *support email* ] or call us at [ *support phone number* ]. Alternatively, you can log in to your account and follow the instructions under the My Orders section to cancel.",
      },
      {
        title: "10. Contact Information",
        content:
          "To cancel your pre-order, please reach out to our support team at [ *support email* ] or call us at [ *support phone number* ]. Alternatively, you can log in to your account and follow the instructions under the My Orders section to cancel.",
      },
    ],
    [
      {
        title: "1. Overview",
        content:
          "The Extended Warranty (' Extended Warranty') extends the coverage of the Standard Warranty for an additional period as purchased by the customer (&quot;Buyer&quot;). This Extended Warranty is provided by Smart Haven Systems Private Limited (&quot;Company&quot;) and is subject to the terms and conditions outlined herein.",
      },
      {
        title: "2. Extended Warranty Coverage",
        content:
          "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
      },
      {
        title: "3. Exclusions from Extended Warranty",
        content:
          "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
      },
      {
        title: "4. Purchasing and Activation",
        content:
          "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
      },
      {
        title: "5. Extended Warranty Claim Process",
        content:
          "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
      },
      {
        title: "6. Transferability",
        content:
          "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
      },
      {
        title: "7. Limitations and Liability",
        content:
          "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
      },
      {
        title: "8. Governing Law and Dispute Resolution",
        content:
          "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
      },
      {
        title: "9. Consumer Rights",
        content:
          "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
      },
      {
        title: "10. Contact Information",
        content:
          "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
      },
      {
        title: "11. Important Notes",
        content:
          "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
      },
    ],
  ]

  // Tab labels
  const tabs = ["Warranty", "Extended Warranty", "Warranty Claim Form"]

  return (
    <section className="bg-black">
      <Navbar />

      <section className="paddings w-full bg-[#151515] max-sm:px-3 ">
        <div className="w-full py-20">
          <div className="flex w-full flex-col items-center">
            <p className="text-center text-[#FFFFFF99]">Resources & Policies</p>
            <p className="my-6 text-center text-[32px] font-bold text-[#FFFFFF] max-md:text-2xl">
              Altima Warranty Policy
            </p>
          </div>

          {/* Tabs for accordion selection */}
          <div className="justify-centerp mb-8 flex w-full">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`w-full overflow-hidden whitespace-nowrap border border-[#FFFFFF33] px-4 py-2  ${
                  activeTab === index ? "bg-[#FFFFFF26] text-white" : "bg-[#FFFFFF0D] text-[#FFFFFF99]"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mb-4 w-full items-center text-center text-[#FFFFFF99]">
            <p>Issued By: Smart Haven Systems Private Limited Effective </p>
            <p>Date: [Insert Date] Warranty Coverage for: Altima</p>
            <p>Core and Altima Elite Products</p>
          </div>

          {/* Accordions */}
          <div className="w-full rounded-md border border-[#FFFFFF1A] ">
            {activeTab === 0 || activeTab === 1 ? (
              accordionData[activeTab]?.map((item, index) => (
                <Accordion key={index} title={item.title} content={item.content} defaultOpen={index === 0} />
              ))
            ) : (
              <form className="space-y-4  text-white">
                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl text-white">1. Buyer Information</p>

                  <div className=" mx-2 w-full  justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
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
                  <div className=" mx-2 w-full  justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
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
                  <div className=" mx-2 w-full  justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
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

                <p className="mx-2 px-6 text-lg font-medium text-white">Address</p>

                <div className="mx-2 grid gap-5 px-6">
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Address:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
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
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
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

                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Mailing Add Apartment/Unit Number (if applicable):"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
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
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
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
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
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
                <div className="border border-[#FFFFFF0D]"></div>

                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">2. Product Details</p>
                  <div className="flex w-full items-center gap-2 px-2" onClick={() => toggleRadio("Altima Core")}>
                    <motion.img
                      src={selectedRadio === "Altima Core" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
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
                  <div className="flex w-full items-center gap-2 px-2" onClick={() => toggleRadio("Altima Elite")}>
                    <motion.img
                      src={selectedRadio === "Altima Elite" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt="Altima Elite"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Altima Elite</p>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Serial Number:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Purchase Date:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Purchased From:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-[#FFFFFF0D]"></div>

                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">3. Warranty Details</p>

                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Warranty ID (if applicable)"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Date of Warranty Activation"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="border border-[#FFFFFF0D]"></div>

                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">4. Issue Description</p>

                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="date"
                        id="vcn"
                        placeholder="Date Issue Noted"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>

                  <textarea
                    id="details"
                    rows={4}
                    className="mt-1 w-full rounded-md border border-[#FFFFFF33] bg-[#FFFFFF1A] p-2 text-white"
                    placeholder="Brief Description of the Issue"
                  />
                </div>

                <div className="border border-[#FFFFFF0D]"></div>

                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">5. Issue Category</p>

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
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Software/Connectivity</p>
                  </div>

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
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Hardware/Mechanical</p>
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
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Installation/Setup</p>
                  </div>

                  <div className=" flex w-full items-center gap-2 " onClick={toggleOthers}>
                    <motion.img
                      src={isDefaultOthers ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Other</p>
                  </div>
                  <textarea
                    id="details"
                    rows={4}
                    className="mt-1 w-full rounded-md border border-[#FFFFFF33] bg-[#FFFFFF1A] p-2 text-white"
                    placeholder="Brief Description of the Issue"
                  />
                </div>

                <div className="border border-[#FFFFFF0D]"></div>

                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">6. Troubleshooting Steps Taken</p>

                  <textarea
                    id="details"
                    rows={4}
                    className="mt-1 w-full rounded-md border border-[#FFFFFF33] bg-[#FFFFFF1A] p-2 text-white"
                    placeholder="Write here"
                  />
                </div>
                <div className="border border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">7. Attachments</p>

                  <div className="flex w-full gap-3 max-sm:flex-col">
                    <div className="flex w-full flex-col items-center justify-center rounded-md bg-[#282828] p-4">
                      <p className="py-2 text-sm  text-[#FFFFFF]">Proof of Purchase (Invoice, Receipt)</p>
                      <p className="py-2 text-sm font-semibold text-[#FFFFFF]  underline">Recieptnew.pdf</p>
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-4 rounded-md bg-[#FFFFFF26] py-2 text-sm text-white hover:bg-[#FFFFFF33] max-sm:flex-col sm:w-[60%]"
                      >
                        Open file or Drag and drop file here
                        <motion.img
                          src="/solar_upload-bold-duotone.png"
                          width={24}
                          height={24}
                          alt=""
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 1, ease: "easeIn" }}
                        />
                      </button>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center rounded-md bg-[#282828] p-4 ">
                      <p className="py-2 text-sm  text-[#FFFFFF]">Proof of Purchase (Invoice, Receipt)</p>
                      <p className="py-2 text-sm font-semibold text-[#FFFFFF]  underline">Recieptnew.pdf</p>
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-4 rounded-md bg-[#FFFFFF26] py-2 text-sm text-white hover:bg-[#FFFFFF33] max-sm:flex-col sm:w-[60%]"
                      >
                        Open file or Drag and drop file here
                        <motion.img
                          src="/solar_upload-bold-duotone.png"
                          width={24}
                          height={24}
                          alt=""
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 1, ease: "easeIn" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">8. Preferred Resolution Method</p>

                  <div className="flex w-full items-center gap-2 px-2" onClick={() => toggleReplacement("Replacement")}>
                    <motion.img
                      src={selectedReplacement === "Replacement" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt="Replacement"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Replacement</p>
                  </div>

                  {/* Altima Elite Radio */}
                  <div className="flex w-full items-center gap-2 px-2" onClick={() => toggleReplacement("Repair")}>
                    <motion.img
                      src={selectedReplacement === "Repair" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt="Repair"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Repaire</p>
                  </div>
                  <div className="flex w-full items-center gap-2 px-2" onClick={() => toggleReplacement("Refund")}>
                    <motion.img
                      src={selectedReplacement === "Refund" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt="Refund"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Refund (if eligible)</p>
                  </div>
                </div>
                <div className="border border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">9. Additional Comments</p>

                  <textarea
                    id="details"
                    rows={4}
                    className="mt-1 w-full rounded-md border border-[#FFFFFF33] bg-[#FFFFFF1A] p-2 text-white"
                    placeholder="Write here"
                  />
                </div>
                <div className="border border-[#FFFFFF0D]"></div>
                <div className="mx-4 grid gap-5 px-6 pb-6">
                  <button type="submit" className="w-full rounded-md bg-[#FF3B30] py-2 text-white hover:bg-[#FFFFFF33]">
                    Submit Claim
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 " id="contact">
        <div className="  w-full     py-10">
          <div className="flex flex-col  items-center justify-center">
            <p className=" text-center text-[#FFFFFF99]">Contact us</p>
            <p className="my-6 flex text-center  text-[32px]  font-bold  text-[#FFFFFF] max-md:text-2xl">
              Have Questions?
            </p>
            <div className="input-field ">
              <input
                type="text"
                id="placement"
                placeholder="Full Name"
                className="bg-transparent  text-xs text-white outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
            </div>

            <div className="input-field my-7">
              <input
                type="text"
                id="placement"
                placeholder="Email"
                className="bg-transparent text-xs  text-white outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
            </div>

            <div className="text-area ">
              <textarea
                id="username"
                placeholder="Case Title"
                className="min-h-[200px] bg-transparent text-xs text-white outline-none focus:outline-none"
                style={{ width: "100%", height: "24px" }}
              ></textarea>
            </div>

            <button className="font-regular mt-7 flex w-[60%] items-center justify-center gap-2  rounded-lg border border-[#FF3B30] bg-[#FF3B30] px-4 py-4 uppercase text-[#FFFFFF] max-sm:w-full ">
              Submit
            </button>
          </div>
        </div>
      </section>

      <MainFooter />
      <Footer />
    </section>
  )
}
