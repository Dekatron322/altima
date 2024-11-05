"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { RiMenuLine } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

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

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const session = null
  return (
    <>
      <nav
        className={`flexBetween navbar paddings  z-50 items-center  max-md:hidden ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="gap-7">
          <Link href="/">
            <Image src="/Altima.svg" width={80} height={43} alt="dekalo" />
          </Link>
        </div>
        <div className="flex items-center gap-14">
          <ul className="text-small  gap-14 xl:flex">
            <a
              href="#about"
              className={
                activeLink === "about" ? "font-regular border-b-3 border-[#FF3B30]  text-white" : "  text-white"
              }
            >
              Home
            </a>
            <a
              href="#how-to-buy"
              className={
                activeLink === "how-to-buy" ? "font-regular border-b-3 border-[#FF3B30]  text-white" : "  text-white"
              }
            >
              Product Info
            </a>
            <a
              href="#specifications"
              className={
                activeLink === "specifications"
                  ? "font-regular border-b-3 border-[#FF3B30]  text-white"
                  : "  text-white"
              }
            >
              Specifications
            </a>

            <a
              href="#other-products"
              className={
                activeLink === "other-products"
                  ? "font-regular border-b-3 border-[#FF3B30]  text-white"
                  : "  text-white"
              }
            >
              Other Products
            </a>
            <a
              href="#contact"
              className={
                activeLink === "contact" ? "font-regular border-b-3 border-[#FF3B30]  text-white" : "  text-white"
              }
            >
              Contact
            </a>
          </ul>
          <a href="/profile" className={" rounded-lg bg-[#FFFFFF1A] p-2 uppercase text-white"}>
            My Account
          </a>
        </div>
      </nav>
      <nav className="block   px-16 py-4 max-md:px-3 md:hidden">
        <div className="flex items-center justify-between">
          <Link href="/" className=" content-center">
            <Image src="/Altima.svg" width={80} height={80} alt="dekalo" />
          </Link>
          <RiMenuLine className="h-5 w-5 text-white" onClick={toggleNav} style={{ cursor: "pointer" }} />
        </div>

        <div
          ref={navRef}
          className={`fixed left-0 top-0 z-50 h-full w-[250px] bg-[#151515] transition-transform duration-300 ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 pt-6">
            <Image className="" src="/Altima.svg" height={80} width={80} alt="" />
            <RxCross2 className="text-white" onClick={toggleNav} style={{ cursor: "pointer" }} />
          </div>
          <div className="mt-4 flex flex-col items-start gap-5 space-y-2 p-4">
            <a
              onClick={toggleNav}
              href="#about"
              className={
                activeLink === "about" ? "font-regular  border-b-3 border-[#FF3B30]  text-white" : "  text-white"
              }
            >
              Home
            </a>

            <a
              onClick={toggleNav}
              href="#how-to-buy"
              className={
                activeLink === "how-to-buy" ? "font-regular  border-b-3 border-[#FF3B30]  text-white" : "  text-white"
              }
            >
              Product Info
            </a>
            <Link
              onClick={toggleNav}
              href="#specifications"
              className={
                activeLink === "specifications"
                  ? "font-regular  border-b-3 border-[#FF3B30]  text-white"
                  : "  text-white"
              }
            >
              Specifications
            </Link>

            <Link
              onClick={toggleNav}
              href="#other-products"
              className={
                activeLink === "other-products"
                  ? "font-regular  border-b-3 border-[#FF3B30]  text-white"
                  : "e text-white"
              }
            >
              Other Products
            </Link>
            <a
              href="#contact"
              onClick={toggleNav}
              className={
                activeLink === "contact" ? "font-regular  border-b-3 border-[#FF3B30]  text-white" : "  text-white"
              }
            >
              Contact
            </a>

            <a href="/preorder" className={" rounded-lg bg-[#FFFFFF1A] p-2  text-white"}>
              My Account
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
