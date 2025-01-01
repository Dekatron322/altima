"use client"
import Footer from "components/Footer/Footer"
import { useEffect, useState } from "react"
import Accordion from "components/Accordion/Accordion"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import NewNav from "components/Navbar/NewNav"
import ContactUs from "components/ContactUs/Contact"

export default function Web() {
  const faqData = [
    {
      title: "1. Information We Collect",
      content:
        "We may collect the following types of information ▪️Personal Information: Name, email address, phone number, shipping address, and payment details necessary for processing your preorder. ▪️Device Information: IP address, browser type, operating system, and other technical data to enhance user experience and improve website performance.▪️Usage Data: Information on how you use our website, such as page views and navigation patterns.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "To cancel your pre-order, please reach out to our support team at [ *support email* ] or call us at [ *support phone number* ]. Alternatively, you can log in to your account and follow the instructions under the My Orders section to cancel.",
    },
    {
      title: "3. Sharing Your Information",
      content:
        "The pre-order process is simple. Select your preferred Altima model (Core or Elite), customize your door with the options you need, review the details, and place a 30% deposit to secure your order. We’ll keep you informed as your order progresses toward delivery.",
    },
    {
      title: "4. Data Security",
      content:
        "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
    },
    {
      title: "5. Cookies and Tracking Technologies",
      content:
        "Our smart doors come with a 1-year standard warranty covering any manufacturing defects. We also offer an optional extended warranty for an additional 2 years, providing a total of 3 years of coverage for extra peace of mind.",
    },
    {
      title: "6. Your Rights",
      content:
        "We provide professional installation support in select areas to ensure your Altima smart door is installed seamlessly. Contact our support team to *discuss installation options in your location and any associated costs.",
    },
    {
      title: "7. Third-Party Links",
      content:
        "Yes, we offer flexible financing and payment plans to make your purchase more manageable. Reach out to our finance department at [ *finance contact email/phone* ] for more details and to find a plan that suits your needs.",
    },
    {
      title: "8. Policy Updates",
      content:
        "Yes, we offer flexible financing and payment plans to make your purchase more manageable. Reach out to our finance department at [ *finance contact email/phone* ] for more details and to find a plan that suits your needs.",
    },
    {
      title: "9. Contact Us",
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
      <section id="specifications" className="paddings w-full   bg-[#151515] pt-32 max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-32">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div>
              <p className="font-regular   text-center  text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">
                Resources & Policies
              </p>
              <p className=" font-regular my-3  text-center text-lg text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Refund and Cancellation Policy
              </p>

              <div className="mt-4 flex w-full items-center justify-center gap-5 max-sm:gap-2 ">
                <motion.button
                  className="font-regular whitespace-nowrap rounded-lg   bg-[#FFFFFF0D] px-4 py-3 uppercase text-[#FFFFFF] max-sm:mb-3  max-sm:w-full max-sm:py-3 max-sm:text-xs "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  DOWNLOAD
                </motion.button>

                <motion.button
                  className="font-regular whitespace-nowrap rounded-lg   bg-[#FFFFFF0D] px-8 py-3 uppercase text-[#FFFFFF] max-sm:mb-3  max-sm:w-full max-sm:py-3 max-sm:text-xs "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  SHARE
                </motion.button>
              </div>

              <div className="my-6 flex w-full justify-center text-[#FFFFFF99]">
                <p className="text-lg">Last Updated: [Insert Date]</p>
              </div>

              <p className="font-regular mb-6 w-full text-ellipsis text-sm text-[#FFFFFF99] max-sm:leading-7 md:px-64 md:text-center">
                Thank you for choosing Altima. We understand that situations may arise that require changes to your
                preorder, and we strive to be transparent with our policies regarding refunds and cancellations. This
                Refund and Cancellation Policy outlines our guidelines and provides clarity on preorder deposits,
                adjustments, and other specific conditions.
              </p>
            </div>
          </div>
          <div className="  w-full pt-3">
            <div className="flex flex-col"></div>

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
        </div>
      </section>

      <ContactUs />

      <MainFooter />

      <Footer />
    </section>
  )
}
