"use client"
import { Metadata } from "next"
import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import { HiChevronDown } from "react-icons/hi2"
import { deleteAddress, getAddressInformation, UserInformationPayload } from "services/addressService"
import { LiaTimesSolid } from "react-icons/lia"
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
  const [addressData, setAddressData] = useState<UserInformationPayload["address"][] | null>(null)

  const [isDefaultShipping, setIsDefaultShipping] = useState(true)
  const [isDefaultBilling, setIsDefaultBilling] = useState(true)

  const toggleShipping = () => setIsDefaultShipping(!isDefaultShipping)
  const toggleBilling = () => setIsDefaultBilling(!isDefaultBilling)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null)

  const [addressToDelete, setAddressToDelete] = useState<string | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  const opeDeletenModal = (addressId: string) => {
    setAddressToDelete(addressId)
    setIsDeleteModalOpen(true)
  }
  const closeDeleteModal = () => {
    setAddressToDelete(null)
    setIsDeleteModalOpen(false)
  }

  const confirmDeleteAddress = async () => {
    if (!addressToDelete) return
    try {
      await handleDeleteAddress(addressToDelete)
      closeDeleteModal()
    } catch (error) {
      console.error("Failed to delete address:", error)
    }
  }

  const [selectedRadio, setSelectedRadio] = useState("")

  const toggleRadio = (id: string) => {
    setSelectedRadio(id)
  }

  const openLogoutModal = () => setIsLogoutModalOpen(true)
  const closeLogoutModal = () => setIsLogoutModalOpen(false)

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

  const fetchUserDetails = async () => {
    try {
      // Retrieve user data from localStorage
      const userData = localStorage.getItem("user")
      if (!userData) {
        throw new Error("User is not logged in.")
      }

      const parsedData = JSON.parse(userData) as { id: string }
      const { id } = parsedData

      const response = await fetch(`https://altima.fyber.site/custom-user/get-user-detail/${id}/`, {
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
      const response = await fetch("https://altima.fyber.site/custom-user/sign-out/", {
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

  const handleDeleteAddress = async (addressId: string) => {
    try {
      const result = await deleteAddress(addressId)
      console.log("Address deleted successfully:", result)

      setAddressData((prevAddresses) => prevAddresses?.filter((address) => address.id !== addressId) || null)
    } catch (error) {
      console.error("Failed to delete address:", error)
    }
  }

  const handleEditClick = (addressId: string) => {
    console.log("Navigating to edit address ID:", addressId)
    localStorage.setItem("selectedAddress", addressId)
    router.push(`/address/edit-address/`)
  }

  return (
    <section className="bg-black">
      <NewNav />

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 max-sm:py-20 lg:min-h-screen lg:py-32">
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
              <p onClick={openLogoutModal} className="block cursor-pointer px-4 py-2 hover:bg-[#FFFFFF1A]">
                Log out
              </p>
            </div>
          )}
        </div>
        <div className="flex w-full  flex-col  md:px-10">
          <div className="flex max-md:hidden">
            <a
              href="/profile"
              className="mt-[0.5px] flex h-auto cursor-pointer items-center gap-2 border-r border-black bg-[#FFFFFF0D]  px-4 "
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
              className="mt-[0.5px] flex h-auto cursor-pointer items-center gap-2 border-r border-black bg-[#FFFFFF1A]  px-4 "
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
              onClick={openLogoutModal}
              className="mt-[0.5px] flex h-auto cursor-pointer items-center gap-2 border-r border-black bg-[#FFFFFF0D]  px-4 "
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
                  <div key={address.id} className="flex w-full flex-col bg-[#FFFFFF1A] ">
                    <div className="flex w-full items-center gap-2 p-5" onClick={() => toggleRadio(address.id)}>
                      <motion.img
                        src={selectedRadio === address.id ? "/fluent_radio-button-24-filled.png" : "/radio.png"}
                        width={18}
                        height={18}
                        alt={`Address ${address.id}`}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeIn" }}
                      />
                      <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Set as default</p>
                    </div>
                    <ul className=" list-inside px-5">
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
                        <div className="flex items-center gap-2" onClick={() => handleEditClick(address.id)}>
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
                        <div
                          className="flex cursor-pointer items-center gap-2"
                          onClick={() => opeDeletenModal(address.id)}
                        >
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

      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000] bg-opacity-95">
          <div className="w-full max-w-sm rounded-lg bg-[#151515] p-4 text-white">
            <div className="mb-4 flex w-full items-center">
              <h2 className=" w-full text-center text-[#FFFFFF99]">Delete Address</h2>
              <LiaTimesSolid onClick={closeDeleteModal} className="cursor-pointer" />
            </div>
            <p className="w-full text-center text-2xl text-white">Are you sure you want to delete address?</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={confirmDeleteAddress}
                className="w-full  rounded-lg border border-[#FFFFFF99] bg-[#FF3B3B] px-4 py-2 text-[#000000]  hover:bg-[#FF3B3B]"
              >
                Yes, Delete
              </button>
              <button className="w-full rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-2 text-[#ffffff]  hover:bg-[#FF3B3B]">
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000] bg-opacity-95">
          <div className="w-full max-w-sm rounded-lg bg-[#151515] p-4 text-white">
            <div className="mb-4 flex w-full items-center">
              <h2 className=" w-full text-center text-[#FFFFFF99]">Log Out</h2>
              <LiaTimesSolid onClick={closeLogoutModal} className="cursor-pointer" />
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
                onClick={closeLogoutModal}
                className="w-full rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-2 text-[#ffffff]  hover:bg-[#FF3B3B]"
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      <MainFooter />

      <Footer />
    </section>
  )
}
