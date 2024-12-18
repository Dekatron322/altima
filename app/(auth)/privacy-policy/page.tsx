"use client"
import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import Accordion from "components/Accordion/Accordion"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"

export default function Web() {


  const faqData = [
    {
      title: "1. Information We Collect",
      content: (
        <div>
          <ul className="grid gap-3">
            <li><strong>▪️ Personal Information:</strong>  Name, email address, phone number, shipping address, and payment details necessary for processing your preorder.
            </li>
            <li className="px-2"><strong>▪️ Device Information:</strong> IP address, browser type, operating system, and other technical data to enhance user experience and improve website performance.
            </li> 
            <li className="px-2"><strong>▪️ Usage Data:</strong> Information on how you use our website, such as page views and navigation patterns.
            </li>
          </ul>
        </div>
      ), 
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <div>
          <ul className="grid gap-3">
            <li><strong>▪️ Process Preorders:</strong> Manage your preorder, confirm your purchase, and handle payment transactions.
            </li>
            <li className="px-2"><strong>▪️ Customer Support:</strong> Respond to your inquiries, provide updates, and offer support for your order.
            </li> 
            <li className="px-2"><strong>▪️ Communication:</strong>  Send you order-related updates, marketing offers (if opted in), and any necessary information about your preorder.
            </li>
            <li className="px-2"><strong>▪️ Improvement:</strong>  Analyze usage data to improve website functionality and enhance the overall user experience.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Sharing Your Information",
      content: (
        <div>
          <ul className="grid gap-3">
            <p>We do not sell or rent your personal information. We may share information:
            </p>
            <li><strong>▪️ With Service Providers:</strong> Third-party companies assisting with payment processing, shipping, and data hosting, who adhere to strict confidentiality agreements.
            </li>
            <li className="px-2"><strong>▪️ Customer Support:</strong> Respond to your inquiries, provide updates, and offer support for your order.
            </li> 
            <li className="px-2"><strong>▪️ For Legal Requirements:</strong> When required by law or in response to valid legal processes, such as a court order, subpoena, or government request.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Data Security",
      content:
        "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include secure data encryption, restricted access controls, and regular security audits.",
    },
    {
      title: "5. Cookies and Tracking Technologies",
      content:
        "Our website uses cookies to enhance your experience, monitor website traffic, and personalize content. You can adjust your browser settings to refuse cookies; however, this may limit certain website functionalities.",
    },
    {
      title: "6. Your Rights",
      content: (
        <div>
          <ul className="grid gap-3">
            <p>You have the right to:</p>
            <li><strong>▪️ Access</strong> your personal information.
            </li>
            <li className="px-2"><strong>▪️ Correct</strong>  any inaccurate or incomplete information.
            </li> 
            <li className="px-2"><strong>▪️ Request Deletion</strong>  of your data, where applicable and in compliance with legal requirements.
            </li>
            <li className="px-2"><strong>▪️ Withdraw Consent</strong>   for marketing communications at any time by contacting us.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "7. Third-Party Links",
      content:
        "Our website may contain links to third-party sites. This Privacy Policy does not apply to these sites, and we encourage you to review their policies regarding data collection and privacy.",
    },
    {
      title: "8. Policy Updates",
      content:
        "We may update this Privacy Policy occasionally. Any changes will be posted on this page, and significant updates will be communicated via email or a prominent notice on our website.",
    },
    {
      title: "9. Contact Us",
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
    setOpenIndex(openIndex === index ? -1 : index) // Close if the same index is clicked
  }

  return (
    <section className="bg-black">
      <Navbar />
      <section id="specifications" className="paddings w-full   bg-[#151515] pt-32 max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-32">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div>
              <p className="font-regular   text-center  text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">
                Resources & Policies
              </p>
              <p className=" font-regular my-3  text-center text-lg text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Privacy Policy
              </p>

              <div className="mt-4 flex w-full items-center justify-center gap-5 max-sm:gap-2 ">
                <motion.a
                  href="/Privacy Policy_Altima.pdf"
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

              <p className="font-regular mb-6 w-full text-ellipsis text-sm text-[#FFFFFF99] max-sm:leading-7 md:px-64 md:text-center">
                At Smart Haven Systems Private Limited, we value your privacy and are committed to safeguarding your
                personal information. This Privacy Policy outlines how we collect, use, store, and protect your data
                when you visit our website and place preorders for Altima products.
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
