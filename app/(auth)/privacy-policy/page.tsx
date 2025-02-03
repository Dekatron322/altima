"use client"
import Footer from "components/Footer/Footer"
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
      title: "1. Information We Collect",
      content: (
        <div>
          <p className="text-white">We may collect the following types of information:</p>
          <ul className="mt-3 grid gap-3">
            <strong>1.1. Personal Information:</strong>
            <li className="flex items-center gap-2 px-2">
              <p className="h-2 w-2 rounded-full bg-[#FFFFFF99]"></p>
              Name, email address, phone number, and billing/shipping address.
            </li>
            <li className="flex items-center gap-2 px-2">
              <p className="h-2 w-2 rounded-full bg-[#FFFFFF99]"></p>
              Payment details, including card information (processed securely through our payment gateway)
            </li>
            <strong>1.2. Non-Personal Information:</strong>
            <li className="flex items-center gap-2 px-2">
              <p className="h-2 w-2 rounded-full bg-[#FFFFFF99]"></p>
              IP address, browser type, and operating system.
            </li>
            <li className="flex items-center gap-2 px-2">
              <p className="h-2 w-2 rounded-full bg-[#FFFFFF99]"></p>
              Usage data, including pages viewed and actions taken on the website.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <div>
          <p className="text-white">We use the information collected for the following purposes:</p>
          <ul className="mt-3 grid gap-3">
            <li className="flex items-center gap-2 px-2">2.1. To process and manage your preorder.</li>
            <li className="flex items-center gap-2 px-2">
              2.2. To communicate with you regarding your preorder, including updates and confirmations.
            </li>
            <li className="flex items-center gap-2 px-2">
              2.3. To improve our website and services based on user behavior and feedback.
            </li>
            <li className="flex items-center gap-2 px-2">
              2.4. To comply with legal obligations or respond to lawful requests.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Sharing Your Information",
      content: (
        <div>
          <p className="text-white">
            We do not sell or rent your personal information. However, we may share your information in the following
            circumstances:
          </p>
          <ul className="mt-3 grid gap-3">
            <li className="flex items-center gap-2 px-2">
              3.1. With service providers who assist in processing payments, sending emails, or analyzing website data.
            </li>
            <li className="flex items-center gap-2 px-2">
              3.2. When required by law or to protect the rights, property, or safety of our company or others.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Data Security",
      content:
        "We implement appropriate technical and organizational measures to safeguard your data. However, no transmission method over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.",
    },
    {
      title: "5. Cookies and Tracking Technologies",
      content:
        "We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You may disable cookies through your browser settings, but some features of the website may not function properly.",
    },
    {
      title: "6. Your Rights",
      content: (
        <div>
          <p className="text-white">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="my-3 grid gap-3">
            <li className="flex items-center gap-2 px-2">6.1. The right to access, correct, or delete your data.</li>
            <li className="flex items-center gap-2 px-2">6.2. The right to object to or restrict processing.</li>
            <li className="flex items-center gap-2 px-2">6.3. The right to data portability.</li>
            <li className="flex items-center gap-2 px-2">
              6.4. The right to withdraw consent where processing is based on consent.
            </li>
          </ul>
          <p className="text-white">
            To exercise your rights, please contact us at{" "}
            <a
              href="mailto:contact@smarthavensystems.com"
              className="text-[#FF3B30] transition-all duration-200 ease-in-out hover:underline"
            >
              contact@smarthavensystems.com
            </a>
          </p>
        </div>
      ),
    },
    {
      title: "7. Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time. Changes will be effective upon posting to the website, and we will notify you of any material updates.",
    },

    {
      title: "8. Contact Us",
      content: (
        <div>
          <ul className="">
            <p className="mb-3">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <li>
              <strong>Email:</strong> warranty@smarthavensystems.com
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
    setOpenIndex(openIndex === index ? -1 : index) // Close if the same index is clicked
  }

  return (
    <section className="bg-black">
      <NewNav />
      <section id="specifications" className="paddings w-full   bg-[#151515] max-sm:px-3 xl:pt-32 ">
        <div className="  xl::py-32 w-full    justify-between">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div>
              <p className="text-center   text-2xl  font-normal  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">
                Resources & Policies
              </p>
              <p className=" my-3 text-center  text-lg font-normal text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Privacy Policy
              </p>

              <div className="mt-4 flex w-full items-center justify-center gap-5 max-sm:gap-2 ">
                <motion.a
                  href="/Privacy Policy_Altima.pdf"
                  className="whitespace-nowrap rounded-lg bg-[#FFFFFF0D]   px-4 py-3 font-normal uppercase text-[#FFFFFF] max-sm:mb-3  max-sm:w-full max-sm:py-3 max-sm:text-xs "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  DOWNLOAD
                </motion.a>

                <motion.button
                  className="whitespace-nowrap rounded-lg bg-[#FFFFFF0D]   px-8 py-3 font-normal uppercase text-[#FFFFFF] max-sm:mb-3  max-sm:w-full max-sm:py-3 max-sm:text-xs "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const fileUrl = "/Privacy Policy_Altima.pdf" // Replace with the actual path
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

              <p className="mb-6 w-full text-ellipsis text-sm font-normal text-[#FFFFFF99] max-sm:leading-7 md:text-center xl:px-64">
                SmartHaven Systems Private Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
                protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website,
                <a
                  href="https://www.smarthsvensystems.com"
                  className="transistion-all duration-300 ease-in-out hover:text-[#FF3B30]"
                >
                  www.smarthsvensystems.com
                </a>
                , and participate in the preorder process for Altima products
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
