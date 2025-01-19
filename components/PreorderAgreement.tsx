import { motion } from "framer-motion"
import React, { useState } from "react"

const PreorderAgreement = () => {
  const [isAgreement, setIsAgreement] = useState(false)

  const toggleAggrement = () => {
    setIsAgreement((prev) => {
      const newValue = !prev
      console.log("isHomeAutomation", newValue)

      console.log("formData.home_automation_integration:", newValue)
      return newValue
    })
  }
  return (
    <div className="flex w-full flex-col justify-center">
      <h6 className="text-center text-lg font-bold text-white">Online Preorder Agreement</h6>
      <p className="text-center text-sm text-white">
        This agreement (&quot;Agreement&quot;) is entered into between SmartHaven Systems Private Limited
        (&quot;Company&quot;) and the Customer (&quot;You&quot;). By placing a preorder for Altima products, you agree
        to the terms and conditions outlined below.
      </p>
      <div className="mt-3  bg-[#282828] p-6">
        <ul className="grid gap-3">
          <p className=" font-bold text-[#FFFFFF]">1. Preorder Terms</p>
          <li className="text-[#FFFFFF99]">
            1.1. A 30% deposit is required at the time of booking to secure your preorder.
          </li>
          <li className="text-[#FFFFFF99]">
            1.2. The remaining balance is payable before shipment, upon receiving a final payment notice.
          </li>
          <li className="text-[#FFFFFF99]">
            1.3. Preorders are non-binding, and the Company reserves the right to reject or cancel preorders at its sole
            discretion.
          </li>
        </ul>

        <ul className="mt-5 grid gap-3">
          <p className=" font-bold text-[#FFFFFF]">2. Preorder Window</p>
          <li className="text-[#FFFFFF99]">
            2.1. The preorder window opens on November 1, 2024, and closes on June 30, 2025.
          </li>
          <li className="text-[#FFFFFF99]">2.2. Preorders submitted after the closing date will not be accepted.</li>
        </ul>

        <ul className="mt-5 grid gap-3">
          <p className=" font-bold text-[#FFFFFF]">3. Estimated Delivery</p>
          <li className="text-[#FFFFFF99]">
            3.1. The estimated delivery timeline is 4-5 months after the preorder window closes (i.e., between October
            and November 2025).
          </li>
          <li className="text-[#FFFFFF99]">
            3.2. Delays caused by unforeseen circumstances, including manufacturing or supply chain issues, are not the
            Company’s responsibility.
          </li>
        </ul>

        <ul className="mt-5 grid gap-3">
          <p className=" font-bold text-[#FFFFFF]">3. Estimated Delivery</p>
          <li className="text-[#FFFFFF99]">
            3.1. The estimated delivery timeline is 4-5 months after the preorder window closes (i.e., between October
            and November 2025).
          </li>
          <li className="text-[#FFFFFF99]">
            3.2. Delays caused by unforeseen circumstances, including manufacturing or supply chain issues, are not the
            Company’s responsibility.
          </li>
        </ul>

        <ul className="mt-5 grid gap-3">
          <p className=" font-bold text-[#FFFFFF]">4. Refund and Cancellation</p>
          <li className="text-[#FFFFFF99]">
            4.1. The 30% deposit is non-refundable unless the Company fails to deliver the product within 6 months after
            the estimated delivery period.
          </li>
          <li className="text-[#FFFFFF99]">
            4.2. You may cancel your preorder at any time, but refunds (if applicable) will be governed by the Company’s
            cancellation policy.
          </li>
          <li className="text-[#FFFFFF99]">
            4.3. Refunds for eligible cancellations will be processed within 14 working days.
          </li>
        </ul>
        <div className="mt-6 flex w-full items-center justify-center gap-2">
          <motion.img
            onClick={() => {
              toggleAggrement() // Only call the function if not disabled
            }}
            src={isAgreement ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
            width={18}
            height={18}
            alt=""
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
          />
          <p className="text-sm text-white">
            I have read, understood, and agree to the terms and conditions of the Online Preorder Agreement.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 pt-5 text-center">
        <h6 className="text-lg font-bold text-[#FFFFFF]">Note</h6>
        <p className="text-sm text-[#FFFFFF]  opacity-80">
          You will receive a confirmation email once your preorder is complete
        </p>
        <p className="text-sm text-[#FFFFFF] opacity-80 2xl:px-16">
          Domestic Shipping Final shipping charges for domestic delivery will be calculated at dispatch and added to the
          invoice based on your delivery address. Packaging and handling fees are not charged. By preordering, you agree
          to pay the shipping charges with the remaining balance.
        </p>
      </div>
    </div>
  )
}

export default PreorderAgreement
