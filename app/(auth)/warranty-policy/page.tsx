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

  // Accordion data for each tab
  const accordionData = [
    [
      {
        title: "1. When will Altima Disappearing Handle Smart Doors be available?",
        content:
          "We’re targeting initial shipments to pre-order customers in Q1 2025. Please note that this date may be subject to change due to manufacturing and logistics. We’ll keep you updated every step of the way.",
      },
      {
        title: "2. How can I cancel my pre-order?",
        content:
          "To cancel your pre-order, please reach out to our support team at [ *support email* ] or call us at [ *support phone number* ]. Alternatively, you can log in to your account and follow the instructions under the My Orders section to cancel.",
      },
    ],
    [
      {
        title: "1. What is the pre-order process?",
        content:
          "The pre-order process is simple. Select your preferred Altima model (Core or Elite), customize your door with the options you need, review the details, and place a 30% deposit to secure your order. We’ll keep you informed as your order progresses toward delivery.",
      },
      {
        title: "2. What happens if there are production delays?",
        content:
          "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
      },
    ],
    [
      {
        title: "1. What is the warranty on Altima Disappearing Handle Smart Doors?",
        content:
          "Our smart doors come with a 1-year standard warranty covering any manufacturing defects. We also offer an optional extended warranty for an additional 2 years, providing a total of 3 years of coverage for extra peace of mind.",
      },
      {
        title: "2. What support do you offer for installation?",
        content:
          "We provide professional installation support in select areas to ensure your Altima smart door is installed seamlessly. Contact our support team to *discuss installation options in your location and any associated costs.",
      },
      {
        title: "3. Do you offer financing or payment plans?",
        content:
          "Yes, we offer flexible financing and payment plans to make your purchase more manageable. Reach out to our finance department at [ *finance contact email/phone* ] for more details and to find a plan that suits your needs.",
      },
    ],
  ]

  // Tab labels
  const tabs = ["Warranty", "Extended Warranty", "Extended Claim Form"]

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
            {accordionData[activeTab]?.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} defaultOpen={index === 0} />
            )) || <p className="py-4 text-center text-[#FFFFFF99]">No content available for this tab.</p>}
          </div>
        </div>
      </section>

      <MainFooter />
      <Footer />
    </section>
  )
}