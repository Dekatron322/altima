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
      title: "1. General Overview",
      content:
        "At Smart Haven Systems Private Limited, we are dedicated to ensuring that your Altima product is delivered securely and on time. This Shipping Policy outlines our strategies and options to guarantee a seamless delivery experience for our customers.",
    },
    {
      title: "2. Complimentary Shipping for Pre-orders",
      content: (
        <div>
          <p>
            To show our appreciation to early adopters, we are offering{" "}
            <strong>free shipping for all Altima Core and Altima Elite pre-orders</strong>. This offer is valid for
            deliveries to major metropolitan areas within [India].
          </p>
        </div>
      ),
    },
    {
      title: "3. Standard Shipping Fees",
      content: (
        <div>
          <ul className="grid gap-3">
            <p className="my-3 font-bold">3.1 Local Deliveries (within 50 km)</p>
            <li>
              ◾For addresses within a 50 km radius of our assembly and distribution centers, a minimal delivery fee may
              be charged after the pre-order phase.
            </li>

            <li className="px-2">
              ◾Local deliveries benefit from quicker and more affordable logistics, making it a cost-effective option
              for nearby customers.
            </li>
          </ul>

          <ul className="mt-4 grid gap-3">
            <p className="font-bold">3.2 Nationwide Deliveries (beyond 50 km)</p>

            <li>
              ◾ For deliveries beyond 50 km from our assembly centers, including all regions outside major metropolitan
              areas, a standard shipping fee will apply.
            </li>
            <li>
              <strong>◾ Fee Calculation:</strong> The shipping fee is based on distance and logistical considerations,
              ensuring an efficient and cost-effective delivery service nationwide.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Shipping Insurance",
      content: (
        <div>
          <p>
            While we ensure that all Altima products are securely packaged, unforeseen incidents may occur during
            transit. We offer <b>optional shipping insurance</b> to provide added protection against damage or loss.
            This option is especially recommended for international orders or high-value shipments.
          </p>
        </div>
      ),
    },
    {
      title: "5. Delivery Timeframes",
      content: (
        <div>
          <ul className="grid gap-3">
            <li>
              <b>◾ Domestic Deliveries:</b> Estimated to arrive within <b>[5-7] business days</b> after dispatch.
              Actual delivery times may vary based on location and the logistics provider.
            </li>

            <li className="px-2">
              <b>◾ International Deliveries:</b> Estimated to arrive within <b>[2-4] weeks,</b> subject to customs
              processing and the chosen shipping method.
            </li>
          </ul>

          <p>Delivery estimates are provided at the time of checkout and may vary due to factors beyond our control.</p>
        </div>
      ),
    },
    {
      title: "6. Tracking Your Order",
      content: (
        <div>
          <p>
            Once your order is dispatched, you will receive a confirmation email with a tracking number and a link to
            monitor your shipment in real time. You can also track your order status on our website under the{" "}
            <b>&quot;Track My Order&quot;</b> section.
          </p>
        </div>
      ),
    },
    {
      title: "7. Handling and Processing Time",
      content: (
        <div>
          <p>
            Orders are typically processed and dispatched within <b>[3-5] business days</b>. During peak periods, such
            as holidays or pre-order launches, processing times may be longer. We appreciate your patience and
            understanding.
          </p>
        </div>
      ),
    },
    {
      title: "8. Returns and Replacements",
      content: (
        <div>
          <ul className="grid gap-3">
            <p>If your Altima product arrives damaged or defective, please follow these steps:</p>

            <li>
              <b>1. Contact Us:</b> Notify our support team at <b>[support@smarthavensystems.com]</b> within 7 days of
              receiving your product.
            </li>

            <li className="px-2">
              <b>2. Provide Details:</b> Include your order number, a description of the issue, and any supporting
              evidence (photos or videos).
            </li>

            <li className="px-2">
              <b>3. Return and Replacement Process:</b> We will guide you through the return process. If your claim is
              approved, we will offer a repair, replacement, or refund in accordance with our Warranty Terms.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "9. Additional Information for International Buyers",
      content: (
        <div>
          <ul className="grid gap-3">
            <li>
              <b>◾ Customs Regulations:</b> International shipments may be subject to customs inspections, which can
              cause delays beyond our estimated delivery times.
            </li>

            <li className="px-2">
              <b>◾ Duties and Taxes:</b> The recipient is responsible for any applicable import duties, taxes, or fees
              imposed by the destination country.
            </li>

            <li className="px-2">
              We advise international customers to consult their local customs office for information on potential
              charges and import regulations.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "10. Customer Support",
      content: (
        <div>
          <ul className="">
            <p className="mb-3">
              Our team is here to assist you with any installation-related questions or issues. For assistance, please
              contact:
            </p>
            <li>
              <strong>Email:</strong> warranty@smarthavensystems.com
            </li>
            <li className="my-3">
              <strong>Phone:</strong> +91-XXXX-XXXXXX
            </li>
            <li>
              <strong>Hours of Operation:</strong> Monday to Friday, 9:00 AM to 6:00 PM (Local Time)
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "11. Disclaimer",
      content:
        "Smart Haven Systems Private Limited is not liable for delays caused by external factors, including but not limited to natural disasters, customs processing delays, or strikes by logistics providers.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index) // Close if the same index is clicked
  }

  return (
    <section className="bg-black">
      <NewNav />
      <section id="specifications" className="paddings w-full   bg-[#151515]  max-sm:px-3 ">
        <div className="  w-full justify-between xl:pt-32">
          <div className="flex w-full items-center justify-center  gap-10 sm:flex">
            <div>
              <p className="text-center   text-2xl  font-normal  text-[#FFFFFF99] max-xl:text-xs lg:text-2xl">
                Resources & Policies
              </p>
              <p className=" my-3 text-center  text-lg font-normal text-[#ffffffcc] max-xl:text-base  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Altima Shipping Policy
              </p>

              <div className="mt-4 flex w-full items-center justify-center gap-5 max-sm:gap-2 ">
                <motion.a
                  href="/Altima Shipping Policy (1).pdf"
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
                    const fileUrl = "/Altima Shipping Policy (1).pdf" // Replace with the actual path
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

              <p className="w-full text-ellipsis text-sm font-normal text-[#FFFFFF99] max-xl:text-center max-sm:leading-7 md:text-center  xl:my-6">
                Smart Haven Systems Private Limited
                <br />
                Effective Date: [Date]
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
            <p className="mt-4 text-center text-sm text-[#FFFFFF99]">
              Smart Haven Systems is committed to providing you with the best experience and ensuring your Altima
              <br className="max-sm:hidden" />
              product is installed safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      <ContactUs />

      <MainFooter />

      <Footer />
    </section>
  )
}
