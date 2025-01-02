"use client"
import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import MainFooter from "components/Footer/MainFooter"
import Image from "next/image"
import { OrderPayload } from "services/orderService"
import NewNav from "components/Navbar/NewNav"
import { LiaTimesSolid } from "react-icons/lia"

export default function Web() {
  const [quantity, setQuantity] = useState(1000)

  const [isDefaultEmail, setIsDefaultEmail] = useState(true)
  const [isDefaultPhone, setIsDefaultPhone] = useState(true)
  const [orderData, setOrderData] = useState<OrderPayload | null>(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(true)

  const togglePhone = () => setIsDefaultPhone(!isDefaultPhone)
  const toggleEmail = () => setIsDefaultEmail(!isDefaultEmail)

  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  const unitPrice = 500050 // price per unit
  const total = quantity * unitPrice

  interface StripeResponse {
    payment_link: string
  }

  interface User {
    id: string
    token: string
  }

  const handleAcceptPrivacyPolicy = () => {
    setShowModal(false) // Close the modal when the user accepts
  }

  useEffect(() => {
    const storedData = localStorage.getItem("order_summary")
    if (storedData) {
      setOrderData(JSON.parse(storedData) as OrderPayload)
    } else {
      // Redirect back if no data is found
      router.push("/order-successfull")
    }
  }, [router])

  // Type guard to check if the response is of type StripeResponse
  function isStripeResponse(data: any): data is StripeResponse {
    return typeof data.checkout_url === "string"
  }

  const isRazorpayResponse = (data: any): data is { payment_link: string; payment_link_id: string } => {
    return data && data.payment_link && data.payment_link_id
  }

  const handleSubmit = async () => {
    setLoading(true) // Start loading indicator

    try {
      const user = localStorage.getItem("user")
      const parsedUser: User | null = user ? (JSON.parse(user) as User) : null

      if (!parsedUser?.id) {
        alert("Unable to proceed. User ID is missing.")
        return
      }

      if (!orderData || !orderData.full_name) {
        alert("Order data or full name is missing.")
        return
      }

      const quantity = orderData.quantity ? parseInt(orderData.quantity, 10) : 1

      // Create Razorpay payload
      const razorpayPayload = {
        email: orderData.email_address,
        contact: orderData.contact_number,
        name: orderData.full_name.trim(),
        amount: Math.round(parseFloat(orderData.deposit_amount ?? "0") * 100), // Amount in paisa
        quantity,
      }

      console.log("Razorpay Payload:", razorpayPayload)

      const response = await fetch("https://altima.fyber.site/order/api/create-checkout-session/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(razorpayPayload),
      })

      const responseText = await response.text()
      console.log("Razorpay Response Body:", responseText)

      if (!response.ok) {
        throw new Error(`Failed to create Razorpay checkout session: ${responseText}`)
      }

      const razorpayData = JSON.parse(responseText)

      if (isRazorpayResponse(razorpayData)) {
        const { payment_link, payment_link_id } = razorpayData
        localStorage.setItem("payment_link", payment_link)
        localStorage.setItem("payment_link_id", payment_link_id)

        // Redirect to the Razorpay payment link
        window.location.href = payment_link
      } else {
        throw new Error("Invalid response format from Razorpay.")
      }
    } catch (error: any) {
      console.error("Error:", error)
      alert(error.message || "Failed to proceed with checkout. Please try again.")
    } finally {
      setLoading(false) // End loading indicator
    }
  }

  return (
    <section className="bg-[#151515]">
      <NewNav />

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#D9D9D94D]">
          <div className="m-4 w-full max-w-4xl rounded-lg bg-[#151515]  px-8 py-8 text-white">
            <div className="mb-4 flex w-full items-center justify-end">
              <LiaTimesSolid onClick={handleAcceptPrivacyPolicy} className="cursor-pointer" />
            </div>
            <h2 className="mb-4 text-center text-lg font-bold text-[#FFFFFF]">Important Notice</h2>
            <p className="mb-4 text-center text-sm text-[#FFFFFF99] max-sm:text-xs">
              Thank you for pre-ordering with Smart Haven Systems Private Limited!
            </p>
            <p className="mb-4 text-center text-sm text-[#FFFFFF99] max-sm:text-xs">Kindly Note:</p>

            <p className="mb-4 text-center text-sm text-[#FFFFFF99] max-sm:text-xs">
              Your pre-order payment is being collected temporarily by csPILLAI Ventures Private Limited, the parent
              company of Smart Haven Systems Private Limited, as our official company account is in the process of being
              set up.
            </p>

            <p className="mb-4 text-center text-sm text-[#FFFFFF99] max-sm:text-xs">
              All pre-order funds will be securely transferred to Smart Haven Systems Private Limited once its account
              becomes operational.
            </p>

            <p className="mb-4 text-center text-sm text-[#FFFFFF99] max-sm:text-xs">
              This arrangement ensures you can pre-order without delay, and your payment is handled by a trusted entity
              within the group.
            </p>

            <p className="mb-4 text-center text-sm text-[#FFFFFF99] max-sm:text-xs">
              For any queries, feel free to contact us at customercare@smarthavensystems.com.
            </p>
            <p className="mb-8 text-center text-sm text-[#FFFFFF99] max-sm:text-xs">
              Thank you for your understanding and support!
            </p>
            <div className=" flex justify-center">
              <button
                onClick={handleAcceptPrivacyPolicy}
                className="w-full max-w-[682px]  rounded-md bg-[#FF3B30] py-3 text-white"
              >
                Accept and Continue
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="paddings flex w-full flex-col items-center  justify-center  max-sm:px-3 max-sm:py-20 lg:h-auto lg:py-32">
        <p className="mb-6 text-xl font-bold text-white">Order Summary</p>
        <div className="flex w-full   items-center justify-center md:px-10">
          <div className="flex  w-full  flex-col   rounded-md border border-[#FFFFFF0D]  max-sm:rounded-lg max-sm:p-2  md:p-5">
            <div className="grid h-full items-center  rounded-md  bg-[#FFFFFF1A]   max-sm:grid max-sm:gap-5  md:gap-10">
              <div className="px-5">
                <ul className="mt-6 list-inside ">
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Product: {orderData?.product_selection_altima_elite ? "Altima Elite" : "Altima Core"}
                  </li>
                  {orderData?.door_spec_default_size ? (
                    <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">
                      Size: {orderData.door_spec_default_size}
                    </li>
                  ) : (
                    <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">
                      Size: {orderData?.door_spec_manual_size_height} x {orderData?.door_spec_manual_size_width}{" "}
                      {orderData?.door_spec_manual_size_unit}
                    </li>
                  )}

                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Frame Type: {orderData?.door_spec_frame_type}
                  </li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Finish: {orderData?.door_spec_finish_type}
                  </li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Handle Placement: {orderData?.handle_placement}
                  </li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">Smart Features:</li>
                  <li className="px-3 pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    - {orderData?.video_door_bell ? "Video Doorbell, " : ""}
                    {orderData?.intercom_sys ? "Intercom System, " : ""}
                    {orderData?.camera ? "Camera, " : ""}
                    {orderData?.voice_assisted ? "Alexa Integration, " : ""}
                    {orderData?.connectivity}, {orderData?.power_source}
                  </li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Security Features:
                    {orderData?.re_enforced_lock ? " Reinforced Lock, " : ""}
                    {orderData?.anti_theft ? "Anti-theft, " : ""}
                    {orderData?.alarm ? "Alarm, " : ""}
                    {orderData?.motion_sensor ? "Motion Sensor" : ""}
                  </li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Installation Type: {orderData?.type_installation}
                  </li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Preferred Date: {orderData?.prefered_installation}
                  </li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Special Instructions: {orderData?.special_installation_instruction}
                  </li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Extended Warranty: {orderData?.extended_warranty ? "Yes" : "No"}
                  </li>
                  <li className="pb-3 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    On-Site Support: {orderData?.installation_support ? "Yes" : "No"}
                  </li>
                  <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Payment Method: Stripe {orderData?.payment_confirmation ? "Yes" : "No"}
                  </li>
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
                    <td className="border-b border-l border-[#FFFFFF33]  bg-[#282828] px-4 py-2 text-sm">
                      ₹{orderData?.total}
                    </td>
                    <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                      ₹{orderData?.deposit_amount}
                    </td>
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
                  <p className="text-sm text-[#FFFFFF] max-sm:text-xs">I agree to the pre-order terms and conditions</p>
                </div>

                <p className="text-center text-white max-sm:text-xs">
                  <span className="font-medium ">Note :</span> You will receive a confirmation email once your pre-order
                  is complete
                </p>
              </div>

              <div className="border border-[#FFFFFF0D]"></div>
              <div className="mx-4  flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="font-regular mb-5 flex w-[60%] items-center justify-center gap-2 rounded-lg border border-[#FF3B30] bg-[#FF3B30] px-4 py-3 uppercase text-[#FFFFFF] max-sm:w-full"
                >
                  {loading ? "Processing Payment..." : "Pay Now"}
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
