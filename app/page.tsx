"use client"
import Footer from "components/Footer/Footer"

import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useState } from "react"
import Accordion from "components/Accordion/Accordion"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import { useRouter } from "next/navigation"
import { LiaTimesSolid } from "react-icons/lia"
import ImageCarousel from "components/ImageModal/ImageModal"
import AccordionTwo from "components/Accordion/Accordion001"
import NewContact from "components/ContactUs/ContactUs"
import VideoCarousel from "components/ImageModal/VideoCarousel"

export default function Web() {
  const faqData = [
    {
      title: "1. When will Altima Disappearing Handle Smart Doors be available?",
      content:
        "We’re targeting initial shipments to pre-order customers in the first quarter of 2025. Please note that this date may be subject to change due to manufacturing and logistics. We’ll keep you updated every step of the way.",
    },
    {
      title: "2. How can I cancel my pre-order?",
      content:
        "To cancel your pre-order, please reach out to our support team at [ *support email* ] or call us at [ *support phone number* ]. Alternatively, you can log in to your account and follow the instructions under the My Orders section to cancel.",
    },
    {
      title: "3. What is the pre-order process?",
      content:
        "The pre-order process is simple. Select your preferred Altima model (Core or Elite), customize your door with the options you need, review the details, and place a 30% deposit to secure your order. We’ll keep you informed as your order progresses toward delivery.",
    },
    {
      title: "4. What happens if there are production delays?",
      content:
        "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
    },
    {
      title: "5. What is the warranty on Altima Disappearing Handle Smart Doors?",
      content:
        "Our smart doors come with a 1-year standard warranty covering any manufacturing defects. We also offer an optional extended warranty for an additional 2 years, providing a total of 3 years of coverage for extra peace of mind.",
    },
    {
      title: "6. What support do you offer for installation?",
      content:
        "We provide professional installation support in select areas to ensure your Altima smart door is installed seamlessly. Contact our support team to *discuss installation options in your location and any associated costs.",
    },
    {
      title: "7. How are pre-order payments handled?",
      content: (
        <div>
          <p>
            This Warranty does <strong>not</strong> cover:
          </p>
          <ul className="grid gap-3">
            <li className="mt-3">
              Pre-order payments are securely processed through our parent company, csPILLAI Ventures Private Limited,
              ensuring a reliable and seamless experience.
            </li>
            <li>
              Your trust is our priority, and we adhere to the highest standards of security and professionalism in
              handling payments.
            </li>
            <li>
              For any assistance, feel free to contact us at{" "}
              <a href="mailto:customercare@smarthavensystems.com" className="text-[#FF3B30]">
                customercare@smarthavensystems.com
              </a>
              .
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "8. Do you offer financing or payment plans?",
      content:
        "Yes, we offer flexible financing and payment plans to make your purchase more manageable. Reach out to our finance department at [ *finance contact email/phone* ] for more details and to find a plan that suits your needs.",
    },
  ]

  const BenefitsData = [
    {
      title: "1. Discover Altima: Redefining Security",
      content: (
        <div className="text-center max-sm:text-left">
          <p className=" text-sm leading-6 text-[#FFFFFF99] 2xl:px-60">
            Altima Core and Elite combine advanced technology with elegant design to safeguard your spaces. Featuring
            biometric access, retractable handles, and premium materials, Altima is the ultimate solution for homes and
            offices. Choose Core for essential features or Elite for enhanced functionality tailored to your needs.
          </p>
        </div>
      ),
    },

    {
      title: "2. Why Preorder?",
      content: (
        <div className="text-center max-sm:text-left">
          <p className="text-sm text-white">Preordering Altima comes with exclusive benefits:</p>
          <ul className="grid gap-3 text-sm">
            <li className="mt-3">
              <b className="text-white">- Priority Access:</b> Be among the first to receive your Altima.
            </li>
            <li>
              <b className="text-white">- Exclusive Pricing:</b> Enjoy special preorder rates
            </li>
            <li>
              <b className="text-white">- Flexible Cancellations:</b> Cancel before shipment with clear terms.
            </li>
          </ul>
          <p className="mt-5 text-white">Reserve your Altima today and embrace smarter living!</p>
        </div>
      ),
    },
    {
      title: "3. How to Preorder",
      content: (
        <div className="text-center max-sm:text-left">
          <p className="text-sm text-white">Preordering is quick and simple:</p>
          <ul className="grid gap-3 text-sm">
            <li className="mt-3">
              <b className="text-[#ffffff]">1. Choose Your Model: </b> Select Altima Core or Elite.
            </li>
            <li>
              <b className="text-[#ffffff]">2. Reserve Your Spot:</b> Secure your order with a 30% deposit.
            </li>
            <li>
              <b className="text-[#ffffff]">3. Stay Updated:</b> Receive notifications about production and delivery.
            </li>
            <li>
              <b className="text-[#ffffff]">4. Complete Payment:</b> Pay the remaining balance before shipment.
            </li>
          </ul>
          <p className="mt-5 text-white">Your smart door journey starts here—preorder now!</p>
        </div>
      ),
    },
    {
      title: "4. Flexible Payment Options",
      content: (
        <div className="text-center text-sm max-sm:text-left">
          <p className="text-white">We ensure your payment experience is smooth:</p>
          <ul className="grid gap-3">
            <li className="mt-3">
              <b className="text-[#ffffff]">- Deposit: </b> A 30% deposit secures your order and is non-refundable,
              except for delays exceeding 6 months.
            </li>
            <li>
              <b className="text-[#ffffff]">- Final Payment:</b> Balance due before shipment, including optional
              add-ons.
            </li>
            <li>
              <b className="text-[#ffffff]">- Transparency:</b> Receive detailed invoices with no hidden charges.
            </li>
          </ul>
          <p className="mt-5 text-white">For delivery inquiries, contact our support team.</p>
        </div>
      ),
    },
    {
      title: "5. Reliable Shipping",
      content: (
        <div className="text-center text-sm max-sm:text-left">
          <p className="text-white">Your Altima smart door will reach you securely and on time:</p>
          <ul className="grid gap-3">
            <li className="mt-3">
              <b className="text-white">- Estimated Delivery: </b> 4–5 months after the preorder window closes.
            </li>
            <li>
              <b className="text-white">- Real-Time Updates:</b> Track your shipment every step of the way.
            </li>
            <li>
              <b className="text-white">- Safe Packaging:</b> Designed to arrive in perfect condition.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "6. Warranty & Support",
      content: (
        <div className="text-center max-sm:text-left">
          <p className="text-white">Altima products come with dependable coverage and assistance:</p>
          <ul className="grid gap-3 text-sm">
            <li className="mt-3 ">
              <b className="text-white">- 1-Year Warranty: </b> Covers manufacturing defects.
            </li>
            <li>
              <b className="text-white">- Extended Warranty:</b> Available on request for added peace of mind.
            </li>
            <li>
              <b className="text-white">- Expert Guidance:</b> Support for installation and troubleshooting.
            </li>
            <li>
              <b className="text-white">- 24/7 Assistance:</b> Our team is always here for you.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "7. Refund & Cancellation Policy",
      content: (
        <div className="text-center text-sm max-sm:text-left">
          <p>We’ve created a clear policy for your convenience:</p>
          <ul className="grid gap-3">
            <li className="mt-3">
              <b className="text-white">- Deposit Policy:</b> The 30% deposit is non-refundable unless delays exceed 6
              months.
            </li>
            <li>
              <b className="text-white">- Cancellations:</b> Cancel before shipment if needed.
            </li>
            <li>
              <b className="text-white">- Refund Timeline:</b> Refunds (where applicable) are processed within 14
              business days.
            </li>
          </ul>
          <p className="mt-5 text-white">For detailed terms, refer to our Refund Policy.</p>
        </div>
      ),
    },
    {
      title: "8. Ask a Question",
      content: (
        <div className="flex w-full flex-col  items-center justify-center text-sm">
          <div className="max-2xl:w-[70%] max-sm:w-[100%] md:w-[682px] ">
            <p className="w-full border-b border-[#FFFFFF1A]  pb-2 text-center text-base font-bold text-white">
              Find answers to common questions:
            </p>
            <ul className="grid  gap-3">
              <li className="mt-3">
                <b className="text-white">-What if my Altima is delayed?</b> If delays exceed 6 months, we’ll issue a
                full refund of your deposit.
              </li>
              <li>
                <b className="text-white">- Can I customize my Altima?</b> Yes, customization options can be discussed
                during the preorder process.
              </li>
              <li>
                <b className="text-white">- How do I track my order?</b> You’ll receive email updates and tracking
                details once shipped.
              </li>
            </ul>
            <p className="mt-5 border-b border-[#FFFFFF1A] pb-2 text-white">
              For detailed terms, refer to our Refund Policy.
            </p>
          </div>

          <NewContact />
        </div>
      ),
    },
    {
      title: "9. Contact Us",
      content: (
        <div className="text-center text-sm max-sm:text-left">
          <p className="border-b border-[#FFFFFF1A] pb-3 text-center text-base text-white">We’re here to help:</p>
          <ul className="grid gap-3">
            <li className="mt-3">
              <b className="text-white">- Email:</b> contact@smarthavensystems.com
            </li>
            <li>
              <b className="text-white">- Phone:</b> 08047360770
            </li>
            <li>
              <b className="text-white">- Address:</b> SmartHaven Systems, Sahara CHS, Shop no. 4, Sector 40, Seawoods,
              Navi Mumbai, 400706
            </li>
          </ul>
          <p className="mt-5 text-white">
            Our team is committed to making your Altima experience seamless and exceptional.
          </p>
        </div>
      ),
    },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = ["/Oak_00001.png", "/Mahogany_00000.png", "/Steel_00001.png", "/Glass_00001.png"] // Array of image paths

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const router = useRouter()

  const closeModal = () => setIsModalOpen(false)

  const handlePreOrderClick = () => {
    const user = localStorage.getItem("user")
    if (user) {
      router.push("/preorder")
    } else {
      router.push("/signin")
    }
  }

  const [openIndex, setOpenIndex] = useState<number>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index) // Close if the same index is clicked
  }

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const openVideoModal = () => {
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  return (
    <section className="bg-black">
      <Navbar />
      <section
        id="about"
        className="about-section relative grid w-full items-center justify-center bg-black lg:h-screen lg:py-16"
      >
        {/* Video Background */}
        <video
          autoPlay
          muted={false}
          loop
          className="absolute inset-0 h-full w-full object-cover opacity-80" // Adjust opacity as needed
        >
          <source src="/WhatsApp Video 2025-05-02 at 09.33.52.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        {/* Gradient overlay for better contrast */}

        {/* Content */}
        <motion.div
          className="paddings relative z-10 pb-10 max-sm:px-3" // Add z-10 to ensure content is above the video and overlay
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full items-center max-xl:mt-2 max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0 lg:items-center">
            <div className="flex w-full flex-col items-center justify-center">
              <div className="mb-4 flex items-center justify-center gap-2 rounded-lg bg-[#FFFFFF08] p-2 max-2xl:w-full xl:max-w-[519px]">
                <Image src="/Group 1037.png" width={24} height={24} alt="" className="sm:hidden" />
                <Image src="/Group 1037.png" width={20} height={20} alt="" className="max-sm:hidden" />
                <p className="text-sm text-[#FFFFFF] opacity-80 max-sm:text-[9px]">
                  POWERED BY INNOVATION FROM cs PILLAI®
                </p>
              </div>
              <p className="text-6xl font-bold text-[#FFFFFF] max-xl:text-center max-xl:text-3xl max-lg:mt-5 max-lg:text-4xl">
                Altima Smart Doors
              </p>

              <p
                className="mt-2 cursor-pointer text-center text-6xl font-bold text-[#FF3B30] max-xl:block max-xl:text-3xl lg:block"
                onClick={handlePreOrderClick}
              >
                PRE-ORDER NOW!
              </p>
              <p className="mt-4 text-center text-lg leading-7 text-[#ffffffcc] max-xl:text-sm xl:max-w-[643px]">
                Experience next-level security with Altima Core for unmatched safety or Altima Elite with smart home hub
                functionality.
              </p>

              <div className="-center mt-8 flex w-full justify-center gap-5 max-sm:gap-2">
                <motion.button
                  onClick={handlePreOrderClick}
                  className="whitespace-nowrap rounded-lg border border-[#FF3B30] bg-[#FFFFFF26] px-4 py-3 font-normal uppercase text-[#FFFFFF] max-sm:mb-3 max-sm:w-full max-sm:py-3 max-sm:text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Pre-Order now
                </motion.button>

                <motion.button
                  className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-[#FFFFFF99] bg-transparent px-4 py-3 font-normal uppercase text-[#FFFFFF] max-sm:mb-3 max-sm:w-full max-sm:py-2 max-sm:text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={openVideoModal} // Open modal
                >
                  Watch Video
                  <Image src="/Frame 48095395.png" width={26} height={26} alt="" />
                </motion.button>
              </div>
            </div>

            <div>{/* You can remove the Image component as it will be used as background */}</div>
          </div>
        </motion.div>
      </section>

      <section className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="w-full xl:py-10">
          {/* <div className="flex w-full flex-col items-center justify-center">
            <p className="text-[#FFFFFF99] max-xl:text-xs lg:text-sm">Benefits</p>
            <p className="mb-4 mt-2 text-xl font-semibold uppercase  tracking-tight text-white opacity-80 max-xl:text-base max-sm:my-2  md:text-xl md:leading-10 xl:text-3xl">
              Why Pre-Order?
            </p>
          </div> */}

          <div className=" w-full rounded-md border border-[#FFFFFF1A]">
            {BenefitsData.map((benefits, id) => (
              <AccordionTwo
                key={id}
                title={benefits.title}
                content={benefits.content}
                isOpen={openIndex === id}
                onToggle={() => handleToggle(id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-10">
          <div className="grid-col-2 grid w-full justify-between gap-10  sm:flex">
            <div className="md:w-full ">
              <div className="flex flex-col items-center">
                <p className="flex text-lg font-normal  text-[#FFFFFF99] max-xl:text-xs lg:text-lg">
                  Innovative Features
                </p>
                <p className=" mb-2 mt-2 text-xl font-bold  tracking-tight text-white  opacity-80 max-xl:text-base max-sm:my-2   md:text-xl md:leading-10 xl:text-3xl">
                  SMART AND VERSATILE
                </p>

                <p className="mb-4 flex text-center text-base font-normal text-[#FFFFFF99]   max-sm:text-center  max-sm:text-sm  max-sm:leading-6 lg:text-base">
                  Revolutionize your space with Altima. Designed for
                  <br className="max-sm:hidden" /> convenience, security, and innovation, it offers
                  <br className="max-sm:hidden" /> features tailored to your needs:
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 max-xl:my-4 max-sm:grid max-sm:grid-cols-1 md:my-4">
                <div className=" w-full rounded-lg bg-[#FFFFFF0D] px-6 py-10 max-sm:p-6 md:h-[300px] md:w-[347px]">
                  <Image src="/Fingerprint copy.png" width={50} height={50} alt="" className="max-sm:hidden" />
                  <Image src="/Fingerprint copy.png" width={32} height={32} alt="" className="sm:hidden" />
                  <p className="py-4 text-lg font-bold text-[#FFFFFFcc] max-sm:text-base">Advanced Security</p>
                  <p className="text-base text-[#FFFFFF99] max-sm:text-sm max-sm:leading-[22.4px]">
                    Multi-factor authentication and real-time monitoring ensure the highest level of protection for your
                    home.
                  </p>
                </div>

                <div className=" w-full rounded-lg bg-[#FFFFFF0D] px-6 py-10 max-sm:p-6 md:h-[300px] md:w-[347px]">
                  <Image src="/Aperture copy.png" width={50} height={50} alt="" className="max-sm:hidden" />
                  <Image src="/Aperture copy.png" width={32} height={32} alt="" className="sm:hidden" />
                  <p className="py-4 text-lg font-bold text-white opacity-80 max-sm:text-base">Sleek Design</p>
                  <p className="text-base leading-[22.4px] text-[#FFFFFF99] max-sm:text-sm">
                    A minimalist and customizable design seamlessly integrates into any space while enhancing visual
                    appeal.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 max-sm:grid max-sm:grid-cols-1">
                <div className=" w-full rounded-lg bg-[#FFFFFF0D] px-6 py-10  max-sm:p-6 md:h-[300px] md:w-[347px]">
                  <Image src="/HouseLine copy.png" width={50} height={50} alt="" className="max-sm:hidden" />
                  <Image src="/HouseLine copy.png" width={32} height={32} alt="" className="sm:hidden" />
                  <p className="py-4 text-lg font-bold text-white opacity-80 max-sm:text-base">
                    Smart Home Hub (Elite Only)
                  </p>
                  <p className=" text-base leading-[22.4px] text-[#FFFFFF99] max-sm:text-sm">
                    Easily manage your entire smart home ecosystem from one central hub, located at your doorway.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#FFFFFF0D] px-6 py-10 max-sm:p-6 md:h-[300px] md:w-[347px]">
                  <Image src="/BatteryCharging copy.png" width={50} height={50} alt="" className="max-sm:hidden" />
                  <Image src="/BatteryCharging copy.png" width={32} height={32} alt="" className="sm:hidden" />
                  <p className="py-4 text-lg font-bold text-white opacity-80 max-sm:text-base">
                    Energy Efficiency (Elite Only)
                  </p>
                  <p className="text-base leading-[22.4px] text-[#FFFFFF99] max-sm:text-sm">
                    Advanced automation optimizes energy usage, reducing waste and promoting sustainability in your
                    everyday life.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#FFFFFF0D] px-6 py-10 max-sm:p-5 md:h-[300px] md:w-[347px]">
                  <Image src="/LockLaminated copy.png" width={50} height={50} alt="" className="max-sm:hidden" />
                  <Image src="/LockLaminated copy.png" width={32} height={32} alt="" className="sm:hidden" />
                  <p className="py-4 text-lg font-bold text-white opacity-80 max-sm:text-base">
                    Enhanced Safety Features
                  </p>
                  <p className="text-base leading-[22.4px] text-[#FFFFFF99] max-sm:text-sm">
                    Integrated systems detect hazards like gas leaks or smoke, sending alerts and unlocking doors
                    safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="specifications"
        className="paddings flex w-full items-center  justify-center bg-[#151515] max-sm:px-3 "
      >
        <div className="  w-full justify-between    md:py-10">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div className="flex w-full flex-col items-center justify-center">
              <p className=" my-3 text-center text-lg font-bold capitalize  text-white opacity-80 max-sm:mb-3  max-sm:text-base md:text-xl md:leading-10 xl:text-3xl">
                OUR MODELS
              </p>

              <p className="font-normal leading-6 text-[#FFFFFF99] max-xl:text-sm max-xl:leading-[19px] max-sm:text-center md:text-center xl:w-[1118px]">
                At Altima, we bring innovation and security together through our range of advanced smart doors designed
                for a connected lifestyle. Each model combines cutting-edge technology with sleek aesthetics, offering
                intelligent solutions for modern living. From robust security features to elegant design, Altima models
                redefine how homes and businesses safeguard their spaces, ensuring a seamless blend of safety, style,
                and convenience.
              </p>

              {/* <div className="grid w-full rounded-2xl bg-[#080808] p-3 max-sm:p-1">
                <Image src="/video.png" width={1312} height={60} alt="" className="p-2 max-sm:hidden" />
                <Image src="/doorVid.png" width={1312} height={60} alt="" className="p-1 md:hidden" />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section id="other-products" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between md:py-10">
          <div className="flex w-full flex-col items-center justify-center sm:hidden">
            <p className="flex  text-2xl  font-normal  text-[#FFFFFF99]  max-xl:text-xs lg:text-lg">Our Models</p>
            <p className=" mb-6 mt-3 text-xl font-bold leading-none  tracking-tight text-[#ffffffcc] opacity-80 max-xl:text-base md:text-xl xl:text-3xl">
              ALTIMA Core
            </p>
          </div>
          <div className="flex w-full justify-between max-xl:grid max-sm:grid max-sm:gap-5  md:gap-20">
            <div className="overflow-hidden rounded-md sm:h-[620px]">
              <ImageCarousel />
            </div>
            <div className="">
              <p className="flex  text-lg  font-normal  text-[#FFFFFF99]  max-xl:hidden max-sm:text-sm xl:text-lg">
                Our Models
              </p>
              <p className="mb-6 mt-2 text-base font-bold leading-none tracking-tight text-white opacity-80 max-xl:hidden md:text-xl xl:text-3xl">
                ALTIMA Core
              </p>
              {/* <div>
                <div className="items-center justify-between bg-[#151515] px-4 py-2 text-black max-xl:w-full max-xl:justify-center xl:flex xl:max-w-[522px]">
                  <ul className="list-inside ">
                    <li className="py-2 text-[#FFFFFF] opacity-80  max-sm:text-sm">Advanced Home Control </li>
                    <li className=" text-[#FFFFFF] opacity-80  max-sm:text-sm">All Pro features, plus:</li>
                  </ul>

                  <p className="text-2xl font-semibold text-[#FF4F45]  max-xl:mt-3 max-xl:text-xl">
                    ₹49,500 + <span className="text-base font-normal">Taxes</span>
                  </p>
                </div>
              </div> */}
              <ul className="mt-6   max-xl:text-sm md:mb-4">
                <li className="pb-3 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Security Level:</span> Very High
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Smart Lock Type: </span> Biometric Lock with Numeric Keypad
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Home Integration:</span> Limited
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">User Profiles: </span> Multiple
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Remote Access: </span> Yes
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Design: </span> Sleek and Modern
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Special Features: </span> Emergency Key Override, Auto-Locking
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Target Audience: </span> Homeowners
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">External Power Option: </span> Backup Battery
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Voice Assistant Control: </span> No
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Smart Home Automation: </span> No
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Energy Management: </span> No
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Security Alerts: </span> Basic Alerts
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Intercom Functionality: </span> No
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Security Level:</span> Very High
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Embedded in Door Types: </span> Compatible with Metal, and Wood
                  Doors
                </li>
              </ul>

              <div className="flex w-full justify-between  gap-4 bg-[#FFFFFF0D] px-4 py-3 max-sm:flex-col xl:items-center">
                <ul className=" flex list-inside  items-center gap-2 pl-2">
                  <a
                    href="A4 - 1.pdf"
                    className=" text-[#FFFFFFcc] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30] max-sm:text-sm"
                    download
                  >
                    Core vs. Elite
                  </a>
                  <motion.img
                    src="/FileArrowDown.png"
                    className="h-8 w-8 max-sm:h-6 max-sm:w-6"
                    height={32}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                </ul>
                <div>
                  <ul className=" flex list-inside  items-center gap-2 pl-2">
                    <a
                      href="Altima_ 10 Must-Knows!_.pdf"
                      className=" text-[#FFFFFFcc] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30] max-sm:text-sm"
                      download
                      target="_blank"
                    >
                      Altima: 10 Must-Knows!
                    </a>
                    <motion.img
                      src="/FileArrowDown.png"
                      className="h-8 w-8 max-sm:h-6 max-sm:w-6"
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                  </ul>
                </div>
              </div>
              <div className="mt-8 max-sm:flex  max-sm:w-full max-sm:justify-center">
                <motion.button
                  onClick={handlePreOrderClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="gap-2   rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-5 py-2 font-normal uppercase text-[#FFFFFF] max-sm:px-10 max-sm:py-2 max-sm:text-sm "
                >
                  Pre-Order now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="other-products" className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full justify-between    xl:py-10">
          <div className="grid-col-2 grid w-full justify-between  max-xl:gap-5 xl:flex xl:gap-20">
            <div className="max-xl:flex max-xl:w-full max-xl:flex-col max-xl:items-center max-xl:justify-center  ">
              <p className="flex  text-lg    font-normal  text-[#FFFFFF99] max-xl:text-xs lg:text-lg">Our Models</p>
              <p className=" mb-6 mt-2 text-base font-bold leading-none tracking-tight text-white opacity-80 max-xl:mt-3 md:text-xl xl:text-3xl">
                ALTIMA Elite
              </p>
              {/* <div>
                <div className="flex items-center justify-between gap-6 bg-[#000000] px-4 py-2 text-black max-xl:hidden xl:max-w-[522px]">
                  <ul className="list-inside ">
                    <li className=" text-[#FFFFFFcc] max-sm:text-xs">Ultimate Smart Home Hub </li>
                    <li className=" text-[#FFFFFFcc] max-sm:text-xs">All Pro features, plus</li>
                  </ul>

                  <p className="text-2xl font-bold text-[#FF4F45] max-sm:text-lg">
                    ₹99,000 + <span className="text-sm font-normal">Taxes</span>
                  </p>
                </div>
              </div> */}
              <ul className="mb-6 mt-6 list-inside   max-xl:hidden">
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Level: </span> Very High
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Smart Lock Type: </span> Biometric Lock with Numeric Keypad
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Home Integration: </span> Extensive
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">User Profiles: </span> Extensive Customization
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Remote Access: </span> Yes
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Design: </span> Sleek and Modern
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Special Features: </span> Smart Home Hub, Analytics
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Target Audience: </span> Smart Home Enthusiasts
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">External Power Option: </span> Smart Home Backup Integration
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Voice Assistant Control: </span> Yes, Alexa & Google Assistant
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Smart Home Automation: </span> Full Integration
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Energy Management: </span> Yes, Smart Energy Monitoring
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Alerts: </span> Real-Time Mobile Alerts
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Intercom Functionality: </span> Built-in Intercom System
                </li>
                <li className="pb-4 text-[#FFFFFFcc] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Embedded in Door Types: </span> Compatible with Metal, Wood,
                  and Glass Doors
                </li>
              </ul>

              {/* <ul className="my-6 list-inside list-disc">
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  Perfect for smart home beginners and tech-savvy home or office owners.
                </li>
              </ul> */}

              <div className="flex w-full justify-between  gap-4 bg-[#FFFFFF0D] px-4 py-3 max-sm:flex-col xl:items-center">
                <ul className=" flex list-inside  items-center gap-2 pl-2">
                  <a
                    href="A4 - 1.pdf"
                    className=" text-[#FFFFFFcc] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30] max-sm:text-sm"
                    download
                  >
                    Core vs. Elite
                  </a>
                  <motion.img
                    src="/FileArrowDown.png"
                    className="h-8 w-8 max-sm:h-6 max-sm:w-6"
                    height={32}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                </ul>
                <div>
                  <ul className=" flex list-inside  items-center gap-2 pl-2">
                    <a
                      href="Altima_ 10 Must-Knows!_.pdf"
                      className=" text-[#FFFFFFcc] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30] max-sm:text-sm"
                      download
                      target="_blank"
                    >
                      Altima: 10 Must-Knows!
                    </a>
                    <motion.img
                      src="/FileArrowDown.png"
                      className="h-8 w-8 max-sm:h-6 max-sm:w-6"
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                  </ul>
                </div>
              </div>
              <div className="mt-8 max-xl:hidden  max-xl:w-full max-xl:justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="gap-2 rounded-lg  border border-[#FFFFFF99] bg-[#FFFFFF26] px-5 py-2 font-normal uppercase text-[#FFFFFF] max-xl:hidden max-xl:py-2 max-xl:text-sm "
                  onClick={handlePreOrderClick}
                >
                  Pre-Order now
                </motion.button>
              </div>
            </div>
            <div className=" max-xl:hidden">
              <VideoCarousel />
            </div>
            <div className="xl:hidden">
              <VideoCarousel />
            </div>
            <div className="xl:hidden xl:w-[403]">
              {/* <div>
                <div className=" w-full items-center justify-center bg-[#000000] px-4 py-4 text-black">
                  <ul className="list-inside text-[#FFFFFF] opacity-80 max-sm:text-sm">
                    <li className=" ">Ultimate Smart Home Hub </li>
                    <li className=" mt-2 ">All Pro features, plus</li>
                  </ul>

                  <p className="mt-3 text-2xl font-bold text-[#FF4F45] opacity-80 max-sm:text-xl">
                    ₹99,000 + <span className="text-sm font-normal">Taxes</span>
                  </p>
                </div>
              </div> */}
              <ul className="mb-6 mt-6 list-inside max-sm:text-sm">
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Security Level: </span> Very High
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Smart Lock Type: </span> Biometric Lock with Numeric Keypad
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Home Integration: </span> Extensive
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">User Profiles: </span> Extensive Customization
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Remote Access: </span> Yes
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Design: </span> Sleek and Modern
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Special Features: </span> Smart Home Hub, Analytics
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Target Audience: </span> Smart Home Enthusiasts
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">External Power Option: </span> Smart Home Backup Integration
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Voice Assistant Control: </span> Yes, Alexa & Google Assistant
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Smart Home Automation: </span> Full Integration
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Energy Management: </span> Yes, Smart Energy Monitoring
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Security Alerts: </span> Real-Time Mobile Alerts
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Intercom Functionality: </span> Built-in Intercom System
                </li>
                <li className="pb-4 text-[#FFFFFFcc] ">
                  <span className="text-[#FFFFFF80]">Embedded in Door Types: </span> Compatible with Metal, Wood,
                  and Glass Doors
                </li>
              </ul>

              <div className="flex w-full justify-between  gap-4 bg-[#FFFFFF0D] px-4 py-3 max-sm:flex-col xl:items-center">
                <ul className=" flex list-inside  items-center gap-2 pl-2">
                  <a
                    href="A4 - 1.pdf"
                    className=" text-[#FFFFFFcc] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30] max-sm:text-sm"
                    download
                  >
                    Core vs. Elite
                  </a>
                  <motion.img
                    src="/FileArrowDown.png"
                    className="h-8 w-8 max-sm:h-6 max-sm:w-6"
                    height={32}
                    alt=""
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  />
                </ul>
                <div>
                  <ul className=" flex list-inside  items-center gap-2 pl-2">
                    <a
                      href="Altima_ 10 Must-Knows!_.pdf"
                      className=" text-[#FFFFFFcc] underline transition-all duration-300 ease-in-out hover:text-[#FF3B30] max-sm:text-sm"
                      download
                      target="_blank"
                    >
                      Altima: 10 Must-Knows!
                    </a>
                    <motion.img
                      src="/FileArrowDown.png"
                      className="h-8 w-8 max-sm:h-6 max-sm:w-6"
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                  </ul>
                </div>
              </div>

              {/* <ul className="my-6 list-inside list-disc">
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  Perfect for smart home beginners and tech-savvy home or office owners.
                </li>
              </ul> */}

              <div className="max-xl:mt-4  max-xl:flex max-xl:w-full max-sm:justify-center">
                <motion.button
                  onClick={handlePreOrderClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="gap-2   rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-5 py-2 font-normal uppercase text-[#FFFFFF] max-sm:px-10 max-sm:py-2 max-sm:text-sm "
                >
                  Pre-Order now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tech-specs" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="w-full     xl:py-10">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full gap-4 md:flex md:items-stretch md:justify-between xl:py-10">
              {/* Technical Specifications Card */}
              <div className="flex w-full flex-col items-start justify-between rounded-lg border border-[#FFFFFF1A] p-6">
                <div>
                  <p className="mb-2 text-[32px] font-semibold text-[#FFFFFF] max-xl:text-base">
                    Technical Specifications
                  </p>
                  <p className="mb-2 text-[#FFFFFF80] xl:text-xl">
                    This document contains all the major information you need concerning the technical specifications of
                    both Altima core and Altima elite.
                  </p>
                </div>
                <motion.button
                  onClick={handlePreOrderClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 self-start rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-5 py-2 font-normal uppercase text-[#FFFFFF] max-sm:px-4 max-sm:py-2 max-sm:text-sm"
                >
                  Download Tech. Specs
                  <img src="/basil_document-solid.png" height="24" width="24" alt="Document icon" />
                </motion.button>
              </div>

              {/* Product Manual Card */}
              <div className="flex w-full flex-col items-start justify-between rounded-lg border border-[#FFFFFF1A] p-6 max-sm:mt-4">
                <div>
                  <p className="mb-2 text-[32px] font-semibold text-[#FFFFFF] max-xl:text-base">Product Manual</p>
                  <p className="mb-2 text-[#FFFFFF80] xl:text-xl">
                    This document contains all the major information you need concerning the manual of both Altima core
                    and Altima elite.
                  </p>
                </div>
                <motion.button
                  onClick={handlePreOrderClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 self-start rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-5 py-2 font-normal uppercase text-[#FFFFFF] max-sm:px-4 max-sm:py-2 max-sm:text-sm"
                >
                  Download Product Manual
                  <img src="/basil_document-solid.png" height="24" width="24" alt="Document icon" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="other-products" className="paddings  w-full bg-[#030303] max-sm:px-3 ">
        <div className="w-full     xl:py-10">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg text-[#FFFFFF99] max-sm:text-sm">Pre-order Now - Limited Units Available.</p>
            <p className="custom-text first-word-color my-4 flex border-[#FFFFFF1A] pb-4 text-center text-3xl font-bold text-[#FFFFFF] opacity-80 max-xl:border-b max-xl:text-2xl md:w-[642px]">
              5,000 units available in the first pre-order batch.
            </p>

            <div className=" w-full justify-between max-xl:px-6 md:flex xl:py-10">
              <div className="flex items-start justify-center gap-3 border-[#FFFFFF1A]  max-xl:pb-2 max-sm:border-b md:border-r md:pr-6">
                <Image src="/SealPercent.png" width={50} height={50} alt="" />
                <div>
                  <p className="mb-2 text-[22px] font-semibold text-[#FFFFFFcc] max-xl:text-sm xl:w-[223px]">
                    50% Discount for Preorders:
                  </p>
                  <p className="text-[#FFFFFF99] max-xl:text-sm max-xl:leading-[22.4px]">
                    Pre-order customers can enjoy a 50% discount exclusively for placing preorders on the
                    first batch of units.
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-center gap-3 border-[#FFFFFF1A] max-sm:border-b  max-sm:pb-2 max-sm:pt-3 md:border-r md:px-6">
                <Image src="/Upload.png" width={50} height={50} alt="" />
                <div>
                  <p className="mb-2 text-[22px] font-semibold  text-[#FFFFFFcc] max-xl:text-sm xl:w-[223px]">
                    Free Extended Warranty Upgrade:
                  </p>
                  <p className="text-[#FFFFFF99] max-xl:leading-[22.4px]  max-sm:text-sm">
                    All pre-orders come with a lifetime free software upgrade, ensuring your device remains updated with
                    the latest smart features.
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-center gap-3 max-xl:mb-6 max-sm:pt-3 md:pl-6">
                <Image src="/ShieldCheckered.png" width={50} height={50} alt="" />
                <div>
                  <p className="mb-2 text-[22px] font-semibold text-[#FFFFFFcc] max-xl:text-sm xl:w-[223px]">
                    Free Extended Warranty Upgrade:
                  </p>
                  <p className="text-[#FFFFFF99] max-xl:leading-[22.4px] max-sm:text-sm">
                    Pre-order now and get an extended warranty upgrade for additional peace of mind, free of charge.
                  </p>
                </div>
              </div>
            </div>

            {/* <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex gap-2  rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 font-normal uppercase text-[#FFFFFF] max-sm:py-2 max-sm:text-sm"
              onClick={handlePreOrderClick}
            >
              Pre-Order now
            </motion.button> */}
          </div>
        </div>
      </section>

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full justify-between    xl:py-4">
          <div className=" flex flex-col items-center justify-center   max-xl:gap-5">
            <div className="">
              <p className=" text-center text-lg font-normal  leading-none tracking-tight text-[#FFFFFF99] max-xl:text-xs md:text-lg xl:mb-4 2xl:text-lg">
                Our Vision
              </p>
              <p className="text-center text-xl font-bold  leading-none tracking-tight text-[#ffffffcc] max-xl:text-base max-sm:my-2 md:text-xl xl:mb-6 xl:mt-2 2xl:text-3xl">
                Altima’s Vision
              </p>

              <p className="text-center text-base  leading-[22.4px] text-[#FFFFFF99]  max-sm:text-sm 2xl:text-[18px]">
                To make every entryway smart, secure, and seamlessly connected, <br className="max-sm:hidden" />{" "}
                redefining the future of safety and convenience for homes <br className="max-sm:hidden" />
                and businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full     xl:py-10">
          <div className="flex flex-col items-center justify-center">
            <p className=" text-[#FFFFFF99] max-xl:text-xs">Timeline</p>
            <p className="flex text-center text-3xl font-semibold text-[#FFFFFF] max-xl:my-2  max-xl:text-base  xl:my-6">
              Production Timeline
            </p>

            <Image src="/Frame 48095551 copy.png" width={549} height={64} alt="" className="py-4 md:hidden" />
            <Image src="/Frame 48095442.png" width={1216} height={64} alt="" className="py-10 max-sm:hidden" />
          </div>
        </div>
      </section>

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full     py-10">
          <div className="flex flex-col">
            <p className=" text-[#FFFFFF99]">FAQs</p>
            <p className="my-4 flex text-center text-[32px]  font-bold text-[#FFFFFFcc] max-md:text-2xl md:w-[642px]">
              Community Q&A
            </p>
          </div>

          <div className=" w-full rounded-md border border-[#FFFFFF1A] ">
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.title}
                content={faq.content}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <ContactUs /> */}

      {isVideoModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#151515] bg-opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeVideoModal}
        >
          <motion.div
            className="relative w-full max-w-xl rounded-lg bg-[#151515] bg-opacity-90 p-6 shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          >
            <button
              className="absolute right-2 top-2 z-50 rounded-full bg-[#FF3B30] p-3 text-white"
              onClick={closeVideoModal}
            >
              <LiaTimesSolid className="z-50 cursor-pointer" />
            </button>

            {/* Single video element replacing VideoCarousel */}
            <video src="/WhatsApp Video 2025-05-02 at 09.33.52.mp4" controls autoPlay className="w-full rounded-lg">
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}

      <MainFooter />

      <Footer />
    </section>
  )
}
