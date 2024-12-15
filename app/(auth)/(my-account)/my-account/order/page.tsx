"use client"
import Footer from "components/Footer/Footer"
import axios from "axios";
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { HiChevronDown } from "react-icons/hi2"
import { LiaTimesSolid } from "react-icons/lia"
import MainFooter from "components/Footer/MainFooter"
import { getOrderInformation, UserInformationPayload } from "services/orderService"
import Image from "next/image";

interface User {
  id: string
  token: string
}


export default function Web() {
  const [addressData, setAddressData] = useState<UserInformationPayload["preorder"][] | null>(null)
  const [quantity, setQuantity] = useState(1000)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  

  const unitPrice = 500050 // price per unit
  const total = quantity * unitPrice
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)

  const opeDeletenModal = () => setIsDeleteModalOpen(true)
  const closeDeleteModal = () => setIsDeleteModalOpen(false)

  const opeCancelModal = () => setIsCancelModalOpen(true)
  const closeCancelModal = () => setIsCancelModalOpen(false)

  const handleOpenModal = (orderId: string) => {
    setSelectedOrderId(orderId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrderId(null);
    setStatus("");
  };

  // Move the fetchOrders function outside the handleCancelOrder function
  const fetchOrders = async () => {
    try {
      const userString = localStorage.getItem("user");
      if (!userString) {
        console.error("No user data found in localStorage.");
        return;
      }

      const parsedUser = JSON.parse(userString) as User;
      const userId = parsedUser?.id;
      if (!userId) {
        console.error("User ID is not present in the stored user data.");
        return;
      }

      const userDetails = await getOrderInformation(userId);
      console.log("Fetched Order Details:", userDetails);

      if (Array.isArray(userDetails.preorders)) {
        setAddressData(userDetails.preorders);
      } else {
        console.error("Order data is not in the expected format.");
      }
    } catch (error) {
      console.error("Error fetching order information:", error);
    }
  };

  const handleCancelOrder = async () => {
    setLoading(true)
    setError(null)
    setSuccessMessage(null)
  
    if (!selectedOrderId) {
      console.error("Order ID is missing.");
      return;
    }
  
    try {
      // Make the API call to cancel the order
      const response = await axios.put(
        `https://altima.fyber.site/preorder/preorder/${selectedOrderId}/update-status/`,
        { status: "cancelled" }, // Hardcoded status as "cancelled"
        { headers: { "Content-Type": "application/json" } }
      );
      setSuccessMessage("Order cancelled successfully");
      setLoading(false);
      console.log("Order canceled successfully:", response.data);
  
      // Close the cancel modal
      handleCloseModal();
  
      // Refresh the order list to reflect the canceled order
      fetchOrders();
    } catch (error: any) {
      console.error("Error canceling the order:", error);
      setError(error.response?.data?.message || "Error canceling the order");
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    if (successMessage || error) {
      const timer = setTimeout(() => {
        setSuccessMessage(null)
        setError(null)
      }, 3000) 

      return () => clearTimeout(timer) 
    }
  }, [successMessage, error])

  return (
    <section className="bg-black">
      <Navbar />

      <section className="paddings w-full gap-5 bg-[#080808] max-sm:px-3 max-sm:py-10 md:flex lg:h-auto lg:py-32">
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
                Address
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
          <div className="flex w-full flex-col  justify-center bg-[#151515] max-sm:rounded-lg max-sm:p-2  md:p-10">
            <p className="text-center text-xl text-[#FFFFFF]">Orders</p>
            <p className="pb-5 text-center text-xs text-[#FFFFFF80]">
              Check your order and verify your shipping for better experience
            </p>
            <div className="mb-5 border-b border-[#FFFFFF1A]"></div>


            {addressData ? (
                addressData.map((preorder, index) => (
            <div key={preorder.id} className="flex mb-5 h-full flex-col  rounded-lg  bg-[#FFFFFF1A]  p-5">
              <p className="mb-2 text-lg text-white"> Date Placed: {new Date(preorder.pub_date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })} | Smartheaven Order #1234567890</p>
              <div className="border-b border-[#FFFFFF1A]"></div>
              <div className="flex h-full pt-4  max-sm:grid max-sm:gap-5  md:gap-10">
                <div>
                  <motion.img
                    src="/renew.png"
                    className="max-sm:w-full  sm:w-[253px]"
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                </div>
                <div className="w-full ">
                  <div className="mb-5 flex gap-2 max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center">
                  {preorder.status === 'processing order' && (
  <motion.img
    src="/SpinnerGap.png"
    width={32}
    height={32}
    alt="Loading spinner"
    initial={{ scale: 1.2, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, ease: "easeIn" }}
  />
)}

{preorder.status === 'pending' && (
  <motion.img
    src="/SpinnerGap.png"
    width={32}
    height={32}
    alt="Loading spinner"
    initial={{ scale: 1.2, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, ease: "easeIn" }}
  />
)}

{preorder.status === 'completed' && (
  <motion.img
    src="/CheckCircle8.png"
    width={32}
    height={32}
    alt="Completed"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  />
)}

{preorder.status === 'cancelled' && (
  <motion.img
    src="/Prohibit.png"
    width={32}
    height={32}
    alt="Completed"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  />
)}
                    <p className=" text-lg text-[#FFFFFF] max-sm:text-center capitalize">{preorder.status}</p>
                    {preorder.status === 'processing order' && (
                    <p className="text-center text-sm text-[#FFFFFF99]">Estimated delivery: Sat, August 26</p>
                    )}
                  </div>
                  {preorder.product_selection_altima_elite === true && (
                  <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-sm:text-lg lg:text-2xl">
                    Altima Elite
                  </p>
                )}

{preorder.product_selection_altima_elite === false && (
                  <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-sm:text-lg lg:text-2xl">
                    Altima Core
                  </p>
                )}

                  <ul className="mt-22 list-inside ">
                    <li className="pb-1 text-sm text-[#FFFFFF99] max-sm:text-xs">
                      Address : {preorder.shipping_address_street} , {preorder.email_address}
                    </li>
                    <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs capitalize">Status: {preorder.status}</li>
                    
                  </ul>

                  {preorder.status === 'processing order' &&  (
                  <div className="flex w-full gap-4 max-sm:flex-col">
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
                      onClick={() => handleOpenModal(preorder.id)}
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
                      onClick={opeCancelModal}
                    >
                      View Details
                    </motion.button>
                  </div>
                    )}

                  
                  {preorder.status === 'pending' &&  (
                  <div className="flex w-full gap-4 max-sm:flex-col">
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
                      onClick={() => handleOpenModal(preorder.id)}
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
                      onClick={opeCancelModal}
                    >
                      View Details
                    </motion.button>
                  </div>
                    )}
{preorder.status === 'cancelled' && (
<div className="flex w-full gap-4 max-sm:flex-col">
                    <motion.a
                      href="/my-account/track-order"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.9 }}
                      className="font-regular w-full gap-2   rounded-lg border border-[#FFFFFF99]  px-4 py-2 text-center text-sm  text-[#FFFFFF] max-sm:py-2 "
                    >
                      Track Order
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.9 }}
                      className="font-regular w-full   gap-2 rounded-lg border border-[#FFFFFF99]  px-4 py-2 text-sm  text-[#FFFFFF] max-sm:py-2 "
                      onClick={opeCancelModal}
                    >
                      View Details
                    </motion.button>
                  </div>
)}
{preorder.status === 'completed' && (
<div className="flex w-full gap-4">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.9 }}
                      className="font-regular w-full   gap-2 rounded-lg border border-[#FFFFFF99]  px-4 py-2 text-sm  text-[#FFFFFF] max-sm:py-2 "
                      onClick={opeCancelModal}
                    >
                      View Details
                    </motion.button>
                  </div>
)}
                  <div className="my-3 border-b border-[#FFFFFF1A]"></div>
                  <div className="flex items-center gap-3">
                    <p className="text-white">
                      Total Price ( {preorder.quantity} Item ) :<span className="font-bold"> ₹{preorder.total}</span>| Download Receipt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            ))
          ) : (
            <p className="text-sm text-[#FFFFFF80]">Loading order information...</p>
          )}
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

{isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000] bg-opacity-95">
          <div className="w-full max-w-sm rounded-lg bg-[#151515] p-4 text-white">
            <div className="mb-4 flex w-full items-center">
              <h2 className=" w-full text-center text-[#FFFFFF99]">Cancel Order</h2>
              <LiaTimesSolid onClick={handleCloseModal} className="cursor-pointer" />
            </div>
            <p className="w-full text-center text-2xl text-white">Are you sure you want to Cancel this order?</p>
            <div className="mt-4 flex gap-2">
              <button onClick={handleCancelOrder} className="w-full  rounded-lg border border-[#FFFFFF99] bg-[#FF3B3B] px-4 py-2 text-[#000000]  hover:bg-[#FF3B3B]">
              {loading ? "Cancelling Order" : "Yes, Cancel" }
              </button>
              <button
                onClick={handleCloseModal}
                className="w-full rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-2 text-[#ffffff]  hover:bg-[#FF3B3B]"
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      {successMessage && (
        <div className="animation-fade-in fixed bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#000000] bg-[#92E3A9] text-[#000000] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#000000]">{successMessage}</span>
          <Image src="/AuthImages/Star2.svg" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
      {error && (
        <div className="animation-fade-in fixed bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#D14343] bg-[#FEE5E5] text-[#D14343] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#D14343]">{error}</span>
          <Image src="/AuthImages/failed.png" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
    </section>
  )
}
