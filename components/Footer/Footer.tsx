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
      <div className="paddings flex w-full flex-col items-center justify-center  bg-[#080808] ">
        <p className=" font-semibold  text-[#ffffff]">2024 Altima, Inc. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer
