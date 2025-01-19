"use client"
import Footer from "components/Footer/Footer"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import NewNav from "components/Navbar/NewNav"
import ContactUs from "components/ContactUs/Contact"
import ImageCarousel from "components/ImageModal/ImageModal"
import { useRouter } from "next/navigation"

export default function Web() {
  const router = useRouter()
  const handlePreOrderClick = () => {
    const user = localStorage.getItem("user")
    if (user) {
      router.push("/preorder")
    } else {
      router.push("/signin")
    }
  }
  return (
    <section className="bg-black">
      <NewNav />
      <section id="specifications" className="paddings w-full   bg-[#151515] max-xl:px-3 xl:pt-32 ">
        <div className="  w-full justify-between    pb-10 ">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div>
              <p className=" my-3 text-center  text-lg font-semibold text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Our Model
              </p>

              <p className="font-regular md:text-cente w-full text-ellipsis text-center text-lg text-[#FFFFFF99] max-sm:leading-7 ">
                Welcome to Altima, where innovation meets security in a smarter, more connected way. We are passionate
                about crafting intelligent solutions for modern living, blending advanced technology with elegant design
                to transform how you experience safety and convenience. Altima is more than just a product—it&lsquo;s a
                step forward in redefining how homes and businesses safeguard their spaces.
              </p>
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
          <div className="flex w-full flex-col items-center justify-center xl:hidden">
            <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-sm:text-sm lg:text-2xl">Our Models</p>
            <p className=" font-regular mb-6 mt-3    text-xl leading-none tracking-tight text-white md:text-xl xl:text-5xl">
              ALTIMA Core
            </p>
          </div>
          <div className="flex w-full justify-between max-xl:grid max-sm:gap-5  md:gap-20">
            <div className="overflow-hidden rounded-md xl:h-[620px]">
              <motion.video
                src="/WhatsApp Video 2024-12-12 at 15.04.29.mp4"
                className="h-[555px] w-[645px] max-xl:h-full max-xl:w-full"
                autoPlay
                loop
                muted
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
            </div>
            <div className="">
              <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-xl:hidden max-sm:text-lg lg:text-2xl">
                Our Models
              </p>
              <p className=" font-regular my-6    text-xl leading-none tracking-tight text-white max-xl:hidden md:text-xl xl:text-5xl">
                ALTIMA Core
              </p>
              <div>
                <div className="w-[522px] items-center justify-between bg-[#151515] px-4 py-2 text-black max-xl:w-full max-xl:justify-center xl:flex">
                  <ul className="list-inside list-disc">
                    <li className="py-2 text-[#FFFFFF] max-xl:text-center max-sm:text-xs">Advanced Home Control </li>
                  </ul>

                  <p className="text-2xl font-bold text-[#FF4F45] max-xl:text-center max-sm:mt-3 max-sm:text-lg">
                    ₹49,500 + Taxes
                  </p>
                </div>
              </div>
              <ul className="mt-6 list-inside list-disc pl-2 md:mb-4">
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Level:</span> Very High
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Smart Lock Type: </span> Biometric Lock
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Home Integration:</span> Limited
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">User Profiles: </span> Multiple
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Remote Access: </span> Yes
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Design: </span> Sleek and Modern
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Special Features: </span> Emergency Key Override, Auto-Locking
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">External Power Option: </span> Backup Battery
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Voice Assistant Control: </span> No
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Smart Home Automation: </span> No
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Energy Management: </span> No
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Alerts: </span> Basic Alerts
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Intercom Functionality: </span> No
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Level:</span> Very High
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Embedded in Door Types: </span> Metal Only
                </li>
              </ul>

              <div className="flex items-center justify-between bg-[#FFFFFF0D] px-7 py-3">
                <ul className=" list-inside list-disc pl-2">
                  <li className=" text-[#FFFFFF] max-sm:text-xs">Feature Comparison</li>
                </ul>
                <div>
                  <ul className=" flex list-inside list-disc items-center gap-2 pl-2">
                    <li className=" text-[#FFFFFF] underline max-sm:text-xs">Download</li>
                    <motion.img
                      src="/FileArrowDown.png"
                      width={32}
                      height={32}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                  </ul>
                </div>
              </div>
              <div className="mt-8 max-sm:flex  max-sm:w-full max-sm:justify-center">
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
        <div className="  w-full justify-between    xl:py-10">
          <div className="grid-col-2 grid w-full justify-between max-xl:gap-5 xl:flex  xl:gap-20">
            <div className="max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-center max-sm:w-full xl:w-[403] ">
              <p className="font-regular  flex    text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">Our Models</p>
              <p className=" font-regular text-xl  leading-none tracking-tight text-white max-xl:mt-3 md:text-xl xl:my-6 xl:text-5xl">
                ALTIMA Elite
              </p>
              <div>
                <div className="flex max-w-[522px] items-center justify-between gap-6 bg-[#000000] px-4 py-2 text-black max-xl:hidden">
                  <ul className="list-inside list-disc">
                    <li className=" text-[#FFFFFF] max-sm:text-xs">Ultimate Smart Home Hub </li>
                    <li className=" text-[#FFFFFF] max-sm:text-xs">All Pro features, plus</li>
                  </ul>

                  <p className="text-2xl text-[#FF4F45] max-sm:text-lg">₹90,000 + Taxes</p>
                </div>
              </div>
              <ul className="mb-6 mt-6 list-inside list-disc pl-2 max-xl:hidden">
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Level: </span> Very High
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Smart Lock Type: </span> Biometric Lock, Smart Hub
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Home Integration: </span> Extensive
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">User Profiles: </span> Extensive Customization
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Remote Access: </span> Yes
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Design: </span> Sleek and Modern
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Special Features: </span> Smart Home Hub, Analytics
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Target Audience: </span> Smart Home Enthusiasts
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">External Power Option: </span> Smart Home Backup Integration
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Voice Assistant Control: </span> Yes, Alexa & Google Assistant
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Smart Home Automation: </span> Full Integration
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Energy Management: </span> Yes, Smart Energy Monitoring
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Alerts: </span> Real-Time Mobile Alerts
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Intercom Functionality: </span> Built-in Intercom System
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Embedded in Door Types: </span> Metal, Glass, Wood
                </li>
              </ul>

              {/* <ul className="my-6 list-inside list-disc">
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  Perfect for smart home beginners and tech-savvy home or office owners.
                </li>
              </ul> */}

              <div className="flex items-center justify-between bg-[#FFFFFF0D] px-7 py-3 max-xl:hidden">
                <ul className=" list-inside list-disc pl-2">
                  <li className=" text-[#FFFFFF] max-sm:text-xs">Feature Comparison</li>
                </ul>
                <div>
                  <ul className=" flex list-inside list-disc items-center gap-2 pl-2">
                    <li className=" text-[#FFFFFF] underline max-sm:text-xs">Download</li>
                    <motion.img
                      src="/FileArrowDown.png"
                      width={32}
                      height={32}
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular gap-2  rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-xl:hidden max-sm:py-2 max-sm:text-sm "
                  onClick={handlePreOrderClick}
                >
                  Pre-Order now
                </motion.button>
              </div>
            </div>
            <div className=" max-xl:hidden">
              <ImageCarousel />
            </div>
            <div className="xl:hidden">
              <ImageCarousel />
            </div>
            <div className="md:w-[403] xl:hidden">
              <div>
                <div className=" w-full items-center justify-center bg-[#000000] px-4 py-4 text-black">
                  <ul className="list-inside list-disc">
                    <li className=" text-center text-[#FFFFFF] max-sm:text-xs">Ultimate Smart Home Hub </li>
                    <li className=" mt-2 text-center text-[#FFFFFF] max-sm:text-xs">All Pro features, plus</li>
                  </ul>

                  <p className="mt-3 text-center text-2xl text-[#FF4F45] max-sm:text-lg">₹90,000 + Taxes</p>
                </div>
              </div>
              <ul className="mb-6 mt-6 list-inside list-disc pl-2">
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Level: </span> Very High
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Smart Lock Type: </span> Biometric Lock, Smart Hub
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Home Integration: </span> Extensive
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">User Profiles: </span> Extensive Customization
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Remote Access: </span> Yes
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Design: </span> Sleek and Modern
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Special Features: </span> Smart Home Hub, Analytics
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Target Audience: </span> Smart Home Enthusiasts
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">External Power Option: </span> Smart Home Backup Integration
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Voice Assistant Control: </span> Yes, Alexa & Google Assistant
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Smart Home Automation: </span> Full Integration
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Energy Management: </span> Yes, Smart Energy Monitoring
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Alerts: </span> Real-Time Mobile Alerts
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Intercom Functionality: </span> Built-in Intercom System
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Embedded in Door Types: </span> Metal, Glass, Wood
                </li>
              </ul>

              <div className="mb-5 flex items-center justify-between bg-[#FFFFFF0D] px-7 py-3 sm:hidden">
                <ul className=" list-inside list-disc pl-2">
                  <li className=" text-[#FFFFFF] max-sm:text-xs">Feature Comparison</li>
                </ul>
                <div>
                  <ul className=" flex list-inside list-disc items-center gap-2 pl-2">
                    <li className=" text-[#FFFFFF] underline max-sm:text-xs">Download</li>
                    <motion.img
                      src="/FileArrowDown.png"
                      width={32}
                      height={32}
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

              <div className="max-sm:flex  max-sm:w-full max-sm:justify-center">
                <motion.button
                  onClick={handlePreOrderClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular   gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-2 max-sm:text-sm "
                >
                  Pre-Order now
                </motion.button>
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

      <ContactUs />

      <MainFooter />

      <Footer />
    </section>
  )
}
