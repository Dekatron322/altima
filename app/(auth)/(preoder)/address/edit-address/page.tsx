"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AddressPayload, editAddress, getAddress, getAddressInformation } from "services/addressService" // Ensure you have a function to fetch address details
import Navbar from "components/Navbar/Navbar"
import MainFooter from "components/Footer/MainFooter"
import Footer from "components/Footer/Footer"
import { motion } from "framer-motion"
import Image from "next/image"
import NewNav from "components/Navbar/NewNav"

const EditAddress = () => {
  const [addressId, setAddressId] = useState<string | null>(null)
  const router = useRouter()

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
    status: true,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const opeDeletenModal = () => setIsDeleteModalOpen(true)
  const [isDefaultBillingTwo, setIsDefaultBillingTwo] = useState(true)
  const toggleBillingTwo = () => setIsDefaultBillingTwo(!isDefaultBillingTwo)

  // Fetch the selected address ID and details on mount
  useEffect(() => {
    const selectedAddress = localStorage.getItem("selectedAddress")
    if (selectedAddress) {
      setAddressId(selectedAddress)
      fetchAddressData(selectedAddress)
    } else {
      setMessage("No address selected")
      console.error("No address selected")
      router.push("/address")
    }
  }, [router])

  // Fetch existing address details
  const fetchAddressData = async (id: string) => {
    try {
      setLoading(true)
      const data = await getAddress(id) // Replace with actual API call
      setFormData(data) // Assuming `data` is in the same shape as `AddressPayload`
    } catch (err) {
      console.error("Failed to fetch address details", err)
      setError("Unable to load address details. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!addressId) return
    try {
      setLoading(true)
      await editAddress(addressId, formData)
      setMessage("Address updated successfully!")
      router.push("/address") // Redirect after successful update
    } catch (err) {
      setError("Failed to update address. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-black">
      <NewNav />

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 max-sm:py-20 lg:h-auto lg:py-32">
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
            <p className="text-center text-xl text-[#FFFFFF]">Update Address</p>
            <div className="my-3 border-b border-[#FFFFFF1A]"></div>
            {addressId ? (
              <form onSubmit={handleSubmit}>
                <div className="mt-4 flex h-full w-full  flex-col   rounded-lg xl:px-10 ">
                  <div className="flex w-full  flex-col justify-between  md:gap-5">
                    <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                      <div className="flex h-[46px] items-center">
                        <input
                          type="text"
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleInputChange}
                          className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                      <div className="flex h-[46px] items-center">
                        <input
                          type="email"
                          name="email_address"
                          value={formData.email_address}
                          onChange={handleInputChange}
                          className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                      <div className="flex h-[46px] items-center">
                        <input
                          type="text"
                          name="contact_number"
                          value={formData.contact_number}
                          onChange={handleInputChange}
                          className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="my-5 text-[#FFFFFF99]">
                    Billing Address <span className="text-[#FF3B30]">*</span>
                  </p>
                  <div className="flex w-full  flex-col justify-between  md:gap-5">
                    <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                      <div className="flex h-[46px] items-center">
                        <input
                          type="text"
                          name="street"
                          placeholder="Street/Apartment/Office Name"
                          value={formData.street}
                          onChange={handleInputChange}
                          className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                          style={{ width: "100%", height: "24px" }}
                        />
                      </div>
                    </div>
                    <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                      <div className="flex h-[46px] items-center">
                        <input
                          type="text"
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                          style={{ width: "100%", height: "24px" }}
                        />
                      </div>
                    </div>

                    <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                      <div className="flex h-[46px] items-center">
                        <input
                          type="text"
                          name="state"
                          placeholder="State/Province:"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                          style={{ width: "100%", height: "24px" }}
                        />
                      </div>
                    </div>
                    <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                      <div className="flex h-[46px] items-center">
                        <input
                          type="text"
                          name="zip_code"
                          placeholder="Postal/ZIP Code:"
                          value={formData.zip_code}
                          onChange={handleInputChange}
                          className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                          style={{ width: "100%", height: "24px" }}
                        />
                      </div>
                    </div>
                    <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                      <div className="flex h-[46px] items-center">
                        <input
                          type="text"
                          name="country"
                          placeholder="Country:"
                          value={formData.country}
                          onChange={handleInputChange}
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
                  <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="shipping_street"
                        placeholder="Street/Apartment/Office Name"
                        value={formData.shipping_street}
                        onChange={handleInputChange}
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="shipping_city"
                        placeholder="City:"
                        value={formData.shipping_city}
                        onChange={handleInputChange}
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>

                  <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="shipping_state"
                        placeholder="State/Province:"
                        value={formData.shipping_state}
                        onChange={handleInputChange}
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="shipping_postal"
                        placeholder="Postal/ZIP Code:"
                        value={formData.shipping_postal}
                        onChange={handleInputChange}
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[46px] w-full   items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="shipping_country"
                        placeholder="Country:"
                        value={formData.shipping_country}
                        onChange={handleInputChange}
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
                    className="mb-3 gap-2  rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF80] px-20 py-2 text-xs font-normal uppercase text-[#FFFFFF] max-sm:py-2 "
                  >
                    {loading ? "Updating..." : "Update Address"}
                  </motion.button>
                </div>
              </form>
            ) : (
              <p>Loading...</p>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
        {message && (
          <div className="animation-fade-in absolute bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#000000] bg-[#92E3A9] text-[#000000] shadow-[#05420514] md:right-16">
            <span className="clash-font text-sm text-[#000000]">{message}</span>
            <Image src="/AuthImages/Star2.svg" width={28.26} height={28.26} alt="" />
          </div>
        )}
      </section>
      <MainFooter />

      <Footer />
    </section>
  )
}

export default EditAddress
