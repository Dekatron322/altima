"use client"
import Link from "next/link"
import React from "react"

const MainFooter = () => {
  return (
    <>
      <section id="contact" className="paddings w-full  bg-[#151515]  max-sm:px-3 ">
        <div className="w-full  pt-8">
          <div className="grid grid-cols-4 justify-center gap-5 max-md:grid-cols-2  max-sm:grid-cols-1">
            <div className="flex flex-col gap-3 max-sm:mb-7">
              <p className="text-[#FFFFFF]">Contact Us</p>
              <Link href="mailto:mail@altimaaccess.com" className="text-sm text-[#FFFFFF99]">
                Email: mail@altimaaccess.com
              </Link>
              <Link href="tel:02269718365" className="text-sm text-[#FFFFFF99]">
                Phone: 02269718365
              </Link>
              <p className="text-sm text-[#FFFFFF99]">Address: Seawoods, Navi Mumbai 400706, India</p>
            </div>
            <div className="flex flex-col gap-3 max-sm:mb-7">
              <p className="text-[#FFFFFF]">Important links</p>
              <p className="text-sm text-[#FFFFFF99] underline">Home</p>
              <Link href="product-details" className="text-sm text-[#FFFFFF99] underline">
                Product Details
              </Link>
              <Link href="how-preorder-works" className="text-sm text-[#FFFFFF99] underline">
                How Preorders Work
              </Link>
              <Link href="faqs" className="text-sm text-[#FFFFFF99] underline">
                FAQs
              </Link>
              <Link href="contact-us" className="text-sm text-[#FFFFFF99] underline">
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col gap-3 max-sm:mb-7">
              <p className="text-[#FFFFFF]">Contact Information</p>
              <Link href="about-us" className="text-sm text-[#FFFFFF99] underline">
                About Us
              </Link>
              <Link href="comparison" className="text-sm text-[#FFFFFF99] underline">
                Altima Comparisons
              </Link>
              <Link href="warranty-policy" className="text-sm text-[#FFFFFF99] underline">
                Altima Warranty Policy
              </Link>
              <Link href="installation-policy" className="text-sm text-[#FFFFFF99] underline">
                Altima Installation Policy
              </Link>
              <Link href="shipping-policy" className="text-sm text-[#FFFFFF99] underline">
                Altima Shipping Policy
              </Link>
              <Link href="privacy-policy" className="text-sm text-[#FFFFFF99] underline">
                Privacy Policy
              </Link>
              <Link href="terms-and-conditions" className="text-sm text-[#FFFFFF99] underline">
                Terms and Conditions
              </Link>
              <Link href="/refund-and-cancellation" className="text-sm text-[#FFFFFF99] underline">
                Refund and Cancellation Policy
              </Link>
            </div>

            <div className="flex flex-col gap-3 max-sm:mb-7">
              <div className="flex gap-2">
                <div className="input-field ">
                  <input
                    type="text"
                    id="placement"
                    placeholder="Email"
                    className="bg-transparent text-sm  text-white outline-none focus:outline-none"
                    style={{ width: "100%" }}
                  />
                </div>

                <button className="font-regular flex items-center justify-center  gap-2 rounded-lg border  border-[#FF3B30] bg-[#FF3B30] px-4 text-sm uppercase  text-[#FFFFFF]  max-sm:text-[10px] ">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-[#FFFFFF99]">
                ✓Estimated delivery date: 4-5 months after the preorder window closes
              </p>
              <p className="text-sm text-[#FFFFFF99]">
                ✓A note: Preorders require a 30% deposit at the time of booking. The remaining balance is due before
                shipment, with a final payment notice sent prior to delivery. Deposits are non-refundable but can be
                adjusted against the final payment.
              </p>
              <div className="flex gap-2">
                <p className="text-sm text-[#FFFFFF99] underline">LinkedIn</p>
                <p className="text-sm text-[#FFFFFF99] underline">Facebook</p>
                <p className="text-sm text-[#FFFFFF99] underline">Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainFooter
