"use client"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import Accordion from "components/Accordion/Accordion"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import NewNav from "components/Navbar/NewNav"
import ContactUs from "components/ContactUs/Contact"

export default function Web() {
  const faqData = [
    {
      title: "1. General Terms",
      content: (
        <div>
          <ul className="grid gap-3">
            <li>
              1.1. By accessing or using our website, you represent that you are at least 18 years old and capable of
              entering into a legally binding agreement.
            </li>
            <li>
              1.2. If you are using our services on behalf of a company or entity, you represent that you have the
              authority to bind that entity to these Terms.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2. Pre-order Conditions",
      content: (
        <div>
          <ul className="grid gap-3">
            <li>2.1. A 30% deposit is required at the time of preorder to secure your Altima product.</li>
            <li>
              2.2. The remaining balance must be paid before shipment, as per the final payment notice.provided, but
              actual delivery dates may vary based on production schedules and supply chain factors.
            </li>
            <li>
              2.3. Preorders are non-binding, and we reserve the right to reject or cancel preorders at our sole
              discretion.
            </li>
            <li>
              2.4. Estimated delivery timelines are 4-5 months after the preorder window closes, subject to unforeseen
              delays.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Customer Responsibilities",
      content: (
        <div>
          <ul className="grid gap-3">
            <li>3.1. You agree to provide accurate and up-to-date information during the preorder process.</li>
            <li>
              3.2. You are responsible for ensuring timely payment of all amounts owed, including the deposit and final
              balance.
            </li>
            <li>3.3. You agree not to use our website for any illegal or unauthorized purposes.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Intellectual Property Rights",
      content: (
        <div>
          <ul className="grid gap-3">
            <li>
              4.1. All content, trademarks, logos, and materials on our website are owned by SmartHaven Systems Private
              Limited.
            </li>
            <li>
              4.2. You are not permitted to reproduce, distribute, or create derivative works from any content without
              our prior written consent.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "5. Limitations of Liability",
      content: (
        <div>
          <ul className="grid gap-3">
            <li>
              5.1. SmartHaven Systems Private Limited is not liable for any indirect, incidental, or consequential
              damages arising from your use of our services.
            </li>
            <li>5.2. Our total liability is limited to the amount you have paid for the preorder.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "6. Dispute Resolution",
      content: (
        <div>
          <ul className="grid gap-3">
            <li>6.1. These Terms are governed by the laws of India.</li>
            <li>
              6.2. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in
              Navi Mumbai, Maharashtra
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "7. Changes to These Terms",
      content: (
        <div>
          <ul className="grid gap-3">
            <li>
              We reserve the right to update or modify these Terms at any time. Changes will be effective upon posting
              on our website. It is your responsibility to review these Terms periodically.
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "8. Contact Us",
      content: (
        <div>
          <ul className="">
            <p className="mb-3">If you have any questions or concerns about these Terms, please contact us at:</p>
            <li>
              <strong>Email:</strong> customercare@smarthavensystems.com
            </li>
            {/* <li className="my-3">
              <strong>Phone:</strong> 022-6971-8365
            </li> */}
            <li>
              <strong>Address:</strong> <br />
              SmartHaven Systems Private Limited <br />
              Sahara CHS, Shop no. 4, Seawoods <br />
              Sector 40, Opp. Konkan rail Vihar <br />
              NAVI MUMBAI 400706
            </li>
          </ul>
        </div>
      ),
    },
  ]

  const [openIndex, setOpenIndex] = useState<number>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="bg-black">
      <NewNav />
      <section id="specifications" className="paddings w-full   bg-[#151515] max-sm:px-3 xl:pt-32 ">
        <div className="  w-full justify-between   ">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div>
              <p className="text-center   text-2xl  font-normal  text-[#FFFFFF99] max-xl:text-xs lg:text-2xl">
                Resources & Policies
              </p>
              <p className=" text-center text-lg font-normal text-[#FFFFFFcc] max-xl:text-base max-sm:my-2  md:text-xl md:leading-10 xl:my-3 xl:text-3xl">
                Terms of Service
              </p>

              <div className="mt-4 flex w-full items-center justify-center gap-5 max-sm:gap-2 ">
                <motion.a
                  href="/Terms and Conditions_Altima.pdf"
                  className="whitespace-nowrap rounded-lg bg-[#FFFFFF0D] px-4   py-3 text-center font-normal uppercase text-[#FFFFFFcc] max-sm:mb-3  max-sm:w-full max-sm:py-3 max-sm:text-xs "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  DOWNLOAD
                </motion.a>

                <motion.button
                  className="whitespace-nowrap rounded-lg bg-[#FFFFFF0D]   px-8 py-3 font-normal uppercase text-[#FFFFFFcc] max-sm:mb-3  max-sm:w-full max-sm:py-3 max-sm:text-xs "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const fileUrl = "/Terms and Conditions_Altima.pdf" // Replace with the actual path
                    const fullUrl = `${window.location.origin}${fileUrl}`

                    if (navigator.share) {
                      navigator
                        .share({
                          title: "Altima Feature Comparison",
                          text: "Check out the Altima vs Competitors: Feature Comparison PDF.",
                          url: fullUrl,
                        })
                        .catch((error) => console.error("Error sharing:", error))
                    } else {
                      alert("Sharing is not supported in this browser.")
                    }
                  }}
                >
                  SHARE
                </motion.button>
              </div>

              <div className="my-6 flex w-full justify-center text-[#FFFFFF99]">
                <p className="text-lg">Last Updated: [Insert Date]</p>
              </div>

              <p className="mb-6 w-full text-ellipsis text-sm font-normal text-[#FFFFFF99] max-xl:text-center max-sm:leading-7 md:text-center xl:px-64">
                Welcome to SmartHaven Systems Private Limited (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your use of our website, services,
                and participation in our preorder process for Altima products. By accessing or using our website, you
                agree to comply with these Terms. If you do not agree, please refrain from using our services.
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
