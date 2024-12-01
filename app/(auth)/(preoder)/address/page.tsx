"use client"
import { Metadata } from "next"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import { HiChevronDown } from "react-icons/hi2"
import { getAddressInformation, UserInformationPayload } from "services/addressService"

interface User {
  id: string
  token: string
  // Add other fields as needed
}

export default function Web() {
  const [addressData, setAddressData] = useState<UserInformationPayload["address"][] | null>(null)

  const [isDefaultShipping, setIsDefaultShipping] = useState(true)
  const [isDefaultBilling, setIsDefaultBilling] = useState(true)

  const toggleShipping = () => setIsDefaultShipping(!isDefaultShipping)
  const toggleBilling = () => setIsDefaultBilling(!isDefaultBilling)

  const [isDefaultShippingTwo, setIsDefaultShippingTwo] = useState(true)
  const [isDefaultBillingTwo, setIsDefaultBillingTwo] = useState(true)

  const toggleShippingTwo = () => setIsDefaultShippingTwo(!isDefaultShippingTwo)
  const toggleBillingTwo = () => setIsDefaultBillingTwo(!isDefaultBillingTwo)

  const [quantity, setQuantity] = useState(1000)

  // Handlers for increment and decrement
  const handleIncrement = () => setQuantity(quantity + 1)
  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1) // Prevent negative quantity
  }

  const unitPrice = 500050 // price per unit
  const total = quantity * unitPrice
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)

  const opeDeletenModal = () => setIsDeleteModalOpen(true)
  const closeDeleteModal = () => setIsDeleteModalOpen(false)

  const opeCancelModal = () => setIsCancelModalOpen(true)
  const closeCancelModal = () => setIsCancelModalOpen(false)

  // Fetch the logged-in user's address
  useEffect(() => {
    const fetchAddresses = async () => {
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

        const userDetails = await getAddressInformation(userId)
        console.log("Fetched Address Details:", userDetails)

        if (Array.isArray(userDetails.addresss)) {
          setAddressData(userDetails.addresss)
        } else {
          console.error("Address data is not in the expected format.")
        }
      } catch (error) {
        console.error("Error fetching address information:", error)
      }
    }

    fetchAddresses()
  }, [])

  return (
    <section className="bg-black">
      <Navbar />

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 max-sm:py-20 lg:h-screen lg:py-32">
        <div className="relative mb-5 max-sm:block md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex w-[160px] items-center justify-between whitespace-nowrap border border-[#FFFFFF0D] p-2 text-sm text-[#FFFFFF80]"
          >
            Address
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
        <div className="flex w-full  flex-col  md:px-10">
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
              className="mt-[0.5px] flex h-auto items-center gap-2 border-r border-black bg-[#FFFFFF0D]  px-4 "
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
              className="mt-[0.5px] flex h-auto items-center gap-2 border-r border-black bg-[#FFFFFF1A]  px-4 "
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
          <div className="flex w-full flex-col items-center  justify-center  bg-[#151515] pt-3 max-sm:rounded-lg max-sm:p-2  md:p-10">
            <p className="font-regular gap-2     text-3xl uppercase text-[#FFFFFF] max-sm:py-2 ">My Address</p>
            <div className="my-3 w-full border-b border-[#FFFFFF1A]"></div>

            <div className=" flex h-full w-full  flex-col   rounded-lg   max-sm:grid max-sm:gap-5  md:gap-6">
              {addressData ? (
                addressData.map((address, index) => (
                  <div className="flex w-full flex-col bg-[#FFFFFF1A] ">
                    <ul className=" list-inside p-5">
                      <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                        <span className="text-[#FFFFFF80]">Name:</span> {address.full_name}
                      </li>
                      <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                        <span className="text-[#FFFFFF80]">Email:</span> {address.email_address}
                      </li>
                      <li className="pb-2 text-sm text-[#FFFFFF99] max-sm:text-xs">
                        <span className="text-[#FFFFFF80]">Address:</span>{" "}
                        {`${address.street}, ${address.city}, ${address.state}, ${address.country}`}
                      </li>
                    </ul>
                    <div className="flex flex-col gap-2 px-5 pb-3">
                      <div className="flex items-center gap-2" onClick={toggleShipping}>
                        <motion.img
                          src={isDefaultShipping ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                          width={18}
                          height={18}
                          alt=""
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 1, ease: "easeIn" }}
                        />
                        <p className="text-sm text-[#FFFFFF99] max-sm:text-xs">Set as default Shipping Address</p>
                      </div>
                      <div className="flex items-center gap-2" onClick={toggleBilling}>
                        <motion.img
                          src={isDefaultBilling ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                          width={18}
                          height={18}
                          alt=""
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 1, ease: "easeIn" }}
                        />
                        <p className="text-sm text-[#FFFFFF99] max-sm:text-xs">Set as default Billing Address</p>
                      </div>
                    </div>

                    <div className="flex border-b border-[#FFFFFF1A]"></div>
                    <div className="flex flex-col gap-2 px-5 py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-[#FFFFFF80]">Edit</p>
                          <motion.img
                            src="/PencilSimple.png"
                            width={18}
                            height={18}
                            alt=""
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeIn" }}
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-[#FFFFFF80]">Delete</p>
                          <motion.img
                            src="/TrashNew.png"
                            width={18}
                            height={18}
                            alt=""
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeIn" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-[#FFFFFF80]">Loading address information...</p>
              )}
            </div>

            <motion.a
              href="/address/add-address"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="font-regular mt-7 gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF80] px-4 py-2 text-xs uppercase text-[#FFFFFF] max-sm:py-2 "
            >
              Add New Address
            </motion.a>
          </div>
        </div>
      </section>

      <MainFooter />

      <Footer />
    </section>
  )
}
