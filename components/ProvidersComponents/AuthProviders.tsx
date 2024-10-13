import Link from "next/link"
import React from "react"
import { Button } from "components/Button/Button"
import Image from "next/image"

const AuthProviders = () => {
  return (
    <>
      <Link
        target="_blank"
        href="https://t.me/ALLINonsolana"
        className="rounded-lg bg-[#ffffff] px-4 py-1 font-semibold text-[#487b8f] max-sm:hidden"
      >
        JOIN TELEGRAM
      </Link>
      <Link target="_blank" href="https://t.me/ALLINonsolana" className="rounded-lg sm:hidden">
        <Image src="/Telegram.png" height={30} width={30} alt="" />
      </Link>
    </>
  )
}

export default AuthProviders
