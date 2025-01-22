"use client"
import Footer from "components/Footer/Footer"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import Image from "next/image"
import { addOrderToUser, OrderPayload } from "services/orderService"
import { useRouter } from "next/navigation"
import Dropdown from "components/CustomDropdown"
import NewNav from "components/Navbar/NewNav"
import { toWords } from "number-to-words"
import PreorderAgreement from "components/PreorderAgreement"

interface User {
  id: string
  token: string
}

export default function Web() {
  const [isDefaultBillingTwo, setIsDefaultBillingTwo] = useState(false)
  const [isEnforcedLock, setIsEnforcedLock] = useState(true)
  const [isSmartKeypadAccess, setIsSmartKeypadAccess] = useState(false)
  const [isSmartLightingIntegration, setIsSmartLightingIntegration] = useState(false)
  const [isHomeAutomation, setIsHomeAutomation] = useState(false)
  const [isAdvanceMotionDetection, setIsAdvanceMotionDetection] = useState(false)
  const [isBatteryBackUp, setIsBatteryBackUp] = useState(false)
  const [isFireDetection, setIsFireDetection] = useState(false)
  const [isRemoteLockUnlock, setIsRemoteLockUnlock] = useState(false)
  const [isIntercom, setIsIntercom] = useState(true)
  const [isAntiTheft, setIsAntiTheft] = useState(true)
  const [isAlarm, setIsAlarm] = useState(false)
  const [isMotionSensor, setIsMotionSensor] = useState(true)
  const [isVideoDoorBell, setIsVideoDoorBell] = useState(true)
  const [isCamera, setIsCamera] = useState(true)
  const [isVoiceAssistant, setIsVoiceAssistant] = useState(false)
  const [isDefaultEmail, setIsDefaultEmail] = useState(false)
  const [isDefaultPhone, setIsDefaultPhone] = useState(false)
  const [isDefaultWhatsapp, setIsDefaultWhatsapp] = useState(false)
  const [selectedRadio, setSelectedRadio] = useState("Altima Core")
  const [selectedAddress, setSelectedAddress] = useState("Use New Address")
  const [isDefaultSupport, setIsDefaultSupport] = useState(false)
  const [isExtendedWarranty, setIsExtendedWarranty] = useState(false)
  const [isPayment, setIsPayment] = useState(false)
  const [selectedDoorSpec, setSelectedDoorSpec] = useState("Standard Size")
  const [quantity, setQuantity] = useState<number>(1)
  const [isDefaultShipping, setIsDefaultShipping] = useState(true)
  const [subtotal, setSubtotal] = useState(0)
  const [adjustedUnitPrice, setAdjustedUnitPrice] = useState(0)
  const [isAgreement, setIsAgreement] = useState(false)

  // Define unit prices for each option
  const unitPrices: { [key: string]: number } = {
    "Altima Core": 49500,
    "Altima Elite": 90000,
  }

  const toggleAddress = (option: string) => {
    setSelectedAddress(option)
  }

  const toggleDoorSpec = (option: string) => {
    setSelectedDoorSpec(option)
  }

  const toggleShipping = () => {
    setIsDefaultShipping(!isDefaultShipping)

    if (!isDefaultShipping) {
      setFormData((prev) => ({
        ...prev,
        shipping_address_street: prev.billing_address_street,
        shipping_address_city: prev.billing_address_city,
        shipping_address_state: prev.billing_address_state,
        shipping_address_postal_code: prev.billing_address_postal_code,
        shipping_address_country: prev.billing_address_country,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        shipping_address_street: "",
        shipping_address_city: "",
        shipping_address_state: "",
        shipping_address_postal_code: "",
        shipping_address_country: "",
      }))
    }
  }

  const grossPrice = quantity * (unitPrices[selectedRadio] ?? 0)
  const toggleBillingTwo = () => {
    setIsDefaultBillingTwo(!isDefaultBillingTwo)

    if (!isDefaultBillingTwo) {
      setFormData((prev) => ({
        ...prev,
        billing_address_street: prev.shipping_address_street,
        billing_address_city: prev.shipping_address_city,
        billing_address_state: prev.shipping_address_state,
        billing_address_postal_code: prev.shipping_address_postal_code,
        billing_address_country: prev.shipping_address_country,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        billing_address_street: "",
        billing_address_city: "",
        billing_address_state: "",
        billing_address_postal_code: "",
        billing_address_country: "",
      }))
    }
  }

  const toggleEmail = () => {
    setIsDefaultEmail((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: newValue, // Update formData with the new value
      }))
      return newValue
    })
  }

  const toggleWarranty = () => {
    setIsExtendedWarranty((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        extended_warranty: newValue, // Update formData with the new value
      }))
      return newValue
    })
  }

  const toggleSupport = () => {
    setIsDefaultSupport((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        installation_support: newValue, // Update formData with the new value
      }))
      return newValue
    })
  }

  const togglePhone = () => {
    setIsDefaultPhone((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        phone: newValue, // Update formData with the new value
      }))
      return newValue
    })
  }

  const togglePayment = () => {
    setIsPayment((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        payment_confirmation: newValue, // Update formData with the new value
      }))
      return newValue
    })
  }

  const toggleWhatsapp = () => {
    setIsDefaultWhatsapp((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        whatsapp: newValue, // Update formData with the new value
      }))
      return newValue
    })
  }

  const toggleEnforced = () => {
    setIsEnforcedLock((prev) => {
      const newValue = !prev
      console.log("isEnforcedLock:", newValue)
      setFormData((prevFormData) => ({
        ...prevFormData,
        re_enforced_lock: newValue,
      }))
      console.log("formData.re_enforced_lock:", newValue)
      return newValue
    })
  }

  const toggleSmartKeypadAccess = () => {
    setIsSmartKeypadAccess((prev) => {
      const newValue = !prev
      console.log("isSmartKeypadAccess", newValue)
      setFormData((prevFormData) => ({
        ...prevFormData,
        smart_keypad_access: newValue,
      }))
      console.log("formData.smart_keypad_access:", newValue)
      return newValue
    })
  }

  const toggleSmartLightingIntegration = () => {
    setIsSmartLightingIntegration((prev) => {
      const newValue = !prev
      console.log("isSmartLightingIntegration", newValue)
      setFormData((prevFormData) => ({
        ...prevFormData,
        smart_lighting_integration: newValue,
      }))
      console.log("formData.smart_lighting_integration:", newValue)
      return newValue
    })
  }

  const toggleHomeAutomation = () => {
    setIsHomeAutomation((prev) => {
      const newValue = !prev
      console.log("isHomeAutomation", newValue)
      setFormData((prevFormData) => ({
        ...prevFormData,
        home_automation_integration: newValue,
      }))
      console.log("formData.home_automation_integration:", newValue)
      return newValue
    })
  }

  const toggleAdvanceMotionDetection = () => {
    setIsAdvanceMotionDetection((prev) => {
      const newValue = !prev
      console.log("isAdvanceMotionDetection", newValue)
      setFormData((prevFormData) => ({
        ...prevFormData,
        advance_motion_detection: newValue,
      }))
      console.log("formData.advance_motion_detection:", newValue)
      return newValue
    })
  }

  const toggleFireDetection = () => {
    setIsFireDetection((prev) => {
      const newValue = !prev
      console.log("isFireDetection", newValue)
      setFormData((prevFormData) => ({
        ...prevFormData,
        fire_detection: newValue,
      }))
      console.log("formData.fire_detection:", newValue)
      return newValue
    })
  }

  const toggleBatteryBackUp = () => {
    setIsBatteryBackUp((prev) => {
      const newValue = !prev
      console.log("isBatteryBackUp", newValue)
      setFormData((prevFormData) => ({
        ...prevFormData,
        battery_backup: newValue,
      }))
      console.log("formData.battery_backup:", newValue)
      return newValue
    })
  }

  const toggleAntiTheft = () => {
    setIsAntiTheft((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        anti_theft: newValue, // Update formData with the new value
      }))
      return newValue
    })
  }
  const toggleLock = () => {
    setIsRemoteLockUnlock((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        remote_lock_unlock: newValue, // Update formData with the new value
      }))
      return newValue
    })
  }

  const toggleMotionSensor = () => {
    setIsMotionSensor((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        motion_sensor: newValue,
      }))
      return newValue
    })
  }

  const toggleVideoDoorBell = () => {
    setIsVideoDoorBell((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        video_door_bell: newValue,
      }))
      return newValue
    })
  }

  const toggleIntercom = () => {
    setIsIntercom((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        intercom_sys: newValue,
      }))
      return newValue
    })
  }

  const toggleCamera = () => {
    setIsCamera((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        camera: newValue,
      }))
      return newValue
    })
  }

  const toggleVoiceAssistant = () => {
    setIsVoiceAssistant((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        voice_assisted: newValue,
      }))
      return newValue
    })
  }

  const unitPrice = unitPrices[selectedRadio] ?? 0

  const router = useRouter() // Initialize the router

  const [formData, setFormData] = useState<OrderPayload>({
    full_name: "",
    contact_number: "",
    billing_address_same_shipping_address: false,
    billing_address_street: "",
    billing_address_city: "",
    billing_address_state: "",
    billing_address_postal_code: "",
    billing_address_country: "",

    shipping_address_street: "",
    shipping_address_city: "",
    shipping_address_state: "",
    shipping_address_postal_code: "",
    shipping_address_country: "",
    email: false,
    phone: false,
    whatsapp: false,
    product_selection_altima_core: true,
    product_selection_altima_elite: false,
    quantity: quantity.toString(),
    door_spec_default_size: "",
    door_spec_manual_size: false,
    door_spec_manual_size_width: "",
    door_spec_manual_size_height: "",
    // door_spec_manual_size_unit: "",
    door_spec_frame_type: "",
    door_spec_material_type: "",

    door_spec_finish_type: "",
    handle_placement: "",
    re_enforced_lock: true,
    anti_theft: true,

    smart_keypad_access: false,
    battery_backup: false,
    fire_detection: false,
    remote_lock_unlock: false,
    smart_lighting_integration: false,
    home_automation_integration: false,
    advance_motion_detection: false,

    alarm: false,
    motion_sensor: true,
    video_door_bell: true,
    intercom_sys: true,
    camera: true,
    voice_assisted: false,
    connectivity: "",
    power_source: "",
    type_installation: "",
    prefered_installation: "",
    special_installation_instruction: "",
    extended_warranty: false,
    installation_support: false,
    payment_confirmation: false,
    total: "",
    status: "pending",
    email_address: "",
    deposit_amount: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [userId, setUserId] = useState<string>("")
  const depositAmountInWords = `${toWords(Number(formData.deposit_amount))} Rupees Only/-`

  const frameTypeOptions = ["Slim", "Standard", "Reinforced"]
  const standardSizeOptions = ["80 x 36", "84 x 36", "80 x 42", "96 x 36", "96 x 42"]
  const MaterialOptions = ["Wood", "Glass", "Metal"]
  const connectivityOptions = ["Wi-Fi", "Bluetooth", "Zigbee"]
  const powerOptions = ["AC Connection", "Battery Backup", "Solar Ready"]
  const installationOptions = ["Residential", "Commercial", "Other"]
  const unitOptions = ["Centimeters", "Inches"]
  const materialToFinishMap: Record<string, string[]> = {
    Wood: ["Teak", "Rosewood", "Walnut"],
    Glass: ["Frosted", "Tinted", "Etched"],
    Metal: ["Wood Grain", "Brushed Steel", "Textured Sand"],
  }
  const handlePlacementOptions = ["Right-Hinged", "Left-Hinged"]

  const handleFrameTypeSelect = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      door_spec_frame_type: option,
    }))
    setOpenDropdown(null)
  }

  const handleStandardSizeSelect = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      door_spec_default_size: option,
    }))
    setOpenDropdown(null)
  }

  const handleMaterialSelect = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      door_spec_material_type: option,
      door_spec_finish_type: "", // Reset finish when material changes
    }))
    setOpenDropdown(null)
  }

  const handleConnectivitySelect = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      connectivity: option,
    }))
    setOpenDropdown(null)
  }

  const handleFinishSelect = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      door_spec_finish_type: option,
    }))
    setOpenDropdown(null)
  }

  const handleUnitSelect = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      door_spec_manual_size_unit: option,
    }))
    setOpenDropdown(null)
  }

  const handlePlacementSelect = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      handle_placement: option,
    }))
    setOpenDropdown(null)
  }

  const handlePowerSelect = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      power_source: option,
    }))
    setOpenDropdown(null)
  }

  const handleInstallationSelect = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      type_installation: option,
    }))
    setOpenDropdown(null)
  }

  useEffect(() => {
    const baseUnitPrice = unitPrices[selectedRadio] ?? 0

    // Frame adjustment
    const frameMultiplier = formData.door_spec_frame_type === "Reinforced" ? 1.2 : 1.0

    // Material adjustment
    let materialMultiplier = 1.0
    if (formData.door_spec_material_type === "Wood") {
      materialMultiplier = 1.25 // 25% increase
    } else if (formData.door_spec_material_type === "Glass") {
      materialMultiplier = 1.4 // 40% increase
    }

    // Size adjustment (for standard sizes)
    let sizeMultiplier = 1.0
    switch (formData.door_spec_default_size) {
      case "84 x 36":
        sizeMultiplier = 1.0507 // 5.07% increase
        break
      case "80 x 42":
        sizeMultiplier = 1.1667 // 16.67% increase
        break
      case "96 x 36":
      case "96 x 42":
        sizeMultiplier = 1.4 // 40% increase
        break
      default:
        sizeMultiplier = 1.0 // No adjustment
    }

    // Manual size adjustment
    let areaMultiplier = 1.0
    if (formData.door_spec_default_size === "Input Dimension") {
      const width = parseFloat(formData.door_spec_manual_size_width ?? "") || 0
      const height = parseFloat(formData.door_spec_manual_size_height ?? "") || 0
      const newArea = width * height
      const baseArea = 2880 // Base area
      if (newArea > 0) {
        areaMultiplier = newArea / baseArea
      }
    }

    // Warranty charge
    const warrantyCharge =
      isExtendedWarranty && selectedRadio === "Altima Core"
        ? 5000
        : isExtendedWarranty && selectedRadio === "Altima Elite"
        ? 8000
        : 0

    // Smart Keypad Access charge
    const smartKeypadAccessCharge = isSmartKeypadAccess ? 3000 : 0
    const batteryBackup = isBatteryBackUp ? 2500 : 0
    const fireDetection = isFireDetection ? 5000 : 0
    const remoteLock = isRemoteLockUnlock ? 3500 : 0
    const smartLightingIntegration = isSmartLightingIntegration ? 2000 : 0
    const homeAutomation = isHomeAutomation ? 3500 : 0
    const motionDetection = isAdvanceMotionDetection ? 4000 : 0
    const voiceAssistant = isVoiceAssistant ? 2000 : 0

    // Calculate adjusted unit price
    const newAdjustedUnitPrice = baseUnitPrice * frameMultiplier * materialMultiplier * sizeMultiplier * areaMultiplier

    setAdjustedUnitPrice(newAdjustedUnitPrice)

    // Subtotal and total calculations
    const additionalCharges =
      17820 +
      warrantyCharge +
      smartKeypadAccessCharge +
      batteryBackup +
      fireDetection +
      remoteLock +
      smartLightingIntegration +
      homeAutomation +
      motionDetection +
      voiceAssistant
    const calculatedSubtotal = newAdjustedUnitPrice + additionalCharges
    setSubtotal(calculatedSubtotal)

    const total = quantity * calculatedSubtotal
    const depositAmount = total * 0.3

    setFormData((prevFormData) => ({
      ...prevFormData,
      quantity: quantity.toString(),
      total: total.toString(),
      deposit_amount: depositAmount.toString(),
    }))
  }, [
    quantity,
    selectedRadio,
    formData.door_spec_frame_type,
    formData.door_spec_material_type,
    formData.door_spec_default_size,
    formData.door_spec_manual_size_width,
    formData.door_spec_manual_size_height,
    isExtendedWarranty,
    isSmartKeypadAccess,
    isBatteryBackUp,
    isFireDetection,
    isRemoteLockUnlock,
    isSmartLightingIntegration,
    isHomeAutomation,
    isAdvanceMotionDetection,
    isVoiceAssistant,
  ])

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 0)) // Ensure quantity doesn't go below 0
  }

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => {
      // Handle numeric fields
      if (name === "quantity") {
        const numericValue = parseInt(value, 10)
        if (!isNaN(numericValue) && numericValue > 0) {
          setQuantity(numericValue) // Update quantity state
          return {
            ...prev,
            [name]: numericValue.toString(), // Update numeric field in formData
          }
        }
      } else {
        // Handle text fields
        return {
          ...prev,
          [name]: value, // Update text field in formData
        }
      }

      return prev // Return previous state if no updates are made
    })
  }

  const toggleRadio = (option: string) => setSelectedRadio(option)

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id")
    if (storedUserId) {
      setUserId(storedUserId)
    } else {
      console.log("User ID not found. Please log in.")
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const user = localStorage.getItem("user")
    const parsedUser: User | null = user ? (JSON.parse(user) as User) : null

    const userId = parsedUser?.id

    if (!userId) {
      setMessage("Unable to add address. User ID is missing.")
      return
    }

    if (!formData.full_name || !formData.contact_number) {
      setMessage("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)
    setMessage("")

    // Log order details including the userId and formData
    console.log("Order Information:", {
      userId,
      ...formData,
    })

    try {
      const response = await addOrderToUser(userId, formData)

      // Log the full response for debugging
      console.log("API Response:", response)

      // Ensure response has the expected structure
      const orderId = response?.id // Adjust path if structure is different

      if (orderId) {
        console.log("Order ID:", orderId)

        // Save API Response to local storage
        localStorage.setItem("order_response", JSON.stringify(response))

        // Save form data as order summary
        localStorage.setItem("order_summary", JSON.stringify(formData))

        setMessage("Order placed successfully!")

        // Navigate to the summary page
        router.push("/summary")
      } else {
        console.log("No order ID returned in the response.")
        setMessage("Failed to retrieve order ID. Please try again.")
      }
    } catch (error: any) {
      console.error("Error:", error)

      setMessage(error.response?.data?.message || "Failed to place order. Please check your input and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown))
  }

  const toggleAggrement = () => {
    setIsAgreement((prev) => {
      const newValue = !prev
      console.log("isHomeAutomation", newValue)

      console.log("formData.home_automation_integration:", newValue)
      return newValue
    })
  }

  return (
    <section className="bg-[#151515]">
      <NewNav />

      <section className="paddings  w-full  max-sm:px-3 max-sm:py-10 lg:h-auto lg:py-32">
        <div className=" w-auto  items-center justify-between  md:px-10">
          <div className="ms:p-10 flex w-full flex-col  items-center justify-center  rounded-3xl max-sm:rounded-lg  max-sm:p-2">
            <p className="text-center text-xl text-[#FFFFFF]">Pre-Order form</p>
            <p className="py-5 text-center text-xs text-[#FFFFFF80]">
              ✓Estimated delivery date: 4-5 months after the preorder window closes
            </p>
            <p className="pb-5 text-center text-xs text-[#FFFFFF80] 2xl:w-[580px]">
              ✓A note: Preorders require a 30% deposit at the time of booking. The remaining balance is due before
              shipment, with a final payment notice sent prior to delivery. Adjustments apply only in case of changes to
              the final invoice due to shipping or product modifications.
            </p>

            <p className="pb-5 text-[#FFFFFF80]">
              Altima is built to outperform!{" "}
              <a
                href="/comparison"
                className="font-bold text-white underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                Compare Now
              </a>{" "}
              and see why it&apos;s the future of smart doors.
            </p>

            <p className="pb-5 text-[#FFFFFF80]">
              Experience Altima Core and Elite in action—
              <a
                href="/product-details"
                className="font-bold text-white underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                {" "}
                see their features come to life!
              </a>
            </p>

            <div className="flex h-full w-full flex-col  rounded-lg border border-[#FFFFFF0D]    max-sm:grid max-sm:gap-5  md:gap-5">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-5 px-5 pt-5">
                  <p className="py-2 text-xl font-medium text-white">
                    User Information/Address <span className="text-[#FF3B30]">*</span>
                  </p>
                  <div className=" flex w-full items-center gap-2 " onClick={() => toggleAddress("Use New Address")}>
                    <motion.img
                      src={selectedAddress === "Use New Address" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Use new Address</p>
                  </div>

                  <div
                    className=" flex w-full items-center gap-2 "
                    onClick={() => toggleAddress("Use Default Address")}
                  >
                    <motion.img
                      src={selectedAddress === "Use Default Address" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Use Default Address</p>
                  </div>
                </div>
                <div className="my-5 flex w-full border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 px-5 ">
                  <p className=" text-xl font-medium text-white">
                    User Information <span className="text-[#FF3B30]">*</span>
                  </p>

                  <div className=" w-full   justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
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

                  <div className=" w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="tel"
                        name="contact_number"
                        placeholder="Contact Number"
                        value={formData.contact_number}
                        onChange={handleChange}
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>

                  <div className=" w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
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

                  <p className="py-2 text-lg font-medium text-white">
                    Shipping Address<span className="text-[#FF3B30]">*</span>
                  </p>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="shipping_address_street"
                        value={formData.shipping_address_street}
                        onChange={handleChange}
                        placeholder="Street/Apartment/Office Name"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="shipping_address_city"
                        value={formData.shipping_address_city}
                        onChange={handleChange}
                        placeholder="City"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>

                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="shipping_address_state"
                        value={formData.shipping_address_state}
                        onChange={handleChange}
                        placeholder="State/Province:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="shipping_address_postal_code"
                        value={formData.shipping_address_postal_code}
                        onChange={handleChange}
                        placeholder="Postal/ZIP Code:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="shipping_address_country"
                        value={formData.shipping_address_country}
                        onChange={handleChange}
                        placeholder="Country"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-[#878787]">
                    Final shipping charges for domestic delivery will be calculated at dispatch and added to the invoice
                    based on your delivery address. Packaging and handling fees are not charged. By preordering, you
                    agree to pay the shipping charges with the remaining balance.
                  </p>

                  <div className=" flex w-full items-center gap-2 " onClick={toggleBillingTwo}>
                    <motion.img
                      src={isDefaultBillingTwo ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />

                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">
                      Billing Address is the same as the Shipping Address
                    </p>
                  </div>

                  <p className="py-2 text-lg font-medium text-white">
                    Billing Address<span className="text-[#FF3B30]">*</span>
                  </p>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="billing_address_street"
                        value={formData.billing_address_street}
                        onChange={handleChange}
                        placeholder="Street/Apartment/Office Name"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>

                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="billing_address_city"
                        value={formData.billing_address_city}
                        onChange={handleChange}
                        placeholder="City"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>

                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="billing_address_state"
                        value={formData.billing_address_state}
                        onChange={handleChange}
                        placeholder="State/Province:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="billing_address_postal_code"
                        value={formData.billing_address_postal_code}
                        onChange={handleChange}
                        placeholder="Postal/ZIP Code:"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="billing_address_country"
                        value={formData.billing_address_country}
                        onChange={handleChange}
                        placeholder="Country"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                  <div className=" flex w-full items-center gap-2 " onClick={toggleShipping}>
                    <motion.img
                      src={isDefaultShipping ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />

                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Set as default Billing Address</p>
                  </div>

                  {/* <div className=" flex w-full items-center gap-2 " onClick={toggleShipping}>
                    <motion.img
                      src={isDefaultShipping ? "/CheckSquareEmpty.png" : "/CheckSquare.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF99] max-sm:text-xs">Set as default Billing Address</p>
                  </div> */}
                </div>
                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 px-5">
                  <p className="py-2 text-lg font-medium text-white">
                    Preferred Contact Info<span className="text-[#FF3B30]">*</span>
                  </p>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      toggleEmail() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isDefaultEmail ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Email</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      togglePhone() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isDefaultPhone ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Phone</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      toggleWhatsapp() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isDefaultWhatsapp ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Whatsapp</p>
                  </div>
                </div>
                <div className="my-5 border-b border-[#FFFFFF0D]"></div>

                <div className="px-5">
                  <p className="pb-5 text-lg font-medium text-white">
                    Product Selection<span className="text-[#FF3B30]">*</span>
                  </p>

                  <div
                    className="flex w-full items-center gap-2"
                    onClick={() => {
                      toggleRadio("Altima Core")
                      setFormData((prevData) => {
                        const updatedData = {
                          ...prevData,
                          product_selection_altima_core: true,
                          product_selection_altima_elite: false, // Ensure the other is false
                        }
                        console.log("Updated State (Core Selected):", updatedData)
                        return updatedData
                      })
                    }}
                  >
                    <motion.img
                      src={selectedRadio === "Altima Core" ? "/fluent_radio-button-24-filled.png" : "/radio.png"}
                      width={18}
                      height={18}
                      alt="Altima Core"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Altima Core</p>
                  </div>

                  <div
                    className="my-4 flex w-full items-center gap-2"
                    onClick={() => {
                      toggleRadio("Altima Elite")
                      setFormData((prevData) => {
                        const updatedData = {
                          ...prevData,
                          product_selection_altima_elite: true,
                          product_selection_altima_core: false, // Ensure the other is false
                        }
                        console.log("Updated State (Elite Selected):", updatedData)
                        return updatedData
                      })
                    }}
                  >
                    <motion.img
                      src={selectedRadio === "Altima Elite" ? "/fluent_radio-button-24-filled.png" : "/radio.png"}
                      width={18}
                      height={18}
                      alt="Altima Elite"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Altima Elite</p>
                  </div>

                  <p className="mt-6 text-sm text-[#FFFFFF]">Quantity</p>
                  <div className="items-center sm:flex sm:justify-between">
                    <div className=" flex items-center gap-3 rounded-md">
                      <button
                        type="button"
                        onClick={handleDecrement}
                        className="flex h-[48px] w-[107px] items-center justify-center rounded-md bg-[#282828] max-sm:w-full"
                      >
                        <motion.img
                          src="/-.png"
                          width={13}
                          height={48}
                          alt="Decrease quantity"
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 1, ease: "easeIn" }}
                        />
                      </button>

                      <input
                        type="number"
                        value={quantity}
                        onChange={handleChange}
                        className="flex h-[48px] w-[107px] items-center justify-center rounded-md border bg-[#282828] px-2 py-1 text-center text-[#FFFFFF] max-sm:w-full"
                        min="1"
                      />

                      <button
                        type="button"
                        onClick={handleIncrement}
                        className="flex h-[48px] w-[107px] items-center justify-center rounded-md bg-[#282828] max-sm:w-full"
                      >
                        <motion.img
                          src="/+.png"
                          width={16}
                          height={48}
                          alt="Increase quantity"
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 1, ease: "easeIn" }}
                        />
                      </button>
                    </div>

                    <p className="font-regular  items-center  text-2xl   text-[#FFFFFF] max-sm:mt-3  max-sm:text-lg lg:text-2xl">
                      {quantity === 1 ? (
                        <>
                          <p className="text-sm">Unit Price : </p>
                          <p className="flex items-center justify-center rounded-md border border-dotted border-[#FFFFFF1A] py-2 max-xl:w-[200px] xl:w-[357px]">
                            {" "}
                            ₹{grossPrice.toLocaleString()}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-sm">Price: </p>
                          <p className="flex items-center justify-center rounded-md border border-dotted border-[#FFFFFF1A] py-3 2xl:w-[357px]">
                            ₹{grossPrice.toLocaleString()}
                          </p>
                        </>
                      )}
                    </p>
                  </div>
                </div>

                <div className="my-5 border-b border-[#FFFFFF0D]"></div>

                <div className="px-5">
                  <p className="pb-5 text-lg font-medium text-white">
                    Customize Your Door<span className="text-[#FF3B30]">*</span>
                  </p>

                  {/* Altima Core Radio */}
                  <div className="flex w-full items-center gap-2 " onClick={() => toggleDoorSpec("Standard Size")}>
                    <motion.img
                      src={selectedDoorSpec === "Standard Size" ? "/fluent_radio-button-24-filled.png" : "/radio.png"}
                      width={18}
                      height={18}
                      alt="Standard Size"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Size(s) in inches</p>
                  </div>

                  <Dropdown
                    label=""
                    options={standardSizeOptions}
                    value={formData.door_spec_default_size || ""}
                    onSelect={handleStandardSizeSelect}
                    isOpen={openDropdown === "sizes"}
                    toggleDropdown={() => toggleDropdown("sizes")}
                    disabled={selectedDoorSpec === "Input Dimension"}
                  />

                  {/* Altima Elite Radio */}
                  <div
                    className="mt-4 flex w-full items-center gap-2"
                    onClick={() => {
                      toggleDoorSpec("Input Dimension")
                      setFormData((prevData) => ({
                        ...prevData,
                        door_spec_manual_size: !prevData.door_spec_manual_size,
                      }))
                    }}
                  >
                    <motion.img
                      src={selectedDoorSpec === "Input Dimension" ? "/fluent_radio-button-24-filled.png" : "/radio.png"}
                      width={18}
                      height={18}
                      alt="Input Dimension"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Custom Size</p>
                  </div>

                  <div className="mb-4 grid gap-3 lg:grid-cols-2">
                    <div className="mt-3">
                      <label className=" text-sm text-white">Width in Inches</label>
                      <div
                        className={`h-[46px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 max-sm:mb-2 ${
                          selectedDoorSpec === "Standard Size"
                            ? "cursor-not-allowed bg-[#282828] opacity-45" // Background color for disabled state
                            : "bg-[#282828] hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC]"
                        }`}
                      >
                        <div className="flex h-[46px] items-center">
                          <input
                            type="text"
                            name="door_spec_manual_size_width"
                            value={formData.door_spec_manual_size_width}
                            onChange={handleChange}
                            placeholder="Width"
                            className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                            style={{ width: "100%", height: "24px" }}
                            disabled={selectedDoorSpec === "Standard Size"}
                          />
                        </div>
                      </div>{" "}
                    </div>
                    <div className="mt-3">
                      <label className=" text-sm text-white">Height in Inches</label>
                      <div
                        className={`h-[46px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 max-sm:mb-2 ${
                          selectedDoorSpec === "Standard Size"
                            ? "cursor-not-allowed bg-[#282828] opacity-45" // Background color for disabled state
                            : "bg-[#282828] hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC]"
                        }`}
                      >
                        <div className="flex h-[46px] items-center">
                          <input
                            type="text"
                            name="door_spec_manual_size_height"
                            value={formData.door_spec_manual_size_height}
                            onChange={handleChange}
                            placeholder="Height"
                            className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                            style={{ width: "100%", height: "24px" }}
                            disabled={selectedDoorSpec === "Standard Size"}
                          />
                        </div>
                      </div>
                    </div>{" "}
                    {/* <Dropdown
                      label="Unit"
                      options={unitOptions}
                      value={formData.door_spec_manual_size_unit || ""}
                      onSelect={handleUnitSelect}
                      isOpen={openDropdown === "unit"}
                      toggleDropdown={() => toggleDropdown("unit")}
                      disabled={selectedDoorSpec === "Standard Size"}
                    /> */}
                  </div>

                  <Dropdown
                    label="Frame Type"
                    options={frameTypeOptions}
                    value={formData.door_spec_frame_type || ""}
                    onSelect={handleFrameTypeSelect}
                    isOpen={openDropdown === "frame"}
                    toggleDropdown={() => toggleDropdown("frame")}
                  />
                  <div className="mt-3">
                    <Dropdown
                      label="Material"
                      options={MaterialOptions}
                      value={formData.door_spec_material_type || ""}
                      onSelect={handleMaterialSelect}
                      isOpen={openDropdown === "material"}
                      toggleDropdown={() => toggleDropdown("material")}
                    />
                  </div>
                  <div className="mt-3">
                    <Dropdown
                      label="Finish"
                      options={
                        materialToFinishMap[formData.door_spec_material_type ?? ""] || [] // Default to an empty string
                      }
                      value={formData.door_spec_finish_type || ""}
                      onSelect={handleFinishSelect}
                      isOpen={openDropdown === "finish"}
                      toggleDropdown={() => toggleDropdown("finish")}
                      disabled={!formData.door_spec_material_type} // Disable if no material is selected
                    />
                  </div>
                  <div className="mt-3">
                    <Dropdown
                      label="Door Hinge Orientation"
                      options={handlePlacementOptions}
                      value={formData.handle_placement || ""}
                      onSelect={handlePlacementSelect}
                      isOpen={openDropdown === "handle"}
                      toggleDropdown={() => toggleDropdown("handle")}
                    />
                  </div>
                </div>

                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 px-5">
                  <p className="ext-lg font-medium text-white">Security</p>

                  <div
                    className={`} flex w-full cursor-not-allowed items-center
                    gap-2`}
                  >
                    <motion.img
                      src={isEnforcedLock ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Reinforced Lock (Included in Base Price)</p>
                  </div>

                  <div
                    className={`} flex w-full cursor-not-allowed items-center 
                    gap-2`}
                  >
                    <motion.img
                      src={isAntiTheft ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt="Anti Theft"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Anti-Theft System (Included in Base Price)</p>
                  </div>

                  <div
                    className={`} flex w-full cursor-not-allowed items-center gap-2
                    `}
                  >
                    <motion.img
                      src={isMotionSensor ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs ">Motion Sensor (Included in Base Price)</p>
                  </div>
                </div>

                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 px-5">
                  <p className="ext-lg font-medium text-white">
                    Additional Security<span className="text-[#FF3B30]">*</span>
                  </p>

                  <div
                    className="flex w-full cursor-pointer items-center gap-2"
                    onClick={() => {
                      toggleSmartKeypadAccess() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isSmartKeypadAccess ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Smart Keypad Access (₹3,000)</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center gap-2"
                    onClick={() => {
                      toggleBatteryBackUp() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isBatteryBackUp ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt="Battery Backup"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Battery Backup(₹2,500)</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center gap-2"
                    onClick={() => {
                      toggleFireDetection() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isFireDetection ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Fire Detection(₹5,000)</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center gap-2"
                    onClick={() => {
                      toggleLock() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isRemoteLockUnlock ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs ">Remote Lock/Unlock(₹3,500)</p>
                  </div>
                </div>

                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 px-5">
                  <p className=" text-lg font-medium text-white">
                    Integrated Smart Hub<span className="text-[#FF3B30]">*</span>
                  </p>

                  <div
                    className={`flex w-full items-center gap-2 ${
                      selectedRadio === "Altima Core" ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (selectedRadio !== "Altima Core") {
                        toggleVideoDoorBell() // Only call the function if not disabled
                      }
                    }}
                  >
                    <motion.img
                      src={isVideoDoorBell ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Video door Bell</p>
                  </div>

                  <div
                    className={`flex w-full items-center gap-2 ${
                      selectedRadio === "Altima Core" ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (selectedRadio !== "Altima Core") {
                        toggleIntercom() // Only call the function if not disabled
                      }
                    }}
                  >
                    <motion.img
                      src={isIntercom ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Intercom System</p>
                  </div>

                  <div
                    className={`flex w-full items-center gap-2 ${
                      selectedRadio === "Altima Core" ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (selectedRadio !== "Altima Core") {
                        toggleCamera() // Only call the function if not disabled
                      }
                    }}
                  >
                    <motion.img
                      src={isCamera ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Camera</p>
                  </div>
                </div>
                <div className="my-5 border-b border-[#FFFFFF0D]"></div>

                <div className="grid gap-5 px-5">
                  <p className=" text-lg font-medium text-white">
                    Additional Integrated Smart Hub<span className="text-[#FF3B30]">*</span>
                  </p>

                  <div
                    className={`flex w-full items-center gap-2 ${
                      selectedRadio === "Altima Core" ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (selectedRadio !== "Altima Core") {
                        toggleSmartLightingIntegration() // Only call the function if not disabled
                      }
                    }}
                  >
                    <motion.img
                      src={isSmartLightingIntegration ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Smart Lighting Integration (₹2,000)</p>
                  </div>

                  <div
                    className={`flex w-full items-center gap-2 ${
                      selectedRadio === "Altima Core" ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (selectedRadio !== "Altima Core") {
                        toggleHomeAutomation() // Only call the function if not disabled
                      }
                    }}
                  >
                    <motion.img
                      src={isHomeAutomation ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Home Automation Integration (₹3,500)</p>
                  </div>

                  <div
                    className={`flex w-full items-center gap-2 ${
                      selectedRadio === "Altima Core" ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (selectedRadio !== "Altima Core") {
                        toggleAdvanceMotionDetection() // Only call the function if not disabled
                      }
                    }}
                  >
                    <motion.img
                      src={isAdvanceMotionDetection ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Advanced Motion Detection(₹4,000)</p>
                  </div>

                  <div
                    className={`flex w-full items-center gap-2 ${
                      selectedRadio === "Altima Core" ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (selectedRadio !== "Altima Core") {
                        toggleVoiceAssistant() // Only call the function if not disabled
                      }
                    }}
                  >
                    <motion.img
                      src={isVoiceAssistant ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Voice assistant integration</p>
                  </div>
                </div>
                <div className="mt-5 border-b border-[#FFFFFF0D]"></div>
                <div className="p-5">
                  <Dropdown
                    label="Your Network Type"
                    options={connectivityOptions}
                    value={formData.connectivity || ""}
                    onSelect={handleConnectivitySelect}
                    isOpen={openDropdown === "connectivity"}
                    toggleDropdown={() => toggleDropdown("connectivity")}
                  />
                </div>
                <div className="border-b border-[#FFFFFF0D]"></div>
                <div className="p-5">
                  <Dropdown
                    label="Your Power Source"
                    options={powerOptions}
                    value={formData.power_source || ""}
                    onSelect={handlePowerSelect}
                    isOpen={openDropdown === "power"}
                    toggleDropdown={() => toggleDropdown("power")}
                  />
                </div>
                <div className="border-b border-[#FFFFFF0D]"></div>
                <div className="p-5">
                  <Dropdown
                    label="Your Installation Environment *"
                    options={installationOptions}
                    value={formData.type_installation || ""}
                    onSelect={handleInstallationSelect}
                    isOpen={openDropdown === "installation"}
                    toggleDropdown={() => toggleDropdown("installation")}
                  />
                </div>
                <div className="border-b border-[#FFFFFF0D]"></div>

                <div className="p-5">
                  <label className="text-sm text-white">Your Preferred Installation Date</label>

                  <input
                    type="date"
                    placeholder="click to input"
                    name="prefered_installation"
                    value={formData.prefered_installation}
                    onChange={handleChange}
                    className="date-input h-full w-full cursor-pointer rounded-lg border  border-[#FFFFFF1A] bg-[#282828]  px-3 py-3 text-sm text-white outline-none "
                  />
                </div>

                <div className="border-b border-[#FFFFFF0D]"></div>
                <div className="p-5">
                  <label className=" text-sm text-white">Your Special Installation Instructions </label>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="special_installation_instruction"
                        value={formData.special_installation_instruction}
                        onChange={handleChange}
                        placeholder="Enter Instruction"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                        // disabled={selectedRadio === "Altima Core"}
                      />
                    </div>
                  </div>
                </div>
                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 px-5">
                  <p className="text-lg font-medium text-white">Extended Warranty:</p>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      toggleWarranty() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isExtendedWarranty ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">
                      Yes, I want an extended warranty for an additional fee.
                    </p>
                  </div>
                </div>
                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 px-5">
                  <p className="text-lg font-medium text-white">Installation Support:</p>
                  <p className="text-sm text-white">
                    On-site installation: Free within 100 km.
                    <br />
                    Additional fees apply: 5% (100+ to 400 km), <br />
                    10% (400+ to 800 km), 
                    <br />
                    20% (800+ km).
                  </p>

                  <div
                    className="flex w-full cursor-pointer items-center gap-2"
                    onClick={() => {
                      toggleSupport()
                    }}
                  >
                    <motion.img
                      src={isDefaultSupport ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Yes, I agree.</p>
                  </div>
                </div>
                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 px-5">
                  <p className="text-lg font-medium text-white">Payment and Confirmation:</p>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      togglePayment() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isPayment ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">
                      I agree to the Pre-order Deposit, requiring 30% of the product price as an upfront payment.
                    </p>
                  </div>
                </div>
                <div className="my-5 border-b border-[#FFFFFF0D]"></div>

                <p className="px-5  text-lg font-medium text-white">Payment Information</p>
                <p className="px-5  pb-3 text-sm text-white">Total Cost Calculation:</p>

                <table className="w-full table-fixed border-separate border-spacing-0 text-left text-white sm:hidden">
                  <thead></thead>
                  <tbody className="border-b border-t">
                    <tr>
                      <td className="border-b border-l border-t border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        <span className="opacity-40">Base Price per Door:</span>
                      </td>
                      <td className="border-b border-l border-r border-t border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        {adjustedUnitPrice.toLocaleString()}
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
                        ₹{subtotal.toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        <span className="opacity-40">Quantity</span>
                      </td>
                      <td className="border-b  border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        {quantity}
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        <span className="opacity-40">Total</span>
                      </td>
                      <td className="border-b  border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        ₹{Number(formData.total).toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        <span className="opacity-40">30% Advance</span>
                      </td>
                      <td className="border-b  border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        {" "}
                        ₹{Number(formData.deposit_amount).toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="table-fixed border-separate border-spacing-0 px-5  text-left text-white max-sm:hidden 2xl:w-full">
                  <thead>
                    <tr className="border">
                      <th className="border-b border-l border-t border-[#FFFFFF33] bg-[#282828] px-4 py-4 text-sm font-normal">
                        Base Price per Door:
                      </th>
                      <th className="border-b border-l border-t border-[#FFFFFF33]  bg-[#282828] px-4 py-4 text-sm font-normal">
                        Tax
                      </th>
                      <th className="border-b border-l border-t  border-[#FFFFFF33] bg-[#282828] px-4 py-4 text-sm font-normal">
                        Subtotal
                      </th>
                      <th className="border-b border-l border-t  border-[#FFFFFF33] bg-[#282828]  px-4 py-4 text-sm font-normal">
                        Quantity:
                      </th>
                      <th className="border-b border-l border-r border-t border-[#FFFFFF33]  bg-[#282828] px-4 py-4 text-sm font-normal">
                        Total
                      </th>
                      <th className="border-b border-l border-r border-t border-[#FFFFFF33]  bg-[#282828] px-4 py-4 text-sm font-normal">
                        30% Advance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-b">
                    <tr>
                      <td className="border-b border-l border-[#FFFFFF33]  bg-[#282828] px-4 py-2 text-sm">
                        ₹{adjustedUnitPrice.toLocaleString()}
                      </td>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">₹17,820</td>
                      <td className="border-b border-l border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        ₹{subtotal.toLocaleString()}
                      </td>
                      <td className="border-b border-l border-[#FFFFFF33]  bg-[#282828] px-4 py-2 text-sm">
                        {quantity}
                      </td>
                      <td className="border-b border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        ₹{Number(formData.total).toLocaleString()}
                      </td>
                      <td className="border-b border-l border-r border-[#FFFFFF33] bg-[#282828] px-4 py-2 text-sm">
                        ₹{Number(formData.deposit_amount).toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex w-full justify-end">
                  <p className="flex  w-72 justify-end px-5 py-3 text-end text-sm capitalize text-[#FFFFFF]">
                    {`(${depositAmountInWords.replace(/,/g, "")})`}
                  </p>
                </div>
                <div className="border-b border-[#FFFFFF0D]"></div>
                <div className="px-5 py-3">
                  <PreorderAgreement />
                  <div className="my-6 flex w-full items-center justify-center gap-2">
                    <motion.img
                      onClick={() => {
                        toggleAggrement() // Only call the function if not disabled
                      }}
                      src={isAgreement ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={18}
                      height={18}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-white opacity-80">
                      I have read, understood, and agree to the terms and conditions of the Online Preorder Agreement.
                    </p>
                  </div>
                  <div>
                    <p className="text-center text-sm text-white opacity-80">
                      Want to confirm you&apos;re making the right choice?{" "}
                      <a
                        href="/comparison"
                        className="font-bold text-white underline opacity-100 transition-all   duration-300 ease-in-out hover:text-[#FF3B30]"
                      >
                        Check out the Comparison Table
                      </a>{" "}
                      before placing your preorder!
                    </p>
                  </div>
                </div>
                <div className="border-b border-[#FFFFFF0D]"></div>
                <div className="mt-5 flex w-full justify-center max-sm:px-3">
                  <button
                    type="submit"
                    className={`font-regular mb-5 flex w-[60%] items-center justify-center gap-2 rounded-lg border border-[#FF3B30] bg-[#FF3B30] px-4 py-3 uppercase text-[#FFFFFF] transition-all duration-300 ease-in-out max-sm:w-full ${
                      isAgreement ? "cursor-pointer opacity-100" : "cursor-not-allowed opacity-50"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
              <div className="border-b border-[#FFFFFF0D]"></div>
              <div className="flex w-full items-center justify-center gap-2">
                <img src="/mingcute_alert-fill.png" />
                <p className="text-sm text-white opacity-80">
                  Disclaimer: Final shipping charges will be included in your invoice at dispatch, based on your
                  location.
                </p>
              </div>
              <p className="mb-5 text-center text-sm text-white opacity-80">
                Shipping Policy • Installation Policy • Warranty Policy • Refund Policy
              </p>
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
        {message && (
          <div className="animation-fade-in fixed bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#000000] bg-[#92E3A9] text-[#000000] shadow-[#05420514] md:right-16">
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
