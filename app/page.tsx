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

export default function Web() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate elements once
    })
  }, [])
  return (
    <section className="bg-black">
      <Navbar />
      <section id="about" className="about-section grid w-full py-8 max-sm:px-3  lg:h-screen lg:py-16">
        <div className="paddings     pb-10 max-sm:mt-20">
          <div className="flex h-full w-full items-center  max-sm:justify-center max-sm:text-center">
            <div>
              <div className="mb-4 flex items-center justify-center gap-2 rounded-lg bg-[#FFFFFF1A] p-2">
                <Image src="/Vector.png" width={24} height={24} alt="" />
                <p className="text-[#FFFFFF]">POWERED BY INNOVATION FROM SUSMO AND OTHER DRIVES</p>
              </div>
              <p className="  font-regular flex max-w-2xl text-7xl text-[#FFFFFF] ">Revolutionize </p>
              <p className="  font-regular flex max-w-2xl text-7xl text-[#FFFFFF] ">
                Your <span className="ml-10 text-[#FF3B30]"> Entryway</span>
              </p>

              <p className="mt-10 w-[600px] text-xl text-white">
                Experience unparalleled convenience and security with the{" "}
                <span className="text-[#FF3B30]">Disappearing Handle Smart Door,</span> featuring cutting-edge
                technology and sleek design. Perfect for your home, office, hotel, motel, and beyond.
              </p>
              <div className="mt-4 flex gap-5">
                <Link
                  href="#"
                  className="font-regular rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:hidden"
                >
                  Pre-Order now
                </Link>

                <Link
                  href="#"
                  className="font-regular flex  gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:hidden"
                >
                  Watch Video
                  <Image src="/youtube.png" width={24} height={24} alt="" />
                </Link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250" className="">
              {/* You can remove the Image component as it will be used as background */}
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between    py-10">
          <div className="grid-col-2  grid w-full justify-between  sm:flex">
            <div className="w-[403]">
              <p className="font-regular mt-16 flex  max-w-2xl  text-2xl  text-[#FFFFFF99] lg:text-2xl">Benefits</p>
              <p className=" font-regular my-6   max-w-2xl text-xl leading-none tracking-tight text-white md:text-xl xl:text-5xl">
                Why Pre-Order?
              </p>
              <div className="grid grid-cols-2 gap-4 ">
                <div className=" w-full rounded-lg bg-[#080808] p-5">
                  <Image src="/StarHalf.png" width={48} height={48} alt="" />
                  <p className="py-2 text-lg text-white">BE FIRST</p>
                  <p className=" text-sm text-[#FFFFFF99]">
                    Be the first to <br /> experience this <br /> groundbreaking <br /> innovation.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-5">
                  <Image src="/StarHalf.png" width={48} height={48} alt="" />
                  <p className="py-2 text-lg text-white">EXCLUSIVE PRICING</p>
                  <p className=" text-sm text-[#FFFFFF99]">
                    Secure special <br /> introductory pricing <br /> exclusively for pre- <br /> order customers..
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-5">
                  <Image src="/StarHalf.png" width={48} height={48} alt="" />
                  <p className="py-2 text-lg text-white">PRIORITY INSTALLATION</p>
                  <p className=" text-sm text-[#FFFFFF99]">
                    Enjoy priority <br /> installation and be <br /> among the first to have <br /> it set up.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-5">
                  <Image src="/StarHalf.png" width={48} height={48} alt="" />
                  <p className="py-2 text-lg text-white">LIMITED EDITION</p>
                  <p className=" text-sm text-[#FFFFFF99]">
                    The first 100 pre-orders " <br /> receive a limited-edition <br /> Founder's Edition" Altima.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up" // Specify a different animation for this element
              data-aos-duration="1000"
              data-aos-delay="250"
              className=""
            >
              <Image src="/Chip.png" width={671} height={642} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full justify-between    py-10">
          <div className="grid-col-2 grid w-full justify-between gap-10  sm:flex">
            <div>
              <p className="font-regular  flex  max-w-2xl  text-2xl  text-[#FFFFFF99] lg:text-2xl">Our Features</p>
              <p className=" font-regular my-6 max-w-2xl  text-xl leading-10  tracking-tight text-white md:text-xl xl:text-5xl">
                COMPACT AND FUNCTIONAL
              </p>

              <p className="font-regular mb-6  flex  max-w-2xl  text-base  text-[#FFFFFF99] lg:text-base">
                Transform your room with Altima into a minimalist, modern space with ease and speed
              </p>
              <Link
                href="#"
                className="font-regular rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:hidden"
              >
                Pre-Order now
              </Link>
            </div>
            <div className="w-[50%] ">
              <div className="grid grid-cols-2 gap-4 ">
                <div className=" w-full rounded-lg bg-[#FFFFFF0D] px-6 py-10">
                  <Image src="/HouseLine.png" width={60} height={60} alt="" />
                  <p className="py-4 text-lg text-white">Smart Home Hub</p>
                  <p className=" text-sm text-[#FFFFFF99]">
                    Control your entire <br /> smart home ecosystem <br /> directly from your <br /> doorway.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#FFFFFF0D] px-6 py-10">
                  <Image src="/Fingerprint.png" width={60} height={60} alt="" />
                  <p className="py-4 text-lg text-white">ADVANCED SECURITY</p>
                  <p className=" text-sm text-[#FFFFFF99]">
                    Multi-factor <br /> authentication and real- <br /> time monitoring for <br /> unmatched safety.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#FFFFFF0D] px-6 py-10">
                  <Image src="/BatteryCharging.png" width={60} height={60} alt="" />
                  <p className="py-4 text-lg text-white">ENERGY MANAGEMENT</p>
                  <p className=" text-sm text-[#FFFFFF99]">
                    Optimize your home's <br /> climate control for <br /> maximum efficiency.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#FFFFFF0D] px-6 py-10">
                  <Image src="/Aperture.png" width={60} height={60} alt="" />
                  <p className="py-4 text-lg text-white">SLEEK DESIGN</p>
                  <p className=" text-sm text-[#FFFFFF99]">
                    ELEVATE YOUR HOME'S <br /> AESTHETIC WITH OUR <br /> MINIMALIST, CUSTOMIZABLE <br /> DESIGNS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between    py-10">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div>
              <p className="font-regular  flex  text-2xl  text-[#FFFFFF99] lg:text-2xl">Specifications</p>
              <p className=" font-regular my-6   text-xl leading-10   text-white md:text-xl xl:text-5xl">
                Comprehensive Product Specification
              </p>
              <div className="grid w-full rounded-2xl bg-[#080808] p-3">
                <p className="font-regular  flex  px-2  text-2xl text-[#FFFFFF] lg:text-2xl">Product Overview</p>
                <Image src="/video.png" width={1312} height={60} alt="" className="p-2" />
                <p className="text-sm text-white">
                  Altima Door is a state-of-the-art smart door system that integrates advanced technology with home
                  entry. It functions as both a secure entry point and a smart home hub, offering unmatched control,
                  security, and energy management capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full     py-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-regular  mb-6 flex  text-5xl  text-[#FFFFFF] max-md:text-2xl">Modern, Stylish, Unique</p>
            <Link
              href="#"
              className="font-regular flex  gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:hidden"
            >
              Pre-Order now
            </Link>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between    py-10">
          <div className="grid-col-2 grid w-full justify-between gap-20  sm:flex">
            <div className="w-[403]">
              <p className="font-regular  flex  max-w-2xl  text-2xl  text-[#FFFFFF99] lg:text-2xl">our Models</p>
              <p className=" font-regular my-6   max-w-2xl text-xl leading-none tracking-tight text-white md:text-xl xl:text-5xl">
                ALTIMA Core
              </p>
              <div>
                <div className="flex max-w-[522px] items-center justify-between bg-[#000000] px-4 py-2 text-black">
                  <ul className="list-inside list-disc">
                    <li className=" text-[#FFFFFF]">Essential Smart Living</li>
                  </ul>

                  <p className="text-2xl text-[#FF4F45]">₹30,000</p>
                </div>
              </div>
              <ul className="mt-6 list-inside list-disc">
                <li className="pb-2 text-[#FFFFFF99]">10" HD touchscreen</li>
                <li className="pb-2 text-[#FFFFFF99]">Smart home integration (lighting, HVAC, locks)</li>
                <li className="pb-2 text-[#FFFFFF99]">PIN and app-based access control</li>
                <li className="pb-2 text-[#FFFFFF99]">HD camera with night vision</li>
                <li className="pb-2 text-[#FFFFFF99]">Energy monitoring</li>
                <li className="pb-2 text-[#FFFFFF99]">Free standard installation</li>
                <li className=" text-[#FFFFFF99]">3-year warranty</li>
              </ul>

              <ul className="my-6 list-inside list-disc">
                <li className="pb-2 text-[#FFFFFF]">
                  Perfect for smart home beginners and tech-savvy home or office owners.
                </li>
              </ul>

              <Link
                href="#"
                className="font-regular   gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:hidden"
              >
                Pre-Order now
              </Link>
            </div>
            <div
              data-aos="fade-up" // Specify a different animation for this element
              data-aos-duration="1000"
              data-aos-delay="250"
              className=""
            >
              <Image src="/AltimaCore.png" width={633} height={583} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full justify-between    py-10">
          <div className="flex w-full justify-between gap-20  sm:flex">
            <div
              data-aos="fade-up" // Specify a different animation for this element
              data-aos-duration="1000"
              data-aos-delay="250"
              className=""
            >
              <Image src="/AltimaCore.png" width={633} height={583} alt="" />
            </div>
            <div className="">
              <p className="font-regular  flex  max-w-2xl  text-2xl  text-[#FFFFFF99] lg:text-2xl">our Models</p>
              <p className=" font-regular my-6   max-w-2xl text-xl leading-none tracking-tight text-white md:text-xl xl:text-5xl">
                ALTIMA Pro
              </p>
              <div>
                <div className="flex max-w-[522px] items-center justify-between bg-[#151515] px-4 py-2 text-black">
                  <ul className="list-inside list-disc">
                    <li className="pb-2 text-[#FFFFFF]">EAdvanced Home Control</li>
                    <li className=" text-[#FFFFFF]">All Core features, plus:</li>
                  </ul>

                  <p className="text-2xl text-[#FF4F45]">₹50,000</p>
                </div>
              </div>
              <ul className="mt-6 list-inside list-disc">
                <li className="pb-2 text-[#FFFFFF99]">12" 4K touchscreen</li>
                <li className="pb-2 text-[#FFFFFF99]">Expanded smart home control (security systems)</li>
                <li className="pb-2 text-[#FFFFFF99]">Biometric access (fingerprint scanner)</li>
                <li className="pb-2 text-[#FFFFFF99]">HD camera with night vision</li>
                <li className="pb-2 text-[#FFFFFF99]">Two-way audio communication</li>
                <li className="pb-2 text-[#FFFFFF99]">Real-time energy optimization</li>
              </ul>

              <ul className="my-6 list-inside list-disc">
                <li className="pb-2 text-[#FFFFFF]">
                  Ideal for: Connected home enthusiasts and security-conscious families
                </li>
              </ul>

              <Link
                href="#"
                className="font-regular   gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:hidden"
              >
                Pre-Order now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between    py-10">
          <div className="grid-col-2 grid w-full justify-between gap-20  sm:flex">
            <div className="w-[403]">
              <p className="font-regular  flex  max-w-2xl  text-2xl  text-[#FFFFFF99] lg:text-2xl">our Models</p>
              <p className=" font-regular my-6   max-w-2xl text-xl leading-none tracking-tight text-white md:text-xl xl:text-5xl">
                ALTIMA Elite
              </p>
              <div>
                <div className="flex max-w-[522px] items-center justify-between bg-[#000000] px-4 py-2 text-black">
                  <ul className="list-inside list-disc">
                    <li className="py-2 text-[#FFFFFF]">Ultimate Smart Home Hub </li>
                    <li className=" text-[#FFFFFF]">All Pro features, plus:</li>
                  </ul>

                  <p className="text-2xl text-[#FF4F45]">₹80,000</p>
                </div>
              </div>
              <ul className="mb-10 mt-6 list-inside list-disc">
                <li className="pb-2 text-[#FFFFFF99]">15" 4K touchscreen with haptic feedback</li>
                <li className="pb-2 text-[#FFFFFF99]">Comprehensive smart home ecosystem control</li>
                <li className="pb-2 text-[#FFFFFF99]">Facial recognition and NFC access</li>
                <li className="pb-2 text-[#FFFFFF99]">4K camera with AI-powered motion detection</li>
                <li className="pb-2 text-[#FFFFFF99]">Solar-powered backup battery</li>
              </ul>

              <Link
                href="#"
                className="font-regular   gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:hidden"
              >
                Pre-Order now
              </Link>
            </div>
            <div
              data-aos="fade-up" // Specify a different animation for this element
              data-aos-duration="1000"
              data-aos-delay="250"
              className=""
            >
              <Image src="/AltimaCore.png" width={633} height={583} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </section>
  )
}
