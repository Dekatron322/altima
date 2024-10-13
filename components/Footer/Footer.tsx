"use client"
import React, { useEffect } from "react"

import Image from "next/image"
import AuthProviders from "components/ProvidersComponents/AuthProviders"
import AOS from "aos"
import "aos/dist/aos.css"
import Link from "next/link"

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate elements once
    })
  }, [])
  return (
    <>
      <div className="paddings flex w-full flex-col items-center justify-center  bg-[#ffffff] ">
        <div className="flex items-center justify-center  sm:w-[60%]  sm:px-16 ">
          <p className="text-center font-semibold">
            <span className="text-[#487b8f] ">$ALLIN</span> or nothing <br />
            This is the memecoin dream - One Token, Lives Changed! <br /> We do this{" "}
            <span className="text-[#487b8f] ">FOR THE CULTURE</span>
          </p>
        </div>
        <p className="mt-10 font-semibold">© 2024 ALLIN - All Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer
