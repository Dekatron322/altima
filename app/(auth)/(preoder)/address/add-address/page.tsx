"use client"
import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import { addAddressToUser, AddressPayload } from "services/addressService"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface User {
  id: string
  token: string
  // Add other fields as needed
}

export default function Web() {
  const [isDefaultShipping, setIsDefaultShipping] = useState(true)
  const [isDefaultBilling, setIsDefaultBilling] = useState(true)

  const toggleShipping = () => setIsDefaultShipping(!isDefaultShipping)
  const toggleBilling = () => setIsDefaultBilling(!isDefaultBilling)

  const [isDefaultShippingTwo, setIsDefaultShippingTwo] = useState(true)
  const [isDefaultBillingTwo, setIsDefaultBillingTwo] = useState(true)

  const toggleShippingTwo = () => setIsDefaultShippingTwo(!isDefaultShippingTwo)
  const toggleBillingTwo = () => setIsDefaultBillingTwo(!isDefaultBillingTwo)

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)

  const opeDeletenModal = () => setIsDeleteModalOpen(true)

  const router = useRouter() // Initialize the router

  const [formData, setFormData] = useState<AddressPayload>({
    full_name: "",
    email_address: "",
    contact_number: "",
    street: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    shipping_street: "",
    shipping_city: "",
    shipping_state: "",
    shipping_postal: "",
    shipping_country: "",
    status: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [userId, setUserId] = useState<string>("")

  // Retrieve user ID (e.g., from localStorage)
  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id")
    if (storedUserId) {
      setUserId(storedUserId)
    } else {
      setMessage("User ID not found. Please log in.")
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Retrieve the user from localStorage
    const user = localStorage.getItem("user")
    const parsedUser: User | null = user ? (JSON.parse(user) as User) : null

    const userId = parsedUser?.id

    if (!userId) {
      setMessage("Unable to add address. User ID is missing.")
      return
    }

    // Synchronize billing address with shipping address if necessary
    if (!isDefaultBillingTwo) {
      setFormData((prevData) => ({
        ...prevData,
        street: prevData.shipping_street,
        city: prevData.shipping_city,
        state: prevData.shipping_state,
        zip_code: prevData.shipping_postal,
        country: prevData.shipping_country,
      }))
    }

    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await addAddressToUser(userId, formData)
      setMessage("Address added successfully!")
      router.push("/address")
    } catch (error) {
      console.error(error)
      setMessage("Failed to add address. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-black">
      <Navbar />

      <section
        id="other-products"
        className="paddings  w-full bg-[#080808] max-sm:px-3 max-sm:py-20 lg:h-auto lg:py-32"
      >
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
        <div className="flex  w-full  items-center justify-between ">
          <div className="flex w-full flex-col   justify-center bg-[#151515] max-sm:rounded-lg max-sm:p-2  md:p-10">
            <p className="text-center text-xl text-[#FFFFFF]">Add New Address</p>
            <div className="my-3 border-b border-[#FFFFFF1A]"></div>
            <form onSubmit={handleSubmit}>
              <div className="mt-4 flex h-full w-full  flex-col   rounded-lg xl:px-10 ">
                <div className="flex w-full  flex-col justify-between  md:gap-5">
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="full_name"
                        placeholder="Full Name"
                        value={formData.full_name}
                        onChange={handleChange}
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="contact_number"
                        placeholder="Contact Number"
                        value={formData.contact_number}
                        onChange={handleChange}
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="email"
                        name="email_address"
                        placeholder="Email Address"
                        value={formData.email_address}
                        onChange={handleChange}
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                </div>
                <p className="my-5 text-[#FFFFFF99]">
                  Billing Address <span className="text-[#FF3B30]">*</span>
                </p>
                <div className="flex w-full  flex-col justify-between  md:gap-5">
                  <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="street"
                        placeholder="Street/Apartment/Office Name"
                        value={formData.street}
                        onChange={handleChange}
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>

                  <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="state"
                        placeholder="State/Province:"
                        value={formData.state}
                        onChange={handleChange}
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="zip_code"
                        placeholder="Postal/ZIP Code:"
                        value={formData.zip_code}
                        onChange={handleChange}
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="country"
                        placeholder="Country:"
                        value={formData.country}
                        onChange={handleChange}
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-3 flex w-full items-center gap-2 self-center xl:px-10" onClick={toggleBillingTwo}>
                <motion.img
                  src={isDefaultBillingTwo ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                  width={18}
                  height={18}
                  alt=""
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeIn" }}
                />
                <p className="text-sm text-[#FFFFFF99] max-sm:text-xs">Billing Address Same as Shipping Address</p>
              </div>

              <p className="my-5 text-[#FFFFFF99] xl:px-10">
                Shipping Address <span className="text-[#FF3B30]">*</span>
              </p>
              <div className="flex w-full  flex-col justify-between  md:gap-5 xl:px-10">
                <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      name="shipping_street"
                      placeholder="Street/Apartment/Office Name"
                      value={formData.shipping_street}
                      onChange={handleChange}
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      name="shipping_city"
                      placeholder="City:"
                      value={formData.shipping_city}
                      onChange={handleChange}
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>

                <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      name="shipping_state"
                      placeholder="State/Province:"
                      value={formData.shipping_state}
                      onChange={handleChange}
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      name="shipping_postal"
                      placeholder="Postal/ZIP Code:"
                      value={formData.shipping_postal}
                      onChange={handleChange}
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2">
                  <div className="flex h-[46px] items-center">
                    <input
                      type="text"
                      name="shipping_country"
                      placeholder="Country:"
                      value={formData.shipping_country}
                      onChange={handleChange}
                      className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col  items-center justify-center rounded-3xl bg-[#151515] max-sm:rounded-lg max-sm:p-2  md:pt-10">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular mb-3  gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF80] px-20 py-2 text-xs uppercase text-[#FFFFFF] max-sm:py-2 "
                >
                  {isSubmitting ? "Submitting..." : "Add Address"}
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        {message && (
          <div className="animation-fade-in absolute bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#000000] bg-[#92E3A9] text-[#000000] shadow-[#05420514] md:right-16">
            <span className="clash-font text-sm text-[#000000]">{message}</span>
            <Image src="/AuthImages/Star2.svg" width={28.26} height={28.26} alt="dekalo" />
          </div>
        )}
      </section>

      <MainFooter />

      <Footer />
    </section>
  )
}
