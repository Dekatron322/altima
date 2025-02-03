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
      title: "1. Non-Refundable Deposit",
      content: (
        <div>
          <ul className="">
            <li>1.1. The 30% deposit required at the time of preorder is non-refundable.</li>

            <li>
              1.2. Exceptions to this policy apply only if the Company is unable to deliver the product within six (6)
              months after the estimated delivery date.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2. Cancellation by Customer",
      content: (
        <div>
          <ul className="">
            <li className="">
              2.1. Customers may cancel their preorder at any time prior to shipment by contacting our support team at{" "}
              <a href="mailto:customercare@smarthavensystems.com" className="text-[#FF3B30] hover:underline">
                customercare@smarthavensystems.com
              </a>
              .
            </li>

            <li>
              2.2. Cancellations made after the preorder window closes or within thirty (30) days of shipment are not
              eligible for any refunds.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Cancellation by the Company",
      content: (
        <div>
          <ul className="">
            <li className="">
              3.1. The Company reserves the right to cancel any preorder under the following circumstances:
            </li>
            <li className="p-2">- Failure to complete the remaining balance payment within the specified timeline.</li>
            <li className="px-2 pb-2">
              - Unforeseen circumstances that prevent the production or delivery of the product.
            </li>

            <li>3.2. In such cases, the customer will be notified, and the deposit will be refunded in full.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Refund Process",
      content: (
        <div>
          <ul className="">
            <li className="">
              4.1. Refunds for eligible cancellations will be processed within fourteen (14) business days from the date
              of approval.
            </li>

            <li>4.2. Refunds will be issued to the original payment method used during the preorder.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "5. Changes to this Policy",
      content:
        "We reserve the right to update or modify this Refund and Cancellation Policy at any time. Changes will be effective upon posting on our website. It is your responsibility to review this policy periodically.",
    },
    {
      title: "5. Contact Us",
      content: (
        <div>
          <ul className="">
            <p className="mb-3">If you have any questions or concerns about this policy, please contact us at:</p>
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
    setOpenIndex(openIndex === index ? -1 : index) // Close if the same index is clicked
  }

  return (
    <section className="bg-black">
      <NewNav />
      <section id="specifications" className="paddings w-full   bg-[#151515] max-sm:px-3 xl:pt-32 ">
        <div className="  w-full justify-between">
          <div className="flex w-full justify-between gap-10  xl:flex">
            <div>
              <p className="text-center   text-2xl  font-normal  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">
                Resources & Policies
              </p>
              <p className=" my-3 text-center  text-lg font-normal text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Refund and Cancellation Policy
              </p>

              <div className="mt-4 flex w-full items-center justify-center gap-5 max-sm:gap-2 ">
                <motion.button
                  className="whitespace-nowrap rounded-lg bg-[#FFFFFF0D]   px-4 py-3 font-normal uppercase text-[#FFFFFF] max-sm:mb-3  max-sm:w-full max-sm:py-3 max-sm:text-xs "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  DOWNLOAD
                </motion.button>

                <motion.button
                  className="whitespace-nowrap rounded-lg bg-[#FFFFFF0D]   px-8 py-3 font-normal uppercase text-[#FFFFFF] max-sm:mb-3  max-sm:w-full max-sm:py-3 max-sm:text-xs "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  SHARE
                </motion.button>
              </div>

              <div className="my-6 flex w-full justify-center text-[#FFFFFF99]">
                <p className="text-lg">Last Updated: [Insert Date]</p>
              </div>

              <p className="mb-6 w-full text-ellipsis text-sm font-normal text-[#FFFFFF99] max-sm:leading-7 md:text-center xl:px-64">
                This Refund and Cancellation Policy outlines the terms and conditions regarding refunds and
                cancellations for preorders made through SmartHaven Systems Private Limited (&quot;Company,&quot;
                &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By placing a preorder, you acknowledge that you
                have read and agree to this policy.
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
