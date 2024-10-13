"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "components/Button/Button"
import AuthProviders from "components/ProvidersComponents/AuthProviders"
import { NavLinks } from "utils"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveLink(section.id)
        }
      })

      // Check if the scroll position is greater than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const session = null
  return (
    <nav className={`flexBetween  navbar paddings z-50 items-center ${isScrolled ? "bg-black" : "bg-transparent"}`}>
      <div className="gap-7">
        <Link href="/">
          <Image src="./Altima.svg" width={80} height={43} alt="dekalo" />
        </Link>
      </div>
      <div className="flex items-center gap-14">
        <ul className="text-small hidden gap-14 xl:flex">
          <a
            href="#about"
            className={
              activeLink === "about" ? "font-regular border-b-3 border-[#487b8f]  text-white" : " uppercase text-white"
            }
          >
            HOME
          </a>
          <a
            href="#how-to-buy"
            className={
              activeLink === "how-to-buy"
                ? "font-regular border-b-3 border-[#487b8f]  text-white"
                : " uppercase text-white"
            }
          >
            Product Info
          </a>
          <a
            href="#how-to-buy"
            className={
              activeLink === "how-to-buy"
                ? "font-regular border-b-3 border-[#487b8f]  text-white"
                : " uppercase text-white"
            }
          >
            Specifications
          </a>
          <a
            href="#how-to-buy"
            className={
              activeLink === "how-to-buy"
                ? "font-regular border-b-3 border-[#487b8f]  text-white"
                : " uppercase text-white"
            }
          >
            Contact
          </a>
          <a
            href="#how-to-buy"
            className={
              activeLink === "how-to-buy"
                ? "font-regular border-b-3 border-[#487b8f]  text-white"
                : " uppercase text-white"
            }
          >
            Other Products
          </a>
        </ul>
        <a className={" rounded-lg bg-[#FFFFFF1A] p-2 uppercase text-white"}>Contact Us</a>
      </div>
    </nav>
  )
}

export default Navbar
