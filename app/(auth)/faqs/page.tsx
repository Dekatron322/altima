"use client"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect } from "react"
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

  const faqData = [
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
    {
      title: "3. What is the pre-order process?",
      content:
        "The pre-order process is simple. Select your preferred Altima model (Core or Elite), customize your door with the options you need, review the details, and place a 30% deposit to secure your order. We’ll keep you informed as your order progresses toward delivery.",
    },
    {
      title: "4. What happens if there are production delays?",
      content:
        "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
    },
    {
      title: "5. What is the warranty on Altima Disappearing Handle Smart Doors?",
      content:
        "Our smart doors come with a 1-year standard warranty covering any manufacturing defects. We also offer an optional extended warranty for an additional 2 years, providing a total of 3 years of coverage for extra peace of mind.",
    },
    {
      title: "6. What support do you offer for installation?",
      content:
        "We provide professional installation support in select areas to ensure your Altima smart door is installed seamlessly. Contact our support team to *discuss installation options in your location and any associated costs.",
    },
    {
      title: "7. Do you offer financing or payment plans?",
      content:
        "Yes, we offer flexible financing and payment plans to make your purchase more manageable. Reach out to our finance department at [ *finance contact email/phone* ] for more details and to find a plan that suits your needs.",
    },
  ]

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section className="bg-black">
      <Navbar />

      <section className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full     py-20">
          <div className="flex w-full flex-col items-center">
            <p className=" text-center text-[#FFFFFF99]">Faqs</p>
            <p className="my-5 flex text-center text-[32px] font-bold   text-[#FFFFFF]  max-md:text-2xl ">
              what people are Asking.
            </p>
          </div>

          <div className=" w-full rounded-md border border-[#FFFFFF1A] ">
            {faqData.map((faq, index) => (
              <Accordion key={index} title={faq.title} content={faq.content} />
            ))}
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