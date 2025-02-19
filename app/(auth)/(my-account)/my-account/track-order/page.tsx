"use client"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { HiChevronDown } from "react-icons/hi2"
import { LiaTimesSolid } from "react-icons/lia"
import MainFooter from "components/Footer/MainFooter"
import NewNav from "components/Navbar/NewNav"

export default function Web() {
  const [quantity, setQuantity] = useState(1000)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)

  // Handlers for increment and decrement
  const handleIncrement = () => setQuantity(quantity + 1)
  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1) // Prevent negative quantity
  }

  const unitPrice = 500050 // price per unit
  const total = quantity * unitPrice

  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const opeDeletenModal = () => setIsDeleteModalOpen(true)
  const closeDeleteModal = () => setIsDeleteModalOpen(false)
  const opeCancelModal = () => setIsCancelModalOpen(true)
  const closeCancelModal = () => setIsCancelModalOpen(false)
  const [orderId, setOrderId] = useState<string | null>(null)
  const [orderInfo, setOrderInfo] = useState<any>(null) // To store order data
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch order details
  useEffect(() => {
    const fetchOrderInfo = async (id: string) => {
      try {
        const response = await fetch(`https://altima.fyber.site/preorder/preorder/${id}/`)
        if (!response.ok) {
          throw new Error("Failed to fetch order details")
        }
        const data = await response.json()
        setOrderInfo(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    const storedOrderId = localStorage.getItem("orderId")
    setOrderId(storedOrderId)

    if (storedOrderId) {
      fetchOrderInfo(storedOrderId)
    } else {
      setLoading(false)
      setError("Order ID not found in localStorage")
    }
  }, [])

  const formatDate = (isoDate: string | null | undefined) => {
    if (!isoDate) return "Invalid date" // Handle null or undefined
    const date = new Date(isoDate)

    if (isNaN(date.getTime())) return "Invalid date" // Handle invalid date strings

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  const invoiceRef = useRef<HTMLDivElement>(null)

  const downloadPDF = async () => {
    if (!invoiceRef.current) return

    try {
      // Temporarily make the invoice visible
      invoiceRef.current.style.display = "block"

      // Dynamically import html2pdf.js only on the client side
      const html2pdf = (await import("html2pdf.js")).default

      const element = invoiceRef.current
      const opt = {
        margin: 0.5,
        filename: "invoice.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      }

      await html2pdf().set(opt).from(element).save()
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      // Re-hide the invoice after PDF generation
      invoiceRef.current.style.display = "none"
    }
  }

  return (
    <section className="bg-black">
      <NewNav />

      <section className="paddings w-full gap-5  bg-[#080808] max-sm:px-3 max-sm:py-10 md:flex lg:h-auto lg:py-32">
        <div className="relative mb-5 max-sm:block md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex w-[160px] items-center justify-between whitespace-nowrap border border-[#FFFFFF0D] p-2 text-sm text-[#FFFFFF80]"
          >
            Orders
            <HiChevronDown className="ml-2 h-5 w-5 text-white" />
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-[160px] rounded-lg bg-[#262626] text-sm text-[#FFFFFF80]">
              <a href="/profile" className="block px-4 py-2   hover:bg-[#FFFFFF1A]">
                My Account
              </a>
              <a href="/my-account/order" className="block bg-[#FFFFFF1A] px-4 py-2 hover:bg-[#FFFFFF1A]">
                Orders
              </a>
              <a href="/my-account/installment" className="block px-4 py-2 hover:bg-[#FFFFFF1A]">
                Installments
              </a>
              <p onClick={opeDeletenModal} className="block px-4 py-2 hover:bg-[#FFFFFF1A]">
                Log out
              </p>
            </div>
          )}
        </div>
        <div className=" w-full  items-center justify-between">
          <div className="flex max-md:hidden">
            <a
              href="/profile"
              className="mt-[0.5px] flex h-auto items-center gap-2 border-r border-black bg-[#FFFFFF0D]  px-4 "
            >
              <motion.img
                src="/GearSix.png"
                width={20}
                height={20}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
              <p className="whitespace-nowrap p-2 text-white">My Account</p>
            </a>
            <a
              href="/my-account/order"
              className="mt-[0.5px] flex h-auto items-center gap-2 border-r border-black bg-[#FFFFFF1A]  px-4 "
            >
              <motion.img
                src="/ListDashes.png"
                width={20}
                height={20}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
              <p className="whitespace-nowrap p-2 text-white">Orders</p>
            </a>
            <a
              href="/address"
              className="mt-[0.5px] flex h-auto items-center gap-2 border-r border-black bg-[#FFFFFF0D]  px-4 "
            >
              <motion.img
                src="/GearSix.png"
                width={20}
                height={20}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
              <p className="whitespace-nowrap p-2 text-white">My Address</p>
            </a>
            <div
              onClick={opeDeletenModal}
              className="mt-[0.5px] flex h-auto items-center gap-2 border-r border-black bg-[#FFFFFF0D]  px-4 "
            >
              <motion.img
                src="/SignOut.png"
                width={20}
                height={20}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
              <p className="whitespace-nowrap p-2 text-white">Log out</p>
            </div>
          </div>
          <div className=" flex w-full  items-center justify-center ">
            <div className="flex w-full flex-col  justify-center  bg-[#151515]  max-sm:p-2  md:px-10 md:py-5">
              <div className="my-3 flex w-full items-center   gap-3">
                <motion.img
                  src="/CaretUp copy.png"
                  alt=""
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeIn" }}
                  className="h-4 cursor-pointer"
                  onClick={handleGoBack}
                />
                <p className="  text-base text-[#FFFFFFcc]">ORDER DETAILS</p>
              </div>
              {/* <div className="mb-3 flex w-full justify-center">
                <p className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">ORDER ID: {orderId}</p>
              </div> */}

              {/* <div className="flex w-full items-center justify-center    bg-[#FFFFFF1A]  p-5 max-sm:grid max-sm:gap-5  md:gap-10">
                <div className="flex w-full flex-col items-center justify-center gap-3">
                  <motion.img
                    src="/SpinnerGap.png"
                    width={32}
                    height={32}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                  <p className="pb-2 text-lg text-[#FFFFFF] opacity-80 max-sm:text-sm">Preparing for Shipping</p>
                  <p className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">Be Patient, Package on deliver!</p>
                  <div className="flex flex-col items-center justify-center">
                    <Image src="/Shipping.png" width={1070} height={60} alt="" className=" max-sm:hidden" />
                    <Image src="/Mobile.png" width={314} height={60} alt="" className="sm:hidden" />
                    <Image src="/Track.png" width={1070} height={60} alt="" className="my-4" />
                  </div>
                </div>
              </div> */}

              {/* <div className="my-5 grid grid-cols-2 gap-5">
                <div className=" flex  h-full    bg-[#FFFFFF1A] p-6 max-sm:grid max-sm:gap-5 md:gap-10">
                  <div className="  w-full    ">
                    <div className="flex flex-col items-center justify-center">
                      <Image src="/Truck.png" width={32} height={32} alt="" />
                      <p className="pb-8 pt-1 text-sm text-[#FFFFFF99] max-sm:text-xs">Ordered in</p>
                      <p className="text-lg text-[#FFFFFF] opacity-80 max-sm:text-sm">
                        {formatDate(orderInfo?.pub_date)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" flex  h-full    bg-[#FFFFFF1A] p-6 max-sm:grid max-sm:gap-5 md:gap-10">
                  <div className="  w-full    ">
                    <div className="flex flex-col items-center justify-center">
                      <Image src="/Timer.png" width={32} height={32} alt="" />
                      <p className="pb-8 pt-1 text-sm text-[#FFFFFF99] max-sm:text-xs">Delivered in</p>
                      <p className="text-lg text-[#FFFFFF] opacity-80 max-sm:text-sm">5 Days</p>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="mb-4 flex h-full flex-col items-center  rounded-md  bg-[#FFFFFF1A] md:gap-4">
                <div className="mx-3 flex w-full">
                  <div className=" flex w-full flex-col gap-2 pt-5 text-sm max-sm:p-3 max-sm:text-sm xl:px-5">
                    <p className="mb-3 text-lg text-[#FFFFFFcc] max-sm:text-sm">Product Details</p>
                    <div className="flex w-full justify-between">
                      <p className="pb-3  text-[#FFFFFF99] ">
                        <span className="text-white">Order Number:</span>{" "}
                      </p>
                      <p className="pb-3  text-[#FFFFFF99] ">F1234567890</p>
                    </div>
                    <div className="flex w-full justify-between">
                      <p className="pb-3  text-[#FFFFFF99] ">
                        <span className="text-white">Order Date:</span>{" "}
                      </p>
                      <p className="pb-3  text-[#FFFFFF99] ">{formatDate(orderInfo?.pub_date)}</p>
                    </div>
                    <div className="flex w-full justify-between">
                      <p className="pb-3  text-[#FFFFFF99] ">
                        <span className="text-white">Sold by:</span>{" "}
                      </p>
                      <p className="pb-3  text-[#FFFFFF99] ">Smartheavenstechnologies</p>
                    </div>
                    <div className="flex w-full justify-between">
                      <p className="pb-3  text-[#FFFFFF99] ">
                        <span className="text-white">Quantity:</span>{" "}
                      </p>
                      <p className="pb-3  text-[#FFFFFF99] ">{orderInfo?.quantity}</p>
                    </div>
                    <div className="flex w-full justify-between">
                      <p className="pb-3  text-[#FFFFFF99] ">
                        <span className="text-white">Status:</span>{" "}
                      </p>
                      <span className="text-sm capitalize  text-[#FFFFFF99] max-sm:text-xs">{orderInfo?.status}</span>
                    </div>
                  </div>
                </div>
                <table className="w-full table-fixed border-separate border-spacing-0 p-3 text-left text-white sm:hidden">
                  <thead></thead>
                  <tbody className="border-b border-t">
                    <tr>
                      <td className="border-b border-l border-t border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        <span className="opacity-40">Base Price per Door:</span>
                      </td>
                      <td className="border-b border-l border-r border-t border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        {orderInfo?.product_selection_altima_elite ? "₹99,000 " : "₹49,500"}
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        <span className="opacity-40">Tax</span>
                      </td>
                      <td className="border-b  border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        ₹17,820
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        <span className="opacity-40">Subtotal</span>
                      </td>
                      <td className="border-b  border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        ₹17,820
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        <span className="opacity-40">Quantity</span>
                      </td>
                      <td className="border-b  border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        {orderInfo?.quantity}
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        <span className="opacity-40">Total</span>
                      </td>
                      <td className="border-b border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        {(() => {
                          const total = Number(orderInfo?.total ?? 0)
                          console.log("Total:", total, "Type:", typeof total) // Debugging
                          return `₹${total.toLocaleString()}`
                        })()}
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        <span className="opacity-40">30% Advance</span>
                      </td>
                      <td className="border-b border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        {(() => {
                          const deposit = Number(orderInfo?.deposit_amount ?? 0)
                          console.log("Deposit Amount:", deposit, "Type:", typeof deposit) // Debugging
                          return `₹${deposit.toLocaleString()}`
                        })()}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="table-fixed border-separate border-spacing-0 px-4 pb-4 text-left   text-white max-sm:hidden 2xl:w-full">
                  <thead>
                    <tr className="border">
                      <th className="border-b border-l border-t border-[#FFFFFF33] bg-[#282828] px-4 py-4 text-sm font-normal opacity-40">
                        Base Price per Door:
                      </th>
                      <th className="border-b border-l border-t border-[#FFFFFF33]  bg-[#282828] px-4 py-4 text-sm font-normal opacity-40">
                        Tax
                      </th>
                      <th className="border-b border-l border-t  border-[#FFFFFF33] bg-[#282828] px-4 py-4 text-sm font-normal opacity-40">
                        Subtotal
                      </th>
                      <th className="border-b border-l border-t  border-[#FFFFFF33] bg-[#282828]  px-4 py-4 text-sm font-normal opacity-40">
                        Quantity:
                      </th>
                      <th className="border-b border-l border-r border-t border-[#FFFFFF33]  bg-[#282828] px-4 py-4 text-sm font-normal opacity-40">
                        Total
                      </th>
                      <th className="border-b border-l border-r border-t border-[#FFFFFF33]  bg-[#282828] px-4 py-4 text-sm font-normal opacity-40">
                        30% Advance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-b">
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33]  bg-[#282828] px-4 py-2 text-sm">
                        {orderInfo?.product_selection_altima_elite ? "₹99,000 " : "₹49,500"}
                      </td>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">₹17,820</td>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">₹1,16,820</td>
                      <td className="border-b border-l border-[#FFFFFF33]  bg-[#282828] px-4 py-2 text-sm">
                        {orderInfo?.quantity}
                      </td>
                      <td className="border-b border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        {(() => {
                          const total = Number(orderInfo?.total ?? 0)
                          console.log("Total:", total, "Type:", typeof total) // Debugging
                          return `₹${total.toLocaleString()}`
                        })()}
                      </td>
                      <td className="border-b border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        {(() => {
                          const deposit = Number(orderInfo?.deposit_amount ?? 0)
                          console.log("Deposit Amount:", deposit, "Type:", typeof deposit) // Debugging
                          return `₹${deposit.toLocaleString()}`
                        })()}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex w-full px-3 pb-3 xl:px-4">
                  <div className=" flex w-full items-center justify-between rounded-md bg-[#FFFFFF1A] p-3">
                    <div className="flex  items-center gap-1 text-[#FFFFFFcc] max-sm:text-sm">
                      <img src="/iconamoon_invoice.png" alt="" className="h-6 w-6" />
                      <p>Receipt and Invoice</p>
                    </div>
                    <p
                      className="flex  cursor-pointer gap-1 text-[#FFFFFFcc] underline max-sm:text-sm"
                      onClick={downloadPDF}
                    >
                      Download
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex h-full flex-col items-center  rounded-md  bg-[#FFFFFF1A]     max-sm:gap-3 md:gap-10">
                <div className="w-full">
                  <div className="mb-3 flex w-full flex-col gap-2 pt-5 max-sm:p-3 max-sm:text-sm xl:px-5">
                    <p className="pb-3  text-[#FFFFFF99] ">
                      <span className="text-white">Product:</span>{" "}
                      {orderInfo?.product_selection_altima_elite ? "Altima Elite" : "Altima Core"}
                    </p>
                    {orderInfo?.door_spec_default_size ? (
                      <p className="pb-3  text-[#FFFFFF99] ">Size(s) in Inches: {orderInfo.door_spec_default_size}</p>
                    ) : (
                      <p className="pb-3  text-[#FFFFFF99] ">
                        <span className="text-white">Size(s) in Inches:</span> {orderInfo?.door_spec_manual_size_height}{" "}
                        x {orderInfo?.door_spec_manual_size_width} {orderInfo?.door_spec_manual_size_unit}
                      </p>
                    )}
                    <p className="pb-3  text-[#FFFFFF99] ">
                      <span className="text-white">Frame Type:</span> {orderInfo?.door_spec_frame_type}
                    </p>
                    <p className="pb-3  text-[#FFFFFF99] ">
                      <span className="text-white">Meterial:</span> {orderInfo?.door_spec_material_type}
                    </p>
                    <p className="pb-3  text-[#FFFFFF99] ">
                      <span className="text-white">Finish:</span> {orderInfo?.door_spec_finish_type}
                    </p>
                    <p className="pb-3  text-[#FFFFFF99] ">
                      <span className="text-white">Door Hinge Orientation:</span> {orderInfo?.handle_placement}
                    </p>
                    <p className="pb-3  text-[#FFFFFF99] ">
                      <span className="text-white">Standard Security:</span> Reinforced Lock, Anti-Theft System, Motion
                      Sensor, Smoke Detector, Gas leak Detector, Smart Keypad Access
                    </p>
                    <p className="pb-2  text-[#FFFFFF99] ">
                      <span className="text-white">Addition Security:</span>
                      {orderInfo?.battery_backup ? " Battery Backup, " : ""}
                      {orderInfo?.fire_detection ? "Fire Detection, " : ""}
                      {orderInfo?.remote_lock_unlock ? "Remote Lock/Unlock" : ""}
                    </p>

                    <p className=" pb-2  text-[#FFFFFF99] ">
                      <span className="text-white">Integrated Smart Hub Features:</span> All Altima Core features +
                      Camera, {orderInfo?.smart_lighting_integration ? "Smart Lighting Integration, " : ""}
                      {orderInfo?.home_automation_integration ? "Home Automation Integration, " : ""}
                      {orderInfo?.advance_motion_detection ? "Advanced Motion Detection, " : ""}
                      {orderInfo?.voice_assisted ? "Voice assistant integration " : ""}
                      {orderInfo?.connectivity}, {orderInfo?.power_source}
                    </p>

                    <p className=" pb-2  text-[#FFFFFF99] ">
                      <span className="text-white">Network Type:</span>
                      {orderInfo?.wifi ? " Wifi, " : ""}
                      {orderInfo?.zigbee ? "Zigbee, " : ""}
                      {orderInfo?.bluetooth ? "Bluetooth" : ""}
                    </p>

                    <p className=" pb-2  text-[#FFFFFF99] ">
                      <span className="text-white">Power Source:</span>
                      {orderInfo?.mains_power ? " Mains Power, " : ""}
                      {orderInfo?.solar_ready ? "Solar Ready, " : ""}
                      {orderInfo?.battery_backup ? "Battery Backup" : ""}
                    </p>

                    <p className="pb-3  text-[#FFFFFF99] ">
                      <span className="text-white">Installation Environment:</span> {orderInfo?.type_installation}
                    </p>
                    <p className="pb-3  text-[#FFFFFF99] ">
                      <span className="text-white">Preferred Installation Date:</span>{" "}
                      {orderInfo?.prefered_installation}
                    </p>
                    <p className="pb-3  text-[#FFFFFF99] ">
                      <span className="text-white">Special Installation Instructions:</span>{" "}
                      {orderInfo?.special_installation_instruction}
                    </p>
                    <p className="pb-3  text-[#FFFFFF99] ">
                      <span className="text-white">Extended Warranty: </span>{" "}
                      {orderInfo?.extended_warranty ? "Yes" : "No"}
                    </p>
                    <p className="pb-3  text-[#FFFFFF99] ">
                      <span className="text-white">On-Site Support: </span>{" "}
                      {orderInfo?.installation_support ? "Yes" : "No"}
                    </p>
                    <p className="text-[#FFFFFF99]">
                      <span className="text-white">Payment Method:</span> Razorpay
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-full py-4  ">
                <div className=" flex w-full flex-col justify-between gap-2 rounded-md bg-[#FFFFFF1A] p-3">
                  <div className="flex  w-full justify-between gap-1 text-[#FFFFFFcc] max-sm:text-sm">
                    <p>Address</p>
                    <p className="flex  gap-1 text-[#FFFFFFcc] underline max-sm:text-sm">Edit</p>
                  </div>
                  <p className="flex  gap-1 text-[#FFFFFFcc] max-sm:text-sm">
                    Shipping Address: {orderInfo?.shipping_address_street}, {orderInfo?.shipping_address_city},{" "}
                    {orderInfo?.shipping_address_state}, {orderInfo?.shipping_address_country}
                  </p>
                </div>
              </div>

              <div className="my-5 flex w-full gap-4 max-sm:grid">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-[46px] w-full  gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FF3B30] px-4  py-2 text-sm font-normal  text-[#FFFFFF] max-sm:py-2 "
                  onClick={opeCancelModal}
                >
                  Cancel Order
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />

      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000] bg-opacity-95">
          <div className="w-full max-w-sm rounded-lg bg-[#151515] p-4 text-white">
            <div className="mb-4 flex w-full items-center">
              <h2 className=" w-full text-center text-[#FFFFFF99]">Log Out</h2>
              <LiaTimesSolid onClick={closeDeleteModal} className="cursor-pointer" />
            </div>
            <p className="w-full text-center text-2xl text-white">Are you sure you want to log out?</p>
            <div className="mt-4 flex gap-2">
              <button className="w-full  rounded-lg border border-[#FFFFFF99] bg-[#FF3B3B] px-4 py-2 text-[#000000]  hover:bg-[#FF3B3B]">
                Yes, Log Out
              </button>
              <button
                onClick={closeDeleteModal}
                className="w-full rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-2 text-[#ffffff]  hover:bg-[#FF3B3B]"
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      {isCancelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000] bg-opacity-95">
          <div className="w-full max-w-sm rounded-lg bg-[#151515] p-4 text-white">
            <div className="mb-4 flex w-full items-center">
              <h2 className=" w-full text-center text-[#FFFFFF99]">Cancel Order</h2>
              <LiaTimesSolid onClick={closeCancelModal} className="cursor-pointer" />
            </div>
            <p className="w-full text-center text-2xl text-white">Are you sure you want to Cancel this order?</p>
            <div className="mt-4 flex gap-2">
              <button className="w-full  rounded-lg border border-[#FFFFFF99] bg-[#FF3B3B] px-4 py-2 text-[#000000]  hover:bg-[#FF3B3B]">
                Yes, Cancel
              </button>
              <button
                onClick={closeCancelModal}
                className="w-full rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-2 text-[#ffffff]  hover:bg-[#FF3B3B]"
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <section className="mt-10 hidden w-full bg-[#FFFFFF] p-6 print:block" ref={invoiceRef}>
        <div className="flex flex-row items-start justify-between">
          <p className="text-lg font-semibold">
            Smart Haven GST Invoice <br />
            for Advance Payment
          </p>
          <img className="object-contain" src="/ALTIMA.png" width={76} height={20} alt="" />
        </div>

        <div className="mt-6 grid grid-cols-2 justify-between">
          <div className="grid gap-2 ">
            <div className="grid gap-1">
              <p className="text-[10px] text-[#0000004D]">ACCOUNT NUMBER</p>
              <p className="text-xs">Razorpay</p>
            </div>
            <div className="grid gap-1">
              <p className="text-[10px] text-[#0000004D]">Issued To:</p>
              <p className="text-xs">{orderInfo?.full_name}</p>
            </div>
            <div className="grid gap-1">
              <p className="text-[10px] text-[#0000004D]">Email:</p>
              <p className="text-xs">{orderInfo?.email_address}</p>
            </div>
            <div className="grid gap-1">
              <p className="text-[10px] text-[#0000004D]">Phone:</p>
              <p className="text-xs">{orderInfo?.contact_number}</p>
            </div>
          </div>
          <div className="w-full">
            <p className="font-xs mb-1 font-semibold">GST Invoice Summary</p>
            <div className="border-b border-dotted border-[#00000066]"></div>
            <div className="my-2 flex w-full justify-between">
              <p className="text-xs text-[#00000080]">Invoice No.</p>
              <p className="text-xs">AIN1234567890123</p>
            </div>
            <div className="border-b border-dotted border-[#00000066]"></div>
            <div className="my-2 flex w-full justify-between">
              <p className="text-xs text-[#00000080]">Invoice Date.</p>
              <p className="text-xs">{orderInfo?.pub_date}</p>
            </div>
            <div className="border-b border-dotted border-[#00000066]"></div>
            <div className="my-2 flex w-full justify-between">
              <p className="text-xs text-[#00000080]">Invoice Status.</p>
              <p className="text-center text-xs">Paid (30% Advance) </p>
            </div>
            <div className="border-b border-dotted border-[#00000066]"></div>

            <div className="my-2 flex w-full justify-between">
              <p className="text-xs text-[#00000080]">Total Amount(Incl GST):</p>

              <p className="text-center text-xs">₹{orderInfo?.deposit_amount} </p>
            </div>
            <div className="border-b border-dotted border-[#00000066]"></div>
          </div>
        </div>
        <p className="my-5 text-center text-xs font-semibold">Original For Reciept</p>
        <div className="w-full">
          <div className="w-full bg-[#FF3B3080] p-2">
            <p className="text-xs font-semibold">Description of Goods/Services</p>
          </div>
          <div className="flex justify-between border border-dotted p-3">
            <p className="text-xs">Product</p>
            <p className="text-xs">{orderInfo?.product_selection_altima_elite ? "Altima Elite" : "Altima Core"}</p>
          </div>
          <div className="flex justify-between border border-dotted p-3">
            <p className="text-xs">Model Details</p>
            <p className="text-xs">{orderInfo?.product_selection_altima_elite ? "Altima Elite" : "Altima Core"}</p>
          </div>
          <div className="flex justify-between border border-dotted p-3">
            <p className="text-xs">Model Details</p>
            <p className="text-xs">₹{orderInfo?.total}</p>
          </div>
          <div className="flex justify-between border border-dotted p-3">
            <p className="text-xs">Advance Amount Paid (30%)</p>
            <p className="text-xs">₹{orderInfo?.deposit_amount}</p>
          </div>
          <div className="flex justify-between border border-dotted p-3">
            <p className="text-xs">GST @ 18% on Advance</p>
            <p className="text-xs">
              ₹{orderInfo?.deposit_amount ? (Number(orderInfo.deposit_amount) * 0.18).toFixed(2) : "-"}
            </p>
          </div>
          <div className="flex justify-between border border-dotted p-3">
            <p className="text-xs">Total Amount Paid (Incl. GST)</p>
            <p className="text-xs">
              ₹
              {orderInfo?.deposit_amount
                ? (Number(orderInfo.deposit_amount) + Number(orderInfo.deposit_amount) * 0.18).toFixed(2)
                : "-"}
            </p>
          </div>
        </div>

        <div className="mt-5 w-full">
          <div className="w-full bg-[#FF3B3080] p-2">
            <p className="text-xs font-semibold">GST and Tax Details</p>
          </div>
          <div className="flex justify-between border border-dotted p-3">
            <p className="text-xs">GSTIN</p>
            <p className="text-xs">[Your GST Identification Number]</p>
          </div>
          <div className="flex justify-between border border-dotted p-3">
            <p className="text-xs">Place of Supply</p>
            <p className="text-xs">
              {orderInfo?.shipping_address_street}, {orderInfo?.shipping_address_city},{" "}
              {orderInfo?.shipping_address_state}, {orderInfo?.shipping_address_country}
            </p>
          </div>
          <div className="flex justify-between border border-dotted p-3">
            <p className="text-xs">State Code</p>
            <p className="text-xs">₹{orderInfo?.shipping_address_postal_code}</p>
          </div>
        </div>
        <p className="my-5 text-center text-[10px] text-[#0000004D]">
          Smart Haven Systems Pvt. Ltd.
          <br />
          Registered Address: [Address]
          <br />
          GSTIN: [GST Identification Number]
          <br />
          PAN: [PAN Number]
          <br />
          Website: [Company Website]
        </p>
        <div className="flex w-full items-center justify-center">
          <img src="/WhatsApp Image 2022-06-01 at 8.33 1 (Traced).png" width={76} height={20} alt="" />
        </div>
        <p className="my-5 text-center text-[8px] text-[#0000004D]">
          This invoice is digitally signed for authenticity. Verification is available at: [Verification URL]
        </p>
      </section>
    </section>
  )
}
