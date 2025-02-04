"use client"
import Link from "next/link"
import React from "react"

const MainFooter = () => {
  return (
    <>
      <section id="contact" className="paddings w-full  bg-[#151515]  max-sm:px-3 ">
        <div className="w-full  pt-8">
          <div className="grid grid-cols-4 justify-center gap-5 max-xl:grid-cols-2  max-sm:grid-cols-1">
            <div className="flex flex-col gap-4 max-sm:mb-7">
              <p className="font-bold text-[#FFFFFF] opacity-80">Contact Us</p>
              <Link
                href="mailto:mail@altimaaccess.com"
                className="text-sm text-[#FFFFFF99] transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                <span className="font-semibold text-white opacity-80">Email:</span> mail@altimaaccess.com
              </Link>
              <Link
                href="tel:02269718365"
                className="text-sm text-[#FFFFFF99] transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                <span className="font-semibold text-white opacity-80">Phone:</span> 08047360770
              </Link>
              <p className="text-sm text-[#FFFFFF99]">
                <span className="font-semibold text-white opacity-80">Address:</span> Seawoods, Navi Mumbai 400706,
                India
              </p>
            </div>
            <div className="flex flex-col gap-4 max-sm:mb-7">
              <p className="font-bold text-[#FFFFFF] opacity-80">Altima</p>
              <p className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                Home
              </p>
              <Link
                href="product-details"
                className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                Product Details
              </Link>
              <Link
                href="how-preorder-works"
                className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                How Pre-orders Work
              </Link>
              <Link
                href="faqs"
                className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                FAQs
              </Link>
              <Link
                href="contact-us"
                className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col gap-4 max-sm:mb-7">
              <p className="font-bold text-[#FFFFFF] opacity-80">Resources and Policies</p>
              <Link
                href="/about-us"
                className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                About Us
              </Link>
              <Link
                href="/comparison"
                className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                Altima Comparisons
              </Link>
              <Link
                href="/warranty-policy"
                className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                Altima Warranty Policy
              </Link>
              <Link
                href="/installation-policy"
                className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                Altima Installation Policy
              </Link>
              <Link
                href="/shipping-policy"
                className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                Altima Shipping Policy
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/refund-and-cancellation"
                className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
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

                <button className="flex items-center justify-center gap-2  rounded-lg border border-[#FF3B30]  bg-[#FF3B30] px-4 text-sm font-normal uppercase  text-[#FFFFFF]  max-sm:text-[10px] ">
                  Subscribe
                </button>
              </div>
              {/* <p className="text-sm text-[#FFFFFF99]">
                ✓Estimated delivery date: 4-5 months after the pre-order window closes
              </p>
              <p className="text-sm text-[#FFFFFF99]">
                ✓A note: Pre-orders require a 30% deposit at the time of booking. The remaining balance is due before
                shipment, with a final payment notice sent prior to delivery. Deposits are non-refundable but can be
                adjusted against the final payment.
              </p> */}
              <div className="flex gap-2 max-xl:justify-center">
                <p className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                  LinkedIn
                </p>
                <p className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                  Facebook
                </p>
                <p className="text-sm text-[#FFFFFF99] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]">
                  Instagram
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainFooter
