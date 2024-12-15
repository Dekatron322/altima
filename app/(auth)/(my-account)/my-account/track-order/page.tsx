"use client"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { HiChevronDown } from "react-icons/hi2"
import { LiaTimesSolid } from "react-icons/lia"
import MainFooter from "components/Footer/MainFooter"

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
  const [orderId, setOrderId] = useState<string | null>(null);
  const [orderInfo, setOrderInfo] = useState<any>(null); // To store order data
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch order details
  useEffect(() => {
    const fetchOrderInfo = async (id: string) => {
      try {
        const response = await fetch(`https://altima.fyber.site/preorder/preorder/${id}/`);
        if (!response.ok) {
          throw new Error("Failed to fetch order details");
        }
        const data = await response.json();
        setOrderInfo(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const storedOrderId = localStorage.getItem("orderId");
    setOrderId(storedOrderId);

    if (storedOrderId) {
      fetchOrderInfo(storedOrderId);
    } else {
      setLoading(false);
      setError("Order ID not found in localStorage");
    }
  }, []);

  const formatDate = (isoDate: string | null | undefined) => {
    if (!isoDate) return "Invalid date"; // Handle null or undefined
    const date = new Date(isoDate);
  
    if (isNaN(date.getTime())) return "Invalid date"; // Handle invalid date strings
  
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  };

  return (
    <section className="bg-black">
      <Navbar />

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
              <div className="mb-3 flex w-full items-center justify-center gap-3">
                <motion.img
                  src="/ArrowUp.png"
                  width={32}
                  height={16}
                  alt=""
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeIn" }}
                  className="cursor-pointer"
                  onClick={handleGoBack}
                />
                <p className="  text-xl text-[#FFFFFF]">ORDER DETAILS</p>
              </div>
              <div className="mb-3 flex w-full justify-center">
                <p className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">ORDER ID: {orderId}</p>
              </div>

              <div className="flex w-full items-center justify-center    bg-[#FFFFFF1A]  p-5 max-sm:grid max-sm:gap-5  md:gap-10">
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
              </div>

              <div className="my-5 grid grid-cols-2 gap-5">
                <div className=" flex  h-full    bg-[#FFFFFF1A] p-6 max-sm:grid max-sm:gap-5 md:gap-10">
                  <div className="  w-full    ">
                    <div className="flex flex-col items-center justify-center">
                      <Image src="/Truck.png" width={32} height={32} alt="" />
                      <p className="pb-8 pt-1 text-sm text-[#FFFFFF99] max-sm:text-xs">Ordered in</p>
                      <p className="text-lg text-[#FFFFFF] opacity-80 max-sm:text-sm">{formatDate(orderInfo?.pub_date)}</p>
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
              </div>

              <p className="mb-4 text-[#FFFFFF99] ">Product Details</p>

              <div className="flex h-full flex-col  items-center  bg-[#FFFFFF1A]     max-sm:gap-5 md:gap-10">
                <div className="w-full">
                  <div className="mb-3 flex w-full flex-col gap-4 px-5 pt-5">
                    <p className="text-[#FFFFFF99]">Product: {orderInfo?.product_selection_altima_elite
                ? "Altima Elite"
                : "Altima Core"}</p>
                    <p className="text-[#FFFFFF99]">Size: {orderInfo?.door_spec_manual_size_height}&quot;` x {orderInfo?.door_spec_manual_size_width}&quot;` {orderInfo?.door_spec_manual_size_unit}</p>
                    <p className="text-[#FFFFFF99]">Frame Type: {orderInfo?.door_spec_frame_type}</p>
                    <p className="text-[#FFFFFF99]">Finish: Glass – {orderInfo?.door_spec_finish_type}</p>
                    <p className="text-[#FFFFFF99]">Handle Placement: {orderInfo?.handle_placement}</p>
                    <p className="text-[#FFFFFF99]">Smart Features:</p>
                    <p className="px-3 text-[#FFFFFF99]">
                      <span className="h-1 w-1 rounded-full"></span>{orderInfo?.video_door_bell
                      ? "Video Doorbell, "
                      : ""} 
                    {orderInfo?.intercom_sys
                      ? "Intercom System, "
                      : ""}
                    {orderInfo?.camera
                      ? "Camera, "
                      : ""}
                    {orderInfo?.voice_assisted
                      ? "Alexa Integration, "
                      : ""}
                    {orderInfo?.connectivity}, {orderInfo?.power_source}
                    </p>
                    <p className="text-[#FFFFFF99]">
                      Security Features: {orderInfo?.re_enforced_lock
                      ? " Reinforced Lock, "
                      : ""} 
                    {orderInfo?.anti_theft
                      ? "Anti-theft, "
                      : ""}
                    {orderInfo?.alarm
                      ? "Alarm, "
                      : ""}
                    {orderInfo?.motion_sensor
                      ? "Motion Sensor"
                      : ""}  
                    </p>
                    <p className="text-[#FFFFFF99]">Installation Type: {orderInfo?.type_installation}</p>
                    <p className="text-[#FFFFFF99]">Preferred Date: {orderInfo?.prefered_installation}</p>
                    <p className="text-[#FFFFFF99]">
                      Special Instructions: {orderInfo?.special_installation_instruction}
                    </p>
                    <p className="text-[#FFFFFF99]">Extended Warranty: {orderInfo?.extended_warranty
                ? "Yes"
                : "No"}</p>
                    <p className="text-[#FFFFFF99]">On-Site Support: {orderInfo?.installation_support
                ? "Yes"
                : "No"}</p>
                    <p className="text-[#FFFFFF99]">Payment Method: Stripe Payment</p>
                  </div>
                </div>
                <table className="table-fixed border-separate border-spacing-0 sm:hidden text-left text-white w-full">
                  <thead>
                    
                  </thead>
                  <tbody className="border-b border-t">
                    <tr>
                      <td className="border-b border-t border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm"><span className="opacity-40">Base Price per Door:</span></td>
                      <td className="border-b border-t border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">{orderInfo?.product_selection_altima_elite
                ? "₹99,000 "
                : "₹49,500"}</td>
                    </tr>
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm"><span className="opacity-40">Tax</span></td>
                      <td className="border-b  border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">₹17,820</td>
                    </tr>
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm"><span className="opacity-40">Subtotal</span></td>
                      <td className="border-b  border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">₹17,820</td>
                    </tr>
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm"><span className="opacity-40">Quantity</span></td>
                      <td className="border-b  border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">{orderInfo?.quantity}</td>
                    </tr>
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm"><span className="opacity-40">Total</span></td>
                      <td className="border-b  border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">₹{orderInfo?.total.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm"><span className="opacity-40">Subtotal</span></td>
                      <td className="border-b  border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">₹{orderInfo?.deposit_amount.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="my-5 max-sm:grid flex w-full gap-4">
                <motion.a
                  href="/my-account/track-order"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular w-full gap-2   rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-2 text-center text-sm  text-[#FFFFFF] max-sm:py-2 "
                >
                  Change Address
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular w-full   gap-2 rounded-lg border border-[#FFFFFF99]  px-4 py-2 text-sm  text-[#FFFFFF] max-sm:py-2 "
                  onClick={opeCancelModal}
                >
                  Cancel Order
                </motion.button>
                <motion.a
                  href="/my-account/track-order"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular w-full gap-2   rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-2 text-center text-sm  text-[#FFFFFF] max-sm:py-2 "
                >
                  Track Order
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular w-full   gap-2 rounded-lg border border-[#FFFFFF99]  px-4 py-2 text-sm  text-[#FFFFFF] max-sm:py-2 "
                >
                  View Details
                </motion.button>
              </div>

              <p className="my-4 text-[#FFFFFF99]">Order Summary</p>

              <table className="table-fixed border-separate border-spacing-0 max-sm:hidden   text-left text-white 2xl:w-full">
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
                    {orderInfo?.product_selection_altima_elite
                ? "₹99,000 "
                : "₹49,500"}
                    </td>
                    <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">₹17,820</td>
                    <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">₹1,16,820</td>
                    <td className="border-b border-l border-[#FFFFFF33]  bg-[#282828] px-4 py-2 text-sm">{orderInfo?.quantity}</td>
                    <td className="border-b border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                    ₹{orderInfo?.total.toLocaleString()}
                    </td>
                    <td className="border-b border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                      ₹{orderInfo?.deposit_amount.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-2">
                <p className="flex w-full justify-end px-5  text-end text-sm text-[#FFFFFF]">
                  (Seventy thousand one <br />
                  hundred and forty six <br /> Rupees Only/-)
                </p>
              </div>
              <div className="my-7 border border-[#FFFFFF0D]"></div>
              <div className=" flex w-full justify-center">
                <button className="font-regular  mb-5 flex  items-center justify-center gap-2  rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-7 py-2 uppercase text-[#FFFFFF] max-sm:w-full ">
                  View Invoice
                </button>
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
    </section>
  )
}
