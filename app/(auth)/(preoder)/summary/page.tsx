"use client"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import MainFooter from "components/Footer/MainFooter"
import Image from "next/image"

export default function Web() {
  const [quantity, setQuantity] = useState(1000)

  const [isDefaultEmail, setIsDefaultEmail] = useState(true)
  const [isDefaultPhone, setIsDefaultPhone] = useState(true)

  // Handlers for increment and decrement
  const togglePhone = () => setIsDefaultPhone(!isDefaultPhone)
  const toggleEmail = () => setIsDefaultEmail(!isDefaultEmail)

  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  const unitPrice = 500050 // price per unit
  const total = quantity * unitPrice

  return (
    <section className="bg-[#151515]">
      <Navbar />

      <section className="paddings flex w-full flex-col items-center  justify-center  max-sm:px-3 max-sm:py-20 lg:h-auto lg:py-32">
        <p className="mb-6 text-xl font-bold text-white">Order Summary</p>
        <div className="flex w-full   items-center justify-center md:px-10">
          <div className="flex  w-full  flex-col   rounded-md border border-[#FFFFFF0D]  max-sm:rounded-lg max-sm:p-2  md:p-5">
            <div className="grid h-full items-center  rounded-md  bg-[#FFFFFF1A]   max-sm:grid max-sm:gap-5  md:gap-10">
              <div className="px-5">
                <ul className="mt-6 list-inside ">
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Product: Altima Elite</li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Size: 96" x 43"</li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Frame Type: Reinforced</li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Finish: Glass – Frosted</li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Handle Placement: Right</li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Smart Features:</li>
                  <li className="px-3 pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    - Video Doorbell, Intercom System, Camera, Alexa Integration, Wi-Fi Connectivity, Battery Backup
                  </li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Security Features: Reinforced Lock, Anti-theft Alarm, Motion Sensor
                  </li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Installation Type: Residential</li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Preferred Date: December 15, 3034</li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Special Instructions: Install on the rear entrance of the property.
                  </li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Extended Warranty: Yes</li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">On-Site Support: Yes</li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Payment Method: Razor Pay</li>
                </ul>
              </div>
              <table className="table-fixed border-separate border-spacing-0  text-left text-white 2xl:w-full">
                <thead>
                  <tr className="border">
                    <th className="border-b border-l border-t border-[#FFFFFF33] bg-[#282828] px-4 py-4 text-sm font-normal">
                      Total Price
                    </th>
                    <th className="border-b border-l border-t border-[#FFFFFF33]  bg-[#282828] px-4 py-4 text-sm font-normal">
                      Deposit Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="border-b">
                  <tr>
                    <td className="border-b border-l border-[#FFFFFF33]  bg-[#282828] px-4 py-2 text-sm">₹2,33,820</td>
                    <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">₹70,146</td>
                  </tr>
                </tbody>
              </table>

              <div className="border border-[#FFFFFF0D]"></div>

              <div className="flex w-full flex-col justify-center">
                <div className=" mb-3 flex w-full items-center justify-center gap-2" onClick={toggleEmail}>
                  <motion.img
                    src={isDefaultEmail ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                    width={18}
                    height={18}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">I agree to the preorder terms and conditions)</p>
                </div>

                <p className="text-center text-white">
                  <span className="font-medium">Note :</span> You will receive a confirmation email once your preorder
                  is complete
                </p>
              </div>

              <div className="border border-[#FFFFFF0D]"></div>
              <div className="flex w-full justify-center">
                <button className="font-regular  mb-5 flex w-[60%] items-center justify-center gap-2  rounded-lg border border-[#FF3B30] bg-[#FF3B30] px-4 py-3 uppercase text-[#FFFFFF] max-sm:w-full ">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full     py-10">
          <div className="flex flex-col items-center justify-center">
            <p className=" text-[#FFFFFF99]">Timeline</p>
            <p className="font-regular my-6 flex text-center text-5xl  text-[#FFFFFF]  max-md:text-2xl ">
              Production Timeline
            </p>

            <Image src="/changed.png" width={549} height={64} alt="" className="py-10 md:hidden" />
            <Image src="/timelinee.png" width={1216} height={64} alt="" className="py-10 max-sm:hidden" />
          </div>
        </div>
      </section>

      <MainFooter />

      <Footer />
    </section>
  )
}
