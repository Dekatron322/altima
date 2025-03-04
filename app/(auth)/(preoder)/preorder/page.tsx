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
import { LiaTimesSolid } from "react-icons/lia"

interface User {
  id: string
  token: string
}

export default function Web() {
  const [isDefaultBillingTwo, setIsDefaultBillingTwo] = useState(false)
  const [isZigbee, setIsZigbee] = useState(false)
  const [isBluetooth, setIsBluetooth] = useState(false)
  const [isWifi, setIsWifi] = useState(false)
  const [isMainsPower, setIsMainsPower] = useState(false)
  const [isSolarReady, setIsSolarReady] = useState(false)
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
        extended_warranty: newValue,
      }))
      return newValue
    })
  }

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const openVideoModal = () => {
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  const toggleSupport = () => {
    setIsDefaultSupport((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        installation_support: newValue,
      }))
      return newValue
    })
  }

  const togglePhone = () => {
    setIsDefaultPhone((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        phone: newValue,
      }))
      return newValue
    })
  }

  const togglePayment = () => {
    setIsPayment((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        payment_confirmation: newValue,
      }))
      return newValue
    })
  }

  const toggleWhatsapp = () => {
    setIsDefaultWhatsapp((prev) => {
      const newValue = !prev
      setFormData((prevFormData) => ({
        ...prevFormData,
        whatsapp: newValue,
      }))
      return newValue
    })
  }

  const toggleZigbee = () => {
    setIsZigbee((prev) => {
      const newValue = !prev
      console.log("Zigbee:", newValue)
      setFormData((prevFormData) => ({
        ...prevFormData,
        zigbee: newValue,
      }))
      console.log("formData.zigbee:", newValue)
      return newValue
    })
  }

  const toggleBluetooth = () => {
    setIsBluetooth((prev) => {
      const newValue = !prev
      console.log("Bluetooth:", newValue)
      setFormData((prevFormData) => ({
        ...prevFormData,
        bluetooth: newValue,
      }))
      console.log("formData.bluetooth:", newValue)
      return newValue
    })
  }

  const toggleWifi = () => {
    setIsWifi((prev) => {
      const newValue = !prev
      console.log("Wifi:", newValue)
      setFormData((prevFormData) => ({
        ...prevFormData,
        wifi: newValue,
      }))
      console.log("formData.wifi:", newValue)
      return newValue
    })
  }

  const toggleMainsPower = () => {
    setIsMainsPower((prev) => {
      const newValue = !prev
      console.log("Mains Power:", newValue)
      setFormData((prevFormData) => ({
        ...prevFormData,
        mains_power: newValue,
      }))
      console.log("formData.mains_power:", newValue)
      return newValue
    })
  }

  const toggleSolar = () => {
    setIsSolarReady((prev) => {
      const newValue = !prev
      console.log("Solar Ready:", newValue)
      setFormData((prevFormData) => ({
        ...prevFormData,
        solar_ready: newValue,
      }))
      console.log("formData.solar_ready:", newValue)
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
    zigbee: false,
    bluetooth: false,
    wifi: false,
    solar_ready: false,
    mains_power: false,

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
    door_swing_direction: "",
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
    Wood: ["Teak Veneer", "Rosewood Veneer", "Walnut Veneer"],
    Glass: ["Frosted", "Tinted", "Etched"],
    Metal: ["Wood Grain", "Brushed Steel", "Textured Sand"],
  }
  const handlePlacementOptions = ["Right-Hinged", "Left-Hinged"]
  const handleSwingOptions = ["Inward-opening door", "Outward-opening door"]

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
    console.log("Finish selected:", option)
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

  const handleSwingSelect = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      door_swing_direction: option,
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
      if (name === "quantity") {
        const numericValue = parseInt(value, 10)

        // Ensure value is numeric and greater than 0
        if (numericValue > 0) {
          setQuantity(numericValue) // Update the quantity state
          return {
            ...prev,
            [name]: numericValue.toString(), // Update formData with valid number
          }
        } else if (value === "") {
          // Allow clearing the input temporarily
          setQuantity(0) // Optional: Update state with default or temporary value
          return {
            ...prev,
            [name]: "",
          }
        }
      }

      // For other fields, update directly
      return {
        ...prev,
        [name]: value,
      }
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

        // Save order ID to local storage
        localStorage.setItem("order_id", orderId)

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
            <p className="text-center text-xl font-bold text-[#FFFFFFcc]">Pre-Order form</p>
            <p className="py-5 text-center text-sm text-[#FFFFFF80] max-xl:text-xs">
              ✓Estimated delivery date: 4-5 months after the preorder window closes
            </p>
            <p className="pb-5 text-center text-sm text-[#FFFFFF80] max-xl:text-xs 2xl:w-[580px]">
              ✓A note: Preorders require a 30% deposit at the time of booking. The remaining balance is due before
              shipment, with a final payment notice sent prior to delivery. Adjustments apply only in case of changes to
              the final invoice due to shipping or product modifications.
            </p>

            <p className="py-5 text-center text-sm text-[#FFFFFF80] max-xl:text-xs">
              Altima is built to outperform!{" "}
              <a
                href="/comparison"
                className="font-bold text-white underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                Compare Now
              </a>{" "}
              and see why it&apos;s the future of smart doors.
            </p>

            <p className="py-5 text-center text-sm text-[#FFFFFF80] max-xl:text-xs">
              Experience Altima Core and Elite in action—
              <a
                href="/product-details"
                className="font-bold text-white underline transition-all duration-300 ease-in-out hover:text-[#FF3B30]"
              >
                {" "}
                see their features come to life!
              </a>
            </p>

            <div className="flex h-full w-full flex-col  rounded-lg max-sm:grid max-sm:gap-5    lg:gap-5 lg:border  lg:border-[#FFFFFF0D]">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-5 max-sm:gap-3 lg:px-5 lg:pt-5">
                  <p className="py-2 font-medium text-[#ffffffcc] lg:text-lg">
                    Address Preferences <span className="text-[#FF3B30]">*</span>
                  </p>
                  <div className=" flex w-full items-center gap-2 " onClick={() => toggleAddress("Use New Address")}>
                    <motion.img
                      src={selectedAddress === "Use New Address" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Use new Address</p>
                  </div>

                  <div
                    className=" flex w-full items-center gap-2 "
                    onClick={() => toggleAddress("Use Default Address")}
                  >
                    <motion.img
                      src={selectedAddress === "Use Default Address" ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Use Default Address</p>
                  </div>
                </div>
                <div className="my-5 flex w-full border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 lg:px-5 ">
                  <p className=" font-medium text-[#ffffffcc] lg:text-lg">
                    Your Details <span className="text-[#FF3B30]">*</span>
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

                  <p className=" font-medium text-[#ffffffcc] lg:text-lg">
                    Shipping Address <span className="text-[#FF3B30]">*</span>
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

                  <div className=" flex w-full items-start gap-2 " onClick={toggleBillingTwo}>
                    <motion.img
                      src={isDefaultBillingTwo ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />

                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Billing Address Same as shipping Address</p>
                  </div>

                  <p className="py-2 font-medium text-[#ffffffcc] lg:text-lg">
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
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />

                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Set as default Billing Address</p>
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
                <div className="grid gap-5 lg:px-5">
                  <p className="py-2 font-medium text-[#ffffffcc] lg:text-lg">
                    Preferred Contact Info <span className="text-[#FF3B30]">*</span>
                  </p>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      toggleEmail() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isDefaultEmail ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Email</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      togglePhone() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isDefaultPhone ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Phone</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      toggleWhatsapp() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isDefaultWhatsapp ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Whatsapp</p>
                  </div>
                </div>
                <div className="my-5 border-b border-[#FFFFFF0D]"></div>

                <div className="lg:px-5">
                  <p className="pb-5 text-lg font-medium text-[#ffffffcc]">
                    Product Selection <span className="text-[#FF3B30]">*</span>
                  </p>
                  <div className="flex items-center justify-between">
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
                        width={24}
                        height={24}
                        alt="Altima Core"
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeIn" }}
                      />
                      <p className="text-sm text-[#FFFFFFcc] max-sm:text-base">Altima Core</p>
                    </div>
                    <div className="flex gap-[10px]">
                      <p className="stroke-slate-50 text-[#FFFFFF80] line-through lg:text-xl">₹90,000</p>
                      <p className="font-bold text-[#ffffffcc] lg:text-xl">₹49,500</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
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
                        width={24}
                        height={24}
                        alt="Altima Elite"
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeIn" }}
                      />
                      <p className="text-sm text-[#FFFFFFcc] max-sm:text-base">Altima Elite</p>
                    </div>
                    <div className="flex gap-[10px]">
                      <p className="stroke-slate-50 text-[#FFFFFF80] line-through lg:text-xl">₹199,000</p>
                      <p className="font-bold text-[#ffffffcc] lg:text-xl">₹99,500</p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-[#FFFFFFcc]">Quantity</p>
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
                        name="quantity"
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

                    <p className="items-center  text-2xl  font-normal   text-[#FFFFFFcc] max-sm:mt-6  max-sm:text-lg lg:text-2xl">
                      {quantity === 1 ? (
                        <>
                          <p className="text-sm">Unit Price : </p>
                          <p className="flex items-center justify-center rounded-md border border-dashed border-[#FFFFFF1A] py-2 max-xl:w-full xl:w-[205px]">
                            {" "}
                            ₹{grossPrice.toLocaleString()}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-sm">Price: </p>
                          <p className="flex items-center justify-center rounded-md border border-dotted border-[#FFFFFF1A] py-3 2xl:w-[205px]">
                            ₹{grossPrice.toLocaleString()}
                          </p>
                        </>
                      )}
                    </p>
                  </div>
                </div>

                <div className="my-5 border-b border-[#FFFFFF0D]"></div>

                <div className="lg:px-5">
                  <p className="pb-5 font-medium text-[#ffffffcc] lg:text-lg">
                    Customize Your Door <span className="text-[#FF3B30]">*</span>
                  </p>

                  {/* Altima Core Radio */}
                  <div className="flex w-full items-center gap-2 " onClick={() => toggleDoorSpec("Standard Size")}>
                    <motion.img
                      src={selectedDoorSpec === "Standard Size" ? "/fluent_radio-button-24-filled.png" : "/radio.png"}
                      width={24}
                      height={24}
                      alt="Standard Size"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-base text-[#FFFFFFcc] max-sm:text-sm">Standard Size(s)</p>
                  </div>
                  <p className="mb-2 mt-4 text-sm text-[#FFFFFFcc] max-sm:text-sm">Height × Width (in inches)</p>
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
                      width={24}
                      height={24}
                      alt="Input Dimension"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-base text-[#FFFFFF] max-sm:text-sm">Custom Size(s)</p>
                  </div>
                  <p className="my-4 text-[#ffffffcc] max-sm:text-xs">
                    If your size isn&apos;t listed, Enter custom dimensions. ensure it matches standard frame sizes for
                    best fit.
                  </p>

                  <div className="mb-4 grid gap-8 lg:grid-cols-2">
                    {/* <div className="mt-3">
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
                    </div> */}
                    <div className="lg:mt-3">
                      <div className="mb-3 flex w-full items-center justify-between">
                        <label className="mb-2 mt-4 text-sm text-[#FFFFFF] max-sm:text-sm">Width in Inches</label>
                        <div className="flex h-[26px] w-16  items-center justify-center rounded border border-[#FFFFFF1A]">
                          <input
                            type="text"
                            name="door_spec_manual_size_width"
                            value={formData.door_spec_manual_size_width}
                            onChange={handleChange}
                            placeholder="Width"
                            className="item-center flex h-[24px] w-full bg-transparent text-center text-sm text-white outline-none focus:outline-none"
                            style={{ width: "100%", height: "24px" }}
                            disabled={selectedDoorSpec === "Standard Size"}
                          />
                        </div>
                      </div>
                      <div
                        className={`h-[46px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 max-sm:mb-2 ${
                          selectedDoorSpec === "Standard Size"
                            ? "cursor-not-allowed bg-[#282828] opacity-45" // Background color for disabled state
                            : "bg-[#282828] hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC]"
                        }`}
                      >
                        <div className="flex h-[46px] items-center gap-5">
                          <p className="text-[#ffffffcc]">30”</p>
                          <input
                            type="range"
                            name="door_spec_manual_size_width"
                            value={formData.door_spec_manual_size_width}
                            onChange={handleChange}
                            min="30"
                            max="50"
                            placeholder="Width"
                            className="custom-range" // Add the custom class
                            style={{ width: "100%", height: "24px" }}
                            disabled={selectedDoorSpec === "Standard Size"}
                          />
                          <p className="text-[#ffffffcc]">50”</p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:mt-3">
                      <div className="mb-3 flex w-full items-center justify-between">
                        <label className="mb-2 mt-4 text-sm text-[#FFFFFF] max-sm:text-sm">Height in Inches</label>
                        <div className="flex h-[26px] w-16  items-center justify-center rounded border border-[#FFFFFF1A]">
                          <input
                            type="text"
                            name="door_spec_manual_size_height"
                            value={formData.door_spec_manual_size_height}
                            onChange={handleChange}
                            placeholder="Height"
                            className="item-center flex h-[24px] w-full bg-transparent text-center text-sm text-white outline-none focus:outline-none"
                            style={{ width: "100%", height: "24px" }}
                            disabled={selectedDoorSpec === "Standard Size"}
                          />
                        </div>
                      </div>

                      <div
                        className={`h-[46px] w-full items-center justify-between rounded-lg border border-[#FFFFFF1A] px-3 max-sm:mb-2 ${
                          selectedDoorSpec === "Standard Size"
                            ? "cursor-not-allowed bg-[#282828] opacity-45" // Background color for disabled state
                            : "bg-[#282828] hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC]"
                        }`}
                      >
                        <div className="flex h-[46px] items-center gap-5">
                          <p className="text-[#ffffffcc]">70”</p>
                          <input
                            type="range"
                            name="door_spec_manual_size_height"
                            value={formData.door_spec_manual_size_height}
                            onChange={handleChange}
                            min="70"
                            max="110"
                            className="item-center flex h-[24px] w-full bg-transparent text-sm text-white outline-none focus:outline-none"
                            style={{ width: "100%", height: "24px" }}
                            disabled={selectedDoorSpec === "Standard Size"}
                          />
                          <p className="text-[#ffffffcc]">110”</p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="lg:mt-3">
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
                    </div>{" "} */}
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
                    <div
                      onClick={openVideoModal}
                      className="mt-2 flex w-full cursor-pointer justify-end text-sm text-[#ffffffcc] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30] max-xl:text-xs"
                    >
                      <p>View Material finish images</p>
                    </div>
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

                  <div className="mt-3">
                    <Dropdown
                      label="Door Swing Direction"
                      options={handleSwingOptions}
                      value={formData.door_swing_direction || ""}
                      onSelect={handleSwingSelect}
                      isOpen={openDropdown === "swing"}
                      toggleDropdown={() => toggleDropdown("swing")}
                    />
                  </div>
                </div>

                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 lg:px-5">
                  <p className="py-2 font-medium text-[#ffffffcc] lg:text-lg">Security</p>

                  <p className="text-base text-[#ffffffcc]  max-sm:text-sm">Core Security</p>

                  <div
                    className={`} flex w-full cursor-not-allowed items-center
                    gap-2`}
                  >
                    <motion.img
                      src={isEnforcedLock ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Reinforced Lock (Included in Base Price)</p>
                  </div>

                  <div
                    className={`} flex w-full cursor-not-allowed items-start 
                    gap-2`}
                  >
                    <motion.img
                      src={isAntiTheft ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt="Anti Theft"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">
                      Anti-Theft System (Included in Base Price)
                    </p>
                  </div>

                  <div
                    className={`} flex w-full cursor-not-allowed items-start gap-2
                    `}
                  >
                    <motion.img
                      src={isMotionSensor ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm ">Motion Sensor (Included in Base Price)</p>
                  </div>

                  <div
                    className={`} flex w-full cursor-not-allowed items-start gap-2
                    `}
                  >
                    <motion.img
                      src={isMotionSensor ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm ">Smoke Detector (Included in Base Price)</p>
                  </div>

                  <div
                    className={`} flex w-full cursor-not-allowed items-start gap-2
                    `}
                  >
                    <motion.img
                      src={isMotionSensor ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm ">
                      Gas leak Detector (Included in Base Price)
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-5 lg:px-5">
                  <p className="text-base text-[#ffffffcc]  max-sm:text-sm">
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
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Smart Keypad Access (₹3,000)</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center gap-2"
                    onClick={() => {
                      toggleBatteryBackUp() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isBatteryBackUp ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt="Battery Backup"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Battery Backup(₹2,500)</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center gap-2"
                    onClick={() => {
                      toggleFireDetection() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isFireDetection ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Fire Detection(₹5,000)</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center gap-2"
                    onClick={() => {
                      toggleLock() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isRemoteLockUnlock ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm ">Remote Lock/Unlock(₹3,500)</p>
                  </div>
                </div>

                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-3 lg:px-5 xl:gap-5">
                  <p className=" text-lg font-medium text-[#ffffffcc] max-sm:text-base">
                    Integrated Smart Hub Features
                  </p>
                  <p className=" text-base  text-[#ffffffcc]">Standard Integrated Smart Hub Features </p>

                  {/* <div
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
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFF] max-sm:text-xs">Video door Bell</p>
                  </div> */}

                  {/* <div
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
                  </div> */}

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
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] ">All Altima Core features + Camera</p>
                  </div>
                </div>

                <div className="mt-5 grid max-sm:gap-3 lg:mt-7 lg:gap-5 lg:px-5">
                  <p className=" text-base  text-[#ffffffcc]">Additional Integrated Smart Hub Features</p>

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
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Smart Lighting Integration (₹2,000)</p>
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
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Home Automation Integration (₹3,500)</p>
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
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Advanced Motion Detection(₹4,000)</p>
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
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Voice assistant integration</p>
                  </div>
                </div>

                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 lg:px-5">
                  <p className=" text-lg font-medium text-[#ffffffcc] max-sm:text-base">
                    Your Network Type<span className="text-[#FF3B30]">*</span>
                  </p>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      toggleZigbee() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isZigbee ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Zigbee</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      toggleBluetooth() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isBluetooth ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Bluetooth</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      toggleWifi() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isWifi ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Wifi</p>
                  </div>
                </div>
                {/* <div className="mt-5 border-b border-[#FFFFFF0D]"></div>
                <div className="p-5">
                  <Dropdown
                    label="Your Network Type"
                    options={connectivityOptions}
                    value={formData.connectivity || ""}
                    onSelect={handleConnectivitySelect}
                    isOpen={openDropdown === "connectivity"}
                    toggleDropdown={() => toggleDropdown("connectivity")}
                  />
                </div> */}
                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 lg:px-5">
                  <p className=" text-lg font-medium text-[#ffffffcc] max-sm:text-base">
                    Your Power Source<span className="text-[#FF3B30]">*</span>
                  </p>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      toggleMainsPower() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isMainsPower ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Mains Power</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      toggleBatteryBackUp() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isBatteryBackUp ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Battery Backup</p>
                  </div>

                  <div
                    className="flex w-full cursor-pointer items-center  gap-2"
                    onClick={() => {
                      toggleSolar() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isSolarReady ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">Solar Ready</p>
                  </div>
                </div>
                {/* <div className="mt-5 border-b border-[#FFFFFF0D]"></div>
                <div className="p-5">
                  <Dropdown
                    label="Your Power Source"
                    options={powerOptions}
                    value={formData.power_source || ""}
                    onSelect={handlePowerSelect}
                    isOpen={openDropdown === "power"}
                    toggleDropdown={() => toggleDropdown("power")}
                  />
                </div> */}
                <div className="mt-5 border-b border-[#FFFFFF0D]"></div>
                <div className="max-xl:pb-3 lg:p-5">
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

                <div className="max-xl:py-3 lg:p-5">
                  <label className="text-sm text-[#FFFFFFCC]">Your Preferred Installation Date</label>

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
                <div className="max-xl:py-3 lg:p-5">
                  <label className=" text-sm text-[#FFFFFFCC]">Your Special Installation Instructions </label>
                  <div className="h-[46px] w-full  items-center justify-between  rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3  hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2">
                    <div className="flex h-[46px] items-center">
                      <input
                        type="text"
                        name="special_installation_instruction"
                        value={formData.special_installation_instruction}
                        onChange={handleChange}
                        placeholder="Enter Instruction"
                        className="item-center flex h-[24px] w-full bg-transparent text-sm text-[#FFFFFFCC] outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                        // disabled={selectedRadio === "Altima Core"}
                      />
                    </div>
                  </div>
                </div>
                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 lg:px-5">
                  <p className=" text-lg font-medium text-[#ffffffcc] max-sm:text-base">Extended Warranty:</p>

                  <div
                    className="flex w-full cursor-pointer items-start gap-2"
                    onClick={() => {
                      toggleWarranty() // Toggle warranty state
                    }}
                  >
                    <motion.img
                      src={isExtendedWarranty ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt="Warranty Checkbox"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">
                      {isExtendedWarranty
                        ? `Yes, I want an extended warranty for an additional fee. (3 additional years) – ₹${
                            selectedRadio === "Altima Core" ? "5,000" : "8,000"
                          }`
                        : "Yes, I want an extended warranty for an additional fee."}
                    </p>
                  </div>
                </div>

                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 lg:px-5">
                  <p className=" text-lg font-medium text-[#ffffffcc] max-sm:text-base">Installation Support:</p>
                  <p className="text-sm text-[#ffffffcc]">
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
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc]">Yes, I agree.</p>
                  </div>
                </div>
                <div className="my-5 border-b border-[#FFFFFF0D]"></div>
                <div className="grid gap-5 lg:px-5">
                  <p className=" text-lg font-medium text-[#ffffffcc] max-sm:text-base">Payment and Confirmation:</p>

                  <div
                    className="flex w-full cursor-pointer items-start  gap-2"
                    onClick={() => {
                      togglePayment() // Only call the function if not disabled
                    }}
                  >
                    <motion.img
                      src={isPayment ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#FFFFFFcc] max-sm:text-sm">
                      I agree to the Pre-order Deposit, requiring 30% of the product price as an upfront payment.
                    </p>
                  </div>
                </div>
                <div className="my-5 border-b border-[#FFFFFF0D]"></div>

                <p className=" text-lg font-medium text-[#ffffffcc] max-sm:text-base lg:px-5">Payment Information</p>
                <p className="pb-3  text-sm text-[#ffffffcc] lg:px-5">Total Cost Calculation:</p>

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
                  <p className="flex w-72  justify-end py-3 text-end text-sm capitalize text-[#FFFFFFcc] max-sm:w-40 lg:px-5">
                    {`(${depositAmountInWords.replace(/,/g, "")})`}
                  </p>
                </div>
                <div className="border-b border-[#FFFFFF0D]"></div>
                <div className="py-3 lg:px-5">
                  <PreorderAgreement />
                  <div className="my-6 flex w-full items-center justify-center gap-2 border-b border-[#FFFFFF0D] pb-4">
                    <motion.img
                      onClick={() => {
                        toggleAggrement() // Only call the function if not disabled
                      }}
                      src={isAgreement ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
                      width={24}
                      height={24}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                    <p className="text-sm text-[#ffffffcc] opacity-80 max-sm:text-xs">
                      I agree to the preorder{" "}
                      <a href="" className="underline">
                        terms and conditions
                      </a>
                      .
                    </p>
                  </div>
                  <div>
                    <p className="text-center text-sm text-white opacity-80 max-sm:text-xs">
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
                    className={`mb-5 flex w-[60%] items-center justify-center gap-2 rounded-lg border border-[#FF3B30] bg-[#FF3B30] px-4 py-3 font-normal uppercase text-[#FFFFFF] transition-all duration-300 ease-in-out max-sm:w-full ${
                      isAgreement ? "cursor-pointer opacity-100" : "cursor-not-allowed opacity-50"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
              <div className="border-b border-[#FFFFFF0D]"></div>
              <div className="flex w-full items-start justify-center gap-2">
                <img src="/mingcute_alert-fill.png" />
                <p className="text-sm text-[#ffffffcc]  max-sm:text-center max-sm:text-xs">
                  Disclaimer: Final shipping charges will be included in your invoice at dispatch, based on your
                  location.
                </p>
              </div>
              <p className="text-center text-sm text-[#ffffffcc] max-sm:text-xs lg:mb-5">
                Shipping Policy • Installation Policy • Warranty Policy • Refund Policy
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full     py-10">
          <div className="flex flex-col items-center justify-center">
            <p className=" text-sm text-[#FFFFFF99] max-xl:text-xs">Timeline</p>
            <p className="mb-6 mt-2 flex text-center text-4xl font-normal  text-[#FFFFFF]  max-xl:text-base ">
              Production Timeline
            </p>

            <Image src="/Frame 48095551 copy.png" width={549} height={64} alt="" className="py-4 md:hidden" />
            <Image src="/Frame 48095442.png" width={1216} height={64} alt="" className="py-10 max-sm:hidden" />
          </div>
        </div>
        {message && (
          <div className="animation-fade-in fixed bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#000000] bg-[#92E3A9] text-[#000000] shadow-[#05420514] md:right-16">
            <span className="clash-font text-sm text-[#000000]">{message}</span>
            <Image src="/AuthImages/Star2.svg" width={28.26} height={28.26} alt="dekalo" />
          </div>
        )}
      </section>

      {isVideoModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#282828] bg-opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeVideoModal}
        >
          <motion.div
            className="relative w-full max-w-xl items-center rounded-lg bg-[#151515] bg-opacity-90 p-6 shadow-lg max-xl:p-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
            style={{ maxHeight: "92vh", overflowY: "auto" }} // Fixed height and scrollable
          >
            <div className="flex w-full border-b border-[#FFFFFF1A] pb-4">
              <p className="text-base font-bold text-[#ffffffcc] max-sm:text-xs">Material Finish</p>
              <button className="absolute right-2 top-4 px-3 text-xs text-[#ffffffcc] xl:p-3" onClick={closeVideoModal}>
                Close
              </button>
            </div>
            <p className="my-4 text-sm text-[#ffffffcc] max-sm:text-xs">Wood Finish</p>
            <div className="flex w-full gap-4 border-b border-[#FFFFFF1A] pb-6 xl:gap-6">
              <div className="flex flex-col items-center gap-3">
                <img src="/Group 4198 (1).png" className="h-40 w-40 max-sm:h-[72px] max-sm:w-[72px]" />
                <p className="text-center text-sm text-[#ffffffcc]">Teak Veneer</p>
              </div>
              <div className="flex flex-col items-center justify-between gap-3">
                <img src="/Rosewood-Santos-FC.png" className="h-40 w-40 max-sm:h-[72px] max-sm:w-[72px]" />
                <p className="text-center text-sm text-[#ffffffcc]">Rosewood Veneer</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img
                  src="/reconstituted-walnut-veneer-quarter-cut-01-300x300.png"
                  className="h-40 w-40 max-sm:h-[72px] max-sm:w-[72px]"
                />
                <p className="text-center text-sm text-[#ffffffcc]">Walnut Veneer</p>
              </div>
            </div>

            <p className="my-4 text-sm text-[#ffffffcc] max-sm:text-xs">Metal Finish</p>
            <div className="flex w-full justify-between gap-6 border-b border-[#FFFFFF1A] pb-6">
              <div className="flex flex-col items-center gap-3">
                <img src="/Group 4198 (2).png" className="h-40 w-40 max-sm:h-[72px] max-sm:w-[72px]" />
                <p className="text-center text-sm text-[#ffffffcc]">Wood Grain</p>
              </div>
              <div className="flex flex-col items-center justify-between gap-3">
                <img src="/istockphoto-1159017936-612x612.png" className="h-40 w-40 max-sm:h-[72px] max-sm:w-[72px]" />
                <p className="text-center text-sm text-[#ffffffcc]">Brushed Steel</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img
                  src="/360_F_524092028_01pwqth13PyqJQk1fiTGtkCXYdz5UDaR.png"
                  className="h-40 w-40 max-sm:h-[72px] max-sm:w-[72px]"
                />
                <p className="text-center text-sm text-[#ffffffcc]">Textured Sand</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-between">
              <p className="my-4 text-sm text-[#ffffffcc] max-sm:text-xs">Glass finish</p>
              <p className="my-4 text-xs text-[#ffffffcc] max-sm:text-[10px]">( Available on Elite Only )</p>
            </div>
            <div className="flex w-full justify-between gap-4 pb-6 xl:gap-6">
              <div className="flex flex-col items-center gap-3">
                <img src="/Group 4198 (3).png" className="h-40 w-40 max-sm:h-[72px] max-sm:w-[72px]" />
                <p className="text-center text-sm text-[#ffffffcc]">Frosted</p>
              </div>
              <div className="flex flex-col items-center justify-between gap-3">
                <img
                  src="/4mm-dark-grey-color-tinted-float-glass-for-windows-and-doors_3.jpg.png"
                  className="h-40 w-40 max-sm:h-[72px] max-sm:w-[72px]"
                />
                <p className="text-center text-sm text-[#ffffffcc]">Tinted</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img src="/ET001-Fleur-Etched-Glass-Panel.png" className="h-40 w-40 max-sm:h-[72px] max-sm:w-[72px]" />
                <p className="text-center text-sm text-[#ffffffcc]">Etched</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <MainFooter />

      <Footer />
    </section>
  )
}
