"use client"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import Accordion from "components/Accordion/Accordion"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import NewNav from "components/Navbar/NewNav"

export default function Web() {

  const faqData = [
    {
      title: "1. General Terms",
      content: (
        <div>
          
          <ul className="grid gap-3">
            <li><strong>▪️ Acceptance of Terms:</strong> By accessing this website or placing a preorder, you agree to these Terms and Conditions. If you do not agree, please refrain from using our services.
            </li>
            <li className="px-2"><strong>▪️ Modifications:</strong>  Smart Haven Systems Private Limited reserves the right to modify these Terms at any time. We will post updates on this page, and your continued use of the site signifies your acceptance of the modified terms.
            </li>   
          </ul>
        </div>
      ),
    },
    {
      title: "2. Preorder Terms",
      content: (
        <div>
          <ul className="grid gap-3">
            <li><strong>▪️ Preorder Process:</strong> By placing a preorder, you are reserving an Altima product in advance. Preordering requires a deposit payment, which secures your place in our production queue.
            </li>
            <li className="px-2"><strong>▪️ Availability:</strong> Preordering does not guarantee immediate availability. Estimated production and delivery timelines are provided, but actual delivery dates may vary based on production schedules and supply chain factors.
            </li> 
            <li className="px-2"><strong>▪️ Non-Binding Agreement:</strong> Placing a preorder does not constitute a binding purchase contract. Smart Haven Systems Private Limited reserves the right to cancel or refund preorders in specific cases, including but not limited to production delays, technical issues, or unforeseen circumstances.
            </li>   
          </ul>
        </div>
      ),
    },
    {
      title: "3. Payment Terms",
      content: (
        <div>
          <ul className="grid gap-3">
            <li><strong>▪️ Deposit:</strong>  Preorders require a 30% non-refundable deposit at the time of booking. This deposit is applied toward the total product price.
            </li>
            <li className="px-2"><strong>▪️ Final Payment:</strong>  The remaining balance is due prior to delivery. A final payment notice will be sent to the email address provided at the time of preorder, with a specified payment deadline.
            </li> 
            <li className="px-2"><strong>▪️ Accepted Payment Methods:</strong> We accept various payment methods, including credit cards, debit cards, and bank transfers. Specific payment instructions will be provided during the preorder process.
            </li>
            <li className="px-2"><strong>▪️ Non-Refundable Deposit:</strong> Please note that the preorder deposit is non-refundable. However, in cases where Smart Haven Systems Private Limited initiates a cancellation, the deposit will be refunded in full.
            </li>   
          </ul>
        </div>
      ),
    },
    {
      title: "4. Pricing and Tax",
      content: (
        <div>
          <ul className="grid gap-3">
            <li><strong>▪️ Pricing:</strong> All prices displayed on our website are exclusive of applicable taxes. Taxes and additional fees will be calculated and added at checkout based on your location.
            </li>
            <li className="px-2"><strong>▪️ Price Adjustments:</strong>   Prices are subject to change at the discretion of Smart Haven Systems Private Limited. However, preorder prices at the time of booking will be honored for confirmed orders.
            </li>  
          </ul>
        </div>
      ),
    },
    {
      title: "5. Delivery and Shipping",
      content: (
        <div>
          <ul className="grid gap-3">
            <li><strong>▪️ Estimated Delivery:</strong> Altima products are estimated to ship within 4-5 months after the preorder window closes. We will make every effort to meet this timeline; however, delivery dates may vary due to production schedules and external factors.
            </li>
            <li className="px-2"><strong>▪️ Shipping Notification:</strong> Once your order is ready for shipment, you will receive a notification email with tracking information and estimated arrival dates.
            </li>
            <li className="px-2"><strong>▪️ Shipping Costs:</strong> Shipping charges will be added to your final payment and will be disclosed in advance.
            </li> 
            <li className="px-2"><strong>▪️ Risk of Loss:</strong> Risk of loss or damage passes to the customer upon shipment. Smart Haven Systems Private Limited is not responsible for items lost or damaged in transit, but we will assist you with any claims to the shipping provider.
            </li>   
          </ul>
        </div>
      ),
    },
    {
      title: "6. Cancellations and Refunds",
      content: (
        <div>
          <ul className="grid gap-3">
            <li><strong>▪️ Customer-Initiated Cancellations:</strong> Preorder deposits are non-refundable, and customer-initiated cancellations will forfeit the deposit.
            </li>
            <li className="px-2"><strong>▪️ Company-Initiated Cancellations:</strong> In cases where Smart Haven Systems Private Limited initiates the cancellation of a preorder due to unforeseen circumstances, we will issue a full refund of the deposit.
            </li>
            <li className="px-2"><strong>▪️ Refunds:</strong> All eligible refunds will be processed within 7-10 business days and will be credited back to the original payment method.
            </li>  
          </ul>
        </div>
      ),
    },
    {
      title: "7. Product Warranty and Returns",
      content: (
        <div>
          <ul className="grid gap-3">
            <li><strong>▪️ Limited Warranty:</strong> Altima products come with a limited warranty covering manufacturing defects for a specified period from the date of delivery. Warranty details are provided with your product documentation.

            </li>
            <li className="px-2"><strong>▪️ Exclusions:</strong>  The warranty does not cover damage caused by misuse, modifications, or accidents.

            </li>
            <li className="px-2"><strong>▪️ Refunds:</strong> ▪️ Returns: Returns are not accepted on preorder products except in cases covered under the warranty for manufacturing defects.

            </li>  
          </ul>
        </div>
      ),
    },
    {
      title: "8. Limitation of Liability",
      content: (
        <div>
          <ul className="grid gap-3">
            <li><strong>▪️ Disclaimer of Warranties:</strong> While we strive to provide accurate information, Smart Haven Systems Private Limited does not guarantee that the website or its content is free of errors. We do not warrant that our products or services will meet your specific expectations.
            </li>
            <li className="px-2"><strong>▪️ Limitation of Liability:</strong> To the fullest extent permitted by law, Smart Haven Systems Private Limited and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our website, products, or services.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "9. Intellectual Property",
      content: (
        <div>
          <ul className="grid gap-3">
            <li><strong>▪️ Ownership:</strong>  All website content, including text, images, graphics, logos, and software, is the property of Smart Haven Systems Private Limited and is protected by applicable copyright and intellectual property laws.
            </li>
            <li className="px-2"><strong>▪️ Restrictions:</strong>  You are prohibited from reproducing, distributing, or using any content on this website without explicit written permission from Smart Haven Systems Private Limited.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "10. Governing Law and Dispute Resolution",
      content: (
        <div>
          <ul className="grid gap-3">
            <li><strong>▪️ Governing Law:</strong> These Terms and Conditions are governed by and construed in accordance with the laws of India.

            </li>
            <li className="px-2"><strong>▪️ Dispute Resolution:</strong> Any disputes arising out of or related to these Terms shall be resolved through arbitration in Mumbai, India, in accordance with the Arbitration and Conciliation Act, 1996.

            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "11. Contact Information",
      content: (
        <div>
          
          <ul className="">
            
            <p className="mb-3">Our team is here to assist you with any installation-related questions or issues. For assistance, please contact:
            </p>
            <li><strong>Email:</strong> warranty@smarthavensystems.com</li>
            <li className="my-3"><strong>Phone:</strong> 022-6971-8365</li>
            <li><strong>Address:</strong> Seawoods, Navi Mumbai 400706, India</li>
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
      <section id="specifications" className="paddings w-full   bg-[#151515] pt-32 max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-32">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div>
              <p className="font-regular   text-center  text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">
                Resources & Policies
              </p>
              <p className=" font-regular my-3  text-center text-lg text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Terms and Conditions
              </p>

              <div className="mt-4 flex w-full items-center justify-center gap-5 max-sm:gap-2 ">
                <motion.a
                  href="/Terms and Conditions_Altima.pdf"
                  className="font-regular whitespace-nowrap rounded-lg   bg-[#FFFFFF0D] px-4 py-3 uppercase text-[#FFFFFF] max-sm:mb-3  max-sm:w-full max-sm:py-3 max-sm:text-xs "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  DOWNLOAD
                </motion.a>

                <motion.button
                  className="font-regular whitespace-nowrap rounded-lg   bg-[#FFFFFF0D] px-8 py-3 uppercase text-[#FFFFFF] max-sm:mb-3  max-sm:w-full max-sm:py-3 max-sm:text-xs "
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

              <p className="font-regular mb-6 w-full text-ellipsis text-sm text-[#FFFFFF99] max-sm:leading-7 md:px-64 md:text-center">
                Welcome to the Altima Preorder Website, operated by Smart Haven Systems Private Limited. By accessing or
                using this website, you agree to be bound by these Terms and Conditions. Please read them carefully
                before placing a preorder or making any transactions on our website.
              </p>
            </div>
          </div>
          <div className="  w-full pt-3">
            <div className="flex flex-col"></div>

            <div className=" w-full rounded-md border border-[#FFFFFF1A] ">
              {faqData.map((faq, index) => (
                <Accordion key={index} title={faq.title} content={faq.content} isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}/>
              ))}
            </div>
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
                placeholder="Enter Message"
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
