"use client"
import Footer from "components/Footer/Footer"
import { useState } from "react"
import Accordion from "components/Accordion/Accordion"
import MainFooter from "components/Footer/MainFooter"
import NewNav from "components/Navbar/NewNav"
import ContactUs from "../../../components/ContactUs/Contact"

export default function Web() {
  const faqData = [
    {
      title: "1. When will Altima Disappearing Handle Smart Doors be available?",
      content:
        "We’re targeting initial shipments to pre-order customers in the first quarter of 2025. Please note that this date may be subject to change due to manufacturing and logistics. We’ll keep you updated every step of the way.",
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
      title: "7. How are pre-order payments handled?",
      content: (
        <div>
          <p>
            This Warranty does <strong>not</strong> cover:
          </p>
          <ul className="grid gap-3">
            <li className="mt-3">
              Pre-order payments are securely processed through our parent company, csPILLAI Ventures Private Limited,
              ensuring a reliable and seamless experience.
            </li>
            <li>
              Your trust is our priority, and we adhere to the highest standards of security and professionalism in
              handling payments.
            </li>
            <li>
              For any assistance, feel free to contact us at{" "}
              <a href="mailto:customercare@smarthavensystems.com" className="text-[#FF3B30]">
                customercare@smarthavensystems.com
              </a>
              .
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "8. Do you offer financing or payment plans?",
      content:
        "Yes, we offer flexible financing and payment plans to make your purchase more manageable. Reach out to our finance department at [ *finance contact email/phone* ] for more details and to find a plan that suits your needs.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index) // Close if the same index is clicked
  }

  return (
    <section className="bg-black">
      <NewNav />

      <section className="paddings  w-full bg-[#151515] max-xl:px-3 ">
        <div className="  w-full     xl:py-20">
          <div className="flex w-full flex-col items-center">
            <p className=" text-center text-[#FFFFFF99] max-xl:text-xs">Faqs</p>
            <p className="flex text-center text-[32px] font-bold text-[#FFFFFFcc]  max-xl:mb-4 max-xl:mt-2  max-xl:text-base xl:my-5 ">
              what people are Asking.
            </p>
          </div>

          <div className=" w-full rounded-md border border-[#FFFFFF1A] ">
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.title}
                content={faq.content}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactUs />

      <MainFooter />

      <Footer />
    </section>
  )
}
