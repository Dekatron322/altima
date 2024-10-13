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
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250" className="">
              {/* You can remove the Image component as it will be used as background */}
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="paddings mt-10 w-full bg-[#000000] max-sm:px-3 ">
        <div className=" grid w-full     pb-10">
          <div className="w-full justify-between  sm:flex">
            <div
              data-aos="fade-up" // Specify a different animation for this element
              data-aos-duration="1000"
              data-aos-delay="250"
              className=""
            >
              <Image src="/Pic02.png" width={500} height={700} alt="" />
            </div>
            <div
              data-aos="fade-down" // Specify a different animation for this element
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <h1 className="clash-font someClass mt-16 flex max-w-2xl justify-end text-3xl  font-extrabold  text-[#FFFFFF] lg:text-6xl">
                HOW TO BUY $ALLIN
              </h1>
              <p className="someClass my-6 max-w-2xl text-end  text-xl font-semibold leading-none tracking-tight text-white md:text-xl xl:text-3xl">
                GET A WALLET
              </p>
              <div className="flex w-full justify-end">
                <div className=" h-3 w-3 rounded-full bg-[#487b8f]"></div>
              </div>

              <p className="someClass my-6 max-w-2xl text-end  text-xl font-semibold leading-none tracking-tight text-white md:text-xl xl:text-3xl">
                BUY SOLANA
              </p>
              <div className="flex w-full justify-end">
                <div className=" h-3 w-3 rounded-full bg-[#487b8f]"></div>
              </div>

              <p className="someClass my-6 max-w-2xl text-end  text-xl font-semibold leading-none tracking-tight text-white md:text-xl xl:text-3xl">
                ADD $ALLIN TO YOUR WALLET
              </p>
              <div className="flex w-full justify-end">
                <div className=" h-2 w-20 rounded-full bg-[#487b8f]"></div>
              </div>

              <div className="relative mt-10 flex w-full justify-end">
                <div className="flex w-full flex-col justify-end">
                  <h3 className=" clash-font mb-6 text-end  font-bold text-white max-sm:text-3xl sm:text-3xl">
                    FOLLOW ON SOCIAL MEDIA
                  </h3>
                  <div className="flex justify-end gap-2">
                    <AuthProviders />

                    <Link href="https://x.com/allin_onsol1?s=21&t=4ZQwXy6jS-rHe_Y8pwoF-w" target="_blank">
                      <Image src="/TwitterX.png" height={30} width={30} alt="" />
                    </Link>
                    <Link
                      href="https://dexscreener.com/solana/5scrnfejztxzx3qbqzrpnqhqkgja2ajwfwxlcmrkkxwa"
                      target="_blank"
                    >
                      <Image src="/Dexscreener.png" height={30} width={30} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  )
}
