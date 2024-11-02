"use client"
import { Metadata } from "next"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

import Image from "next/image"
import Link from "next/link"
import Navbar from "components/Navbar/Navbar"
import { useEffect } from "react"
import AuthProviders from "components/ProvidersComponents/AuthProviders"
import Accordion from "components/Accordion/Accordion"
import { motion, AnimatePresence } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"

export default function Web() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate elements once
    })
  }, [])

  const faqData = [
    {
      title: "1. When will Altima Disappearing Handle Smart Doors be available?",
      content:
        "We’re targeting initial shipments to pre-order customers in Q1 2025. Please note that this date may be subject to change due to manufacturing and logistics. We’ll keep you updated every step of the way.",
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
      title: "7. Do you offer financing or payment plans?",
      content:
        "Yes, we offer flexible financing and payment plans to make your purchase more manageable. Reach out to our finance department at [ *finance contact email/phone* ] for more details and to find a plan that suits your needs.",
    },
  ]

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section className="bg-black">
      <Navbar />
      <section id="about" className="about-section grid w-full bg-black     lg:h-screen lg:py-16">
        <motion.div
          className="paddings pb-10 max-sm:px-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full items-center  max-sm:justify-center ">
            <div>
              <div className="mb-4 flex items-center justify-center gap-2 rounded-lg bg-[#FFFFFF1A] p-2 md:max-w-[519px]">
                <Image src="/Vector.png" width={24} height={24} alt="" />
                <p className="text-sm text-[#FFFFFF] max-sm:text-[9px]">
                  POWERED BY INNOVATION FROM SUSMO AND OTHER DRIVES
                </p>
              </div>
              <p className="  flex text-7xl  font-bold text-[#FFFFFF] max-sm:text-2xl ">ALTIMA: THE SMART </p>
              <p className="  flex text-7xl  font-bold text-[#FFFFFF] max-sm:text-2xl ">DOOR & HOME HUB –</p>
              <p className="  flex text-7xl  font-bold text-[#FF3B30] max-sm:text-3xl ">PRE-ORDER NOW!</p>

              <p className="mt-10 text-xl text-white max-sm:mt-3  max-sm:text-base md:w-[600px]">
                Experience the next level of convenience and security with Altima – a revolutionary smart door and home
                hub in one. Featuring a disappearing handle and cutting-edge technology, Altima seamlessly integrates
                security and smart home functions, perfect for any space – be it home, office, or beyond.
              </p>
              <div className="max-sm:my-5 md:hidden">
                <motion.img
                  src="/Web.1889 (1).png"
                  alt=""
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  width={633}
                  height={583}
                />
              </div>
              <div className="mt-4 flex w-full gap-5 max-sm:gap-2 ">
                <motion.button
                  className="font-regular whitespace-nowrap rounded-lg border border-[#FF3B30] bg-[#FFFFFF26] px-4 py-3 uppercase text-[#FFFFFF] max-sm:mb-3  max-sm:w-full max-sm:py-3 max-sm:text-xs "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Pre-Order now
                </motion.button>

                <motion.button
                  className="font-regular flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-[#FFFFFF99] bg-transparent px-4 py-3 uppercase text-[#FFFFFF] max-sm:mb-3  max-sm:w-full max-sm:py-2 max-sm:text-xs "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Watch Video
                  <Image src="/youtube.png" width={24} height={24} alt="" />
                </motion.button>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250" className="">
              {/* You can remove the Image component as it will be used as background */}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="how-to-buy" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <motion.div
          className="  w-full justify-between py-10"
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <div className="flex w-full justify-between  sm:flex">
            <div className="w-full items-center justify-center max-sm:w-full">
              <p className="font-regular  text-center  text-2xl  text-[#FFFFFF99]  lg:text-2xl">Benefits</p>
              <p className=" font-regular mb-4  mt-2  text-center   text-xl leading-none tracking-tight text-white max-sm:my-4 md:text-xl xl:text-3xl">
                Why Pre-Order?
              </p>
              <div className="grid grid-cols-4 gap-6 max-sm:grid-cols-1 ">
                <div className=" w-full rounded-lg bg-[#080808] p-5">
                  <Image src="/SketchLogo.png" width={48} height={48} alt="" className="max-sm:hidden" />
                  <Image src="/SketchLogo.png" width={35} height={35} alt="" className="sm:hidden" />
                  <p className="py-2 text-lg text-white max-md:text-sm">BE FIRST</p>
                  <p className=" text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Be the first to experience
                    <br className="max-sm:hidden" /> this groundbreaking
                    <br className="max-sm:hidden" /> innovation.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-5">
                  <Image src="/CurrencyInr.png" width={48} height={48} alt="" className="max-sm:hidden" />
                  <Image src="/CurrencyInr.png" width={35} height={35} alt="" className="sm:hidden" />
                  <p className="py-2 text-lg text-white max-md:text-sm">EXCLUSIVE PRICING</p>
                  <p className=" text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Secure special <br className="max-sm:hidden" /> introductory pricing
                    <br className="max-sm:hidden" />
                    exclusively for pre-order
                    <br className="max-sm:hidden" /> customers..
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-5 ">
                  <Image src="/Wrench.png" width={48} height={48} alt="" className="max-sm:hidden" />
                  <Image src="/Wrench.png" width={35} height={35} alt="" className="sm:hidden" />
                  <p className="py-2 text-lg text-white max-md:text-sm">PRIORITY INSTALLATION</p>
                  <p className=" text-sm text-[#FFFFFF99] max-md:text-xs">
                    Enjoy priorityinstallation <br className="max-sm:hidden" /> and be among the first to
                    <br className="max-sm:hidden" />
                    have it set up.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-5">
                  <Image src="/DiamondsFour.png" width={48} height={48} alt="" className="max-sm:hidden" />
                  <Image src="/DiamondsFour.png" width={35} height={35} alt="" className="sm:hidden" />
                  <p className="py-2 text-lg text-white max-md:text-sm">LIMITED EDITION</p>
                  <p className=" text-sm text-[#FFFFFF99] max-sm:text-xs">
                    The first 100 pre-orders " <br className="max-sm:hidden" /> receive a limited-edition
                    <br className="max-sm:hidden" /> Founder's Edition" Altima.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="how-to-buy" className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-10">
          <div className="grid-col-2 grid w-full justify-between gap-10  sm:flex">
            <div className="md:w-full ">
              <div className="flex flex-col items-center">
                <p className="font-regular  flex    text-2xl  text-[#FFFFFF99] max-sm:text-lg lg:text-2xl">
                  Our Features
                </p>
                <p className=" font-regular mb-2 mt-2  text-xl tracking-tight  text-white max-sm:my-2   md:text-xl md:leading-10 xl:text-3xl">
                  COMPACT AND FUNCTIONAL
                </p>

                <p className="font-regular mb-6 flex text-center text-base   text-[#FFFFFF99]  max-sm:text-center  max-sm:text-sm lg:text-base">
                  Transform your room with Altima into a minimalist, <br className="max-sm:hidden" /> modern space with
                  ease and speed
                </p>
                {/* <motion.button
                  className="font-regular rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-3 max-sm:text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Pre-Order now
                </motion.button> */}
              </div>
              <div className="flex items-center justify-center gap-4 max-sm:grid max-sm:grid-cols-1">
                <div className=" w-full rounded-lg bg-[#FFFFFF0D] px-6 py-10  max-sm:p-5 md:h-[263px] md:w-[347px]">
                  <Image src="/HouseLine.png" width={50} height={50} alt="" className="max-sm:hidden" />
                  <Image src="/HouseLine.png" width={40} height={40} alt="" className="sm:hidden" />
                  <p className="py-4 text-lg text-white max-sm:text-sm">Smart Home Hub</p>
                  <p className=" text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Control your entire <br className="max-sm:hidden" /> smart home ecosystem{" "}
                    <br className="max-sm:hidden" /> directly from your <br className="max-sm:hidden" /> doorway.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#FFFFFF0D] px-6 py-10 max-sm:p-5 md:h-[263px] md:w-[347px]">
                  <Image src="/BatteryCharging.png" width={50} height={50} alt="" className="max-sm:hidden" />
                  <Image src="/BatteryCharging.png" width={40} height={40} alt="" className="sm:hidden" />
                  <p className="py-4 text-lg text-white max-sm:text-sm">ENERGY MANAGEMENT</p>
                  <p className="text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Optimize your home's <br className="max-sm:hidden" /> climate control for{" "}
                    <br className="max-sm:hidden" /> maximum efficiency.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 max-sm:mt-4 max-sm:grid max-sm:grid-cols-1 md:my-4">
                <div className=" w-full rounded-lg bg-[#FFFFFF0D] px-6 py-10 max-sm:p-5 md:h-[263px] md:w-[347px]">
                  <Image src="/Fingerprint.png" width={50} height={50} alt="" className="max-sm:hidden" />
                  <Image src="/Fingerprint.png" width={40} height={40} alt="" className="sm:hidden" />
                  <p className="py-4 text-lg text-white max-sm:text-sm">ADVANCED SECURITY</p>
                  <p className="text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Multi-factor <br className="max-sm:hidden" /> authentication and real-
                    <br className="max-sm:hidden" />
                    time monitoring for <br className="max-sm:hidden" /> unmatched safety.
                  </p>
                </div>

                <div className=" w-full rounded-lg bg-[#FFFFFF0D] px-6 py-10 max-sm:p-5 md:h-[263px] md:w-[347px]">
                  <Image src="/Aperture.png" width={50} height={50} alt="" className="max-sm:hidden" />
                  <Image src="/Aperture.png" width={40} height={40} alt="" className="sm:hidden" />
                  <p className="py-4 text-lg text-white max-sm:text-sm">SLEEK DESIGN</p>
                  <p className="text-sm text-[#FFFFFF99] max-sm:text-xs">
                    Elevate your home <br className="max-sm:hidden" /> aesthetic, with our{" "}
                    <br className="max-sm:hidden" /> minimalist customizable <br className="max-sm:hidden" /> design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="specifications" className="paddings   w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-10">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div>
              <p className="font-regular   text-center  text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">
                Specifications
              </p>
              <p className=" font-regular my-3  text-center text-lg text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Comprehensive Product Specification
              </p>

              <p className="font-regular mb-3 w-full text-[#FFFFFF99] max-sm:leading-7 md:text-center">
                Altima Door is a state-of-the-art smart door system that integrates advanced
                <br className="max-sm:hidden" />
                technology with home entry. It functions as both a secure entry point and a smart home{" "}
                <br className="max-sm:hidden" />
                hub, offering unmatched control, security, and energy management capabilities.
              </p>
              <div className="grid w-full rounded-2xl bg-[#080808] p-3 max-sm:p-1">
                <Image src="/video.png" width={1312} height={60} alt="" className="p-2 max-sm:hidden" />
                <Image src="/doorVid.png" width={1312} height={60} alt="" className="p-1 md:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="specifications" className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full     py-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-regular  mb-6 flex  text-5xl  text-[#FFFFFF] max-md:text-lg">Modern, Stylish, Unique</p>
            <motion.a
              href="/preorder"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="font-regular flex  gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-2 max-sm:text-xs "
            >
              Pre-Order now
            </motion.a>
          </div>
        </div>
      </section> */}

      <section id="other-products" className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full justify-between md:py-10">
          <div className="flex w-full flex-col items-center justify-center sm:hidden">
            <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-sm:text-lg lg:text-2xl">
              our <br />
              Models
            </p>
            <p className=" font-regular mb-6 mt-3    text-xl leading-none tracking-tight text-white md:text-xl xl:text-5xl">
              ALTIMA Core
            </p>
          </div>
          <div className="flex w-full justify-between max-sm:grid max-sm:gap-5  md:gap-20">
            <div>
              <motion.img
                src="https://github.com/Dekatron322/altima/blob/main/public/altimaCore.png?raw=true"
                width={633}
                height={583}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
            </div>
            <div className="">
              <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-sm:hidden max-sm:text-lg lg:text-2xl">
                our Models
              </p>
              <p className=" font-regular my-6    text-xl leading-none tracking-tight text-white max-sm:hidden md:text-xl xl:text-5xl">
                ALTIMA Core
              </p>
              <div>
                <div className="max-w-[522px] items-center justify-between bg-[#151515] px-4 py-2 text-black max-sm:w-full max-sm:justify-center md:flex">
                  <ul className="list-inside list-disc">
                    <li className="py-2 text-[#FFFFFF] max-sm:text-center max-sm:text-xs">Advanced Home Control </li>
                    <li className=" text-[#FFFFFF] max-sm:text-center max-sm:text-xs">All Core features, plus:</li>
                  </ul>

                  <p className="text-2xl text-[#FF4F45] max-sm:mt-3 max-sm:text-center max-sm:text-lg">₹30,000</p>
                </div>
              </div>
              <ul className="mt-6 list-inside list-disc pl-2 md:mb-10">
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">12" 4K touchscreen</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Expanded smart home control (security systems)</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Biometric access (fingerprint scanner)</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Two-way audio communication</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Real-time energy optimization</li>
              </ul>

              <ul className="my-6 list-inside list-disc pl-2">
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  Ideal for: Connected home enthusiasts and security-conscious families
                </li>
              </ul>
              <div className="max-sm:flex  max-sm:w-full max-sm:justify-center">
                <motion.a
                  href="/preorder"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular   gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-2 max-sm:text-sm "
                >
                  Pre-Order now
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="other-products" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-10">
          <div className="grid-col-2 grid w-full justify-between max-sm:gap-5 sm:flex  md:gap-20">
            <div className="max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center md:w-[403] ">
              <p className="font-regular  flex    text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">
                our <br className="sm:hidden" />
                Models
              </p>
              <p className=" font-regular my-6  text-xl leading-none tracking-tight text-white max-sm:my-3 md:text-xl xl:text-5xl">
                ALTIMA Elite
              </p>
              <div>
                <div className="flex max-w-[522px] items-center justify-between bg-[#000000] px-4 py-2 text-black max-sm:hidden">
                  <ul className="list-inside list-disc">
                    <li className=" text-[#FFFFFF] max-sm:text-xs">Ultimate Smart Home Hub </li>
                    <li className=" text-[#FFFFFF] max-sm:text-xs">All Pro features, plus</li>
                  </ul>

                  <p className="text-2xl text-[#FF4F45] max-sm:text-lg">₹80,000</p>
                </div>
              </div>
              <ul className="mb-6 mt-6 list-inside list-disc pl-2 max-sm:hidden">
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">15" 4K touchscreen with haptic feedback</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Comprehensive smart home ecosystem control</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Facial recognition and NFC access</li>
                <li className="pb-2  text-[#FFFFFF99] max-sm:text-xs">4K camera with AI-powered motion detection</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Solar-powered backup battery</li>
              </ul>

              {/* <ul className="my-6 list-inside list-disc">
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  Perfect for smart home beginners and tech-savvy home or office owners.
                </li>
              </ul> */}

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="font-regular gap-2  rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:hidden max-sm:py-2 max-sm:text-sm "
                href="/preorder"
              >
                Pre-Order now
              </motion.a>
            </div>
            <div className=" max-sm:hidden">
              <motion.img
                src="/elite.png"
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                width={633}
                height={583}
              />
            </div>
            <div className="md:hidden">
              <motion.img
                src="https://github.com/Dekatron322/altima/blob/main/public/altimaCore.png?raw=true"
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <div className="md:hidden md:w-[403]">
              <div>
                <div className=" w-full items-center justify-center bg-[#000000] px-4 py-4 text-black">
                  <ul className="list-inside list-disc">
                    <li className=" text-center text-[#FFFFFF] max-sm:text-xs">Ultimate Smart Home Hub </li>
                    <li className=" mt-2 text-center text-[#FFFFFF] max-sm:text-xs">All Pro features, plus</li>
                  </ul>

                  <p className="mt-3 text-center text-2xl text-[#FF4F45] max-sm:text-lg">₹80,000</p>
                </div>
              </div>
              <ul className="mb-6 mt-6 list-inside list-disc pl-2">
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">15" 4K touchscreen with haptic feedback</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Comprehensive smart home ecosystem control</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Facial recognition and NFC access</li>
                <li className="pb-2  text-[#FFFFFF99] max-sm:text-xs">4K camera with AI-powered motion detection</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Solar-powered backup battery</li>
              </ul>

              {/* <ul className="my-6 list-inside list-disc">
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  Perfect for smart home beginners and tech-savvy home or office owners.
                </li>
              </ul> */}

              <div className="max-sm:flex  max-sm:w-full max-sm:justify-center">
                <motion.a
                  href="/preorder"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular   gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-2 max-sm:text-sm "
                >
                  Pre-Order now
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="other-products" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between md:py-10">
          <div className="grid-col-2 grid w-full justify-between gap-20 max-sm:gap-5 sm:flex">
            <div className="w-[403]">
              <p className="font-regular flex text-2xl  text-[#FFFFFF99] max-sm:text-lg lg:text-2xl">our Models</p>
              <p className=" font-regular my-6 text-xl leading-none tracking-tight text-white max-sm:my-3 md:text-xl xl:text-5xl">
                ALTIMA Elite
              </p>
              <div>
                <div className="flex items-center justify-between bg-[#000000] px-4 py-2 text-black md:max-w-[522px]">
                  <ul className="list-inside list-disc">
                    <li className="py-2 text-[#FFFFFF] max-sm:text-xs">Ultimate Smart Home Hub </li>
                    <li className=" text-[#FFFFFF] max-sm:text-xs">All Pro features, plus:</li>
                  </ul>

                  <p className="text-2xl text-[#FF4F45] max-sm:text-lg">₹80,000</p>
                </div>
              </div>
              <ul className="mt-6 list-inside list-disc md:mb-10">
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">15" 4K touchscreen with haptic feedback</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Comprehensive smart home ecosystem control</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Facial recognition and NFC access</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">4K camera with AI-powered motion detection</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Solar-powered backup battery</li>
              </ul>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="font-regular   gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-2 max-sm:text-sm "
                href="/preorder"
              >
                Pre-Order now
              </motion.a>
            </div>
            <div>
              <motion.img
                src="https://github.com/Dekatron322/altima/blob/main/public/altimaCore.png?raw=true"
                width={633}
                height={583}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
            </div>
          </div>
        </div>
      </section> */}

      <section id="other-products" className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full     py-10">
          <div className="flex flex-col items-center justify-center">
            <p className="text-[#FFFFFF99] max-sm:text-sm">Pre-order Now – Limited Units Available.</p>
            <p className="font-regular custom-text first-word-color my-6 flex text-center text-5xl text-[#FFFFFF] max-md:text-2xl max-sm:text-xl md:w-[642px]">
              5,000 units available in the first pre-order batch.
            </p>

            <div className="w-full justify-center py-10 md:flex">
              <div className="flex items-start justify-center gap-3 border-[#FFFFFF99] max-sm:border-b max-sm:pb-3 md:border-r md:pr-6">
                <Image src="/SealPercent.png" width={64} height={64} alt="" />
                <div>
                  <p className="text-[#FFFFFF] max-sm:text-sm">20% Discount on Next Model Upgrade:</p>
                  <p className="text-[#FFFFFF99] max-sm:text-xs">
                    Pre-order customers can enjoy a 20% discount when upgrading to the next model tier.
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-center gap-3 border-[#FFFFFF99] max-sm:border-b max-sm:py-3 md:border-r md:pl-6 md:pr-6">
                <Image src="/Upload.png" width={64} height={64} alt="" />
                <div>
                  <p className="text-[#FFFFFF]  max-sm:text-sm">Free Software Upgrade:</p>
                  <p className="text-[#FFFFFF99] max-sm:text-xs">
                    All pre-orders come with a lifetime free software upgrade, ensuring your device remains updated with
                    the latest smart features.
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-center gap-3 max-sm:pt-3 md:pl-6">
                <Image src="/ShieldCheckered.png" width={64} height={64} alt="" />
                <div>
                  <p className="text-[#FFFFFF]  max-sm:text-sm">Free Extended Warranty Upgrade:</p>
                  <p className="text-[#FFFFFF99] max-sm:text-xs">
                    Pre-order now and get an extended warranty upgrade for additional peace of mind, free of charge.
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="font-regular flex  gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-2 max-sm:text-sm"
              href="/preorder"
            >
              Pre-Order now
            </motion.a>
          </div>
        </div>
      </section>

      <section className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-10">
          <div className="grid grid-cols-2  justify-between gap-20 max-sm:grid-cols-1 max-sm:gap-5 ">
            <div className="">
              <p className="font-regular  flex  text-2xl  text-[#FFFFFF99] max-sm:text-lg  lg:text-2xl">Our Vision</p>
              <p className=" font-regular my-6   text-xl leading-none tracking-tight text-white md:text-xl xl:text-5xl">
                The Vision Behind Altima Disappearing Handle Smart Doors
              </p>

              <p className="text-[#FFFFFF99]  max-sm:hidden max-sm:text-xs">
                Altima entryways are more than just doors—they serve as gateways to a smarter, more secure, and
                connected lifestyle. Our disappearing handle smart doors are crafted to seamlessly blend into modern
                spaces, offering cutting-edge technology while maintaining sleek aesthetics. With features like
                biometric security, energy efficiency, and smart home integration, Altima Disappearing Handle Smart
                Doors redefine secure and convenient entryways. Developed by expert engineers and designers, these doors
                meet the highest standards of functionality and design, ensuring safety, style, and innovation for
                every space.
              </p>
            </div>
            <div>
              <motion.img
                src="https://github.com/Dekatron322/altima/blob/main/public/altimaCore.png?raw=true"
                width={633}
                height={583}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
            </div>

            <p className="leading-7  text-[#FFFFFF99] max-sm:text-[14px] sm:hidden">
              Altima entryways are more than just doors—they serve as gateways to a smarter, more secure, and connected
              lifestyle. Our disappearing handle smart doors are crafted to seamlessly blend into modern spaces,
              offering cutting-edge technology while maintaining sleek aesthetics. With features like biometric
              security, energy efficiency, and smart home integration, Altima Disappearing Handle Smart Doors redefine
              secure and convenient entryways. Developed by expert engineers and designers, these doors meet the highest
              standards of functionality and design, ensuring safety, style, and innovation for every space.
            </p>
          </div>
        </div>
      </section>

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full     py-10">
          <div className="flex flex-col items-center justify-center">
            <p className=" text-[#FFFFFF99]">Timeline</p>
            <p className="font-regular my-6 flex text-center text-5xl  text-[#FFFFFF]  max-md:text-2xl md:w-[642px]">
              Production Timeline
            </p>

            <Image src="/changed.png" width={549} height={64} alt="" className="py-10 md:hidden" />
            <Image src="/Frame 48095442 (1).png" width={1216} height={64} alt="" className="py-10 max-sm:hidden" />
          </div>
        </div>
      </section>

      <section className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full     py-10">
          <div className="flex flex-col">
            <p className=" text-[#FFFFFF99]">Faqs</p>
            <p className="font-regular my-5 flex text-center text-5xl  text-[#FFFFFF]  max-md:text-2xl md:w-[642px]">
              what people
              <br />
              are Asking.
            </p>
          </div>

          <div className=" w-full rounded-md border border-[#FFFFFF1A] md:max-w-[90%]">
            {faqData.map((faq, index) => (
              <Accordion key={index} title={faq.title} content={faq.content} />
            ))}
          </div>
        </div>
      </section>

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 " id="contact">
        <div className="  w-full     py-10">
          <div className="flex flex-col  items-center justify-center">
            <p className=" text-center text-[#FFFFFF99]">Contact us</p>
            <p className="font-regular my-6 flex  text-center  text-5xl  text-[#FFFFFF] max-md:text-2xl">
              Have Questions?
            </p>
            <div className="input-field ">
              <input
                type="text"
                id="placement"
                placeholder="Full Name"
                className="bg-transparent  text-xs text-white outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
            </div>

            <div className="input-field my-7">
              <input
                type="text"
                id="placement"
                placeholder="Email"
                className="bg-transparent text-xs  text-white outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
            </div>

            <div className="text-area ">
              <textarea
                id="username"
                placeholder="Case Title"
                className="min-h-[200px] bg-transparent text-xs text-white outline-none focus:outline-none"
                style={{ width: "100%", height: "24px" }}
              ></textarea>
            </div>

            <button className="font-regular mt-7 flex w-[60%] items-center justify-center gap-2  rounded-lg border border-[#FF3B30] bg-[#FF3B30] px-4 py-4 uppercase text-[#FFFFFF] max-sm:w-full ">
              Submit
            </button>
          </div>
        </div>
      </section>

      <MainFooter />

      <Footer />
    </section>
  )
}
