"use client"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect } from "react"
import Accordion from "components/Accordion/Accordion"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"

export default function Web() {


  return (
    <section className="bg-black">
      <Navbar />
      <section id="specifications" className="paddings w-full   bg-[#151515] pt-32 max-sm:px-3 ">
        <div className="  w-full justify-between    pb-10 md:pt-32">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div>
              <p className="font-regular   text-center  text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">
                Important Link
              </p>
              <p className=" my-3 text-center  text-lg font-semibold text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Our Model
              </p>

              <p className="font-regular md:text-cente w-full text-ellipsis text-center text-lg text-[#FFFFFF99] max-sm:leading-7 ">
                Welcome to Altima, where innovation meets security in a smarter, more connected way. We are passionate
                about crafting intelligent solutions for modern living, blending advanced technology with elegant design
                to transform how you experience safety and convenience. Altima is more than just a product—it's a step
                forward in redefining how homes and businesses safeguard their spaces.
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
          <div className="flex w-full flex-col items-center justify-center sm:hidden">
            <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-sm:text-sm lg:text-2xl">Our Models</p>
            <p className=" font-regular mb-6 mt-3    text-xl leading-none tracking-tight text-white md:text-xl xl:text-5xl">
              ALTIMA Core
            </p>
          </div>
          <div className="flex w-full justify-between max-sm:grid max-sm:gap-5  md:gap-20">
            <div>
              <motion.img
                src="/new.png"
                width={645}
                height={555}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
            </div>
            <div className="">
              <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-sm:hidden max-sm:text-lg lg:text-2xl">
                Our Models
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
        <div className="  w-full justify-between    md:py-10">
          <div className="grid-col-2 grid w-full justify-between max-sm:gap-5 sm:flex  md:gap-20">
            <div className="max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center md:w-[403] ">
              <p className="font-regular  flex    text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">Our Models</p>
              <p className=" font-regular my-6  text-xl leading-none tracking-tight text-white max-sm:my-3 md:text-xl xl:text-5xl">
                ALTIMA Elite
              </p>
              <div>
                <div className="flex max-w-[522px] items-center justify-between gap-6 bg-[#000000] px-4 py-2 text-black max-sm:hidden">
                  <ul className="list-inside list-disc">
                    <li className=" text-[#FFFFFF] max-sm:text-xs">Ultimate Smart Home Hub </li>
                    <li className=" text-[#FFFFFF] max-sm:text-xs">All Pro features, plus</li>
                  </ul>

                  <p className="text-2xl text-[#FF4F45] max-sm:text-lg">₹90,000 + Taxes</p>
                </div>
              </div>
              <ul className="mb-6 mt-6 list-inside list-disc pl-2 max-sm:hidden">
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular gap-2  rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:hidden max-sm:py-2 max-sm:text-sm "
                  href="/preorder"
                >
                  Pre-Order now
                </motion.a>
              </div>
            </div>
            <div className=" max-sm:hidden">
              <motion.img
                src="/new.png"
                width={645}
                height={555}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
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
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">15&quot; 4K touchscreen with haptic feedback</li>
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

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 " id="contact">
        <div className="  w-full     py-10">
          <div className="flex flex-col  items-center justify-center">
            <p className=" text-center text-[#FFFFFF99]">Contact us</p>
            <p className="my-6 flex text-center  text-[32px]  font-bold  text-[#FFFFFF] max-md:text-2xl">
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
