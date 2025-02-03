"use client"
import Footer from "components/Footer/Footer"

import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import Accordion from "components/Accordion/Accordion"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import NewNav from "components/Navbar/NewNav"
import ContactUs from "../../../components/ContactUs/Contact"

export default function Web() {
  // Tabs state
  const [activeTab, setActiveTab] = useState(0)
  const [selectedRadio, setSelectedRadio] = useState("")
  const [selectedReplacement, setSelectedReplacement] = useState("")
  const [isDefaultEmail, setIsDefaultEmail] = useState(true)
  const [isDefaultPhone, setIsDefaultPhone] = useState(true)
  const [isDefaultWhatsapp, setIsDefaultWhatsapp] = useState(true)
  const [isDefaultOthers, setIsDefaultOthers] = useState(true)

  const togglePhone = () => setIsDefaultPhone(!isDefaultPhone)
  const toggleEmail = () => setIsDefaultEmail(!isDefaultEmail)
  const toggleWhatsapp = () => setIsDefaultWhatsapp(!isDefaultWhatsapp)
  const toggleOthers = () => setIsDefaultOthers(!isDefaultOthers)

  const toggleRadio = (option: string) => {
    setSelectedRadio(option)
  }

  const toggleReplacement = (option: string) => {
    setSelectedReplacement(option)
  }

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleAccordionToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  // Accordion data for each tab
  const accordionData = [
    [
      {
        title: "1. Warranty Coverage",
        content: (
          <div>
            <p>
              Smart Haven Systems Private Limited (&quot;Company&quot;) offers a limited warranty (&quot;Warranty&quot;)
              for Altima Core and Altima Elite products (&quot;Product&quot;) purchased directly from authorized
              sellers. This Warranty covers defects in materials and workmanship under normal use.
            </p>
            <ul className="">
              <p className="my-3 font-bold">1.1 Standard Warranty Duration</p>
              <li>
                <strong>Domestic Purchases:</strong> 24 months from the date of delivery.
              </li>
              <li className="my-3">
                <strong>International Purchases:</strong>18 months from the date of delivery.
              </li>
            </ul>
            <p>
              For both domestic and international buyers, the Warranty may be extended through an{" "}
              <strong>Extended Warranty Plan </strong>purchased separately.
            </p>
            <ul className="mt-4">
              <p className="my-3 font-bold">1.2 Extended Warranty</p>
              <li>Available for up to an additional 36 months.</li>
              <li className="my-3">
                Extended Warranty coverage is subject to terms and conditions outlined in the Extended Warranty
                Agreement.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "2. Coverage Details",
        content: (
          <div>
            <p>
              The Company warrants that the Product will be free from defects in materials and workmanship under the
              following conditions:
            </p>
            <ul className="">
              <li className="my-3">
                ◾ The Product must be used in accordance with the operating instructions provided by the Company. .
              </li>
              <li>
                ◾ All repairs or replacements under this Warranty will be performed using new or refurbished components
                that meet the Company’s standards for quality and performance.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "3. Exclusions from Warranty",
        content: (
          <div>
            <p>
              This Warranty does <strong>not</strong> cover:
            </p>
            <ul className="grid gap-3">
              <li className="mt-3">1. Normal wear and tear, cosmetic damage, or ageing of components.</li>
              <li>
                2. Damage resulting from accident, misuse, abuse, neglect, or unauthorized modification of the Product.
              </li>
              <li>3. Damage caused by natural disasters, such as earthquakes, floods, or lightning.</li>
              <li>4. Installation errors or damage caused by improper installation by a non-certified installer.</li>
              <li>5. Any third-party accessories or components not supplied by the Company.</li>
            </ul>
          </div>
        ),
      },
      {
        title: "4.  Warranty Claim Process",
        content: (
          <div>
            <ul className="">
              <p className="my-3 font-bold">4.1 Submitting a Claim</p>
              <p className="mb-3">To make a Warranty claim, the buyer must:</p>
              <li>
                1. Notify the Company by submitting the claim form or emailing your concerns to
                [warranty@smarthavensystems.com] within the warranty period.
              </li>
              <li className="my-3">
                2. Provide proof of purchase, such as a receipt or invoice, and the Product’s serial number.
              </li>
              <li>
                3. Describe the defect or issue with the Product in detail and, if requested, provide photographs or
                videos for assessment.
              </li>
            </ul>
            <ul className="mt-4">
              <p className="my-3 font-bold">4.2 Inspection and Assessment</p>
              <li>
                ◾ Upon receiving a warranty claim, an automated confirmation email will be sent. Follow-up emails will
                provide updates, and, if the claim is approved, an approval email will request the buyer to ship the
                product to a designated service center for inspection.
              </li>
              <li className="my-3">
                ◾ The buyer shall bear the shipping costs for sending the Product for inspection. If the Warranty claim
                is validated, the Company will reimburse reasonable shipping expenses.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "5. Remedies Under Warranty",
        content: (
          <div>
            <ul className="">
              <p className="mb-3">If a valid claim is made under this Warranty, the Company will, at its discretion:</p>
              <li>
                <strong>1. Repair:</strong> Repair the defective Product or components.
              </li>
              <li className="my-3">
                <strong>2. Replace:</strong> Provide a new or refurbished replacement Product or component.
              </li>
              <li>
                <strong>3. Refund:</strong> If repair or replacement is not feasible, offer a partial or full refund of
                the purchase price.
              </li>
              <p className="mt-3">
                Note: Any repaired or replaced component will be covered under the original Warranty period or for 90
                days from the date of repair/replacement, whichever is longer.
              </p>
            </ul>
          </div>
        ),
      },
      {
        title: "6. Limitations and Liability",
        content: (
          <div>
            <ul className="">
              <p className="mb-3">6.1 Limitation of Liability</p>
              <li>
                The Company’s total liability under this Warranty shall be limited to the original purchase price of the
                Product. In no event will the Company be liable for indirect, incidental, or consequential damages, even
                if advised of the possibility of such damages.
              </li>
            </ul>
            <ul className="mt-3">
              <p className="mb-3">6.2 Force Majeure</p>
              <li>
                The Company shall not be liable for any delays or failure in performance resulting from acts beyond its
                reasonable control, including but not limited to acts of God, government regulations, war, terrorism,
                labor disputes, or supply chain disruptions.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "7. Transferability",
        content: (
          <div>
            <p>
              Smart Haven Systems Private Limited (&quot;Company&quot;) offers a limited warranty (&quot;Warranty&quot;)
              for Altima Core and Altima Elite products (&quot;Product&quot;) purchased directly from authorized
              sellers. This Warranty covers defects in materials and workmanship under normal use.
            </p>
            <ul className="">
              <p className="my-3 font-bold">1.1 Standard Warranty Duration</p>
              <li>
                <strong>Domestic Purchases:</strong> 24 months from the date of delivery.
              </li>
              <li className="my-3">
                <strong>DInternational Purchases:</strong>D 18 months from the date of delivery.
              </li>
            </ul>
            <p>
              For both domestic and international buyers, the Warranty may be extended through an{" "}
              <strong>Extended Warranty Plan </strong>purchased separately.
            </p>
            <ul className="mt-4">
              <p className="my-3 font-bold">1.2 Extended Warranty</p>
              <li>Available for up to an additional 36 months.</li>
              <li className="my-3">
                Extended Warranty coverage is subject to terms and conditions outlined in the Extended Warranty
                Agreement.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "8. Governing Law and Jurisdiction",
        content:
          "This Warranty shall be governed by and construed in accordance with the laws of [India]. Any disputes arising from or related to this Warranty shall be subject to the exclusive jurisdiction of the courts of [Navi Mumbai, India].",
      },
      {
        title: "9. International Buyers",
        content:
          "For international buyers, the Company complies with international warranty regulations, and additional terms may apply depending on local laws and customs requirements. The buyer is responsible for any customs duties, taxes, or fees incurred during the warranty service.",
      },
      {
        title: "10. Contact Information",
        content: (
          <div>
            <ul className="">
              <p className="mb-3">For Warranty claims, inquiries, or support, please contact:</p>
              <li>
                <strong>Email:</strong> warranty@smarthavensystems.com
              </li>
              <li className="my-3">
                <strong>Phone:</strong> +91-XXXX-XXXXXX
              </li>
              <li>
                <strong>Address:</strong> Smart Haven Systems Private Limited, [Address]
              </li>
              <p className="mt-3">
                This Warranty does not affect the statutory rights of consumers under applicable consumer protection
                laws.
              </p>
            </ul>
          </div>
        ),
      },
      {
        title: "11. Disclaimer",
        content:
          "The Company disclaims all other warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose, to the fullest extent permitted by applicable law. The Company makes no representation or warranty that the Product will meet the buyer’s specific requirements or operate uninterrupted or error-free.",
      },
      {
        title: "12. Consumer Rights",
        content:
          "This Warranty does not exclude or limit the statutory rights of consumers as provided by applicable consumer protection laws. In the event of a conflict between this Warranty and local consumer protection laws, the provisions that are more favorable to the consumer shall prevail.",
      },
    ],
    [
      {
        title: "1. Overview",
        content: (
          <div>
            <p>
              The Extended Warranty (&quot;Extended Warranty&quot;) extends the coverage of the Standard Warranty for an
              additional period as purchased by the customer (&quot;Buyer&quot;). This Extended Warranty is provided by
              Smart Haven Systems Private Limited (&quot;Company&quot;) and is subject to the terms and conditions
              outlined herein.
            </p>
          </div>
        ),
      },
      {
        title: "2. Extended Warranty Coverage",
        content: (
          <div>
            <ul className="">
              <p className="mb-3">2.1 Duration</p>
              <li>
                Buyers may purchase an Extended Warranty for an additional period of{" "}
                <strong>12, 24, or 36 months.</strong>
              </li>

              <li>The Extended Warranty coverage begins immediately after the expiration of the Standard Warranty.</li>
            </ul>
            <ul className="mt-4">
              <p className="mb-3">2.2 Coverage Details</p>
              <p>The Extended Warranty covers:</p>
              <li className="my-3">
                <strong>Defects in Materials and Workmanship:</strong> Coverage for defects that prevent the Product
                from functioning as intended.
              </li>

              <li>
                <strong>Component Failures:</strong> Replacement or repair of critical components, including smart lock
                mechanisms and biometric sensors.
              </li>
            </ul>
            <p className="mt-3">
              Note: The coverage terms mirror the Standard Warranty, with the exclusions listed in Section 3.
            </p>
          </div>
        ),
      },
      {
        title: "3. Exclusions from Extended Warranty",
        content: (
          <div>
            <ul className="grid gap-3">
              <p className="mb-3">
                The Extended Warranty does <strong>not</strong> cover:
              </p>
              <li>1. Normal wear and tear, cosmetic damage, or aging of components.</li>

              <li>
                2. Damage resulting from accidents, misuse, abuse, neglect, unauthorized modification, or installation
                by non-certified personnel.
              </li>
              <li>
                3. Environmental damage, such as corrosion, rust, or discoloration caused by harsh environmental
                conditions.
              </li>
              <li>4. Damage caused by power surges, lightning strikes, or other electrical disruptions.</li>
              <li>5. Third-party accessories or components not provided by the Company.</li>
            </ul>
          </div>
        ),
      },
      {
        title: "4. Purchasing and Activation",
        content: (
          <div>
            <ul className="">
              <p className="mb-3">4.1 Eligibility</p>
              <li>
                ◾ The Extended Warranty must be purchased within <strong>30 days</strong> of the original Product
                purchase date or within the Standard Warranty period.
              </li>

              <li>◾ Proof of purchase for the Product is required for activation.</li>
            </ul>
            <ul className="mt-4">
              <p className="mb-3">4.2 Activation</p>

              <li className="my-3">
                The Extended Warranty is activated upon successful payment and registration of the Product on the
                Company’s warranty portal at [www.smarthavensystems.com/warranty].
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "5. Extended Warranty Claim Process",
        content: (
          <div>
            <ul className="grid gap-3">
              <p className="mb-3">5.1 Filing a Claim</p>
              <li>◾To file an Extended Warranty claim, the Buyer must:</li>
              <li>1. Contact the Company at [warranty@smarthavensystems.com] or call +91-XXXX-XXXXXX.</li>
              <li>
                2. Provide the Product’s serial number, proof of Extended Warranty purchase, and a detailed description
                of the issue.
              </li>
            </ul>
            <p className="my-3">
              The Company may request additional documentation, such as photos or videos, to evaluate the claim.
            </p>
            <ul className="mt-6 grid gap-3">
              <p className="mb-3">5.2 Inspection and Resolution</p>
              <p>The Company reserves the right to inspect the Product to determine the validity of the claim.</p>
              <p>Upon approval, the Company will choose to:</p>
              <li>
                <strong>Repair: </strong>Repair the defective component(s) at no additional cost.
              </li>
              <li>
                <strong>Replace:</strong> Provide a new or refurbished replacement unit.
              </li>
              <li>
                <strong>Reimburse: </strong>If repair or replacement is not possible, issue a prorated refund based on
                the remaining warranty coverage.
              </li>
            </ul>
            <p className="mt-3">
              TShipping Costs: The Buyer may be responsible for shipping costs to the designated service center. If the
              claim is approved, the Company may reimburse reasonable shipping expenses.
            </p>
          </div>
        ),
      },
      {
        title: "6. Transferability",
        content: (
          <div>
            <p>
              The Extended Warranty is <strong>non-transferable</strong> and applies only to the original Buyer, except
              where applicable under local laws.
            </p>

            <p className="mt-3">
              The Extended Warranty is void if the Product is sold, gifted, or transferred to a third party.
            </p>
          </div>
        ),
      },
      {
        title: "7. Limitations and Liability",
        content: (
          <div>
            <ul className="">
              <p className="mb-3">7.1 Limitation of Liability</p>
              <li>
                The Company&apos;s total liability under this Extended Warranty is limited to the original purchase
                price of the Product. The Company shall not be liable for indirect, incidental, or consequential
                damages.
              </li>
            </ul>
            <ul className="mt-4">
              <p className="mb-3">7.2 No Implied Warranties</p>

              <li className="my-3">
                Except as expressly stated in this document, the Company disclaims all implied warranties, including
                merchantability and fitness for a particular purpose, to the extent permitted by law.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "8. Governing Law and Dispute Resolution",
        content: (
          <div>
            <p className="mb-3">◾This Extended Warranty is governed by the laws of [India].</p>
            <p>
              ◾Any disputes arising under this Extended Warranty shall be subject to the exclusive jurisdiction of the
              courts in [Navi Mumbai, India].
            </p>
          </div>
        ),
      },
      {
        title: "9. Consumer Rights",
        content:
          "This Extended Warranty does not affect the statutory rights of consumers under applicable consumer protection laws. If a provision of this Extended Warranty conflicts with local consumer laws, the more favorable provision to the consumer shall apply.",
      },
      {
        title: "10. Contact Information",
        content: (
          <div>
            <ul className="">
              <p className="mb-3">For Warranty claims, inquiries, or support, please contact:</p>
              <li>
                <strong>Email:</strong> warranty@smarthavensystems.com
              </li>
              <li className="my-3">
                <strong>Phone:</strong> +91-XXXX-XXXXXX
              </li>
              <li>
                <strong>Address:</strong> Smart Haven Systems Private Limited, [Address]
              </li>
              <p className="mt-3">
                This Warranty does not affect the statutory rights of consumers under applicable consumer protection
                laws.
              </p>
            </ul>
          </div>
        ),
      },
      {
        title: "11. Important Notes",
        content: (
          <div>
            <ul className="grid gap-3">
              <li>
                <strong>1. Extended Warranty fees</strong> are non-refundable.
              </li>
              <li>2. Buyers are advised to keep all original receipts and documents for verification purposes.</li>
              <li>3. The Company recommends professional installation to maintain Warranty validity.</li>
            </ul>
          </div>
        ),
      },
    ],
  ]

  // Tab labels
  const tabs = ["Warranty", "Extended Warranty", "Warranty Claim Form"]

  const [openIndex, setOpenIndex] = useState<number>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index) // Close if the same index is clicked
  }

  return (
    <section className="bg-black">
      <NewNav />

      <section className="paddings w-full bg-[#151515] max-xl:px-3 ">
        <div className="w-full xl:py-20">
          <div className="flex w-full flex-col items-center">
            <p className="text-center text-[#FFFFFF99]">Resources & Policies</p>
            <p className=" text-center text-[32px] font-bold text-[#FFFFFF] max-md:text-2xl">Altima Warranty Policy</p>
            <div className="my-4 flex w-full items-center justify-center gap-5 max-sm:gap-2 ">
              <motion.a
                href="/Altima Warranty_ Ext. Warranty _ Claim form .pdf"
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
                  const fileUrl = "/Altima Warranty_ Ext. Warranty _ Claim form .pdf" // Replace with the actual path
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
            {activeTab === 0 || activeTab === 1 ? (
              accordionData[activeTab]?.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))
            ) : (
              <form className="space-y-4  text-white">
                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl text-white">1. Buyer Information</p>

                  <div className=" mx-2 w-full  justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Full Name"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" mx-2 w-full  justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Contact Number"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" mx-2 w-full  justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Email Address"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                </div>

                <p className="mx-2 px-6 text-lg font-medium text-white">Address</p>

                <div className="mx-2 grid gap-5 px-6">
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Address:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Street/Apartment/Office Name"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="City:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>

                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Mailing Add Apartment/Unit Number (if applicable):"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="State/Province:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Postal/ZIP Code:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Country:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="border border-[#FFFFFF0D]"></div>

                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">2. Product Details</p>
                  <div className="flex w-full items-center gap-2 px-2" onClick={() => toggleRadio("Altima Core")}>
                    <motion.img
                      src={selectedRadio === "Altima Core" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt="Altima Core"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Altima Core</p>
                  </div>

                  {/* Altima Elite Radio */}
                  <div className="flex w-full items-center gap-2 px-2" onClick={() => toggleRadio("Altima Elite")}>
                    <motion.img
                      src={selectedRadio === "Altima Elite" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt="Altima Elite"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Altima Elite</p>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Serial Number:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Purchase Date:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Purchased From:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-[#FFFFFF0D]"></div>

                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">3. Warranty Details</p>

                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Warranty ID (if applicable)"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        id="vcn"
                        placeholder="Date of Warranty Activation"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="border border-[#FFFFFF0D]"></div>

                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">4. Issue Description</p>

                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="date"
                        id="vcn"
                        placeholder="Date Issue Noted"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>

                  <textarea
                    id="details"
                    rows={4}
                    className="mt-1 w-full rounded-md border border-[#FFFFFF33] bg-[#FFFFFF1A] p-2 text-white"
                    placeholder="Brief Description of the Issue"
                  />
                </div>

                <div className="border border-[#FFFFFF0D]"></div>

                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">5. Issue Category</p>

                  <div className=" flex w-full items-center gap-2 " onClick={togglePhone}>
                    <motion.img
                      src={isDefaultPhone ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Software/Connectivity</p>
                  </div>

                  <div className=" flex w-full items-center gap-2 " onClick={toggleEmail}>
                    <motion.img
                      src={isDefaultEmail ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Hardware/Mechanical</p>
                  </div>

                  <div className=" flex w-full items-center gap-2 " onClick={toggleWhatsapp}>
                    <motion.img
                      src={isDefaultWhatsapp ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Installation/Setup</p>
                  </div>

                  <div className=" flex w-full items-center gap-2 " onClick={toggleOthers}>
                    <motion.img
                      src={isDefaultOthers ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Other</p>
                  </div>
                  <textarea
                    id="details"
                    rows={4}
                    className="mt-1 w-full rounded-md border border-[#FFFFFF33] bg-[#FFFFFF1A] p-2 text-white"
                    placeholder="Brief Description of the Issue"
                  />
                </div>

                <div className="border border-[#FFFFFF0D]"></div>

                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">6. Troubleshooting Steps Taken</p>

                  <textarea
                    id="details"
                    rows={4}
                    className="mt-1 w-full rounded-md border border-[#FFFFFF33] bg-[#FFFFFF1A] p-2 text-white"
                    placeholder="Write here"
                  />
                </div>
                <div className="border border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">7. Attachments</p>

                  <div className="flex w-full gap-3 max-sm:flex-col">
                    <div className="flex w-full flex-col items-center justify-center rounded-md bg-[#282828] p-4">
                      <p className="py-2 text-sm  text-[#FFFFFF]">Proof of Purchase (Invoice, Receipt)</p>
                      <p className="py-2 text-sm font-semibold text-[#FFFFFF]  underline">Recieptnew.pdf</p>
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-4 rounded-md bg-[#FFFFFF26] py-2 text-sm text-white hover:bg-[#FFFFFF33] max-sm:flex-col sm:w-[60%]"
                      >
                        Open file or Drag and drop file here
                        <motion.img
                          src="/solar_upload-bold-duotone.png"
                          width={24}
                          height={24}
                          alt=""
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 1, ease: "easeIn" }}
                        />
                      </button>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center rounded-md bg-[#282828] p-4 ">
                      <p className="py-2 text-sm  text-[#FFFFFF]">Proof of Purchase (Invoice, Receipt)</p>
                      <p className="py-2 text-sm font-semibold text-[#FFFFFF]  underline">Recieptnew.pdf</p>
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-4 rounded-md bg-[#FFFFFF26] py-2 text-sm text-white hover:bg-[#FFFFFF33] max-sm:flex-col sm:w-[60%]"
                      >
                        Open file or Drag and drop file here
                        <motion.img
                          src="/solar_upload-bold-duotone.png"
                          width={24}
                          height={24}
                          alt=""
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 1, ease: "easeIn" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">8. Preferred Resolution Method</p>

                  <div className="flex w-full items-center gap-2 px-2" onClick={() => toggleReplacement("Replacement")}>
                    <motion.img
                      src={selectedReplacement === "Replacement" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt="Replacement"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Replacement</p>
                  </div>

                  {/* Altima Elite Radio */}
                  <div className="flex w-full items-center gap-2 px-2" onClick={() => toggleReplacement("Repair")}>
                    <motion.img
                      src={selectedReplacement === "Repair" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt="Repair"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Repaire</p>
                  </div>
                  <div className="flex w-full items-center gap-2 px-2" onClick={() => toggleReplacement("Refund")}>
                    <motion.img
                      src={selectedReplacement === "Refund" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt="Refund"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Refund (if eligible)</p>
                  </div>
                </div>
                <div className="border border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 p-6">
                  <p className="py-2 text-xl  text-white">9. Additional Comments</p>

                  <textarea
                    id="details"
                    rows={4}
                    className="mt-1 w-full rounded-md border border-[#FFFFFF33] bg-[#FFFFFF1A] p-2 text-white"
                    placeholder="Write here"
                  />
                </div>
                <div className="border border-[#FFFFFF0D]"></div>
                <div className="mx-4 grid gap-5 px-6 pb-6">
                  <button type="submit" className="w-full rounded-md bg-[#FF3B30] py-2 text-white hover:bg-[#FFFFFF33]">
                    Submit Claim
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <ContactUs />

      <MainFooter />
      <Footer />
    </section>
  )
}
