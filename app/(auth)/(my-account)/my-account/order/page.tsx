"use client"
import Footer from "components/Footer/Footer"
import axios from "axios"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { HiChevronDown } from "react-icons/hi2"
import { LiaTimesSolid } from "react-icons/lia"
import MainFooter from "components/Footer/MainFooter"
import { getOrderInformation, UserInformationPayload } from "services/orderService"
import Image from "next/image"
import { useRouter } from "next/navigation"
import NewNav from "components/Navbar/NewNav"

interface User {
  id: string
  token: string
}
interface UserDetails {
  id: string
  username: string
  first_name: string
  last_name: string
  email: string
}
export default function Web() {
  const [addressData, setAddressData] = useState<UserInformationPayload["preorder"][] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null)
  const [status, setStatus] = useState<string>("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)
  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null) // Track which dropdown is open
  const opeDeletenModal = () => setIsDeleteModalOpen(true)
  const closeDeleteModal = () => setIsDeleteModalOpen(false)
  const opeCancelModal = () => setIsCancelModalOpen(true)
  const closeCancelModal = () => setIsCancelModalOpen(false)
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null)
  const handleOpenModal = (orderId: string) => {
    setSelectedOrderId(orderId)
    setIsModalOpen(true)
  }

  const router = useRouter()

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedOrderId(null)
    setStatus("")
  }

  const fetchOrders = async () => {
    try {
      const userString = localStorage.getItem("user")
      if (!userString) {
        console.error("No user data found in localStorage.")
        return
      }

      const parsedUser = JSON.parse(userString) as User
      const userId = parsedUser?.id
      if (!userId) {
        console.error("User ID is not present in the stored user data.")
        return
      }

      const userDetails = await getOrderInformation(userId)
      console.log("Fetched Order Details:", userDetails)

      if (Array.isArray(userDetails.preorders)) {
        setAddressData(userDetails.preorders)
      } else {
        console.error("Order data is not in the expected format.")
      }
    } catch (error) {
      console.error("Error fetching order information:", error)
    }
  }

  const handleCancelOrder = async () => {
    setLoading(true)
    setError(null)
    setSuccessMessage(null)

    if (!selectedOrderId) {
      console.error("Order ID is missing.")
      return
    }

    try {
      // Make the API call to cancel the order
      const response = await axios.put(
        `https://api.smarthavensystems.com/preorder/preorder/${selectedOrderId}/update-status/`,
        { status: "cancelled" },
        { headers: { "Content-Type": "application/json" } }
      )
      setSuccessMessage("Order cancelled successfully")
      setLoading(false)
      console.log("Order canceled successfully:", response.data)

      handleCloseModal()

      fetchOrders()
    } catch (error: any) {
      console.error("Error canceling the order:", error)
      setError(error.response?.data?.message || "Error canceling the order")
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  useEffect(() => {
    if (successMessage || error) {
      const timer = setTimeout(() => {
        setSuccessMessage(null)
        setError(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [successMessage, error])

  const handleTrackOrder = (selectedOrderId: string) => {
    localStorage.setItem("orderId", selectedOrderId)
    router.push(`/my-account/track-order`)
  }

  const fetchUserDetails = async () => {
    try {
      // Retrieve user data from localStorage
      const userData = localStorage.getItem("user")
      if (!userData) {
        throw new Error("User is not logged in.")
      }

      const parsedData = JSON.parse(userData) as { id: string }
      const { id } = parsedData

      const response = await fetch(`https://api.smarthavensystems.com/custom-user/get-user-detail/${id}/`, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch user details.")
      }

      const data = (await response.json()) as UserDetails
      setUserDetails(data)
    } catch (err: any) {
      setError(err.message || "An error occurred.")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    if (!userDetails?.email) {
      alert("User email is missing.")
      return
    }

    try {
      const response = await fetch("https://api.smarthavensystems.com/custom-user/sign-out/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userDetails.email }),
      })

      if (!response.ok) {
        throw new Error("Failed to log out. Please try again.")
      }

      // Clear user data from localStorage
      localStorage.removeItem("user")

      // Redirect to login or home page
      window.location.href = "/"
    } catch (error) {
      console.error("Error during logout:", error)
      alert(error instanceof Error ? error.message : "An error occurred.")
    }
  }

  useEffect(() => {
    fetchUserDetails()
  }, [])

  // Toggle dropdown for a specific order
  const toggleDropdown = (orderId: string) => {
    setActiveDropdownId(activeDropdownId === orderId ? null : orderId)
  }

  return (
    <section className="bg-black">
      <NewNav />

      <section className="paddings  w-full gap-5 bg-[#080808] max-sm:px-3 max-sm:py-10 md:flex lg:h-auto lg:py-32">
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
              <a href="/address" className="block px-4 py-2 hover:bg-[#FFFFFF1A]">
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
              className="mt-[0.5px] flex h-auto items-center gap-2 border-r border-black bg-[#FFFFFF0D]  px-4"
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
            <p className="text-center text-xl text-[#FFFFFFcc] max-sm:text-sm">Orders</p>
            <p className="pb-5 text-center text-sm text-[#FFFFFF80]">
              Check your order and verify your shipping for better experience
            </p>
            <div className="mb-5 border-b border-[#FFFFFF1A]"></div>

            {addressData ? (
              addressData.map((preorder, index) => (
                <div key={preorder.id} className="mb-5 flex h-full flex-col  rounded-lg  bg-[#FFFFFF1A]  p-2 xl:p-4">
                  <div className="flex h-full gap-2 max-sm:flex-col  xl:gap-5 ">
                    <div>
                      <motion.img
                        src="/renew.png"
                        className="w-[130px] max-sm:w-full"
                        alt=""
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeIn" }}
                      />
                    </div>
                    <div className="flex w-full flex-col gap-1 ">
                      <div className=" flex gap-2 max-sm:w-full max-sm:flex-col ">
                        <div className="flex w-full justify-between">
                          <p className="text-sm text-[#FFFFFF99] max-sm:text-xs">
                            {" "}
                            Order Date:{" "}
                            {new Date(preorder.pub_date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}{" "}
                            |{" "}
                            <span
                              className={`text-sm capitalize  max-sm:text-xs ${
                                preorder.status === "processing"
                                  ? "text-[#FFD700] "
                                  : preorder.status === "pending"
                                  ? "text-[#A68500]"
                                  : preorder.status === "Delivered"
                                  ? "text-[#00BB00]"
                                  : preorder.status === "cancelled"
                                  ? "text-[#FF3B30] "
                                  : "text-gray-500 "
                              }`}
                            >
                              {preorder.status}
                            </span>
                            {preorder.status === "processing order" && (
                              <span className="text-center text-sm  text-[#FFFFFF99]">
                                {" "}
                                | Estimated delivery: Sat, August 26
                              </span>
                            )}
                          </p>
                          <div className="relative">
                            <img
                              src="/mingcute_more-2-fill.png"
                              alt=""
                              className="w-[15px] cursor-pointer object-contain"
                              onClick={() => toggleDropdown(preorder.id)}
                            />
                            {activeDropdownId === preorder.id && (
                              <div className="absolute right-0 z-10 mt-2 w-48 overflow-hidden rounded-lg bg-[#262626] text-sm text-[#FFFFFF80]">
                                <button
                                  className="block w-full overflow-hidden px-4 py-2 text-left hover:bg-[#FFFFFF1A]"
                                  onClick={() => handleTrackOrder(preorder.id)}
                                >
                                  View Details
                                </button>
                                <button
                                  className="block w-full px-4 py-2 text-left hover:bg-[#FFFFFF1A]"
                                  onClick={() => handleOpenModal(preorder.id)}
                                >
                                  Cancel Order
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      {preorder.product_selection_altima_elite === true && (
                        <p className="flex  text-base  font-normal  text-[#FFFFFF]  max-sm:text-sm lg:text-lg">
                          Altima Elite
                        </p>
                      )}

                      {preorder.product_selection_altima_elite === false && (
                        <p className="flex  text-base  font-normal  text-[#FFFFFF]  max-sm:text-sm lg:text-lg">
                          Altima Core
                        </p>
                      )}

                      <div className="flex items-center gap-3">
                        <p className="text-[#FFFFFFcc] max-sm:text-sm">
                          Total:
                          <span className="font-semibold"> ₹ {preorder.total}</span>
                        </p>
                      </div>

                      <ul className="mt-22 list-inside">
                        <li className="pb-1 text-sm text-[#FFFFFF99] max-sm:text-xs">
                          Address : {preorder.shipping_address_street}, {preorder.shipping_address_city},{" "}
                          {preorder.shipping_address_state}, {preorder.shipping_address_country}
                        </li>
                      </ul>
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
              <button
                onClick={handleLogout}
                className="w-full  rounded-lg border border-[#FFFFFF99] bg-[#FF3B3B] px-4 py-2 text-[#000000]  hover:bg-[#FF3B3B]"
              >
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
              <button
                onClick={handleCancelOrder}
                className="w-full  rounded-lg border border-[#FFFFFF99] bg-[#FF3B3B] px-4 py-2 text-[#000000]  hover:bg-[#FF3B3B]"
              >
                {loading ? "Cancelling Order" : "Yes, Cancel"}
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
          <Image src="/AuthImages/Star2.svg" width={28.26} height={28.26} alt="" />
        </div>
      )}
      {error && (
        <div className="animation-fade-in fixed bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#D14343] bg-[#FEE5E5] text-[#D14343] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#D14343]">{error}</span>
          <Image src="/AuthImages/failed.png" width={28.26} height={28.26} alt="" />
        </div>
      )}
    </section>
  )
}
